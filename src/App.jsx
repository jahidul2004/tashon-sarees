import Benefit from "./components/benefit/Benefit";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import NavBar from "./components/navbar/NavBar";
import OrderForm from "./components/orderForm/OrderForm";
import Stats from "./components/stats/Stats";

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

           {/* Stats */}
           <Stats></Stats>
           {/* Stats end */}

           {/* Order form */}
           <OrderForm></OrderForm>
           {/* Order form end */}
        </>
    );
}

export default App;
