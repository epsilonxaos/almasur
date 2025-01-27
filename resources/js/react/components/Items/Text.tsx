import { twMerge } from 'tailwind-merge';



import { ReactNode } from 'react';


export type TTexts = {
	children: ReactNode
	className?: string
}

const Text = (opt: TTexts) => {
	const { children, className } = opt

	return <p className={twMerge('text-sm', className)}>{children}</p>
}

// Base:14 => 18
export const TextTitle = (opt: TTexts) => {
	const { children, className } = opt

	return <article className={twMerge('text-sm font-light sm:text-lg', className)}>{children}</article>
}
// Base: 10 => 12 (casi no hay este cambio, se mantiene en 12)
export const TextContent = (opt: TTexts) => {
	const { children, className } = opt

	return <article className={twMerge('text-xs font-medium sm:text-xs', className)}>{children}</article>
}

// Se mantiene 10 a 8
export const TextSmallContent = (opt: TTexts) => {
	const { children, className } = opt

	return <article className={twMerge('text-[10px] font-medium', className)}>{children}</article>
}