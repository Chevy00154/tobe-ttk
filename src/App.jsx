import "./app.scss"
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar"
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Cursor from "./components/cursor/Cursor";
import Pdca from "./components/pdca/Pdca";
import Masterpiece from "./components/masterpiece/Masterpiece";
import Footer from "./components/footer/Footer"

const App = () => {
  return (
    <div>
      <Cursor/>
      <section id="หน้าแรก">
        <Navbar/>
        <Hero/>
      </section>
      <section id="เกี่ยวกับเรา">
        <Parallax type="เกี่ยวกับเรา"/>
      </section>
      <section>
        <Services/>
      </section>
      <section id="การปฏิบัติงาน">
        <Parallax type="การปฏิบัติงาน"/>
      </section>
      <Portfolio/>
      <Pdca/>
      <section>
        <Masterpiece />
      </section>
      <Footer/>
    </div>
  )
};

export default App;
