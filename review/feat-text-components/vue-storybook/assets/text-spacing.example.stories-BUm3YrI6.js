import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./paragraph-CMX_xuB_.js";import{n as r,t as i}from"./text-group-BSU00BCk.js";var a,o,s,c,l;function u(){return(u=e((()=>{n(),i(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBParagraph/Text spacing`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{alignment:{control:`select`,options:[`start`,`center`,`end`]},textSpacing:{control:`boolean`},className:{control:`text`},id:{control:`text`}}},s={args:{default:`<DBParagraph>
  Without text spacing the paragraphs sit directly on top of each other, because
  the paragraph margins are reset. </DBParagraph
><DBParagraph>
  Spacing is the group's job, so nothing has to be set on the paragraphs
  themselves.
</DBParagraph>`},render:e=>({components:{DBTextGroup:r,DBParagraph:t},setup(){return{args:e}},template:`<DBTextGroup v-bind="args"   >${e.default}</DBTextGroup>`})},c={args:{textSpacing:!0,default:`<DBParagraph>
  With text spacing every child gets half a line height above and below. </DBParagraph
><DBParagraph size="sm">
  Two adjacent children are a full line height apart, and the group keeps half
  of one at its outer edges.
</DBParagraph>`},render:e=>({components:{DBTextGroup:r,DBParagraph:t},setup(){return{args:e}},template:`<DBTextGroup v-bind="args"   >${e.default}</DBTextGroup>`})},l=[`DefaultWithoutspacing`,`Withtextspacing`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`<DBParagraph>
  Without text spacing the paragraphs sit directly on top of each other, because
  the paragraph margins are reset. </DBParagraph
><DBParagraph>
  Spacing is the group's job, so nothing has to be set on the paragraphs
  themselves.
</DBParagraph>\`
  },
  render: (args: any) => ({
    components: {
      DBTextGroup,
      DBParagraph
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBTextGroup v-bind="args"   >\${args.default}</DBTextGroup>\`
  })
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "textSpacing": true,
    "default": \`<DBParagraph>
  With text spacing every child gets half a line height above and below. </DBParagraph
><DBParagraph size="sm">
  Two adjacent children are a full line height apart, and the group keeps half
  of one at its outer edges.
</DBParagraph>\`
  },
  render: (args: any) => ({
    components: {
      DBTextGroup,
      DBParagraph
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBTextGroup v-bind="args"   >\${args.default}</DBTextGroup>\`
  })
}`,...c.parameters?.docs?.source}}}})))()}u();export{s as DefaultWithoutspacing,c as Withtextspacing,l as __namedExportsOrder,o as default};