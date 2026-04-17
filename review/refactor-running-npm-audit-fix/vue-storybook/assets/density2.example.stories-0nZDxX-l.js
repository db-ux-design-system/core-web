import{n as e}from"./chunk-BneVvdWh.js";import{C as t,k as n,t as r}from"./src-D8ePn3Ki.js";var i,a,o,s,c,l;e((()=>{r(),{fn:i}=__STORYBOOK_MODULE_TEST__,a={title:`Components/DBTooltip/Density`,component:t,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},showArrow:{control:`boolean`},emphasis:{control:`select`,options:[`weak`,`strong`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`,`left`,`right`,`left-start`,`left-end`,`right-start`,`right-end`]},width:{control:`select`,options:[`auto`,`fixed`]},animation:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},variant:{control:`select`,options:[`description`,`label`]},autofocus:{control:`boolean`}}},o={args:{id:`tooltip-01`,default:`Tooltip`},render:e=>({components:{DBTooltip:t,DBButton:n},setup(){return{args:e}},template:`<DBButton data-density="functional"   >
                Functional
                <DBTooltip v-bind="args"   >${e.default}</DBTooltip></DBButton>`})},s={args:{id:`tooltip-02`,default:`Tooltip`},render:e=>({components:{DBTooltip:t,DBButton:n},setup(){return{args:e}},template:`<DBButton data-density="regular"   >
                (Default) Regular
                <DBTooltip v-bind="args"   >${e.default}</DBTooltip></DBButton>`})},c={args:{id:`tooltip-03`,default:`Tooltip`},render:e=>({components:{DBTooltip:t,DBButton:n},setup(){return{args:e}},template:`<DBButton data-density="expressive"   >
                Expressive
                <DBTooltip v-bind="args"   >${e.default}</DBTooltip></DBButton>`})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "tooltip-01",
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
    template: \`<DBButton data-density="functional"   >
                Functional
                <DBTooltip v-bind="args"   >\${args.default}</DBTooltip></DBButton>\`
  })
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "tooltip-02",
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
    template: \`<DBButton data-density="regular"   >
                (Default) Regular
                <DBTooltip v-bind="args"   >\${args.default}</DBTooltip></DBButton>\`
  })
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "tooltip-03",
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
    template: \`<DBButton data-density="expressive"   >
                Expressive
                <DBTooltip v-bind="args"   >\${args.default}</DBTooltip></DBButton>\`
  })
}`,...c.parameters?.docs?.source}}},l=[`Functional`,`DefaultRegular`,`Expressive`]}))();export{s as DefaultRegular,c as Expressive,o as Functional,l as __namedExportsOrder,a as default};