import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u,d;function f(){return(f=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBTabs/Density`,component:`db-tabs`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onIndexChange:o(),onTabSelect:o()},argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`]},tabItemWidth:{control:`select`,options:[`full`,`auto`]},tabItemAlignment:{control:`select`,options:[`start`,`center`,`end`]},behavior:{control:`select`,options:[`scrollbar`,`arrows`]},initialSelectedIndex:{control:`number`},initialSelectedMode:{control:`select`,options:[`auto`,`manually`]},label:{control:`text`},tabs:{control:`object`},arrowScrollDistance:{control:`number`},id:{control:`text`},autofocus:{control:`boolean`},onIndexChange:{action:`onIndexChange`},onTabSelect:{action:`onTabSelect`}}},c={args:{"data-density":`functional`},render:({children:e,...n})=>t`<div><db-infotext icon="none" size="small" semantic="informational">Functional:</db-infotext><db-tabs ${i(n)}>${r(`<db-tab-list><db-tab-item>Test 1</db-tab-item><db-tab-item>Test 2</db-tab-item><db-tab-item>Test 3</db-tab-item></db-tab-list><db-tab-panel>Tab Panel 1</db-tab-panel><db-tab-panel>Tab Panel 2</db-tab-panel><db-tab-panel>Tab Panel 3</db-tab-panel>`)}</db-tabs></div>`},l={args:{"data-density":`regular`},render:({children:e,...n})=>t`<div><db-infotext icon="none" size="small" semantic="informational">(Default) Regular:</db-infotext><db-tabs ${i(n)}>${r(`<db-tab-list><db-tab-item>Test 1</db-tab-item><db-tab-item>Test 2</db-tab-item><db-tab-item>Test 3</db-tab-item></db-tab-list><db-tab-panel>Tab Panel 1</db-tab-panel><db-tab-panel>Tab Panel 2</db-tab-panel><db-tab-panel>Tab Panel 3</db-tab-panel>`)}</db-tabs></div>`},u={args:{"data-density":`expressive`},render:({children:e,...n})=>t`<div><db-infotext icon="none" size="small" semantic="informational">Expressive:</db-infotext><db-tabs ${i(n)}>${r(`<db-tab-list><db-tab-item>Test 1</db-tab-item><db-tab-item>Test 2</db-tab-item><db-tab-item>Test 3</db-tab-item></db-tab-list><db-tab-panel>Tab Panel 1</db-tab-panel><db-tab-panel>Tab Panel 2</db-tab-panel><db-tab-panel>Tab Panel 3</db-tab-panel>`)}</db-tabs></div>`},d=[`Functional`,`DefaultRegular`,`Expressive`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-infotext icon="none" size="small" semantic="informational">Functional:</db-infotext><db-tabs \${spreadArgs(args)}>\${unsafeHTML(\`<db-tab-list><db-tab-item>Test 1</db-tab-item><db-tab-item>Test 2</db-tab-item><db-tab-item>Test 3</db-tab-item></db-tab-list><db-tab-panel>Tab Panel 1</db-tab-panel><db-tab-panel>Tab Panel 2</db-tab-panel><db-tab-panel>Tab Panel 3</db-tab-panel>\`)}</db-tabs></div>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-infotext icon="none" size="small" semantic="informational">(Default) Regular:</db-infotext><db-tabs \${spreadArgs(args)}>\${unsafeHTML(\`<db-tab-list><db-tab-item>Test 1</db-tab-item><db-tab-item>Test 2</db-tab-item><db-tab-item>Test 3</db-tab-item></db-tab-list><db-tab-panel>Tab Panel 1</db-tab-panel><db-tab-panel>Tab Panel 2</db-tab-panel><db-tab-panel>Tab Panel 3</db-tab-panel>\`)}</db-tabs></div>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-infotext icon="none" size="small" semantic="informational">Expressive:</db-infotext><db-tabs \${spreadArgs(args)}>\${unsafeHTML(\`<db-tab-list><db-tab-item>Test 1</db-tab-item><db-tab-item>Test 2</db-tab-item><db-tab-item>Test 3</db-tab-item></db-tab-list><db-tab-panel>Tab Panel 1</db-tab-panel><db-tab-panel>Tab Panel 2</db-tab-panel><db-tab-panel>Tab Panel 3</db-tab-panel>\`)}</db-tabs></div>\`
}`,...u.parameters?.docs?.source}}}})))()}f();export{l as DefaultRegular,u as Expressive,c as Functional,d as __namedExportsOrder,s as default};