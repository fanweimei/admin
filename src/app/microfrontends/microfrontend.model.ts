import { LoadRemoteModuleOptions } from "../shared/utils/federation-util";

export type Microfrontend = LoadRemoteModuleOptions & {
    displayName: string;
    routePath: string;
    ngModuleName: string;
};