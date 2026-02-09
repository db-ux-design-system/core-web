import{_ as g}from"./input-CODHB90g.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./constants-qyp1P7vr.js";import"./index-B493XNFi.js";import"./form-components-DlJa7Tu6.js";import"./infotext-C1MSMu4c.js";const{fn:T}=__STORYBOOK_MODULE_TEST__,D={title:"Components/DBInput/Example - Types - Floating Label",component:g,render:u=>({components:{DBInput:g},setup(){return{args:u}},template:`
      <DBInput v-bind="args">
      ${u.default}
      </DBInput>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},variant:{control:"text"},value:{control:"text"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},disabled:{control:"boolean"},readOnly:{control:"text"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},icon:{control:"text"},showIcon:{control:"boolean"},iconTrailing:{control:"text"},showIconTrailing:{control:"boolean"},minLength:{control:"text"},maxLength:{control:"text"},type:{control:"text"},min:{control:"text"},max:{control:"text"},dataList:{control:"text"},placeholder:{control:"text"}}},e={args:{default:"",label:"Label",variant:"floating",placeholder:"(Default) Text"}},a={args:{default:"",label:"Label",type:"password",variant:"floating",placeholder:"Password"}},t={args:{default:"",label:"Label",type:"search",variant:"floating",placeholder:"Search"}},r={args:{default:"",label:"Label",type:"email",variant:"floating",placeholder:"E-Mail"}},l={args:{default:"",label:"Label",type:"tel",variant:"floating",placeholder:"Tel"}},o={args:{default:"",label:"Label",type:"url",variant:"floating",placeholder:"URL"}},n={args:{default:"",label:"Label",type:"date",variant:"floating",placeholder:"Date"}},s={args:{default:"",label:"Label",type:"datetime-local",variant:"floating",placeholder:"Datetime Local"}},c={args:{default:"",label:"Label",type:"month",variant:"floating",placeholder:"Month"}},i={args:{default:"",label:"Label",type:"time",variant:"floating",placeholder:"Time"}},p={args:{default:"",label:"Label",type:"week",variant:"floating",placeholder:"Week"}},d={args:{default:"",dataList:["Test 1","Test 2"],label:"Label",variant:"floating",placeholder:"Datalist"}},m={args:{default:"",label:"Label",type:"file",variant:"floating",placeholder:"File"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "label": "Label",
    "variant": "floating",
    "placeholder": "(Default) Text"
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "label": "Label",
    "type": "password",
    "variant": "floating",
    "placeholder": "Password"
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "label": "Label",
    "type": "search",
    "variant": "floating",
    "placeholder": "Search"
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "label": "Label",
    "type": "email",
    "variant": "floating",
    "placeholder": "E-Mail"
  }
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "label": "Label",
    "type": "tel",
    "variant": "floating",
    "placeholder": "Tel"
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "label": "Label",
    "type": "url",
    "variant": "floating",
    "placeholder": "URL"
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "label": "Label",
    "type": "date",
    "variant": "floating",
    "placeholder": "Date"
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "label": "Label",
    "type": "datetime-local",
    "variant": "floating",
    "placeholder": "Datetime Local"
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "label": "Label",
    "type": "month",
    "variant": "floating",
    "placeholder": "Month"
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "label": "Label",
    "type": "time",
    "variant": "floating",
    "placeholder": "Time"
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "label": "Label",
    "type": "week",
    "variant": "floating",
    "placeholder": "Week"
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "dataList": ['Test 1', 'Test 2'],
    "label": "Label",
    "variant": "floating",
    "placeholder": "Datalist"
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "label": "Label",
    "type": "file",
    "variant": "floating",
    "placeholder": "File"
  }
}`,...m.parameters?.docs?.source}}};const S=["DefaultText","Password","Search","EMail","Tel","URL","Date","DatetimeLocal","Month","Time","Week","Datalist","File"];export{d as Datalist,n as Date,s as DatetimeLocal,e as DefaultText,r as EMail,m as File,c as Month,a as Password,t as Search,l as Tel,i as Time,o as URL,p as Week,S as __namedExportsOrder,D as default};
