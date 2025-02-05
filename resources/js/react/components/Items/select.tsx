import { useEffect, useRef, useState } from 'react'

import Flecha from '../../../../img/cotizador/icon_flecha_abajo.svg'
import { Image } from './Image'
import { TextContent } from './Text'
import { IconFlechaAbajo } from './icons'

interface SelectProps {
	options: { value: string; label: string }[]
	value: string
	onChange: (value: string) => void
	placeholder?: string
	colorSelected?: string
}

const Select = ({ options, value, onChange, placeholder, colorSelected }: SelectProps) => {
	const [isOpen, setIsOpen] = useState(false)
	const selectRef = useRef<HTMLDivElement>(null)

	// Apoyo click fuera del select
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
				setIsOpen(false)
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [])

	const selectedOption = options.find(option => option.value === value)

	return (
		<div
			ref={selectRef}
			className='relative'>
			<div
				// pb-3 por el contenedor, valor no definido. Podría cambiar
				className='flex cursor-pointer items-center justify-between pb-3'
				onClick={() => setIsOpen(!isOpen)}>
				<TextContent
					color={`${colorSelected ?? 'pacifico'}`}
					className='font-geo-700 text-left'>
					{selectedOption ? selectedOption.label : placeholder || 'Seleccionar'}
				</TextContent>
				<IconFlechaAbajo fill={colorSelected} className='w-[14px]'/>
				<Image
					src={Flecha}
					alt='Flecha para las opciones'
					objectFit='contain'
				/>
			</div>
			{isOpen && (
				// <ul className='absolute -left-[15px] z-10 mt-2 w-[calc(100%+30px)] rounded-md bg-neutral-50 shadow-lg'>
				<ul className='absolute z-10 mt-2 w-full rounded-md bg-neutral-50 shadow-lg'>
					{options.map(option => (
						<li
							key={option.value}
							className='cursor-pointer p-2 hover:bg-gray-100'
							onClick={() => {
								onChange(option.value)
								setIsOpen(false)
							}}>
							{option.label}
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

export default Select
