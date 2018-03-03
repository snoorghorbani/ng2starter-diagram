import { Injectable, Inject } from "@angular/core";

import { DiagramModuleConfig } from "../diagram.config";
import { MODULE_CONFIG_TOKEN, MODULE_DEFAULT_CONFIG } from "../diagram.config";

@Injectable()
export class DiagramConfigurationService {
	private _config: DiagramModuleConfig;
	get config() {
		return this._config;
	}

	constructor(@Inject(MODULE_CONFIG_TOKEN) config) {
		this._config = Object.assign({}, MODULE_DEFAULT_CONFIG, config);
	}
}
