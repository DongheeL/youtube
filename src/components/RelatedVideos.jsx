import React from 'react';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import { useQuery } from '@tanstack/react-query';
import VideoBlock from './VideoBlock';

export default function RelatedVideos({video}) {
    const {youtube} = useYoutubeApi();

    const {
        data: relatedVideos
    } = useQuery(['relatedVideos', video.id ], ()=> youtube.related(video.id), {
        staleTime: 1000*60*5,
    })

    return (
        <>
            {relatedVideos && 
                <ul className=' py-1 lg:py-0 lg:w-80 lg:px-1'>
                    {relatedVideos.map((item)=>
                        <VideoBlock key={item.id} item={item} type='list'/>
                    )}
                </ul>
            }
        </>
    );
}

