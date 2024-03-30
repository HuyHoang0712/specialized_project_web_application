"use client";
import { Skeleton } from "@mui/material";
interface InfoItemProps {
  Icon: React.FC<any>;
  title: string;
  content: string;
  styles?: string;
}
const InfoItem = ({ Icon, title, content, styles }: InfoItemProps) => (
  <div className={"space-y-1" + " " + (styles ? styles : "col-span-2")}>
    <div className="flex items-center gap-1 text-sm text-black-40">
      <Icon className="w-4 text-black-40" />
      {title}
    </div>
    <div className="text-black-100 shadow-sm shadow-inner border border-primary-10 w-full rounded-lg cursor-pointer px-3 py-2 truncate">
      {content}
    </div>
  </div>
);
export const InforItemSkeleton = ({ styles }: { styles?: string }) => {
  return (
    <div className={"space-y-1 " + (styles ? styles : "col-span-2")}>
      <div className="flex items-center gap-1 text-sm text-black-40">
        <Skeleton variant="circular" width={20} height={20} />
        <Skeleton variant="text" width={100} />
      </div>
      <div className="text-black-100 shadow-sm shadow-inner border border-primary-10 w-full rounded-lg cursor-pointer px-3 py-2 truncate">
        <Skeleton variant="text" width={"100%"} />
      </div>
    </div>
  );
};
export default InfoItem;
