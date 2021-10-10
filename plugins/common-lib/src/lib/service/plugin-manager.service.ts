import { Compiler, Injectable, Injector, Type } from '@angular/core';
import { NgModuleFactory } from '@angular/core/src/r3_symbols';
import { COMMON_DEPS } from '../utils/common-deps';

const SystemJs = (window as any).System;

export function createPlugin(config: {
    name: string;
    module: Type<any>;
    components: Type<any>[]
}) {
    return new NgPlugin(config.name, config.module, config.components);
}

export class NgPlugin {
    constructor(
        public name: string,
        public module: Type<any>,
        public components: Type<any>[]) {
    }
}

export interface PluginItem {
    moduleFactory: NgModuleFactory<any>;
    components: Type<any>[];
    name: string;
}

@Injectable({
    providedIn: 'root'
})
export class PluginManagerService {

    depsDefined = false;
    plugins: { [key: string]: PluginItem } = {}
    constructor(private compiler: Compiler, private injector: Injector) { }

    defineDeps() {
        if (this.depsDefined) {
            return;
        }
        const deps = COMMON_DEPS as { [key: string]: any };
        Object.keys(deps).forEach(externalKey =>
            (window as any).define(externalKey, [], () => deps[externalKey])
        );
        this.depsDefined = true;
    }

    loadModule(name: string): Promise<NgPlugin> {
        this.defineDeps();
        return SystemJs.import(`./assets/${name}.umd.js`)
            .then(() => SystemJs.import(name))
            .then((plugin: NgPlugin) => {
                return Promise.resolve(plugin);
            });
    }

    loadMsgPlugins(names: Array<string>) {
        for (let name of names) {
            ((name) => {
                if (!this.plugins[name]) {
                    this.loadModule(name).then((plugin: NgPlugin) => {
                        const moduleFactory = this.compiler.compileModuleSync(plugin.module);
                        this.plugins[name] = {
                            moduleFactory,
                            name: plugin.name,
                            components: plugin.components
                        };
                        console.log(this.plugins)
                    });
                }
            })(name);
        }
    }

    findComponent(type: string, name: string) {
        if (!this.plugins[type]) {
            return null;
        }
        const selectComp = this.plugins[type].components.find((comp: any) => comp.NAME == name);
        return { comp: selectComp, moduleFactory: this.plugins[type].moduleFactory }
    }

}