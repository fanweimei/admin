import { Routes } from "@angular/router";
import { Microfrontend } from "../../microfrontends/microfrontend.model";
import { routes } from "../../routes/routes-routing.module";
import { loadRemoteModule } from "./federation-util";

export function buildRoutes(options: Microfrontend[]): Routes {
    const lazyRoutes: Routes = options.map((o) => ({
        path: o.routePath,
        loadChildren: () => loadRemoteModule(o).then((m) => m[o.ngModuleName]),
    }));
    routes[0].children = [...routes[0]?.children || [], ...lazyRoutes];

    return routes;
}