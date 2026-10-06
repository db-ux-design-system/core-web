import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./checkbox-CmPgKhV-.js";var r,i,a,o;function s(){return(s=e((()=>{t(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Components/DBCheckbox/Interaction`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{name:{control:`text`},disabled:{control:`boolean`},checked:{control:`boolean`},indeterminate:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},invalidMessage:{control:`text`},validMessage:{control:`text`},message:{control:`text`},showMessage:{control:`boolean`},size:{control:`select`,options:[`small`,`medium`]},required:{control:`boolean`},showLabel:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},label:{control:`text`},placeholder:{control:`text`},variant:{control:`select`,options:[`above`,`floating`]},value:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},a={args:{"data-testid":`checkbox`,default:`Test`},render:e=>({components:{DBCheckbox:n},setup(){return{args:e}},template:`<DBCheckbox v-bind="args"   >${e.default}</DBCheckbox>`})},o=[`Interaction`],a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "checkbox",
    "default": \`Test\`
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
    template: \`<DBCheckbox v-bind="args"   >\${args.default}</DBCheckbox>\`
  })
}`,...a.parameters?.docs?.source}}}})))()}s();export{a as Interaction,o as __namedExportsOrder,i as default};