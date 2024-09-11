import { use } from "react";

import CustomSnippet from "./custom-snippet";

import { FetchNowPlaying } from "@/action/spotify";

async function fetchSpotifyData(): Promise<any> {
  const data = await FetchNowPlaying();

  return data;
}

const SpotifySnippet = () => {
  const data = use(fetchSpotifyData());

  if (data.isPlaying === false) {
    return null;
  } else {
    return (
      <CustomSnippet
        avatarSrc={data.albumImageUrl}
        header={data.title}
        href={data.songUrl}
        subtitle={data.artist}
        tooltipContent="what i playing on Spotify now"
      />
    );
  }
};

export default SpotifySnippet;
