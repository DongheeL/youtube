import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import YouTube from 'react-youtube';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import RelatedVideos from './RelatedVideos';

export default function VideoDetail() {
    const {videoId} = useParams();
    const {state: {item}} = useLocation();

    return (
        // <div className='lg:flex '>
        <div className='lg:flex p-4'>
            <section className='lg:flex-1'>
                <iframe id="player" type="text/html" width="100%" height="640"
                    src={`http://www.youtube.com/embed/${item.id}`}
                    frameBorder="0"/>
                <div className='w-full'>
                    
                </div>
            </section>
            <section>
                <RelatedVideos video={item} />
            </section>
        </div>
        //     <ul className=' py-1 lg:py-0 lg:w-96 lg:px-1'>
        //         {relatedVideos && relatedVideos.map(video => <RelatedVideo key={video.id} item={video} />)}    
        //     </ul>
        // </div>
    );
}

