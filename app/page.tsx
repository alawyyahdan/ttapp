import { Avatar } from "@nextui-org/avatar";

import { title } from "@/components/primitives";
import DiscordSnippet from "@/components/discord-snippet";
import SpotifySnippet from "@/components/spotify-snippet";

export default function Home() {
  return (
    <section className="h-[100%] flex flex-col items-center justify-center py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <Avatar
          className="w-20 h-20 text-large mx-auto"
          src="https://shiverize.me/ab67616d0000b2737443f73838a36bc8ce566113.jfif"
        />
        <h1
          className={title({
            size: "sm",
            class: "animate-[pulse_2s_cubic-bezier(.4,0,.6,1)_infinite]",
          })}
        >
          tana
        </h1>
      </div>

      <DiscordSnippet />
      <SpotifySnippet />
    </section>
  );
}
