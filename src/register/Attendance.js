import React, { useReducer, useEffect } from 'react'

const Attendance = () => {

    const INITIAL_STATE = {
        Attendance : {},
        isAPILoaded : false,
        id : "krishna"
    }

    const reducer = (state,action) => {
        const { type,data } = action;
        switch(type) {
            case 'Fetch_Data': {
                return{
                    ...state, ...data,
                    isAPILoaded: true
                }
            }
            case 'Update_Items': {
                return{
                    ...state, Attendance: data
                }
            }
            case 'Details_Update':{
                
                return{
                    ...state,id: data
                }
            }
            default: return state; 
        }
    }

    const [state,dispatch] = useReducer(reducer,INITIAL_STATE);
    const { Attendance, isAPILoaded } = state;

    useEffect(() =>{
         fetch("https://jsonblob.com/api/b1f6d678-bf64-11ea-9e44-2f40f17eaf41").then(response => response.json())
         .then(json => {dispatch({ type:"Fetch_Data", data: { Attendance: {...json} } }) })
    },[])

    const update = (e,key) => {
        var a = document.getElementById("date").value;
        a = a.split('-').reverse().join('-');
        Attendance[key][a] = e.target.value;
    }

    const submit = () => {
        dispatch({type: 'Update_Items', data : Attendance});
        document.getElementById("data").value = "";
    }

    const details = (key) => {
        dispatch({ type: 'Details_Update', data: key})
        console.log(state);
    }

    return(
    <>
    {
        !isAPILoaded ? (<img src="https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif" alt="Loading..!" />):(
        <div className = "container">
            <h3>Daily Attendance of Workers</h3>
            <div className = "form-inline m-3">
                <label className = "mr-3"><b>Select the Date: </b></label>
                <input type = "date" id = "date"></input>
            </div>
            <div className = "row m-2">
                <div className = "col"><b><span className = "badge badge-secondary">Name</span></b></div>
                <div className = "col"><b><span className = "badge badge-success">Present</span></b></div>
                <div className = "col"><b><span className = "badge badge-warning">Absent</span></b></div>
            </div>
        {
            Object.keys(Attendance).map((key, index) =>
            <div className = "row m-2 border">
                <div className = "col">
                      {key}
                    </div>
                <div className = "col"> 
                <input class="form-check-input" type="radio" name={index} id="exampleRadios2" onChange = {(e) => update(e,key)} value="Present"/>
                      </div>
                <div className = "col"> 
                <input class="form-check-input" type="radio" name={index} id="exampleRadios2" onChange = {(e) => update(e,key)} value="Absent"/>
                      </div>
                </div>
              )
            }
            <button type = "submit"  className = "btn btn-primary" onClick = { () => submit() }>Submit</button>
            <p><span className = "badge badge-info mt-5 mb-3">Attendance Details</span></p>
           <p><b>Select the worker you want to view details of:</b></p>
            <div className = "row">
                <div className = "col">
                    <div><b>Name</b></div>
                    <ul style = {{listStyle : "none"}}>
                {
                  Object.keys(Attendance).map((key,index) =>
                  <li>
                  <input type = "radio" name="workers" id = {index} onClick = { () => details(key)} ></input> 
                  <label className = "ml-2" for = {index}>{key}</label>
                </li>
                   ) }
                   </ul>
                   </div>
                   <div className = "col">
                     <div className = "row m-2">
                         <div className = "col"><b>Date</b></div>
                         <div className = "col"><b>Present/Absent</b></div>
                     </div>
                    {
                        Object.keys(Attendance[state.id]).map((key) =>
                        <div className = "row border">
                            <div className = "col">{key}</div>
                            <div className = "col">{Attendance[state.id][key]}</div>
                            </div>
                        )
                    }
                   </div>
            </div>
        </div>
        )
    }
    </>
    );
}

export default Attendance;