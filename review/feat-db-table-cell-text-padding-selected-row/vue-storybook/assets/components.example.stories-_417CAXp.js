import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./heading-h3-DWMGNJUD.js";import{n as i,t as a}from"./paragraph-Cp1oJJb_.js";import{n as o,t as s}from"./text-group-DPavn6dM.js";var c=t({Headingandparagraphsinonegroup:()=>d,__namedExportsOrder:()=>f,default:()=>u}),l,u,d,f;function p(){return(p=e((()=>{n(),a(),s(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBTextGroup/With components`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{alignment:{control:`select`,options:[`start`,`center`,`end`]},textSpacing:{control:`boolean`},className:{control:`text`},id:{control:`text`}}},d={args:{textSpacing:!0,default:`<DBHeadingH3>A heading starts the block</DBHeadingH3
><DBParagraph>
  Neither component carries spacing of its own. The group sets the text spacing
  attribute, and the foundations apply the margin to each element. </DBParagraph
><DBParagraph size="sm">
  Because the margin resolves against the element's own line height, a smaller
  paragraph gets proportionally less spacing.
</DBParagraph>`},render:e=>({components:{DBTextGroup:o,DBHeadingH3:r,DBParagraph:i},setup(){return{args:e}},template:`<DBTextGroup v-bind="args"   >${e.default}</DBTextGroup>`})},f=[`Headingandparagraphsinonegroup`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}}})))()}export{c as n,p as r,d as t};