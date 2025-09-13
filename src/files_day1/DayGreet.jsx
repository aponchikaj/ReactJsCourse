
export default function Greet({day}){
    if(day=='morning'){
        return(<>
            <p>Good Morning.</p>
        </>)
    }else {
        return(<>
            <p>Good {day}</p>
        </>)
    }
}