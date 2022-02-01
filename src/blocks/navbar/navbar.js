const navbar = document.querySelector('.navbar')
const navbarOffsetTop = navbar.offsetTop
const sections = document.querySelectorAll('section')
const navbarLinks = document.querySelectorAll('.navbar__link')
const progress = document.querySelector('.about__progress-wrapper')
const progressBarPercents = [97, 89, 85, 87, 80, 70, 50]

window.addEventListener('scroll', () => {
  mainFn()
})

const mainFn = () => {
  if (window.pageYOffset >= navbarOffsetTop) {
    navbar.classList.add('sticky')
  } else {
    navbar.classList.remove('sticky')
  }

  sections.forEach((section, i) => {
    if (window.pageYOffset >= section.offsetTop - 10) {
      navbarLinks.forEach((navbarLink) => {
        navbarLink.classList.remove('change');
      });
      navbarLinks[i].classList.add('change');
    }
  });

  if (window.pageYOffset + window.innerHeight >= progress.offsetTop + 300) {
    document.querySelectorAll('.about__bar-percent').forEach((el, i) => {
      el.style.width = `${progressBarPercents[i]}%`

      el.previousElementSibling.firstElementChild.textContent = progressBarPercents[i]
    })
  }
}

mainFn()

window.addEventListener('resize', () => {
  window.location.reload()
})
