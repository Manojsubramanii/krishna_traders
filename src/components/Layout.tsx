import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsappButton";

const Layout = () => {
  useEffect(() => {
    // Load Zoho WebForm script globally ONCE
    if (document.getElementById("zoho-webform-script")) return;
    const script = document.createElement("script");
    script.id = "zoho-webform-script";
    script.src = "https://crm.zoho.in/crm/WebFormServeServlet";
    script.async = true;
    document.body.appendChild(script);
    console.log("Zoho WebForm script loaded");
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Layout;