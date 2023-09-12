import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdHome,
} from "react-icons/md";
import {
  IoIosCellular
} from "react-icons/io"

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";

const routes = [
  {
    name: "Inicio",
    layout: "/admin",
    path: "/nft-marketplace",
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: NFTMarketplace,
  },
  {
    name: "Asesorías",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={IoIosCellular} width="20px" height="20px" color="inherit" />,
    component: MainDashboard,
    secondary: true,
  },
  // {
  //   name: "Rutas",
  //   layout: "/admin",
  //   path: "/default",
  //   icon: <Icon as= {IoIosCellular} width="20px" height="20px" color="inherit" />,
  //   component: MainDashboard,
  //   secondary: true,
  // },
  // {
  //   name: "Iniciar Sesión",
  //   layout: "/auth",
  //   path: "/sign-in",
  //   icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
  //   component: SignInCentered,
  // },
];

export default routes;
