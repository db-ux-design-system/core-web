import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./custom-heading-C1B0sKI4.js";import{n as r,t as i}from"./heading-h2-5Hq0SlyS.js";var a,o,s,c,l;function u(){return(u=e((()=>{t(),r(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBHeadingH2/Forwarded heading attributes`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`3xl`,`2xl`,`xl`,`lg`,`md`,`sm`,`xs`,`2xs`,`3xs`]},fontWeight:{control:`select`,options:[`black`,`light`]},alignment:{control:`select`,options:[`start`,`center`,`end`]},paragraphSpacing:{control:`boolean`},children:{control:`text`},className:{control:`text`},id:{control:`text`}}},s={args:{id:`forwarded-heading`,class:`forwarded-heading-class`,"aria-label":`ID, class, ARIA, data and style forwarded to h2`,"data-example":`heading`,style:{textTransform:`uppercase`},default:`ID, class, ARIA, data and style forwarded to h2`},render:e=>({components:{DBHeadingH2:i,DBCustomHeading:n},setup(){return{args:e}},template:`<DBHeadingH2 v-bind="args"   >${e.default}</DBHeadingH2>`})},c={args:{id:`forwarded-custom-heading`,class:`forwarded-custom-heading-class`,"data-example":`custom-heading`,style:{textTransform:`uppercase`},default:`<h2>ID, class, data and style on the wrapper</h2>`},render:e=>({components:{DBHeadingH2:i,DBCustomHeading:n},setup(){return{args:e}},template:`<DBCustomHeading v-bind="args"   >${e.default}</DBCustomHeading>`})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "forwarded-heading",
    "class": "forwarded-heading-class",
    "aria-label": "ID, class, ARIA, data and style forwarded to h2",
    "data-example": "heading",
    "style": {
      textTransform: 'uppercase'
    },
    "default": \`ID, class, ARIA, data and style forwarded to h2\`
  },
  render: (args: any) => ({
    components: {
      DBHeadingH2,
      DBCustomHeading
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBHeadingH2 v-bind="args"   >\${args.default}</DBHeadingH2>\`
  })
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "forwarded-custom-heading",
    "class": "forwarded-custom-heading-class",
    "data-example": "custom-heading",
    "style": {
      textTransform: 'uppercase'
    },
    "default": \`<h2>ID, class, data and style on the wrapper</h2>\`
  },
  render: (args: any) => ({
    components: {
      DBHeadingH2,
      DBCustomHeading
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBCustomHeading v-bind="args"   >\${args.default}</DBCustomHeading>\`
  })
}`,...c.parameters?.docs?.source}}},l=[`NativeIDclassARIAdataandstyle`,`WrapperIDclassdataandstyle`]})))()}u();export{s as NativeIDclassARIAdataandstyle,c as WrapperIDclassdataandstyle,l as __namedExportsOrder,o as default};