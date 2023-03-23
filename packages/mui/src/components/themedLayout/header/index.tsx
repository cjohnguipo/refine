import React from "react";
import {
    AppBar,
    Stack,
    Toolbar,
    Typography,
    Avatar,
    IconButton,
} from "@mui/material";
import { Menu } from "@mui/icons-material";

import { RefineThemedLayoutHeaderProps } from "../types";

export const ThemedHeader: React.FC<RefineThemedLayoutHeaderProps> = ({
    user,
    isDrawerOpen,
    onMenuClick,
}) => {
    const hasMenu = Boolean(onMenuClick);

    return (
        <AppBar position="sticky">
            <Toolbar>
                {hasMenu && (
                    <IconButton
                        aria-label="open drawer"
                        onClick={onMenuClick}
                        edge="start"
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "block" },
                            ...(isDrawerOpen && { display: "none" }),
                        }}
                    >
                        <Menu />
                    </IconButton>
                )}
                <Stack
                    direction="row"
                    width="100%"
                    justifyContent="flex-end"
                    alignItems="center"
                >
                    <Stack
                        direction="row"
                        gap="16px"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Typography variant="subtitle2">
                            {user?.name}
                        </Typography>
                        <Avatar src={user?.avatar} alt={user?.name} />
                    </Stack>
                </Stack>
            </Toolbar>
        </AppBar>
    );
};
