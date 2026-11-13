import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./tooltip-2p44sLde.js";import{n as i,t as a}from"./button-B5QFxqe_.js";var o=t({DefaultWeak:()=>l,Strong:()=>u,__namedExportsOrder:()=>d,default:()=>c}),s,c,l,u,d;function f(){return(f=e((()=>{i(),r(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBTooltip/Emphasis`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},showArrow:{control:`boolean`},emphasis:{control:`select`,options:[`weak`,`strong`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`,`left`,`right`,`left-start`,`left-end`,`right-start`,`right-end`]},width:{control:`select`,options:[`auto`,`fixed`]},animation:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},variant:{control:`select`,options:[`description`,`label`]},autofocus:{control:`boolean`}}},l={args:{id:`tooltip-06`,default:`Tooltip`},render:e=>({components:{DBTooltip:n,DBButton:a},setup(){return{args:e}},template:`<DBButton    >
                (Default) Weak
                <DBTooltip v-bind="args"   >${e.default}</DBTooltip></DBButton>`})},u={args:{emphasis:`strong`,id:`tooltip-07`,default:`Tooltip`},render:e=>({components:{DBTooltip:n,DBButton:a},setup(){return{args:e}},template:`<DBButton    >
                Strong
                <DBTooltip v-bind="args"   >${e.default}</DBTooltip></DBButton>`})},d=[`DefaultWeak`,`Strong`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "tooltip-06",
    "default": \`Tooltip\`
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
                (Default) Weak
                <DBTooltip v-bind="args"   >\${args.default}</DBTooltip></DBButton>\`
  })
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "emphasis": "strong",
    "id": "tooltip-07",
    "default": \`Tooltip\`
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
                Strong
                <DBTooltip v-bind="args"   >\${args.default}</DBTooltip></DBButton>\`
  })
}`,...u.parameters?.docs?.source}}}})))()}export{f as i,u as n,o as r,l as t};