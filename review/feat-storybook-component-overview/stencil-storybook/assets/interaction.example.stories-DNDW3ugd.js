import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-LYtL2xrD.js";import{i,n as a,t as o}from"./apply-web-component-args-QiJXFgM3.js";var s=t({Interaction:()=>u,TabsInteraction1:()=>d,TabsInteraction2:()=>f,TabsInteraction3:()=>p,TabsInteraction4:()=>m,__namedExportsOrder:()=>h,default:()=>l}),c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBTabs/Interaction`,component:`db-tabs`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onIndexChange:c(),onValueChange:c()},argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`]},tabItemWidth:{control:`select`,options:[`full`,`auto`]},tabItemAlignment:{control:`select`,options:[`start`,`center`,`end`]},behavior:{control:`select`,options:[`scrollbar`,`arrows`]},initialSelectedIndex:{control:`number`},initialSelectedMode:{control:`select`,options:[`auto`,`manually`]},label:{control:`text`},tabs:{control:`object`},arrowScrollDistance:{control:`number`},id:{control:`text`},autofocus:{control:`boolean`},onIndexChange:{action:`onIndexChange`},onValueChange:{action:`onValueChange`}}},u={args:{},render:({children:e,...t})=>n`<div data-testid="click-tabs"><db-tabs ${a(t)}>${i(`<db-tab-list><db-tab-item>Test 1</db-tab-item><db-tab-item>Test 2</db-tab-item></db-tab-list><db-tab-panel>Panel 1</db-tab-panel><db-tab-panel>Panel 2</db-tab-panel>`)}</db-tabs></div>`},d={args:{"data-testid":`alignment-tabs`,tabItemAlignment:`center`},render:({children:e,...t})=>n`<div><db-tabs ${a(t)}>${i(`<db-tab-list><db-tab-item>Test 1</db-tab-item></db-tab-list><db-tab-panel>Content 1</db-tab-panel>`)}</db-tabs></div>`},f={args:{"data-testid":`auto-width-tabs`,tabItemWidth:`auto`},render:({children:e,...t})=>n`<div style="width: 100%"><db-tabs ${a(t)}>${i(`<db-tab-list><db-tab-item icon="x_placeholder">Tab item with a very long label that must not be cut off</db-tab-item><db-tab-item>Short</db-tab-item></db-tab-list><db-tab-panel>Panel 1</db-tab-panel><db-tab-panel>Panel 2</db-tab-panel>`)}</db-tabs></div>`},p={args:{"data-testid":`vertical-width-tabs`,orientation:`vertical`,tabItemWidth:`auto`},render:({children:e,...t})=>n`<div style="width: 100%"><db-tabs ${a(t)}>${i(`<db-tab-list><db-tab-item>Very long vertical tab label that definitely gets truncated</db-tab-item><db-tab-item>Short</db-tab-item></db-tab-list><db-tab-panel>Panel 1</db-tab-panel><db-tab-panel>Panel 2</db-tab-panel>`)}</db-tabs></div>`},m={args:{"data-testid":`full-width-tabs`,tabItemWidth:`full`},render:({children:e,...t})=>n`<div style="width: 100%"><db-tabs ${a(t)}>${i(`<db-tab-list><db-tab-item>Short</db-tab-item><db-tab-item>A considerably longer full-width tab item label</db-tab-item></db-tab-list><db-tab-panel>Panel 1</db-tab-panel><db-tab-panel>Panel 2</db-tab-panel>`)}</db-tabs></div>`},h=[`Interaction`,`TabsInteraction1`,`TabsInteraction2`,`TabsInteraction3`,`TabsInteraction4`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<div data-testid="click-tabs"><db-tabs \${spreadArgs(args)}>\${unsafeHTML(\`<db-tab-list><db-tab-item>Test 1</db-tab-item><db-tab-item>Test 2</db-tab-item></db-tab-list><db-tab-panel>Panel 1</db-tab-panel><db-tab-panel>Panel 2</db-tab-panel>\`)}</db-tabs></div>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "alignment-tabs",
    "tabItemAlignment": "center"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-tabs \${spreadArgs(args)}>\${unsafeHTML(\`<db-tab-list><db-tab-item>Test 1</db-tab-item></db-tab-list><db-tab-panel>Content 1</db-tab-panel>\`)}</db-tabs></div>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "auto-width-tabs",
    "tabItemWidth": "auto"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="width: 100%"><db-tabs \${spreadArgs(args)}>\${unsafeHTML(\`<db-tab-list><db-tab-item icon="x_placeholder">Tab item with a very long label that must not be cut off</db-tab-item><db-tab-item>Short</db-tab-item></db-tab-list><db-tab-panel>Panel 1</db-tab-panel><db-tab-panel>Panel 2</db-tab-panel>\`)}</db-tabs></div>\`
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "vertical-width-tabs",
    "orientation": "vertical",
    "tabItemWidth": "auto"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="width: 100%"><db-tabs \${spreadArgs(args)}>\${unsafeHTML(\`<db-tab-list><db-tab-item>Very long vertical tab label that definitely gets truncated</db-tab-item><db-tab-item>Short</db-tab-item></db-tab-list><db-tab-panel>Panel 1</db-tab-panel><db-tab-panel>Panel 2</db-tab-panel>\`)}</db-tabs></div>\`
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "full-width-tabs",
    "tabItemWidth": "full"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="width: 100%"><db-tabs \${spreadArgs(args)}>\${unsafeHTML(\`<db-tab-list><db-tab-item>Short</db-tab-item><db-tab-item>A considerably longer full-width tab item label</db-tab-item></db-tab-list><db-tab-panel>Panel 1</db-tab-panel><db-tab-panel>Panel 2</db-tab-panel>\`)}</db-tabs></div>\`
}`,...m.parameters?.docs?.source}}}})))()}export{m as a,p as i,d as n,g as o,f as r,s,u as t};