import { ToType } from "../../types/to-type";

export interface NavigationLinkItem {
  label: string;
  to: ToType;
  subMenuItems?: undefined;
}
export type SubMenuItemType = NavigationLinkItem;

export interface NavigationMenuItem {
  label: string;
  to?: undefined;
  subMenuItems: SubMenuItemType[];
}

export type NavigationItemType = NavigationLinkItem | NavigationMenuItem;
