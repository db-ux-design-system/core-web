import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./input-Z7EtmKbC.js";var i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{n(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBInput/Example - Types with min and max`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{label:{control:`text`},variant:{control:`select`,options:[`above`,`floating`]},value:{control:`text`},showLabel:{control:`boolean`},message:{control:`text`},showMessage:{control:`boolean`},disabled:{control:`boolean`},readOnly:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},invalidMessage:{control:`text`},validMessage:{control:`text`},required:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},showIcon:{control:`boolean`},showIconLeading:{control:`boolean`},showIconTrailing:{control:`boolean`},minLength:{control:`number`},maxLength:{control:`number`},type:{control:`select`,options:[`color`,`date`,`datetime-local`,`email`,`file`,`hidden`,`month`,`number`,`password`,`range`,`search`,`tel`,`text`,`time`,`url`,`week`]},min:{control:`text`},max:{control:`text`},step:{control:`text`},dataList:{control:`object`},dataListId:{control:`text`},placeholder:{control:`text`},name:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},size:{control:`number`},pattern:{control:`text`},accept:{control:`text`},multiple:{control:`boolean`},enterkeyhint:{control:`select`,options:[`enter`,`done`,`go`,`next`,`previous`,`search`,`send`]},inputmode:{control:`select`,options:[`none`,`text`,`decimal`,`numeric`,`tel`,`search`,`email`,`url`]},autocomplete:{control:`text`},messageIcon:{control:`text`},messageSize:{control:`select`,options:[`small`,`medium`]},validMessageSize:{control:`select`,options:[`small`,`medium`]},invalidMessageSize:{control:`select`,options:[`small`,`medium`]},fieldSizing:{control:`select`,options:[`fixed`,`content`]},id:{control:`text`},autofocus:{control:`boolean`}}},s={args:{label:`Label`,placeholder:`(Default) Text`},render:e=>(0,i.jsx)(r,{...e})},c={args:{label:`Label`,type:`password`,placeholder:`Password`},render:e=>(0,i.jsx)(r,{...e})},l={args:{label:`Label`,type:`search`,placeholder:`Search`},render:e=>(0,i.jsx)(r,{...e})},u={args:{label:`Label`,type:`email`,placeholder:`E-Mail`},render:e=>(0,i.jsx)(r,{...e})},d={args:{label:`Label`,type:`tel`,placeholder:`Tel`},render:e=>(0,i.jsx)(r,{...e})},f={args:{label:`Label`,type:`url`,placeholder:`URL`},render:e=>(0,i.jsx)(r,{...e})},p={args:{label:`Label`,type:`number`,min:`0`,max:`10`,placeholder:`Number`},render:e=>(0,i.jsx)(r,{...e})},m={args:{label:`Label`,type:`date`,min:`2023-01-01`,max:`2030-12-31`,placeholder:`Date`},render:e=>(0,i.jsx)(r,{...e})},h={args:{label:`Label`,type:`datetime-local`,min:`2023-01-01T00:00`,max:`2030-12-31T23:59`,placeholder:`Datetime Local`},render:e=>(0,i.jsx)(r,{...e})},g={args:{label:`Label`,type:`month`,min:`2023-01`,max:`2030-12`,placeholder:`Month`},render:e=>(0,i.jsx)(r,{...e})},_={args:{label:`Label`,type:`time`,min:`00:00`,max:`23:59`,placeholder:`Time`},render:e=>(0,i.jsx)(r,{...e})},v={args:{label:`Label`,type:`week`,min:`2023-W01`,max:`2030-W52`,placeholder:`Week`},render:e=>(0,i.jsx)(r,{...e})},y=[`DefaultText`,`Password`,`Search`,`EMail`,`Tel`,`URL`,`Number`,`Date`,`DatetimeLocal`,`Month`,`Time`,`Week`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "placeholder": "(Default) Text"
  },
  render: (properties: any) => <DBInput {...properties} />
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "type": "password",
    "placeholder": "Password"
  },
  render: (properties: any) => <DBInput {...properties} />
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "type": "search",
    "placeholder": "Search"
  },
  render: (properties: any) => <DBInput {...properties} />
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "type": "email",
    "placeholder": "E-Mail"
  },
  render: (properties: any) => <DBInput {...properties} />
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "type": "tel",
    "placeholder": "Tel"
  },
  render: (properties: any) => <DBInput {...properties} />
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "type": "url",
    "placeholder": "URL"
  },
  render: (properties: any) => <DBInput {...properties} />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "type": "number",
    "min": "0",
    "max": "10",
    "placeholder": "Number"
  },
  render: (properties: any) => <DBInput {...properties} />
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "type": "date",
    "min": "2023-01-01",
    "max": "2030-12-31",
    "placeholder": "Date"
  },
  render: (properties: any) => <DBInput {...properties} />
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "type": "datetime-local",
    "min": "2023-01-01T00:00",
    "max": "2030-12-31T23:59",
    "placeholder": "Datetime Local"
  },
  render: (properties: any) => <DBInput {...properties} />
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "type": "month",
    "min": "2023-01",
    "max": "2030-12",
    "placeholder": "Month"
  },
  render: (properties: any) => <DBInput {...properties} />
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "type": "time",
    "min": "00:00",
    "max": "23:59",
    "placeholder": "Time"
  },
  render: (properties: any) => <DBInput {...properties} />
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "type": "week",
    "min": "2023-W01",
    "max": "2030-W52",
    "placeholder": "Week"
  },
  render: (properties: any) => <DBInput {...properties} />
}`,...v.parameters?.docs?.source}}}})))()}b();export{m as Date,h as DatetimeLocal,s as DefaultText,u as EMail,g as Month,p as Number,c as Password,l as Search,d as Tel,_ as Time,f as URL,v as Week,y as __namedExportsOrder,o as default};