import{j as a}from"./jsx-runtime-u17CrQMm.js";import{D as i}from"./select-DCYjyEAL.js";import"./index-B7G67QUq.js";import"./iframe-CE0YVAyP.js";import"./preload-helper-D8o24SmT.js";import"./constants-Cg50toCJ.js";import"./form-components-CNqjE7Ko.js";import"./infotext-8jqeFDMI.js";const{fn:b}=__STORYBOOK_MODULE_TEST__,x={title:"Components/DBSelect/Examples Floating Label",component:i,render:e=>a.jsx(i,{...e,children:e.children}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"text"},label:{control:"text"},placeholder:{control:"text"},variant:{control:"text"},value:{control:"text"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},disabled:{control:"boolean"},icon:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"}}},t={args:{options:[{value:"Option 1"},{value:"Option 2"},{value:"Option 3"},{value:"Option 4"},{value:"Option 5"}],label:"Label",variant:"floating",placeholder:"(Default) Empty"},decorators:[e=>a.jsx("div",{style:{width:"300px"},children:a.jsx(e,{})})]},o={args:{options:[{value:"Filled",selected:!0},{value:"Option 2"}],label:"Label",value:"Filled",variant:"floating",placeholder:"Filled"},decorators:[e=>a.jsx("div",{style:{width:"300px"},children:a.jsx(e,{})})]},l={args:{options:[{value:"Disabled",selected:!0},{value:"Option 2"}],disabled:!0,label:"Label",variant:"floating",value:"Disabled",placeholder:"Disabled"},decorators:[e=>a.jsx("div",{style:{width:"300px"},children:a.jsx(e,{})})]},r={args:{options:[{value:"Option 1"},{value:"Option 2"},{value:"Option 3"},{value:"Option 4"},{value:"Option 5"}],label:"Label",placeholder:"Invalid",variant:"floating",validation:"invalid",invalidMessage:"Invalid Message"},decorators:[e=>a.jsx("div",{style:{width:"300px"},children:a.jsx(e,{})})]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
    "variant": "floating",
    "placeholder": "(Default) Empty"
  },
  decorators: [Story => <div style={{
    width: '300px'
  }}>
        <Story />
      </div>]
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "options": [{
      value: 'Filled',
      selected: true
    }, {
      value: 'Option 2'
    }],
    "label": "Label",
    "value": "Filled",
    "variant": "floating",
    "placeholder": "Filled"
  },
  decorators: [Story => <div style={{
    width: '300px'
  }}>
        <Story />
      </div>]
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "options": [{
      value: 'Disabled',
      selected: true
    }, {
      value: 'Option 2'
    }],
    "disabled": true,
    "label": "Label",
    "variant": "floating",
    "value": "Disabled",
    "placeholder": "Disabled"
  },
  decorators: [Story => <div style={{
    width: '300px'
  }}>
        <Story />
      </div>]
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
    "placeholder": "Invalid",
    "variant": "floating",
    "validation": "invalid",
    "invalidMessage": "Invalid Message"
  },
  decorators: [Story => <div style={{
    width: '300px'
  }}>
        <Story />
      </div>]
}`,...r.parameters?.docs?.source}}};const g=["DefaultEmpty","Filled","Disabled","Invalid"];export{t as DefaultEmpty,l as Disabled,o as Filled,r as Invalid,g as __namedExportsOrder,x as default};
