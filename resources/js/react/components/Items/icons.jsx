import { twMerge } from 'tailwind-merge'

import { colorVariants, getColorClass } from '../../utils/tailwindColors'

export const IconIsotipoComponent = ({ className, fill }) => {
	return (
		<svg
			className={twMerge(` ${colorVariants[fill].fill}`, className)}
			// className={className}
			version='1.1'
			id='Capa_1'
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 91 63'>
			<g>
				<g>
					<polygon
						points='39.1,53.2 22.9,26.7 22.9,26.7 22.9,26.7 0,15.8 8,41.6 33.8,56.6 32.3,51.5 37.8,54.2 37.8,54.1 
           38.8,54.6 		'
					/>
				</g>
				<polygon
					points='62.3,0 45.2,23.4 45.2,23.4 45.2,23.3 49,28.6 46.5,51.9 50,47 50.6,49.9 58.3,31 67.5,26.7 
       67.5,26.7 67.6,26.5 	'
				/>
				<g>
					<polygon
						points='45.2,23.3 45.2,23.4 45.2,23.4 28.1,0 22.8,26.5 22.9,26.7 32.1,31 39.8,49.9 40.3,47 43.9,51.9 
           41.3,28.6 		'
					/>
				</g>
				<g>
					<polygon points='67.5,26.7 51.3,53.2 51.6,54.6 52.5,54.1 52.5,54.2 58.1,51.5 56.6,56.6 82.4,41.6 90.4,15.8 		' />
				</g>
				<g>
					<polygon points='40.9,56.6 41.2,57.2 41.2,57.2 44.4,62.6 44.4,54.8 41,50.2 40,55.2 		' />
					<polygon points='34.4,54 35.9,58.9 42.9,63 38.7,56 		' />
					<polygon points='49.3,50.2 45.9,54.8 45.9,62.6 49.2,57.2 49.5,56.6 50.4,55.2 		' />
					<polygon points='51.7,56 47.5,63 54.5,58.9 56,54 		' />
				</g>
			</g>
		</svg>
	)
}
