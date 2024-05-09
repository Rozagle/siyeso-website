import { Navbar, Hero,RequirementExpertise, Client,  Contect, Footer, OurExpertise, About, Team ,ChangingNeeds } from './Components/Imports';
function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <ChangingNeeds/>
      {/* <Analysis/>
      <Develope/> */}
      <RequirementExpertise/>
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
