import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,n,r,t as i}from"./footer-meta-B6CSyHt_.js";import{n as a,t as o}from"./link-BvJNi6R_.js";var s,c,l,u,d;function f(){return(f=e((()=>{n(),o(),t(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBFooter/Copyright`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{width:{control:`select`,options:[`full`,`large`,`medium`,`small`]},id:{control:`text`}}},l={args:{default:`<DBFooterMeta copyright="© Example Company"
  ><nav aria-label="Legal navigation with copyright"
    ><ul
      ><li><DBLink href="#privacy" :wrap="true"> Privacy </DBLink></li></ul
    ></nav
  ></DBFooterMeta
>`},render:e=>({components:{DBFooter:r,DBFooterMeta:i,DBLink:a},setup(){return{args:e}},template:`<DBFooter v-bind="args"   >${e.default}</DBFooter>`})},u={args:{default:`<DBFooterMeta
  ><nav aria-label="Legal navigation without copyright"
    ><ul
      ><li><DBLink href="#imprint" :wrap="true"> Imprint </DBLink></li></ul
    ></nav
  ></DBFooterMeta
>`},render:e=>({components:{DBFooter:r,DBFooterMeta:i,DBLink:a},setup(){return{args:e}},template:`<DBFooter v-bind="args"   >${e.default}</DBFooter>`})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`<DBFooterMeta copyright="© Example Company"
  ><nav aria-label="Legal navigation with copyright"
    ><ul
      ><li><DBLink href="#privacy" :wrap="true"> Privacy </DBLink></li></ul
    ></nav
  ></DBFooterMeta
>\`
  },
  render: (args: any) => ({
    components: {
      DBFooter,
      DBFooterMeta,
      DBLink
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBFooter v-bind="args"   >\${args.default}</DBFooter>\`
  })
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`<DBFooterMeta
  ><nav aria-label="Legal navigation without copyright"
    ><ul
      ><li><DBLink href="#imprint" :wrap="true"> Imprint </DBLink></li></ul
    ></nav
  ></DBFooterMeta
>\`
  },
  render: (args: any) => ({
    components: {
      DBFooter,
      DBFooterMeta,
      DBLink
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBFooter v-bind="args"   >\${args.default}</DBFooter>\`
  })
}`,...u.parameters?.docs?.source}}},d=[`Customcopyright`,`Withoutcopyright`]})))()}f();export{l as Customcopyright,u as Withoutcopyright,d as __namedExportsOrder,c as default};