import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <main className="container mx-auto px-8 py-12">{children}</main>

      <Footer />
    </div>
  );
}
