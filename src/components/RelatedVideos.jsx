import moment from 'moment';
import React from 'react';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import { useQuery } from '@tanstack/react-query';

export default function RelatedVideos({video}) {
    const {youtube} = useYoutubeApi();
    const {
        isLoading, 
        error, 
        data: relatedVideos
    } = useQuery(['relatedVideos', video.id ], ()=>{
        return youtube.related(video.id);
    })

    return (
        <>
            {relatedVideos && 
                <ul className=' py-1 lg:py-0 lg:w-80 lg:px-1'>
                    {relatedVideos.map((item)=>
                        <li className='flex py-1 lg:pb-1 lg:py-0'>
                            <img className='cursor-pointer' src={item.snippet.thumbnails.default.url} />
                            <div className='px-1'>
                                <p className='cursor-pointer font-semibold my-2 line-clamp-2'>{item.snippet.title}</p>
                                <p className='text-sm opacity-70'>{item.snippet.channelTitle}</p>
                                <p className='text-sm opacity-70'>{moment(item.snippet.publishedAt).fromNow()}</p>
                            </div>
                        </li>
                    )}
                </ul>
            }
        </>
    );
}

