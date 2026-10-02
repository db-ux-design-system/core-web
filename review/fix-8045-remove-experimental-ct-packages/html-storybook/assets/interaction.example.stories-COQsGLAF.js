import{n as e}from"./iframe-BD3uDIoj.js";import{n as t,t as n}from"./select-BCSlyOQA.js";import{n as r}from"./rolldown-runtime-DkW27tQK.js";var i,a,o,s,c,l;function u(){return(u=r((()=>{t(),i=e(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBSelect/Interaction`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:a()},argTypes:{options:{control:`object`},label:{control:`text`},placeholder:{control:`text`},variant:{control:`select`,options:[`above`,`floating`]},value:{control:`text`},showLabel:{control:`boolean`},message:{control:`text`},showMessage:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},invalidMessage:{control:`text`},validMessage:{control:`text`},disabled:{control:`boolean`},showIcon:{control:`boolean`},required:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},name:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},size:{control:`number`},multiple:{control:`boolean`},showEmptyOption:{control:`boolean`},autocomplete:{control:`text`},messageIcon:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},s={args:{"data-testid":`select-change`,label:`Label`,placeholder:`Placeholder`,onInput:a(),children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(`option`,{value:`test1`,children:`Test1`}),(0,i.jsx)(`option`,{value:`test2`,children:`Test2`})]})},render:e=>(0,i.jsx)(n,{...e})},c={args:{"data-testid":`select-required`,label:`Label`,value:``,placeholder:`Choose an option`,required:!0,children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(`option`,{value:`test1`,children:`Test1`}),(0,i.jsx)(`option`,{value:`test2`,children:`Test2`})]})},render:e=>(0,i.jsx)(n,{...e})},l=[`Change`,`Required`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "select-change",
    "label": "Label",
    "placeholder": "Placeholder",
    "onInput": fn(),
    "children": <><option value="test1">Test1</option><option value="test2">Test2</option></>
  },
  render: (properties: any) => <DBSelect {...properties} />
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "select-required",
    "label": "Label",
    "value": "",
    "placeholder": "Choose an option",
    "required": true,
    "children": <><option value="test1">Test1</option><option value="test2">Test2</option></>
  },
  render: (properties: any) => <DBSelect {...properties} />
}`,...c.parameters?.docs?.source}}}})))()}u();export{s as Change,c as Required,l as __namedExportsOrder,o as default};