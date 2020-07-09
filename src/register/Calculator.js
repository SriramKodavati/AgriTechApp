import React from 'react';

const Calculator = () => {

    var x = "";

    const Clear = () => {
        document.getElementById("input1").value = "";
    }

    const Solve = () => {
        var equation = document.getElementById("input1").value;
		var answer = eval(equation);
		document.getElementById("input1").value += "=" + answer;
    }

    const Value = () => {
        document.getElementById("input1").value += x;
	}
	
	

    return(
      <>
      <div className="modal fade" id="#calc">
          <div className="modal-content">
        <div class="card" style={{width:'300px'}}>
								<form>
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-xs-8">
                                                <div class="form-group">
                                                    <input class="form-control" type="text" id="input1" value="" placeholder="Enter the Number"/>
                                                </div>
                                            </div>
                                            <div class="col-xs-4 ml-1">
                                                <button type="button" class="btn btn-success" onclick={() => Clear()}>C</button>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-xs-3">
                                                <button class="btn btn-primary" type="button" value="1"
                                                    onclick="value1('1')">1</button>
                                            </div>
                                            <div class="col-xs-3 ml-4">
                                                <button class="btn btn-primary" type="button" value="2"
                                                    onclick="value1('2')">2</button>
                                            </div>
                                            <div class="col-xs-3 ml-4">
                                                <button class="btn btn-primary" type="button" value="3"
                                                    onclick="value1('3')">3</button>
                                            </div>
                                            <div class="col-xs-3 ml-4">
                                                <button class="btn btn-success" type="button" value="/"
                                                    onclick="value1('/')">/</button>
                                            </div>
                                        </div>
                                        <div class="row mt-3">
                                            <div class="col-xs-3">
                                                <button class="btn btn-primary" type="button" value="4"
                                                    onclick="value1('4')">4</button>
                                            </div>
                                            <div class="col-xs-3 ml-4">
                                                <button class="btn btn-primary" type="button" value="5"
                                                    onclick="value1('5')">5</button>
                                            </div>
                                            <div class="col-xs-3 ml-4">
                                                <button class="btn btn-primary" type="button" value="6"
                                                    onclick="value1('6')">6</button>
                                            </div>
                                            <div class="col-xs-3 ml-4">
                                                <button class="btn btn-success" type="button" value="*"
                                                    onclick="value1('*')">*</button>
                                            </div>
                                        </div>
                                        <div class="row mt-3">
                                            <div class="col-xs-3">
                                                <button class="btn btn-primary" type="button" value="7"
                                                    onclick="value1('7')">7</button>
                                            </div>
                                            <div class="col-xs-3 ml-4">
                                                <button class="btn btn-primary" type="button" value="8"
                                                    onclick="value1('8')">8</button>
                                            </div>
                                            <div class="col-xs-3 ml-4">
                                                <button class="btn btn-primary" type="button" value="9"
                                                    onclick="value1('9')">9</button>
                                            </div>
                                            <div class="col-xs-3 ml-4">
                                                <button class="btn btn-success" type="button" value="+"
                                                    onclick="value1('+')">+</button>
                                            </div>
                                        </div>
                                        <div class="row mt-3">
                                            <div class="col-xs-3">
                                                <button class="btn btn-primary" type="button" value="."
                                                    onclick="value1('.')">.</button>
                                            </div>
                                            <div class="col-xs-3 ml-4">
                                                <button class="btn btn-primary" type="button" value="0"
                                                    onclick="value1('0')">0</button>
                                            </div>
                                            <div class="col-xs-3 ml-4">
                                                <button class="btn btn-primary" type="button" onclick={() => Solve()}>=</button>
                                            </div>
                                            <div class="col-xs-3 ml-4">
                                                <button class="btn btn-success" type="button" value="-"
                                                    onclick={() => Value()}>-</button>
                                            </div>
                                        </div>
                                    </div>
							</form>
                                </div>
                                </div>
                                </div>
      </>
    );
}

export default Calculator;