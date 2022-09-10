import ConnectBtn from "../components/Connetbutton";

const Header=()=>{
    return(
    <> 
        <div className="flex items-center justify-between p-6">
            <p className="p-2 bg-orange-700 text-3xl rounded-sm">Auction Dapp</p>

            <div className=" ">
                <ConnectBtn />
            </div>
        </div>
    </>  
    )
}
export default Header;