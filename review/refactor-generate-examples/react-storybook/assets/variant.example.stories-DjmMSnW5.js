import{j as r}from"./jsx-runtime-u17CrQMm.js";import{D as o}from"./divider-D5n78HEs.js";import"./index-OxcJkKaM.js";import"./iframe-Duf2yS0l.js";import"./preload-helper-D8o24SmT.js";const{fn:n}=__STORYBOOK_MODULE_TEST__,p={title:"Components/DBDivider/Variant",component:o,render:t=>r.jsx(o,{...t,children:t.children}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{width:{control:"text"},variant:{control:"text"},emphasis:{control:"text"}}},e={args:{width:"full"},decorators:[t=>r.jsx("div",{style:{width:"200px"},children:r.jsx(t,{})})]},a={args:{variant:"vertical",width:"full"},decorators:[t=>r.jsx("div",{style:{height:"100px"},children:r.jsx(t,{})})]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full"
  },
  decorators: [Story => <div style={{
    width: '200px'
  }}>
        <Story />
      </div>]
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "vertical",
    "width": "full"
  },
  decorators: [Story => <div style={{
    height: '100px'
  }}>
        <Story />
      </div>]
}`,...a.parameters?.docs?.source}}};const m=["DefaultAdaptiveHorizontal","AdaptiveVertical"];export{a as AdaptiveVertical,e as DefaultAdaptiveHorizontal,m as __namedExportsOrder,p as default};
