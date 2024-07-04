import { FC, HTMLAttributes } from "react";
import { DataModalProps } from "../types/noticeboards";

export interface MessageDetailProps extends HTMLAttributes<HTMLDivElement> {
  indexMessage?: string;
  detailMessage?: string;
}

export const MessageDetailsData: FC<DataModalProps> = ({
  children,
  indexMessage,
  detailMessage,
  ...props
}) => {
  return (
    <div className={`flex flex-col ${props.className}`} {...props}>
      <span className="font-bold text-sm  text-gray-600 gap-1">{indexMessage}</span>
      <span className="text-base">{children ?? detailMessage}</span>
    </div>
  );
};
