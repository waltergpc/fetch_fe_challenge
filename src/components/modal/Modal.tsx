import { Dialog } from 'primereact/dialog'

import { Dog } from '../../types/types'
import { ProgressSpinner } from 'primereact/progressspinner'

type ModalProps = {
	visible: boolean
	content?: Dog
	headerText: string
	onHide: () => void
	FooterContent?: JSX.Element
	isLoading?: boolean
	error?: boolean
	errorMessage?: string
}

const Modal = ({
	visible,
	headerText,
	onHide,
	FooterContent,
	content,
	isLoading
}: ModalProps) => {
	return (
		<div className="card flex justify-content-center">
			<Dialog
				header={headerText}
				visible={visible}
				style={{ width: '50vw' }}
				onHide={onHide}
				footer={FooterContent}
			>
				{isLoading ? (
					<ProgressSpinner />
				) : (
					<>
						<h3>{content?.name}</h3>
						<img src={content?.img} alt={content?.name} />
						<p>Age: {content?.age}</p>
						<p>Location: {content?.zip_code}</p>
					</>
				)}
			</Dialog>
		</div>
	)
}

export default Modal
