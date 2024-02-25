const trigger = document.getElementById("trigger-button");
const cancel = document.getElementById("cancel");
const deactivate = document.getElementById("deactivate");
const modalContainer = document.getElementById("modal-container");
const modalBg = document.getElementById("modal-bg")
const modalContent = document.getElementById("modal-content");
const confirmBox = document.getElementById("confirm-box");
const cancelDeactivate = document.getElementById("cancel-deactivate");
const confirmDeactivate = document.getElementById("confirm-deactivate");


trigger.addEventListener("click", () => {
    modalBg.style.display = 'block'
    modalContainer.style.display = 'flex';
});

cancel.addEventListener('click', () => {
    modalBg.style.display = 'none'
    modalContainer.style.display = "none"
});

function closeModal(event) {
    {
        if (event.target !== event.currentTarget) {
            return
        } else {
            modalBg.style.display = 'none'
            modalContainer.style.display = "none"
        }
    }
}

modalContainer.addEventListener('click', closeModal);

deactivate.addEventListener('click', () => {
    modalContainer.removeEventListener('click', closeModal)
    confirmBox.style.display = 'flex'
});

cancelDeactivate.addEventListener('click', () => {
    confirmBox.style.display = "none"
    modalContainer.addEventListener('click', closeModal);
});

confirmDeactivate.addEventListener('click', () => {
    modalBg.style.display = 'none'
    confirmBox.style.display = 'none'
    modalContainer.style.display = 'none'
});

