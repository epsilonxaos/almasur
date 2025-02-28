import { twMerge } from 'tailwind-merge'

import { useEffect, useRef, useState } from 'react'

import flechaDerecha from '../../../../../img/icons/icon_flecha_derecha.svg'
import { colorVariants, getColorClass } from '../../../utils/tailwindColors'
import Button from '../../Items/Button'
import { Image } from '../../Items/Image'
import { TextContent, TextSmallContent, TextTitle } from '../../Items/Text'
import { IconIsotipoComponent } from '../../Items/icons'
import Section from '../Section'

const MD07_ModelosCasa = ({ isMobile, modelos }) => {
	const carruselRef = useRef(null)
	const [currIdx, setCurrIdx] = useState(0)
	const prevModelo = () => {
		setCurrIdx(prevIdx => (prevIdx - 1 + modelos.length) % modelos.length)
	}
	const nextModelo = () => {
		setCurrIdx(prevIdx => (prevIdx + 1) % modelos.length)
	}
	const chosenModelo = idx => {
		setCurrIdx(idx)
	}
	useEffect(() => {
		if (carruselRef.current) {
			const scrollPosition = currIdx * carruselRef.current.offsetWidth
			carruselRef.current.scrollTo({
				left: scrollPosition,
				behavior: 'smooth',
			})
		}
	}, [currIdx])

	return (
		<Section
			classContainer=''
			className='flex-wrap justify-stretch px-0 sm:flex-row sm:px-0'>
			{/* Contenedor para controles del carrusel */}
			<div className='relative w-full px-2'>
				<TextTitle className='px-8 py-10 font-geo font-normal text-cafe_tenue sm:pb-4'>
					Contamos con <strong>5 modelos</strong> pensados para cada familia
				</TextTitle>

				<TextSmallContent className='hidden flex-wrap justify-center gap-4 sm:flex'>
					{modelos.map((modelo, idx) => {
						// const colorChosen = ` ${getColorClass('bg', modelo.color)} text-main_b`
						return (
							<ButtonCarrusel
								isChosen={currIdx === idx}
								key={idx}
								onHover={modelo.color}
								onClick={() => chosenModelo(idx)}>
								{modelo.modelo.toUpperCase()}
							</ButtonCarrusel>
						)
					})}

					<span className='absolute -bottom-10 right-[2%] z-40 flex gap-6 xl:-bottom-[80px]'>
						<Button
							className='min-w-fit opacity-75 hover:opacity-100'
							onClick={prevModelo}>
							<Image
								src={flechaDerecha}
								alt='Flecha izquierda'
								className='h-10 w-10 rotate-180'
							/>
						</Button>
						<Button
							className='min-w-min opacity-75 hover:opacity-100'
							onClick={nextModelo}>
							<Image
								src={flechaDerecha}
								alt='Flecha derecha'
								className='h-10 w-10'
							/>
						</Button>
					</span>
				</TextSmallContent>
			</div>

			{/* Carrusel */}
			<div
				ref={carruselRef}
				className='flex w-full flex-col gap-16 overflow-x-hidden sm:flex-row'
				style={{ scrollSnapType: 'x mandatory' }}>
				{modelos.map((modelo, idx) => {
					return (
						<div
							key={idx}
							className='flex min-h-fit w-full flex-wrap items-center justify-center gap-y-4 sm:flex-shrink-0 sm:justify-between'
							style={{ scrollSnapAlign: 'start' }}>
							{/* Contenedor imagen e isotipo */}
							<div className='relative mx-auto sm:mt-5 sm:w-3/5 md:mx-0 md:w-[66%] lg:mt-11 lg:w-[70%]'>
								<Image
									alt={`Modelo de casa '${modelo.nombre}' Almasur`}
									src={modelo.img}
									className={isMobile ? `border-t-[6px] ${colorVariants[modelo.color].border}` : ''}
								/>
								<IconIsotipoComponent
									fill={modelo.color}
									className={`absolute -top-4 left-[7%] hidden w-[10%] max-w-[85px] sm:flex md:-top-6 lg:-top-8`}
								/>
							</div>

							{/* Contenedor para los textos */}
							<section className='mx-auto flex max-w-[250px] flex-col items-start gap-4 text-left text-cafe_tenue md:w-[29%] lg:w-[24%]'>
								<TextTitle
									color={modelo.color}
									className={`font-geo`}>
									Modelo {modelo.nombre}
									<br />
									Desde ${parseInt(modelo.precio).toLocaleString()} mxn
								</TextTitle>
								<TextContent className='font-aller'>{modelo.descripcion}</TextContent>
								<TextContent className='font-aller'>
									{modelo.puntos.map((planta, idx) =>
										Object.entries(planta).map(([key, value]) => (
											<ul
												className='mb-4 grid gap-1'
												key={idx}>
												<span>{key}</span>
												{value.map((p, i) => {
													return (
														<li
															key={i}
															className='list-inside list-disc pl-[6px]'>
															{p}
														</li>
													)
												})}
											</ul>
										))
									)}
								</TextContent>
								<Button className={`h-[37px] w-[214px] ${colorVariants[modelo.color].background} `}>
									<TextContent>
										<strong>¡Cotizar ahora!</strong>
									</TextContent>
								</Button>
							</section>
						</div>
					)
				})}
			</div>
		</Section>
	)
}

const ButtonCarrusel = ({ children, className, onHover, onClick, isChosen }) => {
	const chosenClass = isChosen ? `ring-2 ring-blue-500 text-main_b ${colorVariants[onHover].background}` : ''
	return (
		<Button
			onClick={onClick}
			className={twMerge(
				`${colorVariants[onHover].hover} bg-arena_3 font-geomanist text-cafe_tenue transition-all duration-[350ms] ease-in-out hover:text-main_b`,
				chosenClass,
				className
			)}>
			{children}
		</Button>
	)
}
export default MD07_ModelosCasa
