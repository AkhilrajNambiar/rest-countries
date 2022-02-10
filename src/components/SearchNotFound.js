import notFound from "../images/notFound.gif";
import { BadSearch } from "./styled/Global";

const SearchNotFound = (props) => {
    const message = props.message;
    return ( 
        <BadSearch>
            <img src={notFound} width={300} height={300}></img>
            <div>{ message }</div>
        </BadSearch>
     );
}
 
export default SearchNotFound;