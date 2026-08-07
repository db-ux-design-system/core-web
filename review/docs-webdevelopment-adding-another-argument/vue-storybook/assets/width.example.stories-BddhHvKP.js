import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./button-u1OwvOC7.js";import{n as r,t as i}from"./tooltip-B_2yYRSp.js";var a,o,s,c,l;function u(){return(u=e((()=>{t(),i(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBTooltip/Width`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},showArrow:{control:`boolean`},emphasis:{control:`select`,options:[`weak`,`strong`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`,`left`,`right`,`left-start`,`left-end`,`right-start`,`right-end`]},width:{control:`select`,options:[`auto`,`fixed`]},animation:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},variant:{control:`select`,options:[`description`,`label`]},autofocus:{control:`boolean`}}},s={args:{id:`tooltip-12`,default:`Max width, lorem ipsum dolor sit amet, consetetur sadipscing`},render:e=>({components:{DBTooltip:r,DBButton:n},setup(){return{args:e}},template:`<DBButton    >
                (Default) Auto
                <DBTooltip v-bind="args"   >${e.default}</DBTooltip></DBButton>`})},c={args:{width:`fixed`,id:`tooltip-13`,default:`Max width, lorem ipsum dolor sit amet, consetetur sadipscing`},render:e=>({components:{DBTooltip:r,DBButton:n},setup(){return{args:e}},template:`<DBButton    >
                Fixed
                <DBTooltip v-bind="args"   >${e.default}</DBTooltip></DBButton>`})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l=[`DefaultAuto`,`Fixed`]})))()}u();export{s as DefaultAuto,c as Fixed,l as __namedExportsOrder,o as default};