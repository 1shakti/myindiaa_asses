import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-gray-100">
        <div className="container mx-auto py-6">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
