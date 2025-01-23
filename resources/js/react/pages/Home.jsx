import Main_screen from '../components/Containers/Main-screen.'
import Section from '../components/Containers/Section'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Home() {
	return (
		<div>
			<Main_screen>
				<Header />
				<Section>Hola mundo</Section>
				<Footer />
			</Main_screen>
		</div>
	)
}
