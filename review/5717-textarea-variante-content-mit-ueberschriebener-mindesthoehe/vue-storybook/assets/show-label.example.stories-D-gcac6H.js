import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./infotext-BBJT_EnE.js";import{n as i,t as a}from"./checkbox-DmYuRcqZ.js";var o=t({DefaultTrue:()=>l,False:()=>u,__namedExportsOrder:()=>d,default:()=>c}),s,c,l,u,d;function f(){return(f=e((()=>{n(),i(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBCheckbox/Show Label`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{name:{control:`text`},disabled:{control:`boolean`},checked:{control:`boolean`},indeterminate:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},invalidMessage:{control:`text`},validMessage:{control:`text`},message:{control:`text`},showMessage:{control:`boolean`},size:{control:`select`,options:[`small`,`medium`]},required:{control:`boolean`},showLabel:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},label:{control:`text`},placeholder:{control:`text`},variant:{control:`select`,options:[`above`,`floating`]},value:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},l={args:{name:`Label`,showLabel:!0,default:`(Default) True`},render:e=>({components:{DBCheckbox:a,DBInfotext:r},setup(){return{args:e}},template:`<DBCheckbox v-bind="args"   >${e.default}</DBCheckbox>`})},u={args:{name:`Label`,showLabel:!1,default:`False`},render:e=>({components:{DBCheckbox:a,DBInfotext:r},setup(){return{args:e}},template:`<div    ><DBCheckbox v-bind="args"   >${e.default}</DBCheckbox><DBInfotext semantic="informational" size="small" icon="none"   >
                    False
                </DBInfotext></div>`})},d=[`DefaultTrue`,`False`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Label",
    "showLabel": true,
    "default": \`(Default) True\`
  },
  render: (args: any) => ({
    components: {
      DBCheckbox,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBCheckbox v-bind="args"   >\${args.default}</DBCheckbox>\`
  })
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Label",
    "showLabel": false,
    "default": \`False\`
  },
  render: (args: any) => ({
    components: {
      DBCheckbox,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    ><DBCheckbox v-bind="args"   >\${args.default}</DBCheckbox><DBInfotext semantic="informational" size="small" icon="none"   >
                    False
                </DBInfotext></div>\`
  })
}`,...u.parameters?.docs?.source}}}})))()}export{o as i,u as n,f as r,l as t};