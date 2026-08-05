import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./infotext-CGc0OKG-.js";import{n as r,t as i}from"./divider-BuVkipyw.js";import{n as a,t as o}from"./stack-BN5G62jW.js";var s,c,l,u,d;function f(){return(f=e((()=>{r(),t(),o(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBStack/Variant`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`simple`,`divider`]},gap:{control:`select`,options:[`none`,`3x-large`,`2x-large`,`x-large`,`large`,`medium`,`small`,`x-small`,`2x-small`,`3x-small`]},direction:{control:`select`,options:[`row`,`column`]},wrap:{control:`boolean`},alignment:{control:`select`,options:[`stretch`,`start`,`end`,`center`]},justifyContent:{control:`select`,options:[`space-between`,`start`,`end`,`center`]},id:{control:`text`},autofocus:{control:`boolean`}}},l={args:{style:{padding:`var(--db-spacing-fixed-xs)`},default:`<span class="dummy-component"><a href="#">Content 1</a></span
><span class="dummy-component">Content 2</span
><span class="dummy-component">Content 3</span>`},render:e=>({components:{DBStack:a,DBDivider:i,DBInfotext:n},setup(){return{args:e}},template:`<div  :style="{
  alignItems: 'flex-start',
  alignSelf: 'flex-start',
  display: 'flex',
  flexWrap: 'nowrap',
  flexDirection: 'column',
  gap: 'var(--db-spacing-fixed-sm)',
  width: '200px'
}"  ><DBInfotext size="small" icon="none" semantic="informational"   >
                    (Default) Simple
                </DBInfotext><DBStack v-bind="args"   >${e.default}</DBStack></div>`})},u={args:{variant:`divider`,style:{padding:`var(--db-spacing-fixed-xs)`},default:`<span class="dummy-component"><a href="#">Content 1</a></span
><DBDivider></DBDivider><span class="dummy-component">Content 2</span
><DBDivider></DBDivider><span class="dummy-component">Content 3</span>`},render:e=>({components:{DBStack:a,DBDivider:i,DBInfotext:n},setup(){return{args:e}},template:`<div  :style="{
  alignItems: 'flex-start',
  alignSelf: 'flex-start',
  display: 'flex',
  flexWrap: 'nowrap',
  flexDirection: 'column',
  gap: 'var(--db-spacing-fixed-sm)',
  width: '200px'
}"  ><DBInfotext size="small" icon="none" semantic="informational"   >
                    Divider
                </DBInfotext><DBStack v-bind="args"   >${e.default}</DBStack></div>`})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
  flexWrap: 'nowrap',
  flexDirection: 'column',
  gap: 'var(--db-spacing-fixed-sm)',
  width: '200px'
}"  ><DBInfotext size="small" icon="none" semantic="informational"   >
                    (Default) Simple
                </DBInfotext><DBStack v-bind="args"   >\${args.default}</DBStack></div>\`
  })
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
  flexWrap: 'nowrap',
  flexDirection: 'column',
  gap: 'var(--db-spacing-fixed-sm)',
  width: '200px'
}"  ><DBInfotext size="small" icon="none" semantic="informational"   >
                    Divider
                </DBInfotext><DBStack v-bind="args"   >\${args.default}</DBStack></div>\`
  })
}`,...u.parameters?.docs?.source}}},d=[`DefaultSimple`,`Divider`]})))()}f();export{l as DefaultSimple,u as Divider,d as __namedExportsOrder,c as default};