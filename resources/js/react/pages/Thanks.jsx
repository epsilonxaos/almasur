import Main_screen from '../components/Containers/Main-screen.'
import MD01_BannerInicial from '../components/Containers/modules/md01-inicial'
import MDT01_Thanks from '../components/Containers/modules/mdT01-thanks'
import Footer from '../components/Footer'

const Thanks = () => {
	return (
		<Main_screen className='flex h-dvh flex-col'>
			<MDT01_Thanks />
			<Footer color='cima' />
		</Main_screen>
	)
}

export default Thanks
