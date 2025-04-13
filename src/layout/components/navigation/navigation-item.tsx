import { Menu, MenuItem } from "@mui/material";
import { FC, memo, MouseEvent, useCallback, useMemo, useState } from "react";
import { NavigationItemType } from "../../types/navigation-item-type";
import { ToType } from "types/to-type";
import { PropsWithMandatoryChildren } from "types/props-with-mandatory-children";
import { ButtonLink } from "ui/components/button-link";

interface Props extends PropsWithMandatoryChildren {
  menuItems?: Omit<NavigationItemType, "subMenuItems">[];
  to: ToType;
}

const NavigationItemBase: FC<Props> = ({ children, menuItems, to }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = useMemo(() => Boolean(anchorEl), [anchorEl]);

  const handleClick = useCallback((event: MouseEvent<HTMLAnchorElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  return (
    <div>
      <ButtonLink
        to={to}
        sx={{ my: 2, color: "white", display: "block" }}
        onClick={handleClick}
        activeProps={menuItems ? undefined : { sx: { color: "primary.main" } }}
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        {children}
      </ButtonLink>
      {menuItems ? (
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          {menuItems.map((item) => (
            <MenuItem key={item.label} onClick={handleClose}>
              <ButtonLink
                to={item.to}
                sx={{ my: 2, color: "white" }}
                activeProps={{ sx: { color: "primary.main" } }}
              >
                {item.label}
              </ButtonLink>
            </MenuItem>
          ))}
        </Menu>
      ) : undefined}
    </div>
  );
};

export const NavigationItem = memo(NavigationItemBase);
