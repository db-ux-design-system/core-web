import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./checkbox-F11r2qqu.js";var i=t({Longlabel:()=>s,__namedExportsOrder:()=>c,default:()=>o}),a,o,s,c;function l(){return(l=e((()=>{n(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBCheckbox/Example`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{name:{control:`text`},disabled:{control:`boolean`},checked:{control:`boolean`},indeterminate:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},invalidMessage:{control:`text`},validMessage:{control:`text`},message:{control:`text`},showMessage:{control:`boolean`},size:{control:`select`,options:[`small`,`medium`]},required:{control:`boolean`},showLabel:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},label:{control:`text`},placeholder:{control:`text`},variant:{control:`select`,options:[`above`,`floating`]},value:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},s={args:{name:`Example`,checked:!0,default:`Long label`},render:e=>({components:{DBCheckbox:r},setup(){return{args:e}},template:`<div  :style="{
  width: '100px'
}"  ><DBCheckbox v-bind="args"   >${e.default}</DBCheckbox></div>`})},c=[`Longlabel`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}}})))()}export{i as n,l as r,s as t};