import React from 'react'
import { useState } from 'react'
import memesData from '../memesData.jsx'

function Meme() {
	const [memeImage, setMemeImage] = useState('')

	function getMemeImage() {
		event.preventDefault()
		const memesArray = memesData.data.memes
		const randomNumber = Math.floor(Math.random() * memesArray.length)

		// const url = memesArray[randomNumber].url

		// When the getMemeImage function is called, update
		// *   the `memeImage` state to be the random chosen
		// *   image URL

		setMemeImage(memesArray[randomNumber].url)
	}

	return (
		<main>
			<form className="form">
				<input type="text" className="form-input" placeholder="Top Text" />
				<input type="text" className="form-input" placeholder="Bottom Text" />
				<button className="form--button" onClick={getMemeImage}>
					Get a new meme image 🖼
				</button>
			</form>

			<img className="meme--image" src={memeImage} />
		</main>
	)
}

export default Meme
