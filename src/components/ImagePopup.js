function ImagePopup({onClose}) {
	return (
		<div className="popup popup_type_image">
			<div className="popup__container popup__container_type_image">
				<figure className="popup__figure">
					<img src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg" alt="#" className="popup__image"/>
					<figcaption className="popup__caption">Name</figcaption>
				</figure>
				<button onClick={onClose} className="popup__close button" type="button" aria-label="Закрыть модальное окно"></button>
			</div>
		</div>
	);
}

export default ImagePopup;
