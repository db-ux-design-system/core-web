import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./card-Bcf4-J-T.js";var a=t({DefaultLevel1:()=>l,Level2:()=>u,Level3:()=>d,__namedExportsOrder:()=>f,default:()=>c}),o,s,c,l,u,d,f;function p(){return(p=e((()=>{r(),o=n(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBCard/Elevation Level`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:s()},argTypes:{behavior:{control:`select`,options:[`static`,`interactive`]},elevationLevel:{control:`select`,options:[`1`,`2`,`3`]},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},l={args:{elevationLevel:`1`,children:(0,o.jsx)(`strong`,{children:`(Default) 1`})},render:e=>(0,o.jsx)(i,{...e})},u={args:{elevationLevel:`2`,children:(0,o.jsx)(`strong`,{children:`2`})},render:e=>(0,o.jsx)(i,{...e})},d={args:{elevationLevel:`3`,children:(0,o.jsx)(`strong`,{children:`3`})},render:e=>(0,o.jsx)(i,{...e})},f=[`DefaultLevel1`,`Level2`,`Level3`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "elevationLevel": "1",
    "children": <strong>(Default) 1</strong>
  },
  render: (properties: any) => <DBCard {...properties} />
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "elevationLevel": "2",
    "children": <strong>2</strong>
  },
  render: (properties: any) => <DBCard {...properties} />
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "elevationLevel": "3",
    "children": <strong>3</strong>
  },
  render: (properties: any) => <DBCard {...properties} />
}`,...d.parameters?.docs?.source}}}})))()}export{p as a,a as i,u as n,d as r,l as t};