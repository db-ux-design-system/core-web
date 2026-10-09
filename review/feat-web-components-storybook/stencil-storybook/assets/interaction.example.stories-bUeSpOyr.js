import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u;function d(){return(d=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBSelect/Interaction`,component:`db-select`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:o()},argTypes:{options:{control:`object`},label:{control:`text`},placeholder:{control:`text`},variant:{control:`select`,options:[`above`,`floating`]},value:{control:`text`},showLabel:{control:`boolean`},message:{control:`text`},showMessage:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},invalidMessage:{control:`text`},validMessage:{control:`text`},disabled:{control:`boolean`},showIcon:{control:`boolean`},required:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},name:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},size:{control:`number`},multiple:{control:`boolean`},showEmptyOption:{control:`boolean`},autocomplete:{control:`text`},messageIcon:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},c={args:{"data-testid":`select-change`,label:`Label`,placeholder:`Placeholder`,onInput:o()},render:({children:e,...n})=>t`<db-select ${i(n)}>${r(`<option value="test1">Test1</option><option value="test2">Test2</option>`)}</db-select>`},l={args:{"data-testid":`select-required`,label:`Label`,value:``,placeholder:`Choose an option`,required:!0},render:({children:e,...n})=>t`<db-select ${i(n)}>${r(`<option value="test1">Test1</option><option value="test2">Test2</option>`)}</db-select>`},u=[`Change`,`Required`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "select-change",
    "label": "Label",
    "placeholder": "Placeholder",
    "onInput": fn()
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-select \${spreadArgs(args)}>\${unsafeHTML(\`<option value="test1">Test1</option><option value="test2">Test2</option>\`)}</db-select>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "select-required",
    "label": "Label",
    "value": "",
    "placeholder": "Choose an option",
    "required": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-select \${spreadArgs(args)}>\${unsafeHTML(\`<option value="test1">Test1</option><option value="test2">Test2</option>\`)}</db-select>\`
}`,...l.parameters?.docs?.source}}}})))()}d();export{c as Change,l as Required,u as __namedExportsOrder,s as default};