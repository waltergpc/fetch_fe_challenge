import { useQuery } from '@tanstack/react-query'
import { useFormik } from 'formik'
import { getBreeds } from '../../services/DogServices'
import * as Yup from 'yup'
import { SearchParams } from '../../types/types'
import MultipleSelect from '../form/MultipleSelect'
import { useDogs } from '../../context/Dogs/DogContext'
import Input from '../form/Input'
import { createFinalSearchUrl } from '../../utils/addStringToUrl'
import Select from '../form/Select'
import { sortingOptions } from '../../utils/selectOptions'

const SearchBar = () => {
	const { selectedBreeds, maxAge, minAge, sortOrder, updateDogState } =
		useDogs()

	const updateSearchValues = (searchParams: SearchParams) => {
		if (
			selectedBreeds !== searchParams.selectedBreeds ||
			maxAge !== searchParams.maxAge ||
			minAge !== searchParams.minAge ||
			sortOrder !== searchParams.sortOrder
		) {
			const newUrl = createFinalSearchUrl(searchParams)
			updateDogState({ ...values, page: 1, searchUrl: newUrl })
		} else {
			return
		}
	}

	const { values, handleChange, handleSubmit, errors, touched, handleBlur } =
		useFormik({
			initialValues: {
				selectedBreeds,
				maxAge,
				minAge,
				sortOrder
			},
			onSubmit: () => {
				updateSearchValues(values)
			},

			validationSchema: Yup.object({
				breeds: Yup.array().of(Yup.string()),
				maxAge: Yup.number().max(20, 'Max age should be less than 20'),
				minAge: Yup.number().min(0),
				sortOrder: Yup.string()
			})
		})
	const { data, isLoading } = useQuery({
		queryKey: ['breeds'],
		queryFn: getBreeds
	})

	if (isLoading) {
		return <pre>Loading...</pre>
	}

	return (
		<form onSubmit={handleSubmit} className="searchbar">
			<h3>Search dogs by:</h3>

			<MultipleSelect
				label="Breeds"
				name="selectedBreeds"
				value={values.selectedBreeds}
				onChange={handleChange}
				items={data || []}
			/>
			<Select
				options={sortingOptions}
				placeholder="Sort Order"
				onChange={handleChange}
				value={values.sortOrder}
				name="sortOrder"
				label="Breeds order"
			/>
			<Input
				name="maxAge"
				value={values.maxAge}
				label="Max age"
				handleChange={handleChange}
				type="text"
				error={errors.maxAge}
				touched={touched.minAge}
				onBlur={handleBlur}
				width="10ch"
				className="input-background"
			/>
			<Input
				name="minAge"
				label="Minimum age"
				width="10ch"
				value={values.minAge}
				handleChange={handleChange}
				type="text"
				error={errors.minAge}
				touched={touched.minAge}
				onBlur={handleBlur}
				className="input-background"
			/>

			<div>
				<button type="submit">Search</button>
			</div>
		</form>
	)
}

export default SearchBar
