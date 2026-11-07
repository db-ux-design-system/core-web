import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-CSduPcDp.js";import{i,n as a,t as o}from"./apply-web-component-args-D-8sNeLN.js";var s=t({Change:()=>u,Required:()=>d,__namedExportsOrder:()=>f,default:()=>l}),c,l,u,d,f;function p(){return(p=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBSelect/Interaction`,component:`db-select`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:c()},argTypes:{options:{control:`object`},label:{control:`text`},placeholder:{control:`text`},variant:{control:`select`,options:[`above`,`floating`]},value:{control:`text`},showLabel:{control:`boolean`},message:{control:`text`},showMessage:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},invalidMessage:{control:`text`},validMessage:{control:`text`},disabled:{control:`boolean`},showIcon:{control:`boolean`},required:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},name:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},size:{control:`number`},multiple:{control:`boolean`},showEmptyOption:{control:`boolean`},autocomplete:{control:`text`},messageIcon:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},u={args:{"data-testid":`select-change`,label:`Label`,placeholder:`Placeholder`,onInput:c()},render:({children:e,...t})=>n`<db-select ${a(t)}>${i(`<option value="test1">Test1</option><option value="test2">Test2</option>`)}</db-select>`},d={args:{"data-testid":`select-required`,label:`Label`,value:``,placeholder:`Choose an option`,required:!0},render:({children:e,...t})=>n`<db-select ${a(t)}>${i(`<option value="test1">Test1</option><option value="test2">Test2</option>`)}</db-select>`},f=[`Change`,`Required`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}}})))()}export{s as i,d as n,p as r,u as t};