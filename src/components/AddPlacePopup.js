import PopupWithForm from "./PopupWithForm";
import React from "react";

function AddPlacePopup(props) {
	const [name, setName] = React.useState('');
	const [link, setLink] = React.useState('');

	function handleChangeName(event) {
		setName(event.target.value);
		console.log(name);
	}

	function handleChangeLink(event) {
		setLink(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault()

		props.onAddPlace({ name, link })
	}

	return (
		<PopupWithForm
			name={'add'}
			title={'Новое место'}
			isOpen={props.isOpen}
			onClose={props.onClose}
			onSubmit={handleSubmit}
		>

			<input
				type="text"
				className="popup__input popup__input_type_text"
				placeholder="Название"
				id="place"
				name="place"
				minLength="2"
				maxLength="30"
				value={name}
				onChange={handleChangeName}
				required
			/>
			<span className="popup__error place-error">Message</span>
			<input
				type="url"
				className="popup__input popup__input_type_link"
				placeholder="Ссылка на картинку"
				id="link"
				name="link"
				value={link}
				onChange={handleChangeLink}
				required
			/>
			<span className="popup__error link-error">Message</span>
		</PopupWithForm>
	);
}

export default AddPlacePopup;
