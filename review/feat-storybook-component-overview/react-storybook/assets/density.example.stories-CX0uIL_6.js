import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./notification-BeT2-oID.js";var a=t({__namedExportsOrder:()=>f,default:()=>c,expressive:()=>d,functional:()=>l,regularDefault:()=>u}),o,s,c,l,u,d,f;function p(){return(p=e((()=>{r(),o=n(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBNotification/Density`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:s()},argTypes:{headline:{control:`text`},showIcon:{control:`boolean`},variant:{control:`select`,options:[`docked`,`standalone`,`overlay`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},closeable:{control:`boolean`},linkVariant:{control:`select`,options:[`block`,`inline`]},showHeadline:{control:`boolean`},showTimestamp:{control:`boolean`},timestamp:{control:`text`},ariaLive:{control:`select`,options:[`assertive`,`polite`,`off`]},text:{control:`text`},role:{control:`text`},closeButtonId:{control:`text`},closeButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},l={args:{"data-density":`functional`,headline:`Headline`,icon:`information_circle`,children:`functional`},render:e=>(0,o.jsx)(`div`,{style:{width:`300px`},children:(0,o.jsx)(i,{...e})})},u={args:{"data-density":`regular`,headline:`Headline`,icon:`information_circle`,children:`regular (Default)`},render:e=>(0,o.jsx)(`div`,{style:{width:`300px`},children:(0,o.jsx)(i,{...e})})},d={args:{"data-density":`expressive`,headline:`Headline`,icon:`information_circle`,children:`expressive`},render:e=>(0,o.jsx)(`div`,{style:{width:`300px`},children:(0,o.jsx)(i,{...e})})},f=[`functional`,`regularDefault`,`expressive`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "headline": "Headline",
    "icon": "information_circle",
    "children": "functional"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "headline": "Headline",
    "icon": "information_circle",
    "children": "regular (Default)"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "headline": "Headline",
    "icon": "information_circle",
    "children": "expressive"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...d.parameters?.docs?.source}}}})))()}export{u as a,p as i,d as n,l as r,a as t};