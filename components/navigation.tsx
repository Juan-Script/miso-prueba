import React from "react";
import { Menubar } from "primereact/menubar";
import { MenuItem } from "primereact/menuitem";
import Link from "next/link";

interface NavigationProps {
  activeRoute: string;
}

const Navigation: React.FC<NavigationProps> = ({ activeRoute }) => {
  const items: MenuItem[] = [
    {
      label: "Inicio",
      icon: "pi pi-home",
      url: "/",
    },
    {
      label: "Nosotros",
      icon: "pi pi-info",
      url: "/nosotros",
    },
    {
      label: "Productos",
      icon: "pi pi-box",
      url: "/productos",
    },
    {
      label: "Perfil",
      icon: "pi pi-user",
      url: "/perfil",
    },
  ];

  return <Menubar model={items} />;
};

export default Navigation;
