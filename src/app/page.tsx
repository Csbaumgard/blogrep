import Image from "next/image"
import HomePage from "@/components/home-page"

export default function Home() {
  return (
    <div className="font-sans flex flex-col min-h-screen max-w-screen items-center justify-center p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] items-center justify-center w-full">
        <HomePage />
      </main>
    </div>
  );
}