
export default function User({username,age,status,hasPremium,friends}){
    return(
        <>
            <div className="flex flex-col items-center justify-center items-center text-center" >
                <h1>{username}</h1>
                <p>age:{age}</p>
                {status=='online'?<p className="text-green-500">Online</p>:<p className="text-[#000000]">Offline</p>}
                {hasPremium?<p>Premium User</p>:<p>Limited user.</p>}
                {friends.length>1?<p>{friends}</p>:<p>Doesn't have friends.</p>}
            </div>
        </>
    )
}