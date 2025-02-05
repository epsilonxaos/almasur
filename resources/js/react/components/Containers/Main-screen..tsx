import { twMerge } from 'tailwind-merge'

import { ReactNode } from 'react'

type TContentReact = {
	children: ReactNode
	className?: string
}

//Componente que engloba todo el contenido de la página
const Main_screen = (opt: TContentReact) => {
	const { children, className } = opt
	return <div className={twMerge('', className)}>{children}</div>
}

export default Main_screen
