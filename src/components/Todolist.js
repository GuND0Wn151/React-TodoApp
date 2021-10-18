import React, { useState } from 'react'
import './todolist.css'
import 'font-awesome/css/font-awesome.min.css';
function Todolist() {
      
      let tododata = React.createRef();
      const [todolist, settodolist] = useState([])
      
      const [todoid, setid] = useState(0)
      const pushdata=()=>{
            if (tododata.current.value !==""){
            todolist.push({
                  data:tododata.current.value,
                  id:todoid
            });}
            console.log(todolist);
            setid(todoid+1);
            const k=document.getElementById("hmm")
            k.value=""
            console.log({todolist})
      }
      const removedata=(todo)=>{
            console.log(todo);
            settodolist(todolist.filter((el)=>el.id!==todo.id));
            
      }
      const showdata=todolist.map((todo,index)=>{
            return(
                  <div key={todo.id} className="removelist">
                       <h4>{todo.data} </h4> 
                       <button className="fa fa-trash" onClick={()=>removedata(todo)} ></button>
                  </div>
            );
      })

      return (
            <>
            <div className="container">
                  <div className='inputbox' >
                        <div  className='inputt'>
                        <div><input ref={tododata} id="hmm"  type="text" /></div>
                        <div><button class="fa fa-plus" onClick={pushdata}></button></div>
                        </div>
                  </div>
                  <div className="container">
                        {showdata}
                  </div>
            </div>
            </>
      )
}

export default Todolist
