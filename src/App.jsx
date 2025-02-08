import Benefit from "./components/benefit/Benefit";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import NavBar from "./components/navbar/NavBar";

function App() {
    return (
        <>
           {/* Navbar */}
           <NavBar></NavBar>
           {/* Navbar end */}

           {/* Hero */}
           <Hero></Hero>
           {/* Hero end */}

           {/* Contact */}
           <Contact></Contact>
           {/* Contact end */}

           {/* Benefit */}
           <Benefit></Benefit>
           {/* Benefit end */}
        </>
    );
}

export default App;
