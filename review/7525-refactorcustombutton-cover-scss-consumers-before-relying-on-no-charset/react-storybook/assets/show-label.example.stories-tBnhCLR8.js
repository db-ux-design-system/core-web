import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./infotext-BqJKVIRe.js";import{n as i,t as a}from"./radio-DjrnI5i8.js";var o,s,c,l,u,d;function f(){return(f=e((()=>{n(),i(),o=t(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBRadio/Show Label`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{name:{control:`text`},value:{control:`text`},disabled:{control:`boolean`},checked:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},size:{control:`select`,options:[`small`,`medium`]},required:{control:`boolean`},showLabel:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},label:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},l={args:{name:`Content`,showLabel:!0,children:`(Default) True`},render:e=>(0,o.jsx)(a,{...e})},u={args:{name:`Content`,showLabel:!1,children:`False`},render:e=>(0,o.jsxs)(`div`,{children:[(0,o.jsx)(a,{...e}),(0,o.jsx)(r,{semantic:`informational`,size:`small`,icon:`none`,children:`False`})]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Content",
    "showLabel": true,
    "children": "(Default) True"
  },
  render: (properties: any) => <DBRadio {...properties} />
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Content",
    "showLabel": false,
    "children": "False"
  },
  render: (properties: any) => <div><DBRadio {...properties} /><DBInfotext semantic="informational" size="small" icon="none">
                    False
                </DBInfotext></div>
}`,...u.parameters?.docs?.source}}},d=[`DefaultTrue`,`False`]})))()}f();export{l as DefaultTrue,u as False,d as __namedExportsOrder,c as default};