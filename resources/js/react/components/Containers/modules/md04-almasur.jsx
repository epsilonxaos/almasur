import { twMerge } from 'tailwind-merge'

import logoIsotipo from '../../../../../img/icons/icon_isotipo.svg'
import imgsCasas from '../../../../../img/imgs/casas.png'
import imgsCasas_1 from '../../../../../img/imgs/casas_1.png'
import imgsCasas_2 from '../../../../../img/imgs/casas_2.png'
import imgsCasas_3 from '../../../../../img/imgs/casas_3.png'
import Button from '../../Items/Button'
import { Image } from '../../Items/Image'
import { TextContent, TextSmallContent, TextTitle } from '../../Items/Text'
import Section from '../Section'

const MD04_Almasur = ({ dimScreen }) => {
	const { isMobile, isTablet, isDesktop } = dimScreen

	return (
		<Section
			classBackground='bg-arena_2'
			className='pb-8 pt-0 sm:py-0'>
			<section className='relative flex w-full flex-col items-center sm:-top-20'>
				<div className='flex w-full max-w-[567px] justify-center bg-arena_2 py-14'>
					<Image
						className='absolute -top-9 h-[71px] w-[99px]'
						alt='Isotipo de Almasur'
						src={logoIsotipo}
					/>
					<div className='grid max-w-[305px] gap-2'>
						<TextTitle className={`font-geo font-light`}>
							<p>
								<span className='font-bold text-pacifico'>Almasur </span>
								te ofrece viviendas con un diseño moderno y diferente
							</p>
						</TextTitle>
						<Button className={'pointer-events-none h-[30px] w-full bg-pacifico'}>
							<TextContent>Precios desde $1,299,000 mxn</TextContent>
						</Button>
						<TextSmallContent className='font-aller'>*Precios sujetos a cambios sin previo aviso.</TextSmallContent>
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

					<TextContent className='flex w-full max-w-[580px] flex-col items-center gap-4 text-cafe_tenue'>
						<p className='font-geo max-w-[471px] px-6 sm:px-0'>
							Todas las casas vienen con preparación para instalación de aire acondicionado en las habitaciones y el
							área de comedor. También incluimos:
						</p>
						<article className='font-geomanist flex w-full flex-wrap justify-between'>
							<ContenedorElementoExtra className='border-t-[0.25px]'>
								<ElementosExtra>Rotoplas 600 lts.</ElementosExtra>
								<ElementosExtra>Cocinas con granito en las mesetas*</ElementosExtra>
								<ElementosExtra>Accesorios de baños.</ElementosExtra>
							</ContenedorElementoExtra>
							<ContenedorElementoExtra className='border-b-[0.25px]'>
								<ElementosExtra>Bomba y cisterna*</ElementosExtra>
								<ElementosExtra>Llaves mezcladoras de baño y cocina.</ElementosExtra>
								<ElementosExtra>Acabados de pasta lisa en interiores.</ElementosExtra>
							</ContenedorElementoExtra>
						</article>
					</TextContent>
				</section>
			</section>
		</Section>
	)
}

const ContenedorElementoExtra = ({ children, className }) => (
	<ul
		className={twMerge(
			`mx-auto w-full max-w-[291px] border-cafe_tenue sm:mx-0 sm:max-w-[259px] sm:border-y-[0.25px]`,
			className
		)}>
		{children}
	</ul>
)

const ElementosExtra = ({ children }) => {
	return <li className='border-y-[0.125px] border-cafe_tenue py-2'>{children}</li>
}
export default MD04_Almasur
