import { Button } from 'primereact/button'

type ButtonProps = {
	firstText: string
	secondText: string
	firstCallback?: () => void
	secondCallback?: () => void
}

const ModalFooterButtons = ({
	firstText,
	secondText,
	firstCallback,
	secondCallback
}: ButtonProps) => {
	return (
		<div>
			<Button label={firstText} icon="pi pi-times" onClick={firstCallback} />
			<Button
				label={secondText}
				className="p-button-text"
				icon="pi pi-check"
				autoFocus
				onClick={secondCallback}
			/>
		</div>
	)
}

export default ModalFooterButtons
