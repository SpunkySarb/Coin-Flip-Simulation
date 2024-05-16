/**author:Sarbjeet Singh, contact:https://www.sarbzone.com*/

import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";







const Layout:React.FC<{children:ReactNode}> = ({children})=>{
return(<div>
    <Header/>
 {children}
 <Footer/>
</div>);


}
export default Layout;
