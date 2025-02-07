import { twMerge } from 'tailwind-merge'

import { colorVariants } from '../utils/tailwindColors'
import { TextSmallContent } from './Items/Text'

const Footer = ({ color = 'pacifico', className = '' }) => {
	return (
		<footer className={twMerge(`${colorVariants[color].background} w-full px-4 py-5 text-main_b`, className)}>
			<ul className='font-geo mx-auto flex w-full max-w-section-content flex-col items-center justify-between gap-2 text-center md:flex-row'>
				<TextSmallContent>TERMINOS Y CONDICIONES</TextSmallContent>
				<TextSmallContent>
					DISEÑO Y DESARROLLO POR{' '}
					<a
						href='https://www.madeby.partners/'
						target='_blank'
						rel='noopener noreferrer'>
						<span className='font-bold'>MadebyPartners®</span>
					</a>
				</TextSmallContent>
				<TextSmallContent>POLÍTICAS DE PRIVACIDAD</TextSmallContent>
			</ul>
		</footer>
	)
}

export default Footer
