# Getting started

Install dependencies with `yarn` or `npm`:

```bash
yarn
```

Then, you can run locally in development mode with live reload:

```bash
yarn ios
```

## Code organization

```
.
├── README.md                    # README file
├── babel.config.js              # Babel configuration
├── public                       # Public folder
│   └── img                      # Images used by the app
├── types                        # Shared TypeScript interfaces
├── components                   # Shared components
│   └── X
│       └── X.tsx
│       └── index.ts
│       └── X.stories.tsx
│       └── X.test.tsx
│── screens                      # App screens
├── context                      # Shared context state
├── constants                    # Shared constants
├── hooks                        # Shared hooks
│   └── tests
│── styles                       # Shared style folder
│   └── fonts.ts                   # Shared fonts style
│   └── index.ts                   
│   └── palette.ts                 # Palette colors
│   └── style.ts                   # Style Utility func
│── utils                        # Utility folder
│   └── tests
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

### TypeScript API generator

If your team use Swagger to document APIs, we support a node script to generate
TypeScript interfaces via your Swagger scheme. In
[package.json](../package.json), change the default path to the location of your
Swagger JSON doc.

```
- "fetch-definitions": "swagger-typescript-api --no-client -p ./libs/swagger.json -o ./types -n schema.ts",
+ "fetch-definitions": "swagger-typescript-api --no-client -p your-api-swagger-json -o ./types -n schema.ts",
```

Then, you can run the script locally to generate TypeScript definitions for the
APIs:

```bash
yarn fetch-definitions
```

The generated interfaces will be located at
[types/schema.ts](../types/schema.ts).

## Read on:

- [Home](../README.md)
- [Tech ecosystem](./TECH_ECOSYSTEM.md)
- [Code style](./CODE_STYLE.md)
- [Version control](./VERSION_CONTROL.md)
- [Editor](./EDITOR.md)
- [Writing test](./WRITING_TEST.md)
- [Deployment](./DEPLOYMENT.md)
