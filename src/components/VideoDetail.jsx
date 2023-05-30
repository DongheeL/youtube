import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import YouTube from 'react-youtube';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import RelatedVideo from './RelatedVideo';

export default function VideoDetail() {
    const {videoId} = useParams();
    const {state: {item}} = useLocation();
    const {youtube} = useYoutubeApi();

    const {
        isLoading, 
        error, 
        data: relatedVideos
    } = useQuery(['relatedVideos', videoId ], ()=>{
        return youtube.related(videoId);
    })

    return (
        // <div className='lg:flex '>
            <section className=''>
                <iframe id="player" type="text/html" width="100%" height="640"
                    src={`http://www.youtube.com/embed/${item.id}`}
                    frameBorder="0"/>
            </section>
        //     <ul className=' py-1 lg:py-0 lg:w-96 lg:px-1'>
        //         {relatedVideos && relatedVideos.map(video => <RelatedVideo key={video.id} item={video} />)}    
        //     </ul>
        // </div>
    );
}

