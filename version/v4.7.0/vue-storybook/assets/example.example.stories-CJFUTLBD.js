import{n as e}from"./chunk-DnJy8xQt.js";import{E as t,t as n}from"./src-IA1wsRkd.js";var r,i,a,o;e((()=>{n(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Components/DBCheckbox/Example`,component:t,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{name:{control:`text`},disabled:{control:`boolean`},checked:{control:`boolean`},indeterminate:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},invalidMessage:{control:`text`},validMessage:{control:`text`},message:{control:`text`},showMessage:{control:`boolean`},size:{control:`select`,options:[`small`,`medium`]},required:{control:`boolean`},showLabel:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},label:{control:`text`},placeholder:{control:`text`},variant:{control:`select`,options:[`above`,`floating`]},value:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},a={args:{name:`Example`,checked:!0,default:`Long label`},render:e=>({components:{DBCheckbox:t},setup(){return{args:e}},template:`<div  :style="{
  width: '100px'
}"  ><DBCheckbox v-bind="args"   >${e.default}</DBCheckbox></div>`})},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Example",
    "checked": true,
    "default": \`Long label\`
  },
  render: (args: any) => ({
    components: {
      DBCheckbox
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '100px'
}"  ><DBCheckbox v-bind="args"   >\${args.default}</DBCheckbox></div>\`
  })
}`,...a.parameters?.docs?.source}}},o=[`Longlabel`]}))();export{a as Longlabel,o as __namedExportsOrder,i as default};