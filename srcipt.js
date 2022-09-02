function appendImageElem(keyword, index) {
    const imgElement = document.createElement('img');
    imgElement.src = `https://source.unsplash.com/400x250/?${keyword}$sig=${index}`;

    // pull HTML class starting with .
    const galleryElement = document.querySelector('.gallery')
    galleryElement.appendChild(imgElement);
}

function removeDuplicate() {
    const galleryElement = document.querySelector('.gallery');
    galleryElement.innerHTML = '';
}

function myImage(event) {
    const keyword = event.target.value;
    removeDuplicate();

    if (event.key === 'Enter' && keyword) {
        for (let i = 1; i <= 9; i++) {
            appendImageElem(keyword, i)
        }
    }


    const inputElement = document.querySelector('input');
    inputElement.addEventListener('keydown', myImage);

}

myImage();