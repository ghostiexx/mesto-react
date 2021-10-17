import React from "react";

import editIcon from "../images/edit.svg";
import addIcon from "../images/add.svg";
import Card from "./Card";

import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Main(props) {
	const currentUser = React.useContext(CurrentUserContext);

	if (!currentUser || !props.cards) {
		return (
			<div>loading</div>
		)
	}
	return (
		<main className="content">
			<section className="profile">
				<div className="profile__avatar">
					<img src={currentUser.avatar} alt="Изображение профиля" className="profile__avatar-image"/>
					<div onClick={props.onEditAvatar} className="profile__avatar-btn">
						<img src="./images/edit.svg" alt="Иконка редактирования" className="profile__avatar-icon"/>
					</div>
				</div>
				<div className="profile__info">
					<h1 className="profile__name">{currentUser.name}</h1>
					<button
						onClick={props.onEditProfile}
						className="profile__edit-button button"
						type="button"
						aria-label="Редактировать профиль"
					>
						<img src={editIcon} alt="Иконка редактирования"/>
					</button>
					<p className="profile__description">{currentUser.about}</p>
				</div>
				<button
					onClick={props.onAddPlace}
					className="profile__add-button button"
					type="button"
					aria-label="Добавить фотографию"
				>
					<img src={addIcon} alt="Иконка добавления" className="profile__add-icon"/>
				</button>
			</section>
			<section className="cards">
				{
					props.cards.map(item => (
							<Card
								onCardClick={props.onCardClick}
								onCardLike={props.onCardLike}
								onCardDelete={props.onCardDelete}
								card={item}
								key={item._id}
							/>
						)
					)}
			</section>
		</main>
	);
}

export default Main;
