import React, { useRef, useState, useEffect, useCallback } from 'react';
import '../assets/css/Style.css';
import karis from '../assets/img/karis.png';
import mira from '../assets/img/mira.png';
import refix from '../assets/img/refix.png';
import covalent from '../assets/img/covalent.png';

const CARDS = [
    { name: 'Covalent', subtitle: 'Acquired by DataRobot', href: 'https://www.covalent.xyz/', img: covalent, alt: 'Covalent', desc: 'Developer orchestration for GPUs and CPUs.' },
    { name: 'Refix', href: 'https://refix.ai/',           img: refix, alt: 'Refix', desc: 'Product analytics for teams that want to move fast.' },
    { name: 'Mira',  href: 'https://mira.ant-agent.ai/',  img: mira,  alt: 'Mira',  desc: 'Turn multimodal content into automated workflows.' },
    { name: 'Karis', href: 'https://karis.im/',            img: karis, alt: 'Karis', desc: 'Your personal team of GTM AI agents.' },
];

// How many px of scrolling it takes for a fade to fully appear/disappear
const FADE_DIST = 80;
// Width of the fade zone at full strength, as a % of the container
const FADE_PCT  = 28;

function computeMask(track) {
    const { scrollLeft, clientWidth, scrollWidth } = track;
    const maxScroll = scrollWidth - clientWidth;
    const leftStrength  = Math.min(scrollLeft / FADE_DIST, 1);
    const rightStrength = Math.min((maxScroll - scrollLeft) / FADE_DIST, 1);
    const leftEnd    = +(leftStrength  * FADE_PCT).toFixed(1);
    const rightStart = +(100 - rightStrength * FADE_PCT).toFixed(1);
    return `linear-gradient(to right, transparent 0%, black ${leftEnd}%, black ${rightStart}%, transparent 100%)`;
}

export default function Companies() {
    const trackRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [mask, setMask] = useState(`linear-gradient(to right, black ${100 - FADE_PCT}%, transparent 100%)`);

    const handleScroll = useCallback(() => {
        const track = trackRef.current;
        if (!track) return;

        setMask(computeMask(track));

        const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 2;
        if (atEnd) {
            setActiveIndex(CARDS.length - 1);
            return;
        }

        const trackLeft = track.getBoundingClientRect().left;
        const children  = Array.from(track.children);
        let closest = 0;
        let minDist = Infinity;
        children.forEach((child, i) => {
            const dist = Math.abs(child.getBoundingClientRect().left - trackLeft);
            if (dist < minDist) { minDist = dist; closest = i; }
        });
        setActiveIndex(closest);
    }, []);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;
        track.addEventListener('scroll', handleScroll, { passive: true });
        return () => track.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    useEffect(() => {
        const mq = window.matchMedia('(max-width: 650px)');
        const update = () => {
            if (mq.matches) {
                setMask('none');
            } else {
                const track = trackRef.current;
                if (track) setMask(computeMask(track));
            }
        };
        update();
        mq.addEventListener('change', update);
        return () => mq.removeEventListener('change', update);
    }, []);

    const scrollToCard = (index) => {
        const track = trackRef.current;
        if (!track) return;
        const child = track.children[index];
        if (!child) return;
        const target = track.scrollLeft + child.getBoundingClientRect().left - track.getBoundingClientRect().left;
        const start = track.scrollLeft;
        const distance = target - start;
        const duration = 600;
        const startTime = performance.now();
        const ease = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        track.style.scrollSnapType = 'none';
        const step = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            track.scrollLeft = start + distance * ease(progress);
            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                track.style.scrollSnapType = '';
            }
        };
        requestAnimationFrame(step);
    };

    return (
        <div className="section" id="companies">
            <h2 className="sectionHeader">Teams I've worked with:</h2>
            <div
                className="companiesCarousel container"
                style={{ WebkitMaskImage: mask, maskImage: mask }}
            >
                <div className="companiesTrack" ref={trackRef}>
                    {CARDS.map(card => (
                        <a key={card.name} className="projectCard" href={card.href} target="_blank" rel="noreferrer">
                            <img className="projectImage companiesImage" src={card.img} alt={card.alt} />
                            <div className="projectCardBody">
                                <div className="projectCardHeader">
                                    <div className="projectNameBlock">
                                        <h3 className="projectName">{card.name}</h3>
                                        {card.subtitle && <p className="projectTagline">{card.subtitle}</p>}
                                    </div>
                                </div>
                                <p className="projectDescription">{card.desc}</p>
                            </div>
                        </a>
                    ))}
                </div>
                <div className="carouselDots">
                    {CARDS.map((_, i) => (
                        <button
                            key={i}
                            className={`carouselDot${i === activeIndex ? ' carouselDotActive' : ''}`}
                            onClick={() => scrollToCard(i)}
                            aria-label={`Go to company ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
