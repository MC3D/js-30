const inputs = document.querySelectorAll('.controls input');

function handleUpdate(e) {
    const suffix = e.target.dataset.sizing || '';
    document.documentElement.style.setProperty(
      `--${e.target.name}`,
      e.target.value + suffix
    );
}
// triggers when you let go
inputs.forEach((input) => input.addEventListener("change", handleUpdate));

// triggers as you move the mouse
inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));