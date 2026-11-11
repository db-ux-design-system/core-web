import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./tooltip-D5dZfu5f.js";import{n as i,t as a}from"./button-C_2F8_LZ.js";var o=t({DefaultNone:()=>l,Fast:()=>d,Slow:()=>u,__namedExportsOrder:()=>f,default:()=>c}),s,c,l,u,d,f;function p(){return(p=e((()=>{i(),r(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBTooltip/Delay`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},showArrow:{control:`boolean`},emphasis:{control:`select`,options:[`weak`,`strong`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`,`left`,`right`,`left-start`,`left-end`,`right-start`,`right-end`]},width:{control:`select`,options:[`auto`,`fixed`]},animation:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},variant:{control:`select`,options:[`description`,`label`]},autofocus:{control:`boolean`}}},l={args:{id:`tooltip-144`,delay:`none`,default:`Tooltip`},render:e=>({components:{DBTooltip:n,DBButton:a},setup(){return{args:e}},template:`<DBButton    >
                (Default) None
                <DBTooltip v-bind="args"   >${e.default}</DBTooltip></DBButton>`})},u={args:{delay:`slow`,id:`tooltip-15`,default:`Tooltip`},render:e=>({components:{DBTooltip:n,DBButton:a},setup(){return{args:e}},template:`<DBButton    >
                Slow
                <DBTooltip v-bind="args"   >${e.default}</DBTooltip></DBButton>`})},d={args:{delay:`fast`,id:`tooltip-16`,default:`Tooltip`},render:e=>({components:{DBTooltip:n,DBButton:a},setup(){return{args:e}},template:`<DBButton    >
                Fast
                <DBTooltip v-bind="args"   >${e.default}</DBTooltip></DBButton>`})},f=[`DefaultNone`,`Slow`,`Fast`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "tooltip-144",
    "delay": "none",
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
                (Default) None
                <DBTooltip v-bind="args"   >\${args.default}</DBTooltip></DBButton>\`
  })
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "delay": "slow",
    "id": "tooltip-15",
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
                Slow
                <DBTooltip v-bind="args"   >\${args.default}</DBTooltip></DBButton>\`
  })
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "delay": "fast",
    "id": "tooltip-16",
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
                Fast
                <DBTooltip v-bind="args"   >\${args.default}</DBTooltip></DBButton>\`
  })
}`,...d.parameters?.docs?.source}}}})))()}export{p as a,o as i,d as n,u as r,l as t};