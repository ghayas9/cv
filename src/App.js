import Title from "./Title";
import NandD from "./NandD";
import Objectivedetail from "./Objectivedetail";
import PersonalDetail from "./PersonalDetail";
import PassportDetail from "./PassportDetail";
import LicenseDetail from "./LicenseDetail";
import Strenghts from "./Strengths";
import Exprience from "./Exprience";
import Declaration from "./Declaration";

import jsPDF from "jspdf";
import {html2canvas} from "html2canvas";


function App(){

    function download() {
        const input=document.getElementById('cv');
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image.PNG');
            const pdf = new jsPDF();
            pdf.addImage(imgData, 'JPEG', 0, 0);
            // pdf.output('dataurlnewwindow');
            pdf.save("download.pdf");
          });
      }

    return(
        <>
        <div class='cv' style={{
           border:'5px solid black',
           padding:'10px 50px 0px 50px',
           with:'2480px',
        }}
        
        id='cv'
        >
            <Title/>
            <NandD/>
            <Objectivedetail/>
            <PersonalDetail/>
            <PassportDetail/>
            <LicenseDetail/>
            <Strenghts/>
            <Exprience/>
            <Declaration/>
            <div style={{
        textAlign:'center',
     }}>
         <h1 style={{
        color:'red',
        display:'inline-block',
        fontFamily:'Berlin Sans FB Demi',
        fontSize:'30px',
        marginBottom:'0px'
        
    }}>SALIMULLAH SAIFULLAH</h1>
     </div>

        </div>

        <button onClick={download}>Download</button>
        
        </>
    )
}export default App;


function view(){
    return(
        <div class='cv' style={{
            border:'5px solid black',
            padding:'10px 50px 0px 50px',
            with:'2480px',
         }}>
             <Title/>
             <NandD/>
             <Objectivedetail/>
             <PersonalDetail/>
             <PassportDetail/>
             <LicenseDetail/>
             <Strenghts/>
             <Exprience/>
             <Declaration/>
             <div style={{
         textAlign:'center',
      }}>
          <h1 style={{
         color:'red',
         display:'inline-block',
         fontFamily:'Berlin Sans FB Demi',
         fontSize:'30px',
         marginBottom:'0px'
         
     }}>SALIMULLAH SAIFULLAH</h1>
      </div>
 
         </div>
    )
}