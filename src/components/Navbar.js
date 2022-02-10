import { MainNav } from "./styled/Navbar.styled";

const Navbar = ({ theme, themeToggler }) => {
    return ( 
        <MainNav>
            <h1 className="nav-header">
                Where in the world?
            </h1>
            <div className="theme-selector" onClick={ themeToggler }>
                { theme == "light" ?  <p className="light-mode">
                    <i className="fas fa-sun"></i> Light mode
                </p> : <p className="dark-mode">
                    <i className="fas fa-moon"></i> Dark mode
                </p> }
            </div>
        </MainNav>
     );
}
 
export default Navbar;