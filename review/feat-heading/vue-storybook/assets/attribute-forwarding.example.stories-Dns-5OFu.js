import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./heading-RMxwQ8dE.js";var r,i,a,o;function s(){return(s=e((()=>{t(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Components/DBHeading/Attribute forwarding`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{as:{control:`select`,options:[`h1`,`h2`,`h3`,`h4`,`h5`,`h6`]},size:{control:`select`,options:[`3xl`,`2xl`,`xl`,`lg`,`md`,`sm`,`xs`,`2xs`,`3xs`]},fontWeight:{control:`select`,options:[`black`,`light`]},alignment:{control:`select`,options:[`start`,`center`,`end`]},paragraphSpacing:{control:`boolean`},children:{control:`text`},startSlot:{control:!1},endSlot:{control:!1},className:{control:`text`},id:{control:`text`}}},a={args:{as:`h2`,id:`forwarded-heading`,class:`forwarded-heading-class`,"aria-label":`Forwarded accessible name`,"data-example":`heading`,title:`Forwarded title`,style:{textTransform:`uppercase`},default:`Forwarded attributes`},render:e=>({components:{DBHeading:n},setup(){return{args:e}},template:`<DBHeading v-bind="args"   >${e.default}</DBHeading>`})},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "as": "h2",
    "id": "forwarded-heading",
    "class": "forwarded-heading-class",
    "aria-label": "Forwarded accessible name",
    "data-example": "heading",
    "title": "Forwarded title",
    "style": {
      textTransform: 'uppercase'
    },
    "default": \`Forwarded attributes\`
  },
  render: (args: any) => ({
    components: {
      DBHeading
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBHeading v-bind="args"   >\${args.default}</DBHeading>\`
  })
}`,...a.parameters?.docs?.source}}},o=[`Nativeheadingattributes`]})))()}s();export{a as Nativeheadingattributes,o as __namedExportsOrder,i as default};