import React, { useReducer, useEffect } from 'react';
import './Todo.css'

const Todo = () => {

    const INITIAL_STATE = {
        todo:{},
        isAPILoaded:false,
        work:""
    }

    const reducer = (state,action) => {
        const { type,data } = action;
        switch(type) {
            case 'Fetch_Data':{
                return{
                    ...state,...data,
                    isAPILoaded: true
                }
            }
            case 'Input_Data':{
                return{
                    ...state,work: data
                }
            }
            case 'Update_Data':{
                return{
                    ...state,...data
                }
            }
            case 'Delete_Data':{
                return{
                    ...state,...data
                }
            }
            default:
                 return state
            }
        }

    const [state,dispatch] = useReducer(reducer,INITIAL_STATE);
    const {todo,isAPILoaded,work} = state;
    

    useEffect(() => {
        fetch('https://jsonblob.com/api/10382969-b8ec-11ea-bfa3-653d285c3e15').then(response => response.json())
        .then(json => { dispatch({ type: 'Fetch_Data', data: { todo : {...json} } } )})
    },[]);

    const Update = () => {
       todo.do.push(work);
       dispatch({type:"Update_Data",data:todo});
       document.getElementById("work").value = "";
    }

    const Delete = (i) => {
        console.log(i);
        todo.do.splice(i,0);
        dispatch({type:"Delete_Data",data:todo});
    }

    return(
      <>
      {
           !isAPILoaded ? (<img src="https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif" alt="Loading"/>) : (
            <div className="container">
                <form>
                    <label>Add Works that are to be done</label>
                    <input type="text" className="form-control" id = "work" onChange={(e) => {dispatch({ type: 'Input_Data', data: e.target.value})}}></input>
                    <button className="btn-primary" onClick={(e) => {e.preventDefault();Update()}}>Submit</button>
                </form>
                <div><b>Works that are yet to be done..!</b></div>
                { todo.do.map((item,index) => 
                   <div class="alert alert-primary alert-dismissible fade show" role="alert">
                  {item}
                   <button type="button" class="close" data-dismiss="alert" aria-label="Close" onClick={() => Delete(index)}>
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

export default Todo;