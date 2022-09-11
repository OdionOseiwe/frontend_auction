import Header from "./header";
import { ReactNode } from "react";
import Footer from "./footer"

interface Iprops {
  children:ReactNode;
}

const  Mainlayout=({children}:Iprops)=>{
  //  const {children} = props;
    return(<>
        <Header />
          {children}
        <Footer/> 
    </>
     
    )
}

export default Mainlayout;