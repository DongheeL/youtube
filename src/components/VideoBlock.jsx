import React from 'react';

export default function VideoBlock ({item}) {

    return(
        <div className='w-64'>
            <img src={item.snippet.thumbnails.default.url}></img>
            {item.snippet.title}
        </div>
    )
}