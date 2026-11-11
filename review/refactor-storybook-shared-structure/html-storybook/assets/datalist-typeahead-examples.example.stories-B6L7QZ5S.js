import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./input-Dfdbagki.js";var a=t({RegularVariantwithDatalist:()=>u,SimpleStringList:()=>l,WithSearchIcon:()=>d,__namedExportsOrder:()=>f,default:()=>c}),o,s,c,l,u,d,f;function p(){return(p=e((()=>{r(),o=n(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBInput/Datalist and Typeahead Examples`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{label:{control:`text`},variant:{control:`select`,options:[`above`,`floating`]},value:{control:`text`},showLabel:{control:`boolean`},message:{control:`text`},showMessage:{control:`boolean`},disabled:{control:`boolean`},readOnly:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},invalidMessage:{control:`text`},validMessage:{control:`text`},required:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},showIcon:{control:`boolean`},showIconLeading:{control:`boolean`},showIconTrailing:{control:`boolean`},minLength:{control:`number`},maxLength:{control:`number`},type:{control:`select`,options:[`color`,`date`,`datetime-local`,`email`,`file`,`hidden`,`month`,`number`,`password`,`range`,`search`,`tel`,`text`,`time`,`url`,`week`]},min:{control:`text`},max:{control:`text`},step:{control:`text`},dataList:{control:`object`},dataListId:{control:`text`},placeholder:{control:`text`},name:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},size:{control:`number`},pattern:{control:`text`},accept:{control:`text`},multiple:{control:`boolean`},enterkeyhint:{control:`select`,options:[`enter`,`done`,`go`,`next`,`previous`,`search`,`send`]},inputmode:{control:`select`,options:[`none`,`text`,`decimal`,`numeric`,`tel`,`search`,`email`,`url`]},autocomplete:{control:`text`},messageIcon:{control:`text`},messageSize:{control:`select`,options:[`small`,`medium`]},validMessageSize:{control:`select`,options:[`small`,`medium`]},invalidMessageSize:{control:`select`,options:[`small`,`medium`]},fieldSizing:{control:`select`,options:[`fixed`,`content`]},id:{control:`text`},autofocus:{control:`boolean`}}},l={args:{label:`Search Cities`,placeholder:`Type to search...`,variant:`floating`,dataList:[{value:`test1`,label:`Test 1`},{value:`test2`,label:`Test 2`}]},render:e=>(0,o.jsx)(i,{...e})},u={args:{label:`Search Products`,placeholder:`Regular Variant with Datalist`,dataList:[{value:`test1`,label:`Test 1`},{value:`test2`,label:`Test 2`}]},render:e=>(0,o.jsx)(i,{...e})},d={args:{label:`Search Stations`,placeholder:`Type to search...`,variant:`floating`,type:`search`,icon:`magnifying_glass`,dataList:[`Test 1`,`Test 2`],showIcon:!0},render:e=>(0,o.jsx)(i,{...e})},f=[`SimpleStringList`,`RegularVariantwithDatalist`,`WithSearchIcon`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}}})))()}export{p as a,a as i,l as n,d as r,u as t};