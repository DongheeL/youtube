import moment from 'moment/moment';
import 'moment/locale/ko';
import React from 'react';

export default function VideoBlock ({item}) {
    const publishedAt = moment(item.snippet.publishedAt).fromNow();

    return(
        <div className='w-10/12  m-auto'>
            <img className='m-auto' src={item.snippet.thumbnails.medium.url}></img>
            <p>{item.snippet.title}</p>
            <p>{publishedAt}</p>
        </div>
    )
}