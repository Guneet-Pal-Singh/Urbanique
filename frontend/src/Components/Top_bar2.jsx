import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Top_bar.css';

function TopBar() {
    useEffect(() => {
        // Scroll to the top of the page when component mounts
        window.scrollTo(0, 0);
    }, []);

    return (
        <Link to="/" className="top-bar w-full bg-white border-b-2 z-10 sticky h-16 sm:h-16 flex items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
            <h1 className="font-bold text-center">Urbanique</h1>

            <div className="ml-2 mt-2 lg:block">
                {/* Add your additional content here */}
            </div>
        </Link>
    );
}

export default TopBar;
