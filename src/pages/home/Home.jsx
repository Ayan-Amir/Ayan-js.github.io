import { useLayoutEffect, useRef, useState } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import About from '../../components/About';
import Certifications from '../../components/Certifications';
import ChatBot from '../../components/ChatBot';
import Contact from '../../components/Contact';
import CustomCursor from '../../components/CustomCursor';
import Footer from '../../components/Footer';
import Hero from '../../components/Hero';
import Navigation from '../../components/Navigation';
import Projects from '../../components/Projects';
import Recommendations from '../../components/Recommendations';
import ScrollToTop from '../../components/ScrollToTop';
import Skills from '../../components/Skills';

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({ toggleActions: 'play none none none' });

function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const component = useRef(null);
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const certificationsRef = useRef(null);
  const recommendationsRef = useRef(null);
  const contactRef = useRef(null);
  const cursorRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Hero Entrance
      const heroTl = gsap.timeline({ defaults: { ease: 'power4.out' } });
      heroTl
        .from('.hero-badge', { opacity: 0, y: 20, duration: 0.8 })
        .from('.hero-sub', { opacity: 0, y: 30, duration: 1 }, '-=0.5')
        .from('.hero-title', { opacity: 0, scale: 0.95, y: 50, duration: 1.2 }, '-=0.6')
        .from('.hero-role', { opacity: 0, y: 20, duration: 0.8 }, '-=0.8')
        .from('.hero-desc', { opacity: 0, y: 20, duration: 0.8 }, '-=0.6')
        .from('.hero-cta', { opacity: 0, scale: 0.8, duration: 0.8, ease: 'back.out(1.7)' }, '-=0.4');

      // Navigation Entrance
      gsap.from('.nav-bar', {
        opacity: 0,
        y: -30,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out',
      });

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

      // Section Divider Bar Reveals
      gsap.utils.toArray('.section-divider').forEach(divider => {
        gsap.from(divider, {
          scrollTrigger: {
            trigger: divider,
            start: 'top 90%',
          },
          scaleX: 0,
          duration: 0.8,
          delay: 0.3,
          ease: 'power3.inOut',
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

      // About Highlight Cards
      gsap.from('.about-highlight', {
        scrollTrigger: {
          trigger: '#about',
          start: 'top 75%',
        },
        opacity: 0,
        y: 20,
        scale: 0.85,
        stagger: 0.12,
        duration: 0.6,
        ease: 'back.out(1.7)',
        immediateRender: false,
      });

      // About Service Cards
      gsap.from('.about-service', {
        scrollTrigger: {
          trigger: '#about',
          start: 'top 70%',
        },
        opacity: 0,
        x: 30,
        stagger: 0.1,
        duration: 0.7,
        ease: 'power3.out',
        immediateRender: false,
      });

      // Project Cards Animation — staggered rise with soft focus pull
      gsap.utils.toArray('.project-card').forEach((card, i) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: 'top 88%',
          },
        });

        tl.from(card, {
          opacity: 0,
          y: 70,
          scale: 0.92,
          filter: 'blur(6px)',
          duration: 0.9,
          delay: (i % 2) * 0.15,
          ease: 'power3.out',
          immediateRender: false,
        }).from(
          card.querySelectorAll('.project-tag'),
          {
            opacity: 0,
            y: 10,
            stagger: 0.05,
            duration: 0.4,
            ease: 'power2.out',
          },
          '-=0.35',
        );
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

      // Skill Chip Pop-in
      gsap.from('.skill-chip', {
        scrollTrigger: {
          trigger: '#technologies',
          start: 'top 75%',
        },
        opacity: 0,
        scale: 0.5,
        y: 10,
        stagger: 0.02,
        duration: 0.5,
        ease: 'back.out(2)',
        immediateRender: false,
      });

      // Certifications Animation
      gsap.from('.cert-card', {
        scrollTrigger: {
          trigger: '#certifications',
          start: 'top 85%',
        },
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
        immediateRender: false,
      });

      // Certification Icon Bounce
      gsap.from('.cert-icon', {
        scrollTrigger: {
          trigger: '#certifications',
          start: 'top 80%',
        },
        scale: 0,
        rotate: -90,
        stagger: 0.1,
        duration: 0.6,
        delay: 0.15,
        ease: 'back.out(2.5)',
        immediateRender: false,
      });

      // Recommendations Animation
      gsap.from('.recommendation-card', {
        scrollTrigger: {
          trigger: '#recommendations',
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
    <div className="relative min-h-screen bg-slate-950 text-slate-50 selection:bg-cyan-500/30 light:bg-slate-50 light:text-slate-900" ref={component}>
      <div className="noise" />

      {/* Background elements */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="bg-glow absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px] light:opacity-40" />
        <div className="bg-glow absolute -right-40 top-1/4 h-[400px] w-[400px] rounded-full bg-indigo-500/10 blur-[120px] light:opacity-40" />
        <div className="bg-glow absolute bottom-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-400/5 blur-[100px] light:opacity-40" />
      </div>

      <Navigation />
      <Hero heroRef={heroRef} />
      <About aboutRef={aboutRef} />
      <Projects projectsRef={projectsRef} />
      <Skills skillsRef={skillsRef} />
      <Certifications certificationsRef={certificationsRef} />
      <Recommendations recommendationsRef={recommendationsRef} />
      <Contact contactRef={contactRef} />
      <Footer />
      <ScrollToTop hidden={isChatOpen} />
      <ChatBot isOpen={isChatOpen} onOpenChange={setIsChatOpen} />
      <CustomCursor cursorRef={cursorRef} />
    </div>
  );
}

export default Home;
