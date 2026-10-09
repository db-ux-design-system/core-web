import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./paragraph-CjmNm0cV.js";var r,i,a,o,s,c,l;function u(){return(u=e((()=>{n(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Components/DBParagraph/Sizes`,component:t,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`lg`,`md`,`sm`]},fontWeight:{control:`select`,options:[`black`,`regular`]},children:{control:`text`},className:{control:`text`},id:{control:`text`}}},a={args:{default:`(Default) Inherited`},render:e=>({components:{DBParagraph:t},setup(){return{args:e}},template:`<DBParagraph v-bind="args"   >${e.default}</DBParagraph>`})},o={args:{size:`lg`,default:`Size lg`},render:e=>({components:{DBParagraph:t},setup(){return{args:e}},template:`<DBParagraph v-bind="args"   >${e.default}</DBParagraph>`})},s={args:{size:`md`,default:`Size md`},render:e=>({components:{DBParagraph:t},setup(){return{args:e}},template:`<DBParagraph v-bind="args"   >${e.default}</DBParagraph>`})},c={args:{size:`sm`,default:`Size sm`},render:e=>({components:{DBParagraph:t},setup(){return{args:e}},template:`<DBParagraph v-bind="args"   >${e.default}</DBParagraph>`})},l=[`DefaultInherited`,`Sizelg`,`Sizemd`,`Sizesm`],a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`(Default) Inherited\`
  },
  render: (args: any) => ({
    components: {
      DBParagraph
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBParagraph v-bind="args"   >\${args.default}</DBParagraph>\`
  })
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "lg",
    "default": \`Size lg\`
  },
  render: (args: any) => ({
    components: {
      DBParagraph
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBParagraph v-bind="args"   >\${args.default}</DBParagraph>\`
  })
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "md",
    "default": \`Size md\`
  },
  render: (args: any) => ({
    components: {
      DBParagraph
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBParagraph v-bind="args"   >\${args.default}</DBParagraph>\`
  })
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "sm",
    "default": \`Size sm\`
  },
  render: (args: any) => ({
    components: {
      DBParagraph
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBParagraph v-bind="args"   >\${args.default}</DBParagraph>\`
  })
}`,...c.parameters?.docs?.source}}}})))()}u();export{a as DefaultInherited,o as Sizelg,s as Sizemd,c as Sizesm,l as __namedExportsOrder,i as default};