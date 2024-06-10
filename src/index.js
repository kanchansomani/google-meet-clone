import ReactDom from "react-dom/client";
import Meetcard from "./components/Meetcard/Meetcard"
import "./style.css"

import student1 from "./components/Meetcard/image/img1.webp"
import student2 from "./components/Meetcard/image/img2.jpg"
import student3 from "./components/Meetcard/image/img3.jpg"
import student4 from "./components/Meetcard/image/img4.avif"
import student5 from "./components/Meetcard/image/img5.jpg"
import student6 from "./components/Meetcard/image/img6.jpg"
import student7 from "./components/Meetcard/image/img7.jpeg"
import student8 from "./components/Meetcard/image/img8.jpeg"
import student9 from "./components/Meetcard/image/img9.avif"
import student10 from "./components/Meetcard/image/img10.webp"
import student11 from "./components/Meetcard/image/img11.webp"
import student12 from "./components/Meetcard/image/img12.avif"
import student13 from "./components/Meetcard/image/img13.jpg"
import student14 from "./components/Meetcard/image/img14.jpg"
import student15 from "./components/Meetcard/image/img15.jpg"

import Icons from "./components/Buttons/Buttons";



const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<>

   <div className="component-container">
      <Meetcard
         studentName="Mahie"
         studentImg={student1}
         micState={true} />

      <Meetcard
         studentName="Rajat"
         studentImg={student2}
         micState={false} />

      <Meetcard
         studentName="Mrunmyi"
         studentImg={student3}
         micState={false} />

      <Meetcard
         studentName="Atharva"
         studentImg={student4}
         micState={false} />

      <Meetcard
         studentName="Raj"
         studentImg={student5}
         micState={false} />

      <Meetcard
         studentName="Sima"
         studentImg={student6}
         micState={true} />

      <Meetcard
         studentName="Rahul"
         studentImg={student7}
         micState={true} />

      <Meetcard
         studentName="Ram"
         studentImg={student8}
         micState={false} />

      <Meetcard
         studentName="Vaibhavi"
         studentImg={student9}
         micState={true} />

      <Meetcard
         studentName="Aray"
         studentImg={student10}
         micState={false} />

      <Meetcard
         studentName="Subodh"
         studentImg={student11}
         micState={true} />

      <Meetcard
         studentName="Saileh"
         studentImg={student12}
         micState={true} />

      <Meetcard
         studentName="Sahil"
         studentImg={student13}
         micState={false} />

      <Meetcard
         studentName="Aditya"
         studentImg={student14}
         micState={false} />

      <Meetcard
         studentName="Chirag"
         studentImg={student15}
         micState={true} />

      <div className="component-icon-container">
         <Icons />
      </div>

   </div>
</>)