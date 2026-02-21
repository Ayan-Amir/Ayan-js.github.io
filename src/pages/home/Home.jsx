import { useLayoutEffect, useRef } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import About from '../../components/About';
import Contact from '../../components/Contact';
import CustomCursor from '../../components/CustomCursor';
import Footer from '../../components/Footer';
import Hero from '../../components/Hero';
import Navigation from '../../components/Navigation';
import Skills from '../../components/Skills';

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const component = useRef(null);
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  const cursorRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Hero Entrance
      const heroTl = gsap.timeline({ defaults: { ease: 'power4.out' } });
      heroTl
        .from('.hero-sub', { opacity: 0, y: 30, duration: 1 })
        .from('.hero-title', { opacity: 0, scale: 0.95, y: 50, duration: 1.2 }, '-=0.6')
        .from('.hero-role', { opacity: 0, y: 20, duration: 0.8 }, '-=0.8')
        .from('.hero-desc', { opacity: 0, y: 20, duration: 0.8 }, '-=0.6')
        .from('.hero-cta', { opacity: 0, scale: 0.8, duration: 0.8, ease: 'back.out(1.7)' }, '-=0.4');

      // Floating CTA Animation
      gsap.to('.hero-cta-button', {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        stagger: 0.2,
      });

      // Background Parallax
      gsap.to('.bg-glow', {
        scrollTrigger: {
          trigger: 'body',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.5,
        },
        y: i => (i % 2 === 0 ? 100 : -100),
        x: i => (i % 2 === 0 ? 50 : -50),
        ease: 'none',
      });

      // Section Heading Reveals
      gsap.utils.toArray('section h2').forEach(heading => {
        gsap.from(heading, {
          scrollTrigger: {
            trigger: heading,
            start: 'top 90%',
          },
          opacity: 0,
          y: 40,
          duration: 1,
          ease: 'power4.out',
        });
      });

      // About Animation
      gsap.from('#about-content', {
        scrollTrigger: {
          trigger: '#about',
          start: 'top 85%',
        },
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power3.out',
        immediateRender: false,
      });

      // Skills Animation
      gsap.from('.skill-group', {
        scrollTrigger: {
          trigger: '#technologies',
          start: 'top 85%',
        },
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
        immediateRender: false,
      });

      // Contact Animation
      gsap.from('.contact-item', {
        scrollTrigger: {
          trigger: '#contact',
          start: 'top 90%',
        },
        opacity: 0,
        x: -20,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power2.out',
        immediateRender: false,
      });

      // Magnetic Effect for Glass Cards
      const cards = gsap.utils.toArray('.glass');
      cards.forEach(card => {
        card.addEventListener('mousemove', e => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;

          gsap.to(card, {
            x: x * 0.15,
            y: y * 0.15,
            rotateX: -y * 0.05,
            rotateY: x * 0.05,
            duration: 0.5,
            ease: 'power2.out',
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            x: 0,
            y: 0,
            rotateX: 0,
            rotateY: 0,
            duration: 0.8,
            ease: 'elastic.out(1, 0.3)',
          });
        });
      });

      // Custom Cursor Logic
      const cursor = cursorRef.current;

      const onMouseMove = e => {
        // Move cursor
        gsap.to(cursor, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.1,
          ease: 'power2.out',
        });

        // Toggle active state based on target
        const isInteractive = e.target.closest('a, button, .glass, .hero-cta-button, .contact-item');
        const isText = e.target.closest('h1, h2, h3, h4, h5, h6, p, span, li');

        if (isInteractive || isText) {
          cursor.classList.add('active');
        } else {
          cursor.classList.remove('active');
        }
      };

      window.addEventListener('mousemove', onMouseMove);

      return () => {
        window.removeEventListener('mousemove', onMouseMove);
      };
    }, component);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={component} className="relative min-h-screen bg-slate-950 text-slate-50 selection:bg-cyan-500/30">
      <div className="noise" />

      {/* Background elements */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="bg-glow absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="bg-glow absolute -right-40 top-1/4 h-[400px] w-[400px] rounded-full bg-indigo-500/10 blur-[120px]" />
        <div className="bg-glow absolute bottom-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-400/5 blur-[100px]" />
      </div>

      <Navigation />
      <Hero heroRef={heroRef} />
      <About aboutRef={aboutRef} />
      <Skills skillsRef={skillsRef} />
      <Contact contactRef={contactRef} />
      <Footer />
      <CustomCursor cursorRef={cursorRef} />
    </div>
  );
}

export default Home;
