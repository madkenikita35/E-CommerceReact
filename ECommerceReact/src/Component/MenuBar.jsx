//
import React, { useRef } from "react";
import { Menu } from "primereact/menu";
import { Badge } from "primereact/badge";
import { Avatar } from "primereact/avatar";
import { Toast } from "primereact/toast";
import { classNames } from "primereact/utils";

const MenuBar = () => {
  const menu = useRef(null);
  const toast = useRef(null);

  const itemRenderer = (item) => (
    <div className="p-menuitem-content bg-amber-200 border-2 border-gray-300 rounded-lg p-2 flex items-center gap-2">
      <a className="flex align-items-center p-menuitem-link">
        <span className={item.icon} />
        <span className="mx-2">{item.label}</span>
        {item.badge && <Badge className="ml-auto" value={item.badge} />}
        {item.shortcut && (
          <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">
            {item.shortcut}
          </span>
        )}
      </a>
    </div>
  );

  const items = [
    {
      label: "Documents",
      items: [
        {
          label: "New",
          icon: "pi pi-plus",
          template: itemRenderer,
        },
        {
          label: "Search",
          icon: "pi pi-search",
          template: itemRenderer,
        },
      ],
    },
    {
      label: "Profile",
      items: [
        {
          label: "Settings",
          icon: "pi pi-cog",
          template: itemRenderer,
        },
        {
          label: "Messages",
          icon: "pi pi-inbox",
          badge: 2,
          template: itemRenderer,
        },
      ],
    },
    {
      separator: true,
    },
    {
      label: "Logout",
      icon: "pi pi-sign-out",
      command: () => {
        toast.current.show({
          severity: "info",
          summary: "Logged Out",
          detail: "You have logged out",
          life: 3000,
        });
      },
    },
  ];

  return (
    <div>
      <Toast ref={toast} />

      <button
        className="bg-orange-500 text-white px-4 py-1 rounded"
        onClick={(e) => menu.current.toggle(e)}
      >
        Menu
      </button>

      <Menu model={items} popup ref={menu} className="shadow-lg rounded-lg" />
    </div>
  );
};

export default MenuBar;
