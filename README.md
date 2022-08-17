# React file structure example 

## Desired file structure
```
+-- src
|    |
|    +-- assets
|    |     |
|    |     +-- images
|    |     |   |         
│    |     |   +-- image.png
|    |     |   +-- image.jpg
|    |     |   +-- image.svg
|    |     |
|    |     +-- icons
|    |     |   |  
│    |     |   +-- icon.png
|    |     |   +-- icon.jpg
|    |     |   +-- icon.svg
|    |     |
|    +-- components
│    |     |
|    |     +-- SomeComponent
|    |     |  |
|    |     |  +-- Child
|    |     |  |   +-- styles.ts
|    |     |  |   +-- SomeComponentChild.tsx
|    |     |  |
|    |     |  +-- SomeComponent.tsx
|    |     |  +-- types.ts
|    |     |  +-- styles.ts
|    |     |  +-- utils.ts
|    |     |  +-- selectors.ts
|    |     |  +-- index.ts
|    |     |
|    |     +-- AnotherComponent.tsx
|    |     |
|    |     +-- index.ts
|    | 
|    +-- hooks
|    |     |
|    |     +-- useFirsHook.ts
|    |     +-- useSecondHook
|    |     +-- index.ts
|    |
|    +-- pages
|    |     |
|    |     +-- PageComponent
|    |     |   |
|    |     |   +-- PageComponent.ts
|    |     |   +-- styles.ts
|    |     |   +-- index.ts
|    |     |
|    |     +-- AnotherPageComponent.tsx
|    |     +-- index.ts
|    |
|    +-- service
|    |     |
|    |     +-- SomeService
|    |     |   |
|    |     |   +-- constants.ts
|    |     |   +-- SomeService.ts
|    |     |   +-- types.ts
|    |     |   +-- index.ts
|    |     |
|    |     +-- AnotherService.tsx
|    |     |
|    |     +-- index.ts
|    |
|    +-- state
|    |     |
|    |     +-- branchName
|    |     |   |         
│    |     |   +-- actions.ts
|    |     |   +-- actionTypes.ts
|    |     |   +-- reducer.ts
|    |     |   +-- selectors.ts
|    |     |   +-- index.ts
|    |     |
|    |     +-- index.ts
|    |
|    +-- utils
|    |     |
|    |     +-- utilsName.ts
|    |     |
|    |     +-- index.ts

```