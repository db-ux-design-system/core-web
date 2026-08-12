import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./button-CG9PZBOe.js";import{n as r,t as i}from"./popover-pOXLHWiv.js";var a,o,s,c,l,u;function d(){return(d=e((()=>{t(),i(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBPopover/Delay`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`,`left`,`right`,`left-start`,`left-end`,`right-start`,`right-end`]},gap:{control:`boolean`},animation:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},width:{control:`select`,options:[`auto`,`fixed`]},open:{control:`boolean`},autofocus:{control:`boolean`}}},s={args:{id:`popover-133`,delay:`none`,default:`<ul class="popover-list"
  ><li>Popover Custom Item 1</li
  ><li>Popover Custom Item 2</li></ul
>
<DBButton>Popover Custom Item 3</DBButton
><template v-slot:trigger><DBButton>(Default) None</DBButton></template>`},render:e=>({components:{DBPopover:r,DBButton:n},setup(){return{args:e}},template:`<DBPopover v-bind="args"   >${e.default}</DBPopover>`})},c={args:{delay:`slow`,id:`popover-14`,default:`<ul class="popover-list"
  ><li>Popover Custom Item 1</li
  ><li>Popover Custom Item 2</li></ul
>
<DBButton>Popover Custom Item 3</DBButton
><template v-slot:trigger><DBButton>Slow</DBButton></template>`},render:e=>({components:{DBPopover:r,DBButton:n},setup(){return{args:e}},template:`<DBPopover v-bind="args"   >${e.default}</DBPopover>`})},l={args:{delay:`fast`,id:`popover-15`,default:`<ul class="popover-list"
  ><li>Popover Custom Item 1</li
  ><li>Popover Custom Item 2</li></ul
>
<DBButton>Popover Custom Item 3</DBButton
><template v-slot:trigger><DBButton>Fast</DBButton></template>`},render:e=>({components:{DBPopover:r,DBButton:n},setup(){return{args:e}},template:`<DBPopover v-bind="args"   >${e.default}</DBPopover>`})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "popover-133",
    "delay": "none",
    "default": \`<ul class="popover-list"
  ><li>Popover Custom Item 1</li
  ><li>Popover Custom Item 2</li></ul
>
<DBButton>Popover Custom Item 3</DBButton
><template v-slot:trigger><DBButton>(Default) None</DBButton></template>\`
  },
  render: (args: any) => ({
    components: {
      DBPopover,
      DBButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBPopover v-bind="args"   >\${args.default}</DBPopover>\`
  })
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "delay": "slow",
    "id": "popover-14",
    "default": \`<ul class="popover-list"
  ><li>Popover Custom Item 1</li
  ><li>Popover Custom Item 2</li></ul
>
<DBButton>Popover Custom Item 3</DBButton
><template v-slot:trigger><DBButton>Slow</DBButton></template>\`
  },
  render: (args: any) => ({
    components: {
      DBPopover,
      DBButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBPopover v-bind="args"   >\${args.default}</DBPopover>\`
  })
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "delay": "fast",
    "id": "popover-15",
    "default": \`<ul class="popover-list"
  ><li>Popover Custom Item 1</li
  ><li>Popover Custom Item 2</li></ul
>
<DBButton>Popover Custom Item 3</DBButton
><template v-slot:trigger><DBButton>Fast</DBButton></template>\`
  },
  render: (args: any) => ({
    components: {
      DBPopover,
      DBButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBPopover v-bind="args"   >\${args.default}</DBPopover>\`
  })
}`,...l.parameters?.docs?.source}}},u=[`DefaultNone`,`Slow`,`Fast`]})))()}d();export{s as DefaultNone,l as Fast,c as Slow,u as __namedExportsOrder,o as default};