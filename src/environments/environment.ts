// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  name: 'default',
  firebase: {
        config : {
          apiKey: "AIzaSyCey87gttuxvhgWwdBfYn63iqMysHo3in0",
          authDomain: "storeapp-c5f8a.firebaseapp.com",
          projectId: "storeapp-c5f8a",
          storageBucket: "storeapp-c5f8a.appspot.com",
          messagingSenderId: "942329364102",
          appId: "1:942329364102:web:a691922032cef2296b9b07"
        }
  },
  actionCodeSettings: {
    url: 'http://localhost:5200/profile/new',
    handleCodeInApp: true
  },
  url:'https://localhost:44362'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
