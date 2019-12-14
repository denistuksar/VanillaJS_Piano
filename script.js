const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j'];

const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');
const keys = document.querySelectorAll('.key');

keys.forEach(key => {
    key.addEventListener('click', () => playnote(key))
});

document.addEventListener('keydown', e => {
    if(e.repeat) return;
    const key = e.key;
    const whiteKeyIndex = WHITE_KEYS.indexOf(key);
    const blackKeyIndex = BLACK_KEYS.indexOf(key);
    if (whiteKeyIndex > -1) playnote(whiteKeys[whiteKeyIndex]);
    if (blackKeyIndex > -1) playnote(blackKeys[blackKeyIndex]);
});

function playnote(key) {
    const noteAudio = document.getElementById(key.dataset.note);
    noteAudio.currentTime = 0;
    noteAudio.play();
    key.classList.add('active');
    sleep(200).then(() => {
        key.classList.remove('active');
    })
};
const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}
