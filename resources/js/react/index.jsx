import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import '../../fonts/fonst.css'
import App from './App'

const root = createRoot(document.getElementById('root'))
root.render(
	<BrowserRouter>
		<Routes>
			<Route
				path='/*'
				element={<App />}
			/>
		</Routes>
	</BrowserRouter>
)
