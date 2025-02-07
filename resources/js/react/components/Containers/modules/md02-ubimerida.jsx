import logoIsotipo from '../../../../../img/icons/icon_isotipo.svg'
import ubiMerida from '../../../../../img/imgs/img_merida.png'
import { Image } from '../../Items/Image'
import { TextTitle } from '../../Items/Text'
import Section from '../Section'

const MD02_UbicacionMerida = ({ isMobile }) => {
	return (
		<Section
			classBackground='bg-pacifico_tenue'
			className='overflow-x-hidden px-0 py-14 sm:py-16'>
			<section className='flex w-full flex-col items-center justify-center gap-y-16 lg:flex-row lg:flex-wrap lg:justify-between'>
				<div className={`${isMobile ? 'px-8' : ''} text-ventura grid max-w-[400px] gap-8 lg:w-1/3 lg:text-left`}>
					<TextTitle>
						<p className='font-geo'>Ubicado en Mérida, Yucatán.</p>
						<p className='font-aller font-normal'>
							Es también la capital cultural y económica del sureste de México. La Ciudad Blanca es hoy una de las
							entidades con mayores índices de seguridad y calidad de vida en México, comparable con las ciudades más
							seguras del mundo.
						</p>
					</TextTitle>
					<TextTitle>
						<p className='font-geo'>¡Tu corazón pertenece al Sur!</p>
						<p className='font-aller font-normal'>
							Es también la capital cultural y económica del sureste de México. La Ciudad Blanca es hoy una de las
							entidades con mayores índices de seguridad y calidad de vida en México, comparable con las ciudades más
							seguras del mundo.
						</p>
					</TextTitle>
				</div>

				<div className='hidden h-[403px] w-[2px] bg-ventura lg:flex'></div>

				<Image
					// className={`${isMobile ? 'border-t-8 border-ventura' : ''} max-w-[700px] md:max-w-48 lg:max-w-[700px]`}
					className={`max-w-[700px] border-t-[6px] border-ventura md:border-none lg:w-3/5`}
					src={ubiMerida}
					alt='Isotipo de Almasur'
				/>
			</section>
		</Section>
	)
}
export default MD02_UbicacionMerida
