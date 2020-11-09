import SearchBox from "../SearchBox"
import "../styles/Nav.css"

function Navbar({ handleSearchChange }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
             <div className="collapse navbar-collapse" id="navbarSupportedContent">
                 <SearchBox handleSearchChange={handleSearchChange}></SearchBox>
             </div>
        </nav>
    );
}

export default Navbar;