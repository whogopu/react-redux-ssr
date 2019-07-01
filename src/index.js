import 'babel-polyfill'
import express from 'express'
import proxy from 'express-http-proxy'
import renderer from './helpers/renderer'
import { matchRoutes } from 'react-router-config'
import createStore from './helpers/create-store'
import Routes from './client/Routes';

const app = express()

app.use(express.static('public'))

app.use('/api', proxy('http://react-ssr-api.herokuapp.com', {
	proxyReqOptDecorator(opts) {
		opts.headers['x-forwarded-host'] = 'localhost:3000'
		return opts
	}
}))

app.get('*', (req, res) => {
	const store = createStore(req)

	const promises = matchRoutes(Routes, req.path).map(({ route }) => {
		return route.loadData ? route.loadData(store) : null
	})

	Promise.all(promises).then(() => {
		res.send(renderer(req, store))
	})

})

app.listen(3000, () => {
	console.log('Server listening on port 3000');
})