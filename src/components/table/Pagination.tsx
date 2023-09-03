import { Paginator, PaginatorPageChangeEvent } from 'primereact/paginator'

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
	const onPageChange = (event: PaginatorPageChangeEvent) => {
		console.log(event)
		onChange(event.page + 1, event.rows)
	}

	return (
		<div className="card">
			<Paginator
				first={(page - 1) * rowsPerPage}
				rows={rowsPerPage}
				totalRecords={total}
				rowsPerPageOptions={[25, 50, 100]}
				onPageChange={onPageChange}
			/>
		</div>
	)
}

export default Pagination
