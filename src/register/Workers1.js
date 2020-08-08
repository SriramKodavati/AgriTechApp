import React, { useState,useEffect } from 'react';

const Workers1 = () => {

    const [Workers,setWorkers] = useState([]);
    const [isAPILoaded,setisAPILoaded] = useState(false);
    const [Input, setInput] = useState("");
    const [isValid, setisValid] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch('https://jsonblob.com/api/0bc19914-b0a9-11ea-affd-3dab909c9896').then(response => response.json()).then(json => {
            setWorkers([...json]);
            setisAPILoaded(true);
        })
      }, []);
 
    const handleInput = (e) => {
      let amount = parseInt(e.target.value); 
      if(amount !== 0)
      {
         setInput(amount); 
        setisValid(true);
      }
      }; 

    const addEntry = (i) => {
      if(isValid === false)
        setError("Amount cannot be Empty");
      else{
          setWorkers([...Workers.slice(0, i), { ...Workers[i], spent: Workers[i].spent+Input }, ...Workers.slice(i + 1)]);
          setInput("");
          setError("");
          setisValid(false);
      }
      };

    return(
       <>
       {
        !isAPILoaded ? (<img src="https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif" alt="Loading" />) : (
          <div className="container">
            {Workers.map(({ name, salary, balance, spent }, index) =>
              <div key = { index }>
                <div id="accordion">
                  <div className="card">
                    <div className="card-header" id={`heading${index}`}>
                      <h5 className="mb-0">
                        <button className="btn btn-link float-left" data-toggle="collapse" data-target={`#collapse${index}`} aria-expanded="false" aria-controls={`collapse${index}`}>
                          {name}
                        </button>
                      </h5>
                    </div>

                    <div id={`collapse${index}`} className="collapse" aria-labelledby={`heading${index}`} data-parent="#accordion">
                      <div className="card-body">
                        <div className="row">
                          <div className="col">
                            <ul style={{ listStyle: "none" }} className="float-left">
                              <li className="mt-2"><span className="badge badge-success mr-2">Salary :</span>Rs.{salary.toLocaleString()}</li>
                              <li className="mt-2"><span className="badge badge-danger mr-2">Spent :</span>Rs.{spent.toLocaleString()}</li>
                              <li className="mt-2"><span className="badge badge-warning mr-2">Balance :</span>Rs.{(salary - spent).toLocaleString()}</li>
                            </ul>
                          </div>
                          <div className="col">
                                            <label htmlFor="newEntry" className="float-left">New Entry</label>
                                            <input type="number" className="form-control" id={`newEntry${index}`} value={Input} onChange={(e) => handleInput(e)} placeholder="Amount took" />
                                            {(!isValid)?<div style = {{color: "red"}}>{error}</div>:""}
                                <button type="button" className="btn btn-primary float-left mt-2" onClick={(e) => {e.preventDefault();addEntry(index)}}>ADD</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )
      }
       </>
    );   
}

export default Workers1;