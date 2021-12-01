import Hd from "./Hd";
import Data from "./Data";
function LicenseDetail(){
    var dn=[ 
        'Licence No',
        'Place of Issue',
        'Issue Date',
        'Expire Date',
        'License Type',
    ];
    var dd=[ 
        '2223546',
        'Abu Dhabi',
        '15/04/2015',
        '14/04/2025',
        'Heavy Bus',
    ];
return(
    <>
    <Hd hname='LICENSE DETAIL'/>
    {dn.map((n,i)=>(<Data n={n} d={dd[i]}/>))}
    </>
)
}export default LicenseDetail;