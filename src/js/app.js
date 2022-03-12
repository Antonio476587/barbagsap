import barba from '@barba/core';
import gsap from 'gsap';

import { revealProject, leaveFromProject, leaveToProject, animationEnter, animationLeave } from './animations';

const resetActiveLink = () => {
    gsap.set('a.is-active span', { xPercent: -100, });
};

barba.hooks.enter(() => {
    scrollTo(0,0)
});

barba.init({
    transitions: [
        {
            name: 'detail',
            to: {
                namespace: ['detail'],
            },
            once(data) {
                revealProject(data.next.container);
            },
            enter(data) {
                revealProject(data.next.container)
            },
            leave: (data) => leaveToProject(data.current.container),
        },
        {
            name: 'global-transition',
            enter(data) {
                resetActiveLink();
                animationEnter(data.next.container)
            },
            once(data) {
                resetActiveLink();
                gsap.from('header a', {
                    duration: 0.6,
                    yPercent: 100,
                    stagger: 0.2,
                    ease: 'power1.out',
                    onComplete: () => animationEnter(data.next.container),
                })
            },
            leave: (data) => animationLeave(data.current.container),
        },
        {   name: 'from-detail',
            from: {
                namespace: ['detail'],
            },
            leave: (data) => leaveFromProject(data.current.container),
            enter(data) {
                resetActiveLink();
                gsap.from('header a', {
                    duration: 0.6,
                    yPercent: 100,
                    stagger: 0.2,
                    ease: 'power1.out',
                    onComplete: () => animationEnter(data.next.container),
                })
            },
        }
    ]
})