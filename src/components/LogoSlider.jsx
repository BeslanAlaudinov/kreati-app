import { useEffect, useRef } from 'react';
import styles from './LogoSlider.module.css';
import archClub from '../assets/arch-club.svg'
import yuriskon from '../assets/yuriskon.svg'
import novoStroy from '../assets/novo-stroy.svg'
import likeEnglish from '../assets/like-english.svg'
import hair from '../assets/hair.svg'
import paradise from '../assets/paradise.svg'
import melior from '../assets/melior.svg'
import gorStroy from '../assets/gor-stroy.svg'
import rusOkhrana from '../assets/rus-okhrana.svg'

const logos = [
    { name: 'THE ARCH CLUB', src: archClub },
    { name: 'ЮРИСКОН', src: yuriskon },
    { name: 'НОВО-СТРОЙ', src: novoStroy },
    { name: 'LIKE ENGLISH', src: likeEnglish },
    { name: 'ХАЙР', src: hair },
    { name: 'PARADISE', src: paradise },
    { name: 'Melior Development', src: melior },
    { name: 'ГОР-СТРОЙ', src: gorStroy },
    { name: 'Рус Охрана', src: rusOkhrana },
]

export default function LogoSlider() {
    const trackRef = useRef(null);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        const handleMouseEnter = () => (track.style.animationPlayState = 'paused');
        const handleMouseLeave = () => (track.style.animationPlayState = 'running');

        track.addEventListener('mouseenter', handleMouseEnter);
        track.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            track.removeEventListener('mouseenter', handleMouseEnter);
            track.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div className={styles.logosSection}>
            <div className={styles.logosContainer}>
                <div ref={trackRef} className={styles.logosTrack}>
                    {logos.concat(logos).map((logo, index) => (
                        <div key={index} className={styles.logoWrapper}>
                            <img
                                src={logo.src}
                                alt={logo.name}
                                className={styles.logo}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}