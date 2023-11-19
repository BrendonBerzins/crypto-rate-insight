import List from "@/components/content/Cryptocurrency/List";
import Header from "@/components/content/home/Header";
import Navbar from "@/components/layout/navbar/Navbar";

export default function Home() {
  return (
    <main className="pastel-background h-full">
      <Navbar />
      <Header />
      <List />
    </main> 
  )
}
