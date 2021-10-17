import React from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import AddPlacePopup from "./AddPlacePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import ConfirmPopup from "./ConfirmPopup";

import { api } from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
	const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
	const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
	const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
	const [selectedCard, setSelectedCard] = React.useState({isOpen: false});
	const [currentUser, setCurrentUser] = React.useState();
	const [cards, setCards] = React.useState();

	React.useEffect(() => {
		Promise.all([api.getUserInfo(), api.getInitialCards()])
			.then(([user, cards]) => {
				setCurrentUser(user);
				setCards(cards);
			})
			.catch((err) => console.log(err));
	}, []);

	function handleCardLike(card) {
		const isLiked = card.likes.some(i => i._id === currentUser._id);

		api.changeLikeCardStatus(card._id, !isLiked)
			.then((newCard) => {
				setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
			})
			.catch((err) => console.log(err));
	}

	function handleDeleteCard(cardId) {
		api.deleteCard(cardId)
			.then(() => {
				const newCards = cards.filter((c) => c._id !== cardId);
				setCards(newCards);
			})
			.catch((err) => console.log(err))
	}

	function handleUpdateUser(user) {
		api.editProfile(user.name, user.about)
			.then(() => {
				api.getUserInfo()
					.then((response) => {
						setCurrentUser(response)
					})
					.catch((err) => console.log(err))
			})
			.catch((err) => console.log(err))
			.finally(() => closeAllPopups());
	}

	function handleUpdateAvatar(link) {
		api.updateAvatar(link)
			.then((response) => setCurrentUser(response))
			.catch((err) => console.log(err))
			.finally(() => closeAllPopups());
	}

	function handleAddPlaceSubmit(card) {
		api.addCard(card.name, card.link)
			.then((card) => {
				setCards([card, ...cards])
			})
			.catch((err) => console.log(err))
			.finally(() => closeAllPopups());
	}

	function handleEditAvatarClick() {
		setIsEditAvatarPopupOpen(true);
	}

	function handleEditProfileClick() {
		setIsEditProfilePopupOpen(true);
	}

	function handleAddPlaceClick() {
		setIsAddPlacePopupOpen(true);
	}

	function handleCardClick(card) {
		setSelectedCard({
			isOpen: true,
			link: card.link,
			name: card.name
		})
	}

	function closeAllPopups() {
		setIsEditAvatarPopupOpen(false);
		setIsEditProfilePopupOpen(false);
		setIsAddPlacePopupOpen(false);
		setSelectedCard({isOpen: false});
	}

	return (
		<>
			<CurrentUserContext.Provider value={currentUser}>
				<Header />
				<Main
					onEditAvatar={handleEditAvatarClick}
					onEditProfile={handleEditProfileClick}
					onAddPlace={handleAddPlaceClick}
					onCardClick={handleCardClick}
					onCardLike={handleCardLike}
					onCardDelete={handleDeleteCard}
					cards={cards}
				/>
				<Footer />
				<EditProfilePopup
						isOpen={isEditProfilePopupOpen}
						onClose={closeAllPopups}
						onUpdateUser={handleUpdateUser}
				/>
				<AddPlacePopup
					isOpen={isAddPlacePopupOpen}
					onClose={closeAllPopups}
					onAddPlace={handleAddPlaceSubmit}
				/>
				<EditAvatarPopup
					isOpen={isEditAvatarPopupOpen}
					onClose={closeAllPopups}
					onUpdateAvatar={handleUpdateAvatar}
				/>
				<ImagePopup
					card={selectedCard}
					isOpen={selectedCard.isOpen}
					onClose={closeAllPopups}
				/>
				<ConfirmPopup />
			</CurrentUserContext.Provider>
		</>
	);
}

export default App;
