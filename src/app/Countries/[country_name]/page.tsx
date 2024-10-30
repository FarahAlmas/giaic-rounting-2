
import React from "react"; 
import {countryData} from "@/constant/data";


const CountryName = ({ params }: { params: { country_name: string } }) => {
if (params.country_name == "pakistan"){
  return(
  <div>
    <h1>country: {countryData.pakistan.name}</h1>
  <p>Name:{countryData.pakistan.name}</p>
  <p>Capital:{countryData.pakistan.capital}</p>
  <p>Region:{countryData.pakistan.region}</p>
  <p>Subregion:{countryData.pakistan.subregion}</p>
  <p>Population:{countryData.pakistan.population}</p>
  <p>Area:{countryData.pakistan.area}</p>
  </div>);
  }else if(params.country_name == "banglabesh"){
    return(
      <div>
      <h1>country: {countryData.bangladesh.name}</h1>
      <p>Name:{countryData.bangladesh.name}</p>
      <p>Capital:{countryData.bangladesh.capital}</p>
      <p>Region:{countryData.bangladesh.region}</p>
      <p>Subregion:{countryData.bangladesh.subregion}</p>
      <p>Population:{countryData.bangladesh.population}</p>
      <p>Area:{countryData.bangladesh.area}</p>
      </div>
    )
  }else if(params.country_name == "india"){
    return(
      <div>
      <h1>country: {countryData.india.name}</h1>
      <p>Name:{countryData.india.name}</p>
      <p>Capital:{countryData.india.capital}</p>
      <p>Region:{countryData.india.region}</p>
      <p>Subregion:{countryData.india.subregion}</p>
      <p>Population:{countryData.india.population}</p>
      <p>Area:{countryData.india.area}</p>
      </div>
    );
}else if(params.country_name == "china"){
  return(
    <div>
    <h1>country: {countryData.china.name}</h1>
    <p>Name:{countryData.china.name}</p>
    <p>Capital:{countryData.china.capital}</p>
    <p>Region:{countryData.china.region}</p>
    <p>Subregion:{countryData.china.subregion}</p>
    <p>Population:{countryData.china.population}</p>
    <p>Area:{countryData.china.area}</p>
    </div>
  );
}else if(params.country_name == "afghanistan"){
  return(
    <div>
      <h1>country: {countryData.afghanistan.name}</h1>
      <p>Name:{countryData.afghanistan.name}</p>
      <p>Capital:{countryData.afghanistan.capital}</p>
      <p>Region:{countryData.afghanistan.region}</p>
      <p>Subregion:{countryData.afghanistan.subregion}</p>
      <p>Population:{countryData.afghanistan.population}</p>
      <p>Area:{countryData.afghanistan.area}</p>
    </div>
  );

}else{
  return(
    <h1>country not found</h1>

  );
}
};

export default CountryName;

