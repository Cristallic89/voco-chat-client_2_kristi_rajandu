import {useState} from 'react';
import './App.css';

function App() {
    const [name, setName] = useState("dummy user");
    const [chats, setChats] = useState([
        {name:'user1',message:'message1' },
        {name:'dummyUser',message:'message2' },
        ]);
    const [msg,setMsg] = useState('');

    const sendChat = ()=>{
        const c = [...chats];
        c.push({name,message:msg});
        setChats(c);
    }

  return (
   <div className="kutsekas">

     <h1>KHK: {name}</h1>
       <div className="chat-container">
           {chats.map((c)=> (
               <div className={`container ${c.name===name ? 'me': ''}`}>
               <p className="chatbox">
                   <strong>{c.name}: </strong>
                   <span>{c.message}</span>
               </p>
           </div>
           ))}
       </div>

       <div className="btm">
           {<div>
               <input type="text" placeholder="  Enter name" onBlur={e => setName(e.target.value)}>

               </input>
           </div>}
           <input type="text" onInput={e=>setMsg(e.target.value)} value={msg}
            placeholder=" Enter your chat"></input>

           <button onClick={e=>sendChat()}>Send</button>


       </div>
   </div>
  );
}

export default App;
