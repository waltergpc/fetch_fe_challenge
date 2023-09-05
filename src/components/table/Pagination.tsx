import { Paginator, PaginatorPageChangeEvent } from 'primereact/paginator'
import { useState, useEffect } from 'react'

interface PaginationProps {
	total: number
	rowsPerPage: number
	page: number
	onChange: (page: number, skip: number) => void
}

const Pagination = ({
	total,
	rowsPerPage,
	page,
	onChange
}: PaginationProps) => {
	const [numberOfOptions, setNumberOfOptions] = useState(5)

	useEffect(() => {
		if (window.innerWidth <= 900) {
			setNumberOfOptions(1)
		}
	}, [])

	const onPageChange = (event: PaginatorPageChangeEvent) => {
		console.log(event)
		onChange(event.page + 1, event.rows)
	}

	const changePageOptions = () => {
		if (window.innerWidth <= 900) {
			setNumberOfOptions(1)
		} else {
			setNumberOfOptions(5)
		}
	}

	window.addEventListener('resize', changePageOptions)

	return (
		<div className="card">
			<Paginator
				first={(page - 1) * rowsPerPage}
				rows={rowsPerPage}
				totalRecords={total}
				rowsPerPageOptions={[25, 50, 100]}
				onPageChange={onPageChange}
				pageLinkSize={numberOfOptions}
			/>
		</div>
	)
}

export default Pagination
