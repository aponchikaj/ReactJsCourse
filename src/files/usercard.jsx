
export default function Card({username,age,profilePic}){
    return(<>
        <div className="rounded-[5px] p-[10px] flex flex-col rounded items-center justify-center">
            <img src={profilePic} alt="Profilepic" className="rounded-[100%] w-[75px] h-[75px]" />
            <h1 className="text-2xl font-medium text-center">{username}</h1>
            <p className="text-md font-bold">{age}</p>
        </div>
    </>)
}