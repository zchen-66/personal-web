import './App.css';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'; // https://react-scroll-parallax.damnthat.tv/docs/intro
import NavBar from "./NavBar.js";
import Splash from "./Splash.js";
import TheGoodPart from "./TheGoodPart";

function App() {

  return (
    <>
      <ParallaxProvider>
        {/* <NavBar /> */}
        <Parallax speed={-80}>
          <Splash />
        </Parallax>
        <Parallax speed={0}>
          <TheGoodPart />
        </Parallax>
      </ParallaxProvider>
    </>
  );
}



export default App;
