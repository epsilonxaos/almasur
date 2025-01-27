import SalaAdentro from '../../../../../img/imgs/banner2-2.png'
import colegios from '../../../../../img/mapa/icons/colegios.svg'
import comercios from '../../../../../img/mapa/icons/comercios.svg'
import hospitales from '../../../../../img/mapa/icons/hospitales.svg'
import parques from '../../../../../img/mapa/icons/parques.svg'
import MapaAlmasur from '../../../../../img/mapa/mapa_mesa.png'
import MapaAlmasurSVG from '../../../../../img/mapa/mapa_mesa.svg'
import { Image } from '../../Items/Image'
import { TextContent, TextTitle } from '../../Items/Text'
import Section from '../Section'

const MD06_MapaAlmasur = () => {
	return (
		<Section
			classContainer='bg-cima bg-opacity-10 '
			className='relative gap-10 md:gap-0 md:px-0 md:pt-0 lg:px-0'>
			<article className='left-8 grid max-w-80 gap-5 sm:text-left md:absolute md:top-20 lg:top-32 xl:top-48'>
				<TextTitle className='font-geo-700 text-cima'>
					¡<span className='font-bold'>Almasur</span> será el centro de tu vida!
				</TextTitle>
				<TextContent className='font-aller-400 text-cafe_tenue'>
					Tu vida está siempre en movimiento, por eso lo que necesitas es un lugar donde los tuyos vivan felices y{' '}
					<span className='font-bold'> con todos los servicios al alcance de la mano. </span>
				</TextContent>
				<TextContent className='font-aller-400'>
					<ul className='flex flex-wrap gap-3 sm:flex-col'>
						<ElementosLista icon={comercios}>Comercios</ElementosLista>
						<ElementosLista icon={hospitales}>Hospitales</ElementosLista>
						<ElementosLista icon={colegios}>Colegios</ElementosLista>
						<ElementosLista icon={parques}>Parques y canchas deportivas</ElementosLista>
					</ul>
				</TextContent>
			</article>
			<Image
				className='right-0 min-h-[408px] w-full min-w-[502px] self-end object-right-bottom md:max-w-[450px] lg:max-w-[700px] xl:max-w-[1058px]'
				src={MapaAlmasurSVG}
				alt='Mapa de Almasur'
				objectFit='cover'
			/>
			<Image
				className='w-[280px] max-w-[1058px] sm:w-4/5'
				src={SalaAdentro}
				alt='Sala comedor de casa Almasur'
			/>
		</Section>
	)
}

const ElementosLista = ({ children, icon }) => {
	return (
		<li className='flex items-center gap-2'>
			<Image
				src={icon}
				alt='Icono de comercios'
				className='h-6 w-6'
			/>
			{children}
		</li>
	)
}

export default MD06_MapaAlmasur
