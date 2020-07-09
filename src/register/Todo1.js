import React, { useState, useEffect } from 'react'

const Todo1 = () => {

    const [Todo,setTodo] = useState({});
    const [isAPILoaded,setisAPILoaded] = useState(false);
    const [Work,setWork] = useState("");

    useEffect(() => {
        fetch('https://jsonblob.com/api/10382969-b8ec-11ea-bfa3-653d285c3e15').then(response => response.json())
        .then(json => {
            setTodo({...json});
            setisAPILoaded(true);
        })
    },[]);

    const handleInput = (e) => {
        const { value } = e.target;
        setWork(value);
    }

    const Update = () => {
        console.log(Work)
        console.log(Todo);
        setTodo({...todo,do:[...do,work]})
    }
     
    const {do} = Todo;

    return(
        <>
           {
           !isAPILoaded ? (<img src="https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif" />) : (
            <div>
                <form>
                    <label>Add Works that are to be done</label>
                    <input type="text" className="form-control" onChange={(e) => handleInput(e)}></input>
                    <button className="btn-primary" onClick={(e) => {e.preventDefault(); Update()}}>Submit</button>
                </form>
                <div><b>Works that are yet to be done..!</b></div>
                { Todo.do.map((item) => 
                   <div class="alert alert-primary alert-dismissible fade show" role="alert">
                  {item}
                   <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                     <span aria-hidden="true">&times;</span>
                   </button>
                 </div>
                )}
            </div>
           )
      }

        </>
    );
}

export default Todo1;