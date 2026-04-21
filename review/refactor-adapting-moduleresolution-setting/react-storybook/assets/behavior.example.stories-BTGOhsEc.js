import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-DnaggZxp.js";import{O as n,t as r}from"./src-DK5dTc4z.js";var i,a,o,s,c,l;e((()=>{r(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBCard/Behavior`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:a()},argTypes:{behavior:{control:`select`,options:[`static`,`interactive`]},elevationLevel:{control:`select`,options:[`1`,`2`,`3`]},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},s={args:{behavior:`static`,children:(0,i.jsx)(`strong`,{children:`(Default) Static`})},render:e=>(0,i.jsx)(n,{...e})},c={args:{behavior:`interactive`,children:(0,i.jsx)(`strong`,{children:`Interactive`})},render:e=>(0,i.jsx)(`button`,{type:`button`,children:(0,i.jsx)(n,{...e})})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "behavior": "static",
    "children": <strong>(Default) Static</strong>
  },
  render: (properties: any) => <DBCard {...properties} />
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "behavior": "interactive",
    "children": <strong>Interactive</strong>
  },
  render: (properties: any) => <button type="button"><DBCard {...properties} /></button>
}`,...c.parameters?.docs?.source}}},l=[`DefaultStatic`,`Interactive`]}))();export{s as DefaultStatic,c as Interactive,l as __namedExportsOrder,o as default};