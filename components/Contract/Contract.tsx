"use client";

import { GroupContract as Contract } from "@prisma/client";
import { ScrollArea } from "../ui/scroll-area";

const GroupContract = ({ contract }: { contract: Contract }) => {
  return (
    <ScrollArea className="mx-auto border p-12 bg-[#fff] text-[#000]">
      <section className="flex flex-col gap-4">
        <h1 className="font-semibold ">{contract.title}</h1>

        <h2>Motivasjon of arbeidsinnsats</h2>

        <div>
          <p className="font-bold text-lg">
            Hvilket ambisjonsnivå har dere som team i prosjektarbeided?
          </p>
          <ol className="list-disc list-inside">
            <li>
              Gruppen ønsker å legge ned mye arbeid og innsats for å oppnå høyt
              på prosjektet. Levere produkt gruppen er stolt av og med høy
              kvalitet.
            </li>
          </ol>
        </div>
        <div>
          <p className="font-bold text-lg">
            Hvilken kompetanse har teammedlemmene?
          </p>
          <ol className="list-disc list-inside">
            <li>
              Erfaring med språk og rammeverk som Javascript, React, Java, Pyhon
              og Django
            </li>
            <li>Erfaring med SCRUM </li>
            <li>Erfaring med Figma (design)</li>
            <li>Erfaring med sikkerhet (RMF)</li>
          </ol>
        </div>
        <div>
          <p className="font-bold text-lg">
            Hvor mye tid skal dere bruke på kurset i uka?
          </p>
          <ol className="list-disc list-inside">
            <li>
              Gruppen har blitt enige om å bruke 8 timer i uka fordelt på 2
              møter. Møtene vil skje mandag og torsdag fra 12 til 16.
            </li>
            <li>
              Dersom en ikke kan delta i møtet skal dette gis beskjed i
              gruppechatten kvelden før.
            </li>
          </ol>
        </div>
        <div className="text-center flex flex-col gap-2 ">
          <p className="font-bold">
            Opprettet: <span className="font-normal">12. februar 2024</span>
          </p>
          <p className="font-bold">
            Nyeste versjon: <span className="font-normal">3. mars 2024</span>
          </p>
        </div>
      </section>
    </ScrollArea>
  );
};

export default GroupContract;
