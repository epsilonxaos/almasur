import { useEffect, useRef, useState } from 'react'

import Flecha from '../../../../img/cotizador/icon_flecha_abajo.svg'
import { Image } from './Image'

interface SelectProps {
	options: { value: string; label: string }[]
	value: string
	onChange: (value: string) => void
	placeholder?: string
}

const Select = ({ options, value, onChange, placeholder }: SelectProps) => {
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
			{/* <ContenedorOpciones></ContenedorOpciones> */}
			<div
				className='flex cursor-pointer items-center justify-between rounded-md border border-gray-300 bg-white p-2'
				onClick={() => setIsOpen(!isOpen)}>
				<span>{selectedOption ? selectedOption.label : placeholder || 'Seleccionar'}</span>
				<Image
					className='ml-2'
					src={Flecha}
					alt='Flecha para las opciones'
					objectFit='contain'
				/>
			</div>
			{isOpen && (
				<ul className='absolute z-10 mt-1 w-full rounded-md border border-gray-300 bg-white shadow-lg'>
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
