import { useQuery } from '@tanstack/react-query'
import SearchBar from '../components/searchbar/SearchBar'
import { useDogs } from '../context/Dogs/DogContext'
import { getDogsQuery, getMatchedDog } from '../services/DogServices'
import Table from '../components/table/Table'
import Pagination from '../components/table/Pagination'
import { createFinalSearchUrl } from '../utils/addStringToUrl'
import { columns } from '../utils/dogTableColumns'
import Modal from '../components/modal/Modal'
import ModalFooterButtons from '../components/modal/ModalFooterButtons'
import { MouseEvent, useState } from 'react'

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

	const [isModalOpen, setIsModalOpen] = useState(false)

	const { data, isLoading, isError } = useQuery({
		queryKey: ['dogs', searchUrl],
		queryFn: () => getDogsQuery(searchUrl)
	})

	const {
		data: matchDogData,
		isLoading: isMatchLoading,
		isError: isMatchError,
		refetch: refetchMatch
	} = useQuery({
		queryKey: ['match'],
		queryFn: () => getMatchedDog(selectedDogs),
		enabled: false
	})

	const handleMatchSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		await refetchMatch()
		setIsModalOpen(true)
	}

	const handleSelectionReset = () => {
		setIsModalOpen(false)
		updateSelectedDogs([])
	}

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
		<section className="section section-center">
			<h2>Dogs</h2>
			<SearchBar />
			<div>
				<button type="submit" onClick={handleMatchSubmit}>
					Find Match
				</button>
				{matchDogData && (
					<button type="submit" onClick={() => setIsModalOpen(true)}>
						See current Match
					</button>
				)}
			</div>

			<Modal
				visible={isModalOpen}
				headerText="Meet your adoption match Pal!"
				content={matchDogData}
				onHide={() => setIsModalOpen(false)}
				FooterContent={
					<ModalFooterButtons
						firstText="Continue with this match"
						secondText="Select Again"
						secondCallback={handleSelectionReset}
						firstCallback={() => {
							console.log('Continue with documentation')
						}}
					/>
				}
				isLoading={isMatchLoading}
				error={isMatchError}
				errorMessage="An error happened while getting your matched buddy, please try again later"
			/>
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
