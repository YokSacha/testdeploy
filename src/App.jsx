import "./App.css";
import ButtonMain from "./componente/ButtonMain";
import HeroButton from "./componente/HeroButton";
import LoginButton from "./componente/LoginButton";
import Secondbutton from "./componente/Secondbutton";
import Section01 from "./componente/Section01";
import Section_03 from "./componente/Section_03";
import SignupPage from "./componente/SignupPage";

function App() {
  return (
    <>
      <ButtonMain />
      <LoginButton />
      <Section01 />
      <SignupPage />

      <div className="flex-col">
        <HeroButton />
        <Secondbutton />
        <Section_03 />
      </div>
    </>
  );
}

export default App;
