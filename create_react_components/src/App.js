import './App.css';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <h1>learn react</h1>
      <Header/>
      {/* Header Component */}
      <Body/>
      {/* Body Component */}
      <Footer/>
      {/* Footer Component */}
    </div>
  );
}

export default App;