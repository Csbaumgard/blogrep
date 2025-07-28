import PortfolioCarousel from "@/components/portfolio-carousel";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] items-center justify-center w-full">
        <PortfolioCarousel />
      </main>
    </div>
  );
}