import React from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ImagePopup from "./components/ImagePopup";
import EditProfilePopup from "./components/EditProfilePopup";
import AddPlacePopup from "./components/AddPlacePopup";
import EditAvatarPopup from "./components/EditAvatarPopup";

import './App.css';

function App() {
	const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
	const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
	const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
	const [selectedCard, setSelectedCard] = React.useState({});

	function handleEditAvatarClick() {
		setEditAvatarPopupOpen(true);
	}

	function handleEditProfileClick() {
		setEditProfilePopupOpen(true);
	}

	function handleAddPlaceClick() {
		setAddPlacePopupOpen(true);
	}

	function closeAllPopups() {
		setEditAvatarPopupOpen(false);
		setEditProfilePopupOpen(false);
		setAddPlacePopupOpen(false);
		setSelectedCard({isOpen: false});
	}

	function handleCardClick(card) {
		setSelectedCard({
			isOpen: true,
			link: card.link,
			name: card.name
		})
	}

	return (
		<>
			<Header />
			<Main
				onEditAvatar={handleEditAvatarClick}
				onEditProfile={handleEditProfileClick}
				onAddPlace={handleAddPlaceClick}
				onCardClick={handleCardClick}
			/>
			<Footer />
			<EditProfilePopup
					isOpen={isEditProfilePopupOpen}
					onClose={closeAllPopups}
			/>
			<AddPlacePopup
				isOpen={isAddPlacePopupOpen}
				onClose={closeAllPopups}
			/>
			<EditAvatarPopup
				isOpen={isEditAvatarPopupOpen}
				onClose={closeAllPopups}
			/>
			<ImagePopup
				card={selectedCard}
				isOpen={selectedCard.isOpen}
				onClose={closeAllPopups}
			/>

			<div className="popup popup_type_confirm">
				<div className="popup__container">
					<h3 className="popup__title">Вы уверены?</h3>
					<form action="/" name="popup-confirm" className="popup__form popup__form_type_confirm">
						<fieldset className="popup__inputs">
							<button className="popup__save popup__save_type_confirm button" type="submit" aria-label="Сохранить изменения">Да</button>
						</fieldset>
					</form>
					<button className="popup__close button" type="button" aria-label="Закрыть модальное окно"></button>
				</div>
			</div>
		</>
	);
}

export default App;
