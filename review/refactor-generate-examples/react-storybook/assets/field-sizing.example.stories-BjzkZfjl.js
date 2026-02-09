import{j as o}from"./jsx-runtime-u17CrQMm.js";import{D as a}from"./textarea-u_BYpwTf.js";import"./index-OxcJkKaM.js";import"./iframe-Duf2yS0l.js";import"./preload-helper-D8o24SmT.js";import"./constants-BqjZCLvV.js";import"./form-components-DAXh6kxU.js";import"./infotext-DSB5wS-D.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,g={title:"Components/DBTextarea/Field Sizing",component:a,render:e=>o.jsx(a,{...e,children:e.children}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},variant:{control:"text"},value:{control:"text"},showLabel:{control:"boolean"},showMessage:{control:"boolean"},message:{control:"text"},disabled:{control:"boolean"},readOnly:{control:"text"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},rows:{control:"text"},showResizer:{control:"boolean"},fieldSizing:{control:"text"}}},t={args:{label:"Label",fieldSizing:"fixed",placeholder:"(Default) Fixed"},decorators:[e=>o.jsx("div",{style:{width:"300px"},children:o.jsx(e,{})})]},r={args:{label:"Label",fieldSizing:"content",placeholder:"Content"},decorators:[e=>o.jsx("div",{style:{width:"300px"},children:o.jsx(e,{})})]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "fieldSizing": "fixed",
    "placeholder": "(Default) Fixed"
  },
  decorators: [Story => <div style={{
    width: '300px'
  }}>
        <Story />
      </div>]
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "fieldSizing": "content",
    "placeholder": "Content"
  },
  decorators: [Story => <div style={{
    width: '300px'
  }}>
        <Story />
      </div>]
}`,...r.parameters?.docs?.source}}};const b=["DefaultFixed","Content"];export{r as Content,t as DefaultFixed,b as __namedExportsOrder,g as default};
