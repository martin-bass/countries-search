import { Country } from "../mock/types";

type Props = {
  country: Country;
};

function Card({ country, lightMode }: Props | any) {
  return (
    <div
      className={
        lightMode
          ? "bg-gray-100 rounded-lg text-black shadow-2xl max-w-[300px] max-sm:m-auto"
          : "bg-gray-700 rounded-lg text-white max-w-[300px] max-sm:m-auto"
      }
    >
      <div>
        <a href={`/country/${country.alpha3Code}`}>
          <img
            className="rounded-t-lg h-[200px] w-auto object-cover min-w-full"
            src={country.flag}
            alt={country.name}
          />
        </a>
      </div>
      <div className="p-5 h-44">
        <h2 className="font-black text-2xl mb-4">{country.name}</h2>
        <h6
          className={
            lightMode
              ? "block font-black text-black"
              : "block font-black text-gray-300"
          }
        >
          Population:{" "}
          <span
            className={
              lightMode ? "font-thin text-black" : "font-thin text-white"
            }
          >
            {country.population?.toLocaleString()}
          </span>
        </h6>
        <h6
          className={
            lightMode
              ? "block font-black text-black"
              : "block font-black text-gray-300"
          }
        >
          Region:{" "}
          <span
            className={
              lightMode ? "font-thin text-black" : "font-thin text-white"
            }
          >
            {country.region}
          </span>
        </h6>
        <h6
          className={
            lightMode
              ? "block font-black text-black"
              : "block font-black text-gray-300"
          }
        >
          Capital:{" "}
          <span
            className={
              lightMode ? "font-thin text-black" : "font-thin text-white"
            }
          >
            {country.capital}
          </span>
        </h6>
      </div>
    </div>
  );
}

export default Card;
