import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import useLocalStorage from "./useLocalStorage";

//Views
import Home from "../src/views/Home";
import Country from "../src/views/Country";
import Region from "../src/views/Region";

function App() {
  const [lightMode, setLightMode] = useLocalStorage("mode", false);
  const [region, setRegion] = useState("");
  const [searchCountry, setSearchCountry] = useState("");
  const navigate = useNavigate();

  const handleInput = (e: any) => {
    setSearchCountry(e.target.value);
  };

  const handleSelect = (e: any) => {
    setRegion(e.target.value);
  };

  const handleLightMode = () => {
    setLightMode(!lightMode);
  };

  useEffect(() => {
    handleSelect;
    if (region) {
      navigate(`/region/${region}`);
    }
  }, [region]);

  return (
    <div
      className={
        lightMode
          ? "container bg-gray-100 min-h-screen m-auto min-w-full"
          : "container bg-gray-800 min-h-screen m-auto min-w-full"
      }
    >
      <nav
        className={lightMode ? "bg-white h-20 shadow-xl" : "bg-gray-700 h-20"}
      >
        <div className="flex flex-row justify-between px-10 h-full items-center">
          <a href="/">
            <h1
              className={
                lightMode
                  ? "text-black text-3xl font-black"
                  : "text-white text-3xl font-black"
              }
            >
              Where in the world?
            </h1>
          </a>
          <button
            className={
              lightMode
                ? "hover:bg-gray-200 font-bold py-2 px-4 rounded inline-flex items-center text-black"
                : "hover:bg-gray-400 font-bold py-2 px-4 rounded inline-flex items-center text-white"
            }
            onClick={handleLightMode}
          >
            {lightMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            )}
            <span className="mx-2">
              {lightMode ? "Dark mode" : "Light mode"}
            </span>
          </button>
        </div>
      </nav>
      <main>
        <section className="p-12 flex justify-between">
          <div>
            <div className="relative mb-6">
              <div
                className={
                  lightMode
                    ? "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-black"
                    : "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-white"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </div>
              <input
                type="text"
                onChange={handleInput}
                className={
                  lightMode
                    ? "bg-white text-black block w-full rounded-md border-0 py-1.5 pl-12 pr-20 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    : "bg-gray-700 text-white block w-full rounded-md border-0 py-1.5 pl-12 pr-20 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                }
                placeholder="Search for a country..."
              />
            </div>
          </div>
          <div>
            <select
              id="countries"
              className={
                lightMode
                  ? "bg-white text-black border border-gray-300text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                  : "bg-gray-700 text-white border border-gray-300text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              }
              onChange={handleSelect}
            >
              <option selected disabled hidden>
                Filter by Region
              </option>
              <option value="Antarctic">Antarctic</option>
              <option value="Antarctic Ocean">Antarctic Ocean</option>
              <option value="Polar">Polar</option>
              <option value="Americas">Americas</option>
              <option value="Oceania">Oceania</option>
              <option value="Africa">Africa</option>
              <option value="Europe">Europe</option>
              <option value="Asia">Asia</option>
            </select>
          </div>
        </section>
        <Routes>
          <Route
            element={
              <Home searchCountry={searchCountry} lightMode={lightMode} />
            }
            path="/"
          />
          <Route
            element={
              <Country
                lightMode={lightMode}
                handleLightMode={handleLightMode}
              />
            }
            path="/country/:alpha3Code"
          />
          <Route element={<Region lightMode={lightMode}/>} path="/region/:region" />
        </Routes>
      </main>
    </div>
  );
}

export default App;
