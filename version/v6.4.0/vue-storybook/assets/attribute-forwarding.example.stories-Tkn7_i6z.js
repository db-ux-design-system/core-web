import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./custom-heading-Bp0w8v8W.js";import{n as i,t as a}from"./heading-h2-BbQVhwFy.js";var o=t({NativeIDclassARIAdataandstyle:()=>l,WrapperIDclassdataandstyle:()=>u,__namedExportsOrder:()=>d,default:()=>c}),s,c,l,u,d;function f(){return(f=e((()=>{n(),i(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBHeading/Forwarded heading attributes`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{visualSize:{control:`select`,options:[`h1`,`h2`,`h3`,`h4`,`h5`,`h6`,`p-small`,`p-medium`,`p-large`]},fontWeight:{control:`select`,options:[`black`,`light`]},children:{control:`text`},className:{control:`text`},id:{control:`text`}}},l={args:{id:`forwarded-heading`,class:`forwarded-heading-class`,"aria-label":`ID, class, ARIA, data and style forwarded to h2`,"data-example":`heading`,style:{textTransform:`uppercase`},default:`ID, class, ARIA, data and style forwarded to h2`},render:e=>({components:{DBHeadingH2:a,DBCustomHeading:r},setup(){return{args:e}},template:`<DBHeadingH2 v-bind="args"   >${e.default}</DBHeadingH2>`})},u={args:{id:`forwarded-custom-heading`,class:`forwarded-custom-heading-class`,"data-example":`custom-heading`,style:{textTransform:`uppercase`},default:`<h2>ID, class, data and style on the wrapper</h2>`},render:e=>({components:{DBHeadingH2:a,DBCustomHeading:r},setup(){return{args:e}},template:`<DBCustomHeading v-bind="args"   >${e.default}</DBCustomHeading>`})},d=[`NativeIDclassARIAdataandstyle`,`WrapperIDclassdataandstyle`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}}})))()}export{f as i,u as n,o as r,l as t};