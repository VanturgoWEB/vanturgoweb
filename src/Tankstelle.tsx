import Navbar from "./components/Navbar";
import PrimaryButton from "./components/PrimaryButton";
import bg from './assets/tankstelle.png'
import MovingText from "./components/MovingText";
import Heading from "./components/Heading";
import CardT from "./components/CardT";
import altCard from './assets/altCard.png'
import iphone from './assets/iPhone.png'
import Footer from "./components/Footer";
import InputField from "./components/InputField";

export default function Tankstelle() {
	return (
		<div className=" bg-bgwhite font-satoshi">
			<Navbar />
			<div className="bg-gradient-to-r from-black relative">
				<img src={bg} alt="" className="absolute w-full h-full object-cover mix-blend-multiply" />
				<div className="px-28 py-[216px] z-10 relative">
					<PrimaryButton
						titleElement={<p>01900 Großröhrsdorf industrial area</p>}
						onclick={() => { }}
					/>
					<div className="w-1/3 my-10">
						<p className="text-white text-7xl capitalize font-plush">
							Unsere B2B Tankstelle
						</p>
					</div>
					<PrimaryButton
						titleElement={<p>Kunde werden</p>}
						onclick={() => { }}
					/>
				</div>
			</div>
			<MovingText text="Ihre vertrauenswürdige Diesel-Tankstelle" />
			<div className="px-16 pt-24 pb-16">
				<Heading text={"Was Sie Erwartet."} />
				<div className="mb-2"></div>
				<div className="flex space-x-10 mt-12 mb-4">
					<CardT
						title="24/7 Verfügbarkeit"
						description="Tanken Sie Diesel jederzeit, ohne auf Öffnungszeiten achten zu müssen."
						className="w-1/2"
						image={altCard}
					/><CardT
						title="Günstige Preise"
						description="Profitieren Sie von unseren günstigen Kraftstoffpreisen, die unter denen der umliegenden Tankstellen liegen."
						className="w-1/2"
						image={altCard}
					/><CardT
						title="Flexible Abrechnung"
						description="Die Abrechnung erfolgt viermal pro Monat per Rechnung oder SEPA Lastschrift."
						className="w-1/2"
						image={altCard}
					/>
				</div>
				<div className="flex space-x-10 mb-4">

					<CardT
						title="Maximale Flexibilität"
						description="Tanken Sie, wann immer es Ihnen passt, ohne Personal oder sofortige Abrechnung."
						className="w-1/2"
						image={altCard}
					/><CardT
						title="Kostenersparnis"
						description="Sparen Sie mit unseren Dieselpreisen, die 2-3 Cent pro Liter unter den regionalen Preisen liegen."
						className="w-1/2"
						image={altCard}
					/><CardT
						title="Stabile Preise"
						description="Wir bieten feste Preise für 7 Tage, im Gegensatz zu den täglichen Schwankungen der Wettbewerber."
						className="w-1/2"
						image={altCard}
					/>
				</div>
				<div className="px-16 py-12">
					<Heading text={"Schließen Sie sich uns an."} />
					<div className="w-1/2 font-medium text-black text-xl text-opacity-60 mb-20">
						Unsere Dienstleistungen sind ausschließlich für gewerbliche Kunden vorgesehen. Um unsere Diesel-Tankstelle nutzen zu können, müssen Sie ein registriertes Unternehmen führen und über Firmenfahrzeuge verfügen.
					</div>
					<div className="w-full flex justify-between items-center">
						<div className="w-1/2 space-y-10">
							<Information title="Registrierungsformular Ausfüllen" description="Sollten Sie noch kein Kunde sein, bitten wir Sie, unser Registrierungsformular auszufüllen. Dieses steht auf unserer Webseite zur Verfügung oder kann auf Anfrage per E-Mail zugesandt werden." isSelected={true} />
							<Information title="Systemeintragung" description="Nach Erhalt Ihres Formulars wird Ihr Unternehmen in unserem System angelegt." />
							<Information title="Transponder Erhalten" description="Je nach Anzahl der angemeldeten Fahrzeuge erhalten Sie für jedes Fahrzeug einen Transponder, der Ihnen den Zugang zu unserer Zapfsäule ermöglicht." />
							<Information title="Nutzung der Zapfsäule" description="Sobald Sie registriert sind und Ihre Transponder erhalten haben, steht Ihnen unsere Zapfsäule rund um die Uhr zur Verfügung. Tanken Sie Diesel zu attraktiven Preisen und nutzen Sie unsere flexible und komfortable Lösung für Ihren Kraftstoffbedarf." />
						</div>
						<div className="w-2/5 py-6 flex items-center justify-center">
							<img src={iphone} alt="" />
						</div>
					</div>
				</div>
			</div>
			<MovingText text="Ihre vertrauenswürdige Diesel-Tankstelle" />
			<div className="my-[120px]">
				<h2 className="font-plush text-primary text-6xl text-center mb-12">Jetzt Bei Vanturgo Anmelden</h2>
				<div className="flex flex-col space-y-6 w-1/2 mb-6 mx-auto">
					<div className="flex space-x-6">
						<div className="w-1/5">
							<InputField label="Anrede" />
						</div>
						<div className="w-2/5">
							<InputField label="Vorname" />
						</div>
						<div className="w-2/5">
							<InputField label="Nachname" />
						</div>
					</div>
					<InputField label="Firmenname" />
					<InputField label="Firmenadresse" />
					<InputField label="Rechnungsadresse" />
					<div className="flex space-x-6">
						<InputField label="E-mail (zum Ansprechpartner)" />
						<InputField label="Telefonnummer (zum Ansprechpartner)" />
					</div>
					<InputField label="Nachricht (fakultativ)" textarea={true} />

				</div>
				<div className="mx-auto w-1/2">
					<PrimaryButton
						titleElement={<p>Antwort Absenden</p>}
						onclick={() => { }}
					/>
				</div>
			</div>
			<Footer />
		</div>
	);
}

type infoType = {
	title: string,
	description: string,
	isSelected?: boolean | false,
}

function Information(props: infoType) {
	return (
		<div className={`pl-8 ${props.isSelected ? ' border-l-2 border-black' : ''}`}>
			<p className="font-bold text-2xl pb-4">{props.title}</p>
			<p className=" text-xl">{props.description}</p>
		</div>
	);
}