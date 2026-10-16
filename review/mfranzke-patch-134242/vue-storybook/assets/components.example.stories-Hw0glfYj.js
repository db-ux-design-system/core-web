import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./heading-h3-8c2ixYcI.js";import{n as r,t as i}from"./paragraph-Bs02vGRB.js";import{n as a,t as o}from"./text-group-CKsDrrQ7.js";var s,c,l,u;function d(){return(d=e((()=>{t(),i(),o(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBTextGroup/With components`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{alignment:{control:`select`,options:[`start`,`center`,`end`]},textSpacing:{control:`boolean`},className:{control:`text`},id:{control:`text`}}},l={args:{textSpacing:!0,default:`<DBHeadingH3>A heading starts the block</DBHeadingH3
><DBParagraph>
  Neither component carries spacing of its own. The group sets the text spacing
  attribute, and the foundations apply the margin to each element. </DBParagraph
><DBParagraph size="sm">
  Because the margin resolves against the element's own line height, a smaller
  paragraph gets proportionally less spacing.
</DBParagraph>`},render:e=>({components:{DBTextGroup:a,DBHeadingH3:n,DBParagraph:r},setup(){return{args:e}},template:`<DBTextGroup v-bind="args"   >${e.default}</DBTextGroup>`})},u=[`Headingandparagraphsinonegroup`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "textSpacing": true,
    "default": \`<DBHeadingH3>A heading starts the block</DBHeadingH3
><DBParagraph>
  Neither component carries spacing of its own. The group sets the text spacing
  attribute, and the foundations apply the margin to each element. </DBParagraph
><DBParagraph size="sm">
  Because the margin resolves against the element's own line height, a smaller
  paragraph gets proportionally less spacing.
</DBParagraph>\`
  },
  render: (args: any) => ({
    components: {
      DBTextGroup,
      DBHeadingH3,
      DBParagraph
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBTextGroup v-bind="args"   >\${args.default}</DBTextGroup>\`
  })
}`,...l.parameters?.docs?.source}}}})))()}d();export{l as Headingandparagraphsinonegroup,u as __namedExportsOrder,c as default};