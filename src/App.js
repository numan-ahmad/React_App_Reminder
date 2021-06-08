import './App.css';
import React, { useState } from "react";
import Reminder from "./add_reminder";



const App = ()=>{
  const [item,setitem]=useState("");
  const [itemss, setitems]=useState([]);

  
  const eventitem = (event) =>{
    setitem(event.target.value);
 };
 const listitem = () =>{
  setitems((olditems)=>{
    return [...olditems,item]
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
        <button onClick={listitem}>Click On</button>
  </div>

</div>

</>
  );
};

export default App;
