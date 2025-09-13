
export default function Check({isLogged}){
    let CONTENT = ''
    if(isLogged){
        CONTENT = <p className="text-green-500 font-bold">Welcome Back</p>
    }else{
        CONTENT = <p className="text-red-500 font-bold">Who are you ??</p>
    }

    return <>
        <p>{CONTENT}</p>
    </>
}