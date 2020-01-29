import Axios from 'axios'

let host = 'https://api.chucknorris.io'

const Config = {
	baseURL:  `${host}/jokes`
}

const axiosApi = Axios.create({
	...Config,
	headers: {
		'Content-Type': 'application/json'
	}
})

const API = axiosApi

export default API
