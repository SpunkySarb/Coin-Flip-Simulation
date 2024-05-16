/**author:Sarbjeet Singh, contact:https://www.sarbzone.com*/
import { useEffect, useState } from 'react';
import Rules from './Rules';
import SetParticipants from './SetParticipants';
import classes from './Simulation.module.css';
import { Button } from 'antd';
import { RightCircleOutlined } from '@ant-design/icons';
import Participant from '../Model/Coin';
import ParticipantInField from './ParticipantInField';






const Simulation:React.FC = ()=>{

const [participantNumber, setParticipantNumber] = useState(1000);
const [iterations, setIterations] = useState(0);
const [participants, setParticipants] = useState<Participant[]>([]);
const [disableInput, setInputDisability] = useState(false);


useEffect(()=>{

    const participants:Participant[] = [];
    for(let i=1; i<=participantNumber; i++){
        const participant = new Participant(i);
        participants.push(participant);
        
    }
    setParticipants(participants);



},[participantNumber]);



const proceedSimulation = () => {
if(!disableInput)setInputDisability(true);

const outcomeResult = participants.map((i)=>{i.flipCoin(); return i;});
setIterations(prev=>prev+1);

setParticipants(outcomeResult);





}


return(<div>
 <div className={classes.actions}>
    <Rules/>
    <SetParticipants disability={disableInput} spitParticipants={(p)=>{setParticipantNumber(p)}} />
    <Button onClick={proceedSimulation} type='primary'>{iterations===0?'START':"NEXT"} <RightCircleOutlined /></Button>
    {!(iterations===0) && <div style={{display:'flex', marginRight:10, marginTop:window.innerWidth<700?10:0, marginLeft:10, padding:8, backgroundColor:'black', color:'white', width:10, height:10, justifyContent:'center', alignItems:'center', borderRadius:10}}>{iterations}</div>}
 </div>

<div style={{display:'flex', flexDirection:'row', flexWrap:'wrap', margin:10}}>


{participants.map((i)=>{return <ParticipantInField key={i.participantID} outcome={i.outcome} />})}

</div>


<div style={{marginTop:200}}></div>
</div>);


}
export default Simulation;
