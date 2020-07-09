import React, { useState,useEffect } from 'react'
import './Tobacco1.css'

const Tobacco1 = () => {

    const [Tobacco,setTobacco] = useState({});
    const [isAPILoaded,setisAPILoaded] = useState(false);
    const [Debit,setDebit] = useState({
        reason:"",
        amount:0
    })

    useEffect(() => {
        console.log("effect fn")
        fetch("https://jsonblob.com/api/bb51641f-9cd2-11ea-9a4c-2fff4269ce0f").then(response => response.json())
            .then(json => {
                setTobacco({...json});
                setisAPILoaded(true);
            })
    }, []);

    const handleInput = (e) => {
        const { value, id } = e.target;
        setDebit({...Debit,[id]:value})
    }

    const addEntry = () => {
        console.log(Debit);
        setTobacco({...Tobacco,exp:[...exp,Debit]});
        document.getElementById("reason").value = "";
        document.getElementById("amount").value = "";
    }

    const { acres,own,rented,budget,exp} = Tobacco;
    return(
        <>
        {
            !isAPILoaded ? (<img src="https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif" alt="Loading" />) : (
                <div className="container">
                    <h4 className="color:blue;">Tobacco</h4>
                    <ul style={{listStyle:"none"}}>
                        <li><b>No of Acres:  </b>{acres}</li>
                        <li><b>Own Land:  </b>{own}</li>
                        <li><b>Rented Land:  </b>{rented}</li>
                        <li><b>Estimated Expense:  </b>{budget} Lakhs</li>
                    </ul>
                <b>Add Day-to-Day Expenditure here: </b>
                <form>
                    <label><b>Purpose</b></label>
                <input type="text" class="form-control" onChange={(e) => handleInput(e)} id="reason" placeholder="Enter the Purpose"></input>
            <label><b>Amount</b></label>
            <input type="number" className="form-control" onChange={(e) => handleInput(e)} id="amount" placeholder="Enter the Amount"></input>
            <button class="btn btn-primary m-3" type="button" onClick={() => addEntry()}>ADD</button>
                </form>
                    <b className="mb-3">Expenses:-</b>
                            <div className="row mt-3">
                            <div className="col"><b><span className="badge badge-success">Purpose</span></b></div>
                        <div className="col"><b><span className="badge badge-info">Amount(Rs.)</span></b></div>
                        </div>
                    {exp.map((item, index) =>
                        <div>
                           <div className="row mt-4 border borde-success">
                                <div className="col">{item.reason}</div>
                                <div className="col">{(item.amount).toLocaleString()}</div>
                            </div>
                        </div>
                    )}
                    <div>
                        <div className="p-3"><b>Total investment till Date:  </b>{(exp.reduce((total,item) => total + parseInt(item.amount),0)).toLocaleString()}</div>
                    </div>
                    {console.log("hai")}
                </div>
            )}
    </>

    );
}

export default Tobacco1;