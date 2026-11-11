import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./input-X4dJ2mAS.js";var a=t({Invalidmessagesizemedium:()=>m,Messagesizemedium:()=>l,Messagewithicon:()=>u,Messagewithouticon:()=>d,Messagewithwrap:()=>f,Validmessagesizemedium:()=>p,__namedExportsOrder:()=>h,default:()=>c}),o,s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{r(),o=n(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBInput/Message Props`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{label:{control:`text`},variant:{control:`select`,options:[`above`,`floating`]},value:{control:`text`},showLabel:{control:`boolean`},message:{control:`text`},messageProps:{control:`object`},validMessageProps:{control:`object`},invalidMessageProps:{control:`object`},showMessage:{control:`boolean`},disabled:{control:`boolean`},readOnly:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},invalidMessage:{control:`text`},validMessage:{control:`text`},required:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},showIcon:{control:`boolean`},showIconLeading:{control:`boolean`},showIconTrailing:{control:`boolean`},minLength:{control:`number`},maxLength:{control:`number`},type:{control:`select`,options:[`color`,`date`,`datetime-local`,`email`,`file`,`hidden`,`month`,`number`,`password`,`range`,`search`,`tel`,`text`,`time`,`url`,`week`]},min:{control:`text`},max:{control:`text`},step:{control:`text`},dataList:{control:`object`},dataListId:{control:`text`},placeholder:{control:`text`},name:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},size:{control:`number`},pattern:{control:`text`},accept:{control:`text`},multiple:{control:`boolean`},enterkeyhint:{control:`select`,options:[`enter`,`done`,`go`,`next`,`previous`,`search`,`send`]},inputmode:{control:`select`,options:[`none`,`text`,`decimal`,`numeric`,`tel`,`search`,`email`,`url`]},autocomplete:{control:`text`},messageIcon:{control:`text`},messageSize:{control:`select`,options:[`small`,`medium`]},validMessageSize:{control:`select`,options:[`small`,`medium`]},invalidMessageSize:{control:`select`,options:[`small`,`medium`]},fieldSizing:{control:`select`,options:[`fixed`,`content`]},id:{control:`text`},autofocus:{control:`boolean`}}},l={args:{label:`Label`,message:`Message`,placeholder:`Message size medium`,messageProps:{size:`medium`}},render:e=>(0,o.jsx)(i,{...e})},u={args:{label:`Label`,message:`Message`,placeholder:`Message with icon`,messageProps:{icon:`information_circle`}},render:e=>(0,o.jsx)(i,{...e})},d={args:{label:`Label`,message:`Message`,placeholder:`Message without icon`,messageProps:{icon:`information_circle`,showIcon:!1}},render:e=>(0,o.jsx)(i,{...e})},f={args:{label:`Label`,message:`A longer message that wraps when the container is too small`,placeholder:`Message with wrap`,messageProps:{wrap:!0}},render:e=>(0,o.jsx)(i,{...e})},p={args:{label:`Label`,validation:`valid`,validMessage:`Valid message`,placeholder:`Valid message size medium`,validMessageProps:{size:`medium`}},render:e=>(0,o.jsx)(i,{...e})},m={args:{label:`Label`,validation:`invalid`,invalidMessage:`Invalid message`,placeholder:`Invalid message size medium`,invalidMessageProps:{size:`medium`}},render:e=>(0,o.jsx)(i,{...e})},h=[`Messagesizemedium`,`Messagewithicon`,`Messagewithouticon`,`Messagewithwrap`,`Validmessagesizemedium`,`Invalidmessagesizemedium`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "message": "Message",
    "placeholder": "Message size medium",
    "messageProps": {
      size: 'medium'
    }
  },
  render: (properties: any) => <DBInput {...properties} />
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "message": "Message",
    "placeholder": "Message with icon",
    "messageProps": {
      icon: 'information_circle'
    }
  },
  render: (properties: any) => <DBInput {...properties} />
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "message": "Message",
    "placeholder": "Message without icon",
    "messageProps": {
      icon: 'information_circle',
      showIcon: false
    }
  },
  render: (properties: any) => <DBInput {...properties} />
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "message": "A longer message that wraps when the container is too small",
    "placeholder": "Message with wrap",
    "messageProps": {
      wrap: true
    }
  },
  render: (properties: any) => <DBInput {...properties} />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "validation": "valid",
    "validMessage": "Valid message",
    "placeholder": "Valid message size medium",
    "validMessageProps": {
      size: 'medium'
    }
  },
  render: (properties: any) => <DBInput {...properties} />
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Label",
    "validation": "invalid",
    "invalidMessage": "Invalid message",
    "placeholder": "Invalid message size medium",
    "invalidMessageProps": {
      size: 'medium'
    }
  },
  render: (properties: any) => <DBInput {...properties} />
}`,...m.parameters?.docs?.source}}}})))()}export{f as a,a as c,d as i,l as n,p as o,u as r,g as s,m as t};