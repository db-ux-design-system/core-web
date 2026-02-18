import{d as i}from"./data-B3NKhOWE.js";import{_ as n}from"./table-DpNikhAH.js";import{_ as l}from"./infotext-DDO9C6Yt.js";import"./iframe-BjIVkaYK.js";import"./preload-helper-MpUUyRtn.js";import"./index-DAOIw2cL.js";import"./link-BKH3jo-A.js";const{fn:f}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBTable/Mobile Variant",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"}}},a={args:{mobileVariant:"table",captionPlain:"(Default) Table",data:i,default:""},render:e=>({components:{DBTable:n,DBInfotext:l},setup(){return{args:e}},template:`<div  :style="{
  minInlineSize: '300px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    (Default) Table
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})},t={args:{mobileVariant:"list",captionPlain:"List",data:i,default:""},render:e=>({components:{DBTable:n,DBInfotext:l},setup(){return{args:e}},template:`<div  :style="{
  minInlineSize: '300px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    List
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "mobileVariant": "table",
    "captionPlain": "(Default) Table",
    "data": defaultTable,
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBTable,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  minInlineSize: '300px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    (Default) Table
                </DBInfotext><DBTable v-bind="args"   >\${args.default}</DBTable></div>\`
  })
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "mobileVariant": "list",
    "captionPlain": "List",
    "data": defaultTable,
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBTable,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  minInlineSize: '300px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    List
                </DBInfotext><DBTable v-bind="args"   >\${args.default}</DBTable></div>\`
  })
}`,...t.parameters?.docs?.source}}};const b=["DefaultTable","List"];export{a as DefaultTable,t as List,b as __namedExportsOrder,u as default};
