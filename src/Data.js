function Data(p){
    return(
        <div style={{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            width:'500px',
            fontSize:'18px',
        }}>
            <div style={{
                width:'150px'
            }}>{p.n}</div>
            :
            <div style={{
                width:'300px',
                textAlign:'left'
            }}>{p.d}</div>
        </div>
    )
}export default Data;