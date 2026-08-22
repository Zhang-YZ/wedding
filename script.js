const dialog = document.querySelector("#lightbox");
const preview = dialog.querySelector("img");

document.querySelectorAll(".imageButton").forEach((photo) => {
  photo.addEventListener("click", () => {
    preview.src = photo.dataset.full;
    preview.alt = photo.querySelector("img").alt;
    dialog.showModal();
  });
});

dialog.querySelector("button").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});
