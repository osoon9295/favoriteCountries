import { useEffect, useState } from "react";
import { Country } from "../types/country";
import { getCountries } from "../api/countries.api";
import CountryCard from "./CountryCard";

const CountryList: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountries, setSeletedCountries] = useState<Country[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data: Country[] = await getCountries();
        setCountries(data);
      } catch (error) {
        alert(error);
      }
    };
    fetchCountries();
  }, []);

  const handleSelectCountry = (country: Country): void => {
    if (
      !selectedCountries.find((selectedCountry: Country) => {
        return selectedCountry.name.common === country.name.common;
      })
    ) {
      setSeletedCountries([...selectedCountries, country]);
    } else {
      setSeletedCountries(
        selectedCountries.filter((selectedCountry: Country) => {
          return selectedCountry.name.common !== country.name.common;
        })
      );
    }
  };

  return (
    <div className="bg-[#F0ECE5] flex place-content-evenly">
      <div className="bg-[#31304D] text-white border-none rounded-xl w-1/4 p-6 h-full mt-9 shadow-md">
        <h2 className="p-6 text-xl text-black bg-white rounded-xl">
          ✨My Favorite Country✨
        </h2>
        <div className="grid-rows-3 p-4">
          {selectedCountries.map((country: Country) => {
            return (
              <CountryCard
                country={country}
                key={country.name.common}
                handleSelectCountry={handleSelectCountry}
              />
            );
          })}
        </div>
      </div>
      <div className="w-1/2 h-full p-6 border-2 mt-9 rounded-xl border-sky-800 ">
        <h3 className="flex justify-center py-1 text-xl">
          좋아하는 나라를 선택해주세요.
        </h3>
        <div className="grid grid-cols-4 gap-3 mt-5">
          {countries.map((country: Country) => {
            return (
              <CountryCard
                country={country}
                key={country.name.common}
                handleSelectCountry={handleSelectCountry}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CountryList;
