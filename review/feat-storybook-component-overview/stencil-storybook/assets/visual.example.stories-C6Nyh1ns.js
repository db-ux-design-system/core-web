import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-dqn2cA9M.js";import{i,n as a,t as o}from"./apply-web-component-args-ARfb8F4v.js";var s=t({DefaultIcon:()=>u,Image:()=>d,__namedExportsOrder:()=>f,default:()=>l}),c,l,u,d,f;function p(){return(p=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBNotification/Visual`,component:`db-notification`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:c()},argTypes:{headline:{control:`text`},showIcon:{control:`boolean`},variant:{control:`select`,options:[`docked`,`standalone`,`overlay`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},closeable:{control:`boolean`},linkVariant:{control:`select`,options:[`block`,`inline`]},showHeadline:{control:`boolean`},showTimestamp:{control:`boolean`},timestamp:{control:`text`},ariaLive:{control:`select`,options:[`assertive`,`polite`,`off`]},text:{control:`text`},role:{control:`text`},closeButtonId:{control:`text`},closeButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},u={args:{icon:`information_circle`},render:({children:e,...t})=>n`<div style="width: 300px"><db-notification ${a(t)}>${i(`(Default) Icon`)}</db-notification></div>`},d={args:{},render:({children:e,...t})=>n`<div style="width: 300px"><db-notification ${a(t)}>${i(`<img slot="image" alt="this is a fancy placeholder" src="/assets/images/placeholder.jpg" />Image`)}</db-notification></div>`},f=[`DefaultIcon`,`Image`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "information_circle"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="width: 300px"><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`(Default) Icon\`)}</db-notification></div>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<div style="width: 300px"><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`<img slot="image" alt="this is a fancy placeholder" src="/assets/images/placeholder.jpg" />Image\`)}</db-notification></div>\`
}`,...d.parameters?.docs?.source}}}})))()}export{s as i,d as n,p as r,u as t};