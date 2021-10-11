import React from "react";
import { api } from "../utils/api";

import editIcon from "../images/edit.svg";
import addIcon from "../images/add.svg";
import Card from "./Card";

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {
	const [userName, setUserName] = React.useState('');
	const [userDescription, setUserDescription] = React.useState('');
	const [userAvatar, setUserAvatar] = React.useState('');
	const [cards, setCards] = React.useState([]);

	React.useEffect(() => {
		api.getUserInfo()
			.then(response => {
				setUserName(response.name)
				setUserDescription(response.about)
				setUserAvatar(response.avatar)
			})
			.catch(error => console.log(`Ошибка: ${error}`))

		api.getInitialCards()
			.then(response => {
				setCards(response)
			})
			.catch(error => console.log(`Ошибка: ${error}`))
	}, [])

	return (
		<main className="content">
			<section className="profile">
				<div className="profile__avatar">
					<img src={userAvatar} alt="Изображение профиля" className="profile__avatar-image"/>
					<div onClick={onEditAvatar} className="profile__avatar-btn">
						<img src="./images/edit.svg" alt="Иконка редактирования" className="profile__avatar-icon"/>
					</div>
				</div>
				<div className="profile__info">
					<h1 className="profile__name">{userName}</h1>
					<button onClick={onEditProfile} className="profile__edit-button button" type="button" aria-label="Редактировать профиль">
						<img src={editIcon} alt="Иконка редактирования"/>
					</button>
					<p className="profile__description">{userDescription}</p>
				</div>
				<button onClick={onAddPlace} className="profile__add-button button" type="button" aria-label="Добавить фотографию">
					<img src={addIcon} alt="Иконка добавления" className="profile__add-icon"/>
				</button>
			</section>
			<section className="cards">
				{cards.map(item => (
						<Card
							onCardClick={onCardClick}
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
