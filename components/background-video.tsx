const Video = () => {
  return (
    <video
      autoPlay
      loop
      className="w-full h-full object-cover fixed top-0 left-0"
      preload="none"
    >
      <source
        src="https://shiverize.me/ebaf95c8-b543-46a2-9d0d-1933f919abd1.mp4"
        type="video/mp4"
      />
      <track default kind="captions" />
      Your browser does not support the video tag.
    </video>
  );
};

export { Video };
