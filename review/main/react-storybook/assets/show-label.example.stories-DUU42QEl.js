import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-DnaggZxp.js";import{D as n,d as r,t as i}from"./src-D3LY8vWO.js";var a,o,s,c,l,u;e((()=>{i(),a=t(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBRadio/Show Label`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{name:{control:`text`},value:{control:`text`},disabled:{control:`boolean`},checked:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},size:{control:`select`,options:[`small`,`medium`]},required:{control:`boolean`},showLabel:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},label:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},c={args:{name:`Content`,showLabel:!0,children:`(Default) True`},render:e=>(0,a.jsx)(r,{...e})},l={args:{name:`Content`,showLabel:!1,children:`False`},render:e=>(0,a.jsxs)(`div`,{children:[(0,a.jsx)(r,{...e}),(0,a.jsx)(n,{semantic:`informational`,size:`small`,icon:`none`,children:`False`})]})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Content",
    "showLabel": true,
    "children": "(Default) True"
  },
  render: (properties: any) => <DBRadio {...properties} />
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Content",
    "showLabel": false,
    "children": "False"
  },
  render: (properties: any) => <div><DBRadio {...properties} /><DBInfotext semantic="informational" size="small" icon="none">
                    False
                </DBInfotext></div>
}`,...l.parameters?.docs?.source}}},u=[`DefaultTrue`,`False`]}))();export{c as DefaultTrue,l as False,u as __namedExportsOrder,s as default};