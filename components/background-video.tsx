const Video = () => {
  return (
    <video
      autoPlay
      loop
      className="w-full h-full object-cover fixed top-0 left-0"
      preload="none"
    >
      <source
        src="https://cloud.sayato.lol/0:/SMT%203/drake.mp4"
        type="video/mp4"
      />
      <track default kind="captions" />
      Your browser does not support the video tag.
    </video>
  );
};

export { Video };
