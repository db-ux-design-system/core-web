import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-BpX3lQ6F.js";import{O as n,t as r}from"./src-CXJdFFf7.js";var i,a,o,s,c,l,u;e((()=>{r(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBCard/Elevation Level`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:a()},argTypes:{behavior:{control:`select`,options:[`static`,`interactive`]},elevationLevel:{control:`select`,options:[`1`,`2`,`3`]},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},s={args:{elevationLevel:`1`,children:(0,i.jsx)(`strong`,{children:`(Default) 1`})},render:e=>(0,i.jsx)(n,{...e})},c={args:{elevationLevel:`2`,children:(0,i.jsx)(`strong`,{children:`2`})},render:e=>(0,i.jsx)(n,{...e})},l={args:{elevationLevel:`3`,children:(0,i.jsx)(`strong`,{children:`3`})},render:e=>(0,i.jsx)(n,{...e})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "elevationLevel": "1",
    "children": <strong>(Default) 1</strong>
  },
  render: (properties: any) => <DBCard {...properties} />
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "elevationLevel": "2",
    "children": <strong>2</strong>
  },
  render: (properties: any) => <DBCard {...properties} />
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "elevationLevel": "3",
    "children": <strong>3</strong>
  },
  render: (properties: any) => <DBCard {...properties} />
}`,...l.parameters?.docs?.source}}},u=[`DefaultLevel1`,`Level2`,`Level3`]}))();export{s as DefaultLevel1,c as Level2,l as Level3,u as __namedExportsOrder,o as default};