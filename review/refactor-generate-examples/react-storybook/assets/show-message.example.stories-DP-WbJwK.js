import{j as o}from"./jsx-runtime-u17CrQMm.js";import{D as s}from"./select-DBn9l7Jh.js";import"./index-DWyID0P5.js";import"./iframe-Df497cqR.js";import"./preload-helper-D8o24SmT.js";import"./constants-Cg50toCJ.js";import"./infotext-BzCIjnOG.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,v={title:"Components/DBSelect/Show Message",component:s,render:e=>o.jsx(s,{...e,children:e.children}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"text"},label:{control:"text"},placeholder:{control:"text"},variant:{control:"text"},value:{control:"text"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},disabled:{control:"boolean"},icon:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"}}},t={args:{options:[{value:"Option 1"},{value:"Option 2"},{value:"Option 3"},{value:"Option 4"},{value:"Option 5"}],showMessage:!1,label:"Label",message:"Message",placeholder:"(Default) False"},decorators:[e=>o.jsx("div",{style:{width:"300px"},children:o.jsx(e,{})})]},a={args:{options:[{value:"Option 1"},{value:"Option 2"},{value:"Option 3"},{value:"Option 4"},{value:"Option 5"}],showMessage:!0,label:"Label",message:"Message",placeholder:"True"},decorators:[e=>o.jsx("div",{style:{width:"300px"},children:o.jsx(e,{})})]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
    "showMessage": false,
    "label": "Label",
    "message": "Message",
    "placeholder": "(Default) False"
  },
  decorators: [Story => <div style={{
    width: '300px'
  }}>
        <Story />
      </div>]
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
    "showMessage": true,
    "label": "Label",
    "message": "Message",
    "placeholder": "True"
  },
  decorators: [Story => <div style={{
    width: '300px'
  }}>
        <Story />
      </div>]
}`,...a.parameters?.docs?.source}}};const m=["DefaultFalse","True"];export{t as DefaultFalse,a as True,m as __namedExportsOrder,v as default};
