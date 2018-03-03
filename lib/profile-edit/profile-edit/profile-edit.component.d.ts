import { OnInit, EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { UtilityService } from "@soushians/infra";
import { Observable } from "rxjs/Observable";
export declare class ProfileEditComponent implements OnInit {
    private utilityService;
    submited: EventEmitter<{}>;
    formId: string;
    formGroup: FormGroup;
    roles$: Observable<string[]>;
    groups: string[];
    constructor(utilityService: UtilityService);
    ngOnInit(): void;
    editProfile(): void;
}
