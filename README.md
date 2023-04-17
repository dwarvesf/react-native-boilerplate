If you have NodeJS v18+, before app start run

```js
export NODE_OPTIONS=--openssl-legacy-provider
```

https://stackoverflow.com/a/69699772

Package manager we use: yarn

## Dev Setup

1. Follow and make sure to setup development environment for react-native-cli [here](https://reactnative.dev/docs/0.70/environment-setup). To confirm is setup is properly working, create/initialize a new app to test.
2. Make sure to setup required node version under `.node-version` file. It is also better to have node version manager because react native v0.70 is using node 16 while react native v0.71 is using node 18.
3. Make sure to setup a ruby version manager as React Native CLI iOS is now heavily dependent of Ruby,thus it is important to easily switch ruby version across upgrades and updates. Make sure to install the ruby version found in `.ruby-version` file as well.
4. Run `bundle install` to setup iOS gemfile dependencies.
5. Run `yarn install` to install app dependencies.
6. Run `yarn pod:install` or `npx pod-install` to install Pod dependencies.
7. Run `yarn ios` (to start app in iOS) or `yarn android` (for android).

<div align="center">
    <img src="./img/signin-demo.png"  align="center" />
</div>

### Android keystore configs setup
Ask for a copy of the `keystore` and `properties` file and add them in `./android/app` directory.

### For freshly clone repo

1. Run `bundle install` to setup iOS gemfile dependencies.
2. Run `yarn install` to install app dependencies.
3. Run `yarn pod:install` or `npx pod-install` to install Pod dependencies.
4. Run `yarn ios` (to start app in iOS) or `yarn android` (for android).

### For existing repo setup
1. Run `yarn cache clean` to clean yarn cache.
2. Run `yarn pod:clean` to clean cocoapods cache.
3. Run `cd android && ./gradlew clean` to clean up android gradle cache.
4. Delete the following files/directory (this ensures we are generating fresh dependencies):
   - `./Gemfile.lock`
   - `./node_modules`
   - `./yarn.lock`
   - `./ios/Pods`
   - `./ios/Podfile.lock`

5. Run `bundle install` to setup iOS gemfile dependencies.
6. Run `yarn install` to install app dependencies.
7. Run `yarn pod:install` or `npx pod-install` to install Pod dependencies.
8. Run `yarn ios` (to start app in iOS) or `yarn android` (for android).
## Execution of Eslint 

Before committing your changes, you may enter `eslint .` to check for codes that are not abiding eslint rules. 

If you are encountering errors, you may use `eslint --fix` to auto-fix scripts that are not abiding eslint rules. 

## Use of Husky 

Husky is a tool that allows us to easily wrangle Git hooks and run the scripts we want at those stages.

It works by including an object right within our package.json file that configures Husky to run the scripts we specify. After that, Husky handles managing at which point in the Git lifecycle our scripts will run.

## Generating Android builds
1. For AAB, run command `yarn android:generateAAB`. Navigate to the output file to get the generated AAB output file.
2. For APK, run command `yarn android:generateAPK`. Navigate to the output file to get the generated APK output file.

## Using SVG assets
1. From the figma mockup Group and select assets thats needed to be exported as SVG in figma then copy as SVG
2. Open up [SVGOMG](https://jakearchibald.github.io/svgomg/) then paste the copied SVG
3. In SVGOMG apply the following settings that are different to default:
   - Prettify markup ON.
   - Multipass ON.
   - Precision FULL.
   - Style to attributes ON.
   - Round/rewrite number lists ON.
   - Minify colours OFF.
   - Replace duplicate elements with links ON.
   - Sort attrs ON.
   - Prefer viewBox to width/height ON.
   - Remove style elements ON.
   - Remove script elements ON.
4. Add it in app assets then import it in usage based on how [react-native-svg](https://github.com/software-mansion/react-native-svg) does it.

Example:
```js
import CarLiteSVG from '../assets/icons/svg/car-lite.svg'

// INSIDE COMPONENT RETURN
return (
   ...
   <CarLiteSVG />
   ...
)
```

## Documentation

- [Figma Design](https://www.figma.com/file/J6nd4QRDDS3k0zbaGrFJf2/react-native-boilerplate?node-id=0%3A1&t=jjDkE3DHJbqobnhO-1)
- [Getting started](./docs/GETTING_STARTED.md)
- [Tech ecosystem](./docs/TECH_ECOSYSTEM.md)
- [Code style](./docs/CODE_STYLE.md)
- [Writing tests](./docs/WRITING_TEST.md)
- [Editor](./docs/EDITOR.md)
- [Deployment](./docs/DEPLOYMENT.md)
