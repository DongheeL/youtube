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
        <div className='px-1'>
        {/* // <div className='relative w-full h-full justify-start mt-4'>  */}
            {isLoading && <p>Loading...</p>}
            {error && <p>Something is wrong </p>}
            {videoList && 
                <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4 px-4'>
                    {videoList.map(video => <VideoBlock key={video.id} item={video} />)}    
                </ul>
            }
        </div>
    );
}

