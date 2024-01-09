import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllCountries } from "../../Redux/Actions/countriesActions";
import { postNewActivity } from "../../Redux/Actions/activitiesActions";

import style from "./FormActivities.module.css";

function FormActivities() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    dispatch(getAllCountries());
  }, []);

  const allCountries = useSelector((state) => state.allCountries);

  const [input, setInput] = React.useState({
    name: "",
    difficulty: "",
    duration: "",
    season: [],
    countries: [],
  });

  const [errors, setErrors] = React.useState({});

  //!-------------------------------------------HANDLERS-----------------------------------------------//

  function handleActName(e) {
    const actName =
      e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
    setInput({
      ...input,
      name: actName.trim(),
    });
  }

  function handleDifficulty(e) {
    const difficulty = e.target.value;

    setInput({
      ...input,
      difficulty: difficulty,
    });
    setErrors(
      validate({
        ...input,
        difficulty: difficulty,
      })
    );
    changeDifficulty(difficulty);
  }

  const diffText = React.useRef(null);

  function changeDifficulty(difficulty) {
    const difficultyNames = [
      { name: "Super Easy", className: style.superEasy },
      { name: "Easy", className: style.easy },
      { name: "Medium", className: style.medium },
      { name: "Hard", className: style.hard },
      { name: "Really Hard", className: style.reallyHard },
    ];
    diffText.current.innerText = difficultyNames[difficulty - 1].name;
    diffText.current.className = difficultyNames[difficulty - 1].className;
  }

  function handleDuration(e) {
    setInput({
      ...input,
      duration: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        duration: e.target.value,
      })
    );
  }

  function handleSeason(e) {
    setInput({
      ...input,
      season: [...input.season, e.target.value],
    });
    setErrors(
      validate({
        ...input,
        season: [...input.season, e.target.value],
      })
    );
  }

  function handleCountSelect(e) {
    input.countries.find((count) => count === e.target.value)
      ? alert("Country already selected")
      : setInput({
          ...input,
          countries: [...input.countries, e.target.value],
        });
    setErrors(
      validate({
        ...input,
        countries: [...input.countries, e.target.value],
      })
    );
  }

  function handleDelete(e) {
    e.preventDefault();
    const countId = e.target.id;
    const remainingCountries = input.countries.filter(
      (count) => count !== countId
    );
    setInput({
      ...input,
      countries: remainingCountries,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postNewActivity(input));
    setInput({
      name: "",
      difficulty: "",
      duration: "",
      season: [],
      countries: [],
    });
  }

  //!-------------------------------------------VALIDATION-----------------------------------------------//

  function validate(input) {
    let errors = {};

    !input.name
      ? (errors.name = "Activity's name is required")
      : input.name.length > 100
      ? (errors.name = "100 characters max")
      : !/^[a-zA-Z]+$/.test(input.name)
      ? (errors.name = "Numbers or special characters are not allowed")
      : !input.difficulty
      ? (errors.difficulty = "You must select a difficulty")
      : !input.duration
      ? (errors.duration = "You must select a duration for the activity")
      : !input.season.length
      ? (errors.season = "You must select at least one season")
      : !input.countries.length
      ? (errors.countries = "You must select at least one country")
      : console.log(input);

    return errors;
  }

  return (
    <div className={style.align}>
      <div className={style.container}>
        <h1>New Activity</h1>
        <form onSubmit={handleSubmit}>
          <div className={style.actName}>
            <label className={style.properties}>
              Name
              <input
                className={style.search}
                type="text"
                autoComplete="off"
                value={input.name}
                onChange={handleActName}
              />
            </label>
            <span className={style.errors}>{errors.name}</span>
          </div>

          <div className={style.difficulty}>
            <label htmlFor="difficulty" className={style.properties}>
              Difficulty Level
              <input
                className={style.range}
                type="range"
                min="1"
                max="5"
                id="difficulty"
                defaultValue={1}
                onChange={(e) => handleDifficulty(e)}
              />
              {errors.difficulty && (
                <span className={style.errors}>{errors.difficulty}</span>
              )}
            </label>
            <p ref={diffText} className={style.superEasy}>
              Super Easy
            </p>
          </div>

          <div className={style.duration}>
            <label className={style.properties}>
              Duration (hs)
              <input
                type="number"
                value={input.duration}
                placeholder=" Max:12 hours"
                step="0.5"
                min="0.5"
                max="12"
                onChange={handleDuration}
              />
            </label>
            {errors.duration && (
              <span className={style.errors}>{errors.duration}</span>
            )}
          </div>

          <div className={style.seasons}>
            <label className={style.properties}>
              Season
              {errors.season && (
                <span className={style.errors}>{errors.season}</span>
              )}
            </label>

            <div className={style.seasonOptions}>
              <label>
                <input
                  value="Summer"
                  type="checkbox"
                  onChange={(e) => handleSeason(e)}
                />
                Summer
              </label>

              <label>
                <input
                  value="Autum"
                  type="checkbox"
                  onChange={(e) => handleSeason(e)}
                />
                Autum
              </label>

              <label>
                <input
                  value="Winter"
                  type="checkbox"
                  onChange={(e) => handleSeason(e)}
                />
                Winter
              </label>

              <label>
                <input
                  value="Spring"
                  type="checkbox"
                  onChange={(e) => handleSeason(e)}
                />
                Spring
              </label>
            </div>
          </div>

          <div className={style.select}>
            <label className={style.properties}>
              Select Countries
              {errors.countries && (
                <span className={style.errors}>{errors.countries}</span>
              )}
            </label>
            <select onChange={(e) => handleCountSelect(e)}>
              {allCountries.map((country) => (
                <option key={country.id} value={country.id}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className={style.properties}>Countries Selected</label>
            <div>
              {input.countries.length ? (
                <div className={style.selectionContainer}>
                  {input.countries?.map((count) => {
                    const countFromST = allCountries?.find(
                      (c) => c.id === count
                    );
                    if (countFromST) {
                      return (
                        <div className={style.flags} key={countFromST.id}>
                          <button
                            href="#"
                            onClick={handleDelete}
                            id={countFromST.id}
                          >
                            &times;
                          </button>
                          <img
                            className={style.countrySelected}
                            src={countFromST.flag}
                            alt={countFromST.id}
                            width="100px"
                          ></img>
                          <span>{countFromST.id}</span>
                        </div>
                      );
                    }
                  })}
                </div>
              ) : (
                <p className={style.warning}>No countries selected yet</p>
              )}
            </div>
          </div>

          {Object.keys(errors).length || !input.countries.length ? (
            <>
              <br />
              <button className={style.createInactive} disabled>
                Create Activity
              </button>
            </>
          ) : (
            <>
              <br />
              <button className={style.create}>Create Activity</button>
            </>
          )}
        </form>
      </div>
      <button className={style.backButton} onClick={() => navigate("/home")}>
        ↩
      </button>
    </div>
  );
}

export default FormActivities;
