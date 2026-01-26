import{j as o}from"./jsx-runtime-u17CrQMm.js";import{D as l}from"./select-DCYjyEAL.js";import"./index-B7G67QUq.js";import"./iframe-CE0YVAyP.js";import"./preload-helper-D8o24SmT.js";import"./constants-Cg50toCJ.js";import"./form-components-CNqjE7Ko.js";import"./infotext-8jqeFDMI.js";const{fn:x}=__STORYBOOK_MODULE_TEST__,v={title:"Components/DBSelect/Content",component:l,render:e=>o.jsx(l,{...e,children:e.children}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"text"},label:{control:"text"},placeholder:{control:"text"},variant:{control:"text"},value:{control:"text"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},disabled:{control:"boolean"},icon:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"}}},t={args:{options:[{value:"Option 1"},{value:"Option 2"},{value:"Option 3"},{value:"Option 4"},{value:"Option 5"}],label:"Label",placeholder:"(Default) Text"},decorators:[e=>o.jsx("div",{style:{width:"300px"},children:o.jsx(e,{})})]},a={args:{options:[{value:"Option 1"},{value:"Option 2"},{value:"Option 3"},{value:"Option 4"},{value:"Option 5"}],label:"Label",icon:"x_placeholder",placeholder:"Text - Leading Icon"},decorators:[e=>o.jsx("div",{style:{width:"300px"},children:o.jsx(e,{})})]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
    "placeholder": "(Default) Text"
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
    "label": "Label",
    "icon": "x_placeholder",
    "placeholder": "Text - Leading Icon"
  },
  decorators: [Story => <div style={{
    width: '300px'
  }}>
        <Story />
      </div>]
}`,...a.parameters?.docs?.source}}};const m=["DefaultText","TextLeadingIcon"];export{t as DefaultText,a as TextLeadingIcon,m as __namedExportsOrder,v as default};
