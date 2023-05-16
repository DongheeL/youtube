import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { IoIosSearch } from "react-icons/io";

export default function SearchBox({ text ,handleChange ,handleSubmit}) {

    return (
        <div className='flex-auto w-64 items-center p-1'>
            <div className='flex w-full'>
                <form className="flex-auto align-middle border rounded-l-3xl p-2 pl-4" onSubmit={handleSubmit}>
                    <input
                        value={text}
                        onChange={handleChange}
                        placeholder='검색'
                    />
                </form>
                <button className='w-16 border rounded-r-3xl p-1 pl-5 border-l-0' onClick={handleSubmit}>
                    <IconContext.Provider value={{ className:'text-3xl mr-0' }}>
                        <IoIosSearch />
                    </IconContext.Provider>
                </button>
            </div>
        </div>
    );
}

