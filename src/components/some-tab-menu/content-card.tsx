import React from "react";

const ContentCard = ({ children }: { children: React.ReactNode }) => {
  return <div className="h-max p-8 w-full">{children}</div>;
};

export default ContentCard;
