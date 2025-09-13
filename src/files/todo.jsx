
export default function Todo({todos = []}){
    let filtered;
    if(todos.length<1){
        return <><h1>No Todos Today.</h1></>
    }else{
        filtered = todos.map(t=><li >{t}</li>)
    }

    return(<>
        <ul>
            {filtered}
        </ul>
    </>)
}