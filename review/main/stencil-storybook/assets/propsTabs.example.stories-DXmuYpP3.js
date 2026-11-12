import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-CT9kjjde.js";import{i,n as a,t as o}from"./apply-web-component-args-MGmqLAAR.js";var s=t({CompositionAPIchildren:()=>d,OptionAPIpropstabs:()=>u,__namedExportsOrder:()=>f,default:()=>l}),c,l,u,d,f;function p(){return(p=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBTabs/Props Tabs`,component:`db-tabs`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onIndexChange:c(),onValueChange:c()},argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`]},tabItemWidth:{control:`select`,options:[`full`,`auto`]},tabItemAlignment:{control:`select`,options:[`start`,`center`,`end`]},behavior:{control:`select`,options:[`scrollbar`,`arrows`]},initialSelectedIndex:{control:`number`},initialSelectedMode:{control:`select`,options:[`auto`,`manually`]},label:{control:`text`},tabs:{control:`object`},arrowScrollDistance:{control:`number`},id:{control:`text`},autofocus:{control:`boolean`},onIndexChange:{action:`onIndexChange`},onValueChange:{action:`onValueChange`}}},u={args:{tabs:[{label:`Home`,content:`Home content`},{label:`Profile`,content:`Profile content`},{label:`Settings`,content:`Settings content`}]},render:({children:e,...t})=>n`<div><db-infotext icon="none" size="small" semantic="informational">Option API — using the tabs prop with an array of tab objects:</db-infotext><db-tabs ${a(t)}></db-tabs></div>`},d={args:{},render:({children:e,...t})=>n`<div><db-infotext icon="none" size="small" semantic="informational">Composition API — using child components:</db-infotext><db-tabs ${a(t)}>${i(`<db-tab-list><db-tab-item>Home</db-tab-item><db-tab-item>Profile</db-tab-item><db-tab-item>Settings</db-tab-item></db-tab-list><db-tab-panel>Home content</db-tab-panel><db-tab-panel>Profile content</db-tab-panel><db-tab-panel>Settings content</db-tab-panel>`)}</db-tabs></div>`},f=[`OptionAPIpropstabs`,`CompositionAPIchildren`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "tabs": [{
      label: 'Home',
      content: 'Home content'
    }, {
      label: 'Profile',
      content: 'Profile content'
    }, {
      label: 'Settings',
      content: 'Settings content'
    }]
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-infotext icon="none" size="small" semantic="informational">Option API — using the tabs prop with an array of tab objects:</db-infotext><db-tabs \${spreadArgs(args)}></db-tabs></div>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-infotext icon="none" size="small" semantic="informational">Composition API — using child components:</db-infotext><db-tabs \${spreadArgs(args)}>\${unsafeHTML(\`<db-tab-list><db-tab-item>Home</db-tab-item><db-tab-item>Profile</db-tab-item><db-tab-item>Settings</db-tab-item></db-tab-list><db-tab-panel>Home content</db-tab-panel><db-tab-panel>Profile content</db-tab-panel><db-tab-panel>Settings content</db-tab-panel>\`)}</db-tabs></div>\`
}`,...d.parameters?.docs?.source}}}})))()}export{s as i,u as n,p as r,d as t};