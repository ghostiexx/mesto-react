import React from "react";

function Card({card, onCardClick}) {
	function handleClick() {
		onCardClick({
			isOpen: true,
			link: card.link,
			name: card.name
		})
	};

	return (
		<article className="card">
			<div className="card__head">
				<img onClick={handleClick} src={card.link} alt="#" className="card__image"/>
				<button className="card__delete-btn button"></button>
			</div>
			<div className="card__body">
				<h2 className="card__name" title={card.name}>{card.name}</h2>
				<div className="card__column">
					<button className="card__button button" type="button" aria-label="Поставить лайк"></button>
					<span className="card__like-counter">{card.likes.length}</span>
				</div>
			</div>
		</article>
	);
}

export default Card;
