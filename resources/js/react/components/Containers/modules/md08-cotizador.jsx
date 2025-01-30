import { twMerge } from 'tailwind-merge'

import React, { useEffect, useState } from 'react'

import BG_cotizador from '../../../../../img/cotizador/Cotizador.png'
import { colorVariants } from '../../../utils/tailwindColors'
import { Image } from '../../Items/Image'
import { TextContent, TextTitle } from '../../Items/Text'
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
		<Section
			classContainer=''
			className='relative pt-0 sm:pt-0'>
			{/* fondo */}
			<section className='dev-cnt h-[489px] w-full'>
				<Image
					className='dev-cnt absolute left-0 -z-10 h-[489px] w-full object-cover'
					src={BG_cotizador}
					alt='Fondo para cotizador de familia reunida'
				/>
				<div className='dev-cnt text-main_b'>textos</div>
			</section>

			{/* Cotizador */}
			<section className='dev-cnt grid w-full max-w-[973px] gap-5 bg-arena_2 pb-8 pt-4'>
				<TextTitle
					color='ventura'
					className={`font-geo-700 font-bold`}>
					Cotizador
				</TextTitle>

				<main className='dev-cnt flex flex-wrap justify-center gap-x-4 gap-y-6 px-4'>
					{/*<div> </div>*/}

					<ContenedorOpciones className=''>
						<p className='p-3 font-bold'>Precio: ${modeloSeleccionado.precio.toLocaleString()}</p>
					</ContenedorOpciones>

					{/* <div></div> */}

					<ContenedorOpciones className=''>
						<label>30% Enganche</label>
						<p className='p-3'>${enganche.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
					</ContenedorOpciones>
					<ContenedorOpciones className=''>
						<label>20% Contraentrega</label>
						<p className='p-3'>${contraEntrega.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
					</ContenedorOpciones>

					<ContenedorOpciones className=''>
						<label>Mensualidad</label>
						<p className='p-3'>${mensualidad.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
					</ContenedorOpciones>
				</main>
			</section>
		</Section>
	)
}

const ContenedorOpciones = ({ children, className }) => (
	<div
		className={twMerge('relative h-[49px] min-w-[228px] max-w-[259px] border-2 border-ventura lg:w-full', className)}>
		<TextContent
			color='ventura'
			className='font-geo-700 text-left'>
			{React.Children.map(children, child => {
				console.log(child.props)

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
