import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./infotext-Pj-9eN3S.js";import{n as i,t as a}from"./stack-Cy9WR0TS.js";var o=t({DefaultRegular:()=>u,Expressive:()=>d,Functional:()=>l,__namedExportsOrder:()=>f,default:()=>c}),s,c,l,u,d,f;function p(){return(p=e((()=>{n(),a(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBStack/Density`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`simple`,`divider`]},gap:{control:`select`,options:[`none`,`3x-large`,`2x-large`,`x-large`,`large`,`medium`,`small`,`x-small`,`2x-small`,`3x-small`]},direction:{control:`select`,options:[`row`,`column`]},wrap:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},height:{control:`select`,options:[`full`,`auto`]},alignment:{control:`select`,options:[`stretch`,`start`,`end`,`center`]},justifyContent:{control:`select`,options:[`space-between`,`start`,`end`,`center`]},id:{control:`text`},autofocus:{control:`boolean`}}},l={args:{style:{padding:`var(--db-spacing-fixed-xs)`},default:`<span class="dummy-component"><a href="#">Content 1</a></span
><span class="dummy-component">Content 2</span
><span class="dummy-component">Content 3</span>`},render:e=>({components:{DBStack:i,DBInfotext:r},setup(){return{args:e}},template:`<div data-density="functional" :style="{
  alignItems: 'flex-start',
  alignSelf: 'flex-start',
  display: 'flex',
  flexWrap: 'nowrap',
  flexDirection: 'column',
  gap: 'var(--db-spacing-fixed-sm)',
  width: '200px'
}"  ><DBInfotext size="small" icon="none" semantic="informational"   >
                    Functional
                </DBInfotext><DBStack v-bind="args"   >${e.default}</DBStack></div>`})},u={args:{"data-density":`regular`,style:{padding:`var(--db-spacing-fixed-xs)`},default:`<span class="dummy-component"><a href="#">Content 1</a></span
><span class="dummy-component">Content 2</span
><span class="dummy-component">Content 3</span>`},render:e=>({components:{DBStack:i,DBInfotext:r},setup(){return{args:e}},template:`<div  :style="{
  alignItems: 'flex-start',
  alignSelf: 'flex-start',
  display: 'flex',
  flexWrap: 'nowrap',
  flexDirection: 'column',
  gap: 'var(--db-spacing-fixed-sm)',
  width: '200px'
}"  ><DBInfotext size="small" icon="none" semantic="informational"   >
                    (Default) Regular
                </DBInfotext><DBStack v-bind="args"   >${e.default}</DBStack></div>`})},d={args:{style:{padding:`var(--db-spacing-fixed-xs)`},default:`<span class="dummy-component"><a href="#">Content 1</a></span
><span class="dummy-component">Content 2</span
><span class="dummy-component">Content 3</span>`},render:e=>({components:{DBStack:i,DBInfotext:r},setup(){return{args:e}},template:`<div data-density="expressive" :style="{
  alignItems: 'flex-start',
  alignSelf: 'flex-start',
  display: 'flex',
  flexWrap: 'nowrap',
  flexDirection: 'column',
  gap: 'var(--db-spacing-fixed-sm)',
  width: '200px'
}"  ><DBInfotext size="small" icon="none" semantic="informational"   >
                    Expressive
                </DBInfotext><DBStack v-bind="args"   >${e.default}</DBStack></div>`})},f=[`Functional`,`DefaultRegular`,`Expressive`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
    template: \`<div data-density="functional" :style="{
  alignItems: 'flex-start',
  alignSelf: 'flex-start',
  display: 'flex',
  flexWrap: 'nowrap',
  flexDirection: 'column',
  gap: 'var(--db-spacing-fixed-sm)',
  width: '200px'
}"  ><DBInfotext size="small" icon="none" semantic="informational"   >
                    Functional
                </DBInfotext><DBStack v-bind="args"   >\${args.default}</DBStack></div>\`
  })
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
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
  width: '200px'
}"  ><DBInfotext size="small" icon="none" semantic="informational"   >
                    (Default) Regular
                </DBInfotext><DBStack v-bind="args"   >\${args.default}</DBStack></div>\`
  })
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
    template: \`<div data-density="expressive" :style="{
  alignItems: 'flex-start',
  alignSelf: 'flex-start',
  display: 'flex',
  flexWrap: 'nowrap',
  flexDirection: 'column',
  gap: 'var(--db-spacing-fixed-sm)',
  width: '200px'
}"  ><DBInfotext size="small" icon="none" semantic="informational"   >
                    Expressive
                </DBInfotext><DBStack v-bind="args"   >\${args.default}</DBStack></div>\`
  })
}`,...d.parameters?.docs?.source}}}})))()}export{p as a,o as i,d as n,l as r,u as t};