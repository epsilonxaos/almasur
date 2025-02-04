import { twMerge } from 'tailwind-merge'

import React, { useEffect, useState } from 'react'

import BG_cotizador from '../../../../../img/cotizador/Cotizador.png'
import { colorVariants } from '../../../utils/tailwindColors'
import { Image } from '../../Items/Image'
import { TextContent, TextSmallContent, TextTitle } from '../../Items/Text'
import { IconIsotipoComponent } from '../../Items/icons'
import Select from '../../Items/select'
import Section from '../Section'

const modelos = [
	{ nombre: 'Modelo Ventura', precio: 1299000 },
	{ nombre: 'Modelo Pacífico', precio: 1435000 },
	{ nombre: 'Modelo Bonanza', precio: 1694000 },
]

// Opciones de plazo
const plazos = [12, 24, 36, 48, 60]

const MD08_Cotizador = () => {
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
					<TextTitle className='font-geo-400 place-items-center text-lg'>
						<IconIsotipoComponent
							fill={'white'}
							className='h-[63.72px] w-[91.83px] items-center'
						/>
						<p>
							Financiamiento directo con nosotros <br className='hidden sm:flex' />
							<span className='font-geo-700 font-bold underline'>Desde $1,299,000 mxn</span>
						</p>
					</TextTitle>
					<TextContent className='font-geo-400 flex flex-col justify-around gap-1 sm:flex-row'>
						<p>30% enganche</p>
						<p>50% mensualidades</p>
						<p>20% contraentrega</p>
					</TextContent>
					<TextSmallContent className='font-aller-400 text-[#EDECE5B2]'>
						Información meramente informativa y sujeto a cambio de precio sin previo aviso*
					</TextSmallContent>
				</section>
			</Section>

			{/* Cotizador */}
			<Section className='relative p-0 sm:p-0'>
				<section className='relative bottom-[100px] mb-[-50px] grid w-full gap-5 bg-arena_2 pb-8 pt-4 sm:bottom-[150px] sm:mb-[-100px] sm:max-w-[973px] md:bottom-[175px] md:mb-[-120px]'>
					<TextTitle
						color='ventura'
						className={`font-geo-700 font-bold`}>
						Cotizador
					</TextTitle>

					<main className='flex flex-wrap justify-center gap-x-4 gap-y-6 px-4'>
						<ContenedorOpciones className=''>
							<Select
								options={modelos.map(modelo => ({ value: modelo.nombre, label: modelo.nombre }))}
								value={modeloSeleccionado.nombre}
								onChange={value => setModeloSeleccionado(modelos.find(m => m.nombre === value) || modelos[0])}
							/>
						</ContenedorOpciones>

						<ContenedorOpciones className=''>
							<p className='font-bold'>Precio: ${modeloSeleccionado.precio.toLocaleString()}</p>
						</ContenedorOpciones>

						<ContenedorOpciones className=''>
							<Select
								options={plazos.map(p => ({ value: p.toString(), label: `${p} meses` }))}
								value={plazo.toString()}
								onChange={value => setPlazo(Number(value))}
							/>
						</ContenedorOpciones>

						<ContenedorOpciones className=''>
							<label>30% Enganche</label>
							<p className=''>${enganche.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
						</ContenedorOpciones>
						<ContenedorOpciones className=''>
							<label>20% Contraentrega</label>
							<p className=''>${contraEntrega.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
						</ContenedorOpciones>
						<ContenedorOpciones className=''>
							<label>Mensualidad</label>
							<p className=''>${mensualidad.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
						</ContenedorOpciones>
					</main>
				</section>
			</Section>
		</>
	)
}

export const ContenedorOpciones = ({ children, className }) => (
	<div
		className={twMerge(
			'relative h-[49px] min-w-[228px] max-w-[259px] border-2 border-ventura p-3 lg:w-full',
			className
		)}>
		<TextContent
			color='ventura'
			className='font-geo-700 text-left'>
			{React.Children.map(children, child => {
				return child.type === 'label'
					? React.cloneElement(child, {
							className: twMerge(`absolute -bottom-4 left-0`, child.props.className),
						})
					: child
			})}
		</TextContent>
	</div>
)

export default MD08_Cotizador
