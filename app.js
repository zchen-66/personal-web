
(function() {

	window.addEventListener("load", init);
	/**
   * Initialization function that runs when the window is loaded. Adds event listeners and calls
   * other basic set-up functions to ensure functionality.
   */
	function init() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      qs("header h1").classList.remove("load-typing-animation");
      qs("header h2").classList.add("load-fade-in-animation");
      qs("body").classList.remove("no-overflow");
    }, 3500)
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