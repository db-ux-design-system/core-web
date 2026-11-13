import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-D7ZhsNxW.js";import{i,n as a,t as o}from"./apply-web-component-args-DqcWTDo5.js";var s=t({DefaultAuto:()=>u,Full:()=>d,__namedExportsOrder:()=>f,default:()=>l}),c,l,u,d,f;function p(){return(p=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBNavigationItem/Width`,component:`db-navigation-item`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:c()},argTypes:{disabled:{control:`boolean`},active:{control:`boolean`},showIcon:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},wrap:{control:`boolean`},text:{control:`text`},subNavigationExpanded:{control:`boolean`},backButtonId:{control:`text`},backButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},u={args:{},render:({children:e,...t})=>n`<ul style="width: 400px"><db-navigation-item ${a(t)}>${i(`<a href="#">(Default) Auto</a>`)}</db-navigation-item></ul>`},d={args:{width:`full`},render:({children:e,...t})=>n`<ul style="width: 400px"><db-navigation-item ${a(t)}>${i(`<a href="#">Full</a>`)}</db-navigation-item></ul>`},f=[`DefaultAuto`,`Full`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<ul style="width: 400px"><db-navigation-item \${spreadArgs(args)}>\${unsafeHTML(\`<a href="#">(Default) Auto</a>\`)}</db-navigation-item></ul>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<ul style="width: 400px"><db-navigation-item \${spreadArgs(args)}>\${unsafeHTML(\`<a href="#">Full</a>\`)}</db-navigation-item></ul>\`
}`,...d.parameters?.docs?.source}}}})))()}export{s as i,d as n,p as r,u as t};