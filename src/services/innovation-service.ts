import { Injectable } from "@angular/core";
import { DPDService } from "./dpd-service";

@Injectable()
export class InnovationService {
    constructor(private dpdService: DPDService) {

    }

    innovations() {
        return this.dpdService.get('innovations')
    }
}