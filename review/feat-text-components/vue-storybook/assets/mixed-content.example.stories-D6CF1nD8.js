import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./paragraph-CjmNm0cV.js";import{n as r,t as i}from"./text-group-B1XsXWUw.js";var a,o,s,c,l;function u(){return(u=e((()=>{n(),i(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBParagraph/Mixed content`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{alignment:{control:`select`,options:[`start`,`center`,`end`]},textSpacing:{control:`boolean`},className:{control:`text`},id:{control:`text`}}},s={args:{textSpacing:!0,default:`<DBParagraph>
  The gap belongs to the group, so a child does not have to be a paragraph to be
  spaced. </DBParagraph
><div>
  A plain div without any of our classes, spaced like every other child.
</div>`},render:e=>({components:{DBTextGroup:r,DBParagraph:t},setup(){return{args:e}},template:`<DBTextGroup v-bind="args"   >${e.default}</DBTextGroup>`})},c={args:{textSpacing:!0,default:`<DBParagraph>
  A list keeps the block margin the browser gives it, and that margin adds to
  the gap below. </DBParagraph
><ul
  ><li>Reset it to keep a single rhythm</li
  ><li>The list items are unaffected</li></ul
><DBParagraph>
  Only our own components reset their block margin, so the group stays their
  single source of spacing.
</DBParagraph>`},render:e=>({components:{DBTextGroup:r,DBParagraph:t},setup(){return{args:e}},template:`<DBTextGroup v-bind="args"   >${e.default}</DBTextGroup>`})},l=[`Childrenwithoutablockmargin`,`Achildthatbringsitsownblockmargin`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "textSpacing": true,
    "default": \`<DBParagraph>
  The gap belongs to the group, so a child does not have to be a paragraph to be
  spaced. </DBParagraph
><div>
  A plain div without any of our classes, spaced like every other child.
</div>\`
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
  A list keeps the block margin the browser gives it, and that margin adds to
  the gap below. </DBParagraph
><ul
  ><li>Reset it to keep a single rhythm</li
  ><li>The list items are unaffected</li></ul
><DBParagraph>
  Only our own components reset their block margin, so the group stays their
  single source of spacing.
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
}`,...c.parameters?.docs?.source}}}})))()}u();export{c as Achildthatbringsitsownblockmargin,s as Childrenwithoutablockmargin,l as __namedExportsOrder,o as default};