/**author:Sarbjeet Singh, contact:https://www.sarbzone.com*/

import { ExperimentOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";







const Rules:React.FC = ()=>{

    const [modal, contextHolder] = Modal.useModal();

    const showRules = ()=>{
        modal.info({title:'Rules of Coin Flip Simulation', content:<ol>
        <li>Anyone who gets a Tail Vanishes.</li>
        <li>Anyone keeps getting a Heads Stays.</li> 
     </ol>, icon:<div style={{marginRight:5}}><ExperimentOutlined /> </div>})
    }
   

return(<>
{contextHolder}
<div style={{fontFamily:'monospace', margin:10, display:'flex', justifyContent:'center'}}>
   <Button style={{width:window.innerWidth<700?"100%":"5vw"}} onClick={showRules}>Rules</Button>
</div></>);


}
export default Rules;
