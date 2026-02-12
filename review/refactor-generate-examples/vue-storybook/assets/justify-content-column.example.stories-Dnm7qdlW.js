import{_ as t}from"./stack-B85WlFwL.js";import{_ as r}from"./infotext-tCTmoIyB.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./index-B7howPqP.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,f={title:"Components/DBStack/Justify Content Column",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["simple","divider"]},gap:{control:"select",options:["none","3x-large","2x-large","x-large","large","medium","small","x-small","2x-small","3x-small"]},direction:{control:"select",options:["row","column"]},wrap:{control:"boolean"},alignment:{control:"select",options:["stretch","start","end","center"]},justifyContent:{control:"select",options:["space-between","start","end","center"]},id:{control:"text"},autofocus:{control:"boolean"}}},a={args:{justifyContent:"start",style:{padding:"var(--db-spacing-fixed-xs)",border:"var(--db-border-width-3xs) dashed var(--db-adaptive-on-bg-basic-emphasis-60-default)"},default:`<span class="dummy-component"><a href="#">Content 1</a></span
><span class="dummy-component">Content 2</span
><span class="dummy-component">Content 3</span>`},render:e=>({components:{DBStack:t,DBInfotext:r},setup(){return{args:e}},template:`<div  :style="{
  alignItems: 'flex-start',
  alignSelf: 'flex-start',
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--db-spacing-fixed-sm)',
  width: '200px',
  height: '200px'
}"  ><DBInfotext size="small" icon="none" semantic="informational"   >
                    (Default) Start
                </DBInfotext><DBStack v-bind="args"   >${e.default}</DBStack></div>`})},n={args:{justifyContent:"center",style:{padding:"var(--db-spacing-fixed-xs)",border:"var(--db-border-width-3xs) dashed var(--db-adaptive-on-bg-basic-emphasis-60-default)"},default:`<span class="dummy-component"><a href="#">Content 1</a></span
><span class="dummy-component">Content 2</span
><span class="dummy-component">Content 3</span>`},render:e=>({components:{DBStack:t,DBInfotext:r},setup(){return{args:e}},template:`<div  :style="{
  alignItems: 'flex-start',
  alignSelf: 'flex-start',
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--db-spacing-fixed-sm)',
  width: '200px',
  height: '200px'
}"  ><DBInfotext size="small" icon="none" semantic="informational"   >
                    Center
                </DBInfotext><DBStack v-bind="args"   >${e.default}</DBStack></div>`})},s={args:{justifyContent:"end",style:{padding:"var(--db-spacing-fixed-xs)",border:"var(--db-border-width-3xs) dashed var(--db-adaptive-on-bg-basic-emphasis-60-default)"},default:`<span class="dummy-component"><a href="#">Content 1</a></span
><span class="dummy-component">Content 2</span
><span class="dummy-component">Content 3</span>`},render:e=>({components:{DBStack:t,DBInfotext:r},setup(){return{args:e}},template:`<div  :style="{
  alignItems: 'flex-start',
  alignSelf: 'flex-start',
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--db-spacing-fixed-sm)',
  width: '200px',
  height: '200px'
}"  ><DBInfotext size="small" icon="none" semantic="informational"   >
                    End
                </DBInfotext><DBStack v-bind="args"   >${e.default}</DBStack></div>`})},o={args:{justifyContent:"space-between",style:{padding:"var(--db-spacing-fixed-xs)",border:"var(--db-border-width-3xs) dashed var(--db-adaptive-on-bg-basic-emphasis-60-default)"},default:`<span class="dummy-component"><a href="#">Content 1</a></span
><span class="dummy-component">Content 2</span
><span class="dummy-component">Content 3</span>`},render:e=>({components:{DBStack:t,DBInfotext:r},setup(){return{args:e}},template:`<div  :style="{
  alignItems: 'flex-start',
  alignSelf: 'flex-start',
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--db-spacing-fixed-sm)',
  width: '200px',
  height: '200px'
}"  ><DBInfotext size="small" icon="none" semantic="informational"   >
                    Space-Between
                </DBInfotext><DBStack v-bind="args"   >${e.default}</DBStack></div>`})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "justifyContent": "start",
    "style": {
      padding: 'var(--db-spacing-fixed-xs)',
      border: 'var(--db-border-width-3xs) dashed var(--db-adaptive-on-bg-basic-emphasis-60-default)'
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
  width: '200px',
  height: '200px'
}"  ><DBInfotext size="small" icon="none" semantic="informational"   >
                    (Default) Start
                </DBInfotext><DBStack v-bind="args"   >\${args.default}</DBStack></div>\`
  })
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "justifyContent": "center",
    "style": {
      padding: 'var(--db-spacing-fixed-xs)',
      border: 'var(--db-border-width-3xs) dashed var(--db-adaptive-on-bg-basic-emphasis-60-default)'
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
  width: '200px',
  height: '200px'
}"  ><DBInfotext size="small" icon="none" semantic="informational"   >
                    Center
                </DBInfotext><DBStack v-bind="args"   >\${args.default}</DBStack></div>\`
  })
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "justifyContent": "end",
    "style": {
      padding: 'var(--db-spacing-fixed-xs)',
      border: 'var(--db-border-width-3xs) dashed var(--db-adaptive-on-bg-basic-emphasis-60-default)'
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
  width: '200px',
  height: '200px'
}"  ><DBInfotext size="small" icon="none" semantic="informational"   >
                    End
                </DBInfotext><DBStack v-bind="args"   >\${args.default}</DBStack></div>\`
  })
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "justifyContent": "space-between",
    "style": {
      padding: 'var(--db-spacing-fixed-xs)',
      border: 'var(--db-border-width-3xs) dashed var(--db-adaptive-on-bg-basic-emphasis-60-default)'
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
  width: '200px',
  height: '200px'
}"  ><DBInfotext size="small" icon="none" semantic="informational"   >
                    Space-Between
                </DBInfotext><DBStack v-bind="args"   >\${args.default}</DBStack></div>\`
  })
}`,...o.parameters?.docs?.source}}};const x=["DefaultStart","Center","End","SpaceBetween"];export{n as Center,a as DefaultStart,s as End,o as SpaceBetween,x as __namedExportsOrder,f as default};
