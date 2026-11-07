import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./card-DtwUkJn9.js";var a=t({Level1Interactive:()=>l,Level2Interactive:()=>u,Level3Interactive:()=>d,__namedExportsOrder:()=>f,default:()=>c}),o,s,c,l,u,d,f;function p(){return(p=e((()=>{r(),o=n(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBCard/Example`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:s()},argTypes:{behavior:{control:`select`,options:[`static`,`interactive`]},elevationLevel:{control:`select`,options:[`1`,`2`,`3`]},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},l={args:{elevationLevel:`1`,behavior:`interactive`,children:(0,o.jsx)(`strong`,{children:`Level 1 - Interactive`})},render:e=>(0,o.jsx)(`button`,{type:`button`,children:(0,o.jsx)(i,{...e})})},u={args:{elevationLevel:`2`,behavior:`interactive`,children:(0,o.jsx)(`strong`,{children:`Level 2 - Interactive`})},render:e=>(0,o.jsx)(`button`,{type:`button`,children:(0,o.jsx)(i,{...e})})},d={args:{elevationLevel:`3`,behavior:`interactive`,children:(0,o.jsx)(`strong`,{children:`Level 3 - Interactive`})},render:e=>(0,o.jsx)(`button`,{type:`button`,children:(0,o.jsx)(i,{...e})})},f=[`Level1Interactive`,`Level2Interactive`,`Level3Interactive`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "elevationLevel": "1",
    "behavior": "interactive",
    "children": <strong>Level 1 - Interactive</strong>
  },
  render: (properties: any) => <button type="button"><DBCard {...properties} /></button>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "elevationLevel": "2",
    "behavior": "interactive",
    "children": <strong>Level 2 - Interactive</strong>
  },
  render: (properties: any) => <button type="button"><DBCard {...properties} /></button>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "elevationLevel": "3",
    "behavior": "interactive",
    "children": <strong>Level 3 - Interactive</strong>
  },
  render: (properties: any) => <button type="button"><DBCard {...properties} /></button>
}`,...d.parameters?.docs?.source}}}})))()}export{p as a,a as i,u as n,d as r,l as t};