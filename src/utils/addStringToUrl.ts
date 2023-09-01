export const createUrlStringFromArray = (array: string[]) => {
	let finalQueryString = ''
	array.forEach((element) => {
		finalQueryString += `breed=${element}&`
	})

	finalQueryString = finalQueryString.slice(0, -1)

	return finalQueryString
}
