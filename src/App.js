import React from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ImagePopup from "./components/ImagePopup";
import EditProfilePopup from "./components/EditProfilePopup";
import AddPlacePopup from "./components/AddPlacePopup";
import EditAvatarPopup from "./components/EditAvatarPopup";
import ConfirmPopup from "./components/ConfirmPopup";

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

	function handleCardClick(card) {
		setSelectedCard({
			isOpen: true,
			link: card.link,
			name: card.name
		})
	}

	function closeAllPopups() {
		setEditAvatarPopupOpen(false);
		setEditProfilePopupOpen(false);
		setAddPlacePopupOpen(false);
		setSelectedCard({isOpen: false});
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
			<ConfirmPopup
			/>
		</>
	);
}

export default App;
