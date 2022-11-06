import ResponsiveAppBar from './components/navbarRedone/navbarRedone.jsx'

import Welcome from './components/welcome/welcome.jsx'
import Portfolio from './components/portfolio/portfolio.jsx'
import Work from './components/work/work.jsx'
import Footer from './components/footer/footer.jsx'
import './app.scss'
import {useState} from 'react'


function App() {

  const [menuState,setMenuState] = useState(false)
  
  return (
    <div className="app">
      {/* <Navbar menuState={menuState} setMenuState={setMenuState} /> */}
      <ResponsiveAppBar className='navbar'></ResponsiveAppBar>

      <div className="sections">
      <Welcome/>
      <Portfolio id='portfolio-section'/>
      <Work className = 'work' />
      </div>
    </div>
  );
}

export default App;
