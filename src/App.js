import './App.css';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'; // https://react-scroll-parallax.damnthat.tv/docs/intro
import NavBar from "./NavBar.js";
import Splash from "./Splash.js";
import TheGoodPart from "./TheGoodPart";
import { GoodPartInViewProvider } from './goodPartInViewContext';

function App() {

  return (
    <>
      <ParallaxProvider>
        <GoodPartInViewProvider>
          <NavBar />
          <Parallax speed={-80}>
            <Splash />
          </Parallax>
          <Parallax speed={0}>
            <TheGoodPart />
          </Parallax>
        </GoodPartInViewProvider>
      </ParallaxProvider>
    </>
  );
}



export default App;
