import React from "react";

type IconComponent = React.FC<{ size?: number; className?: string }>;

interface FooterInterface {
  name: string;
  link: string;
  icon: IconComponent;
}
export default FooterInterface;
