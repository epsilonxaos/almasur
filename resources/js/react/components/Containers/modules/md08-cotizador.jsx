import { twMerge } from 'tailwind-merge';

import React, { useEffect, useState } from 'react'

import BG_cotizador from '../../../../../img/cotizador/Cotizador.png'
import { colorVariants } from '../../../utils/tailwindColors'
import { Image } from '../../Items/Image'
import { TextContent, TextSmallContent, TextTitle } from '../../Items/Text'
import { IconIsotipoComponent } from '../../Items/icons'
import Select from '../../Items/select'
import Section from '../Section'

// Opciones de plazo
const plazos = [12, 24, 36, 48, 60]

const MD08_Cotizador = ({ modelos }) => {
	const [modeloSeleccionado, setModeloSeleccionado] = useState(modelos[0])
	const [plazo, setPlazo] = useState(plazos[0])
	const [enganche, setEnganche] = useState(0)
	const [contraEntrega, setContraEntrega] = useState(0)
	const [mensualidad, setMensualidad] = useState(0)

	useEffect(() => {
		const calcularCotizacion = () => {
			const engancheCalculado = modeloSeleccionado.precio * 0.3
			const contraEntregaCalculada = modeloSeleccionado.precio * 0.2
			const montoFinanciar = modeloSeleccionado.precio - engancheCalculado - contraEntregaCalculada
			const mensualidadCalculada = montoFinanciar / plazo

			setEnganche(engancheCalculado)
			setContraEntrega(contraEntregaCalculada)
			setMensualidad(mensualidadCalculada)
		}

		calcularCotizacion()
	}, [modeloSeleccionado, plazo])

	return (
		<>
			<Section
				classBackground='relative sm:mt-4 mt-24 h-[489px] w-full '
				className='p-0 sm:p-0'>
				{/* fondo */}
				<Image
					className='absolute left-0 top-0 -z-10 h-[489px] w-full object-cover'
					objectFit='cover'
					src={BG_cotizador}
					alt='Fondo para cotizador de familia reunida'
				/>

				{/* Información */}
				<section className='flex w-full flex-col gap-6 p-8 text-main_b'>
					<TextTitle className='place-items-center font-geo text-lg font-normal'>
						<IconIsotipoComponent
							fill={'white'}
							className='h-[63.72px] w-[91.83px] items-center'
						/>
						<p>
							Financiamiento directo con nosotros <br className='hidden sm:flex' />
							<strong>
								<u>Desde $1,299,000 mxn</u>
							</strong>
						</p>
					</TextTitle>
					<TextContent className='flex flex-col justify-around gap-1 font-geo sm:flex-row'>
						<p>30% enganche</p>
						<p>50% mensualidades</p>
						<p>20% contraentrega</p>
					</TextContent>
					<TextSmallContent className='font-aller text-[#EDECE5B2]'>
						Información meramente informativa y sujeto a cambio de precio sin previo aviso*
					</TextSmallContent>
				</section>
			</Section>

			{/* Cotizador */}
			<Section className='relative p-0 sm:p-0'>
				<section className='relative bottom-[100px] mb-[-50px] grid w-full gap-5 bg-arena_2 pb-8 pt-4 sm:bottom-[150px] sm:mb-[-100px] sm:max-w-[973px] md:bottom-[175px] md:mb-[-120px]'>
					<TextTitle
						color='pacifico'
						className={`font-geo`}>
						Cotizador
					</TextTitle>

					<main className='flex flex-wrap justify-center gap-x-4 gap-y-6 px-4'>
						<ContenedorOpciones className={'bg-pacifico'}>
							<Select
								colorSelected='white'
								options={modelos.map(modelo => ({
									value: modelo.modelo,
									label: modelo.modelo,
									chosen: (
										<p>
											Cotizando el{' '}
											<strong>
												<u>Modelo {modelo.modelo}</u>
											</strong>
										</p>
									),
								}))}
								value={modeloSeleccionado.modelo}
								onChange={value => setModeloSeleccionado(modelos.find(m => m.modelo === value) || modelos[0])}
							/>
						</ContenedorOpciones>
						<ContenedorOpciones>
							<p>
								<strong>Precio: </strong>${modeloSeleccionado.precio.toLocaleString()}
							</p>
						</ContenedorOpciones>
						<ContenedorOpciones>
							<Select
								options={plazos.map(p => ({
									value: p.toString(),
									label: `${p} meses`,
									chosen: <strong>{`${p} meses`}</strong>,
								}))}
								value={plazo.toString()}
								onChange={value => setPlazo(Number(value))}
							/>
						</ContenedorOpciones>
						<ContenedorOpciones>
							<label>30% Enganche</label>
							<p>${enganche.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
						</ContenedorOpciones>
						<ContenedorOpciones>
							<label>20% Contraentrega</label>
							<p>${contraEntrega.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
						</ContenedorOpciones>
						<ContenedorOpciones>
							<label>Mensualidad</label>
							<p>${mensualidad.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
						</ContenedorOpciones>
					</main>
				</section>
			</Section>
		</>
	)
}

export const ContenedorOpciones = ({ children, className, textColor = 'pacifico' }) => (
	<div
		className={twMerge(
			'relative h-[49px] min-w-[228px] max-w-[259px] border-2 border-pacifico p-3 lg:w-full',
			className
		)}>
		<TextContent
			color={textColor}
			className='font-geo text-left font-bold'>
			{React.Children.map(children, child => {
				return child.type === 'label'
					? React.cloneElement(child, {
							className: twMerge(`absolute -bottom-5 left-0`, child.props.className),
						})
					: child
			})}
		</TextContent>
	</div>
)

export default MD08_Cotizador