import React from "react";
import { Link } from "react-router-dom";

function App() {

    return (
        <>
            <div id="sidebar">
                <h1>React Router Contacts</h1>
                <div>
                    <form id="search-form" role="search">
                        <input
                            id="q"
                            aria-label="Search contacts"
                            placeholder="Search"
                            type="search"
                            name="q"
                        />
                        <div
                            id="search-spinner"
                            aria-hidden
                            hidden={true}
                        />
                        <div
                            className="sr-only"
                            aria-live="polite"
                        ></div>
                    </form>
                    <form method="post">
                        <button type="submit">New</button>
                    </form>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to='/contacts/'>Contacts</Link>
                        </li>
                        <li>
                            <Link to='/design/'>Design</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div id="detail"></div>
        </>
    )
}
export default App;