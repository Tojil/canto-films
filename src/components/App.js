// import logo from '../../src/logo.svg';
import '../../src/styles/App.css';
import Banner from './Banner';
import FilmsList from './FilmsList';
import Slide from './Slide';

function App() {
  return  (
    
    <div className="App">
      <div className='App-banner'><Banner /></div>
      <div className="App-header">
      <Slide />
        
        {/* <img src={logo} className="App-logo" alt="logo" />
        <h1>Bonjour Sergio Comment çà va ? 👍</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </div>
    </div>
  );
}

export default App;
