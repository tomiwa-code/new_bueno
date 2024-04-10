import Hero from "@/components/home/Hero";
import ChefSpecialFetch from "@/components/home/fetch/ChefSpecial.fetch";
import ExploreCatFetch from "@/components/home/fetch/ExploreCat.fetch";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Hero />
      <ChefSpecialFetch />
      <ExploreCatFetch />
    </div>
  );
}
