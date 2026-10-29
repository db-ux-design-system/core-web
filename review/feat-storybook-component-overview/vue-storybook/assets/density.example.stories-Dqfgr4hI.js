import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./button-BPyXE956.js";var i=t({Expressive:()=>l,Functional:()=>s,Regular:()=>c,__namedExportsOrder:()=>u,default:()=>o}),a,o,s,c,l,u;function d(){return(d=e((()=>{n(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBButton/Density`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:a()},argTypes:{variant:{control:`select`,options:[`outlined`,`brand`,`ghost`,`filled`]},disabled:{control:`boolean`},form:{control:`text`},name:{control:`text`},noText:{control:`boolean`},wrap:{control:`boolean`},type:{control:`select`,options:[`button`,`reset`,`submit`]},value:{control:`text`},showIcon:{control:`boolean`},showIconLeading:{control:`boolean`},showIconTrailing:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},size:{control:`select`,options:[`small`,`medium`]},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},s={args:{"data-density":`functional`,onClick:a(),default:`Functional`},render:e=>({components:{DBButton:r},setup(){return{args:e}},template:`<DBButton v-bind="args"   >${e.default}</DBButton>`})},c={args:{"data-density":`regular`,onClick:a(),default:`(Default) Regular`},render:e=>({components:{DBButton:r},setup(){return{args:e}},template:`<DBButton v-bind="args"   >${e.default}</DBButton>`})},l={args:{"data-density":`expressive`,onClick:a(),default:`Expressive`},render:e=>({components:{DBButton:r},setup(){return{args:e}},template:`<DBButton v-bind="args"   >${e.default}</DBButton>`})},u=[`Functional`,`Regular`,`Expressive`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "onClick": fn(),
    "default": \`Functional\`
  },
  render: (args: any) => ({
    components: {
      DBButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBButton v-bind="args"   >\${args.default}</DBButton>\`
  })
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "onClick": fn(),
    "default": \`(Default) Regular\`
  },
  render: (args: any) => ({
    components: {
      DBButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBButton v-bind="args"   >\${args.default}</DBButton>\`
  })
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "onClick": fn(),
    "default": \`Expressive\`
  },
  render: (args: any) => ({
    components: {
      DBButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBButton v-bind="args"   >\${args.default}</DBButton>\`
  })
}`,...l.parameters?.docs?.source}}}})))()}export{d as a,i,s as n,c as r,l as t};