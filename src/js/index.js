import '../scss/style.scss'
import { initSwiperIfSmallScreen } from './swiper.js'

const contentTextButton = document.querySelector('.content__info-read-button')

const showBrandsButton = document.querySelector('.read-button')
const brandsList = document.querySelector('.brands__list')

const showRepairsButton = document.querySelector('.repairs__read-button')
const repairsList = document.querySelector('.repairs__list')

const modal = document.querySelector('.modal')
const modalCloseButton = document.querySelector('.modal__close')
const showPhoneModal = document.querySelectorAll('.phone-button')
const showChatModal = document.querySelectorAll('.chat-button')
const modalName = modal.querySelector('.modal__input--name')
const modalEmail = modal.querySelector('.modal__input--email')
const modalMessage = modal.querySelector('.modal__input--message')
const modalTitle = modal.querySelector('.modal__title')

const asideModal = document.querySelector('.aside')
const overlay = document.querySelector('.overlay')
const asideMenuButton = document.querySelector('.header__burger')
const asideModalCloseButton = document.querySelector('.sidebar__header-close')

showBrandsButton.addEventListener('click', (event) => {
  event.preventDefault()

  const text = showBrandsButton.querySelector('span')
  const buttonArrowIcon = showBrandsButton.querySelector('img')

  if (text.textContent === 'Показать все') {
    text.textContent = 'Скрыть'
    brandsList.classList.add('brands__list--visible')
    buttonArrowIcon.style.transform = 'rotate(180deg)'
  } else {
    text.textContent = 'Показать все'
    brandsList.classList.remove('brands__list--visible')
    buttonArrowIcon.style.transform = 'rotate(0deg)'
  }
})

showRepairsButton.addEventListener('click', (event) => {
  event.preventDefault()

  const text = showRepairsButton.querySelector('span')
  const buttonArrowIcon = showRepairsButton.querySelector('img')

  if (text.textContent === 'Показать все') {
    text.textContent = 'Скрыть'
    repairsList.classList.add('repairs__list--visible')
    buttonArrowIcon.style.transform = 'rotate(180deg)'
  } else {
    text.textContent = 'Показать все'
    repairsList.classList.remove('repairs__list--visible')
    buttonArrowIcon.style.transform = 'rotate(0deg)'
  }
})

function closeModal() {
  modal.style.display = 'none'
}

function openPhoneModal() {
  modal.style.display = 'block'
  modalTitle.textContent = 'Заказать звонок'
  modalName.style.display = 'none'
  modalEmail.style.display = 'none'
  modalMessage.style.display = 'none'
}

function openChatModal() {
  modal.style.display = 'block'
  modalTitle.textContent = 'Обратная связь'
  modalName.style.display = 'block'
  modalEmail.style.display = 'block'
  modalMessage.style.display = 'block'
}

showPhoneModal.forEach((item) => {
  item.addEventListener('click', (event) => {
    event.preventDefault()
    openPhoneModal()
  })
})

showChatModal.forEach((item) => {
  item.addEventListener('click', (event) => {
    event.preventDefault()
    openChatModal()
  })
})

modalCloseButton.addEventListener('click', (event) => {
  event.preventDefault()
  closeModal()
})

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal()
  }
})

contentTextButton.addEventListener('click', (event) => {
  event.preventDefault()

  const text = document.querySelector('.content__info-text')
  text.style.overflow = 'visible'
  text.style.display = 'block'
  text.style.height = 'auto'
  contentTextButton.style.display = 'none'
  text.classList.remove('content__info-text--blur')
})

function openAside() {
  overlay.style.display = 'block'
  asideModal.classList.add('aside--visible')
}

function closeAside() {
  overlay.style.display = 'none'
  asideModal.classList.remove('aside--visible')
}

asideMenuButton.addEventListener('click', (event) => {
  event.preventDefault()
  openAside()
})

asideModalCloseButton.addEventListener('click', (event) => {
  event.preventDefault()
  closeAside()
})

overlay.addEventListener('click', (event) => {
  if (event.target === overlay) {
    closeAside()
  }
})

window.addEventListener('load', () => {
  initSwiperIfSmallScreen('repair-slider')
  initSwiperIfSmallScreen('brand-slider')
  initSwiperIfSmallScreen('price-slider')
})
window.addEventListener('resize', () => {
  initSwiperIfSmallScreen('repair-slider')
  initSwiperIfSmallScreen('brand-slider')
  initSwiperIfSmallScreen('price-slider')
})
