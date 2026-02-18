import{d as n}from"./data-1Z1tDx00.js";import{_ as l}from"./table-Nu33k7Ae.js";import{_ as o}from"./infotext-DpGI-8Jt.js";import"./iframe-XYC5JVpw.js";import"./preload-helper-MpUUyRtn.js";import"./index-DAOIw2cL.js";import"./link-BFuUpPuS.js";const{fn:c}=__STORYBOOK_MODULE_TEST__,p={title:"Components/DBTable/Width",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"}}},t={args:{width:"full",captionPlain:"(Default) Full",data:n,default:""},render:e=>({components:{DBTable:l,DBInfotext:o},setup(){return{args:e}},template:`<div  :style="{
  inlineSize: '300px',
  display: 'flex',
  flexDirection: 'column'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    (Default) Full
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})},a={args:{width:"auto",captionPlain:"Auto",data:n,default:""},render:e=>({components:{DBTable:l,DBInfotext:o},setup(){return{args:e}},template:`<div  :style="{
  inlineSize: '300px',
  display: 'flex',
  flexDirection: 'column'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Auto
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
    "captionPlain": "(Default) Full",
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
  inlineSize: '300px',
  display: 'flex',
  flexDirection: 'column'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    (Default) Full
                </DBInfotext><DBTable v-bind="args"   >\${args.default}</DBTable></div>\`
  })
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "auto",
    "captionPlain": "Auto",
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
  inlineSize: '300px',
  display: 'flex',
  flexDirection: 'column'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Auto
                </DBInfotext><DBTable v-bind="args"   >\${args.default}</DBTable></div>\`
  })
}`,...a.parameters?.docs?.source}}};const D=["DefaultFull","Auto"];export{a as Auto,t as DefaultFull,D as __namedExportsOrder,p as default};
