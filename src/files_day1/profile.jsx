
export default function Profile({name,lastname,age,PictureID,status}){
    const PICTURE_BASEURL = 'https://picsum.photos/'
    return(<>
        <div className="w-[250px] flex flex-col h-auto p-[10px] items-center justify-center text-center border rounded-[10px] hover:shadow-xl/40 ease-in-out duration-200">
            <img src={PICTURE_BASEURL+PictureID} alt="picture" className="rounded-[100%] w-[100px] h-[100px] my-[10px]" />
            <h1 className="font-medium text-2xl">{name} {lastname}</h1>
            <p className="font-bold">{age}</p>
            <p>{status=='online'?<div className="flex items-center"><div className="rounded-[100%] w-[10px] h-[10px] bg-green-500 mx-[10px]"></div> Online</div>:<div className="flex items-center"><div className="rounded-[100%] w-[10px] h-[10px] bg-[#000000] mx-[10px]"> Offline</div></div>}</p>
        </div>
    </>)

}