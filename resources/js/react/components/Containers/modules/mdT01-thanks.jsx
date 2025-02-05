import logoIsotipo from '../../../../../img/icons/icon_isotipo.svg'
import BG_Thanks from '../../../../../img/imgs/Thank_You_Page.png'
import { Image } from '../../Items/Image'
import { TextContent, TextTitle } from '../../Items/Text'
import Section from '../Section'

const MDT01_Thanks = () => {
	return (
		<Section
			notFullWidth
			classBackground='relative flex justify-center items-center flex-grow'
			classContainer='w-full'
			className='p-0 sm:p-0'>
			<Image
				className='absolute left-0 top-0 -z-10 h-full w-full object-[20%] object-cover sm:object-left'
				src={BG_Thanks}
				alt='Casa Almasur como fondo de agradecimiento'
			/>
			<main className='relative grid min-h-[217px] w-full max-w-[833px] place-items-center p-10'>
				<Image
					className='absolute -top-12 sm:-top-14'
					src={logoIsotipo}
					alt='Isotipo de Almasur'
					width={103}
				/>
				<div className='absolute -z-10 h-full w-full bg-ventura opacity-80'></div>
				<div className='grid max-w-[379px] gap-3 text-main_b'>
					<TextTitle className='font-geo-700 sm:text-[20px]'>
						<p>Gracias por considerar Almasur para convertirse en tu nuevo hogar. </p>
					</TextTitle>
					<TextContent className='font-aller-400'>
						Estamos emocionados de poder ayudarte a encontrar la casa perfecta para ti y tu familia.
					</TextContent>
				</div>
			</main>
		</Section>
	)
}

export default MDT01_Thanks
