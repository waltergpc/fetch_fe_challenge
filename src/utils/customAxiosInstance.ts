import axios from 'axios'

const customFetch = axios.create({
	withCredentials: true
})

export default customFetch
