import { Country } from "./../types/country";
import axios from "axios";

export const getCountries = async (): Promise<Country[]> => {
  const response = await axios.get("https://restcountries.com/v3.1/all");
  return response.data;
};
