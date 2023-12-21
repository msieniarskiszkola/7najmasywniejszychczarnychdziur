document.addEventListener('DOMContentLoaded', function () {
  const thumbnails = document.querySelectorAll('.thumbnails img');
  const mainPhoto = document.querySelector('.main-photo');

  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function () {
      const index = this.getAttribute('data-index');
      const imagePath = `images/photo${parseInt(index) + 1}.jpg`;
      mainPhoto.setAttribute('src', imagePath);
    });
  });
});
