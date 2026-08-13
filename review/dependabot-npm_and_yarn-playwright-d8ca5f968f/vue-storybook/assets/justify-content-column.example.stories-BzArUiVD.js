import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./infotext-m3R1x3cV.js";import{n as r,t as i}from"./stack-DN_34qCv.js";var a,o,s,c,l,u,d;function f(){return(f=e((()=>{t(),i(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBStack/Justify Content Column`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`simple`,`divider`]},gap:{control:`select`,options:[`none`,`3x-large`,`2x-large`,`x-large`,`large`,`medium`,`small`,`x-small`,`2x-small`,`3x-small`]},direction:{control:`select`,options:[`row`,`column`]},wrap:{control:`boolean`},alignment:{control:`select`,options:[`stretch`,`start`,`end`,`center`]},justifyContent:{control:`select`,options:[`space-between`,`start`,`end`,`center`]},id:{control:`text`},autofocus:{control:`boolean`}}},s={args:{justifyContent:`start`,style:{padding:`var(--db-spacing-fixed-xs)`,border:`var(--db-border-width-3xs) dashed var(--db-adaptive-on-bg-basic-emphasis-60-default)`},default:`<span class="dummy-component"><a href="#">Content 1</a></span
><span class="dummy-component">Content 2</span
><span class="dummy-component">Content 3</span>`},render:e=>({components:{DBStack:r,DBInfotext:n},setup(){return{args:e}},template:`<div  :style="{
  alignItems: 'flex-start',
  alignSelf: 'flex-start',
  display: 'flex',
  flexWrap: 'nowrap',
  flexDirection: 'column',
  gap: 'var(--db-spacing-fixed-sm)',
  width: '200px',
  height: '200px'
}"  ><DBInfotext size="small" icon="none" semantic="informational"   >
                    (Default) Start
                </DBInfotext><DBStack v-bind="args"   >${e.default}</DBStack></div>`})},c={args:{justifyContent:`center`,style:{padding:`var(--db-spacing-fixed-xs)`,border:`var(--db-border-width-3xs) dashed var(--db-adaptive-on-bg-basic-emphasis-60-default)`},default:`<span class="dummy-component"><a href="#">Content 1</a></span
><span class="dummy-component">Content 2</span
><span class="dummy-component">Content 3</span>`},render:e=>({components:{DBStack:r,DBInfotext:n},setup(){return{args:e}},template:`<div  :style="{
  alignItems: 'flex-start',
  alignSelf: 'flex-start',
  display: 'flex',
  flexWrap: 'nowrap',
  flexDirection: 'column',
  gap: 'var(--db-spacing-fixed-sm)',
  width: '200px',
  height: '200px'
}"  ><DBInfotext size="small" icon="none" semantic="informational"   >
                    Center
                </DBInfotext><DBStack v-bind="args"   >${e.default}</DBStack></div>`})},l={args:{justifyContent:`end`,style:{padding:`var(--db-spacing-fixed-xs)`,border:`var(--db-border-width-3xs) dashed var(--db-adaptive-on-bg-basic-emphasis-60-default)`},default:`<span class="dummy-component"><a href="#">Content 1</a></span
><span class="dummy-component">Content 2</span
><span class="dummy-component">Content 3</span>`},render:e=>({components:{DBStack:r,DBInfotext:n},setup(){return{args:e}},template:`<div  :style="{
  alignItems: 'flex-start',
  alignSelf: 'flex-start',
  display: 'flex',
  flexWrap: 'nowrap',
  flexDirection: 'column',
  gap: 'var(--db-spacing-fixed-sm)',
  width: '200px',
  height: '200px'
}"  ><DBInfotext size="small" icon="none" semantic="informational"   >
                    End
                </DBInfotext><DBStack v-bind="args"   >${e.default}</DBStack></div>`})},u={args:{justifyContent:`space-between`,style:{padding:`var(--db-spacing-fixed-xs)`,border:`var(--db-border-width-3xs) dashed var(--db-adaptive-on-bg-basic-emphasis-60-default)`},default:`<span class="dummy-component"><a href="#">Content 1</a></span
><span class="dummy-component">Content 2</span
><span class="dummy-component">Content 3</span>`},render:e=>({components:{DBStack:r,DBInfotext:n},setup(){return{args:e}},template:`<div  :style="{
  alignItems: 'flex-start',
  alignSelf: 'flex-start',
  display: 'flex',
  flexWrap: 'nowrap',
  flexDirection: 'column',
  gap: 'var(--db-spacing-fixed-sm)',
  width: '200px',
  height: '200px'
}"  ><DBInfotext size="small" icon="none" semantic="informational"   >
                    Space-Between
                </DBInfotext><DBStack v-bind="args"   >${e.default}</DBStack></div>`})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
  flexWrap: 'nowrap',
  flexDirection: 'column',
  gap: 'var(--db-spacing-fixed-sm)',
  width: '200px',
  height: '200px'
}"  ><DBInfotext size="small" icon="none" semantic="informational"   >
                    (Default) Start
                </DBInfotext><DBStack v-bind="args"   >\${args.default}</DBStack></div>\`
  })
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
  flexWrap: 'nowrap',
  flexDirection: 'column',
  gap: 'var(--db-spacing-fixed-sm)',
  width: '200px',
  height: '200px'
}"  ><DBInfotext size="small" icon="none" semantic="informational"   >
                    Center
                </DBInfotext><DBStack v-bind="args"   >\${args.default}</DBStack></div>\`
  })
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
  flexWrap: 'nowrap',
  flexDirection: 'column',
  gap: 'var(--db-spacing-fixed-sm)',
  width: '200px',
  height: '200px'
}"  ><DBInfotext size="small" icon="none" semantic="informational"   >
                    End
                </DBInfotext><DBStack v-bind="args"   >\${args.default}</DBStack></div>\`
  })
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
  flexWrap: 'nowrap',
  flexDirection: 'column',
  gap: 'var(--db-spacing-fixed-sm)',
  width: '200px',
  height: '200px'
}"  ><DBInfotext size="small" icon="none" semantic="informational"   >
                    Space-Between
                </DBInfotext><DBStack v-bind="args"   >\${args.default}</DBStack></div>\`
  })
}`,...u.parameters?.docs?.source}}},d=[`DefaultStart`,`Center`,`End`,`SpaceBetween`]})))()}f();export{c as Center,s as DefaultStart,l as End,u as SpaceBetween,d as __namedExportsOrder,o as default};