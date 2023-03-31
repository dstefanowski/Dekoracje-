// alert('Kod JS podpięty prawidłowo')

var prevScrollpos = window.pageYOffset
window.onscroll = function () {
	var currentScrollPos = window.pageYOffset
	if (prevScrollpos > currentScrollPos) {
		document.querySelector('.navbar1').classList.remove('scroll-down')
		document.querySelector('.navbar1').classList.add('scroll-up')
	} else {
		document.querySelector('.navbar1').classList.remove('scroll-up')
		document.querySelector('.navbar1').classList.add('scroll-down')
	}
	prevScrollpos = currentScrollPos
}

const nav = document.querySelector('.nav')
const burgerBtn = document.querySelector('.burger-btn')
const navItems = document.querySelectorAll('.nav__item')

const handleNav = () => {
	nav.classList.toggle('nav--active')
	navItems.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav--active')
		})
	})
}

burgerBtn.addEventListener('click', handleNav)

// ==========================================================
