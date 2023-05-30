import moment from 'moment';
import React from 'react';

export default function RelatedVideo({item}) {
    return (
        <li className='flex py-1 lg:pb-1 lg:py-0'>
            <img className='cursor-pointer' src={item.snippet.thumbnails.default.url} />
            <div className='px-1'>
                <p className='cursor-pointer font-semibold my-2 line-clamp-2'>{item.snippet.title}</p>
                <p className='text-sm opacity-70'>{item.snippet.channelTitle}</p>
                <p className='text-sm opacity-70'>{moment(item.snippet.publishedAt).fromNow()}</p>
            </div>
            
        </li>
    );
}

