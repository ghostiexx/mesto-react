import React from "react";

function PopupWithForm({ name, title, isOpen, onSubmit, onClose, children }) {
	return (
		<div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`} onSubmit={onSubmit}>
			<div className="popup__container">
				<h3 className="popup__title">{title}</h3>
				<form name={`popup-${name}`} className="popup__form popup__form_type_edit">
					<fieldset className="popup__inputs">
						{children}
						<button className="popup__save button" type="submit" aria-label="Сохранить изменения">Сохранить</button>
					</fieldset>
				</form>
				<button
					onClick={onClose}
					className="popup__close button"
					type="button"
					aria-label="Закрыть модальное окно"
				/>
			</div>
		</div>
	);
}

export default PopupWithForm;
