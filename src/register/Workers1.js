import React, { useState,useEffect } from 'react';

const Workers1 = () => {

    const [Workers,setWorkers] = useState([]);
    const [isAPILoaded,setisAPILoaded] = useState(false);
    const [Amount,setAmount] = useState(0);

    useEffect(() => {
        console.log("effect fn");
        fetch('https://jsonblob.com/api/0bc19914-b0a9-11ea-affd-3dab909c9896').then(response => response.json()).then(json => {
            setWorkers([...json]);
            setisAPILoaded(true);
        })
      }, []);
 
      const handleInput = (e,index) => {
           setAmount(Workers[index].spent + parseInt(e.target.value));
      }; 

      const addEntry = (i) => {
            console.log(i);
            setWorkers([...Workers.slice(0,i),{...Workers[i],spent:Amount},...Workers.slice(i+1)]);
            document.getElementById(`newEntry${i}`).value = "";
            // document.getElementById("myForm").reset();
      };

    return(
       <>
       {
        !isAPILoaded ? (<img src="https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif" alt="Loading" />) : (
          <div className="container">
            {Workers.map(({ name, salary, balance, spent }, index) =>
              <div>
                <div id="accordion">
                  <div class="card">
                    <div class="card-header" id={`heading${index}`}>
                      <h5 class="mb-0">
                        <button class="btn btn-link float-left" data-toggle="collapse" data-target={`#collapse${index}`} aria-expanded="false" aria-controls={`collapse${index}`}>
                          {name}
                        </button>
                      </h5>
                    </div>

                    <div id={`collapse${index}`} class="collapse" aria-labelledby={`heading${index}`} data-parent="#accordion">
                      <div class="card-body">
                        <div className="row">
                          <div className="col">
                            <ul style={{ listStyle: "none" }} className="float-left">
                              <li className="mt-2"><span class="badge badge-success mr-2">Salary :</span>Rs.{salary.toLocaleString()}</li>
                              <li className="mt-2"><span class="badge badge-danger mr-2">Spent :</span>Rs.{spent.toLocaleString()}</li>
                              <li className="mt-2"><span class="badge badge-warning mr-2">Balance :</span>Rs.{(salary - spent).toLocaleString()}</li>
                            </ul>
                          </div>
                          <div className="col">
                            {/* <form id = "myForm">
                              <div class="form-group"> */}
                                <label for="newEntry" className="float-left">New Entry</label>
                                <input type="number" class="form-control" id={`newEntry${index}`} onChange={(e) => handleInput(e,index)} placeholder="Amount took"  />
                                <button type="button" class="btn btn-primary float-left mt-2" onClick={(e) => {e.preventDefault();addEntry(index)}}>ADD</button>
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