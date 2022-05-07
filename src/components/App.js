import logo from '../../src/logo.svg';
import '../../src/App.css';
import Banner from './Banner';

function App() {
  return  (
    
    <div className="App">
      <div className='App-banner'><Banner /></div>
      <header className="App-header">
      <Banner />
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Bonjour Sergio Comment çà va ? 👍</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
