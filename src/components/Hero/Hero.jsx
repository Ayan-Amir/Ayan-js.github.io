const Hero = () => (
  <section id="home" className="min-h-screen flex items-center pt-16 bg-slate-950">
    <div className="mx-auto max-w-5xl px-6 w-full py-20 md:py-32">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-50 tracking-tight">
            Software Engineer
          </h1>
          <p className="mt-4 text-xl text-cyan-400 font-medium">
            3+ years building scalable, high-performance web applications.
          </p>
          <p className="mt-4 text-slate-300 leading-relaxed">
            I&apos;m Ayyan — passionate about intuitive user experiences and clean, maintainable
            code. I lead teams, mentor developers, and ship quality solutions in Agile environments.
          </p>
          <a
            href="#portfolio"
            className="inline-block mt-6 px-6 py-3 bg-cyan-500 text-slate-950 font-semibold rounded-lg hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 focus-visible:outline-offset-2 transition-colors"
          >
            View My Work
          </a>
        </div>
        <div className="hidden md:block w-full h-64 bg-gradient-to-br from-cyan-500/20 to-slate-800 rounded-2xl" aria-hidden="true" />
      </div>
    </div>
  </section>
);

export default Hero;
