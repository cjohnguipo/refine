import React, { useState } from "react";
import { useGetIdentity, useActiveAuthProvider } from "@refinedev/core";
import { Box } from "@mui/material";

import { ThemedSider as DefaultSider } from "./sider";
import { ThemedHeader as DefaultHeader } from "./header";
import { RefineThemedLayoutProps } from "./types";

export const ThemedLayout: React.FC<RefineThemedLayoutProps> = ({
    Sider,
    Header,
    Title,
    Footer,
    OffLayoutArea,
    children,
}) => {
    const authProvider = useActiveAuthProvider();
    const { data: user } = useGetIdentity({
        v3LegacyAuthProviderCompatible: Boolean(authProvider?.isLegacy),
    });

    const [isDrawerOpen, setIsDrawerOpen] = useState(true);

    const SiderToRender = Sider ?? DefaultSider;
    const HeaderToRender = Header ?? DefaultHeader;

    const shouldRenderHeader = user && (user.name || user.avatar);

    return (
        <Box display="flex" flexDirection="row">
            <SiderToRender
                Title={Title}
                hasHeader={shouldRenderHeader}
                isDrawerOpen={isDrawerOpen}
                onCollapseClick={(collapse) => setIsDrawerOpen(!!collapse)}
            />
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                    minHeight: "100vh",
                }}
            >
                {shouldRenderHeader && (
                    <HeaderToRender
                        user={user}
                        isDrawerOpen={isDrawerOpen}
                        onMenuClick={() => setIsDrawerOpen(true)}
                    />
                )}
                <Box
                    component="main"
                    sx={{
                        p: { xs: 1, md: 2, lg: 3 },
                        flexGrow: 1,
                        bgcolor: (theme) => theme.palette.background.default,
                    }}
                >
                    {children}
                </Box>
                {Footer && <Footer />}
            </Box>
            {OffLayoutArea && <OffLayoutArea />}
        </Box>
    );
};
