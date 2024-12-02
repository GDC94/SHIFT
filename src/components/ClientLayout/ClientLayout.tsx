import React from "react";

export interface ClientLayoutProps {
  children?: React.ReactNode;
}

const ClientLayout = ({ children }: ClientLayoutProps) => {
  return <div className="bg-white">{children}</div>;
};

export default ClientLayout;
