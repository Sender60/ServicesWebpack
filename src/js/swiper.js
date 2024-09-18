import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'

const sectionBrands = document.getElementById('brand-slider')
const sectionBrandsList = sectionBrands.querySelector('ul')
const paginationBrands = sectionBrands.querySelector(
  '.swiper-pagination--brand-slider'
)

const sectionRepairs = document.getElementById('repair-slider')
const sectionRepairsList = sectionRepairs.querySelector('ul')
const paginationRepairs = sectionRepairs.querySelector(
  '.swiper-pagination--repair-slider'
)

const sectionPrices = document.getElementById('price-slider')
const sectionPricesList = sectionPrices.querySelector('ul')
const paginationPrices = sectionPrices.querySelector(
  '.swiper-pagination--price-slider'
)

const a = document.querySelectorAll('a')

let swiperInstance = {}

function toggleClassSwiper() {
  if (window.innerWidth <= 768) {
    sectionBrands.classList.add('brand-slider', 'swiper')
    sectionBrandsList.classList.add('swiper-wrapper')
    sectionBrandsList.classList.remove('brands__list')
    paginationBrands.style.display = 'block'

    sectionRepairs.classList.add('repair-slider', 'swiper')
    sectionRepairsList.classList.add('swiper-wrapper')
    sectionRepairsList.classList.remove('repairs__list')
    paginationRepairs.style.display = 'block'

    sectionPrices.classList.add('price-slider', 'swiper')
    sectionPricesList.classList.add('swiper-wrapper')
    sectionPricesList.classList.remove('price__table')
    paginationPrices.style.display = 'block'
  } else {
    sectionBrands.classList.remove('brand-slider', 'swiper')
    sectionBrandsList.classList.remove('swiper-wrapper')
    sectionBrandsList.classList.add('brands__list')
    paginationBrands.style.display = 'none'

    sectionRepairs.classList.remove('repair-slider', 'swiper')
    sectionRepairsList.classList.remove('swiper-wrapper')
    sectionRepairsList.classList.add('repairs__list')
    paginationRepairs.style.display = 'none'

    sectionPrices.classList.remove('price-slider', 'swiper')
    sectionPricesList.classList.remove('swiper-wrapper')
    sectionPricesList.classList.add('price__table')
    paginationPrices.style.display = 'none'
  }
}

export function initSwiperIfSmallScreen(className) {
  if (window.innerWidth <= 768) {
    if (!swiperInstance[className]) {
      toggleClassSwiper()

      swiperInstance[className] = new Swiper(`.${className}`, {
        modules: [Pagination],
        pagination: {
          el: `.swiper-pagination--${className}`,
          clickable: true
        },
        spaceBetween: 10,
        slidesPerView: 1.3
      })
    }
  } else {
    if (swiperInstance[className]) {
      swiperInstance[className].destroy()
      delete swiperInstance[className]
    }
    toggleClassSwiper()
  }
}
