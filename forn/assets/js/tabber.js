document.querySelectorAll('.tabber__tab').forEach(el => {
    el.onclick = () => {
        const tabName = el.innerText.toLowerCase().replaceAll(' ', '-');
        document.querySelector('.tabber__tab.active').classList.remove('active');
        el.classList.add('active');
        document.querySelector('.tabber__content>.active').classList.remove('active');
        document.querySelector('.tabber__content>#'+tabName).classList.add('active');
    }
});
