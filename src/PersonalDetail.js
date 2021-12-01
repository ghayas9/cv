import Hd from "./Hd";
import Data from "./Data";
function PersonalDetail(){
    var dn=[ 
        'Name         ',
        'Date of Birth',
        'Marital State',
        'Nationality  ',
        'Religien     ',
        'Language     '
    ];
    var dd=[ 
        'SALIMULLAH SAIFULLAH',
        '05/02/1989',
        'Married',
        'Pakistan',
        'Muslim',
        'Urdu,Arabic,English,AND Pashto'
    ];
return(
    <>
    <Hd hname='PERSONAL DETAIL'/>
    {dn.map((n,i)=>(<Data n={n} d={dd[i]}/>))}
    </>
)
}export default PersonalDetail;