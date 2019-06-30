import axios from 'axios'

export const URL = 'http://react-ssr-api.herokuapp.com'

export const FETCH_USERS = 'FETCH_USERS'
export const fetchUsers = () => async distach => {
	const res = await axios.get(`${URL}/users`)

	distach({
		type: FETCH_USERS,
		payload: res
	})
}