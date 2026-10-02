import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./paragraph-CPsJwS9z.js";var r,i,a,o,s,c;function l(){return(l=e((()=>{n(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Components/DBText/Logical alignment`,component:t,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`3xl`,`2xl`,`xl`,`lg`,`md`,`sm`,`xs`,`2xs`,`3xs`]},alignment:{control:`select`,options:[`start`,`center`,`end`]},children:{control:`text`},className:{control:`text`},id:{control:`text`}}},a={args:{alignment:`start`,default:`(Default) Start`},render:e=>({components:{DBParagraph:t},setup(){return{args:e}},template:`<DBParagraph v-bind="args"   >${e.default}</DBParagraph>`})},o={args:{alignment:`center`,default:`Center`},render:e=>({components:{DBParagraph:t},setup(){return{args:e}},template:`<DBParagraph v-bind="args"   >${e.default}</DBParagraph>`})},s={args:{alignment:`end`,default:`End`},render:e=>({components:{DBParagraph:t},setup(){return{args:e}},template:`<DBParagraph v-bind="args"   >${e.default}</DBParagraph>`})},c=[`DefaultStart`,`Center`,`End`],a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "alignment": "start",
    "default": \`(Default) Start\`
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
    "alignment": "center",
    "default": \`Center\`
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
    "alignment": "end",
    "default": \`End\`
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
}`,...s.parameters?.docs?.source}}}})))()}l();export{o as Center,a as DefaultStart,s as End,c as __namedExportsOrder,i as default};