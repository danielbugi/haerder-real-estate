import Footer from './components/Footer';
import FooterHeader from './components/FooterHeader';
import Navbar from './components/Navbar';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';

function App() {
  return (
    <div>
      <Navbar />
      <Section1 id="section-1" />
      <Section2 id="section-2" />
      <Section3 />
      <Section4 id="section-4" />
      <Section5 />
      <FooterHeader />
      <Footer />
    </div>
  );
}

export default App;
