import{d as l}from"./data-ntzduIQ0.js";import{_ as n}from"./infotext-ChOUO4Z5.js";import{e as a}from"./table-GLC2voEl.js";import"./iframe-DfvinHPj.js";import"./preload-helper-eESElaRw.js";import"./index-COCtms_G.js";import"./link-BfaEHrBZ.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,f={title:"Components/DBTable/Width",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"},caption:{control:"text"},captionPlain:{control:"text"},data:{control:"object"},divider:{control:"select",options:["none","both","horizontal","vertical"]},showCaption:{control:"boolean"},size:{control:"select",options:["x-small","small","medium","large"]},variant:{control:"select",options:["joined","zebra","floating"]},mobileVariant:{control:"select",options:["table","list"]},stickyHeader:{control:"select",options:["none","both","horizontal","vertical"]},columnSizes:{control:"object"}}},t={args:{width:"full",captionPlain:"(Default) Full",data:l,default:""},render:e=>({components:{DBTable:a,DBInfotext:n},setup(){return{args:e}},template:`<div  :style="{
  inlineSize: '300px',
  display: 'flex',
  flexDirection: 'column'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    (Default) Full
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})},o={args:{width:"auto",captionPlain:"Auto",data:l,default:""},render:e=>({components:{DBTable:a,DBInfotext:n},setup(){return{args:e}},template:`<div  :style="{
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
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const D=["DefaultFull","Auto"];export{o as Auto,t as DefaultFull,D as __namedExportsOrder,f as default};
