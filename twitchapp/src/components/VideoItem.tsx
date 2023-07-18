interface Props {
  title: string;
  thumbnail: string;
  userlogin: string;
  username: string;
  tags: string[];
  viewercount: number;
}

const VideoItem = (props: Props) => {
  const { thumbnail, title, userlogin, username, tags, viewercount } = props;

  return (
    <div>
      <div className="relative">
        <img
          src={thumbnail.replace('{width}', '440').replace('{height}', '248')}
          alt={title}
        />
        <div className="absolute m-[5px] bottom-0 left-0 inline-block p-[1px_4px] rounded-[2px] text-[13px] text-[#fff] bg-[#00000099]">
          {viewercount}
          {viewercount > 9999 ? '만회' : '회'} 시청{' '}
        </div>
      </div>
      <div className="truncate text-[14px]">{title}</div>
      <div className="truncate text-[13px]">
        {username} ({userlogin})
      </div>
      <div className="truncate mt-[5px] mb-[10px]">
        {tags &&
          tags.map((i, index) => {
            return (
              <div
                key={`tag_${index}`}
                className="font-[600] inline-block border-[0] bg-[#0000000D] rounded-[50px] px-[10px] py-[2px] text-[12px]"
              >
                {i}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default VideoItem;
