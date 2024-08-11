import './App.css';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'; // https://react-scroll-parallax.damnthat.tv/docs/intro
import NavBar from "./NavBar.js";
import Splash from "./Splash.js";
import TheGoodPart from "./TheGoodPart";
import { GoodPartInViewProvider } from './function components/goodPartInViewContext.js';
import HowDidWeGetHere from './HowDidWeGetHere.js';
import LetTheGamesBegin from './LetTheGamesBegin.js';

function App() {

  return (
    <>
        <GoodPartInViewProvider>
          <NavBar />
          <Parallax speed={-100}>
            <Splash />
          </Parallax>
          <div className="relative z-[1]">
            <TheGoodPart />
          </div>
          {/* <Parallax speed={-80}> */}
            <HowDidWeGetHere />
          {/* </Parallax> */}
          <div className="relative z-[1]">
            <LetTheGamesBegin />
          </div>
        </GoodPartInViewProvider>
    </>
  );
}



export default App;
