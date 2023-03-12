/**
 * @author aliemir
 *
 * In the current internal structure, sometimes we pass params and args from one function to another,
 * like in case of `check` (formerly `checkAuth`) function, we pass the reject value to `useLogout` hook,
 * which handles the redirect after logout.
 *
 * These actions should be separated,
 *
 * Apps can exist with an optional auth,
 * or do not redirect after logout,
 * or do the redirect but not log out,
 * or do the redirect to a different page than `/login`.
 *
 * To cover all those cases, we should return more information from auth functions.
 *
 * Let's say, they should always resolve, even if user is not authenticated,
 * but have the proper information to handle the situation.
 *
 * like `authenticated: false`, `redirect: '/login'` and `logout: true`
 * which will inform refine that user is not authenticated and should be redirected to `/login` and logout.
 * In some cases, redirect might need to be transferred to other hooks (like `useLogout` hook),
 * but these cases can be handled internally.
 *
 * If the response from `check` is `{ authenticated: false, logout: false, redirect: "/not-authenticated" }`,
 * then the user will be redirected to `/not-authenticated` without logging out.
 *
 * If the response from `check` is `{ authenticated: false, logout: true, redirect: false }`,
 * then the user will be logged out without redirecting.
 *
 * Same goes for `onError` function, it should always resolve.
 */

export type CheckResponse = {
    authenticated: boolean;
    redirectTo?: string;
    logout?: boolean;
    error?: Error;
};

export type OnErrorResponse = {
    redirectTo?: string;
    logout?: boolean;
    error?: Error;
};

export type AuthActionResponse =
    | {
          success: true;
          redirectTo?: string;
      }
    | { success: false; error: Error };

export type LogoutResponse =
    | {
          success: true;
          redirectTo: string;
      }
    | { success: false; error: Error };

export type PermissionsResponse = unknown;

export type IdentityResponse = unknown;

type UnknownObject = Record<string, unknown>;

type IAuthBindingParams = {
    Login: any;
    Logout: any;
    Check: any;
    Register: any;
    ForgotPassword: any;
    Permissions: any;
    Identity: any;
    UpdatePassword: any;
};

interface IAuthBindingResponses {
    Login: UnknownObject;
    Logout: UnknownObject;
    Register: UnknownObject;
    Identity: unknown;
    Permissions: unknown;
    ForgotPassword: UnknownObject;
    UpdatePassword: UnknownObject;
}

type ActionType<Params, Response = unknown> = (
    params: Params extends unknown ? any : Params,
) => Promise<Response>;

export type AuthBindings<
    AuthBindingParams extends IAuthBindingParams = IAuthBindingParams,
    AuthBindingResponses extends IAuthBindingResponses = IAuthBindingResponses,
> = {
    login: ActionType<
        AuthBindingParams["Login"],
        AuthBindingResponses["Login"]
    >;
    logout: ActionType<
        AuthBindingParams["Logout"],
        LogoutResponse & AuthBindingResponses["Logout"]
    >;
    check: ActionType<AuthBindingParams["Check"], CheckResponse>;
    onError: (error: Error) => Promise<OnErrorResponse>;
    register?: ActionType<
        AuthBindingParams["Register"],
        AuthBindingResponses["Register"] & AuthActionResponse
    >;
    forgotPassword?: ActionType<
        AuthBindingParams["ForgotPassword"],
        AuthBindingResponses["ForgotPassword"]
    >;
    updatePassword?: ActionType<
        AuthBindingParams["UpdatePassword"],
        AuthBindingResponses["UpdatePassword"]
    >;
    getPermissions?: ActionType<
        AuthBindingParams["Permissions"],
        AuthBindingResponses["Permissions"]
    >;
    getIdentity?: ActionType<
        AuthBindingParams["Identity"],
        AuthBindingResponses["Identity"]
    >;
};

export interface IAuthBindingsContext extends Partial<AuthBindings> {
    isProvided: boolean;
}
