import Header from "@/components/header";
import Agrotourism from "./home-blocks/agritourism"
import FirstStop from "./home-blocks/first-stop";
import FourthStop from "./home-blocks/fourth-stop";
import SecondStop from "./home-blocks/second-stop";
import ThirdStop from "./home-blocks/third-stop";
import Footer from "@/components/footer";

export default function Page() {
  return (
    <>
      <Header />
      <Agrotourism />
      <FirstStop />
      <SecondStop />
      <ThirdStop />
      <FourthStop />
      <Footer />
    </>
  );
}
