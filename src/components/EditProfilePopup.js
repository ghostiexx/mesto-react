import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {
	const [name, setName] = React.useState('');
	const [description, setDescription] = React.useState('');

	const currentUser = React.useContext(CurrentUserContext);

	React.useEffect(() => {
		if(currentUser) {
			setName(currentUser.name);
			setDescription(currentUser.about);
		}
	}, [currentUser])

	function handleChangeName(event) {
		setName(event.target.value);
	}

	function handleChangeDescription(event) {
		setDescription(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();

		props.onUpdateUser({
			name,
			about: description
		})
	}

	return(
		<PopupWithForm
			name={'edit'}
			title={'Редактировать профиль'}
			isOpen={props.isOpen}
			onClose={props.onClose}
			onSubmit={handleSubmit}
		>
			<input
				type="text"
				className="popup__input popup__input_type_name"
				placeholder="Введите имя"
				id="name"
				name="name"
				minLength="2"
				maxLength="40"
				value={name}
				onChange={handleChangeName}
				required
			/>
			<span className="popup__error name-error">Message</span>
			<input
				type="text"
				className="popup__input popup__input_type_description"
				placeholder="Введите описание"
				id="description"
				name="description"
				minLength="2"
				maxLength="200"
				value={description}
				onChange={handleChangeDescription}
				required
			/>
			<span className="popup__error name-error">Message</span>
		</PopupWithForm>
	);
}

export default EditProfilePopup;
