import Classes from "./Learning/classes";
import arrFunctions from "./Learning/arrowFunctions";
export default function App(){
  return(
    <>
      {/* For Classes
      <main className="w-full h-screen flex items-center justify-center">
        <h1 className="text-[40px] font-light ">{Classes()}</h1>
      </main> */}
      <main>
        {arrFunctions()}
      </main>
    </>
  )
}