import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./custom-button-Cvz7Q50_.js";var i=t({Checked:()=>c,Unchecked:()=>s,__namedExportsOrder:()=>l,default:()=>o}),a,o,s,c,l;function u(){return(u=e((()=>{n(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBCustomButton/Checkbox`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`outlined`,`brand`,`ghost`,`filled`]},noText:{control:`boolean`},wrap:{control:`boolean`},showIcon:{control:`boolean`},showIconLeading:{control:`boolean`},showIconTrailing:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},size:{control:`select`,options:[`small`,`medium`]},id:{control:`text`},autofocus:{control:`boolean`}}},s={args:{default:`<label for="checkbox01"
  ><input type="checkbox" id="checkbox01" />
  Checkbox
</label>`},render:e=>({components:{DBCustomButton:r},setup(){return{args:e}},template:`<DBCustomButton v-bind="args"   >${e.default}</DBCustomButton>`})},c={args:{default:`<label for="checkbox02"
  ><input type="checkbox" id="checkbox02" :checked="true" />
  Checkbox
</label>`},render:e=>({components:{DBCustomButton:r},setup(){return{args:e}},template:`<DBCustomButton v-bind="args"   >${e.default}</DBCustomButton>`})},l=[`Unchecked`,`Checked`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}}})))()}export{u as i,s as n,i as r,c as t};