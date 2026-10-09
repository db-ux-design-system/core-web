import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBTabs/Interaction`,component:`db-tabs`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onIndexChange:o(),onTabSelect:o()},argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`]},tabItemWidth:{control:`select`,options:[`full`,`auto`]},tabItemAlignment:{control:`select`,options:[`start`,`center`,`end`]},behavior:{control:`select`,options:[`scrollbar`,`arrows`]},initialSelectedIndex:{control:`number`},initialSelectedMode:{control:`select`,options:[`auto`,`manually`]},label:{control:`text`},tabs:{control:`object`},arrowScrollDistance:{control:`number`},id:{control:`text`},autofocus:{control:`boolean`},onIndexChange:{action:`onIndexChange`},onTabSelect:{action:`onTabSelect`}}},c={args:{},render:({children:e,...n})=>t`<div data-testid="click-tabs"><db-tabs ${i(n)}>${r(`<db-tab-list><db-tab-item>Test 1</db-tab-item><db-tab-item>Test 2</db-tab-item></db-tab-list><db-tab-panel>Panel 1</db-tab-panel><db-tab-panel>Panel 2</db-tab-panel>`)}</db-tabs></div>`},l={args:{"data-testid":`alignment-tabs`,tabItemAlignment:`center`},render:({children:e,...n})=>t`<div><db-tabs ${i(n)}>${r(`<db-tab-list><db-tab-item>Test 1</db-tab-item></db-tab-list><db-tab-panel>Content 1</db-tab-panel>`)}</db-tabs></div>`},u={args:{"data-testid":`auto-width-tabs`,tabItemWidth:`auto`},render:({children:e,...n})=>t`<div><db-tabs ${i(n)}>${r(`<db-tab-list><db-tab-item icon="x_placeholder">Tab item with a very long label that must not be cut off</db-tab-item><db-tab-item>Short</db-tab-item></db-tab-list><db-tab-panel>Panel 1</db-tab-panel><db-tab-panel>Panel 2</db-tab-panel>`)}</db-tabs></div>`},d={args:{"data-testid":`vertical-width-tabs`,orientation:`vertical`,tabItemWidth:`auto`},render:({children:e,...n})=>t`<div><db-tabs ${i(n)}>${r(`<db-tab-list><db-tab-item>Very long vertical tab label that definitely gets truncated</db-tab-item><db-tab-item>Short</db-tab-item></db-tab-list><db-tab-panel>Panel 1</db-tab-panel><db-tab-panel>Panel 2</db-tab-panel>`)}</db-tabs></div>`},f={args:{"data-testid":`full-width-tabs`,tabItemWidth:`full`},render:({children:e,...n})=>t`<div><db-tabs ${i(n)}>${r(`<db-tab-list><db-tab-item>Short</db-tab-item><db-tab-item>A considerably longer full-width tab item label</db-tab-item></db-tab-list><db-tab-panel>Panel 1</db-tab-panel><db-tab-panel>Panel 2</db-tab-panel>`)}</db-tabs></div>`},p=[`Interaction`,`TabsInteraction1`,`TabsInteraction2`,`TabsInteraction3`,`TabsInteraction4`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<div data-testid="click-tabs"><db-tabs \${spreadArgs(args)}>\${unsafeHTML(\`<db-tab-list><db-tab-item>Test 1</db-tab-item><db-tab-item>Test 2</db-tab-item></db-tab-list><db-tab-panel>Panel 1</db-tab-panel><db-tab-panel>Panel 2</db-tab-panel>\`)}</db-tabs></div>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "alignment-tabs",
    "tabItemAlignment": "center"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-tabs \${spreadArgs(args)}>\${unsafeHTML(\`<db-tab-list><db-tab-item>Test 1</db-tab-item></db-tab-list><db-tab-panel>Content 1</db-tab-panel>\`)}</db-tabs></div>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "auto-width-tabs",
    "tabItemWidth": "auto"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-tabs \${spreadArgs(args)}>\${unsafeHTML(\`<db-tab-list><db-tab-item icon="x_placeholder">Tab item with a very long label that must not be cut off</db-tab-item><db-tab-item>Short</db-tab-item></db-tab-list><db-tab-panel>Panel 1</db-tab-panel><db-tab-panel>Panel 2</db-tab-panel>\`)}</db-tabs></div>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "vertical-width-tabs",
    "orientation": "vertical",
    "tabItemWidth": "auto"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-tabs \${spreadArgs(args)}>\${unsafeHTML(\`<db-tab-list><db-tab-item>Very long vertical tab label that definitely gets truncated</db-tab-item><db-tab-item>Short</db-tab-item></db-tab-list><db-tab-panel>Panel 1</db-tab-panel><db-tab-panel>Panel 2</db-tab-panel>\`)}</db-tabs></div>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "full-width-tabs",
    "tabItemWidth": "full"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-tabs \${spreadArgs(args)}>\${unsafeHTML(\`<db-tab-list><db-tab-item>Short</db-tab-item><db-tab-item>A considerably longer full-width tab item label</db-tab-item></db-tab-list><db-tab-panel>Panel 1</db-tab-panel><db-tab-panel>Panel 2</db-tab-panel>\`)}</db-tabs></div>\`
}`,...f.parameters?.docs?.source}}}})))()}m();export{c as Interaction,l as TabsInteraction1,u as TabsInteraction2,d as TabsInteraction3,f as TabsInteraction4,p as __namedExportsOrder,s as default};