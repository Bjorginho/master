"use client";
import { AdminProviders, Providers, StudentProviders } from "./Providers";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader/PageHeader";
import { usePathname } from "next/navigation";

const Application = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <Providers>
      <Header />
      <div className="container mt-3">
        <PageHeader />
        {pathname.startsWith("/admin") ? (
          <>
            <AdminProviders>{children}</AdminProviders>
          </>
        ) : (
          <>
            <StudentProviders>{children}</StudentProviders>
          </>
        )}
      </div>
    </Providers>
  );
};

export default Application;
