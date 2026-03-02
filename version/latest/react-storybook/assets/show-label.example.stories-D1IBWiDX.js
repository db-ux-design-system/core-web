import{j as t}from"./jsx-runtime-u17CrQMm.js";import{D as a}from"./checkbox-DRtzzb8s.js";import{D as n}from"./infotext-C4SWbymK.js";import"./index-D2E5Z_bU.js";import"./iframe-D7o_mymi.js";import"./preload-helper-DYrPA5AR.js";import"./constants-C-ysBZRi.js";import"./form-components-OaQ73I72.js";const{fn:u}=__STORYBOOK_MODULE_TEST__,x={title:"Components/DBCheckbox/Show Label",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text"},disabled:{control:"boolean"},checked:{control:"boolean"},indeterminate:{control:"boolean"},validation:{control:"select",options:["invalid","valid","no-validation"]},invalidMessage:{control:"text"},validMessage:{control:"text"},message:{control:"text"},showMessage:{control:"boolean"},size:{control:"select",options:["small","medium"]},required:{control:"boolean"},showLabel:{control:"boolean"},showRequiredAsterisk:{control:"boolean"},label:{control:"text"},placeholder:{control:"text"},variant:{control:"select",options:["above","floating"]},value:{control:"text"},form:{control:"text"},ariaDescribedBy:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},e={args:{name:"Label",showLabel:!0,children:"(Default) True"},render:r=>t.jsx(a,{...r})},o={args:{name:"Label",showLabel:!1,children:"False"},render:r=>t.jsxs("div",{children:[t.jsx(a,{...r}),t.jsx(n,{semantic:"informational",size:"small",icon:"none",children:"False"})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Label",
    "showLabel": true,
    "children": "(Default) True"
  },
  render: (properties: any) => <DBCheckbox {...properties} />
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Label",
    "showLabel": false,
    "children": "False"
  },
  render: (properties: any) => <div><DBCheckbox {...properties} /><DBInfotext semantic="informational" size="small" icon="none">
                    False
                </DBInfotext></div>
}`,...o.parameters?.docs?.source}}};const h=["DefaultTrue","False"];export{e as DefaultTrue,o as False,h as __namedExportsOrder,x as default};
