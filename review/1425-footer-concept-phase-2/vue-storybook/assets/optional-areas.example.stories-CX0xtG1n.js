import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,n,r,t as i}from"./footer-meta-B6CSyHt_.js";import{n as a,t as o}from"./footer-content-Bnjm6owI.js";import{n as s,t as c}from"./link-BvJNi6R_.js";var l,u,d,f,p;function m(){return(m=e((()=>{a(),n(),c(),t(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBFooter/Optional Areas`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{width:{control:`select`,options:[`full`,`large`,`medium`,`small`]},id:{control:`text`}}},d={args:{default:`<DBFooterContent
  ><nav aria-label="Content-only footer navigation"
    ><ul
      ><li><DBLink href="#services" :wrap="true"> Services </DBLink></li></ul
    ></nav
  ></DBFooterContent
>`},render:e=>({components:{DBFooter:r,DBFooterContent:o,DBFooterMeta:i,DBLink:s},setup(){return{args:e}},template:`<DBFooter v-bind="args"   >${e.default}</DBFooter>`})},f={args:{default:`<DBFooterMeta
  ><p>
    Customer service:<DBLink href="#contact" :wrap="true">
      Contact us
    </DBLink></p
  ></DBFooterMeta
>`},render:e=>({components:{DBFooter:r,DBFooterContent:o,DBFooterMeta:i,DBLink:s},setup(){return{args:e}},template:`<DBFooter v-bind="args"   >${e.default}</DBFooter>`})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`<DBFooterContent
  ><nav aria-label="Content-only footer navigation"
    ><ul
      ><li><DBLink href="#services" :wrap="true"> Services </DBLink></li></ul
    ></nav
  ></DBFooterContent
>\`
  },
  render: (args: any) => ({
    components: {
      DBFooter,
      DBFooterContent,
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`<DBFooterMeta
  ><p>
    Customer service:<DBLink href="#contact" :wrap="true">
      Contact us
    </DBLink></p
  ></DBFooterMeta
>\`
  },
  render: (args: any) => ({
    components: {
      DBFooter,
      DBFooterContent,
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
}`,...f.parameters?.docs?.source}}},p=[`Contentonly`,`Metaonly`]})))()}m();export{d as Contentonly,f as Metaonly,p as __namedExportsOrder,u as default};