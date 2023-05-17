<h1 align="center">
    Dwarves React Native Boilerplate
</h1>
<p align="center">
    <a href="https://github.com/dwarvesf">
        <img src="https://img.shields.io/badge/-make%20by%20dwarves-%23e13f5e?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsBAMAAADsqkcyAAAAD1BMVEUAAAD///////////////+PQt5oAAAABXRSTlMAQL//gOnhmfMAAAAJcEhZcwAAHsIAAB7CAW7QdT4AAACYSURBVHicndLRDYJAEIThMbGAI1qAYAO6bAGXYP81uSGBk+O/h3Mev4dhWJCkYZqreOi1xoh0eSIvoCaBRjc1B9+I31g9Z2aJ5jkOsYScBW8zDerO/fObnY/FiTl3caOEH2nMzpyZhezIlgqXr2OlOX617Up/nHnPUg0+LHl18YO50d3ghOy1ioeIq1ceTypsjpvYeJohfQEE5WtH+OEYkwAAAABJRU5ErkJggg==&&logoColor=white" alt="Dwarves Foundation." />
    </a>
    <a href="https://discord.gg/dwarvesv">
        <img src="https://img.shields.io/badge/-join%20the%20community-%235865F2?style=for-the-badge&logo=discord&&logoColor=white" alt="Dwarves Foundation Discord." />
    </a>
</p>


This React Native boilerplate is a starting point for your mobile application development needs. It includes the basic setups and libraries you need to kickstart your project.

## Requirements

- Node version >= 18.16.0.
- Ruby version >= 2.7.0.
- Development for iOS requires a Mac and Xcode 13 or higher, and target iOS 13 and up.
- You need to set up your React Native environment. Refer to the [React Native documentation](https://reactnative.dev/docs/environment-setup) for instructions on how to set up your environment for your `development OS` and `target OS`.

## Development Setup

1. Setup iOS gemfile dependencies:

```bash
bundle install
````

2. Install app dependencies.
```bash
yarn
````

3. Install Pod dependencies.
```bash
npx pod-install
````

4. Build and run app:
```bash
yarn ios # for iOS
````
```bash
yarn android # for android
````

## Documentation

- [Getting started](./docs/GETTING_STARTED.md)
- [Tech ecosystem](./docs/TECH_ECOSYSTEM.md)
- [Code style](./docs/CODE_STYLE.md)
- [Writing tests](./docs/WRITING_TEST.md)
- [Editor](./docs/EDITOR.md)
- [Deployment](./docs/DEPLOYMENT.md)
