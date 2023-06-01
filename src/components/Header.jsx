import React, { useEffect, useState } from 'react';
import SearchBox from './SearchBox';
import { GrYoutube } from "react-icons/gr";
import {  Link, useNavigate, useParams } from 'react-router-dom';
import { useDarkMode } from '../context/DarkModeContext';
import { BsToggle2On, BsToggle2Off } from 'react-icons/bs';

export default function Header() {
    const {keyword} = useParams();
    const navigate = useNavigate();
    const [text,setText] = useState('');
    const {darkMode, toggleDarkMode} = useDarkMode();

    useEffect(()=>{
        setText(keyword || '');
    },[keyword])

    const handleChange = (e) =>{
        e.preventDefault();
        setText(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        navigate(`/videos/${text}`);
    }
    
    return (
        <header className="w-full flex p-4 space-x-5">
            <Link to={'/'} className="flex items-center" >
                {/* <div className='flex w-32 items-center p-1'> */}
                    <GrYoutube className='text-4xl text-brand'/>
                    <p className='px-1 font-bold text-2xl'>Youtube</p>
                {/* </div> */}
            </Link>
            <SearchBox 
                
                text={text} 
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
            {/* <button  onClick={toggleDarkMode}> */}
                {/* DarkMode {darkMode.toString()} */}
            <div className='pt-3'>
                {darkMode ? <BsToggle2On className='text-2xl ' onClick={toggleDarkMode} /> : <BsToggle2Off className='text-2xl ' onClick={toggleDarkMode} /> }
            </div>
            {/* </button> */}
        </header>
    );
}

