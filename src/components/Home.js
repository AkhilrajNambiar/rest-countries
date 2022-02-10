import { HomeFlex, SearchBarAndFilter, SearchBar, Filters, ContinentList, FilterBox, AllCountriesBox } from "./styled/Home.styled";
import Continents from "./Continents";
import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import loadingGif from "../images/nicer_loading.gif";
import useFetch from "./useFetch";
import SearchNotFound from "./SearchNotFound";
import { Link } from "react-router-dom";

const Home = () => {

    const [showFilters, setShowFilters] = useState(false);

    const [ countryDetails, isLoading, error, setDetails, setLoading, setError ] = useFetch("https://restcountries.com/v3.1/all");

    const [ currentSearch, setCurrentSearch ] = useState("");
    const [ previousSearch, setPreviousSearch ] = useState("");

    const [ filterLabel, setFilterLabel ] = useState("Filter by region");

    const findSearchResults = (name) => {
        if ( name === "" && previousSearch !== "") {
            fetch("https://restcountries.com/v3.1/all")
                .then(res => {
                    console.log(res);
                    return res.json();
                })
                .then(data => {
                    console.log(data);
                    data.sort((a, b) => {
                        return a.name.common > b.name.common ? 1 : -1
                    })
                    setDetails(data);
                    setLoading(false);
                    setError(null);
                })
                .catch((err) => {
                    console.log(err);
                    setError(err.message);
                    setLoading(false);
                })
        }
        else {
            setPreviousSearch(currentSearch);
            setCurrentSearch(name);
            fetch(`https://restcountries.com/v3.1/name/${name}`)
                .then(res => {
                    if (! res.ok) {
                        throw Error("Could not find such a resource!");
                    }
                    return res.json();
                })
                .then(data => {
                    console.log(data);
                    data.sort((a, b) => {
                        return a.name.common > b.name.common ? 1 : -1
                    })
                    setDetails(data);
                    setLoading(false);
                    setError(null);
                })
                .catch((err) => {
                    console.log(err);
                    setError(err.message);
                    setLoading(false);
                    setDetails(null);
                })
        }
    }

    const findFilterResults = (region) => {
        setShowFilters(false);
        setFilterLabel(region);
        fetch(`https://restcountries.com/v3.1/region/${region}`)
                .then(res => {
                    if (! res.ok) {
                        throw Error("Could not find such a resource!");
                    }
                    return res.json();
                })
                .then(data => {
                    console.log(data);
                    data.sort((a, b) => {
                        return a.name.common > b.name.common ? 1 : -1
                    })
                    setDetails(data);
                    setLoading(false);
                    setError(null);
                })
                .catch((err) => {
                    console.log(err);
                    setError(err.message);
                    setLoading(false);
                    setDetails(null);
                })
    }

    return ( 
        <HomeFlex>
            <SearchBarAndFilter>
                <SearchBar>
                    <i className="fas fa-search"></i><input type="text" onChange={ e => findSearchResults(e.target.value)} placeholder="Search for a country..."/>
                </SearchBar>
                <FilterBox>
                    <Filters onClick={ () => setShowFilters(!showFilters) }>
                        {filterLabel} <i className="fas fa-caret-down"></i>
                    </Filters>
                    { showFilters && <ContinentList>
                        { Continents.map((item, index) => (
                            <li value={item} key={index} onClick={ (e) => findFilterResults(item) } >{ item }</li>
                        )) }
                    </ContinentList> }
                </FilterBox>
            </SearchBarAndFilter>
            <AllCountriesBox>
                { error && <SearchNotFound message={error} /> }
                { isLoading && <img src={loadingGif} alt="loading" width={500} height={500}></img> }
                { countryDetails && countryDetails.map((item, index) => (
                    <Link to={ `/country/${item.name.common}` }>
                        <CountryCard key={index} name={item.name.common} flag={item.flags.png} population={item.population} capital={ item.hasOwnProperty("capital") ? item.capital[0] : "Unknown"} region={item.region} />
                    </Link>
                )) }
            </AllCountriesBox>
        </HomeFlex>
     );
}
 
export default Home;