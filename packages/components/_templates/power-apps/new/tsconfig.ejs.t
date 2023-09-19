---
to: ../../output/power-apps/<%= name %>/tsconfig.json
force: true
---
{
    "compilerOptions": {
        "jsx": "react-jsx",
        "target": "es5",
        "module": "commonjs",
        "lib": ["ES6", "DOM"],
        "strict": true,
        "strictPropertyInitialization": false,
        "typeRoots": ["../node_modules/@types","node_modules/@types"],
        "allowSyntheticDefaultImports": true
    },
    "exclude": [
        "./node_modules",
        "../node_modules"
    ]
}


