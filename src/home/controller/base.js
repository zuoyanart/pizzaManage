'use strict';

export default class extends think.controller.base {
  /**
   * some base method in here
   */
  __before() {
    let username = this.http.cookie('username');
    console.log("[" + username + ']');
    if(username == "") {
      this.http.redirect('/login');
    } else {
          console.log("权限正确");
    }
  }
}
