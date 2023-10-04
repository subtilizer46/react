// import React, { Component } from 'react';
// class SimpleInterestCalculator extends Component {
//     state = {
//       principal: 0,
//       rate: 0,
//       time: 0,
//       result: 0,
// };
// handlePrincipalChange = (e) => {
//     this.setState({ principal: parseFloat(e.target.value) });
// };

// handleRateChange = (e) => {
//     this.setState({ rate: parseFloat(e.target.value) });
// };

// handleTimeChange = (e) => {
//     this.setState({ time: parseFloat(e.target.value) });
// };

// calculateInterest = () => {
//     const {principal,rate,time}=this.state;
//     const interest = (principal*rate*time)/100;
//     this.setState({ result: interest});
// };

// render() {
//     const { principal, rate, time, result } = this.state;
// return (
//     <div>
//       <h1>Simple Interest Calculator</h1>
//       <div>
//         <label>Principal Amount:</label>
//         <input type="number" value={principal} onChange={this.handlePrincipalChange} />
//       </div>
//       <div>
//         <label>Rate of Interest:</label>
//         <input type="number" value={rate} onChange={this.handleRateChange} />
//       </div>
//       <div>
//         <label>Time (in years):</label>
//         <input type="number" value={time} onChange={this.handleTimeChange} />
//       </div>
//       <button onClick={this.calculateInterest}>Calculate Interest</button>
//       <div>
//         <label>Simple Interest:</label>
//         <span>{result}</span>
//       </div>
//     </div>
//   );
// }}
// export default SimpleInterestCalculator;

// import React, { Component } from 'react';
// class AreaCalculator extends Component {
//     state = {
//       height: 0,
//       width: 0,
//       result: 0,
// };


// handleHeightChange = (e) => {
//     this.setState({ height: parseFloat(e.target.value) });
// };

// handleWidthChange = (e) => {
//     this.setState({ width: parseFloat(e.target.value) });
// };

// calculateArea = () => {
//     const {width,height}=this.state;
//     const area = height*width;
//     this.setState({ result: area});
// };

// render() {
//     const { height, width, result } = this.state;
// return (
//     <div>
//       <h1>Simple Interest Calculator</h1>
//       <div>
//         <label>Height of Rectangle:</label>
//         <input type="number" value={height} onChange={this.handleHeightChange} />
//       </div>
//       <div>
//         <label>Width of Rectangle:</label>
//         <input type="number" value={width} onChange={this.handleWidthChange} />
//       </div>
//       <button onClick={this.calculateArea}>Calculate Area</button>
//       <div>
//         <label>Area:</label>
//         <span>{result}</span>
//       </div>
//     </div>
//   );
// }}
// export default AreaCalculator;

import React, { Component } from 'react';
class Viewdetails extends Component {
    state = {
      name: '',
      email: '',
};


handleNameChange = (e) => {
    this.setState({ name: (e.target.value) });
};

handleEmailChange = (e) => {
    this.setState({ email: (e.target.value) });
};

displayMsg = () => {
    const {name,email}=this.state;
    alert(`Entered Name is ${name} and Your E-Mail ID is ${email}`)
};

render() {
    const { name, email } = this.state;
return (
    <div>
      <h1>DETAILS : </h1>
      <form>
        <label>Enter Name :</label>
        <input type='text' value={name} onChange={this.handleNameChange}/>
        <br></br><br></br>
        <label>Enter E-Mail :</label>
        <input type='text' value={email} onChange={this.handleEmailChange}/>
        <br></br><br></br>
        <button onClick={this.displayMsg}>Display Details</button>
      </form>
    </div>
  );
}}
export default Viewdetails;