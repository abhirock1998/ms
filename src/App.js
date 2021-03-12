import './App.css';
import { Banner,Footer,ContactUs,FeatureBlog,Testimonial,HrApp,Owner,Feature,Poster,Heading,JumboSection,StatsDispaly } from './component';

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
   <Testimonial/>
   <FeatureBlog/>
   <ContactUs/>
   <Footer/>
    </div>
  );
}

export default App;
