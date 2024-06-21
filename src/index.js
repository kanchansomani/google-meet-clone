import ReactDom from "react-dom/client";
import Meetcard from "./components/Meetcard/Meetcard"
import "./style.css"

import student1 from "./components/Meetcard/images/img1.jpg"
import student2 from "./components/Meetcard/images/img2.jpg"
import student3 from "./components/Meetcard/images/img3.jpeg"
import student4 from "./components/Meetcard/images/img4.jpeg"
import student5 from "./components/Meetcard/images/img16.webp"
import student6 from "./components/Meetcard/images/img5.jpg"
import student7 from "./components/Meetcard/images/img7.jpeg"
import student8 from "./components/Meetcard/images/img8.jpeg"
import student9 from "./components/Meetcard/images/img9.avif"
import student10 from "./components/Meetcard/images/img10.webp"
import student11 from "./components/Meetcard/images/img11.webp"
import student12 from "./components/Meetcard/images/img12.avif"
import student13 from "./components/Meetcard/images/img13.jpg"
import student14 from "./components/Meetcard/images/img14.jpg"
import student15 from "./components/Meetcard/images/img15.jpg"
import student16 from "./components/Meetcard/images/img17.jpeg"
import Icons from "./components/Buttons/Buttons";


const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<>

   <div className="component-container">
      <Meetcard
         studentName="Kanchan"
         studentImg={student1}
         micState={true} />

      <Meetcard
         studentName="Deepak"
         studentImg={student2}
         micState={false} />

      <Meetcard
         studentName="Archana"
         studentImg={student3}
         micState={false} />

      <Meetcard
         studentName="Dhanshri"
         studentImg={student4}
         micState={false} />

      <Meetcard
         studentName="Sanjana"
         studentImg={student5}
         micState={false} />

      <Meetcard
         studentName="Divya"
         studentImg={student6}
         micState={true} />

      <Meetcard
         studentName="Rahul"
         studentImg={student7}
         micState={true} />

      <Meetcard
         studentName="Vishal"
         studentImg={student8}
         micState={false} />

      <Meetcard
         studentName="Rekha"
         studentImg={student9}
         micState={true} />

      <Meetcard
         studentName="Gaurav"
         studentImg={student10}
         micState={false} />

      <Meetcard
         studentName="Suraj"
         studentImg={student11}
         micState={true} />

      <Meetcard
         studentName="Sagar"
         studentImg={student12}
         micState={true} />

      <Meetcard
         studentName="Ruturaj"
         studentImg={student13}
         micState={false} />

      <Meetcard
         studentName="Aditya"
         studentImg={student14}
         micState={false} />

      <Meetcard
         studentName="Abhi"
         studentImg={student15}
         micState={true} />

<Meetcard
         studentName="Abhi"
         studentImg={student16}
         micState={true} />

      <div className="component-icon-container">
         <Icons />
      </div>

   </div>
</>)