import{n as e}from"./chunk-BneVvdWh.js";import{f as t,k as n,t as r}from"./src-DzOr8I67.js";var i,a,o,s,c;e((()=>{r(),{fn:i}=__STORYBOOK_MODULE_TEST__,a={title:`Components/DBPopover/Animation`,component:t,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`,`left`,`right`,`left-start`,`left-end`,`right-start`,`right-end`]},gap:{control:`boolean`},animation:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},width:{control:`select`,options:[`auto`,`fixed`]},open:{control:`boolean`},autofocus:{control:`boolean`}}},o={args:{id:`popover-13`,animation:!0,default:`<ul class="popover-list"
  ><li>Popover Custom Item 1</li
  ><li>Popover Custom Item 2</li></ul
>
<DBButton>Popover Custom Item 3</DBButton
><template v-slot:trigger><DBButton>(Default) True</DBButton></template>`},render:e=>({components:{DBPopover:t,DBButton:n},setup(){return{args:e}},template:`<DBPopover v-bind="args"   >${e.default}</DBPopover>`})},s={args:{id:`popover-16`,animation:!1,default:`<ul class="popover-list"
  ><li>Popover Custom Item 1</li
  ><li>Popover Custom Item 2</li></ul
>
<DBButton>Popover Custom Item 3</DBButton
><template v-slot:trigger><DBButton>False</DBButton></template>`},render:e=>({components:{DBPopover:t,DBButton:n},setup(){return{args:e}},template:`<DBPopover v-bind="args"   >${e.default}</DBPopover>`})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "popover-13",
    "animation": true,
    "default": \`<ul class="popover-list"
  ><li>Popover Custom Item 1</li
  ><li>Popover Custom Item 2</li></ul
>
<DBButton>Popover Custom Item 3</DBButton
><template v-slot:trigger><DBButton>(Default) True</DBButton></template>\`
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
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "popover-16",
    "animation": false,
    "default": \`<ul class="popover-list"
  ><li>Popover Custom Item 1</li
  ><li>Popover Custom Item 2</li></ul
>
<DBButton>Popover Custom Item 3</DBButton
><template v-slot:trigger><DBButton>False</DBButton></template>\`
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
}`,...s.parameters?.docs?.source}}},c=[`DefaultTrue`,`False`]}))();export{o as DefaultTrue,s as False,c as __namedExportsOrder,a as default};