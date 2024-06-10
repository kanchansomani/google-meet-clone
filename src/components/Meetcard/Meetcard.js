import "./Meetcard.css"
import MicOn from "./icons/mic-on.png"
import MicOff from "./icons/mic-off.png"


const Meetcard = ({studentName,studentImg, micState }) => {
   return (
      <>
      <div className="card-container">
         <img src={micState ? MicOn : MicOff} className="mic-button"/>
         <img src={studentImg}className="student-image"/>
         { <p className="student-name">{studentName}</p> }
      </div>
      </>

      
   )
}

export default Meetcard






// const About = () => {
//    return (
//    <>
//    <Navbar/>
//    <h1 className="page-heading">
//        About Page
//    </h1>
//    </>   
// )
// }

// // export default About;