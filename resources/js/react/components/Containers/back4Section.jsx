import { twMerge } from 'tailwind-merge'

const BackForSection = ({ children, className }) => {
	return <div className={twMerge('', className)}> {children}</div>
}

export default BackForSection
