import { Button, Menu, MenuItem } from "@mui/material";
import { FC, memo, MouseEvent, useCallback, useMemo, useState } from "react";
import { PropsWithMandatoryChildren } from "../../types/props-with-children";
import { NavigationItemType } from "../types/navigation-item-type";

interface Props extends PropsWithMandatoryChildren {
  menuItems?: Omit<NavigationItemType, "subMenuItems">[];
}

const NavigationItemBase: FC<Props> = ({ children, menuItems }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = useMemo(() => Boolean(anchorEl), [anchorEl]);

  const handleClick = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  return (
    <div>
      <Button
        sx={{ my: 2, color: "white", display: "block" }}
        onClick={handleClick}
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        {children}
      </Button>
      {menuItems ? (
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          {menuItems.map((item) => (
            <MenuItem key={item.name} onClick={handleClose}>
              {item.name}
            </MenuItem>
          ))}
        </Menu>
      ) : undefined}
    </div>
  );
};

export const NavigationItem = memo(NavigationItemBase);
