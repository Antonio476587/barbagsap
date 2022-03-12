import gsap from "gsap";

const revealProject = (container) => {
    const hero = container.querySelectorAll('.hero');
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
        .set(hero, { autoAlpha: 1 })
        .from(header, { yPercent: 100, stagger: 0.2, })
        .fromTo(activeLink, { xPercent: -101 }, { xPercent: 0 }, 0)
        .from(img, { xPercent: 101 }, 0)
        .from(image, { xPercent: -101, autoAlpha: 0 }, 0)
        .from(content, { yPercent: 10, autoAlpha: 0 }, 0)

    return tl;
}

export default revealProject;