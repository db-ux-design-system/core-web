import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-DnaggZxp.js";import{O as n,t as r}from"./src-DK5dTc4z.js";var i,a,o,s,c,l,u;e((()=>{r(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBCard/Example`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:a()},argTypes:{behavior:{control:`select`,options:[`static`,`interactive`]},elevationLevel:{control:`select`,options:[`1`,`2`,`3`]},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},s={args:{elevationLevel:`1`,behavior:`interactive`,children:(0,i.jsx)(`strong`,{children:`Level 1 - Interactive`})},render:e=>(0,i.jsx)(`button`,{type:`button`,children:(0,i.jsx)(n,{...e})})},c={args:{elevationLevel:`2`,behavior:`interactive`,children:(0,i.jsx)(`strong`,{children:`Level 2 - Interactive`})},render:e=>(0,i.jsx)(`button`,{type:`button`,children:(0,i.jsx)(n,{...e})})},l={args:{elevationLevel:`3`,behavior:`interactive`,children:(0,i.jsx)(`strong`,{children:`Level 3 - Interactive`})},render:e=>(0,i.jsx)(`button`,{type:`button`,children:(0,i.jsx)(n,{...e})})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "elevationLevel": "1",
    "behavior": "interactive",
    "children": <strong>Level 1 - Interactive</strong>
  },
  render: (properties: any) => <button type="button"><DBCard {...properties} /></button>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "elevationLevel": "2",
    "behavior": "interactive",
    "children": <strong>Level 2 - Interactive</strong>
  },
  render: (properties: any) => <button type="button"><DBCard {...properties} /></button>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "elevationLevel": "3",
    "behavior": "interactive",
    "children": <strong>Level 3 - Interactive</strong>
  },
  render: (properties: any) => <button type="button"><DBCard {...properties} /></button>
}`,...l.parameters?.docs?.source}}},u=[`Level1Interactive`,`Level2Interactive`,`Level3Interactive`]}))();export{s as Level1Interactive,c as Level2Interactive,l as Level3Interactive,u as __namedExportsOrder,o as default};