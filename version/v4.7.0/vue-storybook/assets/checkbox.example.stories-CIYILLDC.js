import{n as e}from"./chunk-DnJy8xQt.js";import{T as t,t as n}from"./src-IA1wsRkd.js";var r,i,a,o,s;e((()=>{n(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Components/DBCustomButton/Checkbox`,component:t,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`outlined`,`brand`,`ghost`,`filled`]},noText:{control:`boolean`},wrap:{control:`boolean`},showIcon:{control:`boolean`},showIconLeading:{control:`boolean`},showIconTrailing:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},size:{control:`select`,options:[`small`,`medium`]},id:{control:`text`},autofocus:{control:`boolean`}}},a={args:{default:`<label for="checkbox01"
  ><input type="checkbox" id="checkbox01" />
  Checkbox
</label>`},render:e=>({components:{DBCustomButton:t},setup(){return{args:e}},template:`<DBCustomButton v-bind="args"   >${e.default}</DBCustomButton>`})},o={args:{default:`<label for="checkbox02"
  ><input type="checkbox" id="checkbox02" :checked="true" />
  Checkbox
</label>`},render:e=>({components:{DBCustomButton:t},setup(){return{args:e}},template:`<DBCustomButton v-bind="args"   >${e.default}</DBCustomButton>`})},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}},s=[`Unchecked`,`Checked`]}))();export{o as Checked,a as Unchecked,s as __namedExportsOrder,i as default};