import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "@/components/Header";
import { Banner } from "@/components/Banner";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Clients } from "@/components/Clients";
import { Count } from "@/components/Count";
import { Fleets } from "@/components/Fleets";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Benefits } from "@/components/Benefits";
import { Whats } from "@/components/Whats";
import "./globals.css"; 

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Services />
      <About />
      <Clients />
      <Count />
      <Fleets />
      <Faq />
      <Benefits />
      <Contact />
      <Footer />
      <Whats />
    </div>
  );
}
