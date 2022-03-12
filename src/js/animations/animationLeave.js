import gsap from "gsap";

const animationLeave = (container) => {
    const images = container.querySelectorAll('.image');
    const imgs = container.querySelectorAll('img');
    const activeLink = container.querySelector('a.is-active span');

    const tl = gsap.timeline({
        defaults: {
            duration: 0.9, ease: 'power1.in'
        }
    })

    tl
        .to(activeLink, { xPercent: 101 }, 0)
        .to(images, { xPercent: 101, stagger: 0.1 }, 0)
        .to(imgs, { xPercent: -101, stagger: 0.1 }, 0)

    return tl;
}

export default animationLeave;