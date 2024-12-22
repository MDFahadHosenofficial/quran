import React from "react";
import Quran from "../../assets/bg.png";
import { apps } from "../../ui/appsData"; 
import Container from "../layout/Container";
import AppCard from "../layout/AppCard";


const Appslink = () => {
  return (
   <div className="pt-[20px] pb-[32px] pr-[19px] pl-[6px]">
     <Container>
      <div
        className="relative bg-cover bg-center mx-auto w-[1238px] h-[463px]"
        style={{ backgroundImage: `url(${Quran})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Centered Content */}
        <div className="relative flex justify-center items-center h-full">
          <div className="flex gap-[89px]">
            {apps.map((app) => (
              <AppCard key={app.id} image={app.image} name={app.name} />
            ))}
          </div>
        </div>
      </div>
    </Container>
   </div>
  );
};

export default Appslink;
