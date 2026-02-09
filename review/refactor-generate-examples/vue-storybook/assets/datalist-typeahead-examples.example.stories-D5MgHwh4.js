import{_ as r}from"./input-CODHB90g.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./constants-qyp1P7vr.js";import"./index-B493XNFi.js";import"./form-components-DlJa7Tu6.js";import"./infotext-C1MSMu4c.js";const{fn:u}=__STORYBOOK_MODULE_TEST__,m={title:"Components/DBInput/Datalist and Typeahead Examples",component:r,render:o=>({components:{DBInput:r},setup(){return{args:o}},template:`
      <DBInput v-bind="args">
      ${o.default}
      </DBInput>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},variant:{control:"text"},value:{control:"text"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},disabled:{control:"boolean"},readOnly:{control:"text"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},icon:{control:"text"},showIcon:{control:"boolean"},iconTrailing:{control:"text"},showIconTrailing:{control:"boolean"},minLength:{control:"text"},maxLength:{control:"text"},type:{control:"text"},min:{control:"text"},max:{control:"text"},dataList:{control:"text"},placeholder:{control:"text"}}},t={args:{default:"",dataList:[{value:"test1",label:"Test 1"},{value:"test2",label:"Test 2"}],label:"Search Cities",placeholder:"Type to search...",variant:"floating"}},e={args:{default:"",dataList:[{value:"test1",label:"Test 1"},{value:"test2",label:"Test 2"}],label:"Search Products",placeholder:"Regular Variant with Datalist"}},a={args:{default:"",dataList:["Test 1","Test 2"],showIcon:!0,label:"Search Stations",placeholder:"Type to search...",variant:"floating",type:"search",icon:"magnifying_glass"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
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
    default: "",
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
    default: "",
    "dataList": ['Test 1', 'Test 2'],
    "showIcon": true,
    "label": "Search Stations",
    "placeholder": "Type to search...",
    "variant": "floating",
    "type": "search",
    "icon": "magnifying_glass"
  }
}`,...a.parameters?.docs?.source}}};const h=["SimpleStringList","RegularVariantwithDatalist","WithSearchIcon"];export{e as RegularVariantwithDatalist,t as SimpleStringList,a as WithSearchIcon,h as __namedExportsOrder,m as default};
