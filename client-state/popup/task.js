const modal = document.getElementById('subscribe-modal');
const closeButton = document.querySelector('.modal__close');
 
closeButton.addEventListener('click', () => {
    modal.classList.remove('modal_active');
    document.cookie = 'status = closed';
});

if (!document.cookie.includes("status = closed")) {
    modal.classList.add('modal_active');
}