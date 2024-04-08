import { Channel } from "@prisma/client";
import { SocialIcon } from "react-social-icons";

const SocialMediaIcon = ({ channel }: { channel: Channel }) => {
  return <SocialIcon as="div" url={channel.name.toLocaleLowerCase()} />;
};

export default SocialMediaIcon;
