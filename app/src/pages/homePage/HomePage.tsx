import { ClipList } from "../../components/modules/cardComponents/ClipList";
import { FilterBar } from "../../components/modules/filterBar/FilterBar";
import { Footer } from "../../components/modules/footerComponents/Footer";
import { Header } from "../../components/modules/navbarComponents/Header";
import { clips } from "../../components/modules/cardComponents/clipsDemoData";

export function HomePage() {
  return (
    <div className="flex w-full max-w-[400px] flex-col overflow-hidden rounded-[28px] bg-white p-4 shadow-[0_20px_50px_rgba(90,70,180,0.18)]">
      <Header />
      <FilterBar />
      <ClipList clips={clips} />
      <Footer />
    </div>
  );
}
