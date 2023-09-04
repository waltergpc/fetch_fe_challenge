import { useQuery } from '@tanstack/react-query'
import SearchBar from '../components/searchbar/SearchBar'
import { useDogs } from '../context/Dogs/DogContext'
import { getDogsQuery, getMatchedDog } from '../services/DogServices'
import Table from '../components/table/Table'
import Pagination from '../components/table/Pagination'
import { createFinalSearchUrl } from '../utils/addStringToUrl'
import { columns } from '../utils/dogTableColumns'

const Dogs = () => {
	const {
		searchUrl,
		page,
		skip,
		updateDogState,
		selectedBreeds,
		maxAge,
		minAge,
		selectedDogs,
		updateSelectedDogs
	} = useDogs()

	const { data, isLoading, isError } = useQuery({
		queryKey: ['dogs', searchUrl],
		queryFn: () => getDogsQuery(searchUrl)
	})

	const {
		data: matchDogData,
		isLoading: isMatchLoading,
		isError: isMatchError
	} = useQuery({
		queryKey: ['match'],
		queryFn: () => getMatchedDog(selectedDogs),
		enabled: false
	})

	console.log(matchDogData, isMatchLoading, isMatchError)

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
			<Table
				items={data.dogs}
				columns={columns}
				selectionParams={{ single: false }}
				enableSelection={true}
				selectedItems={selectedDogs}
				onSelectionChange={updateSelectedDogs}
			/>
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
