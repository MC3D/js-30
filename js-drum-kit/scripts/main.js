function playSound(e) {
    try {
        const audio = document.querySelector(`audio[data-key=${e.key.toLowerCase()}]`);
         if (!audio) return;
        const key = document.querySelector(
          `[data-key="${e.key.toLowerCase()}"]`
        );
        audio.currentTime = 0;
        audio.play();
        key.classList.add("playing");
    } catch {
        return;
    }
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener("keydown", playSound);