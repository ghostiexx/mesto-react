import React from "react";

function Card(item, onCardClick) {

	function handleClick() {
		onCardClick({

		})
	};

	return (
		<article className="card">
			<div className="card__head">
				<img src={item.card.link} onClick={handleClick} alt="#" className="card__image"/>
				<button className="card__delete-btn button"></button>
			</div>
			<div className="card__body">
				<h2 className="card__name" title={item.card.name}>{item.card.name}</h2>
				<div className="card__column">
					<button className="card__button button" type="button" aria-label="Поставить лайк"></button>
					<span className="card__like-counter"></span>
				</div>
			</div>
		</article>
	);
}

export default Card;
