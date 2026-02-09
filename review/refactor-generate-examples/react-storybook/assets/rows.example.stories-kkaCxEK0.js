import{j as o}from"./jsx-runtime-u17CrQMm.js";import{D as a}from"./textarea-u_BYpwTf.js";import"./index-OxcJkKaM.js";import"./iframe-Duf2yS0l.js";import"./preload-helper-D8o24SmT.js";import"./constants-BqjZCLvV.js";import"./form-components-DAXh6kxU.js";import"./infotext-DSB5wS-D.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,x={title:"Components/DBTextarea/Rows",component:a,render:e=>o.jsx(a,{...e,children:e.children}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},variant:{control:"text"},value:{control:"text"},showLabel:{control:"boolean"},showMessage:{control:"boolean"},message:{control:"text"},disabled:{control:"boolean"},readOnly:{control:"text"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},rows:{control:"text"},showResizer:{control:"boolean"},fieldSizing:{control:"text"}}},t={args:{label:"(Default) 4 Rows",value:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",placeholder:"(Default) 4 Rows"},decorators:[e=>o.jsx("div",{style:{width:"328px"},children:o.jsx(e,{})})]},r={args:{rows:8,label:"Custom Example 8 Rows",value:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",placeholder:"Custom"},decorators:[e=>o.jsx("div",{style:{width:"328px"},children:o.jsx(e,{})})]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "(Default) 4 Rows",
    "value": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    "placeholder": "(Default) 4 Rows"
  },
  decorators: [Story => <div style={{
    width: '328px'
  }}>
        <Story />
      </div>]
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "rows": 8,
    "label": "Custom Example 8 Rows",
    "value": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    "placeholder": "Custom"
  },
  decorators: [Story => <div style={{
    width: '328px'
  }}>
        <Story />
      </div>]
}`,...r.parameters?.docs?.source}}};const v=["Default4Rows","Custom"];export{r as Custom,t as Default4Rows,v as __namedExportsOrder,x as default};
