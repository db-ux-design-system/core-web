import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-DnhM2czJ.js";import{n as i,t as a}from"./apply-web-component-args-B6TwiEBZ.js";var o=t({Date:()=>g,DatetimeLocal:()=>_,DefaultText:()=>l,EMail:()=>f,Month:()=>v,Number:()=>h,Password:()=>u,Search:()=>d,Tel:()=>p,Time:()=>y,URL:()=>m,Week:()=>b,__namedExportsOrder:()=>x,default:()=>c}),s,c,l,u,d,f,p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{r(),a(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBInput/Example - Types with min and max`,component:`db-input`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{label:{control:`text`},variant:{control:`select`,options:[`above`,`floating`]},value:{control:`text`},showLabel:{control:`boolean`},message:{control:`text`},showMessage:{control:`boolean`},disabled:{control:`boolean`},readOnly:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},invalidMessage:{control:`text`},validMessage:{control:`text`},required:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},showIcon:{control:`boolean`},showIconLeading:{control:`boolean`},showIconTrailing:{control:`boolean`},minLength:{control:`number`},maxLength:{control:`number`},type:{control:`select`,options:[`color`,`date`,`datetime-local`,`email`,`file`,`hidden`,`month`,`number`,`password`,`range`,`search`,`tel`,`text`,`time`,`url`,`week`]},min:{control:`text`},max:{control:`text`},step:{control:`text`},dataList:{control:`object`},dataListId:{control:`text`},placeholder:{control:`text`},name:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},size:{control:`number`},pattern:{control:`text`},accept:{control:`text`},multiple:{control:`boolean`},enterkeyhint:{control:`select`,options:[`enter`,`done`,`go`,`next`,`previous`,`search`,`send`]},inputmode:{control:`select`,options:[`none`,`text`,`decimal`,`numeric`,`tel`,`search`,`email`,`url`]},autocomplete:{control:`text`},messageIcon:{control:`text`},messageSize:{control:`select`,options:[`small`,`medium`]},validMessageSize:{control:`select`,options:[`small`,`medium`]},invalidMessageSize:{control:`select`,options:[`small`,`medium`]},fieldSizing:{control:`select`,options:[`fixed`,`content`]},id:{control:`text`},autofocus:{control:`boolean`}}},l={args:{label:`Label`,placeholder:`(Default) Text`},render:({children:e,...t})=>n`<db-input ${i(t)}></db-input>`},u={args:{label:`Label`,type:`password`,placeholder:`Password`},render:({children:e,...t})=>n`<db-input ${i(t)}></db-input>`},d={args:{label:`Label`,type:`search`,placeholder:`Search`},render:({children:e,...t})=>n`<db-input ${i(t)}></db-input>`},f={args:{label:`Label`,type:`email`,placeholder:`E-Mail`},render:({children:e,...t})=>n`<db-input ${i(t)}></db-input>`},p={args:{label:`Label`,type:`tel`,placeholder:`Tel`},render:({children:e,...t})=>n`<db-input ${i(t)}></db-input>`},m={args:{label:`Label`,type:`url`,placeholder:`URL`},render:({children:e,...t})=>n`<db-input ${i(t)}></db-input>`},h={args:{label:`Label`,type:`number`,min:`0`,max:`10`,placeholder:`Number`},render:({children:e,...t})=>n`<db-input ${i(t)}></db-input>`},g={args:{label:`Label`,type:`date`,min:`2023-01-01`,max:`2030-12-31`,placeholder:`Date`},render:({children:e,...t})=>n`<db-input ${i(t)}></db-input>`},_={args:{label:`Label`,type:`datetime-local`,min:`2023-01-01T00:00`,max:`2030-12-31T23:59`,placeholder:`Datetime Local`},render:({children:e,...t})=>n`<db-input ${i(t)}></db-input>`},v={args:{label:`Label`,type:`month`,min:`2023-01`,max:`2030-12`,placeholder:`Month`},render:({children:e,...t})=>n`<db-input ${i(t)}></db-input>`},y={args:{label:`Label`,type:`time`,min:`00:00`,max:`23:59`,placeholder:`Time`},render:({children:e,...t})=>n`<db-input ${i(t)}></db-input>`},b={args:{label:`Label`,type:`week`,min:`2023-W01`,max:`2030-W52`,placeholder:`Week`},render:({children:e,...t})=>n`<db-input ${i(t)}></db-input>`},x=[`DefaultText`,`Password`,`Search`,`EMail`,`Tel`,`URL`,`Number`,`Date`,`DatetimeLocal`,`Month`,`Time`,`Week`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "placeholder": "(Default) Text"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-input \${spreadArgs(args)}></db-input>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "type": "password",
    "placeholder": "Password"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-input \${spreadArgs(args)}></db-input>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "type": "search",
    "placeholder": "Search"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-input \${spreadArgs(args)}></db-input>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "type": "email",
    "placeholder": "E-Mail"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-input \${spreadArgs(args)}></db-input>\`
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "type": "tel",
    "placeholder": "Tel"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-input \${spreadArgs(args)}></db-input>\`
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "type": "url",
    "placeholder": "URL"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-input \${spreadArgs(args)}></db-input>\`
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "type": "number",
    "min": "0",
    "max": "10",
    "placeholder": "Number"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-input \${spreadArgs(args)}></db-input>\`
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "type": "date",
    "min": "2023-01-01",
    "max": "2030-12-31",
    "placeholder": "Date"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-input \${spreadArgs(args)}></db-input>\`
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "type": "datetime-local",
    "min": "2023-01-01T00:00",
    "max": "2030-12-31T23:59",
    "placeholder": "Datetime Local"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-input \${spreadArgs(args)}></db-input>\`
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "type": "month",
    "min": "2023-01",
    "max": "2030-12",
    "placeholder": "Month"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-input \${spreadArgs(args)}></db-input>\`
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "type": "time",
    "min": "00:00",
    "max": "23:59",
    "placeholder": "Time"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-input \${spreadArgs(args)}></db-input>\`
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "type": "week",
    "min": "2023-W01",
    "max": "2030-W52",
    "placeholder": "Week"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-input \${spreadArgs(args)}></db-input>\`
}`,...b.parameters?.docs?.source}}}})))()}export{v as a,d as c,m as d,b as f,f as i,p as l,S as m,_ as n,h as o,o as p,l as r,u as s,g as t,y as u};