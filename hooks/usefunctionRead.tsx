import { useContractRead} from 'wagmi'
import {AUCTContract} from '../config'

const useFunctionReads=(functionName = '')=>{
    //@ts-ignore
    const  {data , isError, isloading} = useContractRead({
        ...AUCTContract,
        functionName,
    })

    return{data, isError, isloading};
}


export default useFunctionReads;