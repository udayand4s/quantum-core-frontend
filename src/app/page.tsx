import Link from "next/link";
import { Header } from "./Features/Header";
import { HeroBanner } from "./Features/HeroBanner";
import { CardDemo } from "./Features/Cards";

export default function Home() {

  const cardsData = [
    {
      title: "Unmatched Speed",
      description:
        "Proprietary quantum chips with unmatched processing speed.",
      imageUrl:"/1.webp",
    },
    {
      title: "For the Masses",
      description: "Turnkey quantum systems for businesses and research institutions.",
      imageUrl:"/2.webp", 
    },
    {
      title: "Industry Solutions",
      description: "Custom solutions for industries like finance, healthcare, and AI.",
      imageUrl: "/3.webp",
    },
    {
      title: "Empowering Innovation",
      description: "Supportive infrastructure for quantum developers and researchers",
      imageUrl: "/4.webp",
    },
  ];

  return (
    <div className="h-auto w-screen md:w-auto overflow-x-hidden bg-black flex flex-col items-center">
      <div className="my-5 text-white">
        <Header />
        
      </div>
      <div className="w-full ">
        <HeroBanner />
      </div>
      <div>
        <div className="text-6xl text-white font-bold my-4 text-center">
        Pioneering the Quantum Future
        <div className="text-2xl font-medium my-4 text-center">
          Our mission is to empower industries across sectors like healthcare, AI, <br/>
          and finance with unparalleled computational power, driving groundbreaking advancements <br/>
          and unlocking new possibilities. 
          
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cardsData.map((card) => (
          <CardDemo 
            key={card.title} 
            title={card.title} 
            description={card.description} 
            imageUrl={card.imageUrl} 
          />
        ))}
      </div>
    </div>
    </div>
  );
}
