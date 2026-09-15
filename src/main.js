const scene = document.querySelector('#petScene');
const speech = document.querySelector('#speech');
const hint = document.querySelector('#hint');
const wand = document.querySelector('#wand');
const buttons = document.querySelectorAll('.action');

const modes = {
  work: { scene: 'working', phrase: 'typing...', hint: 'こまはパソコン作業中。お手伝いしてあげよう！' },
  sleep: { scene: 'sleeping', phrase: 'zzz...', hint: 'すやすやおひるね中。静かに見守ろう。' },
  play: { scene: 'playing', phrase: 'わくわく！', hint: '猫じゃらしを追いかけて、とってもごきげん！' }
};

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const mode = modes[button.dataset.mode];
    scene.className = `pet-scene ${mode.scene}`;
    speech.textContent = mode.phrase;
    hint.textContent = mode.hint;
    buttons.forEach((item) => item.classList.toggle('active', item === button));
    wand.classList.toggle('visible', button.dataset.mode === 'play');
  });
});

document.querySelector('#soundButton').addEventListener('click', (event) => {
  const enabled = event.currentTarget.getAttribute('aria-pressed') === 'true';
  event.currentTarget.setAttribute('aria-pressed', String(!enabled));
  event.currentTarget.classList.toggle('on', !enabled);
});
