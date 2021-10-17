import React from "react";

function PopupWithForm(props) {
	return (
		<div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`} onSubmit={props.onSubmit}>
			<div className="popup__container">
				<h3 className="popup__title">{props.title}</h3>
				<form name={`popup-${props.name}`} className="popup__form popup__form_type_edit">
					<fieldset className="popup__inputs">
						{props.children}
						<button className="popup__save button" type="submit" aria-label="Сохранить изменения">Сохранить</button>
					</fieldset>
				</form>
				<button
					onClick={props.onClose}
					className="popup__close button"
					type="button"
					aria-label="Закрыть модальное окно"
				/>
			</div>
		</div>
	);
}

export default PopupWithForm;
