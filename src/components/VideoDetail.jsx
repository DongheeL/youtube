import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube';

export default function VideoDetail() {
    const {videoId} = useParams();

    // const {
    //     isLoading, 
    //     error, 
    //     data: channelInfo
    // } = useQuery(['channelInfo', item.snippet.channelId ], async () =>{
    //     return fetch(`/videos/channel.json`)
    //     .then((res) => res.json())
    //     .then(data => data.items);
    // })

    return (
        <div className='w-10/12  m-auto'>
            <div>
                VideoDetail
            </div>
            <YouTube
                videoId={videoId}                  // defaults -> ''
                // className={string}                // defaults -> ''
                // iframeClassName={string}          // defaults -> ''
                // title={string}                    // defaults -> ''
                // loading={string}                  // defaults -> undefined
                // opts={obj}                        // defaults -> {}
                // onReady={func}                    // defaults -> noop
            />
        </div>
    );
}

