import{j as o}from"./jsx-runtime-u17CrQMm.js";import{D as l}from"./select-CGbKma3t.js";import"./index-OxcJkKaM.js";import"./iframe-Duf2yS0l.js";import"./preload-helper-D8o24SmT.js";import"./constants-BqjZCLvV.js";import"./form-components-DAXh6kxU.js";import"./infotext-DSB5wS-D.js";const{fn:v}=__STORYBOOK_MODULE_TEST__,m={title:"Components/DBSelect/Variant",component:l,render:e=>o.jsx(l,{...e,children:e.children}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"text"},label:{control:"text"},placeholder:{control:"text"},variant:{control:"text"},value:{control:"text"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},disabled:{control:"boolean"},icon:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"}}},t={args:{options:[{value:"Option 1"},{value:"Option 2"},{value:"Option 3"},{value:"Option 4"},{value:"Option 5"}],label:"Label",placeholder:"(Default) Above"},decorators:[e=>o.jsx("div",{style:{width:"300px"},children:o.jsx(e,{})})]},a={args:{options:[{value:"Floating",selected:!0},{value:"Option 2"}],label:"Label",variant:"floating",value:"Floating",placeholder:"Floating"},decorators:[e=>o.jsx("div",{style:{width:"300px"},children:o.jsx(e,{})})]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
    "placeholder": "(Default) Above"
  },
  decorators: [Story => <div style={{
    width: '300px'
  }}>
        <Story />
      </div>]
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "options": [{
      value: 'Floating',
      selected: true
    }, {
      value: 'Option 2'
    }],
    "label": "Label",
    "variant": "floating",
    "value": "Floating",
    "placeholder": "Floating"
  },
  decorators: [Story => <div style={{
    width: '300px'
  }}>
        <Story />
      </div>]
}`,...a.parameters?.docs?.source}}};const x=["DefaultAbove","FloatingLabel"];export{t as DefaultAbove,a as FloatingLabel,x as __namedExportsOrder,m as default};
