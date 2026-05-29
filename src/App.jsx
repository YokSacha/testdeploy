import { useState } from "react";
import Navbar from "./componente/NavbarFrontend";
import ActionButton from "./componente/ActionButton";
import ProductButton from "./componente/ProductButton";
import Login from "./pages/Login";
import ButtonMain from "./componente/ButtonMain";
import "./App.css";
import Section01 from "./componente/Section01";
import Section02 from "./componente/Section02";
import SignupPage from "./componente/SignupPage";
import Secondbutton from "./componente/Secondbutton";
import HeroButton from "./componente/HeroButton";
import Section_03 from "./componente/Section_03";
import Section04 from "./componente/Section04";
import ContactPage from "./componente/ContactPage";
import { KinetixProvider } from "../context/KinetixContext";

function App() {
  const [page, setPage] = useState('home');

  const renderContent = () => {
    switch (page) {
      case 'allProduct': return <div className="p-10 text-center">All Products</div>;
      case 'allBrand': return <Section01 />;
      case 'howWork': return <Section_03 />;
      case 'contact': return <ContactPage />;
      case 'login': return <Login setPage={setPage} />;
      case 'signup': return <SignupPage />;
      default: return (
        <>
          <Section01 />
          <Section02 />
          <Section_03 />
          <Section04 />
        </>
      );
    }
  };

  return (
    <KinetixProvider>
      <div className="min-h-screen bg-[#0a0a0f] text-white">
        <Navbar setPage={setPage} currentPage={page} />
        <main>{renderContent()}</main>
      </div>
    </KinetixProvider>
  );
}

export default App;