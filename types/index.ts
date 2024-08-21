import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

// Types for avatar and banner
type ImageAsset = {
  id: string;
  link: string;
  is_animated: boolean;
};

// Type for avatar decoration
type AvatarDecoration = {
  asset: string;
  sku_id: string;
  expires_at: string | null;
};

// Enum for badges
enum Badge {
  HOUSE_BALANCE = "HOUSE_BALANCE",
  ACTIVE_DEVELOPER = "ACTIVE_DEVELOPER",
}

// Main user type
export type DiscordUser = {
  id: string;
  created_at: string;
  username: string;
  avatar: ImageAsset;
  avatar_decoration: AvatarDecoration;
  badges: Badge[];
  accent_color: number;
  global_name: string;
  banner: ImageAsset & {
    color: string;
  };
  raw: {
    id: string;
    username: string;
    avatar: string;
    discriminator: string;
    public_flags: number;
    flags: number;
    banner: string;
    accent_color: number;
    global_name: string;
    avatar_decoration_data: AvatarDecoration;
    banner_color: string;
    clan: null;
  };
};
