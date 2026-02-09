import{j as b}from"./jsx-runtime-u17CrQMm.js";import{D as i}from"./input-C0ADyTR3.js";import"./index-OxcJkKaM.js";import"./iframe-Duf2yS0l.js";import"./preload-helper-D8o24SmT.js";import"./constants-BqjZCLvV.js";import"./form-components-DAXh6kxU.js";import"./infotext-DSB5wS-D.js";const{fn:D}=__STORYBOOK_MODULE_TEST__,w={title:"Components/DBInput/Example - Types with min and max",component:i,render:d=>b.jsx(i,{...d,children:d.children}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},variant:{control:"text"},value:{control:"text"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},disabled:{control:"boolean"},readOnly:{control:"text"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},icon:{control:"text"},showIcon:{control:"boolean"},iconTrailing:{control:"text"},showIconTrailing:{control:"boolean"},minLength:{control:"text"},maxLength:{control:"text"},type:{control:"text"},min:{control:"text"},max:{control:"text"},dataList:{control:"text"},placeholder:{control:"text"}}},e={args:{label:"Label",placeholder:"(Default) Text"}},a={args:{label:"Label",type:"password",placeholder:"Password"}},r={args:{label:"Label",type:"search",placeholder:"Search"}},o={args:{label:"Label",type:"email",placeholder:"E-Mail"}},t={args:{label:"Label",type:"tel",placeholder:"Tel"}},l={args:{label:"Label",type:"url",placeholder:"URL"}},s={args:{label:"Label",type:"date",min:"2023-01-01",max:"2030-12-31",placeholder:"Date"}},n={args:{label:"Label",type:"datetime-local",min:"2023-01-01T00:00",max:"2030-12-31T23:59",placeholder:"Datetime Local"}},c={args:{label:"Label",type:"month",min:"2023-01",max:"2030-12",placeholder:"Month"}},p={args:{label:"Label",type:"time",min:"00:00",max:"23:59",placeholder:"Time"}},m={args:{label:"Label",type:"week",min:"2023-W01",max:"2030-W52",placeholder:"Week"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "placeholder": "(Default) Text"
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "type": "password",
    "placeholder": "Password"
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "type": "search",
    "placeholder": "Search"
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "type": "email",
    "placeholder": "E-Mail"
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "type": "tel",
    "placeholder": "Tel"
  }
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "type": "url",
    "placeholder": "URL"
  }
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "type": "date",
    "min": "2023-01-01",
    "max": "2030-12-31",
    "placeholder": "Date"
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "type": "datetime-local",
    "min": "2023-01-01T00:00",
    "max": "2030-12-31T23:59",
    "placeholder": "Datetime Local"
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "type": "month",
    "min": "2023-01",
    "max": "2030-12",
    "placeholder": "Month"
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "type": "time",
    "min": "00:00",
    "max": "23:59",
    "placeholder": "Time"
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "type": "week",
    "min": "2023-W01",
    "max": "2030-W52",
    "placeholder": "Week"
  }
}`,...m.parameters?.docs?.source}}};const M=["DefaultText","Password","Search","EMail","Tel","URL","Date","DatetimeLocal","Month","Time","Week"];export{s as Date,n as DatetimeLocal,e as DefaultText,o as EMail,c as Month,a as Password,r as Search,t as Tel,p as Time,l as URL,m as Week,M as __namedExportsOrder,w as default};
