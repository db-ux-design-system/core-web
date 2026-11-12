import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./infotext-ClxkgNnW.js";import{n as i,t as a}from"./radio-N35LixzG.js";var o=t({DefaultTrue:()=>l,False:()=>u,__namedExportsOrder:()=>d,default:()=>c}),s,c,l,u,d;function f(){return(f=e((()=>{n(),a(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBRadio/Show Label`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{name:{control:`text`},value:{control:`text`},disabled:{control:`boolean`},checked:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},size:{control:`select`,options:[`small`,`medium`]},required:{control:`boolean`},showLabel:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},label:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},l={args:{name:`Content`,showLabel:!0,default:`(Default) True`},render:e=>({components:{DBRadio:i,DBInfotext:r},setup(){return{args:e}},template:`<DBRadio v-bind="args"   >${e.default}</DBRadio>`})},u={args:{name:`Content`,showLabel:!1,default:`False`},render:e=>({components:{DBRadio:i,DBInfotext:r},setup(){return{args:e}},template:`<div    ><DBRadio v-bind="args"   >${e.default}</DBRadio><DBInfotext semantic="informational" size="small" icon="none"   >
                    False
                </DBInfotext></div>`})},d=[`DefaultTrue`,`False`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Content",
    "showLabel": true,
    "default": \`(Default) True\`
  },
  render: (args: any) => ({
    components: {
      DBRadio,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBRadio v-bind="args"   >\${args.default}</DBRadio>\`
  })
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Content",
    "showLabel": false,
    "default": \`False\`
  },
  render: (args: any) => ({
    components: {
      DBRadio,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div    ><DBRadio v-bind="args"   >\${args.default}</DBRadio><DBInfotext semantic="informational" size="small" icon="none"   >
                    False
                </DBInfotext></div>\`
  })
}`,...u.parameters?.docs?.source}}}})))()}export{o as i,u as n,f as r,l as t};