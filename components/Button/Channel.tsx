import { Button } from "../ui/button";
import SocialMediaIcon from "../Icon/SocialMediaIcon";
import { Channel } from "@prisma/client";

const ChannelButton = ({ channel }: { channel: Channel }) => {
  return (
    <Button asChild variant={"ghost"} className="flex-col size-fit">
      <a href={channel.url}>
        <SocialMediaIcon channel={channel} />
        <p>{channel.name}</p>
      </a>
    </Button>
  );
};

export default ChannelButton;
