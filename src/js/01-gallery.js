import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

// console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const galleryImg = galleryItems
  .map(
    items =>
      `<div class="gallery__item">
    <a class="gallery__link" href="${items.original}">
        <img
            class="gallery__image"
            src="${items.preview}"
            alt="${items.description}"
        />
    </a>
</div>`
  )
  .join('');

gallery.innerHTML = galleryImg;

const lightbox = new SimpleLightbox('.gallery a', {
  captionPosition: 'bottom',
  captionDelay: 250,
  captionsData: 'alt',
});

lightbox.on('show.simplelightbox');
