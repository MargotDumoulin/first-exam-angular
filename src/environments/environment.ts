// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDtsstlHvbphloK6k_JqTSEvJ6dgyLJAkg',
    authDomain: 'td-first-angular.firebaseapp.com',
    databaseURL: 'https://td-first-angular-default-rtdb.firebaseio.com',
    projectId: 'td-first-angular',
    storageBucket: 'td-first-angular.appspot.com',
    messagingSenderId: '841563299843',
    appId: '1:841563299843:web:a58627b19102bcaf0cee36'
  }
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
