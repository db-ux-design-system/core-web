import{o as l}from"./data-ntzduIQ0.js";import{_ as r}from"./infotext-ChOUO4Z5.js";import{e as t}from"./table-GLC2voEl.js";import"./iframe-DfvinHPj.js";import"./preload-helper-eESElaRw.js";import"./index-COCtms_G.js";import"./link-BfaEHrBZ.js";const{fn:b}=__STORYBOOK_MODULE_TEST__,D={title:"Components/DBTable/Sticky Header",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"},caption:{control:"text"},captionPlain:{control:"text"},data:{control:"object"},divider:{control:"select",options:["none","both","horizontal","vertical"]},showCaption:{control:"boolean"},size:{control:"select",options:["x-small","small","medium","large"]},variant:{control:"select",options:["joined","zebra","floating"]},mobileVariant:{control:"select",options:["table","list"]},stickyHeader:{control:"select",options:["none","both","horizontal","vertical"]},columnSizes:{control:"object"}}},a={args:{captionPlain:"(Default) None",data:l,default:""},render:e=>({components:{DBTable:t,DBInfotext:r},setup(){return{args:e}},template:`<div  :style="{
  inlineSize: '300px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)',
  blockSize: '300px'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    (Default) None
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})},n={args:{captionPlain:"Both",stickyHeader:"both",data:l,default:""},render:e=>({components:{DBTable:t,DBInfotext:r},setup(){return{args:e}},template:`<div  :style="{
  inlineSize: '300px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)',
  blockSize: '300px'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Both
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})},o={args:{stickyHeader:"horizontal",captionPlain:"Horizontal",data:l,default:""},render:e=>({components:{DBTable:t,DBInfotext:r},setup(){return{args:e}},template:`<div  :style="{
  inlineSize: '300px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)',
  blockSize: '300px'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Horizontal
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})},i={args:{stickyHeader:"vertical",captionPlain:"Vertical",data:l,default:""},render:e=>({components:{DBTable:t,DBInfotext:r},setup(){return{args:e}},template:`<div  :style="{
  inlineSize: '300px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)',
  blockSize: '300px'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Vertical
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "captionPlain": "(Default) None",
    "data": overflowTable,
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
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)',
  blockSize: '300px'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    (Default) None
                </DBInfotext><DBTable v-bind="args"   >\${args.default}</DBTable></div>\`
  })
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "captionPlain": "Both",
    "stickyHeader": "both",
    "data": overflowTable,
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
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)',
  blockSize: '300px'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Both
                </DBInfotext><DBTable v-bind="args"   >\${args.default}</DBTable></div>\`
  })
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "stickyHeader": "horizontal",
    "captionPlain": "Horizontal",
    "data": overflowTable,
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
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)',
  blockSize: '300px'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Horizontal
                </DBInfotext><DBTable v-bind="args"   >\${args.default}</DBTable></div>\`
  })
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    "stickyHeader": "vertical",
    "captionPlain": "Vertical",
    "data": overflowTable,
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
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)',
  blockSize: '300px'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Vertical
                </DBInfotext><DBTable v-bind="args"   >\${args.default}</DBTable></div>\`
  })
}`,...i.parameters?.docs?.source}}};const u=["DefaultNone","Both","Horizontal","Vertical"];export{n as Both,a as DefaultNone,o as Horizontal,i as Vertical,u as __namedExportsOrder,D as default};
