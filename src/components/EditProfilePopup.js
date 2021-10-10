import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({isOpen, onClose}) {
	return(
		<PopupWithForm
			name={'edit'}
			title={'Редактировать профиль'}
			isOpen={isOpen}
			onClose={onClose}
		>
			<input type="text" className="popup__input popup__input_type_name" placeholder="Введите имя" id="name" name="name" minLength="2" maxLength="40" required/>
			<span className="popup__error name-error">Message</span>
			<input type="text" className="popup__input popup__input_type_description" placeholder="Введите описание" id="description" name="description" minLength="2" maxLength="200" required/>
			<span className="popup__error name-error">Message</span>
		</PopupWithForm>
	);
}

export default EditProfilePopup;
