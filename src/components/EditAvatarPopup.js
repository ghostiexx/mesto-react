import PopupWithForm from "./PopupWithForm";
import React from "react";

function EditAvatarPopup({isOpen, onClose}) {
	return (
		<PopupWithForm
			isOpen={isOpen}
			title={'Обновить аватар'}
			name={'update'}
			onClose={onClose}
		>
			<input type="url" className="popup__input popup__input_type_link" placeholder="Ссылка на картинку" id="newAvatar" name="newAvatar" required/>
			<span className="popup__error newAvatar-error">Message</span>
		</PopupWithForm>
	);
}

export default EditAvatarPopup;
