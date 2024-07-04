import ReactPlayer from 'react-player'


export default function VideoPlayer({url}) {
    return (
        <ReactPlayer
            playing
            controls
            mute
            loop
            url={url}
            width='100%'
            height='100%' />
    )
}