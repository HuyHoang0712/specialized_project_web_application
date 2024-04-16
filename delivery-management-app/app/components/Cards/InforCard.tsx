"use client";
import { Skeleton } from "@mui/material";
const CONTENT_TITLE_CLASS = "flex items-center gap-1 text-sm text-black-40";
const CONTENT_CLASS =
  "text-black-100 shadow-sm bg-primary-10/50 w-full rounded-lg cursor-pointer px-3 py-2 truncate";
const ICON_CLASS = "w-4 text-black-40";

interface InfoItemProps {
  Icon: React.FC<any>;
  title: string;
  content: any;
  styles?: string;
}

const InforCard = ({ Icon, title, content, styles }: InfoItemProps) => (
  <div className={`space-y-1 ${styles}`}>
    <div className={CONTENT_TITLE_CLASS}>
      <Icon className={ICON_CLASS} />
      {title}
    </div>
    <div className={CONTENT_CLASS}>{content}</div>
  </div>
);

export default InforCard;

export const InforCardSkeleton = ({ styles }: { styles?: string }) => {
  return (
    <div className={`space-y-1 ${styles}`}>
      <div className={CONTENT_TITLE_CLASS}>
        <Skeleton variant="circular" width={20} height={20} />
        <Skeleton variant="text" width={100} />
      </div>
      <div className={CONTENT_CLASS}>
        <Skeleton variant="text" width={"100%"} />
      </div>
    </div>
  );
};
