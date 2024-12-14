const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  }
];

// const galleryItemEl = document.createElement('li');
// galleryItemEl.classList.add('gallery-item', 'js-gallery-item');
// console.log(galleryItemEl);
// const galleryItem = document.querySelector('.js-gallery-item');
// console.dir(galleryItemEl);
// const galleryImgEl = document.createElement('img');
// const listGallery02 = document.querySelector('.gallery');

// let listGal;
// listGallery02.append(itemList);


function createItemInGallery(element) {
  
  let collectionGallery = [];
  element.forEach(el => {
    const galleryItemEl = document.createElement('li');
    galleryItemEl.classList.add('gallery-item', 'js-gallery-item');
    const galleryItemImg = document.createElement('img');
    galleryItemImg.classList.add('gallery-img', 'js-gallery-img');

    galleryItemImg.src = el.url;
    galleryItemImg.alt = el.alt;

galleryItemEl.append(galleryItemImg);

collectionGallery.push(galleryItemEl);
  })

const galleryList = document.querySelector('.gallery');
galleryList.append(...collectionGallery);
}

createItemInGallery(images);

