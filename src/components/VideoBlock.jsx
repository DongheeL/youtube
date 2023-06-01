import moment from 'moment/moment';
import 'moment/locale/ko';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

export default function VideoBlock ({item}) {
    const publishedAt = moment(item.snippet.publishedAt).fromNow();
    const navigate = useNavigate();

    const handleClick = (e) =>{
        e.preventDefault();
        navigate(`/videos/watch/${item.id}`, { state: {item} });
    }

    return(
        <li className=''>
            {item && 
                <>
                    <img 
                        className='cursor-pointer w-full'
                        src={item.snippet.thumbnails.medium.url} 
                        onClick={handleClick}
                    ></img>
                    <div>
                        <p className='font-semibold my-2 line-clamp-2 cursor-pointer h-12' onClick={handleClick} >{item.snippet.title}</p>
                        <p className='text-sm opacity-70'>{item.snippet.channelTitle}</p>
                        <p className='text-sm opacity-70'>{publishedAt}</p>
                    </div>
                </>
            } 
        </li>
    )
}