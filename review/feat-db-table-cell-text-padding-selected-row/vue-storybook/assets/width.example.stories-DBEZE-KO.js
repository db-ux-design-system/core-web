import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./tooltip-DX0vnDYh.js";import{n as i,t as a}from"./button-DpjBGUXm.js";var o=t({DefaultAuto:()=>l,Fixed:()=>u,__namedExportsOrder:()=>d,default:()=>c}),s,c,l,u,d;function f(){return(f=e((()=>{i(),r(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBTooltip/Width`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},showArrow:{control:`boolean`},emphasis:{control:`select`,options:[`weak`,`strong`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`,`left`,`right`,`left-start`,`left-end`,`right-start`,`right-end`]},width:{control:`select`,options:[`auto`,`fixed`]},animation:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},variant:{control:`select`,options:[`description`,`label`]},autofocus:{control:`boolean`}}},l={args:{id:`tooltip-12`,default:`Max width, lorem ipsum dolor sit amet, consetetur sadipscing`},render:e=>({components:{DBTooltip:n,DBButton:a},setup(){return{args:e}},template:`<DBButton    >
                (Default) Auto
                <DBTooltip v-bind="args"   >${e.default}</DBTooltip></DBButton>`})},u={args:{width:`fixed`,id:`tooltip-13`,default:`Max width, lorem ipsum dolor sit amet, consetetur sadipscing`},render:e=>({components:{DBTooltip:n,DBButton:a},setup(){return{args:e}},template:`<DBButton    >
                Fixed
                <DBTooltip v-bind="args"   >${e.default}</DBTooltip></DBButton>`})},d=[`DefaultAuto`,`Fixed`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "tooltip-12",
    "default": \`Max width, lorem ipsum dolor sit amet, consetetur sadipscing\`
  },
  render: (args: any) => ({
    components: {
      DBTooltip,
      DBButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBButton    >
                (Default) Auto
                <DBTooltip v-bind="args"   >\${args.default}</DBTooltip></DBButton>\`
  })
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "fixed",
    "id": "tooltip-13",
    "default": \`Max width, lorem ipsum dolor sit amet, consetetur sadipscing\`
  },
  render: (args: any) => ({
    components: {
      DBTooltip,
      DBButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBButton    >
                Fixed
                <DBTooltip v-bind="args"   >\${args.default}</DBTooltip></DBButton>\`
  })
}`,...u.parameters?.docs?.source}}}})))()}export{o as i,u as n,f as r,l as t};