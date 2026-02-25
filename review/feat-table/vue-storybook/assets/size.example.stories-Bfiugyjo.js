import{d as o}from"./data-1Z1tDx00.js";import{_ as a}from"./table-CQJWPldZ.js";import{_ as r}from"./infotext-D3qp8Go4.js";import"./iframe-whazM3Lq.js";import"./preload-helper-MpUUyRtn.js";import"./index-lIdn-Pg-.js";import"./link--IVaIgOK.js";const{fn:g}=__STORYBOOK_MODULE_TEST__,x={title:"Components/DBTable/Size",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"},caption:{control:"text"},captionPlain:{control:"text"},data:{control:"object"},divider:{control:"select",options:["none","both","horizontal","vertical"]},showCaption:{control:"boolean"},size:{control:"select",options:["x-small","small","medium","large"]},variant:{control:"select",options:["joined","zebra","floating"]},mobileVariant:{control:"select",options:["table","list"]},stickyHeader:{control:"select",options:["none","both","horizontal","vertical"]},columnSizes:{control:"object"}}},t={args:{size:"x-small",captionPlain:"X-Small",data:o,default:""},render:e=>({components:{DBTable:a,DBInfotext:r},setup(){return{args:e}},template:`<div  :style="{
  minInlineSize: '300px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    X-Small
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})},n={args:{size:"small",captionPlain:"Small",data:o,default:""},render:e=>({components:{DBTable:a,DBInfotext:r},setup(){return{args:e}},template:`<div  :style="{
  minInlineSize: '300px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Small
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})},l={args:{size:"medium",captionPlain:"(Default) Medium",data:o,default:""},render:e=>({components:{DBTable:a,DBInfotext:r},setup(){return{args:e}},template:`<div  :style="{
  minInlineSize: '300px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    (Default) Medium
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})},i={args:{size:"large",captionPlain:"Large",data:o,default:""},render:e=>({components:{DBTable:a,DBInfotext:r},setup(){return{args:e}},template:`<div  :style="{
  minInlineSize: '300px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Large
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "x-small",
    "captionPlain": "X-Small",
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
                    X-Small
                </DBInfotext><DBTable v-bind="args"   >\${args.default}</DBTable></div>\`
  })
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "small",
    "captionPlain": "Small",
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
                    Small
                </DBInfotext><DBTable v-bind="args"   >\${args.default}</DBTable></div>\`
  })
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "medium",
    "captionPlain": "(Default) Medium",
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
                    (Default) Medium
                </DBInfotext><DBTable v-bind="args"   >\${args.default}</DBTable></div>\`
  })
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "large",
    "captionPlain": "Large",
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
                    Large
                </DBInfotext><DBTable v-bind="args"   >\${args.default}</DBTable></div>\`
  })
}`,...i.parameters?.docs?.source}}};const D=["XSmall","Small","DefaultMedium","Large"];export{l as DefaultMedium,i as Large,n as Small,t as XSmall,D as __namedExportsOrder,x as default};
