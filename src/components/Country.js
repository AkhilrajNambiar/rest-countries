import { Link, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { CountryPageFlex, CountryPageBox, CountryDetailLeft, CountryDetailRight, NeighbouringCountries } from "./styled/CountryPageBox";
import loadingGif from "../images/nicer_loading.gif";
import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Country = () => {

    const {name} = useParams();
    const [ details, isLoading, error, setDetails, setLoading, setError ] = useFetch(`https://restcountries.com/v3.1/name/${name}`)

    const history = useHistory();

    const [borderNames, setBorderNames] = useState([]);
    let borders = [];

    useEffect(() => {
        console.log("useEffect called");
        if (details != null && details[0].hasOwnProperty("borders")) {
            console.log("Border countries function called!");
            details[0].borders.forEach((item) => {
                console.log("Border countries function called!");
                findBorderCountries(item)
            });
        }
    }, [details]);

    const findBorderCountries = (alpha) => {
        let name = "";
        fetch(`https://restcountries.com/v3.1/alpha/${alpha}`)
            .then (
                res => {
                    if (!res.ok) {
                        return
                    }
                    return res.json()
                }
            )
            .then (data => {
                name = data[0].name.common;
                console.log(name);
                borders = [...borders, name];
                setBorderNames(borders);
            })
    }

    const goBack = () => {
        history.goBack();
    }

    return ( 
        <CountryPageBox>
            <div className="go-back" onClick={goBack}>
                <i className="fas fa-long-arrow-alt-left"></i> Back
            </div>
            { isLoading && <img src={loadingGif} width={500} height={500}></img> }
            { details && <CountryPageFlex>
                <div>
                    <img src={ details[0].flags.png}></img>
                </div>
                <div className="country-name-and-details">
                    <h1>{ details[0].name.common }</h1>
                    <div className="country-details">
                        <CountryDetailLeft>
                            <div className="official-name">
                                <span>Official Name: </span>{ details[0].name.official }
                            </div>
                            <div className="population">
                                <span>Population: </span>{ details[0].population }
                            </div>
                            <div className="region">
                                <span>Region: </span>{ details[0].region }
                            </div>
                            <div className="sub-region">
                                <span>Sub region: </span>{ details[0].subregion }
                            </div>
                            <div className="capital">
                                <span>Capital: </span>{ details[0].hasOwnProperty("capital") ? details[0].capital[0] : "Unknown" }
                            </div>
                        </CountryDetailLeft>
                        <CountryDetailRight>
                            <div className="top-level-domain">
                                <span>Top Level Domain: </span>{ details[0].hasOwnProperty("tld") ? details[0].tld[0] : "none" }
                            </div>
                            { details[0].hasOwnProperty("currencies") &&  <div className="currencies">
                                <span>Currencies: </span>{ details[0].currencies[Object.keys(details[0].currencies)[0]].name }
                            </div>}
                            { details[0].hasOwnProperty("languages") && <div className="languages">
                                <span>Languages: </span>{ Object.values(details[0].languages).join(", ") }
                            </div>}
                        </CountryDetailRight>
                    </div>
                    { details[0].hasOwnProperty("borders") &&  <NeighbouringCountries>
                        <div className="border-label">
                            Border Countries: 
                        </div>
                        <ul className="border-countries-list">
                            { borderNames.map((item, index) => (
                                <li key={index}><Link to={`/country/${item}`}>{ item }</Link></li>
                            )) }
                        </ul>
                    </NeighbouringCountries>}
                </div>
            </CountryPageFlex>}
        </CountryPageBox>
     );
}
 
export default Country;