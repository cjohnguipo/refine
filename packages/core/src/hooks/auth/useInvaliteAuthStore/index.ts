import { useQueryClient } from "@tanstack/react-query";

export const useInvalidateAuthStore = () => {
    const queryClient = useQueryClient();

    const invalidate = async () => {
        await queryClient.invalidateQueries(["useAuthenticated"]);
        await queryClient.invalidateQueries(["getUserIdentity"]);
        await queryClient.invalidateQueries(["usePermissions"]);
    };

    return invalidate;
};
