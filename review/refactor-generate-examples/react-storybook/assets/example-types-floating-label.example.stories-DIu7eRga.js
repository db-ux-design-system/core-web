import{j as r}from"./jsx-runtime-u17CrQMm.js";import{D as a}from"./input-CZfMhmXc.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./constants-CD69XpC7.js";import"./form-components-B5fJjToM.js";import"./infotext-CZi0xQss.js";const{fn:T}=__STORYBOOK_MODULE_TEST__,I={title:"Components/DBInput/Example - Types - Floating Label",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},variant:{control:"select",options:["above","floating"]},value:{control:"text"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},disabled:{control:"boolean"},readOnly:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},minLength:{control:"number"},maxLength:{control:"number"},type:{control:"select",options:["color","date","datetime-local","email","file","hidden","month","number","password","range","search","tel","text","time","url","week"]},min:{control:"text"},max:{control:"text"},step:{control:"text"},dataList:{control:"object"},dataListId:{control:"text"},placeholder:{control:"text"},name:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},size:{control:"number"},pattern:{control:"text"},accept:{control:"text"},multiple:{control:"boolean"},enterkeyhint:{control:"select",options:["enter","done","go","next","previous","search","send"]},inputmode:{control:"select",options:["none","text","decimal","numeric","tel","search","email","url"]},autocomplete:{control:"text"},messageIcon:{control:"text"},messageSize:{control:"select",options:["small","medium"]},validMessageSize:{control:"select",options:["small","medium"]},invalidMessageSize:{control:"select",options:["small","medium"]},fieldSizing:{control:"select",options:["fixed","content"]},id:{control:"text"},autofocus:{control:"boolean"}}},t={args:{label:"Label",variant:"floating",placeholder:"(Default) Text"},render:e=>r.jsx(a,{...e})},o={args:{label:"Label",type:"password",variant:"floating",placeholder:"Password"},render:e=>r.jsx(a,{...e})},n={args:{label:"Label",type:"search",variant:"floating",placeholder:"Search"},render:e=>r.jsx(a,{...e})},l={args:{label:"Label",type:"email",variant:"floating",placeholder:"E-Mail"},render:e=>r.jsx(a,{...e})},s={args:{label:"Label",type:"tel",variant:"floating",placeholder:"Tel"},render:e=>r.jsx(a,{...e})},i={args:{label:"Label",type:"url",variant:"floating",placeholder:"URL"},render:e=>r.jsx(a,{...e})},c={args:{label:"Label",type:"date",variant:"floating",placeholder:"Date"},render:e=>r.jsx(a,{...e})},p={args:{label:"Label",type:"datetime-local",variant:"floating",placeholder:"Datetime Local"},render:e=>r.jsx(a,{...e})},d={args:{label:"Label",type:"month",variant:"floating",placeholder:"Month"},render:e=>r.jsx(a,{...e})},m={args:{label:"Label",type:"time",variant:"floating",placeholder:"Time"},render:e=>r.jsx(a,{...e})},g={args:{label:"Label",type:"week",variant:"floating",placeholder:"Week"},render:e=>r.jsx(a,{...e})},u={args:{label:"Label",variant:"floating",placeholder:"Datalist",dataList:["Test 1","Test 2"]},render:e=>r.jsx(a,{...e})},b={args:{label:"Label",type:"file",variant:"floating",placeholder:"File"},render:e=>r.jsx(a,{...e})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "variant": "floating",
    "placeholder": "(Default) Text"
  },
  render: (properties: any) => <DBInput {...properties} />
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "type": "password",
    "variant": "floating",
    "placeholder": "Password"
  },
  render: (properties: any) => <DBInput {...properties} />
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "type": "search",
    "variant": "floating",
    "placeholder": "Search"
  },
  render: (properties: any) => <DBInput {...properties} />
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "type": "email",
    "variant": "floating",
    "placeholder": "E-Mail"
  },
  render: (properties: any) => <DBInput {...properties} />
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "type": "tel",
    "variant": "floating",
    "placeholder": "Tel"
  },
  render: (properties: any) => <DBInput {...properties} />
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "type": "url",
    "variant": "floating",
    "placeholder": "URL"
  },
  render: (properties: any) => <DBInput {...properties} />
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "type": "date",
    "variant": "floating",
    "placeholder": "Date"
  },
  render: (properties: any) => <DBInput {...properties} />
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "type": "datetime-local",
    "variant": "floating",
    "placeholder": "Datetime Local"
  },
  render: (properties: any) => <DBInput {...properties} />
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "type": "month",
    "variant": "floating",
    "placeholder": "Month"
  },
  render: (properties: any) => <DBInput {...properties} />
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "type": "time",
    "variant": "floating",
    "placeholder": "Time"
  },
  render: (properties: any) => <DBInput {...properties} />
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "type": "week",
    "variant": "floating",
    "placeholder": "Week"
  },
  render: (properties: any) => <DBInput {...properties} />
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "variant": "floating",
    "placeholder": "Datalist",
    "dataList": ['Test 1', 'Test 2']
  },
  render: (properties: any) => <DBInput {...properties} />
}`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "type": "file",
    "variant": "floating",
    "placeholder": "File"
  },
  render: (properties: any) => <DBInput {...properties} />
}`,...b.parameters?.docs?.source}}};const B=["DefaultText","Password","Search","EMail","Tel","URL","Date","DatetimeLocal","Month","Time","Week","Datalist","File"];export{u as Datalist,c as Date,p as DatetimeLocal,t as DefaultText,l as EMail,b as File,d as Month,o as Password,n as Search,s as Tel,m as Time,i as URL,g as Week,B as __namedExportsOrder,I as default};
