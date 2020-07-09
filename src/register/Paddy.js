import React, { useState,useEffect } from 'react'

const Paddy = () => {

    const [Paddy,setPaddy] = useState({});
    const [isAPILoaded,setisAPILoaded] = useState(false);
    const [Debit,setDebit] = useState({
        reason:"",
        amount:0
    })

    useEffect(() => {
        console.log("effect fn")
        fetch("https://jsonblob.com/api/feafbb19-bc70-11ea-8cae-c59a19998da5").then(response => response.json())
            .then(json => {
                setPaddy({...json});
                setisAPILoaded(true);
            })
    }, []);

    const handleInput = (e) => {
        const { value, id } = e.target;
        setDebit({...Debit,[id]:value})
    }

    const addEntry = () => {
        console.log(Debit);
        setPaddy({...Paddy,exp:[...exp,Debit]})
        document.getElementById("reason").value = "";
        document.getElementById("amount").value = "";
    }


    const { acres,own,rented,budget,exp} = Paddy;
    return(
        <>
        {
            !isAPILoaded ? (<img src="https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif" alt="Loading" />) : (
                <div className="container">
                    <h4 className="color:blue;">Paddy</h4>
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
                        <div className="p-3 "><b>Total investment till Date:  </b>{(exp.reduce((total,item) => total + parseInt(item.amount),0)).toLocaleString()}</div>
                    </div>
                    {console.log("hai")}
                </div>
            )}
    </>

    );
}

export default Paddy;