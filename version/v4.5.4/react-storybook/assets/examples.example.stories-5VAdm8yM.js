import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as n}from"./link-BwAVlzFc.js";import"./index-D2E5Z_bU.js";import"./iframe-D0Rqs9UN.js";import"./preload-helper-aOBw0osJ.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,p={title:"Components/DBLink/Examples",component:n,parameters:{layout:"centered"},tags:["autodocs"],args:{onClick:t()},argTypes:{href:{control:"text"},variant:{control:"select",options:["adaptive","brand","inline"]},disabled:{control:"boolean"},size:{control:"select",options:["medium","small"]},content:{control:"select",options:["external","internal"]},showIcon:{control:"boolean"},wrap:{control:"boolean"},text:{control:"text"},target:{control:"select",options:["_self","_blank","_parent","_top"]},rel:{control:"text"},hreflang:{control:"text"},referrerPolicy:{control:"select",options:["no-referrer","no-referrer-when-downgrade","origin","origin-when-cross-origin","same-origin","strict-origin","strict-origin-when-cross-origin","unsafe-url"]},role:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClick:{action:"onClick"}}},o={args:{href:"#",variant:"inline",text:"Variant Inline"},render:r=>e.jsx(n,{...r})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "href": "#",
    "variant": "inline",
    "text": "Variant Inline"
  },
  render: (properties: any) => <DBLink {...properties} />
}`,...o.parameters?.docs?.source}}};const m=["VariantInline"];export{o as VariantInline,m as __namedExportsOrder,p as default};
