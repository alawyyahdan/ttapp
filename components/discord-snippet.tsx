import { use } from "react";

import CustomSnippet from "./custom-snippet";

import { DiscordUser } from "@/types";

async function fetchDiscordUser(): Promise<DiscordUser> {
  const res = await fetch(
    "https://discordlookup.mesalytic.moe/v1/user/271251138161016834",
    { next: { revalidate: 3600 } },
  );

  return res.json();
}

const DiscordSnippet = () => {
  const userData = use(fetchDiscordUser());

  return (
    <CustomSnippet
      avatarSrc={userData.avatar.link}
      header={userData.username}
      href={"https://discord.com/users/" + userData.id}
      subtitle="life is roblox"
      tooltipContent="discord"
    />
  );
};

export default DiscordSnippet;
