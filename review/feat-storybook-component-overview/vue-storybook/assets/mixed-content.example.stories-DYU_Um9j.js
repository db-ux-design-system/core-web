import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./paragraph-0tnSHIZy.js";import{n as i,t as a}from"./text-group-BAcKQBGB.js";var o=t({Achildoutsidethetextelements:()=>u,Nativeblocktext:()=>l,__namedExportsOrder:()=>d,default:()=>c}),s,c,l,u,d;function f(){return(f=e((()=>{r(),a(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBTextGroup/Mixed content`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{alignment:{control:`select`,options:[`start`,`center`,`end`]},textSpacing:{control:`boolean`},className:{control:`text`},id:{control:`text`}}},l={args:{textSpacing:!0,default:`<h3>A native heading</h3
><p>
  A native paragraph. The opt-in reaches it just like it reaches our components,
  so plain markup and components can be mixed freely. </p
><DBParagraph>
  A component paragraph, spaced by exactly the same rule.
</DBParagraph>`},render:e=>({components:{DBTextGroup:i,DBParagraph:n},setup(){return{args:e}},template:`<DBTextGroup v-bind="args"   >${e.default}</DBTextGroup>`})},u={args:{textSpacing:!0,default:`<DBParagraph>
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
</DBParagraph>`},render:e=>({components:{DBTextGroup:i,DBParagraph:n},setup(){return{args:e}},template:`<DBTextGroup v-bind="args"   >${e.default}</DBTextGroup>`})},d=[`Nativeblocktext`,`Achildoutsidethetextelements`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}}})))()}export{o as i,l as n,f as r,u as t};