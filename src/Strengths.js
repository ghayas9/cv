import Hd from "./Hd";
function Strenghts(){

    var dn=[ 
        'Good Knowledge of communication',
        'Able to work under pressures',
        'Good health condition',
    ];
return(
    <>
    <Hd hname="STRENGHTS"/>
    <ul style={{fontSize:'18px'}}>
    {dn.map((n,i)=>(<li style={{fontSize:'18px'}}>{n}</li>))}
    </ul>
    </>
)
}export default Strenghts;