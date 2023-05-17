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
            {isLoading && <p>Loading...</p>}
            {error && <p>Something is wrong</p>}
            {videoList && <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0  '>
                {videoList.map(video => <VideoBlock key={video.id} item={video} />)}    
            </div>}
        </>
    );
}

