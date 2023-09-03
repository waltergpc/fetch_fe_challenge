import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Dog } from '../../types/types'

interface TableProps {
	items: Dog[]
	columns: {
		field: string
		header: string
		body?: (arg: Dog) => JSX.Element
	}[]
}

const Table = ({ items, columns }: TableProps) => {
	return (
		<div className="card">
			<DataTable
				scrollable
				scrollHeight="65vh"
				value={items}
				tableStyle={{ minWidth: '50rem' }}
			>
				{columns.map((col) => {
					return (
						<Column
							key={col.header}
							field={col.field}
							header={col.header}
							body={col.body && col.body}
						/>
					)
				})}
			</DataTable>
		</div>
	)
}

export default Table
