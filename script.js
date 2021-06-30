const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        target.classList.add('active')
    })
})

const faders = document.querySelectorAll(".fade-in")
const sliders = document.querySelectorAll(".slide-in")

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -150px 0px"
};

const appearOnScroll = new IntersectionObserver
(function(
    entries, 
    appearOnScroll
) {
    entries.forEach(entry =>{
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, 
appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
})

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});

