import React, { useState,useEffect } from 'react'
import './Tobacco1.css'

const Crops = ({name}) => {

    const [Crops,setCrops] = useState({});
    const [isAPILoaded,setisAPILoaded] = useState(false);
    const [Debit, setDebit] = useState({
        op:false,
        reason: "",
        amount: ""
    });

    useEffect(() => {
        if(name === "Tobacco")
        {
        fetch("https://jsonblob.com/api/bb51641f-9cd2-11ea-9a4c-2fff4269ce0f").then(response => response.json())
            .then(json => {
                initializeState(json);
            })
        }
        if( name === "Paddy")
        {
            fetch("https://jsonblob.com/api/feafbb19-bc70-11ea-8cae-c59a19998da5").then(response => response.json())
            .then(json => {
                initializeState(json);
            })
        }
    },[]);

    const initializeState = (json) => {
          setCrops({...json});
          setisAPILoaded(true);
    } 

    const handleInput = (e) => {
        const { value, id } = e.target;
        setDebit({ ...Debit, [id]: value });
        console.log(Debit);
    }

    const addEntry = () => {
        setCrops({ ...Crops, exp: [...exp, Debit] });
        setDebit({
            reason: "",
            amount: ""
        });
    }

    const { acres,own,rented,budget,exp, inputs} = Crops;
    return(
        <>
        {
                !isAPILoaded ? (<img src="https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif" alt="Loading" />) : (
                <div className="container">
                    <h4 className="color:blue;">{name}</h4>
                    <ul style={{listStyle:"none"}}>
                        <li><b>No of Acres:  </b>{acres}</li>
                        <li><b>Own Land:  </b>{own}</li>
                        <li><b>Rented Land:  </b>{rented}</li>
                        <li><b>Estimated Expense:  </b>{budget} Lakhs</li>
                    </ul>
                <b>Add Day-to-Day Expenditure here: </b>
                <form>
                    <label><b>Purpose</b></label>
                    <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <select id="reason" onChange={(e) => handleInput(e)}>
                                        {inputs.map((item,index)=>
                                        <option key = {index} value={item} {(Debit.op)?(Selected):("")}>{item}</option>
                                        )}
                                    </select>
  </div>
  <input type="text" className="form-control" value={Debit.reason} onChange={(e) => handleInput(e)} id="reason" placeholder="Enter the Purpose"></input>
                            </div>
                            <label><b>Amount</b></label>
                            <input type="number" className="form-control" value={Debit.amount} onChange={(e) => handleInput(e)} id="amount" placeholder="Enter the Amount"></input>
            <button className="btn btn-primary m-3" type="button" onClick={() => addEntry()}>ADD</button>
                </form>
                    <b className="mb-3">Expenses:-</b>
                            <div className="row mt-3">
                            <div className="col"><b><span className="badge badge-success">Purpose</span></b></div>
                        <div className="col"><b><span className="badge badge-info">Amount(Rs.)</span></b></div>
                        </div>
                    {exp.map((item, index) =>
                        <div key = {index}>
                           <div className="row mt-4 border borde-success">
                                <div className="col">{item.reason}</div>
                                <div className="col">{(item.amount).toLocaleString()}</div>
                            </div>
                        </div>
                    )}
                    <div>
                        <div className="p-3"><b>Total investment till Date:  </b>{(exp.reduce((total,item) => total + parseInt(item.amount),0)).toLocaleString()}</div>
                    </div>
                </div>
            )}
    </>

    );
}

export default Crops;