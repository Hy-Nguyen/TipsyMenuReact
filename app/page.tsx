import Navbar from "@/components/nav";
import Header from "@/components/header";
import Logo from "@/components/imageTest";
import Chicken from "@/components/chicken";
import PreGame from "@/components/pregame";
import PartyOn from "@/components/partyon";
import Drinks from "@/components/drinks";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex items-center justify-center flex-wrap bg-amber-100 p-3">
        <div className="flex items-center flex-shrink-0 text-white mr-6 justify-center">
          <Logo width={150} height={200} />
        </div>
      </div>
      <Navbar />
      <div
        id="container"
        className="items-center justify-between px-8"
      >
        <section id="kfc">
          <Header text={"Tipsy Chicken"} />
          <div
            className="min-w-64 max-w-screen 
                        md:grid md:grid-cols-2 
                        lg:grid lg:grid-cols-3 lg:max-w-screen-xl lg:m-auto"
          >
            <Chicken />
          </div>
        </section>
        <section id="pre-game">
          <Header text={"Pre-Game"} />
          <div
            className="min-w-64 max-w-screen 
                        md:grid md:grid-cols-2 
                        lg:grid lg:grid-cols-3 lg:max-w-screen-xl lg:m-auto"
          >
            <PreGame />
          </div>
        </section>
        <section id="Party-On">
          <Header text={"Party-On"} />
          <div
            className="min-w-64 max-w-screen 
                        md:grid md:grid-cols-2 
                        lg:grid lg:grid-cols-3 lg:max-w-screen-xl lg:m-auto"
          >
            <PartyOn />
          </div>
        </section>
        <section id="Drinks">
          <div
            className="min-w-64 max-w-screen 
                        md:grid md:grid-cols-2 
                        lg:grid lg:grid-cols-3 lg:max-w-screen-xl lg:m-auto"
          >
            <Drinks />
          </div>
        </section>
      </div>
    </main>
  );
}
