import PopupWithForm from "./PopupWithForm";
import React from "react";

function AddPlacePopup({isOpen, onClose}) {
	return (
		<PopupWithForm
			name={'add'}
			title={'Новое место'}
			isOpen={isOpen}
			onClose={onClose}
		>

			<input type="text" className="popup__input popup__input_type_text" placeholder="Название" id="place" name="place" minLength="2" maxLength="30" required/>
			<span className="popup__error place-error">Message</span>
			<input type="url" className="popup__input popup__input_type_link" placeholder="Ссылка на картинку" id="link" name="link" required/>
			<span className="popup__error link-error">Message</span>
		</PopupWithForm>
	);
}

export default AddPlacePopup;
