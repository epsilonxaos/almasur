import logoIsotipo from '../../../../../img/icons/icon_isotipo.svg'
import { Image } from '../../Items/Image'
import { TextTitle } from '../../Items/Text'
import Section from '../Section'

const MD01_BannerInicial = () => {
	return (
		<Section
			notFullWidth
			className='relative mb-20 mt-24 bg-cima'>
			<Image
				className='absolute -top-14'
				src={logoIsotipo}
				alt='Isotipo de Almasur'
				width={103}
			/>
			<TextTitle className='font-geo font-light text-main_b'>
				<p>¡Tu corazón pertenece al Sur!</p>
				<p>
					Conoce nuestro desarrollo <span className='font-bold'>Almasur</span>, creado a tu medida.
				</p>
				<p className='font-bold'>Precios desde 1,299,000 mxn</p>
			</TextTitle>
		</Section>
	)
}
export default MD01_BannerInicial
