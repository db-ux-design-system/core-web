import{_ as n}from"./custom-button-CZVQuu5G.js";import"./iframe-Dqty9p2x.js";import"./preload-helper-BFlDYBMr.js";import"./index-B2WiKbs4.js";const{fn:u}=__STORYBOOK_MODULE_TEST__,l={title:"Components/DBCustomButton/Checkbox",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["outlined","brand","ghost","filled"]},noText:{control:"boolean"},wrap:{control:"boolean"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},width:{control:"select",options:["full","auto"]},size:{control:"select",options:["small","medium"]},id:{control:"text"},autofocus:{control:"boolean"}}},e={args:{default:`<label for="checkbox01"
  ><input type="checkbox" id="checkbox01" />
  Checkbox
</label>`},render:o=>({components:{DBCustomButton:n},setup(){return{args:o}},template:`<DBCustomButton v-bind="args"   >${o.default}</DBCustomButton>`})},t={args:{default:`<label for="checkbox02"
  ><input type="checkbox" id="checkbox02" :checked="true" />
  Checkbox
</label>`},render:o=>({components:{DBCustomButton:n},setup(){return{args:o}},template:`<DBCustomButton v-bind="args"   >${o.default}</DBCustomButton>`})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`<label for="checkbox01"
  ><input type="checkbox" id="checkbox01" />
  Checkbox
</label>\`
  },
  render: (args: any) => ({
    components: {
      DBCustomButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBCustomButton v-bind="args"   >\${args.default}</DBCustomButton>\`
  })
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`<label for="checkbox02"
  ><input type="checkbox" id="checkbox02" :checked="true" />
  Checkbox
</label>\`
  },
  render: (args: any) => ({
    components: {
      DBCustomButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBCustomButton v-bind="args"   >\${args.default}</DBCustomButton>\`
  })
}`,...t.parameters?.docs?.source}}};const d=["Unchecked","Checked"];export{t as Checked,e as Unchecked,d as __namedExportsOrder,l as default};
