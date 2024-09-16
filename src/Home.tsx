import Card from "./components/Card";
import Heading from "./components/Heading";
import MovingText from "./components/MovingText";
import Navbar from "./components/Navbar";
import PrimaryButton from "./components/PrimaryButton";
import placeholder from "./assets/placeholder.svg"

function Home() {
	return (
		<div className=" bg-bgwhite font-satoshi">
			<Navbar />
			<div className="bg-[#E6ECF4] px-16 py-36">
				<PrimaryButton
					titleElement={<p>01900 Großröhrsdorf industrial area</p>}
					onclick={() => {}}
				/>
				<div className="w-1/2 my-6">
					<p className="text-primary text-7xl capitalize font-plush">
						Herzlich willkommen bei
						<span className="font-medium italic">Vanturgo GmbH</span>
					</p>
					<p className="text-black text-opacity-60 text-xl mt-8 pr-4 font-medium">
						Eine moderne Lösung für die vielfältigen B2B-Bedürfnisse in
						verschiedenen Branchen - mit dem Fokus auf eine effiziente und
						kostengünstige Kraftstoffversorgung durch unsere rund um die Uhr
						verfügbare Dieseltankstelle für Sie und Ihr Unternehmen.
					</p>
				</div>
				<PrimaryButton
					titleElement={<p>Jetzt Mehr Erfahren</p>}
					onclick={() => {}}
				/>
			</div>
			<MovingText text="Ihre vertrauenswürdige Diesel-Tankstelle" />
			<div className="px-16 pt-24">
				<Heading text={"Was wir Ihnen bieten."} />
				<div className="w-1/2 font-medium text-black text-xl text-opacity-60">
					Die VANTURGO GmbH ist ein modernes Unternehmen, das eine Vielzahl von
					Dienstleistungen für B2B-Kunden aus unterschiedlichen Branchen
					anbietet.
				</div>

				<div className="flex mt-20 w-full space-x-10 mb-10">
					<Card
						title="B2B - Tankstelle"
						description="Unsere Kerndienstleistung ist der Betrieb einer Diesel-Tankstelle für Firmenfahrzeuge aller Art. Unsere Zapfsäule befindet sich im Gewerbegebiet 01900 Großröhrsdorf und bietet rund um die Uhr Zugang zu günstigem."
						className="w-1/2"
					/>
					<Card
						title="Transporte & Umschlaglager"
						description="Als kleine Schwester der VS Kühltransporte GmbH bieten wir unseren Firmenkunden zusätzlich die Möglichkeit, unser Umschlagslager zu nutzen oder unsere Transportdienstleistungen in Anspruch zu nehmen."
						className="w-1/2"
					/>
				</div>
				<div className="flex w-full space-x-10">
					<Card
						title="Alternative Investments"
						description="Unsere Kerndienstleistung ist der Betrieb einer Diesel-Tankstelle für Firmenfahrzeuge aller Art. Unsere Zapfsäule befindet sich im Gewerbegebiet 01900 Großröhrsdorf und bietet rund um die Uhr Zugang zu günstigem."
						className="w-1/3"
					/>
					<Card
						title="Coaching"
						description="Als kleine Schwester der VS Kühltransporte GmbH bieten wir unseren Firmenkunden zusätzlich die Möglichkeit, unser Umschlagslager zu nutzen oder unsere Transportdienstleistungen in Anspruch zu nehmen."
						className="w-1/3"
					/>
					<Card
						title="Unternehmensberatung"
						description="Als kleine Schwester der VS Kühltransporte GmbH bieten wir unseren Firmenkunden zusätzlich die Möglichkeit, unser Umschlagslager zu nutzen oder unsere Transportdienstleistungen in Anspruch zu nehmen."
						className="w-1/3"
					/>
				</div>
				<div className="pt-16">
					<div className="px-40 pt-16 bg-[#E6ECF4] rounded-t-3xl flex flex-col items-center">
						<Heading text={"Worauf wir abzielen."} />
						<div className="font-medium text-black text-xl text-opacity-60 text-center mb-24">
							Unsere Vision ist es, durch innovative Lösungen und herausragenden
							Kundenservice die bevorzugte Wahl für gewerbliche Kunden in der
							Region zu sein. Wir sind stolz darauf, unseren Kunden nicht nur
							wettbewerbsfähige Preise, sondern auch eine bequeme und flexible
							Möglichkeit zur Kraftstoffversorgung zu bieten.
						</div>
						<img src={placeholder} alt="" className="w-full" />
					</div>
				</div>
			</div>
			<MovingText text="Ihre vertrauenswürdige Diesel-Tankstelle" />

		</div>
	);
}

export default Home;
