function Home() {
  return (
    <section className="w-[450px] mt-24">
      <h1 className="mb-4 font-medium text-2xl md:text-3xl">
        FULL STACK DEVELOPER
      </h1>
      <div className="font-normal text-xs mb-14">
        <p>Backend and frontend.</p>
        <p>Developer specializing in modern web applications.</p>
        <p>AI-driven solutions.</p>
        <p>Server-side development with databases.</p>
      </div>
      <div className="flex gap-2 text-base">
        <a
          className="underline"
          href="https://github.com/victorrgodoy"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        /
        <a
          className="underline"
          href="https://www.linkedin.com/in/victorgodoy-/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkdIn
        </a>
      </div>
    </section>
  );
}

export default Home;
