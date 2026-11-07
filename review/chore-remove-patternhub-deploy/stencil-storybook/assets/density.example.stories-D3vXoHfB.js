import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-CSduPcDp.js";import{i,n as a,t as o}from"./apply-web-component-args-D-8sNeLN.js";var s=t({DefaultRegular:()=>d,Expressive:()=>f,Functional:()=>u,__namedExportsOrder:()=>p,default:()=>l}),c,l,u,d,f,p;function m(){return(m=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBTabs/Density`,component:`db-tabs`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onIndexChange:c(),onValueChange:c()},argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`]},tabItemWidth:{control:`select`,options:[`full`,`auto`]},tabItemAlignment:{control:`select`,options:[`start`,`center`,`end`]},behavior:{control:`select`,options:[`scrollbar`,`arrows`]},initialSelectedIndex:{control:`number`},initialSelectedMode:{control:`select`,options:[`auto`,`manually`]},label:{control:`text`},tabs:{control:`object`},arrowScrollDistance:{control:`number`},id:{control:`text`},autofocus:{control:`boolean`},onIndexChange:{action:`onIndexChange`},onValueChange:{action:`onValueChange`}}},u={args:{"data-density":`functional`},render:({children:e,...t})=>n`<div><db-infotext icon="none" size="small" semantic="informational">Functional:</db-infotext><db-tabs ${a(t)}>${i(`<db-tab-list><db-tab-item>Test 1</db-tab-item><db-tab-item>Test 2</db-tab-item><db-tab-item>Test 3</db-tab-item></db-tab-list><db-tab-panel>Tab Panel 1</db-tab-panel><db-tab-panel>Tab Panel 2</db-tab-panel><db-tab-panel>Tab Panel 3</db-tab-panel>`)}</db-tabs></div>`},d={args:{"data-density":`regular`},render:({children:e,...t})=>n`<div><db-infotext icon="none" size="small" semantic="informational">(Default) Regular:</db-infotext><db-tabs ${a(t)}>${i(`<db-tab-list><db-tab-item>Test 1</db-tab-item><db-tab-item>Test 2</db-tab-item><db-tab-item>Test 3</db-tab-item></db-tab-list><db-tab-panel>Tab Panel 1</db-tab-panel><db-tab-panel>Tab Panel 2</db-tab-panel><db-tab-panel>Tab Panel 3</db-tab-panel>`)}</db-tabs></div>`},f={args:{"data-density":`expressive`},render:({children:e,...t})=>n`<div><db-infotext icon="none" size="small" semantic="informational">Expressive:</db-infotext><db-tabs ${a(t)}>${i(`<db-tab-list><db-tab-item>Test 1</db-tab-item><db-tab-item>Test 2</db-tab-item><db-tab-item>Test 3</db-tab-item></db-tab-list><db-tab-panel>Tab Panel 1</db-tab-panel><db-tab-panel>Tab Panel 2</db-tab-panel><db-tab-panel>Tab Panel 3</db-tab-panel>`)}</db-tabs></div>`},p=[`Functional`,`DefaultRegular`,`Expressive`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-infotext icon="none" size="small" semantic="informational">Functional:</db-infotext><db-tabs \${spreadArgs(args)}>\${unsafeHTML(\`<db-tab-list><db-tab-item>Test 1</db-tab-item><db-tab-item>Test 2</db-tab-item><db-tab-item>Test 3</db-tab-item></db-tab-list><db-tab-panel>Tab Panel 1</db-tab-panel><db-tab-panel>Tab Panel 2</db-tab-panel><db-tab-panel>Tab Panel 3</db-tab-panel>\`)}</db-tabs></div>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-infotext icon="none" size="small" semantic="informational">(Default) Regular:</db-infotext><db-tabs \${spreadArgs(args)}>\${unsafeHTML(\`<db-tab-list><db-tab-item>Test 1</db-tab-item><db-tab-item>Test 2</db-tab-item><db-tab-item>Test 3</db-tab-item></db-tab-list><db-tab-panel>Tab Panel 1</db-tab-panel><db-tab-panel>Tab Panel 2</db-tab-panel><db-tab-panel>Tab Panel 3</db-tab-panel>\`)}</db-tabs></div>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-infotext icon="none" size="small" semantic="informational">Expressive:</db-infotext><db-tabs \${spreadArgs(args)}>\${unsafeHTML(\`<db-tab-list><db-tab-item>Test 1</db-tab-item><db-tab-item>Test 2</db-tab-item><db-tab-item>Test 3</db-tab-item></db-tab-list><db-tab-panel>Tab Panel 1</db-tab-panel><db-tab-panel>Tab Panel 2</db-tab-panel><db-tab-panel>Tab Panel 3</db-tab-panel>\`)}</db-tabs></div>\`
}`,...f.parameters?.docs?.source}}}})))()}export{m as a,s as i,f as n,u as r,d as t};