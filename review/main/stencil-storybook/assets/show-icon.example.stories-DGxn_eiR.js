import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-BQPE-Z7b.js";import{i,n as a,t as o}from"./apply-web-component-args-B09ukjNm.js";var s=t({DefaultFalse:()=>u,True:()=>d,__namedExportsOrder:()=>f,default:()=>l}),c,l,u,d,f;function p(){return(p=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBNavigationItem/Show Icon`,component:`db-navigation-item`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:c()},argTypes:{disabled:{control:`boolean`},active:{control:`boolean`},showIcon:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},wrap:{control:`boolean`},text:{control:`text`},subNavigationExpanded:{control:`boolean`},backButtonId:{control:`text`},backButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},u={args:{icon:`x_placeholder`,showIcon:!1},render:({children:e,...t})=>n`<ul><db-navigation-item ${a(t)}>${i(`<a href="#">(Default) False</a>`)}</db-navigation-item></ul>`},d={args:{icon:`x_placeholder`,showIcon:!0},render:({children:e,...t})=>n`<ul><db-navigation-item ${a(t)}>${i(`<a href="#">True</a>`)}</db-navigation-item></ul>`},f=[`DefaultFalse`,`True`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "x_placeholder",
    "showIcon": false
  },
  render: ({
    children,
    ...args
  }: any) => html\`<ul><db-navigation-item \${spreadArgs(args)}>\${unsafeHTML(\`<a href="#">(Default) False</a>\`)}</db-navigation-item></ul>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "x_placeholder",
    "showIcon": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<ul><db-navigation-item \${spreadArgs(args)}>\${unsafeHTML(\`<a href="#">True</a>\`)}</db-navigation-item></ul>\`
}`,...d.parameters?.docs?.source}}}})))()}export{s as i,d as n,p as r,u as t};