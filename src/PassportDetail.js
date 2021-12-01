import Hd from "./Hd";
import Data from "./Data";
function PassportDetail(){
    var dn=[ 
        'Passport No',
        'Data of Issue',
        'Date of Expire',
        'Place of Issue',
    ];
    var dd=[ 
        'EB2743552',
        '21/06/2016',
        '20/06/2026',
        'PAKISTAN',
    ];
return(
    <>
    <Hd hname='PASSPORT DETAIL'/>
    {dn.map((n,i)=>(<Data n={n} d={dd[i]}/>))}
    </>
)
}export default PassportDetail;