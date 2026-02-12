import{j as t}from"./jsx-runtime-u17CrQMm.js";import{D as r}from"./select-CHH7Wk3C.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./constants-CD69XpC7.js";import"./form-components-B5fJjToM.js";import"./infotext-CZi0xQss.js";const{fn:v}=__STORYBOOK_MODULE_TEST__,m={title:"Components/DBSelect/Option Groups",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"object"},label:{control:"text"},placeholder:{control:"text"},variant:{control:"select",options:["above","floating"]},value:{control:"text"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},disabled:{control:"boolean"},showIcon:{control:"boolean"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},size:{control:"number"},multiple:{control:"boolean"},showEmptyOption:{control:"boolean"},autocomplete:{control:"text"},messageIcon:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClick:{action:"onClick"}}},o={args:{label:"Label",placeholder:"Using optgroups",options:[{label:"Group 1",value:"",options:[{value:"Option 1"},{value:"Option 2"}]},{label:"Group 2",value:"",options:[{value:"Option 3"},{value:"Option 4"}]}]},render:l=>t.jsx("div",{style:{width:"300px"},children:t.jsx(r,{...l})})},e={args:{label:"Label",placeholder:"Mixed options and groups",options:[{value:"Single Option"},{label:"Grouped Options",value:"",options:[{value:"Group Option 1"},{value:"Group Option 2"}]},{value:"Another Single Option"}]},render:l=>t.jsx("div",{style:{width:"300px"},children:t.jsx(r,{...l})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "placeholder": "Using optgroups",
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
    }]
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBSelect {...properties} /></div>
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "placeholder": "Mixed options and groups",
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
    }]
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBSelect {...properties} /></div>
}`,...e.parameters?.docs?.source}}};const b=["Usingoptgroups","Mixedoptionsandgroups"];export{e as Mixedoptionsandgroups,o as Usingoptgroups,b as __namedExportsOrder,m as default};
