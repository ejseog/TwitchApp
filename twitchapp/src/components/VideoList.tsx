import React, { useEffect, useState } from 'react';
import VideoItem from './VideoItem';

interface VideoDataProps {
  game_name: string;
  thumbnail_url: string;
  title: string;
  user_login: string;
  user_name: string;
  tags: string[];
  viewer_count: number;
}

const VideoList = () => {
  const [video, setVideo] = useState<VideoDataProps[]>([]);
  const test2 = '';

  useEffect(() => {
    // api
    fetch('https://api.twitch.tv/helix/streams?first=100', {
      method: 'get',
      headers: new Headers({
        'Content-Type': 'application/json', // 이게 있어야 우리가 자주 접하는 형식으로 받을 수 있음
        Authorization: 'Bearer ttn7g1o2jbzranhv7ft4aq7ftztw2x',
        'client-id': 'g85amf66exi7ms0xuo1k7ziyga00k1',
      }),
    })
      // TODO : 하던대로 .then 하나로 합쳐서 데이터 까기!
      .then(response => response.json())
      .then(res => {
        setVideo(res.data);
      })
      .catch(error => console.error('Error: ', error));
  }, []);

  return (
    <div className="grid grid-cols-6">
      {video.map((v, index) => {
        return (
          <VideoItem
            key={`video_${index}`}
            title={v.title}
            thumbnail={v.thumbnail_url}
            userlogin={v.user_login}
            username={v.user_name}
            tags={v.tags}
            viewercount={v.viewer_count}
          />
        );
      })}
    </div>
  );
};

export default VideoList;
