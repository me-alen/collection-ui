import React, { Component } from 'react';
import "./searchBar.css";

class SearchBar extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
            {/* <h2>Search Button</h2> */}
            {/* <p>Full width:</p> */}
            <form className="example" action="/action_page.php">
                <input type="text" placeholder="Search.." name="search" />
                <button type="submit"><i className="fa fa-search"></i></button>
            </form>
            {/* <p>Centered inside a form with max-width:</p>
            <form className="example secondbar" action="/action_page.php" >
                <input type="text" placeholder="Search.." name="search2" />
                <button type="submit"><i className="fa fa-search"></i></button>
            </form> */}
            </React.Fragment>
                );
            }
}
 
export default SearchBar;