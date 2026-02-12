import{_ as a}from"./stack-B85WlFwL.js";import{_ as s}from"./infotext-tCTmoIyB.js";import{_ as o}from"./divider-CRpTzI18.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./index-B7howPqP.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,f={title:"Components/DBStack/Variant",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["simple","divider"]},gap:{control:"select",options:["none","3x-large","2x-large","x-large","large","medium","small","x-small","2x-small","3x-small"]},direction:{control:"select",options:["row","column"]},wrap:{control:"boolean"},alignment:{control:"select",options:["stretch","start","end","center"]},justifyContent:{control:"select",options:["space-between","start","end","center"]},id:{control:"text"},autofocus:{control:"boolean"}}},t={args:{style:{padding:"var(--db-spacing-fixed-xs)"},default:`<span class="dummy-component"><a href="#">Content 1</a></span
><span class="dummy-component">Content 2</span
><span class="dummy-component">Content 3</span>`},render:e=>({components:{DBStack:a,DBDivider:o,DBInfotext:s},setup(){return{args:e}},template:`<div  :style="{
  alignItems: 'flex-start',
  alignSelf: 'flex-start',
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--db-spacing-fixed-sm)',
  width: '200px'
}"  ><DBInfotext size="small" icon="none" semantic="informational"   >
                    (Default) Simple
                </DBInfotext><DBStack v-bind="args"   >${e.default}</DBStack></div>`})},n={args:{variant:"divider",style:{padding:"var(--db-spacing-fixed-xs)"},default:`<span class="dummy-component"><a href="#">Content 1</a></span
><DBDivider></DBDivider><span class="dummy-component">Content 2</span
><DBDivider></DBDivider><span class="dummy-component">Content 3</span>`},render:e=>({components:{DBStack:a,DBDivider:o,DBInfotext:s},setup(){return{args:e}},template:`<div  :style="{
  alignItems: 'flex-start',
  alignSelf: 'flex-start',
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--db-spacing-fixed-sm)',
  width: '200px'
}"  ><DBInfotext size="small" icon="none" semantic="informational"   >
                    Divider
                </DBInfotext><DBStack v-bind="args"   >${e.default}</DBStack></div>`})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "style": {
      padding: 'var(--db-spacing-fixed-xs)'
    },
    "default": \`<span class="dummy-component"><a href="#">Content 1</a></span
><span class="dummy-component">Content 2</span
><span class="dummy-component">Content 3</span>\`
  },
  render: (args: any) => ({
    components: {
      DBStack,
      DBDivider,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  alignItems: 'flex-start',
  alignSelf: 'flex-start',
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--db-spacing-fixed-sm)',
  width: '200px'
}"  ><DBInfotext size="small" icon="none" semantic="informational"   >
                    (Default) Simple
                </DBInfotext><DBStack v-bind="args"   >\${args.default}</DBStack></div>\`
  })
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "divider",
    "style": {
      padding: 'var(--db-spacing-fixed-xs)'
    },
    "default": \`<span class="dummy-component"><a href="#">Content 1</a></span
><DBDivider></DBDivider><span class="dummy-component">Content 2</span
><DBDivider></DBDivider><span class="dummy-component">Content 3</span>\`
  },
  render: (args: any) => ({
    components: {
      DBStack,
      DBDivider,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  alignItems: 'flex-start',
  alignSelf: 'flex-start',
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--db-spacing-fixed-sm)',
  width: '200px'
}"  ><DBInfotext size="small" icon="none" semantic="informational"   >
                    Divider
                </DBInfotext><DBStack v-bind="args"   >\${args.default}</DBStack></div>\`
  })
}`,...n.parameters?.docs?.source}}};const D=["DefaultSimple","Divider"];export{t as DefaultSimple,n as Divider,D as __namedExportsOrder,f as default};
