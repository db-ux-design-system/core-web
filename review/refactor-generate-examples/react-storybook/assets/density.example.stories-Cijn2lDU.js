import{j as t}from"./jsx-runtime-u17CrQMm.js";import{D as o}from"./divider-D5n78HEs.js";import"./index-OxcJkKaM.js";import"./iframe-Duf2yS0l.js";import"./preload-helper-D8o24SmT.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBDivider/Density",component:o,render:r=>t.jsx(o,{...r,children:r.children}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{width:{control:"text"},variant:{control:"text"},emphasis:{control:"text"}}},e={args:{"data-density":"functional",width:"full"},decorators:[r=>t.jsx("div",{style:{width:"200px"},children:t.jsx(r,{})})]},s={args:{"data-density":"regular",width:"full"},decorators:[r=>t.jsx("div",{style:{width:"200px"},children:t.jsx(r,{})})]},a={args:{"data-density":"expressive",width:"full"},decorators:[r=>t.jsx("div",{style:{width:"200px"},children:t.jsx(r,{})})]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "width": "full"
  },
  decorators: [Story => <div style={{
    width: '200px'
  }}>
        <Story />
      </div>]
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "width": "full"
  },
  decorators: [Story => <div style={{
    width: '200px'
  }}>
        <Story />
      </div>]
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "width": "full"
  },
  decorators: [Story => <div style={{
    width: '200px'
  }}>
        <Story />
      </div>]
}`,...a.parameters?.docs?.source}}};const m=["Functional","DefaultRegular","Expressive"];export{s as DefaultRegular,a as Expressive,e as Functional,m as __namedExportsOrder,u as default};
