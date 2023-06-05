import moment from 'moment/moment';
import 'moment/locale/ko';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function VideoBlock ({item, type}) {
    const publishedAt = moment(item.snippet.publishedAt).fromNow();
    const navigate = useNavigate();
    const isList = type==='list';

    const handleClick = (e) =>{
        e.preventDefault();
        navigate(`/videos/watch/${item.id}`, { state: {item} });
    }

    return(
        <li className={isList ? 'flex gap-1 ml-2 mb-2' : ''}>
            {item && 
                <>
                    <img 
                        className={isList ? 'w-40 mr-2' : 'cursor-pointer w-full'}
                        src={item.snippet.thumbnails.medium.url} 
                        onClick={handleClick}
                        alt={item.snippet.title}
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