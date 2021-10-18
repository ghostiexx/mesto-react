import PopupWithForm from "./PopupWithForm";

function ConfirmPopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      name='confirm'
      title='Вы уверены?'
    >
    </PopupWithForm>
  );
}

export default ConfirmPopup;