import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./paragraph-CTWbA-Xy.js";import{n as r,t as i}from"./text-group-DICPjYZo.js";var a,o,s,c,l;function u(){return(u=e((()=>{n(),i(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBTextGroup/Mixed content`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{alignment:{control:`select`,options:[`start`,`center`,`end`]},textSpacing:{control:`boolean`},className:{control:`text`},id:{control:`text`}}},s={args:{textSpacing:!0,default:`<h3>A native heading</h3
><p>
  A native paragraph. The opt-in reaches it just like it reaches our components,
  so plain markup and components can be mixed freely. </p
><DBParagraph>
  A component paragraph, spaced by exactly the same rule.
</DBParagraph>`},render:e=>({components:{DBTextGroup:r,DBParagraph:t},setup(){return{args:e}},template:`<DBTextGroup v-bind="args"   >${e.default}</DBTextGroup>`})},c={args:{textSpacing:!0,default:`<DBParagraph>
  A list is not one of the block-text elements, so it keeps whatever margin it
  brings. </DBParagraph
><ul
  :style="{
  marginBlock: 'calc(1lh * var(--db-text-spacing, 0))'
}"
  ><li>Opted into the same rhythm</li
  ><li>The list items are unaffected</li></ul
><DBParagraph>
  Set a zero block margin instead to take such a child out of the rhythm
  entirely.
</DBParagraph>`},render:e=>({components:{DBTextGroup:r,DBParagraph:t},setup(){return{args:e}},template:`<DBTextGroup v-bind="args"   >${e.default}</DBTextGroup>`})},l=[`Nativeblocktext`,`Achildoutsidethetextelements`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "textSpacing": true,
    "default": \`<h3>A native heading</h3
><p>
  A native paragraph. The opt-in reaches it just like it reaches our components,
  so plain markup and components can be mixed freely. </p
><DBParagraph>
  A component paragraph, spaced by exactly the same rule.
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
  A list is not one of the block-text elements, so it keeps whatever margin it
  brings. </DBParagraph
><ul
  :style="{
  marginBlock: 'calc(1lh * var(--db-text-spacing, 0))'
}"
  ><li>Opted into the same rhythm</li
  ><li>The list items are unaffected</li></ul
><DBParagraph>
  Set a zero block margin instead to take such a child out of the rhythm
  entirely.
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
}`,...c.parameters?.docs?.source}}}})))()}u();export{c as Achildoutsidethetextelements,s as Nativeblocktext,l as __namedExportsOrder,o as default};