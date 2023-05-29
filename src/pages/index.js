import { useEffect } from "react";
// Components
import HadrLayout from "@/components/Layout/HadrLayout";
import Hero from "@/components/Hero/Hero";
import Cards from "@/components/Cards/Cards";

export default function Home() {
  useEffect( async ()=>{
    const res = await fetch("http://localhost:3000/api/books")
    const data = await res.json()
    console.log(data)
  })
  return (
    <HadrLayout>
      <Hero />
      <Cards />
    </HadrLayout>
  );
}
