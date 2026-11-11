import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-CEgE4mfw.js";import{i,n as a,t as o}from"./apply-web-component-args-CzDfGoSP.js";var s=t({DefaultBlock:()=>u,Inline:()=>d,__namedExportsOrder:()=>f,default:()=>l}),c,l,u,d,f;function p(){return(p=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBNotification/Link Variant`,component:`db-notification`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:c()},argTypes:{headline:{control:`text`},showIcon:{control:`boolean`},variant:{control:`select`,options:[`docked`,`standalone`,`overlay`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},closeable:{control:`boolean`},linkVariant:{control:`select`,options:[`block`,`inline`]},showHeadline:{control:`boolean`},showTimestamp:{control:`boolean`},timestamp:{control:`text`},ariaLive:{control:`select`,options:[`assertive`,`polite`,`off`]},text:{control:`text`},role:{control:`text`},closeButtonId:{control:`text`},closeButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},u={args:{linkVariant:`block`},render:({children:e,...t})=>n`<div style="width: 300px"><db-notification ${a(t)}>${i(`<db-link slot="link" href="#">Textlink</db-link>(Default) Block`)}</db-notification></div>`},d={args:{linkVariant:`inline`},render:({children:e,...t})=>n`<div style="width: 300px"><db-notification ${a(t)}>${i(`<db-link slot="link" href="#">Textlink</db-link>Inline`)}</db-notification></div>`},f=[`DefaultBlock`,`Inline`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "linkVariant": "block"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="width: 300px"><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`<db-link slot="link" href="#">Textlink</db-link>(Default) Block\`)}</db-notification></div>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "linkVariant": "inline"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="width: 300px"><db-notification \${spreadArgs(args)}>\${unsafeHTML(\`<db-link slot="link" href="#">Textlink</db-link>Inline\`)}</db-notification></div>\`
}`,...d.parameters?.docs?.source}}}})))()}export{s as i,d as n,p as r,u as t};