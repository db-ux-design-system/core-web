import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./paragraph-kDgFEdZT.js";import{n as r,t as i}from"./text-BjeShbV5.js";var a,o,s,c,l;function u(){return(u=e((()=>{n(),i(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBText/Inline text`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`3xl`,`2xl`,`xl`,`lg`,`md`,`sm`,`xs`,`2xs`,`3xs`]},visuallyHidden:{control:`boolean`},children:{control:`text`},className:{control:`text`},id:{control:`text`}}},s={args:{size:`sm`,default:`inline passage at a smaller size`},render:e=>({components:{DBText:r,DBParagraph:t},setup(){return{args:e}},template:`<DBParagraph    >
                A paragraph with an<DBText v-bind="args"   >${e.default}</DBText> that
                keeps flowing in the same line.
            </DBParagraph>`})},c={args:{size:`2xs`,default:`Departure`},render:e=>({components:{DBText:r,DBParagraph:t},setup(){return{args:e}},template:`<dl    ><dt    ><DBText v-bind="args"   >${e.default}</DBText></dt><dd    ><DBText    >Berlin Hauptbahnhof</DBText></dd></dl>`})},l=[`Insideaparagraph`,`Insideadescriptionlist`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "sm",
    "default": \`inline passage at a smaller size\`
  },
  render: (args: any) => ({
    components: {
      DBText,
      DBParagraph
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBParagraph    >
                A paragraph with an<DBText v-bind="args"   >\${args.default}</DBText> that
                keeps flowing in the same line.
            </DBParagraph>\`
  })
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "2xs",
    "default": \`Departure\`
  },
  render: (args: any) => ({
    components: {
      DBText,
      DBParagraph
    },
    setup() {
      return {
        args
      };
    },
    template: \`<dl    ><dt    ><DBText v-bind="args"   >\${args.default}</DBText></dt><dd    ><DBText    >Berlin Hauptbahnhof</DBText></dd></dl>\`
  })
}`,...c.parameters?.docs?.source}}}})))()}u();export{c as Insideadescriptionlist,s as Insideaparagraph,l as __namedExportsOrder,o as default};