import { useEffect, useState } from 'react';



import Main_screen from '../components/Containers/Main-screen.';
import MD01_BannerInicial from '../components/Containers/modules/md01-inicial';
import MD02_UbicacionMerida from '../components/Containers/modules/md02-ubimerida';
import MD03_SoloImagen from '../components/Containers/modules/md03-soloimagen';
import MD04_Almasur from '../components/Containers/modules/md04-almasur'
import MD05_SoloImagenSillones from '../components/Containers/modules/md05-soloimgSillones'
import MD06_MapaAlmasur from '../components/Containers/modules/md06-mapaAlmasur'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Home() {
	const [isMobile, setIsMobile] = useState(window.innerWidth < 640)
	const [dimsScreen, setDimsScreen] = useState({
		isMobile: window.innerWidth < 640,
		isTablet: window.innerWidth < 768,
		isDesktop: window.innerWidth < 1240,
	})

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 640)
			setDimsScreen({
				isMobile: window.innerWidth < 640,
				isTablet: window.innerWidth < 1024,
				isDesktop: window.innerWidth < 1240,
			})
		}
		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return (
		<div>
			<Main_screen>
				<Header isMobile={isMobile} />
				<MD01_BannerInicial />
				<MD02_UbicacionMerida isMobile={isMobile} />
				<MD03_SoloImagen />
				<MD04_Almasur dimScreen={dimsScreen} />
				<MD05_SoloImagenSillones isMobile={dimsScreen.isMobile} />
				<MD06_MapaAlmasur />

				{/* MODELOS DE CASA */}
				
				{/* COTIZADOR */}
				{/* CORREO */}
				<Footer />
			</Main_screen>
		</div>
	)
}