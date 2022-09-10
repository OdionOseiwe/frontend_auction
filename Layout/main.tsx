import Header from "./header";
import { ReactNode } from "react";

interface Iprops {
  children:ReactNode;
}

const  Mainlayout=({children}:Iprops)=>{
  //  const {children} = props;
    return(<>
        <Header />
         {children}
         footer
    </>
     
    )
}

export default Mainlayout;