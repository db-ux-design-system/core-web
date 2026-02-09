import{j as o}from"./jsx-runtime-u17CrQMm.js";import{D as a}from"./select-CGbKma3t.js";import"./index-OxcJkKaM.js";import"./iframe-Duf2yS0l.js";import"./preload-helper-D8o24SmT.js";import"./constants-BqjZCLvV.js";import"./form-components-DAXh6kxU.js";import"./infotext-DSB5wS-D.js";const{fn:v}=__STORYBOOK_MODULE_TEST__,m={title:"Components/DBSelect/Required",component:a,render:e=>o.jsx(a,{...e,children:e.children}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"text"},label:{control:"text"},placeholder:{control:"text"},variant:{control:"text"},value:{control:"text"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},disabled:{control:"boolean"},icon:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"}}},t={args:{options:[{value:"Option 1"},{value:"Option 2"},{value:"Option 3"},{value:"Option 4"},{value:"Option 5"}],required:!1,label:"Label",placeholder:"(Default) False"},decorators:[e=>o.jsx("div",{style:{width:"300px"},children:o.jsx(e,{})})]},r={args:{options:[{value:"Option 1"},{value:"Option 2"},{value:"Option 3"},{value:"Option 4"},{value:"Option 5"}],required:!0,label:"Label",placeholder:"True"},decorators:[e=>o.jsx("div",{style:{width:"300px"},children:o.jsx(e,{})})]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "options": [{
      value: 'Option 1'
    }, {
      value: 'Option 2'
    }, {
      value: 'Option 3'
    }, {
      value: 'Option 4'
    }, {
      value: 'Option 5'
    }],
    "required": false,
    "label": "Label",
    "placeholder": "(Default) False"
  },
  decorators: [Story => <div style={{
    width: '300px'
  }}>
        <Story />
      </div>]
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "options": [{
      value: 'Option 1'
    }, {
      value: 'Option 2'
    }, {
      value: 'Option 3'
    }, {
      value: 'Option 4'
    }, {
      value: 'Option 5'
    }],
    "required": true,
    "label": "Label",
    "placeholder": "True"
  },
  decorators: [Story => <div style={{
    width: '300px'
  }}>
        <Story />
      </div>]
}`,...r.parameters?.docs?.source}}};const O=["DefaultFalse","True"];export{t as DefaultFalse,r as True,O as __namedExportsOrder,m as default};
