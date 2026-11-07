import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./link-I3nqCvO0.js";import{n as a,t as o}from"./notification-BeT2-oID.js";var s=t({DefaultBlock:()=>d,Inline:()=>f,__namedExportsOrder:()=>p,default:()=>u}),c,l,u,d,f,p;function m(){return(m=e((()=>{r(),a(),c=n(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBNotification/Link Variant`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:l()},argTypes:{headline:{control:`text`},showIcon:{control:`boolean`},variant:{control:`select`,options:[`docked`,`standalone`,`overlay`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},closeable:{control:`boolean`},linkVariant:{control:`select`,options:[`block`,`inline`]},showHeadline:{control:`boolean`},showTimestamp:{control:`boolean`},timestamp:{control:`text`},ariaLive:{control:`select`,options:[`assertive`,`polite`,`off`]},text:{control:`text`},role:{control:`text`},closeButtonId:{control:`text`},closeButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},d={args:{linkVariant:`block`,link:(0,c.jsx)(i,{href:`#`,children:`Textlink`}),children:`(Default) Block`},render:e=>(0,c.jsx)(`div`,{style:{width:`300px`},children:(0,c.jsx)(o,{...e})})},f={args:{linkVariant:`inline`,link:(0,c.jsx)(i,{href:`#`,children:`Textlink`}),children:`Inline`},render:e=>(0,c.jsx)(`div`,{style:{width:`300px`},children:(0,c.jsx)(o,{...e})})},p=[`DefaultBlock`,`Inline`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "linkVariant": "block",
    "link": <DBLink href="#">Textlink</DBLink>,
    "children": "(Default) Block"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "linkVariant": "inline",
    "link": <DBLink href="#">Textlink</DBLink>,
    "children": "Inline"
  },
  render: (properties: any) => <div style={{
    width: '300px'
  }}><DBNotification {...properties} /></div>
}`,...f.parameters?.docs?.source}}}})))()}export{s as i,f as n,m as r,d as t};