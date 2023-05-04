const passowrd = document.getElementById('password');
const background = document.getElementById('background');

passowrd.addEventListener('input', (e) => {
    const { value } = e.target;
    const length = value.length;
    const blur = 20 - length * 2;
    background.style.filter = `blur(${ blur }px)`;
});
