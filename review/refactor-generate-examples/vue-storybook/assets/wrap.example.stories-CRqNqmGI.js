import{_ as a}from"./stack-B85WlFwL.js";import{_ as r}from"./infotext-tCTmoIyB.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./index-B7howPqP.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:"Components/DBStack/Wrap",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["simple","divider"]},gap:{control:"select",options:["none","3x-large","2x-large","x-large","large","medium","small","x-small","2x-small","3x-small"]},direction:{control:"select",options:["row","column"]},wrap:{control:"boolean"},alignment:{control:"select",options:["stretch","start","end","center"]},justifyContent:{control:"select",options:["space-between","start","end","center"]},id:{control:"text"},autofocus:{control:"boolean"}}},e={args:{style:{padding:"var(--db-spacing-fixed-xs)"},default:`<span class="dummy-component"><a href="#">Content 1</a></span
><span class="dummy-component">Content 2</span
><span class="dummy-component">Content 3</span>`},render:t=>({components:{DBStack:a,DBInfotext:r},setup(){return{args:t}},template:`<div  :style="{
  alignItems: 'flex-start',
  alignSelf: 'flex-start',
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--db-spacing-fixed-sm)',
  width: '160px',
  height: '88px'
}"  ><DBInfotext size="small" icon="none" semantic="informational"   >
                    (Default) No Wrap: Column
                </DBInfotext><DBStack v-bind="args"   >${t.default}</DBStack></div>`})},n={args:{direction:"row",style:{padding:"var(--db-spacing-fixed-xs)"},default:`<span class="dummy-component"><a href="#">Content 1</a></span
><span class="dummy-component">Content 2</span
><span class="dummy-component">Content 3</span>`},render:t=>({components:{DBStack:a,DBInfotext:r},setup(){return{args:t}},template:`<div  :style="{
  alignItems: 'flex-start',
  alignSelf: 'flex-start',
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--db-spacing-fixed-sm)',
  width: '160px',
  height: '88px'
}"  ><DBInfotext size="small" icon="none" semantic="informational"   >
                    No Wrap: Row
                </DBInfotext><DBStack v-bind="args"   >${t.default}</DBStack></div>`})},s={args:{style:{padding:"var(--db-spacing-fixed-xs)"},wrap:!0,default:`<span class="dummy-component"><a href="#">Content 1</a></span
><span class="dummy-component">Content 2</span
><span class="dummy-component">Content 3</span>`},render:t=>({components:{DBStack:a,DBInfotext:r},setup(){return{args:t}},template:`<div  :style="{
  alignItems: 'flex-start',
  alignSelf: 'flex-start',
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--db-spacing-fixed-sm)',
  width: '160px',
  height: '120px'
}"  ><DBInfotext size="small" icon="none" semantic="informational"   >
                    Wrap: Column
                </DBInfotext><DBStack v-bind="args"   >${t.default}</DBStack></div>`})},o={args:{direction:"row",style:{padding:"var(--db-spacing-fixed-xs)"},wrap:!0,default:`<span class="dummy-component"><a href="#">Content 1</a></span
><span class="dummy-component">Content 2</span
><span class="dummy-component">Content 3</span>`},render:t=>({components:{DBStack:a,DBInfotext:r},setup(){return{args:t}},template:`<div  :style="{
  alignItems: 'flex-start',
  alignSelf: 'flex-start',
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--db-spacing-fixed-sm)',
  width: '180px',
  height: '100px'
}"  ><DBInfotext size="small" icon="none" semantic="informational"   >
                    Wrap: Row
                </DBInfotext><DBStack v-bind="args"   >${t.default}</DBStack></div>`})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
  width: '160px',
  height: '88px'
}"  ><DBInfotext size="small" icon="none" semantic="informational"   >
                    (Default) No Wrap: Column
                </DBInfotext><DBStack v-bind="args"   >\${args.default}</DBStack></div>\`
  })
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "direction": "row",
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
  width: '160px',
  height: '88px'
}"  ><DBInfotext size="small" icon="none" semantic="informational"   >
                    No Wrap: Row
                </DBInfotext><DBStack v-bind="args"   >\${args.default}</DBStack></div>\`
  })
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "style": {
      padding: 'var(--db-spacing-fixed-xs)'
    },
    "wrap": true,
    "default": \`<span class="dummy-component"><a href="#">Content 1</a></span
><span class="dummy-component">Content 2</span
><span class="dummy-component">Content 3</span>\`
  },
  render: (args: any) => ({
    components: {
      DBStack,
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
  width: '160px',
  height: '120px'
}"  ><DBInfotext size="small" icon="none" semantic="informational"   >
                    Wrap: Column
                </DBInfotext><DBStack v-bind="args"   >\${args.default}</DBStack></div>\`
  })
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "direction": "row",
    "style": {
      padding: 'var(--db-spacing-fixed-xs)'
    },
    "wrap": true,
    "default": \`<span class="dummy-component"><a href="#">Content 1</a></span
><span class="dummy-component">Content 2</span
><span class="dummy-component">Content 3</span>\`
  },
  render: (args: any) => ({
    components: {
      DBStack,
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
  width: '180px',
  height: '100px'
}"  ><DBInfotext size="small" icon="none" semantic="informational"   >
                    Wrap: Row
                </DBInfotext><DBStack v-bind="args"   >\${args.default}</DBStack></div>\`
  })
}`,...o.parameters?.docs?.source}}};const x=["DefaultNoWrapColumn","NoWrapRow","WrapColumn","WrapRow"];export{e as DefaultNoWrapColumn,n as NoWrapRow,s as WrapColumn,o as WrapRow,x as __namedExportsOrder,f as default};
