import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./brand-DYDs4XJ-.js";var a=t({CustomLogo:()=>d,DefaultWithLogo:()=>l,NoLogo:()=>u,__namedExportsOrder:()=>f,default:()=>c}),o,s,c,l,u,d,f;function p(){return(p=e((()=>{r(),o=n(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBBrand/Variants`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{hideLogo:{control:`boolean`},showIcon:{control:`boolean`},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},l={args:{children:`(Default) With Logo`},render:e=>(0,o.jsx)(i,{...e})},u={args:{hideLogo:!0,children:`No Logo`},render:e=>(0,o.jsx)(i,{...e})},d={args:{hideLogo:!0,children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(`img`,{alt:`this is a fancy placeholder logo`,src:`assets/images/placeholder.jpg`}),`Custom Logo`]})},render:e=>(0,o.jsx)(i,{...e})},f=[`DefaultWithLogo`,`NoLogo`,`CustomLogo`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "children": "(Default) With Logo"
  },
  render: (properties: any) => <DBBrand {...properties} />
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "hideLogo": true,
    "children": "No Logo"
  },
  render: (properties: any) => <DBBrand {...properties} />
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "hideLogo": true,
    "children": <><img alt="this is a fancy placeholder logo" src="assets/images/placeholder.jpg" />Custom Logo</>
  },
  render: (properties: any) => <DBBrand {...properties} />
}`,...d.parameters?.docs?.source}}}})))()}export{a,p as i,l as n,u as r,d as t};