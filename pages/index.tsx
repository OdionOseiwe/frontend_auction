import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import RightArrow from '../components/commons/RightArrow'
import useFunctionReads from '../hooks/usefunctionRead'
import { useAccount, useContractRead } from 'wagmi'



const Home: NextPage = () => { 
  const {data:started, isError, isloading} = useFunctionReads("started");
  console.log(started, isError, isloading);
  const {data:ended} = useFunctionReads("ended");
  const {data:ownerAddress} = useFunctionReads("owner");
  console.log(ownerAddress, "owner address");
  const {address} = useAccount();
  console.log(address ,"current address");

  const isAdmin = ownerAddress === address ? true : false;

  const statusButton =() =>{
    if(isloading){
      return(
        <div>
          <h4>{isloading}</h4>
        </div>
      )
    }
    if (isError) {
      return(
        <div>
          <h4>{isError}</h4>
        </div>
      )
    }
    if(isAdmin === true && !started){
      return(
        <div className='m-4'>
          <button className='border bg-slate-500 rounded-none p-3'> start auction  
          {/* <RightArrow />  */}
          </button>
        </div>
      )
    }
    if (started && !ended) {
      return(
        <div className='m-4'>
          <button className='border bg-slate-500 rounded-none p-3'> in progress  
          {/* <RightArrow />  */}
          </button>
        </div>
      )
    }
    if (!started && !isAdmin) {
      return(
        <div className='m-4'>
          <button className='border bg-slate-500 rounded-none p-3'> has not started  
          {/* <RightArrow />  */}
          </button>
        </div>
      )
    }
    if (ended) {
      return(
        <div className='m-4'>
          <button className='border bg-slate-500 rounded-none p-3'> has  ended 
          {/* <RightArrow />  */}
          </button>
        </div>
      )
    }
  }
  
  return (
    <div className="grid grid-cols-1 justify-between w-9/12 mx-auto lg:grid-cols-2">
        <div className='flex-1'>
           <Image src="https://source.unsplash.com/random/?productivity,city" width={700} height={500}/>
        </div>
        <div className='flex-1 bg-slate-800 p-2 text-center ' > 
          {statusButton()}
          <div className='mt-4'>
            <span>highest bid:</span>
            <span className='mx-1 text-2xl text-red-500'>3:00</span>
            <span>ETH</span>
          </div>
          <form action="" className='mt-4'>
            <input type="text" placeholder='enter your bid' className='p-3 border-x-2' />
            <div>
            <button className='text-2xl bg-gray-600 p-2 mt-4 border-0 bg'>place bid</button>
          </div>
          </form>         
        </div>
    </div>
  )
}

export default Home
