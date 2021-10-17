import PopupWithForm from "./PopupWithForm";
import React from "react";

function EditAvatarPopup(props) {
	const avatarRef = React.useRef();

	function handleSubmit(event) {
		event.preventDefault();

		if (avatarRef) {
			props.onUpdateAvatar({
				avatar: avatarRef.current.value,
			});
		}
	}

	return (
		<PopupWithForm
			isOpen={props.isOpen}
			title={'Обновить аватар'}
			name={'update'}
			onClose={props.onClose}
			onSubmit={handleSubmit}
		>
			<input
				type="url"
				className="popup__input popup__input_type_link"
				placeholder="Ссылка на картинку"
				id="newAvatar"
				name="newAvatar"
				ref={avatarRef}
				required
			/>
			<span className="popup__error newAvatar-error">Message</span>
		</PopupWithForm>
	);
}

export default EditAvatarPopup;
