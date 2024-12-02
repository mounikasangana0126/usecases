// Select elements
const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const closeBtn = document.getElementById('close');

// Function to create a gallery image
function createImageElement(src, alt = 'Random Image') {
  const img = document.createElement('img');
  img.src = src;
  img.alt = alt;
  img.classList.add('img-thumbnail');
  img.addEventListener('click', openModal);
  return img;
}

// Function to open the modal with the clicked image
function openModal(event) {
  modalImage.src = event.target.src;
  modal.style.display = 'flex';
  modal.setAttribute('aria-hidden', 'false');
}

// Function to close the modal
function closeModal() {
  modal.style.display = 'none';
  modal.setAttribute('aria-hidden', 'true');
}

// Add event listeners to the close button and modal background
closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// Generate and append images to the gallery
const numberOfImages = 20;
for (let i = 0; i < numberOfImages; i++) {
  const imageSrc = `https://picsum.photos/800/500?random=${i}`;
  const imgElement = createImageElement(imageSrc);
  gallery.appendChild(imgElement);
}
