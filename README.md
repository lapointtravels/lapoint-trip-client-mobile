# Lapoint Trips Mobile

This is the mobile app client for Lapoint Trips. It is a tool for visitors to stay in the loop on what is happening at the camp, providing feedback and keeping in touch with the other guests.

# Tech stack

The backend is provided by Firebase. The app is built with React Native. It currently supports building for iOS, but Android support can also be added in the same code base.

The project is created using the [React Native Firebase Starter](https://rnfirebase.io) template. This enables integration directly with the native Firebase SDKs instead of using the JavaScript API, providing additional features and performance.

# Developing

## Getting started

Follow the directions at https://facebook.github.io/react-native/docs/getting-started.html to get up and running with the React Native toolchain.

The code is hosted on Github at https://github.com/lapointtravels/lapoint-trip-client-mobile

## Project structure

The app's entry point is in `App.js`. The custom views are located in `components/`. iOS and Android specific native code is in the `ios/` and `android/` directories.

On iOS the main navigation is a platform specific tab bar implementation. So for Android, some other navigation structure needs to be set up, but most other views should be reusable across platforms.

## Resources

* Firebase account. Used for data persistance and other mobile tools.
  https://console.firebase.google.com/u/0/project/hackweek-lapoint/overview
* Facebook app. Used for Facebook authentication.
  https://developers.facebook.com/apps/599285746862272/dashboard/
