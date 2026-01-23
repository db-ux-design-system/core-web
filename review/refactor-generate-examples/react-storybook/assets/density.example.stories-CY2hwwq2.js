import{j as o}from"./jsx-runtime-u17CrQMm.js";import{D as r}from"./select-BJlgnTKZ.js";import"./index-Dsuh0EgU.js";import"./iframe-OsirLNmu.js";import"./preload-helper-D8o24SmT.js";import"./constants-BI2mJmbL.js";import"./form-components-BQG4FEDn.js";import"./infotext-FcKXeHu2.js";const{fn:O}=__STORYBOOK_MODULE_TEST__,x={title:"Components/DBSelect/Density",component:r,render:e=>o.jsx(r,{...e,children:e.children}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"text"},label:{control:"text"},placeholder:{control:"text"},variant:{control:"text"},value:{control:"text"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},disabled:{control:"boolean"},icon:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"}}},t={args:{options:[{value:"Option 1"},{value:"Option 2"},{value:"Option 3"},{value:"Option 4"},{value:"Option 5"}],"data-density":"functional",label:"Label",placeholder:"Functional"},decorators:[e=>o.jsx("div",{style:{width:"300px"},children:o.jsx(e,{})})]},a={args:{options:[{value:"Option 1"},{value:"Option 2"},{value:"Option 3"},{value:"Option 4"},{value:"Option 5"}],"data-density":"regular",label:"Label",placeholder:"(Default) Regular"},decorators:[e=>o.jsx("div",{style:{width:"300px"},children:o.jsx(e,{})})]},l={args:{options:[{value:"Option 1"},{value:"Option 2"},{value:"Option 3"},{value:"Option 4"},{value:"Option 5"}],"data-density":"expressive",label:"Label",placeholder:"Expressive"},decorators:[e=>o.jsx("div",{style:{width:"300px"},children:o.jsx(e,{})})]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
    "data-density": "functional",
    "label": "Label",
    "placeholder": "Functional"
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
    "data-density": "regular",
    "label": "Label",
    "placeholder": "(Default) Regular"
  },
  decorators: [Story => <div style={{
    width: '300px'
  }}>
        <Story />
      </div>]
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
    "data-density": "expressive",
    "label": "Label",
    "placeholder": "Expressive"
  },
  decorators: [Story => <div style={{
    width: '300px'
  }}>
        <Story />
      </div>]
}`,...l.parameters?.docs?.source}}};const m=["Functional","DefaultRegular","Expressive"];export{a as DefaultRegular,l as Expressive,t as Functional,m as __namedExportsOrder,x as default};
