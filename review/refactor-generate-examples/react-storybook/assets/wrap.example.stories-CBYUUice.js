import{j as o}from"./jsx-runtime-u17CrQMm.js";import{D as a}from"./link-Cv6yvp7p.js";import"./index-OxcJkKaM.js";import"./iframe-Duf2yS0l.js";import"./preload-helper-D8o24SmT.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,p={title:"Components/DBLink/Wrap",component:a,render:e=>o.jsx(a,{...e,children:e.children}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{href:{control:"text"},variant:{control:"text"},disabled:{control:"boolean"},size:{control:"text"},content:{control:"text"},showIcon:{control:"boolean"},wrap:{control:"text"}}},r={args:{wrap:!1,href:"#",text:"(Default) False"}},t={args:{wrap:!0,href:"#",text:"True [Multiline]"},decorators:[e=>o.jsx("div",{style:{width:"2ch"},children:o.jsx(e,{})})]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "wrap": false,
    "href": "#",
    "text": "(Default) False"
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "wrap": true,
    "href": "#",
    "text": "True [Multiline]"
  },
  decorators: [Story => <div style={{
    width: '2ch'
  }}>
        <Story />
      </div>]
}`,...t.parameters?.docs?.source}}};const u=["DefaultFalse","TrueMultiline"];export{r as DefaultFalse,t as TrueMultiline,u as __namedExportsOrder,p as default};
