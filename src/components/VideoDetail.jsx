import React from 'react';
import { useLocation} from 'react-router-dom';
import RelatedVideos from './RelatedVideos';
import ChannelInfo from './ChannelInfo';

export default function VideoDetail() {
    const {state: {item}} = useLocation();
    const { title, channelId, channelTitle, description } = item.snippet;
    console.log(item.snippet)

    return (
        // <div className='lg:flex '>
        <div className='lg:flex p-4'>
            <section className='lg:flex-1'>
                <iframe id="player" type="text/html" width="100%" height="640"
                    src={`http://www.youtube.com/embed/${item.id}`}
                    frameBorder="0"
                    title={title}/>
                <div className='p-8'>
                    <h2 className='text-xl fonbol'>{title}</h2>
                    <ChannelInfo id={channelId} name={channelTitle} />
                    <pre className='whitespace-pre-wrap'>{description}</pre>
                </div>
            </section>
            <section>
                <RelatedVideos video={item}/>
            </section>
        </div>
    );
}

