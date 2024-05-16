/**author:Sarbjeet Singh, contact:https://www.sarbzone.com*/

import { DollarOutlined } from "@ant-design/icons";
import { Input } from "antd";







const SetParticipants:React.FC<{spitParticipants:(participants:number)=>void; disability:boolean}> = ({spitParticipants, disability})=>{




return(<div style={{display:'flex', padding:10, justifyContent:'center', alignItems:'center', maxWidth:500,}}>
 <Input disabled={disability} onChange={(e)=>{spitParticipants(+e.target.value);}} addonBefore={<DollarOutlined />} defaultValue={1000} style={{}} type="number"/>
</div>);


}
export default SetParticipants;
