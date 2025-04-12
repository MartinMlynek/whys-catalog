export interface NavigationItemType {
  name: string;
  link: string;
  subMenuItems?: Omit<NavigationItemType, "subMenuItems">[];
}
