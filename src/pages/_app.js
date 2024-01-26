import Header from "@/container/partials/header/Header";
import Footer from "@/container/partials/footer/Footer";
import GlobalStyle from "@/styles/global";
// import { Helvetica, Axiforma } from "next/font/google";
import { Poppins, Space_Grotesk } from "next/font/google";

// const helvetica = Helvetica({
// 	subsets: ["latin"],
// 	display: "swap",
// 	fallback: ["system-ui", "arial"],
// 	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
// 	variable: "--helvetica",
// });

// const axiforma = Axiforma({
// 	subsets: ["latin"],
// 	display: "swap",
// 	fallback: ["system-ui", "arial"],
// 	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
// 	variable: "--axiforma",
// });

const poppins = Poppins({
	subsets: ["latin"],
	display: "swap",
	fallback: ["system-ui", "arial"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--poppins",
});

const spaceGrotesk = Space_Grotesk({
	subsets: ["latin"],
	display: "swap",
	fallback: ["system-ui", "arial"],
	variable: "--spaceGrotesk",
});

export default function App({ Component, pageProps }) {
	return (
		<>
			<div
				className={`${poppins.className} ${poppins.variable} ${spaceGrotesk.variable}`}
			>
				<GlobalStyle />
				<Header />
				<Component {...pageProps} />
				<Footer />
			</div>
		</>
	);
}
