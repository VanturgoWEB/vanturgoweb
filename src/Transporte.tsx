import Navbar from "./components/Navbar";
import transport from './assets/transport.png'
import Heading from "./components/Heading";
import card1 from './assets/card1.svg'
import card2 from './assets/card2.svg'
import card3 from './assets/card3.png'
import card4 from './assets/card4.png'
import card5 from './assets/card5.png'
import Footer from "./components/Footer";

export default function Transporte() {
    return (
        <div className=" bg-bgwhite font-satoshi">
            <Navbar />
            <div className="bg-gradient-to-r from-black relative">
                <img src={transport} alt="" className="absolute w-full h-full object-cover mix-blend-multiply" />
                <div className="px-16 py-[292px] z-10 relative">

                    <div className="w-1/3 my-10">
                        <p className="text-white text-8xl capitalize font-plush">
                            Unsere B2B Tankstelle
                        </p>
                    </div>
                </div>
            </div>
            <div className="px-16 py-24">
                <Heading text={"wir haben mehr zu bieten."} />
                <div className="w-1/2 font-medium text-black text-xl text-opacity-60">
                    Als Schwesterunternehmen der Stary GmbH bieten wir unseren Firmenkunden die Nutzung unseres Umschlagslagers und unserer Transportdienstleistungen an. Zudem unterstützen wir Sie mit alternativen Immobilieninvestitionen, Beratung für Führungskräfte und Unternehmer sowie strategischer Unternehmensberatung.
                </div>
                <div className="mt-20 grid grid-cols-4 grid-rows-2 gap-8">
                    <img src={card1} className="rounded-2xl col-span-2 row-span-2 w-full h-full" alt="" />
                    <img src={card2} className="rounded-2xl w-full h-full" alt="" />
                    <img src={card3} className="rounded-2xl w-full h-full" alt="" />
                    <img src={card4} className="rounded-2xl w-full h-full" alt="" />
                    <img src={card5} className="rounded-2xl w-full h-full" alt="" />
                </div>
            </div>
            <Footer />
        </div>
    );
}