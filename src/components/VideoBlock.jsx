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
        navigate(`/videos/watch/${item.id}`);
    }

    const {
        isLoading, 
        error, 
        data: channelInfo
    } = useQuery(['channelInfo', item.snippet.channelId ], async () =>{
        return fetch(`/videos/channel.json`)
        .then((res) => res.json())
        .then(data => data.items[0]);
    })


    return(
        <div className='list-none w-80 p-5px'>
            {item && 
                <>
                    <img 
                        src={item.snippet.thumbnails.medium.url} 
                        onClick={handleClick}
                    ></img>
                    <div className='flex h-16 w-80 m-auto '>
                        <div className='w-1/6'>
                            {channelInfo && 
                                <>
                                    <img 
                                        className=' rounded-full'
                                        src={channelInfo.snippet.thumbnails.default.url} 
                                    />
                                </>
                            }
                        </div>
                        <div className='w-3/4 m-auto'>
                            <p className='h-8 text-lg font-semibold text-ellipsis overflow-hidden whitespace-nowrap' onClick={handleClick} >{item.snippet.title}</p>
                            <p>{channelInfo.snippet.title}</p>
                            <p className='text-sm'>{publishedAt}</p>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}