import{j as l}from"./jsx-runtime-u17CrQMm.js";import{D as r}from"./input-CZfMhmXc.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./constants-CD69XpC7.js";import"./form-components-B5fJjToM.js";import"./infotext-CZi0xQss.js";const{fn:h}=__STORYBOOK_MODULE_TEST__,g={title:"Components/DBInput/Datalist and Typeahead Examples",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},variant:{control:"select",options:["above","floating"]},value:{control:"text"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},disabled:{control:"boolean"},readOnly:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},minLength:{control:"number"},maxLength:{control:"number"},type:{control:"select",options:["color","date","datetime-local","email","file","hidden","month","number","password","range","search","tel","text","time","url","week"]},min:{control:"text"},max:{control:"text"},step:{control:"text"},dataList:{control:"object"},dataListId:{control:"text"},placeholder:{control:"text"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},size:{control:"number"},pattern:{control:"text"},accept:{control:"text"},multiple:{control:"boolean"},enterkeyhint:{control:"select",options:["enter","done","go","next","previous","search","send"]},inputmode:{control:"select",options:["none","text","decimal","numeric","tel","search","email","url"]},autocomplete:{control:"text"},messageIcon:{control:"text"},messageSize:{control:"select",options:["small","medium"]},validMessageSize:{control:"select",options:["small","medium"]},invalidMessageSize:{control:"select",options:["small","medium"]},fieldSizing:{control:"select",options:["fixed","content"]},id:{control:"text"},autofocus:{control:"boolean"}}},t={args:{label:"Search Cities",placeholder:"Type to search...",variant:"floating",dataList:[{value:"test1",label:"Test 1"},{value:"test2",label:"Test 2"}]},render:e=>l.jsx(r,{...e})},o={args:{label:"Search Products",placeholder:"Regular Variant with Datalist",dataList:[{value:"test1",label:"Test 1"},{value:"test2",label:"Test 2"}]},render:e=>l.jsx(r,{...e})},a={args:{label:"Search Stations",placeholder:"Type to search...",variant:"floating",type:"search",icon:"magnifying_glass",dataList:["Test 1","Test 2"],showIcon:!0},render:e=>l.jsx(r,{...e})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Search Cities",
    "placeholder": "Type to search...",
    "variant": "floating",
    "dataList": [{
      value: 'test1',
      label: 'Test 1'
    }, {
      value: 'test2',
      label: 'Test 2'
    }]
  },
  render: (properties: any) => <DBInput {...properties} />
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Search Products",
    "placeholder": "Regular Variant with Datalist",
    "dataList": [{
      value: 'test1',
      label: 'Test 1'
    }, {
      value: 'test2',
      label: 'Test 2'
    }]
  },
  render: (properties: any) => <DBInput {...properties} />
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Search Stations",
    "placeholder": "Type to search...",
    "variant": "floating",
    "type": "search",
    "icon": "magnifying_glass",
    "dataList": ['Test 1', 'Test 2'],
    "showIcon": true
  },
  render: (properties: any) => <DBInput {...properties} />
}`,...a.parameters?.docs?.source}}};const b=["SimpleStringList","RegularVariantwithDatalist","WithSearchIcon"];export{o as RegularVariantwithDatalist,t as SimpleStringList,a as WithSearchIcon,b as __namedExportsOrder,g as default};
