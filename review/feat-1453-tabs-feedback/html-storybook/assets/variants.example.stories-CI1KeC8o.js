import{i as e}from"./preload-helper-DxNVafYN.js";import{t}from"./iframe-D-yUM2Mh.js";import{t as n,vt as r}from"./src-BkNeMdzg.js";var i,a,o,s,c,l,u;e((()=>{n(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBBrand/Variants`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{hideLogo:{control:`boolean`},showIcon:{control:`boolean`},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},s={args:{children:`(Default) With Logo`},render:e=>(0,i.jsx)(r,{...e})},c={args:{hideLogo:!0,children:`No Logo`},render:e=>(0,i.jsx)(r,{...e})},l={args:{hideLogo:!0,children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(`img`,{alt:`this is a fancy placeholder logo`,src:getImage()}),`Custom Logo`]})},render:e=>(0,i.jsx)(r,{...e})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "children": "(Default) With Logo"
  },
  render: (properties: any) => <DBBrand {...properties} />
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "hideLogo": true,
    "children": "No Logo"
  },
  render: (properties: any) => <DBBrand {...properties} />
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "hideLogo": true,
    "children": <><img alt="this is a fancy placeholder logo" src={getImage()} />Custom Logo</>
  },
  render: (properties: any) => <DBBrand {...properties} />
}`,...l.parameters?.docs?.source}}},u=[`DefaultWithLogo`,`NoLogo`,`CustomLogo`]}))();export{l as CustomLogo,s as DefaultWithLogo,c as NoLogo,u as __namedExportsOrder,o as default};