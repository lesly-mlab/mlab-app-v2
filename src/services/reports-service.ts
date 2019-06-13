import { Injectable } from "@angular/core";
import { DPDService } from "./dpd-service";
import {Http} from '@angular/http'

@Injectable()
export class ReportsService {
    constructor(private dpdService: DPDService, private http: Http) {

    }

    reports() {
        return this.dpdService.currentUser().then(user => {
            return this.dpdService.get('reports', {
                organizationId: user.organizationId,
                $sort: { created: -1 }
            })
        })
    }

    bookmark(report) {
        // return this.dpdService.post()
    }

    share(reportId, emails) {
        return this.dpdService.post('share', {emails: emails, reportId: reportId})
    }

    stats() {
        return this.http.get('https://app.mlab.co.za/stats').toPromise().then(data => {
            return data.json()
        })
        // return this.dpdService.get('stats')
    }
}
