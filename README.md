# Mobx + React.js (Function Component)

## with RootStore

## 목차

-   [Directory Structure]
-   [context 처리](https://github.com/wnsguddl789/mobx-functional/blob/main/src/context/%08AppContext.tsx)

```
├── src
│   ├── components
│   │   ├── AppLayout.tsx
│   │   └── index.ts
│   ├── context
│   │   ├── AppContext.tsx
│   │   └── index.ts
│   ├── modules
│   │   ├── Todo
│   │   │   ├── index.ts
│   │   │   ├── models
│   │   │   │   ├── TodoModel.ts
│   │   │   │   └── index.ts
│   │   │   ├── pages
│   │   │   │   ├── TodoPage.tsx
│   │   │   │   └── index.ts
│   │   │   ├── services
│   │   │   │   └── index.ts
│   │   │   ├── shared
│   │   │   │   └── index.ts
│   │   │   ├── store.ts -> # TodoRootStore
│   │   │   ├── styles
│   │   │   │   ├── TodoView.style.ts
│   │   │   │   └── index.ts
│   │   │   ├── types
│   │   │   │   ├── index.ts
│   │   │   │   └── todo.ts
│   │   │   ├── viewControllers
│   │   │   │   ├── TodoViewController.tsx
│   │   │   │   └── index.ts
│   │   │   └── views
│   │   │       ├── TodoView.tsx
│   │   │       └── index.ts
│   │   ├── index.ts
│   │   └── store.ts -> # RootStore
│   ├── pages
│   │   ├── _app.tsx
│   │   ├── api
│   │   │   └── hello.ts
│   │   ├── index.tsx
│   │   └── todo
│   │       └── index.tsx
│   └── types
│       ├── common.ts
│       ├── index.ts
│       ├── models.ts
│       ├── store
│       │   ├── Todo
│       │   │   └── index.ts
│       │   ├── index.ts
│       │   └── store.ts
│       └── todo.ts
```
