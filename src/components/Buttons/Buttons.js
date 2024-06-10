import "./Button.css"
import MicIcon from "./icons/mic-icon.png"
import VideoCallIcon from "./icons/video-camera-icon.png"
import HandRaiseIcon from "./icons/hand-icon.png"
import ScreenShareIcon from "./icons/screen-share-icon.png"
import MoreOptionIcon from "./icons/more-icon.png"
import EndCallIcon from "./icons/end-call-icon.png"


 


const Icons = () =>{
    return(
        <>
       <div className="icon-container">
       <img src={MicIcon} className="meet-icons"/>
       <img src={VideoCallIcon} className="meet-icons"/>
       <img src={HandRaiseIcon} className="meet-icons"/>
       <img src={ScreenShareIcon} className="meet-icons"/>
       <img src={MoreOptionIcon} className="meet-icons"/>
       <img src={EndCallIcon} className="end-call-icon"/>
        
       </div>
        </>
    )
}
export default Icons


