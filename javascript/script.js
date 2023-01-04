const creature = document.querySelector('.creature');
const monster = document.querySelector('.monster');
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const morcego = document.querySelector('.morcego');
const gameover = document.querySelector('.game-over');

const jump = () => {
    mario.classList.add('jump')
    setTimeout(() => {
        mario.classList.remove('jump');
        mario.src = './char/run.gif'
    }, 700)
}
const lower = () => {
    mario.classList.add('lower')
    setTimeout(() => {
        mario.classList.remove('lower');
    }, 700)
}
gameover.style.display = 'none'
const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const creaturePosition = creature.offsetLeft;
    const monsterPosition = monster.offsetLeft;
    const morcegoPosition = morcego.offsetLeft;

    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');


    if (pipePosition <= 90 && pipePosition > 0 && marioPosition < 5) {
        pipe.style.display = 'none';
        pipe.style.left = `${pipePosition}px`;

        morcego.style.display = 'none';
        morcego.style.left = `${morcegoPosition}px`;

        mario.style.display = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './char/death.gif'
        mario.style.width = '300px'
        mario.style.marginLeft = '-35px'

        creature.style.display = 'none';
        creature.style.left = `${creaturePosition}px`;

        monster.style.display = 'none';
        monster.style.left = `${monsterPosition}px`;

        gameover.style.display = 'flex'
    }
}, 10)
const loopCreature = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const monsterPosition = monster.offsetLeft;
    const creaturePosition = creature.offsetLeft;
    const morcegoPosition = morcego.offsetLeft;

    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    if (creaturePosition <= 150 && creaturePosition > 0 && marioPosition < 5) {

        creature.style.display = 'none';
        creature.style.left = `${creaturePosition}px`;

        morcego.style.display = 'none';
        morcego.style.left = `${morcegoPosition}px`;

        pipe.style.display = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.display = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './char/death.gif'
        mario.style.width = '300px'
        mario.style.marginLeft = '-0px'

        monster.style.animation = 'none';
        monster.style.left = `${monsterPosition}px`;

        gameover.style.display = 'flex'
    }
}, 10)
const loopMonster = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const monsterPosition = monster.offsetLeft;
    const creaturePosition = creature.offsetLeft;
    const morcegoPosition = morcego.offsetLeft;

    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    if (monsterPosition <= 80 && monsterPosition > 0 && marioPosition < 5) {

        creature.style.display = 'none';
        creature.style.left = `${creaturePosition}px`;

        pipe.style.display = 'none';
        pipe.style.left = `${pipePosition}px`;

        morcego.style.display = 'none';
        morcego.style.left = `${morcegoPosition}px`;

        mario.style.display = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './char/death.gif'
        mario.style.width = '300px'
        mario.style.marginLeft = '-0px'

        monster.style.display = 'none';
        monster.style.left = `${monsterPosition}px`;

        gameover.style.display = 'flex'
    }
}, 10)
document.addEventListener('keydown', jump);