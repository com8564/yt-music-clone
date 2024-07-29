import React from "react";
import Logo from "./elements/Logo";
import Navigator from "./elements/Navigator";

const Sidebar = ({ children }) => {
  return (
    <divc className="flex flex-roe h-full">
      <nav className="w-[240px] border-r-[1px] border-neutral-600">
        <div className="p-[24px]">
          <Logo />
        </div>
        <div>
          <Navigator />
        </div>
      </nav>
      <div className="flex-1">{children}</div>
    </divc>
  );
};

export default Sidebar;
