import type React from 'react'

import Button from './Button'
import { IconCruz } from './icons'

interface ModalProps {
	isOpen: boolean
	onClose: () => void
	children: React.ReactNode
	backImage?: string
}

const Modal = ({ isOpen, onClose, children, backImage }: ModalProps) => {
	if (!isOpen) return null

	return (
		<div className='fixed inset-0 z-50 flex items-center justify-center p-4'>
			{/* Capa de fondo semi-transparente */}
			<div
				className='absolute inset-0 bg-black bg-opacity-50'
				onClick={onClose}></div>

			{/* Contenedor del formulario con img de fondo */}
			<div className='relative z-10 grid h-full max-h-[700px] w-full max-w-[716px]'>
				<div
					className='bg-cover bg-center shadow-xl'
					style={{ backgroundImage: `url(${backImage})` }}>
					{/* Contenedor para el CONTENIDO EXISTENTE */}
					<div className='absolute left-1/2 top-1/2 w-10/12 max-w-[462px] max-h-[492px] -translate-x-1/2 -translate-y-1/2 sm:w-3/5'>
						{children}
					</div>
				</div>
				<Button
					className='absolute right-[2%] top-[2%] min-h-fit min-w-fit'
					onClick={onClose}>
					<IconCruz className='w-[20px] fill-none stroke-pacifico stroke-2' />
				</Button>
			</div>
		</div>
	)
}

export default Modal
