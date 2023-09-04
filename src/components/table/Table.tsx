import {
	DataTable,
	DataTableSelectionMultipleChangeEvent
} from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Dog } from '../../types/types'

interface TableProps {
	items: Dog[]
	columns: {
		field: string
		header: string
		body?: (arg: Dog) => JSX.Element
	}[]
	selectedItems: Dog[]
	enableSelection: boolean
	selectionParams: { single: boolean }
	onSelectionChange?: (arr: Dog[]) => void
}

const Table = ({
	items,
	columns,
	enableSelection,
	selectionParams,
	selectedItems,
	onSelectionChange
}: TableProps) => {
	const onSelectChange = (e: DataTableSelectionMultipleChangeEvent<Dog[]>) => {
		if (onSelectionChange) {
			onSelectionChange(e.value)
		}
	}
	return (
		<div className="card">
			<DataTable
				scrollable
				selectionMode={'checkbox'}
				onSelectionChange={onSelectChange}
				selection={selectedItems}
				scrollHeight="65vh"
				value={items}
				tableStyle={{ minWidth: '50rem' }}
				dataKey="id"
			>
				{enableSelection && (
					<Column
						selectionMode={selectionParams.single ? 'single' : 'multiple'}
						headerStyle={{ width: '3rem' }}
					></Column>
				)}
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
