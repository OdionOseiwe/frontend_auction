import { useContractWrite, usePrepareContractWrite } from 'wagmi'
import {AUCTContract} from '../config'
import {ethers} from "ethers"


const useFunctionWrite = (functionName='', value=0) => {

    const { config } = usePrepareContractWrite({
        ...AUCTContract,
        functionName,
        overrides: {
            value: ethers.utils.parseEther(value.toString()),
          },
      })

    const { data, isError, isLoading, write, writeAsync } = useContractWrite(config)

      return  { data, isError, isLoading, write, writeAsync }
}

export default useFunctionWrite
