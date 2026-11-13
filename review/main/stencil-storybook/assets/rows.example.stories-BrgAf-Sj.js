import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-DdTBnHTV.js";import{n as i,t as a}from"./apply-web-component-args-v7OxqSTB.js";var o=t({Custom:()=>u,Default4Rows:()=>l,__namedExportsOrder:()=>d,default:()=>c}),s,c,l,u,d;function f(){return(f=e((()=>{r(),a(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBTextarea/Rows`,component:`db-textarea`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{label:{control:`text`},variant:{control:`select`,options:[`above`,`floating`]},value:{control:`text`},showLabel:{control:`boolean`},message:{control:`text`},disabled:{control:`boolean`},readOnly:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},invalidMessage:{control:`text`},validMessage:{control:`text`},required:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},rows:{control:`number`},cols:{control:`number`},showResizer:{control:`boolean`},fieldSizing:{control:`select`,options:[`fixed`,`content`]},resize:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},spellCheck:{control:`boolean`},wrap:{control:`select`,options:[`hard`,`soft`,`off`]},placeholder:{control:`text`},name:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},minLength:{control:`number`},maxLength:{control:`number`},autocomplete:{control:`text`},messageIcon:{control:`text`},showMessage:{control:`boolean`},id:{control:`text`},autofocus:{control:`boolean`}}},l={args:{label:`(Default) 4 Rows`,value:`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.`,placeholder:`(Default) 4 Rows`},render:({children:e,...t})=>n`<div style="width: 328px"><db-textarea ${i(t)}></db-textarea></div>`},u={args:{label:`Custom Example 8 Rows`,value:`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.`,placeholder:`Custom`,rows:8},render:({children:e,...t})=>n`<div style="width: 328px"><db-textarea ${i(t)}></db-textarea></div>`},d=[`Default4Rows`,`Custom`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "(Default) 4 Rows",
    "value": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    "placeholder": "(Default) 4 Rows"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="width: 328px"><db-textarea \${spreadArgs(args)}></db-textarea></div>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Custom Example 8 Rows",
    "value": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    "placeholder": "Custom",
    "rows": 8
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div style="width: 328px"><db-textarea \${spreadArgs(args)}></db-textarea></div>\`
}`,...u.parameters?.docs?.source}}}})))()}export{o as i,l as n,f as r,u as t};