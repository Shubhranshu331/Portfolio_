import Image from "next/image";
import First from "./components/First";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#000000] ">
      <div className="container mx-auto px-12 py-4">
        <First />
      </div>
    </main>
  );
}
