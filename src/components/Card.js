import React from "react";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
	const currentUser = React.useContext(CurrentUserContext);
	const isOwner = card.owner._id === currentUser._id;
	const isLiked = card.likes.some(i => i._id === currentUser._id);
	const cardDeleteButtonClassName = isOwner ? 'card__delete-btn_visible' : 'card__delete-btn_disabled';
	const cardLikeButtonClassName = isLiked ? 'card__button_active' : 'card__button_unactive';

	function handleClick() {
		onCardClick({
			isOpen: true,
			link: card.link,
			name: card.name
		})
	}

	function handleLike() {
		onCardLike(card);
	}

	function handleDelete() {
		onCardDelete(card._id);
	}

	return (
		<article className="card">
			<div className="card__head">
				<img onClick={handleClick} src={card.link} alt={card.name} className="card__image"/>
				<button
					className={`card__delete-btn button ${cardDeleteButtonClassName}`}
					disabled={!isOwner}
					onClick={handleDelete}
				/>
			</div>
			<div className="card__body">
				<h2 className="card__name" title={card.name}>{card.name}</h2>
				<div className="card__column">
					<button
						className={`button card__button ${cardLikeButtonClassName}`}
						type="button"
						aria-label="Поставить лайк"
						onClick={handleLike}
					/>
					<span className="card__like-counter">{card.likes.length}</span>
				</div>
			</div>
		</article>
	);
}

export default Card;
