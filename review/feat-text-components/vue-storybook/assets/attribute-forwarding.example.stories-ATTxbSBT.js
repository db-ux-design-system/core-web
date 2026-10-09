import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./paragraph-CjmNm0cV.js";var r,i,a,o,s;function c(){return(c=e((()=>{n(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Components/DBParagraph/Forwarded attributes`,component:t,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`lg`,`md`,`sm`]},fontWeight:{control:`select`,options:[`black`,`regular`]},children:{control:`text`},className:{control:`text`},id:{control:`text`}}},a={args:{lang:`en`,"data-testid":`forwarded-paragraph`,default:`Native attributes land on the paragraph element.`},render:e=>({components:{DBParagraph:t},setup(){return{args:e}},template:`<DBParagraph v-bind="args"   >${e.default}</DBParagraph>`})},o={args:{"data-visually-hidden":`true`,default:`Only announced by assistive technology.`},render:e=>({components:{DBParagraph:t},setup(){return{args:e}},template:`<DBParagraph v-bind="args"   >${e.default}</DBParagraph>`})},s=[`Paragraphwithlang`,`Visuallyhiddenparagraph`],a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "lang": "en",
    "data-testid": "forwarded-paragraph",
    "default": \`Native attributes land on the paragraph element.\`
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
    "data-visually-hidden": "true",
    "default": \`Only announced by assistive technology.\`
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
}`,...o.parameters?.docs?.source}}}})))()}c();export{a as Paragraphwithlang,o as Visuallyhiddenparagraph,s as __namedExportsOrder,i as default};