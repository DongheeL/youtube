import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import VideoBlock from './VideoBlock';

export default function Videos() {
    const {keyword} = useParams();

    const {
        isLoading, 
        error, 
        data: videoList
    } = useQuery(['videoList', keyword ], async () =>{
        return fetch(`/videos/${keyword? 'search':'popular'}.json`)
        .then((res) => res.json())
        .then(data => data.items);
    })

    return (
        <>
            <div> Videos {keyword}</div>
            {isLoading && <p>Loading...</p>}
            {error && <p>Something is wrong</p>}
            {/* {videoList && <ul className='grid '>
                {videoList.map(video => <VideoBlock item={video} />)}    
            </ul>} */}
        </>
    );
}

