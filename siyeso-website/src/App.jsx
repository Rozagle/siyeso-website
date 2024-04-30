import { Navbar, Hero, Analysis,Develope, Client,  Contect, Footer, OurExpertise, About ,ChangingNeeds } from './Components/Imports';
function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <ChangingNeeds/>
      <Analysis/>
      <Develope/>
      <About/>
      <OurExpertise/> 
      <Client/>
      {/* <Team/> */}
      <Contect/>
      <Footer/>
    </>
  );
}

export default App;
