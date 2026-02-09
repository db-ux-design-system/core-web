import{_ as i}from"./input-CODHB90g.js";import"./iframe-D72awcMv.js";import"./preload-helper-_n2GBM2K.js";import"./constants-qyp1P7vr.js";import"./index-B493XNFi.js";import"./form-components-DlJa7Tu6.js";import"./infotext-C1MSMu4c.js";const{fn:y}=__STORYBOOK_MODULE_TEST__,T={title:"Components/DBInput/Example - Types with min and max",component:i,render:m=>({components:{DBInput:i},setup(){return{args:m}},template:`
      <DBInput v-bind="args">
      ${m.default}
      </DBInput>
    `}),parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},variant:{control:"text"},value:{control:"text"},showLabel:{control:"boolean"},message:{control:"text"},showMessage:{control:"boolean"},disabled:{control:"boolean"},readOnly:{control:"text"},validation:{control:"text"},invalidMessage:{control:"text"},validMessage:{control:"text"},required:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},icon:{control:"text"},showIcon:{control:"boolean"},iconTrailing:{control:"text"},showIconTrailing:{control:"boolean"},minLength:{control:"text"},maxLength:{control:"text"},type:{control:"text"},min:{control:"text"},max:{control:"text"},dataList:{control:"text"},placeholder:{control:"text"}}},e={args:{default:"",label:"Label",placeholder:"(Default) Text"}},a={args:{default:"",label:"Label",type:"password",placeholder:"Password"}},r={args:{default:"",label:"Label",type:"search",placeholder:"Search"}},t={args:{default:"",label:"Label",type:"email",placeholder:"E-Mail"}},o={args:{default:"",label:"Label",type:"tel",placeholder:"Tel"}},l={args:{default:"",label:"Label",type:"url",placeholder:"URL"}},n={args:{default:"",label:"Label",type:"date",min:"2023-01-01",max:"2030-12-31",placeholder:"Date"}},s={args:{default:"",label:"Label",type:"datetime-local",min:"2023-01-01T00:00",max:"2030-12-31T23:59",placeholder:"Datetime Local"}},c={args:{default:"",label:"Label",type:"month",min:"2023-01",max:"2030-12",placeholder:"Month"}},p={args:{default:"",label:"Label",type:"time",min:"00:00",max:"23:59",placeholder:"Time"}},d={args:{default:"",label:"Label",type:"week",min:"2023-W01",max:"2030-W52",placeholder:"Week"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "label": "Label",
    "placeholder": "(Default) Text"
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "label": "Label",
    "type": "password",
    "placeholder": "Password"
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "label": "Label",
    "type": "search",
    "placeholder": "Search"
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "label": "Label",
    "type": "email",
    "placeholder": "E-Mail"
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "label": "Label",
    "type": "tel",
    "placeholder": "Tel"
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "label": "Label",
    "type": "url",
    "placeholder": "URL"
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "label": "Label",
    "type": "date",
    "min": "2023-01-01",
    "max": "2030-12-31",
    "placeholder": "Date"
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "label": "Label",
    "type": "datetime-local",
    "min": "2023-01-01T00:00",
    "max": "2030-12-31T23:59",
    "placeholder": "Datetime Local"
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "label": "Label",
    "type": "month",
    "min": "2023-01",
    "max": "2030-12",
    "placeholder": "Month"
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "label": "Label",
    "type": "time",
    "min": "00:00",
    "max": "23:59",
    "placeholder": "Time"
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    default: "",
    "label": "Label",
    "type": "week",
    "min": "2023-W01",
    "max": "2030-W52",
    "placeholder": "Week"
  }
}`,...d.parameters?.docs?.source}}};const D=["DefaultText","Password","Search","EMail","Tel","URL","Date","DatetimeLocal","Month","Time","Week"];export{n as Date,s as DatetimeLocal,e as DefaultText,t as EMail,c as Month,a as Password,r as Search,o as Tel,p as Time,l as URL,d as Week,D as __namedExportsOrder,T as default};
