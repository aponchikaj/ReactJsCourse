import GetImage from "./getImage";
export default function App(){
  let IMGID = Math.floor(Math.random()*(300-2)+2)
  console.log(IMGID)
  const USERSETTINGS = {
    name:'Lazare',
    lastname:'Mirziashvili',
    email:'lazaremirziashvili8@gmail.com'
  }
  return(<>
    <div className="w-full h-screen flex flex-col items-center justify-center"> 
    <h1 className="my-[10px] text-2xl font-thin" >User settings with random id profile pic {IMGID}</h1>
    <GetImage person={USERSETTINGS} IMAGE_ID={IMGID} IMAGE_SIZE={200}></GetImage>
    </div>
  </>);
}