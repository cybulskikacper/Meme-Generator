import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from '../components/Header'
import Meme from '../components/Meme'
import './App.css'

function App() {
	return (
		<>
			<Header />
			<Meme />
		</>
	)
}

export default App
