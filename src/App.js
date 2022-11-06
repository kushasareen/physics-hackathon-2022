import ResponsiveAppBar from './components/menu/navbarRedone.jsx'

import Welcome from './components/game/welcome.jsx'
import Portfolio from './components/explanation/portfolio.jsx'
import Work from './components/team/work.jsx'

import './app.scss'
import {useState} from 'react'


function App() {

  const [menuState,setMenuState] = useState(false)
  
  return (
    <div className="app">
      {/* <Navbar menuState={menuState} setMenuState={setMenuState} /> */}
      <ResponsiveAppBar url='./PhysicsHackathon.mp3' className='navbar'></ResponsiveAppBar>

      <div className="sections">
      <Welcome/>
      <Portfolio id='portfolio-section'/>
      <Work className = 'work' />
      </div>
    </div>
  );
}

export default App;
