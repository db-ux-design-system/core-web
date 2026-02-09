import{j as s}from"./jsx-runtime-u17CrQMm.js";import{D as r}from"./input-C0ADyTR3.js";import"./index-OxcJkKaM.js";import"./iframe-Duf2yS0l.js";import"./preload-helper-D8o24SmT.js";import"./constants-BqjZCLvV.js";import"./form-components-DAXh6kxU.js";import"./infotext-DSB5wS-D.js";const{fn:g}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBInput/Datalist and Typeahead Examples",component:r,render:o=>s.jsx(r,{...o,children:o.children}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},variant:{control:"text"},value:{control:"text"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},disabled:{control:"boolean"},readOnly:{control:"text"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},icon:{control:"text"},showIcon:{control:"boolean"},iconTrailing:{control:"text"},showIconTrailing:{control:"boolean"},minLength:{control:"text"},maxLength:{control:"text"},type:{control:"text"},min:{control:"text"},max:{control:"text"},dataList:{control:"text"},placeholder:{control:"text"}}},t={args:{dataList:[{value:"test1",label:"Test 1"},{value:"test2",label:"Test 2"}],label:"Search Cities",placeholder:"Type to search...",variant:"floating"}},e={args:{dataList:[{value:"test1",label:"Test 1"},{value:"test2",label:"Test 2"}],label:"Search Products",placeholder:"Regular Variant with Datalist"}},a={args:{dataList:["Test 1","Test 2"],showIcon:!0,label:"Search Stations",placeholder:"Type to search...",variant:"floating",type:"search",icon:"magnifying_glass"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "dataList": [{
      value: 'test1',
      label: 'Test 1'
    }, {
      value: 'test2',
      label: 'Test 2'
    }],
    "label": "Search Cities",
    "placeholder": "Type to search...",
    "variant": "floating"
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "dataList": [{
      value: 'test1',
      label: 'Test 1'
    }, {
      value: 'test2',
      label: 'Test 2'
    }],
    "label": "Search Products",
    "placeholder": "Regular Variant with Datalist"
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "dataList": ['Test 1', 'Test 2'],
    "showIcon": true,
    "label": "Search Stations",
    "placeholder": "Type to search...",
    "variant": "floating",
    "type": "search",
    "icon": "magnifying_glass"
  }
}`,...a.parameters?.docs?.source}}};const x=["SimpleStringList","RegularVariantwithDatalist","WithSearchIcon"];export{e as RegularVariantwithDatalist,t as SimpleStringList,a as WithSearchIcon,x as __namedExportsOrder,u as default};
