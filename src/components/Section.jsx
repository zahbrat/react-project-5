export default function Section({ title, children }) {
  return (
    <section>
      <div className="con py-4 sm:py-12">
        <h2 className="text-xl pb-8">{title}</h2>

        {children}
      </div>
    </section>
  );
}