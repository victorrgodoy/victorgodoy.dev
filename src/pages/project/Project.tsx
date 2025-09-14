function Project() {
  const projects = [
    {
      id: 1,
      name: "AI Agent for Import Registration",
      descripton:
        "Generate accurate customs registration instructions, detailing product information to ensure clarity and compliance.",
      year: 2025,
    },
  ];

  return (
    <section className="py-40 flex flex-col max-w-[800px] justify-center mx-auto">
      <h1 className="text-3xl font-medium mb-14">PROJECTS</h1>

      <div className="flex justify-between font-normal text-xl mb-20">
        <p>
          Explore the group and personal projects I developed during university.
        </p>
        <p>2025</p>
      </div>

      {projects.map((p) => (
        <div key={p.id}>
          <h2 className="font-medium text-2xl mb-2">{p.name}</h2>
          <p className="text-xl text-[var(--color-detail)] mb-2.5">{p.descripton}</p>
          <div className="flex gap-3">
            <div className="bg-[var(--color-detail)] h-[300px] w-full rounded-xl"/>
            <div className="bg-[var(--color-detail)] w-1/2 rounded-xl"/>
           </div>
           
        </div>
      ))}
    </section>
  );
}

export default Project;
