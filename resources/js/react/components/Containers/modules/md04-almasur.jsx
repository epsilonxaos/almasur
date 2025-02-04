import logoIsotipo from '../../../../../img/icons/icon_isotipo.svg';
import imgsCasas from '../../../../../img/imgs/casas.png';
import imgsCasas_1 from '../../../../../img/imgs/casas_1.png';
import imgsCasas_2 from '../../../../../img/imgs/casas_2.png';
import imgsCasas_3 from '../../../../../img/imgs/casas_3.png';
import Button from '../../Items/Button';
import { Image } from '../../Items/Image';
import { TextContent, TextSmallContent, TextTitle } from '../../Items/Text';
import Section from '../Section';


const MD04_Almasur = ({ dimScreen }) => {
	const { isMobile, isTablet, isDesktop } = dimScreen

	return (
		<Section
			classContainer='bg-arena_1'
			className='pb-8 pt-0 sm:py-0'>
			<section className='relative flex w-full flex-col items-center sm:-top-20'>
				<div className='flex w-full max-w-[567px] justify-center bg-arena_1 py-14'>
					<Image
						className='absolute -top-9 h-[71px] w-[99px]'
						alt='Isotipo de Almasur'
						src={logoIsotipo}
					/>
					<div className='grid max-w-[305px] gap-2'>
						<TextTitle className={`font-geo-300`}>
							<p>
								<span className='font-geo-700 font-bold text-ventura'>Almasur </span>
								te ofrece viviendas con un diseño moderno y diferente
							</p>
						</TextTitle>
						<Button className={'h-[30px] w-full bg-ventura'}>
							<TextContent>Precios desde $1,299,000 mxn</TextContent>
						</Button>
						<TextSmallContent>*Precios sujetos a cambios sin previo aviso.</TextSmallContent>
					</div>
				</div>

				{/* CASA */}
				<section className='flex flex-col items-center gap-y-8'>
					<Image
						className={`h-[299px] object-left`}
						alt='Modelos de casas Almasur'
						src={isMobile ? imgsCasas_1 : isTablet ? imgsCasas_2 : isDesktop ? imgsCasas_3 : imgsCasas}
						objectFit='contain'
					/>

					<TextContent className='flex text-cafe_tenue w-full max-w-[580px] flex-col items-center gap-4'>
						<p className='font-geo-400 w-full max-w-[471px] px-6 sm:px-0'>
							Todas las casas vienen con preparación para instalación de aire acondicionado en las habitaciones y el
							área de comedor. También incluimos:
						</p>
						<article className='font-Geomanist-400 flex w-full flex-wrap justify-between'>
							<ul className='border-cafe_tenue mx-auto w-full max-w-[291px] border-t-[1px] sm:mx-0 sm:max-w-[259px] sm:border-y-[1px]'>
								<ElementosExtra>Rotoplas 600 lts.</ElementosExtra>
								<ElementosExtra>Cocinas con granito en las mesetas*</ElementosExtra>
								<ElementosExtra>Accesorios de baños.</ElementosExtra>
							</ul>
							<ul className='border-cafe_tenue mx-auto w-full max-w-[291px] border-b-[1px] sm:mx-0 sm:max-w-[259px] sm:border-y-[1px]'>
								<ElementosExtra>Bomba y cisterna*</ElementosExtra>
								<ElementosExtra>Llaves mezcladoras de baño y cocina.</ElementosExtra>
								<ElementosExtra>Acabados de pasta lisa en interiores.</ElementosExtra>
							</ul>
						</article>
					</TextContent>
				</section>
			</section>
		</Section>
	)
}

const ElementosExtra = ({ children }) => {
	return <li className='border-cafe_tenue border-y-[1px] py-2'>{children}</li>
}
export default MD04_Almasur