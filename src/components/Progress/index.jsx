//function qui crée les progressions

import progress from "../../Data/progress.json";
import "./progress.scss";

function Progress() {
  return (
    <div className="progressContainer">
      {progress && progress.length > 0 ? (
        progress.map((progres) => (
          <div key={progres.id} className={`progress-${progres.id}`}>
            <h2 className="progressContainer__title">{progres.title}</h2>

            {progres.language && progres.language.length > 0 && (
              <div className="progressContainer__content">
                {progres.language.map((lang, index) => (
                  <span key={index} className="progressContainer__span">
                    <p className="progressContainer__text">{lang.name}</p>
                    <div className="progressContainer__wrapper">
                      <div
                        className="progressContainer__bar"
                        style={{ width: lang.percentage }}
                      >
                        {lang.percentage}
                      </div>
                    </div>
                  </span>
                ))}
              </div>
            )}
          </div>
        ))
      ) : (
        <p>Aucun progrès trouvé</p>
      )}
    </div>
  );
}
export default Progress;
