const listThumb = document.querySelector('.list-thumb')
const thumb = document.querySelector('.right .circle img')
const itemSelect = document.querySelectorAll('.list-page .item');
const selectPage = document.querySelectorAll('.list-products');
const prevElement = document.querySelector('.prev');
const nextElement = document.querySelector('.next');
const itemComment = document.querySelectorAll('#list-commen .item');

const images = [
  './images/a_1.png',
  './images/a_2.png',
  './images/a_3.png',
  './images/a_4.png',
]

const removeAllActive = () => {
  let changeThumbBtn = document.querySelectorAll('.list-thumb li')
  changeThumbBtn.forEach((item) => {
    item.classList.remove('active')
  })
}

const changeThumb = (event) => {
  removeAllActive()
  thumb.src = event.target.dataset.image
  event.target.classList.add('active')
}
images.forEach((item) => {
  let li = document.createElement('li')
  li.classList.add('item-slider')
  li.setAttribute('data-image', item)
  li.addEventListener('click', changeThumb)
  listThumb.appendChild(li)
})
const itemThumb = document.querySelector('.list-thumb .item-slider')
const itemThumbs = document.querySelectorAll('.list-thumb .item-slider')
itemThumb.classList.add('active')


setInterval(() => {
  const circleElement = document.querySelectorAll('.circle img')
  const activeItem = document.querySelector('.active')
  if (itemThumbs[itemThumbs.length - 1].classList.contains('active')) {
    circleElement[0].setAttribute('src', activeItem.dataset.image)
    activeItem.classList.toggle('active')
    itemThumb.classList.toggle('active');
  } else {
    circleElement[0].setAttribute('src', activeItem.dataset.image)
    activeItem.classList.toggle('active')
    activeItem.nextElementSibling.classList.toggle('active')
  }
  

}, 3000);




for (let i = 0; i < itemSelect.length; i++) {
  itemSelect[i].addEventListener('click', () => {
    activeProduct();
    selectPage[i].classList.remove('active-product')
  })
}

function activeProduct() {
  for (let i = 0; i < selectPage.length; i++) {
    selectPage[i].classList.add('active-product')
  }
}



prevElement.addEventListener('click', () => {
  const prevItem = document.querySelector('.prev-item');
  const nextItem = document.querySelector('.next-item');
  const activeItem = document.querySelector('.active-item');

  activeItem.classList.add('next-item')
  activeItem.classList.remove('active-item')
  prevItem.classList.add('active-item')
  prevItem.classList.remove('prev-item')
  nextItem.classList.add('prev-item')
  nextItem.classList.remove('next-item')

})

nextElement.addEventListener('click', () => {
  const prevItem = document.querySelector('.prev-item');
  const nextItem = document.querySelector('.next-item');
  const activeItem = document.querySelector('.active-item');

  
  activeItem.classList.add('prev-item')
  activeItem.classList.remove('active-item')
  prevItem.classList.add('next-item')
  prevItem.classList.remove('prev-item')
  nextItem.classList.add('active-item')
  nextItem.classList.remove('next-item')

})

