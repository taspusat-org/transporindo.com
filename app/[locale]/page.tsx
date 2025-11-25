import { Suspense } from "react";
import ClientLayout from "../components/ClientLayout";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });

export default function Page() {
  return (
    <div className={inter.className}>
      <Suspense
        fallback={
          <div className="w-full min-h-screen flex items-center justify-center bg-zinc-50">
            <div>Loading...</div>
          </div>
        }
      >
        <ClientLayout />
      </Suspense>
    </div>
  );
}
