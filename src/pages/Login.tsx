import { useFormik } from 'formik'
import * as Yup from 'yup'
import Input from '../components/form/Input'
import { useQuery } from '@tanstack/react-query'
import { login } from '../services/LoginService'
import { UserData } from '../types/types'
import { useNavigate } from 'react-router-dom'

const Login = () => {
	const initialFormValues: UserData = {
		name: '',
		email: ''
	}

	const navigate = useNavigate()

	const { values, handleChange, handleSubmit, errors, handleBlur, touched } =
		useFormik({
			initialValues: {
				...initialFormValues
			},
			onSubmit: () => handleRefetch(),
			validationSchema: Yup.object({
				name: Yup.string()
					.min(3, 'Name needs to be at least 3 characters')
					.required(),
				email: Yup.string().email('Email format is incorrect').required()
			})
		})

	const { refetch, isSuccess } = useQuery({
		queryKey: ['login'],
		queryFn: () => login({ name: values.name, email: values.email }),
		enabled: false
	})

	const handleRefetch = async () => {
		await refetch()
	}

	if (isSuccess) {
		console.log('HOOOOOOOOLA')
		navigate('/dogs')
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<Input
					name="name"
					value={values.name}
					handleChange={handleChange}
					type="text"
					error={errors.name}
					touched={touched.name}
					onBlur={handleBlur}
				/>

				<Input
					name="email"
					value={values.email}
					type="email"
					handleChange={handleChange}
					error={errors.email}
					touched={touched.email}
					onBlur={handleBlur}
				/>
				<button type="submit">Login</button>
			</form>
		</>
	)
}

export default Login
