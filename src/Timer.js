import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PauseButton from './PauseButton';
import PlayButton from './PlayButton';
import SettingButton from './SettingsButton';
import { useContext,useState,useEffect } from 'react';
import SettingsContext from './SettingsContext';

const red="#f54e4e";

function Timer() {
    const settingsInfo = useContext(SettingsContext);
    const [isPaused,setIsPaused] = useState(false);
    
 

    
    return(
        <div>
           <CircularProgressbar value={60} text={`${60}%`}
           styles={buildStyles({rotation:"5",strokeLinecap:"any" ,
           textColor:"#fff",
           pathColor:red,
           tailColor:"rgba(255,255,255,.2)",

           
           })} />

           <div style={{marginTop:"20px"}}>
            {isPaused ? <PlayButton />:   <PauseButton />}

         
           </div>
        <div style={{marginTop:"20px"}}>
        <SettingButton onClick={() => settingsInfo.setShowSettings(true)} />
        </div>
            </div>

        );
}

export default Timer;