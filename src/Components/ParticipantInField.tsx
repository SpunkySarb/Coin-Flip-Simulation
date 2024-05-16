/**author:Sarbjeet Singh, contact:https://www.sarbzone.com*/

import { CloseCircleOutlined, SmileOutlined } from "@ant-design/icons";
import {motion} from 'framer-motion';






const ParticipantInField:React.FC<{outcome:"heads"|"tails"}> = ({outcome})=>{

    if(outcome==='tails'){
        return <motion.div animate={{x:[0,5,5,5,0,5,5,5,0], color:['#eb4034','#080808','#080808','#eb4034']}} style={{color:'red', margin:5, fontSize:20}}>
           <CloseCircleOutlined /> 
        </motion.div>
    }

return(<motion.div  style={{color:'blue', margin:5, fontSize:20}}>
 <SmileOutlined />
</motion.div>);


}
export default ParticipantInField;
