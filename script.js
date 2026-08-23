const dialog = document.querySelector("#lightbox");
const preview = dialog.querySelector("img");

document.querySelectorAll(".photo").forEach((photo) => {
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

const music = document.querySelector("#backgroundMusic");
const musicToggle = document.querySelector("#musicToggle");
music.volume = 0.55;

const syncMusicButton = () => {
  const playing = !music.paused;
  musicToggle.setAttribute("aria-pressed", String(playing));
  musicToggle.setAttribute("aria-label", playing ? "暂停背景音乐" : "播放背景音乐");
  musicToggle.title = playing ? "暂停背景音乐" : "播放背景音乐";
};

music.addEventListener("play", syncMusicButton);
music.addEventListener("pause", syncMusicButton);
musicToggle.addEventListener("click", () => {
  if (music.paused) music.play().catch(() => {});
  else music.pause();
});

document.addEventListener("pointerdown", (event) => {
  if (event.target.closest(".musicToggle")) return;
  if (music.paused) music.play().catch(() => {});
}, { once: true });
