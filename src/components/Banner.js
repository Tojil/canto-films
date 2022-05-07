import '../../src/Banner.css'
import logohg from '../images/logohg.svg'
import logohf from '../images/logohf.svg'


function Banner() {
    return <div className="Banner-header">
        <img src={logohf} className="App-logo" alt="logohf" />
        <img src={logohg} className="App-logo" alt="logohg" />
        <h1>Canto Films</h1>
        </div>
}

export default Banner