import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./button-Bd0wAvmA.js";import{n as i,t as a}from"./stack-Rp9NrnGI.js";var o=t({DefaultNoClipping:()=>l,Wrap:()=>u,WrapFocusContainer:()=>d,__namedExportsOrder:()=>f,default:()=>c}),s,c,l,u,d,f;function p(){return(p=e((()=>{n(),a(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBStack/Focus Container`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`simple`,`divider`]},gap:{control:`select`,options:[`none`,`3x-large`,`2x-large`,`x-large`,`large`,`medium`,`small`,`x-small`,`2x-small`,`3x-small`]},direction:{control:`select`,options:[`row`,`column`]},wrap:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},height:{control:`select`,options:[`full`,`auto`]},alignment:{control:`select`,options:[`stretch`,`start`,`end`,`center`]},justifyContent:{control:`select`,options:[`space-between`,`start`,`end`,`center`]},id:{control:`text`},autofocus:{control:`boolean`}}},l={args:{"data-testid":`default-stack`,default:`<DBButton data-focus="default">Focusable</DBButton
><span class="dummy-component">Content 2</span>`},render:e=>({components:{DBStack:i,DBButton:r},setup(){return{args:e}},template:`<div class="fit-content-container"   ><DBStack v-bind="args"   >${e.default}</DBStack></div>`})},u={args:{"data-testid":`wrap-stack`,wrap:!0,default:`<DBButton data-focus="default">Focusable</DBButton
><span class="dummy-component">Content 2</span
><span class="dummy-component">Content 3</span>`},render:e=>({components:{DBStack:i,DBButton:r},setup(){return{args:e}},template:`<div class="fit-content-container" :style="{
  width: '160px',
  height: '88px'
}"  ><DBStack v-bind="args"   >${e.default}</DBStack></div>`})},d={args:{"data-testid":`focus-container-stack`,"data-focus-container":`true`,wrap:!0,default:`<DBButton data-focus="default">Focusable</DBButton
><span class="dummy-component">Content 2</span
><span class="dummy-component">Content 3</span>`},render:e=>({components:{DBStack:i,DBButton:r},setup(){return{args:e}},template:`<div class="fit-content-container" :style="{
  width: '160px',
  height: '88px'
}"  ><DBStack v-bind="args"   >${e.default}</DBStack></div>`})},f=[`DefaultNoClipping`,`Wrap`,`WrapFocusContainer`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "default-stack",
    "default": \`<DBButton data-focus="default">Focusable</DBButton
><span class="dummy-component">Content 2</span>\`
  },
  render: (args: any) => ({
    components: {
      DBStack,
      DBButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div class="fit-content-container"   ><DBStack v-bind="args"   >\${args.default}</DBStack></div>\`
  })
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "wrap-stack",
    "wrap": true,
    "default": \`<DBButton data-focus="default">Focusable</DBButton
><span class="dummy-component">Content 2</span
><span class="dummy-component">Content 3</span>\`
  },
  render: (args: any) => ({
    components: {
      DBStack,
      DBButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div class="fit-content-container" :style="{
  width: '160px',
  height: '88px'
}"  ><DBStack v-bind="args"   >\${args.default}</DBStack></div>\`
  })
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "focus-container-stack",
    "data-focus-container": "true",
    "wrap": true,
    "default": \`<DBButton data-focus="default">Focusable</DBButton
><span class="dummy-component">Content 2</span
><span class="dummy-component">Content 3</span>\`
  },
  render: (args: any) => ({
    components: {
      DBStack,
      DBButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div class="fit-content-container" :style="{
  width: '160px',
  height: '88px'
}"  ><DBStack v-bind="args"   >\${args.default}</DBStack></div>\`
  })
}`,...d.parameters?.docs?.source}}}})))()}export{p as a,o as i,u as n,d as r,l as t};