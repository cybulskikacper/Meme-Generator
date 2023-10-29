import React from 'react'
import memesData from '../memesData.jsx'

function Meme() {
	function getMemeImage() {
		event.preventDefault()
		const memesArray = memesData.data.memes
		const randomNumber = Math.floor(Math.random() * memesArray.length)

		const url = memesArray[randomNumber].url

		console.log(url)
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
		</main>
	)
}

export default Meme
