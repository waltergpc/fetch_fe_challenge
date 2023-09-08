import { SearchParams } from '../types/types'

export const createFinalSearchUrl = (
	searchParams: SearchParams,
	page?: number,
	skip?: number
) => {
	const { selectedBreeds, maxAge, minAge, sortOrder } = searchParams

	if (!skip) skip = 25

	const cursor = page ? (page - 1) * skip : 0

	let queryString = `/dogs/search?sort=breed:${sortOrder}`

	if (selectedBreeds.length > 0) {
		selectedBreeds.forEach((breed) => {
			queryString += `&breeds=${breed}&`
		})
		queryString = queryString.slice(0, -1)
	}

	if (maxAge && Number(maxAge) > 0) {
		queryString += `&ageMax=${maxAge}`
	}
	if (minAge && Number(minAge) > 0) {
		queryString += `&ageMin=${minAge}`
	}

	queryString += `&size=${skip}&from=${cursor}`

	return queryString
}
