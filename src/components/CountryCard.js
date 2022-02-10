import { CountryBox, CountryFlag, CountryDetails } from "./styled/CountryCard.styled";

const CountryCard = (props) => {

    const flag = props.flag;
    const name = props.name;
    const population = props.population;
    const region = props.region;
    const capital = props.capital;

    return ( 
        <CountryBox>
            <CountryFlag>
                <img src={flag} alt={ `${name} flag` }></img>
            </CountryFlag>
            <CountryDetails>
                <h3>{ name }</h3>
                <div><span>Population:</span> {population}</div> 
                <div><span>Region:</span> {region}</div>
                <div><span>Capital:</span> {capital}</div>
            </CountryDetails>
        </CountryBox>
     );
}
 
export default CountryCard;