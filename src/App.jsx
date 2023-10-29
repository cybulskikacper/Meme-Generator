import { useState } from 'react'
import Header from '../components/Header'
import Meme from '../components/Meme'
import memesData from '../memesData'
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
