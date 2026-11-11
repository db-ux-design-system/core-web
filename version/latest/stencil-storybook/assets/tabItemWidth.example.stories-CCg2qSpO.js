import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-eRVGBq1F.js";import{i,n as a,t as o}from"./apply-web-component-args-DDM1wTo-.js";var s=t({__namedExportsOrder:()=>m,auto:()=>u,default:()=>l,fullalignmentcenter:()=>f,fullalignmentend:()=>p,fullalignmentstart:()=>d}),c,l,u,d,f,p,m;function h(){return(h=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBTabs/Tab-Item-Width`,component:`db-tabs`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onIndexChange:c(),onValueChange:c()},argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`]},tabItemWidth:{control:`select`,options:[`full`,`auto`]},tabItemAlignment:{control:`select`,options:[`start`,`center`,`end`]},behavior:{control:`select`,options:[`scrollbar`,`arrows`]},initialSelectedIndex:{control:`number`},initialSelectedMode:{control:`select`,options:[`auto`,`manually`]},label:{control:`text`},tabs:{control:`object`},arrowScrollDistance:{control:`number`},id:{control:`text`},autofocus:{control:`boolean`},onIndexChange:{action:`onIndexChange`},onValueChange:{action:`onValueChange`}}},u={args:{tabItemWidth:`auto`},render:({children:e,...t})=>n`<div style="width: 100%"><db-infotext icon="none" size="small" semantic="informational">auto:</db-infotext><db-tabs ${a(t)}>${i(`<db-tab-list><db-tab-item>Test 1</db-tab-item><db-tab-item>Test 2</db-tab-item><db-tab-item>Test 3</db-tab-item></db-tab-list><db-tab-panel>Tab Panel 1</db-tab-panel><db-tab-panel>Tab Panel 2</db-tab-panel><db-tab-panel>Tab Panel 3</db-tab-panel>`)}</db-tabs></div>`},d={args:{tabItemWidth:`full`},render:({children:e,...t})=>n`<div style="width: 100%"><db-infotext icon="none" size="small" semantic="informational">full - alignment: start:</db-infotext><db-tabs ${a(t)}>${i(`<db-tab-list><db-tab-item>Test 1</db-tab-item><db-tab-item>Test 2</db-tab-item><db-tab-item>Test 3</db-tab-item></db-tab-list><db-tab-panel>Tab Panel 1</db-tab-panel><db-tab-panel>Tab Panel 2</db-tab-panel><db-tab-panel>Tab Panel 3</db-tab-panel>`)}</db-tabs></div>`},f={args:{tabItemWidth:`full`,tabItemAlignment:`center`},render:({children:e,...t})=>n`<div style="width: 100%"><db-infotext icon="none" size="small" semantic="informational">full - alignment: center:</db-infotext><db-tabs ${a(t)}>${i(`<db-tab-list><db-tab-item>Test 1</db-tab-item><db-tab-item>Test 2</db-tab-item><db-tab-item>Test 3</db-tab-item></db-tab-list><db-tab-panel>Tab Panel 1</db-tab-panel><db-tab-panel>Tab Panel 2</db-tab-panel><db-tab-panel>Tab Panel 3</db-tab-panel>`)}</db-tabs></div>`},p={args:{tabItemWidth:`full`,tabItemAlignment:`end`},render:({children:e,...t})=>n`<div style="width: 100%"><db-infotext icon="none" size="small" semantic="informational">full - alignment: end:</db-infotext><db-tabs ${a(t)}>${i(`<db-tab-list><db-tab-item>Test 1</db-tab-item><db-tab-item>Test 2</db-tab-item><db-tab-item>Test 3</db-tab-item></db-tab-list><db-tab-panel>Tab Panel 1</db-tab-panel><db-tab-panel>Tab Panel 2</db-tab-panel><db-tab-panel>Tab Panel 3</db-tab-panel>`)}</db-tabs></div>`},m=[`auto`,`fullalignmentstart`,`fullalignmentcenter`,`fullalignmentend`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "tabItemWidth": "auto"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="width: 100%"><db-infotext icon="none" size="small" semantic="informational">auto:</db-infotext><db-tabs \${spreadArgs(args)}>\${unsafeHTML(\`<db-tab-list><db-tab-item>Test 1</db-tab-item><db-tab-item>Test 2</db-tab-item><db-tab-item>Test 3</db-tab-item></db-tab-list><db-tab-panel>Tab Panel 1</db-tab-panel><db-tab-panel>Tab Panel 2</db-tab-panel><db-tab-panel>Tab Panel 3</db-tab-panel>\`)}</db-tabs></div>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "tabItemWidth": "full"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="width: 100%"><db-infotext icon="none" size="small" semantic="informational">full - alignment: start:</db-infotext><db-tabs \${spreadArgs(args)}>\${unsafeHTML(\`<db-tab-list><db-tab-item>Test 1</db-tab-item><db-tab-item>Test 2</db-tab-item><db-tab-item>Test 3</db-tab-item></db-tab-list><db-tab-panel>Tab Panel 1</db-tab-panel><db-tab-panel>Tab Panel 2</db-tab-panel><db-tab-panel>Tab Panel 3</db-tab-panel>\`)}</db-tabs></div>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "tabItemWidth": "full",
    "tabItemAlignment": "center"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="width: 100%"><db-infotext icon="none" size="small" semantic="informational">full - alignment: center:</db-infotext><db-tabs \${spreadArgs(args)}>\${unsafeHTML(\`<db-tab-list><db-tab-item>Test 1</db-tab-item><db-tab-item>Test 2</db-tab-item><db-tab-item>Test 3</db-tab-item></db-tab-list><db-tab-panel>Tab Panel 1</db-tab-panel><db-tab-panel>Tab Panel 2</db-tab-panel><db-tab-panel>Tab Panel 3</db-tab-panel>\`)}</db-tabs></div>\`
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "tabItemWidth": "full",
    "tabItemAlignment": "end"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="width: 100%"><db-infotext icon="none" size="small" semantic="informational">full - alignment: end:</db-infotext><db-tabs \${spreadArgs(args)}>\${unsafeHTML(\`<db-tab-list><db-tab-item>Test 1</db-tab-item><db-tab-item>Test 2</db-tab-item><db-tab-item>Test 3</db-tab-item></db-tab-list><db-tab-panel>Tab Panel 1</db-tab-panel><db-tab-panel>Tab Panel 2</db-tab-panel><db-tab-panel>Tab Panel 3</db-tab-panel>\`)}</db-tabs></div>\`
}`,...p.parameters?.docs?.source}}}})))()}export{h as a,d as i,f as n,s as o,p as r,u as t};