const text = `I love bringing ideas to life through code — solving 
              tough problems, designing smart systems, and creating
                      tech that actually matters!`;

const typedText = document.getElementById("typed-text");

let index = 0;

function typeChar() {
  if (index < text.length) {
    typedText.textContent += text.charAt(index);
    index++;
    setTimeout(typeChar, 30); // Typing speed (ms per char)
  }
}

window.onload = typeChar;
document.getElementById("menu-toggle").addEventListener("click", () => {
  document.getElementById("nav-links").classList.toggle("show");
});
