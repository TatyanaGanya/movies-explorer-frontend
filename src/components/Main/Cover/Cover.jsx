import "./Cover.css";

function Cover({ title, name, children, id }) {
  return (
    <section  id={id} className={`${name !== "techs" ? "cover" : "cover-grey"}`}>
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
