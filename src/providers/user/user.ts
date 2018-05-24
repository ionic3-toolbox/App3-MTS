import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Api } from '../api/api';
import { Lang, LangCodes } from "../../providers";
import { VALID } from '@angular/forms/src/model';



/**
 * Most apps have the concept of a User. This is a simple provider
 * with stubs for login/signup/etc.
 *
 * This User provider makes calls to our API at the `login` and `signup` endpoints.
 *
 * By default, it expects `login` and `signup` to return a JSON object of the shape:
 *
 * ```json
 * {
 *   status: 'success',
 *   user: {
 *     // User fields your app needs, like "id", "name", "email", etc.
 *   }
 * }Ø
 * ```
 *
 * If the `status` field is not `success`, then an error is detected and returned.
 */
@Injectable()
export class User {
  _user: any;

  constructor(public api: Api, public storage: Storage) { }

  /**
   * Send a POST request to our login endpoint with the data
   * the user entered on the form.
   */
  login(accountInfo: any) {
    let seq = this.api.post('login', accountInfo).share();
    console.log("UserLogged in with " + accountInfo);

    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      if (res.status == 'success') {
        this._loggedIn(res);
      } else {
      }
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }

  /**
   * Log the user out, which forgets the session
   */
  logout() {
    this._user = null;
  }

  /**
   * Process a login/signup response to store user data
   */
  _loggedIn(resp) {
    this._user = resp.user;
  }

  setLang(lang: string) {
    this.storage.set('lang', lang);
  }

  getLang() {
    //if (!this.isLangSet) {
    //  //### We have to decide what to do here later
    //  return false;
    //} else {
      this.storage.get('lang').then((val) => {
        if (val == "fr") {
          return "fr";// LangCodes.FR;
        } else {
          return "en";// LangCodes.EN;
        }
      })
    //}
    
  }

  isLangSet() {
    this.storage.get('lang').then((val) => {
      if (val == null) {
        return false;
      } else {
        return true;
      }
    })
  }
}
