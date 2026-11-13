import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./infotext-nUvz-XS8.js";import{n as i,t as a}from"./divider-DJJ1LjVZ.js";import{n as o,t as s}from"./stack-ByhQyKw5.js";var c=t({DefaultSimple:()=>d,Divider:()=>f,__namedExportsOrder:()=>p,default:()=>u}),l,u,d,f,p;function m(){return(m=e((()=>{i(),n(),s(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBStack/Variant`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`simple`,`divider`]},gap:{control:`select`,options:[`none`,`3x-large`,`2x-large`,`x-large`,`large`,`medium`,`small`,`x-small`,`2x-small`,`3x-small`]},direction:{control:`select`,options:[`row`,`column`]},wrap:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},height:{control:`select`,options:[`full`,`auto`]},alignment:{control:`select`,options:[`stretch`,`start`,`end`,`center`]},justifyContent:{control:`select`,options:[`space-between`,`start`,`end`,`center`]},id:{control:`text`},autofocus:{control:`boolean`}}},d={args:{style:{padding:`var(--db-spacing-fixed-xs)`},default:`<span class="dummy-component"><a href="#">Content 1</a></span
><span class="dummy-component">Content 2</span
><span class="dummy-component">Content 3</span>`},render:e=>({components:{DBStack:o,DBDivider:a,DBInfotext:r},setup(){return{args:e}},template:`<div  :style="{
  alignItems: 'flex-start',
  alignSelf: 'flex-start',
  display: 'flex',
  flexWrap: 'nowrap',
  flexDirection: 'column',
  gap: 'var(--db-spacing-fixed-sm)',
  width: '200px'
}"  ><DBInfotext size="small" icon="none" semantic="informational"   >
                    (Default) Simple
                </DBInfotext><DBStack v-bind="args"   >${e.default}</DBStack></div>`})},f={args:{variant:`divider`,style:{padding:`var(--db-spacing-fixed-xs)`},default:`<span class="dummy-component"><a href="#">Content 1</a></span
><DBDivider></DBDivider><span class="dummy-component">Content 2</span
><DBDivider></DBDivider><span class="dummy-component">Content 3</span>`},render:e=>({components:{DBStack:o,DBDivider:a,DBInfotext:r},setup(){return{args:e}},template:`<div  :style="{
  alignItems: 'flex-start',
  alignSelf: 'flex-start',
  display: 'flex',
  flexWrap: 'nowrap',
  flexDirection: 'column',
  gap: 'var(--db-spacing-fixed-sm)',
  width: '200px'
}"  ><DBInfotext size="small" icon="none" semantic="informational"   >
                    Divider
                </DBInfotext><DBStack v-bind="args"   >${e.default}</DBStack></div>`})},p=[`DefaultSimple`,`Divider`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}}})))()}export{c as a,u as i,f as n,m as r,d as t};