import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import {IconButton} from "@mui/material";
import {NavLink} from "react-router-dom";


export const NavigationMobile = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton
                color={'inherit'}

                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <MenuIcon/>
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}><NavLink to={'/'} >PORTFOLIO</NavLink></MenuItem>
                <MenuItem onClick={handleClose}><NavLink to={'/aboutMe'} >ABOUT ME</NavLink></MenuItem>
                <MenuItem onClick={handleClose}><NavLink to={'/contacts'} >CONTACT</NavLink></MenuItem>
            </Menu>
        </div>
    );
}

