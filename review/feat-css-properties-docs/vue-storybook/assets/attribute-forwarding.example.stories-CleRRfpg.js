import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./paragraph-D9P9SpVP.js";var i=t({Paragraphwithlang:()=>s,Visuallyhiddenparagraph:()=>c,__namedExportsOrder:()=>l,default:()=>o}),a,o,s,c,l;function u(){return(u=e((()=>{r(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBParagraph/Forwarded attributes`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`lg`,`md`,`sm`]},children:{control:`text`},className:{control:`text`},id:{control:`text`}}},s={args:{lang:`en`,"data-testid":`forwarded-paragraph`,default:`Native attributes land on the paragraph element.`},render:e=>({components:{DBParagraph:n},setup(){return{args:e}},template:`<DBParagraph v-bind="args"   >${e.default}</DBParagraph>`})},c={args:{"data-visually-hidden":`true`,default:`Only announced by assistive technology.`},render:e=>({components:{DBParagraph:n},setup(){return{args:e}},template:`<DBParagraph v-bind="args"   >${e.default}</DBParagraph>`})},l=[`Paragraphwithlang`,`Visuallyhiddenparagraph`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}}})))()}export{o as a,u as i,c as n,i as r,s as t};