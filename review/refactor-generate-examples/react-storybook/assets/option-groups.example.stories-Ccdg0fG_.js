import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as l}from"./select-hK0XGtfp.js";import"./index-B7G67QUq.js";import"./iframe-C_W4KvoT.js";import"./preload-helper-D8o24SmT.js";import"./constants-Cg50toCJ.js";import"./form-components-CNqjE7Ko.js";import"./infotext-wasaGmnv.js";const{fn:v}=__STORYBOOK_MODULE_TEST__,g={title:"Components/DBSelect/Option Groups",component:l,render:o=>e.jsx(l,{...o,children:o.children}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"text"},label:{control:"text"},placeholder:{control:"text"},variant:{control:"text"},value:{control:"text"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},disabled:{control:"boolean"},icon:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"}}},t={args:{options:[{label:"Group 1",value:"",options:[{value:"Option 1"},{value:"Option 2"}]},{label:"Group 2",value:"",options:[{value:"Option 3"},{value:"Option 4"}]}],label:"Label",placeholder:"Using optgroups"},decorators:[o=>e.jsx("div",{style:{width:"300px"},children:e.jsx(o,{})})]},r={args:{options:[{value:"Single Option"},{label:"Grouped Options",value:"",options:[{value:"Group Option 1"},{value:"Group Option 2"}]},{value:"Another Single Option"}],label:"Label",placeholder:"Mixed options and groups"},decorators:[o=>e.jsx("div",{style:{width:"300px"},children:e.jsx(o,{})})]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "options": [{
      label: 'Group 1',
      value: '',
      options: [{
        value: 'Option 1'
      }, {
        value: 'Option 2'
      }]
    }, {
      label: 'Group 2',
      value: '',
      options: [{
        value: 'Option 3'
      }, {
        value: 'Option 4'
      }]
    }],
    "label": "Label",
    "placeholder": "Using optgroups"
  },
  decorators: [Story => <div style={{
    width: '300px'
  }}>
        <Story />
      </div>]
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "options": [{
      value: 'Single Option'
    }, {
      label: 'Grouped Options',
      value: '',
      options: [{
        value: 'Group Option 1'
      }, {
        value: 'Group Option 2'
      }]
    }, {
      value: 'Another Single Option'
    }],
    "label": "Label",
    "placeholder": "Mixed options and groups"
  },
  decorators: [Story => <div style={{
    width: '300px'
  }}>
        <Story />
      </div>]
}`,...r.parameters?.docs?.source}}};const x=["Usingoptgroups","Mixedoptionsandgroups"];export{r as Mixedoptionsandgroups,t as Usingoptgroups,x as __namedExportsOrder,g as default};
