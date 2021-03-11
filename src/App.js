import './App.css';
import { Banner,HrApp,Owner,Feature,Poster,Heading,JumboSection,StatsDispaly } from './component';

function App() {
  return (
    <div className="App">
   <Banner/>
   <Poster/>
   <Heading  title="Our products"   />
   <JumboSection/>
   <StatsDispaly/>
   <Feature/>
   <HrApp/>
   <Owner/>
    </div>
  );
}

export default App;
