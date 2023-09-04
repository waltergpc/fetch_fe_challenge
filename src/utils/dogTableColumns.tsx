import { Dog } from '../types/types'

export const columns = [
	{ field: 'name', header: 'Name' },
	{ field: 'age', header: 'Age' },
	{ field: 'zip_code', header: 'Zip Code' },
	{
		field: 'img',
		header: 'Photo',
		body: (dog: Dog) => (
			<img src={dog.img} alt={`${dog.name} photo`} className="dog-img" />
		)
	},
	{ field: 'breed', header: 'Breed' }
]
