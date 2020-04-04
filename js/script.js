
// DOM Initialization
const sideDrawer = document.querySelector('.sidedrawer');
const bars = document.getElementById('bars');
const backdrop = document.querySelector('.backdrop');
const header = document.getElementById('header');


/* sidedrawer script */
bars.addEventListener('click', () => {
    sideDrawer.classList.add('show');
    backdrop.classList.add('show');
})

backdrop.addEventListener('click', () => {
    sideDrawer.classList.remove('show');
    backdrop.classList.remove('show');

})
/* sidedrawer script */

/* Change Navbar Color on scroll */
document.addEventListener('scroll', () => {
    if (window.top.scrollY > 100) {
        header.classList.add('bg-white');
    } else {
        header.classList.remove('bg-white');
    }
})
/* Change Navbar Color on scroll */


/* Handle Showcase */
const showcaseImage = document.getElementById('showcase-image')
const indicators = document.querySelectorAll('.indicator');

// each number represents portfolio file name
let images = ['0', '1', '2', '3', '4'];

// render image for the firsttime
renderImage('1')
let i = 1;
setInterval(() => {
    if (i > 4) {
        i = 1
    }
    renderImage(images[i])
    i++;
}, 2000)

for (const indicator of indicators) {

    indicator.addEventListener('click', ({ target }) => {
        renderImage(target.id)
    })
}

function renderImage(imageNum) {
    let imageHTML = ``
    for (const indicator of indicators) {
        if (imageNum === indicator.id)
            indicator.classList.add('active')
        else
            indicator.classList.remove('active')
    }
    showcaseImage.innerHTML = `<img src="assets/portfolio${images[imageNum]}.png" alt="">`

}
/* Handle Showcase */



/* Handle Testimonials */
let testimonials = [{
    id: '1',
    name: 'Calvin Henry',
    role: 'Restaurant Owner',
    content: 'Finally, I can grow my business through digital products. All thanks to Steward',
    stars: 4
}, {
    id: '2',
    name: 'Arlene Cooper',
    role: 'Photographer',
    content: 'I would love to work with this guy. His work is perfect',
    stars: 4
}, {
    id: '3',
    name: 'Julie Bell',
    role: 'Copywriter',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus sed vitae enim dui elementum, amet.',
    stars: 5
},
]
// render Content for the first time

// persons Elements
const persons = document.querySelectorAll('.profile__picture');
const personName = document.querySelector('.testimonial__bio__name');
const personRole = document.querySelector('.testimonial__bio__role');
const personContent = document.querySelector('.testimonial__content__text');
const personStars = document.querySelector('.testimonial__content__stars');

console.log(personStars)


for (const person of persons) {

    person.addEventListener('click', ({ target }) => {
        let index = target.id.split('-')[1]
        renderContent(index);
    })

}


renderContent(0);



function renderContent(index) {
    personName.innerText = `${testimonials[index].name}`;
    personRole.innerText = testimonials[index].role;
    personContent.innerText = testimonials[index].content;


    for (const person of persons) {
        if (index === person.classList[1]) {
            person.classList.add('active')
        } else {
            person.classList.remove('active')
        }

    }
    let starHTML = ``
    for (let i = 0; i < testimonials[index].stars; i++) {
        starHTML += `<span class="iconify star active" data-icon="entypo:star" data-inline="false"></span>`
    }
    personStars.innerHTML = starHTML



}




/* Navigation Handler */
// const navigations = document.querySelectorAll('.navbar__list__link');

// for (const nav of navigations) {
//     nav.addEventListener('click', ({ target }) => {
//         alert(target.href)
//         console.log(target)
//     })
// }