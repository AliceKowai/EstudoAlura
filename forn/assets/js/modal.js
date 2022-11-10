document.querySelectorAll('#modal-open').forEach(el => {
    el.onclick = () => {
        document.querySelector('.modal').style.display = 'flex';
    };
});
document.querySelectorAll('.modal').forEach(el => {
    el.onclick = () => {
        document.querySelector('.modal').style.display = 'none';
    };
});
