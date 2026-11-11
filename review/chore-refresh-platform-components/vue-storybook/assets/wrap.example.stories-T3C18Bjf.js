import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./infotext-CeJ-WSD8.js";import{n as i,t as a}from"./stack-CSlK1Okz.js";var o=t({DefaultNoWrapColumn:()=>l,NoWrapRow:()=>u,WrapColumn:()=>d,WrapRow:()=>f,__namedExportsOrder:()=>p,default:()=>c}),s,c,l,u,d,f,p;function m(){return(m=e((()=>{n(),a(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBStack/Wrap`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`simple`,`divider`]},gap:{control:`select`,options:[`none`,`3x-large`,`2x-large`,`x-large`,`large`,`medium`,`small`,`x-small`,`2x-small`,`3x-small`]},direction:{control:`select`,options:[`row`,`column`]},wrap:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},height:{control:`select`,options:[`full`,`auto`]},alignment:{control:`select`,options:[`stretch`,`start`,`end`,`center`]},justifyContent:{control:`select`,options:[`space-between`,`start`,`end`,`center`]},id:{control:`text`},autofocus:{control:`boolean`}}},l={args:{style:{padding:`var(--db-spacing-fixed-xs)`},default:`<span class="dummy-component"><a href="#">Content 1</a></span
><span class="dummy-component">Content 2</span
><span class="dummy-component">Content 3</span>`},render:e=>({components:{DBStack:i,DBInfotext:r},setup(){return{args:e}},template:`<div  :style="{
  alignItems: 'flex-start',
  alignSelf: 'flex-start',
  display: 'flex',
  flexWrap: 'nowrap',
  flexDirection: 'column',
  gap: 'var(--db-spacing-fixed-sm)',
  width: '160px',
  height: '88px'
}"  ><DBInfotext size="small" icon="none" semantic="informational"   >
                    (Default) No Wrap: Column
                </DBInfotext><DBStack v-bind="args"   >${e.default}</DBStack></div>`})},u={args:{direction:`row`,style:{padding:`var(--db-spacing-fixed-xs)`},default:`<span class="dummy-component"><a href="#">Content 1</a></span
><span class="dummy-component">Content 2</span
><span class="dummy-component">Content 3</span>`},render:e=>({components:{DBStack:i,DBInfotext:r},setup(){return{args:e}},template:`<div  :style="{
  alignItems: 'flex-start',
  alignSelf: 'flex-start',
  display: 'flex',
  flexWrap: 'nowrap',
  flexDirection: 'column',
  gap: 'var(--db-spacing-fixed-sm)',
  width: '160px',
  height: '88px'
}"  ><DBInfotext size="small" icon="none" semantic="informational"   >
                    No Wrap: Row
                </DBInfotext><DBStack v-bind="args"   >${e.default}</DBStack></div>`})},d={args:{height:`full`,style:{padding:`var(--db-spacing-fixed-xs)`},wrap:!0,default:`<span class="dummy-component"><a href="#">Content 1</a></span
><span class="dummy-component">Content 2</span
><span class="dummy-component">Content 3</span>`},render:e=>({components:{DBStack:i,DBInfotext:r},setup(){return{args:e}},template:`<div  :style="{
  alignItems: 'flex-start',
  alignSelf: 'flex-start',
  display: 'flex',
  flexWrap: 'nowrap',
  flexDirection: 'column',
  gap: 'var(--db-spacing-fixed-sm)',
  width: '160px',
  height: '120px'
}"  ><DBInfotext size="small" icon="none" semantic="informational"   >
                    Wrap: Column
                </DBInfotext><DBStack v-bind="args"   >${e.default}</DBStack></div>`})},f={args:{direction:`row`,style:{padding:`var(--db-spacing-fixed-xs)`},wrap:!0,default:`<span class="dummy-component"><a href="#">Content 1</a></span
><span class="dummy-component">Content 2</span
><span class="dummy-component">Content 3</span>`},render:e=>({components:{DBStack:i,DBInfotext:r},setup(){return{args:e}},template:`<div  :style="{
  alignItems: 'flex-start',
  alignSelf: 'flex-start',
  display: 'flex',
  flexWrap: 'nowrap',
  flexDirection: 'column',
  gap: 'var(--db-spacing-fixed-sm)',
  width: '180px',
  height: '100px'
}"  ><DBInfotext size="small" icon="none" semantic="informational"   >
                    Wrap: Row
                </DBInfotext><DBStack v-bind="args"   >${e.default}</DBStack></div>`})},p=[`DefaultNoWrapColumn`,`NoWrapRow`,`WrapColumn`,`WrapRow`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
  flexWrap: 'nowrap',
  flexDirection: 'column',
  gap: 'var(--db-spacing-fixed-sm)',
  width: '160px',
  height: '88px'
}"  ><DBInfotext size="small" icon="none" semantic="informational"   >
                    (Default) No Wrap: Column
                </DBInfotext><DBStack v-bind="args"   >\${args.default}</DBStack></div>\`
  })
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
  flexWrap: 'nowrap',
  flexDirection: 'column',
  gap: 'var(--db-spacing-fixed-sm)',
  width: '160px',
  height: '88px'
}"  ><DBInfotext size="small" icon="none" semantic="informational"   >
                    No Wrap: Row
                </DBInfotext><DBStack v-bind="args"   >\${args.default}</DBStack></div>\`
  })
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "height": "full",
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
  flexWrap: 'nowrap',
  flexDirection: 'column',
  gap: 'var(--db-spacing-fixed-sm)',
  width: '160px',
  height: '120px'
}"  ><DBInfotext size="small" icon="none" semantic="informational"   >
                    Wrap: Column
                </DBInfotext><DBStack v-bind="args"   >\${args.default}</DBStack></div>\`
  })
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
  flexWrap: 'nowrap',
  flexDirection: 'column',
  gap: 'var(--db-spacing-fixed-sm)',
  width: '180px',
  height: '100px'
}"  ><DBInfotext size="small" icon="none" semantic="informational"   >
                    Wrap: Row
                </DBInfotext><DBStack v-bind="args"   >\${args.default}</DBStack></div>\`
  })
}`,...f.parameters?.docs?.source}}}})))()}export{m as a,f as i,u as n,o,d as r,l as t};