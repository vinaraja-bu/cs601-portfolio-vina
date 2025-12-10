document.addEventListener("DOMContentLoaded", () => {
    const thumbs = document.querySelectorAll(".thumb");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxCaption = document.getElementById("lightbox-caption");
    const closeBtn = document.getElementById("lightbox-close");
  
    thumbs.forEach(img => {
      img.addEventListener("click", () => {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightboxCaption.textContent = img.alt;
        lightbox.classList.remove("hidden");
      });
    });
  
    closeBtn.addEventListener("click", () => {
      lightbox.classList.add("hidden");
    });
  
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        lightbox.classList.add("hidden");
      }
    });
  });