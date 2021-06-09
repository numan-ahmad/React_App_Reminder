import './App.css';
import React, { useState, useEffect } from "react";
import Reminder from "./add_reminder";

// const padTime = time => {
//   return `${time}`;
// };

// const format = time => {
//   const seconds = time % 60;

//   //Return combined values as string in format mm:ss
//   return `${padTime(seconds)}`;
// };



const App = ()=>{

  const [seconds, setSecond] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(()=>{
    console.log('first render', seconds);
    if(isRunning){
      const id= window.setInterval(()=>{
        console.log('tick', seconds);
        setSecond(seconds => seconds+1);
      },1000);
      return () => window.clearInterval(id);
    }
  }, [isRunning]);


  // const [counter, setCounter] = useState(30);
  // useEffect(() => {
  //   let timer;
  //   if (counter > 0) {
  //     timer = setTimeout(() => setCounter(c => c - 1), 1000);
  //   }

  //   return () => {
  //     if (timer) {
  //       clearTimeout(timer);
  //     }
  //   };
  // }, [counter]);


  const [item,setitem]=useState("");
  const [itemss, setitems]=useState([]);

  
  const eventitem = (event) =>{
    setitem(event.target.value);
 };
 const listitem = () =>{
  setitems((olditems)=>{
    return [...olditems,item];
  });
  setitem("");
};
const deleteitem = (id) =>{
  setitems((olditems)=>{
    return olditems.filter((arrElem,index)=>{
      return index !== id;

    });
  });
};
const put_false= () => {
  setIsRunning(true);
  listitem();
}
  return(

<>
<div className="container">
  <div className="reminder">  <h1>Reminder</h1>
  <ol>
       
       {itemss.map((itemval,index)=>{
         return <Reminder 
           key={index}
           id={index}
           text={itemval}
           
           onSelect={deleteitem}
         />;
       })}
     </ol></div>

  <div className="btn_input">
  <input type="text" placeholder="Add a Reminder" value={item} onChange={eventitem} />

        <button onClick={put_false}>Click On</button>
  </div>
  <div className="App">
  <div className='time'>
          {`Count Down : ${seconds}`}
        </div>
        

      </div>

  {/* <div className="App">
        {counter === 0 ? "Time up" : <div>Countdown: {format(counter)}</div>}
      </div> */}
      
</div>

</>
  );
};

export default App;
