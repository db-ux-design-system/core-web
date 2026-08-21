import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./heading-h2-YsBgd5N7.js";var r,i,a,o,s,c;function l(){return(l=e((()=>{t(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Components/DBHeadingH2/Density`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`3xl`,`2xl`,`xl`,`lg`,`md`,`sm`,`xs`,`2xs`,`3xs`]},fontWeight:{control:`select`,options:[`black`,`light`]},alignment:{control:`select`,options:[`start`,`center`,`end`]},paragraphSpacing:{control:`boolean`},children:{control:`text`},className:{control:`text`},id:{control:`text`}}},a={args:{"data-density":`functional`,default:`Functional`},render:e=>({components:{DBHeadingH2:n},setup(){return{args:e}},template:`<DBHeadingH2 v-bind="args"   >${e.default}</DBHeadingH2>`})},o={args:{"data-density":`regular`,default:`(Default) Regular`},render:e=>({components:{DBHeadingH2:n},setup(){return{args:e}},template:`<DBHeadingH2 v-bind="args"   >${e.default}</DBHeadingH2>`})},s={args:{"data-density":`expressive`,default:`Expressive`},render:e=>({components:{DBHeadingH2:n},setup(){return{args:e}},template:`<DBHeadingH2 v-bind="args"   >${e.default}</DBHeadingH2>`})},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "default": \`Functional\`
  },
  render: (args: any) => ({
    components: {
      DBHeadingH2
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBHeadingH2 v-bind="args"   >\${args.default}</DBHeadingH2>\`
  })
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "default": \`(Default) Regular\`
  },
  render: (args: any) => ({
    components: {
      DBHeadingH2
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBHeadingH2 v-bind="args"   >\${args.default}</DBHeadingH2>\`
  })
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "default": \`Expressive\`
  },
  render: (args: any) => ({
    components: {
      DBHeadingH2
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBHeadingH2 v-bind="args"   >\${args.default}</DBHeadingH2>\`
  })
}`,...s.parameters?.docs?.source}}},c=[`Functional`,`DefaultRegular`,`Expressive`]})))()}l();export{o as DefaultRegular,s as Expressive,a as Functional,c as __namedExportsOrder,i as default};