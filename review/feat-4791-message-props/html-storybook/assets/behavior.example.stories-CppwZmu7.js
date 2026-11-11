import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./card-Bcf4-J-T.js";var a=t({DefaultStatic:()=>l,Interactive:()=>u,__namedExportsOrder:()=>d,default:()=>c}),o,s,c,l,u,d;function f(){return(f=e((()=>{r(),o=n(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBCard/Behavior`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:s()},argTypes:{behavior:{control:`select`,options:[`static`,`interactive`]},elevationLevel:{control:`select`,options:[`1`,`2`,`3`]},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},l={args:{behavior:`static`,children:(0,o.jsx)(`strong`,{children:`(Default) Static`})},render:e=>(0,o.jsx)(i,{...e})},u={args:{behavior:`interactive`,children:(0,o.jsx)(`strong`,{children:`Interactive`})},render:e=>(0,o.jsx)(`button`,{type:`button`,children:(0,o.jsx)(i,{...e})})},d=[`DefaultStatic`,`Interactive`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "behavior": "static",
    "children": <strong>(Default) Static</strong>
  },
  render: (properties: any) => <DBCard {...properties} />
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "behavior": "interactive",
    "children": <strong>Interactive</strong>
  },
  render: (properties: any) => <button type="button"><DBCard {...properties} /></button>
}`,...u.parameters?.docs?.source}}}})))()}export{f as i,u as n,a as r,l as t};