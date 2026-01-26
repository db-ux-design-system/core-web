import{j as a}from"./jsx-runtime-u17CrQMm.js";import{D as i}from"./select-DCYjyEAL.js";import"./index-B7G67QUq.js";import"./iframe-CE0YVAyP.js";import"./preload-helper-D8o24SmT.js";import"./constants-Cg50toCJ.js";import"./form-components-CNqjE7Ko.js";import"./infotext-8jqeFDMI.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,x={title:"Components/DBSelect/Validation",component:i,render:e=>a.jsx(i,{...e,children:e.children}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"text"},label:{control:"text"},placeholder:{control:"text"},variant:{control:"text"},value:{control:"text"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},disabled:{control:"boolean"},icon:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"}}},o={args:{options:[{value:"Option 1"},{value:"Option 2"},{value:"Option 3"},{value:"Option 4"},{value:"Option 5"}],label:"Label",validation:"no-validation",placeholder:"(Default) No validation"},decorators:[e=>a.jsx("div",{style:{width:"300px"},children:a.jsx(e,{})})]},t={args:{options:[{value:"Option 1"},{value:"Option 2"},{value:"Option 3"},{value:"Option 4"},{value:"Option 5"}],label:"Label",validation:"invalid",invalidMessage:"Invalid Message",placeholder:"Invalid"},decorators:[e=>a.jsx("div",{style:{width:"300px"},children:a.jsx(e,{})})]},l={args:{options:[{value:"Valid",selected:!0},{value:"Option 2"}],label:"Label",validation:"valid",validMessage:"Valid message",placeholder:"Valid"},decorators:[e=>a.jsx("div",{style:{width:"300px"},children:a.jsx(e,{})})]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
    "label": "Label",
    "validation": "no-validation",
    "placeholder": "(Default) No validation"
  },
  decorators: [Story => <div style={{
    width: '300px'
  }}>
        <Story />
      </div>]
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
    "label": "Label",
    "validation": "invalid",
    "invalidMessage": "Invalid Message",
    "placeholder": "Invalid"
  },
  decorators: [Story => <div style={{
    width: '300px'
  }}>
        <Story />
      </div>]
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "options": [{
      value: 'Valid',
      selected: true
    }, {
      value: 'Option 2'
    }],
    "label": "Label",
    "validation": "valid",
    "validMessage": "Valid message",
    "placeholder": "Valid"
  },
  decorators: [Story => <div style={{
    width: '300px'
  }}>
        <Story />
      </div>]
}`,...l.parameters?.docs?.source}}};const O=["DefaultNovalidation","Invalid","Valid"];export{o as DefaultNovalidation,t as Invalid,l as Valid,O as __namedExportsOrder,x as default};
