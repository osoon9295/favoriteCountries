import { Country } from "../types/country";

interface CountryCardProps {
  country: Country;
  handleSelectCountry: (country: Country) => void;
}

const CountryCard: React.FC<CountryCardProps> = ({
  country,
  handleSelectCountry,
}) => {
  return (
    <div
      onClick={() => {
        handleSelectCountry(country);
      }}
    >
      <div className="flex-col cursor-pointer h-full pt-1 rounded-lg hover:bg-[#31304D] hover:text-white">
        <img src={country.flags.svg} className="mx-auto size-16" />
        <h3 className="flex justify-center">{country.name.common}</h3>
      </div>
    </div>
  );
};

export default CountryCard;
