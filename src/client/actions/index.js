export const FETCH_USERS = 'FETCH_USERS'
export const FETCH_CURRENT_USERS = 'FETCH_CURRENT_USERS'

export const fetchUsers = () => async (distach, getState, api) => {
	const res = await api.get('/users')

	distach({
		type: FETCH_USERS,
		payload: res
	})
}

export const fetchCurrentUser = () => async (distach, getState, api) => {
	const res = await api.get('/current_user')

	distach({
		type: FETCH_CURRENT_USERS,
		payload: res
	})
}