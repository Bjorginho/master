"use client";
import { PageHeaderContext } from "@/context/PageHeaderContext";
import { UserContext } from "../context/UserContext";
import { Course, User } from "../types/types";
import { ThemeProvider } from "@/components/theme-provider";
import { useState } from "react";

const defaultUser: User = {
  name: "John Doe",
  email: "john.doe@gmail.com",
};

const defaultCourses: Course[] = [
  {
    name: "Eksperter i team: Hvordan oppnå en ren luftfart innen 2050?",
    courseCode: "TET4854",
    description:
      "Luftfarten må bli utslippsfri innen 2050, til tross for økende etterspørsel og nåværende klimagassutslipp. Dette krever en total omlegging til utslippsfri teknologi og infrastruktur, inkludert hydrogen og andre klimavennlige drivstoff.",
  },
  {
    name: "Webutvikling",
    courseCode: "IT2810",
    description:
      "Kurset dekker teknologi og metoder brukt i utvikling av web-løsninger. Gjennom delprosjekter lærer studentene om rammeverk, arkitekturer, sentrale språk, formater og standarder for web-applikasjoner. Kurset er teknologi-orientert og prosjekter og delinnlevering evalueres ut fra kunnskapen og ferdighetene som er oppnådd.",
  },
  {
    name: "Informatikk prosjektarbeid I",
    courseCode: "IT1901",
    description:
      "Emnet gir kunnskap og ferdigheter i smidig applikasjonsutvikling i team. Applikasjonen vil bruke en klientserverarkitektur, strukturert i moduler og konfigurert med et byggesystem. Gruppene vil bruke et system for sporing av utviklingsoppgaver, kildekodeadministrasjon og kodevurdering. Fokuset er mer på kodekvalitet og testing, enn på funksjonalitet.",
  },
];

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const [headerText, setHeaderText] = useState("");

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <PageHeaderContext.Provider
        value={{ headerText: headerText, setHeaderText: setHeaderText }}
      >
        <UserContext.Provider
          value={{ user: defaultUser, courses: defaultCourses }}
        >
          {children}
        </UserContext.Provider>
      </PageHeaderContext.Provider>
    </ThemeProvider>
  );
};
