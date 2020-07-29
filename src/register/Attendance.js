import React, { useReducer, useEffect } from 'react';

const Attendance = () => {

    const INITIAL_STATE = {
        Attendance: {},
        isAPILoaded: false,
        id: "",
        Date: ""
    }

    const reducer = (state, action) => {
        const { type, data } = action;
        switch (type) {
            case 'Fetch_Data': {
                return {
                    ...state, ...data,
                    isAPILoaded: true
                }
            }
            case 'Update_Items': {
                return {
                    ...state, Attendance: data
                }
            }
            case 'Update_Date': {
                return {
                    ...state, Date: data
                }
            }
            case 'Details_Update': {

                return {
                    ...state, id: data
                }
            }
            default: return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
    var { Attendance, isAPILoaded, id, Date } = state;
    var a = 0;

    useEffect(() => {
        fetch("https://jsonblob.com/api/b1f6d678-bf64-11ea-9e44-2f40f17eaf41").then(response => response.json())
            .then(json => { dispatch({ type: "Fetch_Data", data: { Attendance: { ...json } } }) })
    }, [])

    const handleInput = (e) => {
        Date = e.target.value;
        dispatch({ type: 'Update_Date', data: Date });
    }

    const update = (e, key) => {
        let day = Date.split('-').reverse().join('-');
        Attendance[key]["Dates"][day] = e.target.value;
        if (e.target.value === "Present")
            Attendance[key].isPresent = true
        else
            Attendance[key].isAbsent = true 
        dispatch({ type: 'Update_Items', data: Attendance });
    }
    const submit = () => {
        Date = "";
        Object.keys(Attendance).map((key) => {
            Attendance[key].isAbsent = false;
            Attendance[key].isPresent = false;
            return true;
        })
        dispatch({ type: 'Update_Items', data: Attendance });
        dispatch({ type: 'Update_Date', data: Date });
    }

    const details = (key) => {
        dispatch({ type: 'Details_Update', data: key })
    }

    const Count = (id, key) => {
        if (Attendance[id]["Dates"][key] === "Present")
            a++;
    }  


    return (
        <>
            {
                !isAPILoaded ? (<img src="https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif" alt="Loading..!" />) : (
                    <div className="container">
                        <h3>Daily Attendance of Workers</h3>
                        <div className="form-inline m-3">
                            <label className="mr-3"><b>Select the Date: </b></label>
                            <input type="date" id="date" value={Date} onChange={(e) => handleInput(e)}></input>
                        </div>
                        <div className="row m-2">
                            <div className="col"><b><span className="badge badge-secondary">Name</span></b></div>
                            <div className="col"><b><span className="badge badge-success">Present</span></b></div>
                            <div className="col"><b><span className="badge badge-warning">Absent</span></b></div>
                        </div>
                        {
                            Object.keys(Attendance).map((key, index) => 
                        <div key={index} className="row m-2 border">
                                    <div className="col">
                                        {key}
                                    </div>
                                    <div className="col">
                                        <input className="form-check-input" type="radio" checked={Attendance[key].isPresent} name={index} id="exampleRadios2" onChange={(e) => update(e, key)} value="Present" />
                                    </div>
                                    <div className="col">
                                        <input className="form-check-input" type="radio" name={index} checked={Attendance[key].isAbsent} id="exampleRadios2" onChange={(e) => update(e, key)} value="Absent" />
                                    </div>
                        </div>
                            )}
                        <button type="submit" className="btn btn-primary" onClick={() => submit()}>Submit</button>
                        <p><span className="badge badge-info mt-5 mb-3">Attendance Details</span></p>
                        <p><b>Select the worker you want to view details of:</b></p>
                        <div className="row">
                            <div className="col">
                                <div><b>Name</b></div>
                                <ul style={{ listStyle: "none" }}>
                                    {
                                        Object.keys(Attendance).map((key, index) =>
                                            <li key={index}>
                                                <input type="radio" name="workers" id={index} onClick={() => details(key)} ></input>
                                                <label className="ml-2" htmlFor={index}>{key}</label>
                                            </li>
                                        )}
                                </ul>
                            </div>
                            {
                                !id ? (<div><span className="badge badge-primary">Select a Worker to view Details</span></div>) : (
                                <div className="col">
                                    <div className="row m-2">
                                        <div className="col"><b>Date</b></div>
                                        <div className="col"><b>Present/Absent</b></div>
                                    </div>
                                    {
                                        Object.keys(Attendance[id]["Dates"]).map((key, index) =>
                                            <div key={index} className="row border">
                                                <div className="col">{key}</div>
                                                <div className="col">{Attendance[id]["Dates"][key]}</div>
                                                {Count(id, key)}
                                            </div>
                                        )
                                    }
                                </div>
                            )}
                        </div>
                        <div className="mt-2"><b>Number of Days Present till date : </b>{a}</div> 
                    </div>
                )
            }
        </>
    );
}

export default Attendance; 