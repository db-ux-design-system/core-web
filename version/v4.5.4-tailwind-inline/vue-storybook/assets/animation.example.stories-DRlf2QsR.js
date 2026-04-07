import{n as e}from"./chunk-BneVvdWh.js";import{C as t,k as n,t as r}from"./src-BBsJqztA.js";var i,a,o,s,c;e((()=>{r(),{fn:i}=__STORYBOOK_MODULE_TEST__,a={title:`Components/DBTooltip/Animation`,component:t,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},showArrow:{control:`boolean`},emphasis:{control:`select`,options:[`weak`,`strong`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`,`left`,`right`,`left-start`,`left-end`,`right-start`,`right-end`]},width:{control:`select`,options:[`auto`,`fixed`]},animation:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},variant:{control:`select`,options:[`description`,`label`]},autofocus:{control:`boolean`}}},o={args:{id:`tooltip-14`,animation:!0,default:`Tooltip`},render:e=>({components:{DBTooltip:t,DBButton:n},setup(){return{args:e}},template:`<DBButton    >
                (Default) True
                <DBTooltip v-bind="args"   >${e.default}</DBTooltip></DBButton>`})},s={args:{id:`tooltip-17`,animation:!1,default:`Tooltip`},render:e=>({components:{DBTooltip:t,DBButton:n},setup(){return{args:e}},template:`<DBButton    >
                False
                <DBTooltip v-bind="args"   >${e.default}</DBTooltip></DBButton>`})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "tooltip-14",
    "animation": true,
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
                (Default) True
                <DBTooltip v-bind="args"   >\${args.default}</DBTooltip></DBButton>\`
  })
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "tooltip-17",
    "animation": false,
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
                False
                <DBTooltip v-bind="args"   >\${args.default}</DBTooltip></DBButton>\`
  })
}`,...s.parameters?.docs?.source}}},c=[`DefaultTrue`,`False`]}))();export{o as DefaultTrue,s as False,c as __namedExportsOrder,a as default};