import { twMerge } from 'tailwind-merge'

import { useEffect, useRef, useState } from 'react'

import modeloVentura from '../../../../../img/modelos_casas/Modelo_Ventura.png'
import modeloVenturaPhone from '../../../../../img/modelos_casas/Modelo_Ventura_phone.png'
import flechaDerecha from '../../../../../img/modelos_casas/flecha_derecha.svg'
import Button from '../../Items/Button'
import { Image } from '../../Items/Image'
import { TextContent, TextSmallContent, TextTitle } from '../../Items/Text'
import Section from '../Section'

const MD07_ModelosCasa = ({ isMobile }) => {
	const modelos = [
		{
			nombre: 'Ventura',
			precio: '$2,000,000',
			descripcion: 'Descripcion del modelo',
			puntos: [{ 'planta baja': ['punto1', 'punto2'] }, { 'planta alta': ['punto3', 'punto4'] }],
			img: modeloVentura,
			imgPhone: modeloVenturaPhone,
			color: 'ventura',
		},
		{
			nombre: 'Cima',
			precio: '$2,000,000',
			descripcion: 'Descripcion del modelo',
			puntos: [{ 'planta baja': ['punto1', 'punto2'] }, { 'planta alta': ['punto3', 'punto4'] }],
			img: modeloVentura,
			imgPhone: modeloVenturaPhone,
			color: 'cima',
		},
		{
			nombre: 'Ventura',
			precio: '$2,000,000',
			descripcion: 'Descripcion del modelo',
			puntos: [{ 'planta baja': ['punto1', 'punto2'] }, { 'planta alta': ['punto3', 'punto4'] }],
			img: modeloVentura,
			imgPhone: modeloVenturaPhone,
			color: 'ventura',
		},
		{
			nombre: 'Cima',
			precio: '$2,000,000',
			descripcion: 'Descripcion del modelo',
			puntos: [{ 'planta baja': ['punto1', 'punto2'] }, { 'planta alta': ['punto3', 'punto4'] }],
			img: modeloVentura,
			imgPhone: modeloVenturaPhone,
			color: 'cima',
		},
		{
			nombre: 'Ventura',
			precio: '$2,000,000',
			descripcion: 'Descripcion del modelo',
			puntos: [{ 'planta baja': ['punto1', 'punto2'] }, { 'planta alta': ['punto3', 'punto4'] }],
			img: modeloVentura,
			imgPhone: modeloVenturaPhone,
			color: 'ventura',
		},
		{
			nombre: 'Cima',
			precio: '$2,000,000',
			descripcion: 'Descripcion del modelo',
			puntos: [{ 'planta baja': ['punto1', 'punto2'] }, { 'planta alta': ['punto3', 'punto4'] }],
			img: modeloVentura,
			imgPhone: modeloVenturaPhone,
			color: 'cima',
		},
	]

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
			className='max-w-full flex-wrap justify-stretch px-0 sm:flex-row sm:gap-5 sm:px-0 md:gap-8 lg:gap-10'>
			<div className='w-full'>
				<TextTitle className='font-geo-300 px-8 py-10 sm:pb-4'>
					Contamos con <strong>5 modelos</strong> pensados para cada familia
				</TextTitle>

				<TextSmallContent className='hidden flex-wrap justify-center gap-4 sm:flex'>
					{modelos.map((modelo, idx) => {
						const colorOnHover = `hover:bg-${modelo.color}`
						const colorChosen = `bg-${modelo.color} text-main_b`
						return (
							<ButtonCarrusel
								className={`${currIdx === idx ? `ring-2 ring-blue-500 ${colorChosen}` : ''}`}
								key={idx}
								onHover={colorOnHover}
								onClick={() => chosenModelo(idx)}>
								{modelo.nombre.toUpperCase()}
							</ButtonCarrusel>
						)
					})}

					<span className='flex w-full justify-center gap-6'>
						<Button
							className='min-w-fit'
							onClick={prevModelo}>
							<Image
								src={flechaDerecha}
								alt='Flecha izquierda'
								className='h-10 w-10 rotate-180'
							/>
						</Button>
						<Button
							className='min-w-min'
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

			<div
				ref={carruselRef}
				className='dev-cnt flex w-full flex-col gap-16 overflow-x-hidden sm:flex-row'
				style={{ scrollSnapType: 'x mandatory' }}>
				{modelos.map((modelo, idx) => (
					<div
						key={idx}
						className='flex w-full flex-wrap items-center justify-center gap-4 sm:flex-shrink-0 sm:gap-5 md:gap-8 lg:gap-10'
						style={{ scrollSnapAlign: 'start' }}>
						{isMobile ? (
							<Image
								alt={`Modelo de casa '${modelo.nombre}' Almasur`}
								src={modelo.imgPhone}
								className={`border-t-[6px] border-${modelo.color} h-full object-cover`}
							/>
						) : (
							<Image
								alt={`Modelo de casa '${modelo.nombre}' Almasur`}
								src={modelo.img}
								// className={`border-t-2 border-${modelo.color} 640:sm w-full object-cover`}
								className={`w-full object-cover sm:w-3/5 md:w-[66%] lg:w-[72%]`}
							/>
						)}
						<section className='dev-cnt flex flex-col items-start gap-4'>
							<TextTitle className={`font-geo-700 text-left font-bold text-${modelo.color}`}>
								Modelo {modelo.nombre}
								<br />
								Desde {modelo.precio} mxn
							</TextTitle>
							<TextContent className='font-aller-400'>{modelo.descripcion}</TextContent>
							<TextContent className='font-aller-400'>
								{modelo.puntos.map((pnts, i) => {
									return Object.keys(pnts).map((key, i) => {
										return (
											<ul key={i}>
												<span>{key}</span>
												{pnts[key].map((p, i) => {
													return <li key={i}>{p}</li>
												})}
											</ul>
										)
									})
								})}
							</TextContent>
							<Button className={`h-[37px] w-[214px] bg-${modelo.color} `}>¡Cotizar ahora!</Button>
						</section>
					</div>
				))}
			</div>
		</Section>
	)
}

const ButtonCarrusel = ({ children, className, onHover, onClick }) => {
	return (
		<Button
			onClick={onClick}
			className={twMerge(
				`bg-arena_3 text-cafe_tenue transition-all duration-500 ease-in-out hover:text-main_b`,
				className,
				onHover
			)}>
			{children}
		</Button>
	)
}
export default MD07_ModelosCasa
