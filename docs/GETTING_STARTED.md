# Getting started

Install dependencies with `yarn` (recommended) or `npm`:

```bash
yarn
```

Then, you can run locally in development mode with live reload:

```bash
yarn ios # for iOS
```

```bash
yarn android # for android
```

## Code organization

```
.
├── README.md                    # README file
├── babel.config.js              # Babel configuration
├── types                        # Shared TypeScript interfaces
│── assets                       # App assets (images, sounds, etc...)
├── components                   # Shared components
│   └── X
│       └── X.tsx
│       └── index.ts
│       └── X.stories.tsx
│       └── X.test.tsx
│── screens                      # App screens
│── navigators                   # Navigation flow
├── context                      # Shared context state
├── constants                    # Shared constants
├── translations                 # Locale translations
├── hooks                        # Shared hooks
│   └── tests
│── styles                       # Shared style folder
│   └── fonts.ts                 # Shared fonts style
│   └── index.ts                   
│   └── palette.ts               # Palette colors
│   └── style.ts                 # Style Utility func
│── utils                        # Utility folder
│   └── __tests__
├── metro.config.js              # Metro configuration
└── tsconfig.json                # TypeScript configuration
```

### Develop UI components

The project integrates [Storybook](https://storybook.js.org/) to streamline UI
development.

```bash
yarn storybook
```

The UI document then should be live at
[http://localhost:6006](http://localhost:6006).

## Read on:

- [Home](../README.md)
- [Tech ecosystem](./TECH_ECOSYSTEM.md)
- [Code style](./CODE_STYLE.md)
- [Version control](./VERSION_CONTROL.md)
- [Editor](./EDITOR.md)
- [Writing test](./WRITING_TEST.md)
- [Deployment](./DEPLOYMENT.md)
