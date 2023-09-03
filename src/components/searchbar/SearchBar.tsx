import { useQuery } from '@tanstack/react-query'
import { useFormik } from 'formik'
import { getBreeds } from '../../services/DogServices'
import * as Yup from 'yup'
import { SearchParams } from '../../types/types'
import MultipleSelect from '../form/MultipleSelect'
import { useDogs } from '../../context/Dogs/DogContext'
import Input from '../form/Input'
import { createFinalSearchUrl } from '../../utils/addStringToUrl'

const SearchBar = () => {
	const { selectedBreeds, maxAge, minAge, updateDogState } = useDogs()

	const updateSearchValues = (searchParams: SearchParams) => {
		if (
			selectedBreeds !== searchParams.selectedBreeds ||
			maxAge !== searchParams.maxAge ||
			minAge !== searchParams.minAge
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
				minAge
			},
			onSubmit: () => {
				updateSearchValues(values)
			},
			validationSchema: Yup.object({
				breeds: Yup.array().of(Yup.string()),
				maxAge: Yup.number().max(20),
				minAge: Yup.number().min(0)
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
		<form onSubmit={handleSubmit}>
			<h3>Search dogs by:</h3>

			<MultipleSelect
				label="Breeds"
				name="selectedBreeds"
				value={values.selectedBreeds}
				onChange={handleChange}
				items={data || []}
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
			/>
			<Input
				name="minAge"
				label="Minimum age"
				value={values.minAge}
				handleChange={handleChange}
				type="text"
				error={errors.minAge}
				touched={touched.minAge}
				onBlur={handleBlur}
			/>

			<button type="submit">Search</button>
		</form>
	)
}

export default SearchBar
