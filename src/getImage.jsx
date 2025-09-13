
export default function GetImage({person,IMAGE_ID,IMAGE_SIZE}){
    return(<>
        <div className="max-w-[250px] border rounded-[5px] flex flex-col p-[10px] items-center">
            <img className="rounded-[10px]" src={`https://picsum.photos/id/${IMAGE_ID}/${IMAGE_SIZE}/${IMAGE_SIZE}`} alt="Profile Picture" />
            <h1 className="text-2xl font-medium text-center">{person.name} {person.lastname}</h1>
            <p className="text-sm font-light">{person.email}</p>
        </div>
    </>)
}