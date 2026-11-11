import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-CEgE4mfw.js";import{i,n as a,t as o}from"./apply-web-component-args-CzDfGoSP.js";var s=t({DefaultFalse:()=>u,True:()=>d,__namedExportsOrder:()=>f,default:()=>l}),c,l,u,d,f;function p(){return(p=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBNavigationItem/Wrap`,component:`db-navigation-item`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:c()},argTypes:{disabled:{control:`boolean`},active:{control:`boolean`},showIcon:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},wrap:{control:`boolean`},text:{control:`text`},subNavigationExpanded:{control:`boolean`},backButtonId:{control:`text`},backButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},u={args:{},render:({children:e,...t})=>n`<ul><db-navigation-item ${a(t)}>${i(`<a href="#">No Wrap (Default)</a>`)}</db-navigation-item></ul>`},d={args:{text:`This is a very long text that is broken into multiple lines.`,icon:`x_placeholder`,showIcon:!0,wrap:!0},render:({children:e,...t})=>n`<ul style="width: 200px"><db-navigation-item ${a(t)}>${i(`<db-navigation-item slot="subNavigation" text="Sub-Navi-Item 1"><db-navigation-item slot="subNavigation"><a href="#">Sub-Sub-Navi-Item 1</a></db-navigation-item><db-navigation-item slot="subNavigation"><a href="#">Sub-Sub-Navi-Item 2</a></db-navigation-item></db-navigation-item><db-navigation-item slot="subNavigation"><a href="#">Sub-Navi-Item 2</a></db-navigation-item>`)}</db-navigation-item></ul>`},f=[`DefaultFalse`,`True`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<ul><db-navigation-item \${spreadArgs(args)}>\${unsafeHTML(\`<a href="#">No Wrap (Default)</a>\`)}</db-navigation-item></ul>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "text": "This is a very long text that is broken into multiple lines.",
    "icon": "x_placeholder",
    "showIcon": true,
    "wrap": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<ul style="width: 200px"><db-navigation-item \${spreadArgs(args)}>\${unsafeHTML(\`<db-navigation-item slot="subNavigation" text="Sub-Navi-Item 1"><db-navigation-item slot="subNavigation"><a href="#">Sub-Sub-Navi-Item 1</a></db-navigation-item><db-navigation-item slot="subNavigation"><a href="#">Sub-Sub-Navi-Item 2</a></db-navigation-item></db-navigation-item><db-navigation-item slot="subNavigation"><a href="#">Sub-Navi-Item 2</a></db-navigation-item>\`)}</db-navigation-item></ul>\`
}`,...d.parameters?.docs?.source}}}})))()}export{s as i,d as n,p as r,u as t};