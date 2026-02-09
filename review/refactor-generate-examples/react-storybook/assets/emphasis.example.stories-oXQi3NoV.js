import{j as t}from"./jsx-runtime-u17CrQMm.js";import{D as o}from"./divider-D5n78HEs.js";import"./index-OxcJkKaM.js";import"./iframe-Duf2yS0l.js";import"./preload-helper-D8o24SmT.js";const{fn:l}=__STORYBOOK_MODULE_TEST__,p={title:"Components/DBDivider/Emphasis",component:o,render:r=>t.jsx(o,{...r,children:r.children}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{width:{control:"text"},variant:{control:"text"},emphasis:{control:"text"}}},e={args:{width:"full"},decorators:[r=>t.jsx("div",{style:{width:"200px"},children:t.jsx(r,{})})]},s={args:{emphasis:"strong",width:"full"},decorators:[r=>t.jsx("div",{style:{width:"200px"},children:t.jsx(r,{})})]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full"
  },
  decorators: [Story => <div style={{
    width: '200px'
  }}>
        <Story />
      </div>]
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "emphasis": "strong",
    "width": "full"
  },
  decorators: [Story => <div style={{
    width: '200px'
  }}>
        <Story />
      </div>]
}`,...s.parameters?.docs?.source}}};const m=["DefaultWeak","Strong"];export{e as DefaultWeak,s as Strong,m as __namedExportsOrder,p as default};
