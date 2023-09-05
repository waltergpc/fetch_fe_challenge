import customFetch from '../utils/customAxiosInstance'
import { UserData } from '../types/types'

export const login = async (userData: UserData) => {
	const data = await customFetch.post('/api/auth/login', userData)
	return data
}

export const logout = async () => {
	const data = await customFetch.post('api/auth/logout')
	return data
}
