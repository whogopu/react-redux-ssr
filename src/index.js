import 'babel-polyfill'
import express from 'express'
import renderer from './helpers/renderer'
import createStore from './helpers/create-store'

const app = express()

app.use(express.static('public'))

app.get('*', (req, res) => {
	const store = createStore()

	// initialize and load data in store

	res.send(renderer(req, store))
})

app.listen(3000, () => {
	console.log('Server listening on port 3000');
})