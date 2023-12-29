import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries } from "../../Redux/Actions/countriesActions";
import { postNewActivity } from "../../Redux/Actions/activitiesActions";

// import style from "./FormActivities.module.css";

function FormActivities() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getAllCountries());
  }, []);

  const allCountries = useSelector((state) => state.allCountries);
  const [selectedCountries, setSelectedCountries] = React.useState([]);

  const [errors, setErrors] = React.useState({});

  const [input, setInput] = React.useState({
    name: "",
    difficulty: "",
    duration: "",
    season: [],
    countries: [],
  });

  function handleSeason(e) {
    setInput({
      ...input,
      season: [...input.season, e.target.value],
    });
  }

  function handleDuration(e) {
    setInput({
      ...input,
      duration: e.target.value,
    });
  }

  function handleDifficulty(e) {
    setInput({
      ...input,
      difficulty: e.target.value,
    });
  }

  function handleSelection(e) {
    setSelectedCountries([...selectedCountries, e.target.value]);
    setInput({
      ...input,
      countries: [...input.countries, e.target.value],
    });
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

  function handleActName(e) {
    setInput({
      ...input,
      name: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postNewActivity(input));
    alert("The new activity has been created successfully");
    setInput({
      name: "",
      difficulty: "",
      duration: "",
      season: [],
      countries: [],
    });
  }

  return (
    <div>
      <h1>New Activity</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name
            <input
              name="name"
              type="text"
              autoComplete="off"
              value={input.name}
              onChange={handleActName}
            />
          </label>
        </div>

        <div>
          <label>Difficulty Level</label>
          <div>
            <label>
              <input
                type="radio"
                name="difficulty"
                value="1"
                onChange={(e) => handleDifficulty(e)}
              />
              Super Easy
            </label>

            <label>
              <input
                type="radio"
                name="difficulty"
                value="2"
                onChange={(e) => handleDifficulty(e)}
              />
              Easy
            </label>

            <label>
              <input
                type="radio"
                name="difficulty"
                value="3"
                onChange={(e) => handleDifficulty(e)}
              />
              Medium
            </label>

            <label>
              <input
                type="radio"
                name="difficulty"
                value="4"
                onChange={(e) => handleDifficulty(e)}
              />
              Hard
            </label>

            <label>
              <input
                type="radio"
                name="difficulty"
                value="5"
                onChange={(e) => handleDifficulty(e)}
              />
              Super Hard
            </label>
          </div>
        </div>

        <div>
          <label>
            Duration:
            <input
              type="number"
              name="duration"
              value={input.duration}
              placeholder=" Max:24 hours"
              step="0.5"
              min="0.5"
              max="12"
              onChange={handleDuration}
            />
          </label>
        </div>

        <div>
          <label>Season</label>
          <div>
            <label>
              <input
                name="summer"
                value="Summer"
                type="checkbox"
                onChange={(e) => handleSeason(e)}
              />
              Summer
            </label>

            <label>
              <input
                name="autum"
                value="Autum"
                type="checkbox"
                onChange={(e) => handleSeason(e)}
              />
              Autum
            </label>

            <label>
              <input
                name="winter"
                value="Winter"
                type="checkbox"
                onChange={(e) => handleSeason(e)}
              />
              Winter
            </label>

            <label>
              <input
                name="spring"
                value="Spring"
                type="checkbox"
                onChange={(e) => handleSeason(e)}
              />
              Spring
            </label>
          </div>
        </div>

        <div>
          <label>Select Countries</label>
          <select onChange={(e) => handleSelection(e)}>
            {allCountries.map((country) => (
              <option key={country.id} value={country.id}>
                {country.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <button>Create Activity</button>
        </div>

        <div>
          <label>Selected Countries</label>
          <div>
            {input.countries.length ? (
              <div>
                {input.countries?.map((count) => {
                  const countFromST = allCountries?.find((c) => c.id === count);
                  if (countFromST) {
                    return (
                      <div key={countFromST.id}>
                        <a href="#" onClick={handleDelete} id={countFromST.id}>
                          &times;
                        </a>
                        <img
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
              <p>No countries selected yet</p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormActivities;
