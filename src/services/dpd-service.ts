import { Injectable } from "@angular/core";
import { Platform } from "ionic-angular";
declare var dpd

@Injectable()
export class DPDService {
    constructor(platform: Platform) {
        platform.ready().then(() => {
            dpd.setBaseUrl('https://app.mlab.co.za')
        })
    }

    login(username, password) {
        return new Promise((resolve, reject) => {
            dpd.users.login({
                username: username,
                password: password
              }, function(data, error) {
                if (error) {
                    if (error.message == "bad credentials") {
                        error.message = "You've entered an invalid password"
                    }
                    reject(error)
                } else {
                    resolve(data)
                }
            })
        })
    }

    signup(username, password, extra?) {
        return new Promise((resolve, reject) => {
            let obj = {username: username, password: password}

            if (extra != null) {
                Object.assign(obj, extra)
            }

            dpd.users.post(obj, function(data, err) {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            })
        })
    }

    currentUser(): Promise<any> {
        return new Promise((resolve, reject) => {
            dpd.users.me((data, err) => {
                if (err) {
                    reject(null)
                } else {
                    resolve(data)
                }
            })
        })
    }

    logout() {
        return new Promise((resolve, reject) => {
            dpd.users.logout(function(result, error) {
                resolve(result)
            });
        })
    }

    item(collection, id): Promise<Object> {
        return new Promise((resolve, reject) => {
            dpd[collection].get(id, (result, err) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(result)
                }
            })
        })
    }

    get(collection, query?): Promise<Array<any>> {
        return new Promise((resolve, reject) => {
            if (query) {
                dpd[collection].get(query, (result, err) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(result)
                    }
                })
            } else {
                dpd[collection].get((result, err) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(result)
                    }
                })
            }
        })
    }

    postWithId(collection, id, obj) {
        return new Promise((resolve, reject) => {
            dpd[collection].post(id, obj, (result, err) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(result)
                }
            })
        })
    }

    post(collection, obj) {
        return new Promise((resolve, reject) => {
            dpd[collection].post(obj, (result, err) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(result)
                }
            })
        })
    }

    put(collection, id, obj) {
        return new Promise((resolve, reject) => {
            dpd[collection].put(id, obj, (result, err) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(result)
                }
            })
        })
    }

    delete(collection, query) {
        return new Promise((resolve, reject) => {
            dpd[collection].del(query, (result, err) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(result)
                }
            })
        })
    }

    listen(message, callback) {
        dpd.on(message, callback)
    }

    stopListening(message) {
        dpd.off(message)
    }
}
