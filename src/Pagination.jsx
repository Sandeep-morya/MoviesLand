export default function Pagination({page,current,getdata}){
    return (
        <div className="pages">
            <button disabled={current===1} onClick={()=>getdata(current-1)}>Prev</button>
            <button>{current}</button>
            <button disabled={current>=page} onClick={()=>getdata(current+1)}>Next</button>
        </div>
    )
}