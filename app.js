
(function() {

	window.addEventListener("load", init);

	/**
   * Initialization function that runs when the window is loaded. Adds event listeners and calls
   * other basic set-up functions to ensure functionality.
   */
	function init() {
    handleReload();
    cycleCatchphrase();

    const observer = new IntersectionObserver ((entries) => {
      handleObserverEntries(entries);
    });

    qsa(".observed").forEach(el => {
      observer.observe(el);
    })

    id("expand-vertical-nav").addEventListener("click", () => {
      qs("nav .vertical-nav").style.display = "flex";
    })

    id("collapse-vertical-nav").addEventListener("click", () => {
      qs("nav .vertical-nav").style.display = "none";
    })

    qsa("#relevant-section article").forEach(art => {
      console.log(art);
    })
	}

  function cycleCatchphrase() {
    const catchphrases = ['Part-Time Notion Nerd', 'Gamer.', 'Technically Zitong'];
    const el = qs("#catchphrase h3");
    const r = document.querySelector(':root');
    let index = 0;

    setInterval(() => {
      let catchphrase = catchphrases[index];
      r.style.setProperty('--catchphrase-steps', catchphrase.length);
      el.textContent = catchphrase;
      index += 1;
      if (index === catchphrases.length) {
        index = 0;
      }
    }, 3000);
  }

  function handleReload() {
    // qs(".scroll-container").classList.add("no-overflow");
    setTimeout(() => {
      qs("header h2").classList.add("load-fade-in-animation");
      qs(".scroll-container").classList.remove("no-overflow");
    }, 3500)
  }

  function handleObserverEntries(entries) {
    entries.forEach((entry) => {
      let elId = entry.target.id;
      if (entry.isIntersecting) {
        if(elId === "relevant-section-title") {
          letterScrambler(entry.target);
        } else if (elId === "relevant-section") {
          qs("nav").classList.add("expanded-nav");
        }
      } else {
        if(elId === "relevant-section-title") {
          letterScrambler(entry.target);
        } else if (elId === "relevant-section") {
          qs("nav").classList.remove("expanded-nav");
        }
      }
    });
  }

  function letterScrambler(element) {
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

	/**
   * shortcut for getElementById
   * @param {string} id - ID of the element to be accessed
   * @returns {element} - Element that has the given ID
   */
  function id(id) {
    return document.getElementById(id);
  }

  /**
   * shortcut for querySelector
   * @param {string} selector - selector of the element to be accessed
   * @returns {element} - Element that corresponds to the selector given
   */
  function qs(selector) {
    return document.querySelector(selector);
  }

  /**
   * shortcut for querySelectorAll
   * @param {string} selector - selector of the elements to be accessed
   * @returns {array} - Array of elements that corresponds to the selector given
   */
  function qsa(selector) {
    return document.querySelectorAll(selector);
  }

  /**
   * shortcut for createElement
   * @param {string} newTag - name of tag to be created
   * @returns {element} - a newly created element with the given newTag
   */
  function gen(newTag) {
    return document.createElement(newTag);
  }
})();