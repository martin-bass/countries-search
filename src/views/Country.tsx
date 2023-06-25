import { useParams } from "react-router-dom";
import data from "../mock/data.json";

function Country({ lightMode }: any) {
  const { alpha3Code } = useParams();

  const countryFound = data.find((country) => {
    if (country.alpha3Code === alpha3Code) {
      return country;
    }
  });

  return (
    <section className="container bg-grey-800 min-w-full min-h-screen">
      <div className="min-w-full p-2">
        <a href="/">
          <button
            className={
              lightMode
                ? "text-black bg-gray-200 shadow-md hover:bg-gray-400 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ml-10"
                : "text-white bg-gray-700 hover:bg-gray-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ml-10"
            }
          >
            ← Back
          </button>
        </a>
      </div>
      <div className="flex flex-row p-16 max-lg:flex-col max-lg:m-auto max-mobile:p-4">
        <div>
          <img
            src={countryFound?.flag}
            alt={countryFound?.name}
            className="w-[600px] max-h-[380px]"
          />
        </div>
        <div
          className={
            lightMode ? "p-8 text-black ml-20 max-md:ml-0 max-mobile:p-0" : "p-8 text-white ml-20 max-md:ml-0 max-mobile:p-0"
          }
        >
          <h1 className="text-4xl font-black max-lg:text-center max-mobile:mt-8">{countryFound?.name}</h1>
          <div className="flex flex-row max-lg:flex-col m-auto">
            <div className="mt-10">
              <h5
                className={
                  lightMode
                    ? "text-lg font-black text-black my-3"
                    : "text-lg font-black text-gray-300 my-3"
                }
              >
                Native Name:{" "}
                <span
                  className={
                    lightMode
                      ? "font-thin text-gray-800"
                      : "font-thin text-white"
                  }
                >
                  {countryFound?.nativeName}
                </span>
              </h5>
              <h5
                className={
                  lightMode
                    ? "text-lg font-black text-black my-3"
                    : "text-lg font-black text-gray-300 my-3"
                }
              >
                Population:{" "}
                <span
                  className={
                    lightMode
                      ? "font-thin text-gray-800"
                      : "font-thin text-white"
                  }
                >
                  {countryFound?.population.toLocaleString()}
                </span>
              </h5>
              <h5
                className={
                  lightMode
                    ? "text-lg font-black text-black my-3"
                    : "text-lg font-black text-gray-300 my-3"
                }
              >
                Region:{" "}
                <span
                  className={
                    lightMode
                      ? "font-thin text-gray-800"
                      : "font-thin text-white"
                  }
                >
                  {countryFound?.region}
                </span>
              </h5>
              <h5
                className={
                  lightMode
                    ? "text-lg font-black text-black my-3"
                    : "text-lg font-black text-gray-300 my-3"
                }
              >
                Sub Region:{" "}
                <span
                  className={
                    lightMode
                      ? "font-thin text-gray-800"
                      : "font-thin text-white"
                  }
                >
                  {countryFound?.subregion}
                </span>
              </h5>
              <h5
                className={
                  lightMode
                    ? "text-lg font-black text-black my-3"
                    : "text-lg font-black text-gray-300 my-3"
                }
              >
                Capital:{" "}
                <span
                  className={
                    lightMode
                      ? "font-thin text-gray-800"
                      : "font-thin text-white"
                  }
                >
                  {countryFound?.capital}
                </span>
              </h5>
            </div>
            <div className="mt-10 ml-16 max-lg:ml-0 max-lg:mt-0">
              <h5
                className={
                  lightMode
                    ? "text-lg font-black text-black my-3"
                    : "text-lg font-black text-gray-300 my-3"
                }
              >
                Top Leve Domain:{" "}
                <span
                  className={
                    lightMode
                      ? "font-thin text-gray-800"
                      : "font-thin text-white"
                  }
                >
                  {countryFound?.topLevelDomain}
                </span>
              </h5>
              <h5
                className={
                  lightMode
                    ? "text-lg font-black text-black my-3"
                    : "text-lg font-black text-gray-300 my-3"
                }
              >
                Currencies:{" "}
                <span
                  className={
                    lightMode
                      ? "font-thin text-gray-800"
                      : "font-thin text-white"
                  }
                >
                  {countryFound?.currencies?.map((c) => c.name)}
                </span>
              </h5>
              <h5
                className={
                  lightMode
                    ? "text-lg font-black text-black my-3"
                    : "text-lg font-black text-gray-300 my-3"
                }
              >
                Languages:{" "}
                <span
                  className={
                    lightMode
                      ? "font-thin text-gray-800"
                      : "font-thin text-white"
                  }
                >
                  {countryFound?.languages.map((l) => l.name)}
                </span>
              </h5>
            </div>
          </div>
          <div className="flex flex-row align-middle mt-7">
            <h5
              className={
                lightMode
                  ? "text-base font-black text-black"
                  : "text-base font-black text-gray-300"
              }
            >
              Border Countries:
            </h5>
            <ul className="flex flex-row flex-wrap gap-2">
              {countryFound?.borders?.map((b) => (
                <div
                  key={b}
                  className={
                    lightMode ? "bg-gray-300 ml-1 p-1" : "bg-gray-900 ml-1 p-1"
                  }
                >
                  <a href={`/country/${b}`}>
                    <li className="text-sm">{b}</li>
                  </a>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Country;
