---
to: output/power-apps/<%= name %>/tsconfig.json
force: true
---
{
    "extends": "./node_modules/pcf-scripts/tsconfig_base.json",
    "compilerOptions": {
        "typeRoots": ["node_modules/@types"],
        "jsx": "react-jsx"
    }
}


