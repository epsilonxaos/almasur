import { useEffect, useState } from 'react'

import Main_screen from '../components/Containers/Main-screen.'
import MD01_BannerInicial from '../components/Containers/modules/md01-inicial'
import MD02_UbicacionMerida from '../components/Containers/modules/md02-ubimerida'
import MD03_SoloImagen from '../components/Containers/modules/md03-soloimagen'
import MD04_Almasur from '../components/Containers/modules/md04-almasur'
import MD05_SoloImagenSillones from '../components/Containers/modules/md05-soloimgSillones'
import MD06_MapaAlmasur from '../components/Containers/modules/md06-mapaAlmasur'
import MD07_ModelosCasa from '../components/Containers/modules/md07-modelos'
import MD08_Cotizador from '../components/Containers/modules/md08-cotizador'
import MD09_ContactUs from '../components/Containers/modules/md09-contactUs'
import Footer from '../components/Footer'
import Header from '../components/Header'

import modeloBonanza from '../../../img/modelos_casas/Modelo_Bonanza.png'
import modeloCima from '../../../img/modelos_casas/Modelo_Cima.png'
import modeloMagna from '../../../img/modelos_casas/Modelo_Magna.png'
import modeloPacifico from '../../../img/modelos_casas/Modelo_Pacifico.png'
import modeloVentura from '../../../img/modelos_casas/Modelo_Ventura.png'

export default function Home() {
	const [isMobile, setIsMobile] = useState(window.innerWidth < 640)
	const [dimsScreen, setDimsScreen] = useState({
		isMobile: window.innerWidth < 640,
		isTablet: window.innerWidth < 768,
		isDesktop: window.innerWidth < 1240,
	})

	const modelos = [
		{
			modelo: 'Ventura',
			precio: 1299000,
			descripcion: 'Una casa donde la comodidad y la calidez se unen para crear un hogar ideal para ti y tu familia.',
			puntos: [
				{
					'Planta baja': [
						'Terreno de 160 m2.',
						'Construcción de 71 m2.',
						'Cocina.',
						'Sala y comedor corridos.',
						'2 recámaras con área de closet.',
						'Área para tomar el fresco.',
						'Baño completo.',
						'Con preparación para un segundo nivel.',
					],
				},
			],
			img: modeloVentura,
			color: 'ventura',
		},
		{
			modelo: 'Pacífico',
			precio: 1435000,
			descripcion: 'Un refugio de paz y tranquilidad para ti y tus seres queridos.',
			puntos: [
				{
					'Planta baja': [
						'Terreno de 160 m2',
						'Construcción de 77 m2',
						'Cocina.',
						'Sala y comedor corridos.',
						'2 recámaras con área de closet.',
						'Área para tomar el fresco.',
						'2 baños completos.',
						'Con preparación para un segundo nivel.',
					],
				},
			],
			img: modeloPacifico,
			color: 'pacifico',
		},
		{
			modelo: 'Bonanza',
			precio: 1694000,
			descripcion: 'Diseñamos este modelo para que vivas momentos inolvidables con tus seres queridos.',
			puntos: [
				{
					'Planta baja': [
						'Terreno desde 180 m2',
						'Construcción de 97 m2',
						'Cocina.',
						'Sala y comedor corridos.',
						'Área para tomar el fresco.',
						'Medio baño.',
						'Planta alta',
						'2 recámaras con área de closet.',
						'Baño completo.',
					],
				},
			],
			img: modeloBonanza,
			color: 'bonanza',
		},
		{
			modelo: 'Magna',
			precio: 2066453,
			descripcion: 'Una casa creada pensando en todo lo necesario para la comodidad de tu familia.',
			puntos: [
				{
					'Planta baja': [
						'Terrenos desde 200 m2',
						'Construcción de 108 m2',
						'Cocina.',
						'Recámara con área de closet y baño completo.',
						'Sala y comedor corridos.',
						'Área para tomar el fresco.',
						'Medio baño.',
					],
				},
				{
					'Planta alta': ['2 recámaras con área de closet.', 'Baño completo.'],
				},
			],
			img: modeloMagna,
			color: 'magna',
		},
		{
			modelo: 'Cima',
			precio: 1965000,
			descripcion: 'Una casa equipada con todo lo que buscas.',
			puntos: [
				{
					'Planta baja': [
						'Terreno desde 160 m2',
						'Construcción de 117 m2',
						'Sala y comedor corridos.',
						'Cocina.',
						'1 recámara con área de closet.',
						'Baño completo.',
						'Cubo de luz.',
						'Área de servicio.',
						'Área para tomar el fresco.',
						'Estacionamiento para 2 vehículos.',
					],
				},
				{
					'Planta alta': ['2 recámaras con área de closet.', 'Baño completo.'],
				},
			],
			img: modeloCima,
			color: 'cima',
		},
	]

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
		<Main_screen>
			<Header isMobile={isMobile} />
			<MD01_BannerInicial />
			<MD02_UbicacionMerida isMobile={isMobile} />
			<MD03_SoloImagen />
			<MD04_Almasur dimScreen={dimsScreen} />
			<MD05_SoloImagenSillones isMobile={dimsScreen.isMobile} />
			<MD06_MapaAlmasur />
			<MD07_ModelosCasa
				modelos={modelos}
				isMobile={dimsScreen.isMobile}
			/>
			{/* <MD08_Cotizador modelos={modelos} /> */}
			<MD09_ContactUs isMobile={dimsScreen.isMobile} />
			<Footer />
		</Main_screen>
	)
}
