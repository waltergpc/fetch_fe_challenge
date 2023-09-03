import { useQuery } from '@tanstack/react-query'
import SearchBar from '../components/searchbar/SearchBar'
import { useDogs } from '../context/Dogs/DogContext'
import { getDogsQuery } from '../services/DogServices'
import Table from '../components/table/Table'
import { Dog } from '../types/types'
import Pagination from '../components/table/Pagination'
import { createFinalSearchUrl } from '../utils/addStringToUrl'

const Dogs = () => {
	const {
		searchUrl,
		page,
		skip,
		updateDogState,
		selectedBreeds,
		maxAge,
		minAge
	} = useDogs()

	const { data, isLoading, isError } = useQuery({
		queryKey: ['dogs', searchUrl],
		queryFn: () => getDogsQuery(searchUrl)
	})

	const columns = [
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

	const onPageChange = (newPage: number, newSkip: number) => {
		if (newPage !== page || newSkip !== skip) {
			const newUrl = createFinalSearchUrl(
				{ selectedBreeds, maxAge, minAge },
				newPage,
				newSkip
			)
			updateDogState({ searchUrl: newUrl, page: newPage, skip: newSkip })
		}
	}

	if (isLoading) {
		return <pre>Loading...</pre>
	}

	if (isError) {
		return <h4>An error happened, please try again later</h4>
	}
	return (
		<section>
			<h2>Dogs</h2>
			<SearchBar />
			<Table items={data.dogs} columns={columns} />
			<Pagination
				page={page}
				rowsPerPage={skip}
				total={data.total}
				onChange={onPageChange}
			/>
		</section>
	)
}

export default Dogs
