function modalControls(modalId, buttonOpenId, buttonCloseId) {
  const modal = document.getElementById(modalId);

  if (!modal) {
    return;
  }
  const buttonOpen = document.getElementById(buttonOpenId);
  // onclick="window.modalSearch.showModal()"

  if (buttonOpen) {
    buttonOpen.onclick = () => modal.showModal();
  }

  const buttonClose = document.getElementById(buttonCloseId);
  // onclick="window.modalSearch.close()"
  if (buttonClose) {
    buttonClose.onclick = () => modal.close();
  }
}

modalControls("modalSearch", "openModalSearch","closeModalSearch");
