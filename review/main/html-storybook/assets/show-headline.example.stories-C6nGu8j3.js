import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./notification-CKfditja.js";var a=t({DefaultTrue:()=>l,False:()=>u,__namedExportsOrder:()=>d,default:()=>c}),o,s,c,l,u,d;function f(){return(f=e((()=>{r(),o=n(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBNotification/Show Headline`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:s()},argTypes:{headline:{control:`text`},showIcon:{control:`boolean`},variant:{control:`select`,options:[`docked`,`standalone`,`overlay`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},closeable:{control:`boolean`},linkVariant:{control:`select`,options:[`block`,`inline`]},showHeadline:{control:`boolean`},showTimestamp:{control:`boolean`},timestamp:{control:`text`},ariaLive:{control:`select`,options:[`assertive`,`polite`,`off`]},text:{control:`text`},role:{control:`text`},closeButtonId:{control:`text`},closeButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},l={args:{headline:`Headline`,showHeadline:!0,children:`(Default) True`},render:e=>(0,o.jsx)(`div`,{style:{width:`300px`},children:(0,o.jsx)(i,{...e})})},u={args:{headline:`Headline`,showHeadline:!1,children:`False`},render:e=>(0,o.jsx)(`div`,{style:{width:`300px`},children:(0,o.jsx)(i,{...e})})},d=[`DefaultTrue`,`False`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "headline": "Headline",
    "showHeadline": true,
    "children": "(Default) True"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "headline": "Headline",
    "showHeadline": false,
    "children": "False"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...u.parameters?.docs?.source}}}})))()}export{a as i,u as n,f as r,l as t};