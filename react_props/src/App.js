import './App.css';
import HeaderComponent from './components/HeaderComponent';
import CommonComponent from './components/CommonComponent';
import BodyComponent from './components/BodyComponent';

function App() {
  return (
    <div className="App">
      <h1>learn react</h1>

      {/* Call HeaderComponent without any props */}
      <HeaderComponent />
      
      {/* Call BodyComponent */}
      <BodyComponent />

      {/* Call CommonComponent with prop value as text="This is a Footer Content" */}
      <CommonComponent text3="This is a Footer Content"/>
    </div>
  );
}

export default App;
