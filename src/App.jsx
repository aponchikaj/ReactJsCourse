import Greeting from "./files/greeting"
import Btn from "./files/button"
import Card from "./files/usercard"
import Warning from "./files/warnings"
import Check from "./files/checkAuth"
import Cart from "./files/cart"
import Status from "./files/status"
import User from "./files/user"
import Todo from "./files/todo"

import Profile from "./files_day1/profile"
import Foods from "./files_day1/foods"
import Greet from "./files_day1/DayGreet"

import { useState } from "react"

export default function App(){
  // return(<>
  //   <Greeting name={'Lazare'} />
  // </>)
  // return(
  //   <>
  //     <Btn color={'red'} label={'Click me'}/>
  //   </>
  // )
  // return <Card username={'LazaresoBased'} age={15} profilePic={'https://picsum.photos/id/237/200/300'}/>

  // return <Warning type={'success'} />

  // return <Check isLogged={true} />

  // return <Cart />

  // return(
  //   <>
  //     <div className="flex flex-col items-center justify-center text-center">
  //       <h1>Lazare Mirziashvili</h1>
  //       <p className="flex">status: <Status status={'online'}/></p>
  //     </div>
  //   </>
  // );

  // return(<>
  //   <User username={'LazareSoBased'} age={15} status={'online'} hasPremium={true} friends={['Sita','Gita']} />
  // </>)

  // const people = [
  //   'Creola Katherine Johnson: mathematician',
  //   'Mario José Molina-Pasquel Henríquez: chemist',
  //   'Mohammad Abdus Salam: physicist',
  //   'Percy Lavon Julian: chemist',
  //   'Subrahmanyan Chandrasekhar: astrophysicist'
  // ];

  // const listItms = people.map((p)=><li>{p}</li>)
  // return <ul>{listItms}</ul>;

  // const people = [{
  //   id: 0,
  //   name: 'Creola Katherine Johnson',
  //   profession: 'mathematician',
  // }, {
  //   id: 1,
  //   name: 'Mario José Molina-Pasquel Henríquez',
  //   profession: 'chemist',
  // }, {
  //   id: 2,
  //   name: 'Mohammad Abdus Salam',
  //   profession: 'physicist',
  // }, {
  //   id: 3,
  //   name: 'Percy Lavon Julian',
  //   profession: 'chemist',  
  // }, {
  //   id: 4,
  //   name: 'Subrahmanyan Chandrasekhar',
  //   profession: 'astrophysicist',
  // }];

  // const chosenPeople = people.filter(p=>p.profession=='chemist')
  // const sortedPpl = chosenPeople.map(p=><li>{p.name}</li>)
  // return (<>
  //   <ul>
  //     <li>{sortedPpl}</li>
  //   </ul>
  // </>);

  // return <Todo todos={['Kill Predator n1','kill rapist n2']}/>

  // return(<>
  //   <main className="w-full h-screen flex items-center justify-center"  >
  //     <Profile name={'Lazare'} lastname={'Mirziashvili'} age={15} status={'online'} PictureID={120} />
  //   </main>
  // </>);

  // return(<Foods />)

  // return(<Greet day={'night'}/>)

  // let [i,set_i] = useState(0)

  // function increase(){
  //     set_i(i+1)
  // }

  // function decrease(){
  //   set_i(i-1)
  // }

  // return(<>
  //   <main className="w-full h-screen flex flex-col items-center justify-center">
  //     <h1 className="text-2xl ">{i}</h1>
  //     <ul className="flex gap-10">
  //       <button onClick={increase} className="text-2xl font-bold bg-[#000000] text-white rounded-[5px] p-[10px]">+</button>
  //       <button onClick={decrease} className="text-2xl font-bold bg-[#000000] text-white rounded-[5px] p-[10px]">-</button>
  //     </ul>
  //   </main>
  // </>)

  

}