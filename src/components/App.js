import React from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import AddPlacePopup from "./AddPlacePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import ConfirmPopup from "./ConfirmPopup";

function App() {
	const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
	const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
	const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
	const [selectedCard, setSelectedCard] = React.useState({isOpen: false});

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
