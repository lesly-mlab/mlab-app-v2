import { Injectable } from "@angular/core";
import { Storage } from '@ionic/storage';
import { DPDService } from "./dpd-service";

@Injectable()
export class UserService { 
    constructor(
        private dpdService: DPDService) {

    }

    setPush(token) {
        return this.dpdService.currentUser().then(user => {
            return this.dpdService.put('users', user.id, {pushId: token})
        })
        
    }

    logout() {
        return this.dpdService.logout()
    }

    login(email, password) {
        return this.dpdService.login(email, password)
    }

    signup(email, password) {
        return this.dpdService.signup(email, password).then(() => {
            return this.dpdService.login(email, password)
        })
    }
    
    profile(uuid?) {
        if (uuid) {
            return this.dpdService.item('users', uuid)
        } else {
            return this.dpdService.currentUser()
        }
    }

    changePassword(oldPassword, newPassword) {
        return this.dpdService.currentUser().then(user => {
            return this.login(user.username, oldPassword).then(() => {
                return this.dpdService.put('users', user.id, {password: newPassword})
            })
        })
    }

    setProfile(profile) {
        return this.dpdService.currentUser().then(user => {
            return this.dpdService.put('users', user['id'], profile)
        })
    }

    currentUser() {
        return this.dpdService.currentUser()
    }

    passwordReset(email){
        return this.dpdService.post('resetpassword', {email: email})
    }
}