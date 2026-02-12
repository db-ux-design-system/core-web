import{j as o}from"./jsx-runtime-u17CrQMm.js";import{D as a}from"./brand-CJj_VJxS.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./constants-CD69XpC7.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,l={title:"Components/DBBrand/Variants",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{hideLogo:{control:"boolean"},showIcon:{control:"boolean"},text:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},e={args:{children:"(Default) With Logo"},render:r=>o.jsx(a,{...r})},t={args:{hideLogo:!0,children:"No Logo"},render:r=>o.jsx(a,{...r})},s={args:{hideLogo:!0,children:o.jsxs(o.Fragment,{children:[o.jsx("img",{alt:"this is a fancy placeholder logo",src:getImage()}),"Custom Logo"]})},render:r=>o.jsx(a,{...r})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "children": "(Default) With Logo"
  },
  render: (properties: any) => <DBBrand {...properties} />
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "hideLogo": true,
    "children": "No Logo"
  },
  render: (properties: any) => <DBBrand {...properties} />
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "hideLogo": true,
    "children": <><img alt="this is a fancy placeholder logo" src={getImage()} />Custom Logo</>
  },
  render: (properties: any) => <DBBrand {...properties} />
}`,...s.parameters?.docs?.source}}};const u=["DefaultWithLogo","NoLogo","CustomLogo"];export{s as CustomLogo,e as DefaultWithLogo,t as NoLogo,u as __namedExportsOrder,l as default};
