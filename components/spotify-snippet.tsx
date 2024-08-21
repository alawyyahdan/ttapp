import { use } from "react";

import CustomSnippet from "./custom-snippet";

async function fetchSpotifyData(): Promise<any> {
  const res = await fetch(`${process.env.BASE_URL}/api/spotify`, {
    next: { revalidate: 1 },
  });

  return res.json();
}

const SpotifySnippet = () => {
  const data = use(fetchSpotifyData());

  if (data.isPlaying === false) {
    return null;
  } else {
    return (
      <CustomSnippet
        avatarSrc={data.albumImageUrl}
        href={data.songUrl}
        subtitle={data.artist}
        header={data.title}
        tooltipContent="Now Playing"
      />
    );
  }
};

export default SpotifySnippet;
