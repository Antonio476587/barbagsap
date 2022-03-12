import gsap from "gsap";

const leaveFromProject = (container) => {

    const img = container.querySelector('img');
    const image = container.querySelector('.image');
    const activeLink = container.querySelector('a.is-active span');
    const content = container.querySelector('.content');
    const header = container.querySelectorAll('header a');

    const tl = gsap.timeline({
        defaults: {
            duration: 0.9, ease: 'power1.out'
        }
    })

    tl
        .to(header, { yPercent: 100, stagger: 0.2, })
        .to(activeLink, { xPercent: 101 }, 0)
        .to(img, { xPercent: -101 }, 0)
        .to(image, { xPercent: 101 }, 0)
        .to(content, { yPercent: 10, autoAlpha: 0}, 0)

    return tl;
}

export default leaveFromProject;