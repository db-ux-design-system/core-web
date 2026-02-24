import{_ as n}from"./custom-button-Cw_FRXkl.js";import"./iframe-BqcwKG60.js";import"./preload-helper-BVUwd7FV.js";import"./index-BpE-mME_.js";const{fn:u}=__STORYBOOK_MODULE_TEST__,l={title:"Components/DBCustomButton/Checkbox",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["outlined","brand","ghost","filled"]},noText:{control:"boolean"},wrap:{control:"boolean"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},width:{control:"select",options:["full","auto"]},size:{control:"select",options:["small","medium"]},id:{control:"text"},autofocus:{control:"boolean"}}},e={args:{default:`<label
  ><input type="checkbox" />
  Checkbox
</label>`},render:t=>({components:{DBCustomButton:n},setup(){return{args:t}},template:`<DBCustomButton v-bind="args"   >${t.default}</DBCustomButton>`})},o={args:{default:`<label
  ><input type="checkbox" :checked="true" />
  Checkbox
</label>`},render:t=>({components:{DBCustomButton:n},setup(){return{args:t}},template:`<DBCustomButton v-bind="args"   >${t.default}</DBCustomButton>`})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`<label
  ><input type="checkbox" />
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
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`<label
  ><input type="checkbox" :checked="true" />
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
}`,...o.parameters?.docs?.source}}};const m=["Unchecked","Checked"];export{o as Checked,e as Unchecked,m as __namedExportsOrder,l as default};
