import { AnimatePresence } from 'framer-motion'

import { useEffect, useReducer } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import Footer from './components/Footer'
import Header from './components/Header'
import Loading from './components/Loading'
import PageTransition from './components/PageTransition'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'
import Thanks from './pages/Thanks'

const initialArgs = {
	loading: true,
}

const reducer = (prev, next) => ({ ...prev, ...next })

export default function App() {
	const location = useLocation()
	const [state, dispatch] = useReducer(reducer, initialArgs)

	useEffect(() => {
		const timer = setTimeout(() => {
			dispatch({ loading: false })
		}, 1500)
		return () => clearTimeout(timer)
	}, [])

	if (state.loading) return <Loading />

	return (
		<>
			{/* <Header /> */}
			<AnimatePresence mode='wait'>
				<ScrollToTop />

				<Routes
					location={location}
					key={location.pathname}>
					<Route
						path='/'
						element={<Home />}
					/>
					<Route
						path='/gracias'
						element={
							<PageTransition>
								<Thanks />
							</PageTransition>
						}
					/>

					<Route
						path='*'
						element={<PageNotFound />}
					/>
				</Routes>
			</AnimatePresence>
			{/* <Footer /> */}
		</>
	)
}
