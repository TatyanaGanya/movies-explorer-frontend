import "./Cover.css";

function Cover({ title, name, children }) {
  return (
    <section className={`${name !== "techs" ? "cover" : "cover-grey"}`}>
      <h2
        className={`${
          name !== "techs" ? "cover__title" : "cover-grey__title"
        }`}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

export default Cover;
