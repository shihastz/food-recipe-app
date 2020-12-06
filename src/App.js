import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import Recipe from "./component/Recipe";
import Alert from "./component/Alert";
import { v4 as uuidv4 } from "uuid";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

function App() {
  const [query, setquery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState("");

  const APP_ID = "f59f8e08";
  const APP_KEY = "ed0cd0d0732d820e08ca116533699764";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async () => {
    if (query !== "") {
      const result = await axios.get(url);
      //console.log(result)
      if (result.data.more) {
        setRecipes(result.data.hits);
        setquery("");
        setLoading(false);
        //console.log(recipes);
      } else {
        setAlert("NO food with such name");
        setLoading(false);
      }
    } else {
      setAlert("Please Fill the Form");
      setLoading(false);
    }
  };

  const onChange = (e) => {
    const name = e.target.value;
    setquery(name);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setAlert("");
    setRecipes([])
    getData();
    query ? setLoading(true) : setLoading(false);
  };

  return (
    <div className="App">
      <MuiThemeProvider>
        <AppBar title="Food Recipe App" />
      </MuiThemeProvider>
      <h1></h1>
      <form className="search-form" onSubmit={onSubmit}>
        {alert ? <Alert alert={alert} /> : null}
        <input
          type="text"
          placeholder="Search food (Eg: pizza)"
          autoComplete="off"
          onChange={onChange}
          value={query}
        />
        <input type="submit" value="Search" />
      </form>
      <div className="recipes">
        {loading ? (
          <h2>Loading.....</h2>
        ) : recipes ? (
          recipes.map((recipe, index) => <Recipe key={index} recipe={recipe} />)
        ) : null}
      </div>
    </div>
  );
}

export default App;
