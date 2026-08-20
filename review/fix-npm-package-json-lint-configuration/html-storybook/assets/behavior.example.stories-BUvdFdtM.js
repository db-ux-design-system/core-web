import{n as e}from"./iframe-HdoyJ_Kk.js";import{n as t,t as n}from"./card-BwAI_4r7.js";import{n as r}from"./rolldown-runtime-DkW27tQK.js";var i,a,o,s,c,l;function u(){return(u=r((()=>{t(),i=e(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBCard/Behavior`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:a()},argTypes:{behavior:{control:`select`,options:[`static`,`interactive`]},elevationLevel:{control:`select`,options:[`1`,`2`,`3`]},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},s={args:{behavior:`static`,children:(0,i.jsx)(`strong`,{children:`(Default) Static`})},render:e=>(0,i.jsx)(n,{...e})},c={args:{behavior:`interactive`,children:(0,i.jsx)(`strong`,{children:`Interactive`})},render:e=>(0,i.jsx)(`button`,{type:`button`,children:(0,i.jsx)(n,{...e})})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l=[`DefaultStatic`,`Interactive`]})))()}u();export{s as DefaultStatic,c as Interactive,l as __namedExportsOrder,o as default};