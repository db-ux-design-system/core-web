import{j as r}from"./jsx-runtime-u17CrQMm.js";import{D as n}from"./card-RX-u2Tdp.js";import"./index-OxcJkKaM.js";import"./iframe-Duf2yS0l.js";import"./preload-helper-D8o24SmT.js";const{fn:l}=__STORYBOOK_MODULE_TEST__,m={title:"Components/DBCard/Behavior",component:n,render:a=>r.jsx(n,{...a,children:a.children}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{elevationLevel:{control:"text"},spacing:{control:"text"},behavior:{control:"text"}}},e={args:{children:r.jsx(r.Fragment,{children:r.jsx("strong",{children:"(Default) Static"})}),behavior:"static"}},t={args:{children:r.jsx(r.Fragment,{children:r.jsx("strong",{children:"Interactive"})}),behavior:"interactive"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: <><strong>(Default) Static</strong></>,
    "behavior": "static"
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: <><strong>Interactive</strong></>,
    "behavior": "interactive"
  }
}`,...t.parameters?.docs?.source}}};const p=["DefaultStatic","Interactive"];export{e as DefaultStatic,t as Interactive,p as __namedExportsOrder,m as default};
