import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./paragraph-BynEt38f.js";import{n as r,t as i}from"./text-Bjw6k3eY.js";var a,o,s,c,l;function u(){return(u=e((()=>{n(),i(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBText/Forwarded attributes`,component:t,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`3xl`,`2xl`,`xl`,`lg`,`md`,`sm`,`xs`,`2xs`,`3xs`]},alignment:{control:`select`,options:[`start`,`center`,`end`]},children:{control:`text`},className:{control:`text`},id:{control:`text`}}},s={args:{lang:`en`,"data-testid":`forwarded-paragraph`,default:`Native attributes land on the paragraph element.`},render:e=>({components:{DBParagraph:t,DBText:r},setup(){return{args:e}},template:`<DBParagraph v-bind="args"   >${e.default}</DBParagraph>`})},c={args:{lang:`de`,default:`Schienenersatzverkehr`},render:e=>({components:{DBParagraph:t,DBText:r},setup(){return{args:e}},template:`<DBParagraph    >
                The German term is<DBText v-bind="args"   >${e.default}</DBText>, announced in
                the correct language.
            </DBParagraph>`})},l=[`Paragraphwithlang`,`Textwithatranslation`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "lang": "en",
    "data-testid": "forwarded-paragraph",
    "default": \`Native attributes land on the paragraph element.\`
  },
  render: (args: any) => ({
    components: {
      DBParagraph,
      DBText
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
    "lang": "de",
    "default": \`Schienenersatzverkehr\`
  },
  render: (args: any) => ({
    components: {
      DBParagraph,
      DBText
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBParagraph    >
                The German term is<DBText v-bind="args"   >\${args.default}</DBText>, announced in
                the correct language.
            </DBParagraph>\`
  })
}`,...c.parameters?.docs?.source}}}})))()}u();export{s as Paragraphwithlang,c as Textwithatranslation,l as __namedExportsOrder,o as default};