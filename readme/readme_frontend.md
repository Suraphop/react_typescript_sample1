#### setup
````
npm i -g yarn
yarn --version
````
#### create new project
````
yarn create vite
````
 - chose projectname -> named project(frontend , backend) -> react -> Typescript
 ````
yarn
yarn dev
npx serve dist
````
#### add tools
````
  yarn add @emotion/react @emotion/styled @mui/icons-material @mui/material @mui/x-data-grid chart.js react-chartjs-2 @react-hook/debounce react-router-dom @types/react-router-dom axios moment react-moment url-join react-number-format react-redux redux @reduxjs/toolkit react-hook-form @hookform/resolvers yup faker@5.5.3 @types/faker@5.5.3 copy-to-clipboard dayjs @types/node
````
```` 
 npm install -D tailwindcss postcss autoprefixer
 npx tailwindcss init -p
````
#### fomat on save

- vscode setting auto format & active color tab
- cd frontend -> mkdir .vscode -> cd .vscode -> mkdir settings.json

````
  {
    "editor.formatOnSave": true,
    "workbench.colorCustomizations": {
        "tab.activeBorder": "#00ff44",
        "tab.unfocusedActiveBorder": "#16ac08"
      }
   }
````

