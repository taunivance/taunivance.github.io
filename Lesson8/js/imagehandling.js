//get all imgs data-src attribute
const imagesToLoad = document.querySelectorAll("img[data-src]");

//optional parameters being set for the IntersectionalObserver
const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute ('data-src'));
    image.onload = () => {
        image.removeAttribute("data-src");
    };
};

//first check to see if Intersection Observer is supported
if('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items, observer) => {
        items.forEach((item) => { 
            if (item.isIntersecting) {
                loadImages(item.target);
                imgObserver.unobserve(item.target);
            }
        });
    }, imgOptions);

//Loop through each img an check status and Load if nessary
imagesToLoad.forEach((img) => {
    imgObserver.observe(img);
});
}
else { 
    //just Load All images if not supported
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}