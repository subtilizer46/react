import React, { useState } from 'react';
import "./calculator.css";

function Calculator() {
    // handle user input with useState hooks
    const [integer1, setInteger1] = useState(0);
    const [integer2, setInteger2] = useState(0);
    const [result, setResult] =useState(0);

    //addition logic goes here
    function addition() {
        var a = parseInt(integer1);
        var b = parseInt(integer2);
        var sum = a + b;
        setResult(sum);
    }

    //subtraction logic goes here
    function subtract() {
        var a = parseInt(integer1);
        var b = parseInt(integer2);
        if(b > a) {
            setResult(b - a);
        }
        else{
            setResult(a - b);
        }
    }

    //multiplication logic goes here
    function multiply() {
        var a = parseInt(integer1);
        var b = parseInt(integer2);
        setResult(a*b);
        
    }

    //division logic goes here
    function divide() {
        var a = parseInt(integer1);
        var b = parseInt(integer2);
        var divResult = 0;

        if(a < b) {
            divResult = b / a;
            setResult(divResult);
        }
        else {
            divResult = a / b;
            setResult(divResult);
        }
    }

    return(
        <div className='formFields'>
            <h3>Simple Calculator</h3>
            <form >
                <label className='label'>Enter first integer</label>
                <br></br>
                <input className='inputField' value={integer1} onChange={(e) => setInteger1(e.target.value)} required placeholder='first integer'/>
                <button type='button' id='increment1' onClick={() => setInteger1(integer1 + 1)}>+</button>
                <br></br>
                <br></br>
                <label className='label'>Enter second integer</label>
                <br></br>
                <input className='inputField' value={integer2} onChange={(e) => setInteger2(e.target.value)} required placeholder='second integer'/>
                <button type='button' id='increment2' onClick={() => setInteger2(integer2 + 1)}>+</button>
                <br></br>
                <button type='button' id='addButton' onClick={addition}>Addition</button>
                <button type='button' id='subButton' onClick={subtract}>Subtract</button>
                <br></br>
                <button type='button' id='multiButton' onClick={multiply}>Multiply</button>
                <button type='button' id='divButton' onClick={divide}>Divide</button>

                <h3 id='counter_value'>{result}</h3>
            </form>
        </div>
    );
}

export default Calculator;