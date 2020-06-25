// UI Variables
const hamburger = document.querySelector('#nav-bar #ham-wrapper > div');
const sideNavbar = document.querySelector('#nav-bar .list-items-container');
const navLinks = document.querySelectorAll(
	'#nav-bar .list-items-container ul li a'
);

// Event Handler
hamburger.addEventListener('click', toggleSideNavbar);
navLinks.forEach((link) => {
	link.addEventListener('click', hideSideNavbar);
});

// Show SideNavbar
function toggleSideNavbar() {
	// Animate Hamburger icon
	hamburger.classList.toggle('rotate');

	// Animate SideNavbar
	if (hamburger.classList.contains('rotate')) {
		sideNavbar.id = 're-transform';
	} else {
		sideNavbar.id = '';
	}

	// Animate Each Link
	navLinks.forEach((link) => {
		link.classList.toggle('nav-links-animation');
	});
}

// Hide Side Navbar: (On Clicking the links)
function hideSideNavbar() {
	toggleSideNavbar();
}

// Smooth Scrolling
$('a').on('click', function (event) {
	if (this.hash !== '') {
		event.preventDefault();
		const hash = this.hash;
		$('html, body').animate(
			{
				scrollTop: $(hash).offset().top,
			},
			800
		);
	}
});
