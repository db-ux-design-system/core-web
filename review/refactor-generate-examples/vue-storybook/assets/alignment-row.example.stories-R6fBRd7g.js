import{_ as t}from"./stack-B85WlFwL.js";import{_ as r}from"./infotext-tCTmoIyB.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./index-B7howPqP.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,f={title:"Components/DBStack/Alignment Row",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["simple","divider"]},gap:{control:"select",options:["none","3x-large","2x-large","x-large","large","medium","small","x-small","2x-small","3x-small"]},direction:{control:"select",options:["row","column"]},wrap:{control:"boolean"},alignment:{control:"select",options:["stretch","start","end","center"]},justifyContent:{control:"select",options:["space-between","start","end","center"]},id:{control:"text"},autofocus:{control:"boolean"}}},a={args:{alignment:"stretch",direction:"row",style:{padding:"var(--db-spacing-fixed-xs)",border:"var(--db-border-width-3xs) dashed var(--db-adaptive-on-bg-basic-emphasis-60-default)"},default:`<span class="dummy-component"><a href="#">Content 1</a></span
><span class="dummy-component">Content 2</span
><span class="dummy-component">Content 3</span>`},render:e=>({components:{DBStack:t,DBInfotext:r},setup(){return{args:e}},template:`<div  :style="{
  alignItems: 'flex-start',
  alignSelf: 'flex-start',
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--db-spacing-fixed-sm)',
  height: '100px'
}"  ><DBInfotext size="small" icon="none" semantic="informational"   >
                    (Default) Stretch
                </DBInfotext><DBStack v-bind="args"   >${e.default}</DBStack></div>`})},n={args:{alignment:"start",direction:"row",style:{padding:"var(--db-spacing-fixed-xs)",border:"var(--db-border-width-3xs) dashed var(--db-adaptive-on-bg-basic-emphasis-60-default)"},default:`<span class="dummy-component"><a href="#">Content 1</a></span
><span class="dummy-component">Content 2</span
><span class="dummy-component">Content 3</span>`},render:e=>({components:{DBStack:t,DBInfotext:r},setup(){return{args:e}},template:`<div  :style="{
  alignItems: 'flex-start',
  alignSelf: 'flex-start',
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--db-spacing-fixed-sm)',
  height: '100px'
}"  ><DBInfotext size="small" icon="none" semantic="informational"   >
                    Start
                </DBInfotext><DBStack v-bind="args"   >${e.default}</DBStack></div>`})},s={args:{alignment:"center",direction:"row",style:{padding:"var(--db-spacing-fixed-xs)",border:"var(--db-border-width-3xs) dashed var(--db-adaptive-on-bg-basic-emphasis-60-default)"},default:`<span class="dummy-component"><a href="#">Content 1</a></span
><span class="dummy-component">Content 2</span
><span class="dummy-component">Content 3</span>`},render:e=>({components:{DBStack:t,DBInfotext:r},setup(){return{args:e}},template:`<div  :style="{
  alignItems: 'flex-start',
  alignSelf: 'flex-start',
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--db-spacing-fixed-sm)',
  height: '100px'
}"  ><DBInfotext size="small" icon="none" semantic="informational"   >
                    Center
                </DBInfotext><DBStack v-bind="args"   >${e.default}</DBStack></div>`})},o={args:{alignment:"end",direction:"row",style:{padding:"var(--db-spacing-fixed-xs)",border:"var(--db-border-width-3xs) dashed var(--db-adaptive-on-bg-basic-emphasis-60-default)"},default:`<span class="dummy-component"><a href="#">Content 1</a></span
><span class="dummy-component">Content 2</span
><span class="dummy-component">Content 3</span>`},render:e=>({components:{DBStack:t,DBInfotext:r},setup(){return{args:e}},template:`<div  :style="{
  alignItems: 'flex-start',
  alignSelf: 'flex-start',
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--db-spacing-fixed-sm)',
  height: '100px'
}"  ><DBInfotext size="small" icon="none" semantic="informational"   >
                    End
                </DBInfotext><DBStack v-bind="args"   >${e.default}</DBStack></div>`})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "alignment": "stretch",
    "direction": "row",
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
  height: '100px'
}"  ><DBInfotext size="small" icon="none" semantic="informational"   >
                    (Default) Stretch
                </DBInfotext><DBStack v-bind="args"   >\${args.default}</DBStack></div>\`
  })
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "alignment": "start",
    "direction": "row",
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
  height: '100px'
}"  ><DBInfotext size="small" icon="none" semantic="informational"   >
                    Start
                </DBInfotext><DBStack v-bind="args"   >\${args.default}</DBStack></div>\`
  })
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "alignment": "center",
    "direction": "row",
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
  height: '100px'
}"  ><DBInfotext size="small" icon="none" semantic="informational"   >
                    Center
                </DBInfotext><DBStack v-bind="args"   >\${args.default}</DBStack></div>\`
  })
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "alignment": "end",
    "direction": "row",
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
  height: '100px'
}"  ><DBInfotext size="small" icon="none" semantic="informational"   >
                    End
                </DBInfotext><DBStack v-bind="args"   >\${args.default}</DBStack></div>\`
  })
}`,...o.parameters?.docs?.source}}};const g=["DefaultStretch","Start","Center","End"];export{s as Center,a as DefaultStretch,o as End,n as Start,g as __namedExportsOrder,f as default};
