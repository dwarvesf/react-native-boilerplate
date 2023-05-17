# Deployment

### Manual deploy app to Apple App Store and Google Play Store

## Deployment for Android
1. For AAB, run command `yarn android:generateAAB`. Navigate to the output file to get the generated AAB output file.
2. For APK, run command `yarn android:generateAPK`. Navigate to the output file to get the generated APK output file.

Details: You can see very details docs to Publishing to Google Play Store in this:
Details document by react-native team: https://reactnative.dev/docs/signed-apk-android

## Deployment for iOS

Build Archive with XCode and upload app to App Store Connect

You can now build your app for release by tapping ⌘B or selecting Product → Build from the menu bar. Once built for release, you'll be able to distribute the app to beta testers and submit the app to the App Store.

Details document by react-native team: https://reactnative.dev/docs/publishing-to-app-store

## Use code-push to upgrading your app as well as the "web-like"

A React Native app is composed of JavaScript files and any accompanying images, which are bundled together by the metro bundler and distributed as part of a platform-specific binary (i.e. an .ipa or .apk file). Once the app is released, updating either the JavaScript code (e.g. making bug fixes, adding new features) or image assets, requires you to recompile and redistribute the entire binary, which of course, includes any review time associated with the store(s) you are publishing to.

The CodePush plugin helps get product improvements in front of your end users instantly, by keeping your JavaScript and images synchronized with updates you release to the CodePush server. This way, your app gets the benefits of an offline mobile experience, as well as the "web-like" agility of side-loading updates as soon as they are available. It's a win-win!

Note: Any product changes which touch native code (e.g. modifying your AppDelegate.m/MainActivity.java file, adding a new plugin) cannot be distributed via CodePush, and therefore, must be updated via the appropriate store(s).

Integrate code push to your app
https://github.com/microsoft/react-native-code-push

## Read on:

- [Home](../README.md)
- [Getting started](./GETTING_STARTED.md)
- [Tech ecosystem](./TECH_ECOSYSTEM.md)
- [Code style](./CODE_STYLE.md)
- [Writing test](./WRITING_TEST.md)
- [Editor](./EDITOR.md)
