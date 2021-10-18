function ImagePopup({ isOpen, onClose, card }) {
	return (
		<div className={`popup popup_type_image ${isOpen ? 'popup_opened' : ''}`}>
			<div className="popup__container popup__container_type_image">
				<figure className="popup__figure">
					<img src={card.link} alt={card.name} className="popup__image"/>
					<figcaption className="popup__caption">{card.name}</figcaption>
				</figure>
				<button onClick={onClose} className="popup__close button" type="button" aria-label="Закрыть модальное окно"></button>
			</div>
		</div>
	);
}

export default ImagePopup;
