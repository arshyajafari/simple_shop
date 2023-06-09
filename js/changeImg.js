const productImages = [
  "../image/3094486.jpg",
  "../image/sub-image-1.jpg",
  "../image/sub-image-2.jpg",
  "../image/sub-image-3.jpg",
];

const changeProductImage = (e) => {
  const mainImage = document.querySelector(".main-image");
  const imageId = e.target.id;

  if (imageId === "firstImage") {
    mainImage.src = productImages[1];
  } else if (imageId === "secondImage") {
    mainImage.src = productImages[2];
  } else if (imageId === "thirdImage") {
    mainImage.src = productImages[3];
  } else {
    mainImage.src = productImages[0];
  }

  setTimeout(() => {
    mainImage.src = productImages[0];
  }, 3500);
};
