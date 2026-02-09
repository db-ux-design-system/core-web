import{j as t}from"./jsx-runtime-u17CrQMm.js";import{D as a}from"./custom-select-DqMMWHiw.js";import"./index-OxcJkKaM.js";import"./iframe-Duf2yS0l.js";import"./preload-helper-D8o24SmT.js";import"./constants-BqjZCLvV.js";import"./form-components-DAXh6kxU.js";import"./button-CXbufVX4.js";import"./infotext-DSB5wS-D.js";import"./input-C0ADyTR3.js";const{fn:x}=__STORYBOOK_MODULE_TEST__,O={title:"Components/DBCustomSelect/Validation",component:a,render:o=>t.jsx(a,{...o,children:o.children}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"text"},label:{control:"text"},placeholder:{control:"text"},id:{control:"text"},multiple:{control:"text"},variant:{control:"text"},values:{control:"text"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},icon:{control:"text"},showIcon:{control:"boolean"},validation:{control:"text"},invalidMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},disabled:{control:"boolean"},formFieldWidth:{control:"text"},dropdownWidth:{control:"text"},placement:{control:"text"},selectedType:{control:"text"},showNoResults:{control:"boolean"},noResultsText:{control:"text"},showLoading:{control:"boolean"},loadingText:{control:"text"},showSearch:{control:"boolean"},showSelectAll:{control:"boolean"},showClearSelection:{control:"boolean"},removeTagsTexts:{control:"text"},searchValue:{control:"text"},selectedLabels:{control:"text"},transformSelectedLabels:{control:"text"},searchFilter:{control:"text"}}},i={args:{options:[{value:"Option 1",id:"miouzc0ec"},{value:"Option 2",id:"10dqnhil5"},{value:"Option 3",id:"10dqnhil4"},{value:"Option 4",id:"10dqnhil3"},{value:"Option 5",id:"10dqnhil2"}],validation:"no-validation",label:"(Default) No Validation",listLabel:"id-102061-(Default) No Validation"},decorators:[o=>t.jsx("div",{style:{width:"200px"},children:t.jsx(o,{})})]},e={args:{options:[{value:"Option 1",id:"miouzc0ec"},{value:"Option 2",id:"10dqnhil5"},{value:"Option 3",id:"10dqnhil4"},{value:"Option 4",id:"10dqnhil3"},{value:"Option 5",id:"10dqnhil2"}],validation:"invalid",invalidMessage:"Invalid Message",label:"Invalid",listLabel:"id-102062-Invalid"},decorators:[o=>t.jsx("div",{style:{width:"200px"},children:t.jsx(o,{})})]},l={args:{options:[{value:"Option 1",id:"miouzc0ec"},{value:"Option 2",id:"10dqnhil5"},{value:"Option 3",id:"10dqnhil4"},{value:"Option 4",id:"10dqnhil3"},{value:"Option 5",id:"10dqnhil2"}],validation:"valid",invalidMessage:"Valid Message",label:"Valid",listLabel:"id-102063-Valid"},decorators:[o=>t.jsx("div",{style:{width:"200px"},children:t.jsx(o,{})})]};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    "options": [{
      value: 'Option 1',
      id: 'miouzc0ec'
    }, {
      value: 'Option 2',
      id: '10dqnhil5'
    }, {
      value: 'Option 3',
      id: '10dqnhil4'
    }, {
      value: 'Option 4',
      id: '10dqnhil3'
    }, {
      value: 'Option 5',
      id: '10dqnhil2'
    }],
    "validation": "no-validation",
    "label": "(Default) No Validation",
    "listLabel": "id-102061-(Default) No Validation"
  },
  decorators: [Story => <div style={{
    width: '200px'
  }}>
        <Story />
      </div>]
}`,...i.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "options": [{
      value: 'Option 1',
      id: 'miouzc0ec'
    }, {
      value: 'Option 2',
      id: '10dqnhil5'
    }, {
      value: 'Option 3',
      id: '10dqnhil4'
    }, {
      value: 'Option 4',
      id: '10dqnhil3'
    }, {
      value: 'Option 5',
      id: '10dqnhil2'
    }],
    "validation": "invalid",
    "invalidMessage": "Invalid Message",
    "label": "Invalid",
    "listLabel": "id-102062-Invalid"
  },
  decorators: [Story => <div style={{
    width: '200px'
  }}>
        <Story />
      </div>]
}`,...e.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "options": [{
      value: 'Option 1',
      id: 'miouzc0ec'
    }, {
      value: 'Option 2',
      id: '10dqnhil5'
    }, {
      value: 'Option 3',
      id: '10dqnhil4'
    }, {
      value: 'Option 4',
      id: '10dqnhil3'
    }, {
      value: 'Option 5',
      id: '10dqnhil2'
    }],
    "validation": "valid",
    "invalidMessage": "Valid Message",
    "label": "Valid",
    "listLabel": "id-102063-Valid"
  },
  decorators: [Story => <div style={{
    width: '200px'
  }}>
        <Story />
      </div>]
}`,...l.parameters?.docs?.source}}};const b=["DefaultNoValidation","Invalid","Valid"];export{i as DefaultNoValidation,e as Invalid,l as Valid,b as __namedExportsOrder,O as default};
