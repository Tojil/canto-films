import '../../src/styles/Banner.css'
import logohg from '../assets/logohg3d.svg'
import logohf from '../assets/logohf3d.svg'


function Banner() {
    return <div className="Banner-header">
        <img src={logohg} className="App-logo" alt="logohg" />
        <div className='Banner-title'>Canto Films</div>
        <img src={logohf} className="App-logo" alt="logohf" />
        
        
        </div>
}

export default Banner