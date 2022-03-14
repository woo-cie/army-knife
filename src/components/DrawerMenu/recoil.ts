import { atom, useRecoilValue, useRecoilCallback } from "recoil";

const drawerOpen = atom({ key: "DrawerMenu/open", default: false });

export const useDrawerMenu = () => {
  const drawerIsOpen = useRecoilValue(drawerOpen);
  const openDrawer = useRecoilCallback(({ set }) => () => {
    set(drawerOpen, true);
  });
  const closeDrawer = useRecoilCallback(({ set }) => () => {
    set(drawerOpen, false);
  });
  return { drawerIsOpen, openDrawer, closeDrawer };
};
// REST クライアント
