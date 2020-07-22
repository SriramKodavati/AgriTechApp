import React, { useState,useEffect } from 'react';

const Workers1 = () => {

    const [Workers,setWorkers] = useState([]);
    const [isAPILoaded,setisAPILoaded] = useState(false);
    const [Amount,setAmount] = useState(0);

    useEffect(() => {
        fetch('https://jsonblob.com/api/0bc19914-b0a9-11ea-affd-3dab909c9896').then(response => response.json()).then(json => {
            setWorkers([...json]);
            setisAPILoaded(true);
        })
      }, []);
 
      const handleInput = (e,index) => {
           setAmount(Workers[index].spent + parseInt(e.target.value));
      }; 

      const addEntry = (i) => {
            setWorkers([...Workers.slice(0,i),{...Workers[i],spent:Amount},...Workers.slice(i+1)]);
            document.getElementById(`newEntry${i}`).value = "";
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
                            {/* <form id = "myForm">
                              <div className="form-group"> */}
                                <label htmlFor="newEntry" className="float-left">New Entry</label>
                                <input type="number" className="form-control" id={`newEntry${index}`} onChange={(e) => handleInput(e,index)} placeholder="Amount took"  />
                                <button type="button" className="btn btn-primary float-left mt-2" onClick={(e) => {e.preventDefault();addEntry(index)}}>ADD</button>
                              {/* </div>
                            </form> */}
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