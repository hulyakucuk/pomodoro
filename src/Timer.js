import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PauseButton from './PauseButton';
import PlayButton from './PlayButton';
import SettingsButton from './SettingsButton';
import { useContext,useState,useEffect } from 'react';
import SettingsContext from './SettingsContext';

const lilac="#b99cd6";

function Timer() {
    const settingsInfo = useContext(SettingsContext);
    const [isPaused,setIsPaused] = useState(true);
    



    
    return(
        <div>
           <CircularProgressbar value={60} text={`${60}%`}
           styles={buildStyles({rotation:"5",strokeLinecap:"any" ,
           textColor:"#fff",
           pathColor:lilac,
           tailColor:"rgba(255,255,255,.2)",

           
           })} />

           <div style={{marginTop:"20px"}}>
            {isPaused ? <PlayButton /> :   <PauseButton />}

         
           </div>
        <div style={{marginTop:"20px"}}>
        <SettingsButton onClick={() => settingsInfo.setShowSettings(true)} />
        </div>
            </div>

        );
}

export default Timer;