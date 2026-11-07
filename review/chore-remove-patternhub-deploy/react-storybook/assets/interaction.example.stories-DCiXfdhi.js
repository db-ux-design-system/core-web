import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./select-CS3SzcAP.js";var a=t({Change:()=>l,Required:()=>u,__namedExportsOrder:()=>d,default:()=>c}),o,s,c,l,u,d;function f(){return(f=e((()=>{r(),o=n(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBSelect/Interaction`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:s()},argTypes:{options:{control:`object`},label:{control:`text`},placeholder:{control:`text`},variant:{control:`select`,options:[`above`,`floating`]},value:{control:`text`},showLabel:{control:`boolean`},message:{control:`text`},showMessage:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},invalidMessage:{control:`text`},validMessage:{control:`text`},disabled:{control:`boolean`},showIcon:{control:`boolean`},required:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},name:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},size:{control:`number`},multiple:{control:`boolean`},showEmptyOption:{control:`boolean`},autocomplete:{control:`text`},messageIcon:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},l={args:{"data-testid":`select-change`,label:`Label`,placeholder:`Placeholder`,onInput:s(),children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(`option`,{value:`test1`,children:`Test1`}),(0,o.jsx)(`option`,{value:`test2`,children:`Test2`})]})},render:e=>(0,o.jsx)(i,{...e})},u={args:{"data-testid":`select-required`,label:`Label`,value:``,placeholder:`Choose an option`,required:!0,children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(`option`,{value:`test1`,children:`Test1`}),(0,o.jsx)(`option`,{value:`test2`,children:`Test2`})]})},render:e=>(0,o.jsx)(i,{...e})},d=[`Change`,`Required`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "select-change",
    "label": "Label",
    "placeholder": "Placeholder",
    "onInput": fn(),
    "children": <><option value="test1">Test1</option><option value="test2">Test2</option></>
  },
  render: (properties: any) => <DBSelect {...properties} />
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "select-required",
    "label": "Label",
    "value": "",
    "placeholder": "Choose an option",
    "required": true,
    "children": <><option value="test1">Test1</option><option value="test2">Test2</option></>
  },
  render: (properties: any) => <DBSelect {...properties} />
}`,...u.parameters?.docs?.source}}}})))()}export{a as i,u as n,f as r,l as t};