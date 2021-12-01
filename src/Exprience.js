import Hd from "./Hd";
function Exprience(){
    var dn=[ 
        'I have 6 years Experience as a heavy Bus Driver in Al Dar Transport',
    ];
return(
    <>
    <Hd hname="EXPRIENCE"/>
    <div>
        <ul >
        {dn.map((n,i)=>(<li style={{fontSize:'18px'}} >{n}</li>))}
        </ul>
    </div>
    </>
)
}export default Exprience;