import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams} from 'react-router-dom';
import VideoBlock from './VideoBlock';
import { useYoutubeApi } from '../context/YoutubeApiContext';

export default function Videos() {
    const {keyword} = useParams();
    const {youtube} = useYoutubeApi();

    const {
        isLoading, 
        error, 
        data: videoList
    } = useQuery(['videoList', keyword ], ()=>youtube.search(keyword), {
        staleTime:1000*60*1,
    })

    return (
        <div className='px-1'>
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

