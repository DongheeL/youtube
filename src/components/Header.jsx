import React, { useState } from 'react';
import SearchBox from './SearchBox';

export default function Header() {
    
    return (
        <div className="flex">
            <button className="flex-none w-32">
                Header
            </button>
            <SearchBox />
            <button className="flex-none w-32">
                DarkMode
            </button>
        </div>
    );
}

