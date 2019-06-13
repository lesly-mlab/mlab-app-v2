import { Injectable } from "@angular/core";
import { DPDService } from "./dpd-service";

@Injectable()
export class MemberService {
    constructor(private dpdService: DPDService) {

    }

    startups() {
        return this.dpdService.get('organizations', {startup: true, $sort: {name: 1}})
    }

    featured() {
        return this.dpdService.get('organizations', {startup: true, featured: true, $sort: {name: 1}, $limit: 6})
    }

    members(organizationId) {
        return this.dpdService.get('users', {organizationId: organizationId})
    }

    students() {
        return this.dpdService.get('users', {roleId: 'ab22c044d429d886', $sort: {name: 1}})
    }
}