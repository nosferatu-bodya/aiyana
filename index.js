
selectReason(0)

document.querySelectorAll('.whygreat-reason').forEach((r, i) => r.addEventListener('click', e => {
    selectReason(i)
}))

document.querySelector('.menu-toggle').addEventListener('click', () => {
    const links = document.querySelectorAll('nav a')

    if(links[0].classList.contains('active')) {
        document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'))
    } else {
        document.querySelectorAll('nav a').forEach(a => a.classList.add('active'))
    }
})

function selectReason (index) {
    const reasons = document.querySelectorAll('.whygreat-reason')
    const abouts = document.querySelectorAll('.whygreat-about')

    reasons.forEach(elem => elem.classList.remove('whygreat-reason--active'))

    reasons[index].classList.add('whygreat-reason--active')

    abouts.forEach(elem => elem.classList.remove('whygreat-about--active'))
    abouts[index].classList.add('whygreat-about--active')

    document.querySelector('.whygreat-about-title').textContent = reasons[index].textContent
}