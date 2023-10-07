import "./Cover.css";

function Cover({ title, name, children }) {
  return (
    <section className={`${name !== "techs" ? "cover" : "cover_grey"}`}>
      <h2
        className={`cover__title ${
          name !== "techs" ? "" : "cover__title_grey"
        }`}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

export default Cover;
