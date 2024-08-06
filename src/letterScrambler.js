export default function letterScrambler(element) {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let iter = 0;
    const interval = setInterval(() => {
      element.innerText = element.innerText.split("")
      .map((letter, index) => {
        if (index < iter) {
          return element.dataset.value[index];
        } else if (element.dataset.value[index] === " ") {
          return " ";
        }
        return letters[Math.floor(Math.random() * 26)];
      }).join("");
    if (iter >= element.dataset.value.length) {
      clearInterval(interval);
    }
    iter += 1/6;
  }, 30);
}