import { Outlet } from "react-router-dom";
import Footer from "../LandingSection/Footer";
import Nav from "./Nav";

export default function Layout() {
  return (
    <>
    <Nav />
      <div className="min-h-screen bg-black">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
