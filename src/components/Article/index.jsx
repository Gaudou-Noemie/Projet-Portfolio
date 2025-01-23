import "./article.scss";
import projets from "../../Data/projets.json";

function Article() {
  return (
    <div className="div">
      {projets.map((projet) => (
        <div className="articleContainer" key={projet.id}>
          <h2 className="articleContainer__title">{projet.title}</h2>
          <div className="articleContainer__divImg">
            <img
              className="articleContainer__img"
              src={projet.img}
              alt={projet.title}
            />
          </div>
          <p className="articleContainer__texte">{projet.description}</p>
          <div className="articleContainer__links">
            <a href={projet.code} className="articleContainer__code">
              code
            </a>
            <a
              href={projet.deployment}
              className="articleContainer__deployment"
            >
              déploiement
            </a>
          </div>
          <ul className="articleContainer__content"></ul>
        </div>
      ))}
    </div>
  );
}
export default Article;
