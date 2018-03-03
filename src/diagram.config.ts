import { InjectionToken } from "@angular/core";

interface endpoints {
}

export interface DiagramModuleConfig {
  endpoints: endpoints;
}

export const MODULE_DEFAULT_CONFIG: DiagramModuleConfig = {
  endpoints: {
  }
}

export abstract class DiagramModuleConfiguration implements DiagramModuleConfig {
  endpoints: endpoints;

  constructor(config: DiagramModuleConfig) { }
}

export const MODULE_CONFIG_TOKEN = new InjectionToken<DiagramModuleConfig>('DiagramModuleConfig');
