import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import VideoBlock from './VideoBlock';
import Youtube, { search } from '../api/youtube';
import FakeYoutube from '../api/fakeYoutubeClient';
import { useYoutubeApi } from '../context/YoutubeApiContext';

export default function Videos() {
    const {keyword} = useParams();
    const {youtube} = useYoutubeApi();

    const {
        isLoading, 
        error, 
        data: videoList
    } = useQuery(['videoList', keyword ], ()=>{
        return youtube.search(keyword);
    })

    return (
        <div className='relative w-full h-full justify-start mt-4'>
            {isLoading && <p>Loading...</p>}
            {error && <p>Something is wrong </p>}
            {videoList && 
                <ul className='grid grid-cols-auto justify-center gap-4'>
                    {videoList.map(video => <VideoBlock key={video.id} item={video} />)}    
                </ul>
            }
        </div>
    );
}

