import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./card-DtwUkJn9.js";var a=t({DefaultRegular:()=>u,Expressive:()=>d,Functional:()=>l,__namedExportsOrder:()=>f,default:()=>c}),o,s,c,l,u,d,f;function p(){return(p=e((()=>{r(),o=n(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBCard/Density`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:s()},argTypes:{behavior:{control:`select`,options:[`static`,`interactive`]},elevationLevel:{control:`select`,options:[`1`,`2`,`3`]},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},l={args:{"data-density":`functional`,children:(0,o.jsx)(`strong`,{children:`Functional`})},render:e=>(0,o.jsx)(i,{...e})},u={args:{"data-density":`regular`,children:(0,o.jsx)(`strong`,{children:`(Default) Regular`})},render:e=>(0,o.jsx)(i,{...e})},d={args:{"data-density":`expressive`,children:(0,o.jsx)(`strong`,{children:`Expressive`})},render:e=>(0,o.jsx)(i,{...e})},f=[`Functional`,`DefaultRegular`,`Expressive`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "children": <strong>Functional</strong>
  },
  render: (properties: any) => <DBCard {...properties} />
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "children": <strong>(Default) Regular</strong>
  },
  render: (properties: any) => <DBCard {...properties} />
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "children": <strong>Expressive</strong>
  },
  render: (properties: any) => <DBCard {...properties} />
}`,...d.parameters?.docs?.source}}}})))()}export{p as a,a as i,d as n,l as r,u as t};