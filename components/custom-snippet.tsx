import { Avatar } from "@nextui-org/avatar";
import { Snippet } from "@nextui-org/snippet";
import { Tooltip } from "@nextui-org/tooltip";
import Link from "next/link";
import { title } from "@/components/primitives";

interface CustomSnippetProps {
  href: string;
  tooltipContent: string;
  avatarSrc: string;
  header: string;
  subtitle: string;
}

const CustomSnippet: React.FC<CustomSnippetProps> = ({
  href,
  tooltipContent,
  avatarSrc,
  header,
  subtitle,
}) => {
  return (
    <Link href={href} target="_blank">
      <Tooltip content={tooltipContent}>
        <Snippet hideCopyButton hideSymbol className="mt-3">
          <div className="flex gap-4 m-2">
            <Avatar size="lg" src={avatarSrc} />
            <div className="flex flex-col justify-center">
              <span className='font-semibold text-base'>{header}</span>
              <span>{subtitle}</span>
            </div>
          </div>
        </Snippet>
      </Tooltip>
    </Link>
  );
};

export default CustomSnippet;
