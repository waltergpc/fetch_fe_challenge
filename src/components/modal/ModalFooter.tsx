import { Button } from 'primereact/button'

const ModalFooterButtons = () => {
	return (
		<div>
			<Button label="No" icon="pi pi-times" className="p-button-text" />
			<Button label="Yes" icon="pi pi-check" autoFocus />
		</div>
	)
}

export default ModalFooterButtons
