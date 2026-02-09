import{j as t}from"./jsx-runtime-u17CrQMm.js";import{D as s}from"./brand-twxfF-p1.js";import"./index-OxcJkKaM.js";import"./iframe-Duf2yS0l.js";import"./preload-helper-D8o24SmT.js";import"./constants-BqjZCLvV.js";const{fn:l}=__STORYBOOK_MODULE_TEST__,p={title:"Components/DBBrand/Variants",component:s,render:a=>t.jsx(s,{...a,children:a.children}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{hideLogo:{control:"text"}}},o={args:{children:"(Default) With Logo"}},r={args:{children:"No Logo",hideLogo:!0}},e={args:{children:t.jsxs(t.Fragment,{children:[t.jsx("img",{alt:"this is a fancy placeholder logo",src:getImage()}),"Custom Logo"]}),hideLogo:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: "(Default) With Logo"
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: "No Logo",
    "hideLogo": true
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: <><img alt="this is a fancy placeholder logo" src={getImage()} />
        Custom Logo</>,
    "hideLogo": true
  }
}`,...e.parameters?.docs?.source}}};const u=["DefaultWithLogo","NoLogo","CustomLogo"];export{e as CustomLogo,o as DefaultWithLogo,r as NoLogo,u as __namedExportsOrder,p as default};
