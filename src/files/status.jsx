
export default function Status({status}){
    if(status=='online'){
        return <p className="font-bold text-green-500">online</p>
    }else if(status=='offline'){
        return <p className="font-bold text-red-500">Offline</p>
    }else if(status == 'busy'){
        return <p className="font-bold text-[#000000]">Busy</p>
    }
}