
export default function Warning({type}){
    let CONTENT = ''
    if (type=='warning') {
        CONTENT = (<p className="text-yellow-500">WARNING !</p>)
    }else if(type=='error'){
        CONTENT = <p className="text-red-500">ERROR !</p>
    }else{
        CONTENT = <p className="text-green-500 ">SUCCESS !</p>
    }
    return(<>
        <main className="w-full h-screen flex items-center justify-center font-bold ">
            <p>{CONTENT}</p>
        </main>
    </>)
}