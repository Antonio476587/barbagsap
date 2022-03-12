import gsap from "gsap";

const animationEnter = (container) => {
    const images = container.querySelectorAll('.image');
    const imgs = container.querySelectorAll('img');
    const activeLink = container.querySelector('a.is-active span');
    const projects = container.querySelectorAll('.project');

    const tl = gsap.timeline({
        defaults: {
            duration: 0.9, ease: 'power4.out'
        }
    })

    tl
        .set(projects, { autoAlpha: 1 })
        .fromTo(activeLink, { xPercent: -101 }, { xPercent: 0 }, 0)
        .from(images, { xPercent: -101, stagger: 0.1 }, 0)
        .from(imgs, { xPercent: 101, stagger: 0.1 }, 0);

    return tl;
}

export default animationEnter;