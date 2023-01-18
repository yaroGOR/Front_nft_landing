import { ThemeProvider } from "styled-components";
import "./App.css";
import GlobalStyles from "./styles/GlobalStyles";
import { light } from "./styles/Theme";



import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import About from "./components/sections/About";
import Faq from "./components/sections/Faq";
import Home from "./components/sections/Home";
import Roadmap from "./components/sections/Roadmap";
import Showcase from "./components/sections/Showcase";
import Team from "./components/sections/Team";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
    <div className="App">
      <>
      
      <GlobalStyles />
    <ThemeProvider theme={light}>
      <Navigation/>
      <Home/>
      <About/>
      <Roadmap />
      <Showcase/>
      <Team/>
      <Faq/>
      <Footer/>
      <ScrollToTop/>
    </ThemeProvider>
    </>
    </div>
  );
}

export default App;
