import React, { PropsWithChildren } from "react";

export const Section = ({
  title,
  icon,
  children,
}: PropsWithChildren<{ title: string; icon: React.ReactNode }>) => {
  return (
    <div className="mt-5">
      <div className="flex items-center gap-2.5 mb-2">
        {icon}
        <span className="text-base font-semibold text-gray-600">{title}</span>
      </div>

      {children}
    </div>
  );
};
