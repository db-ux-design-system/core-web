import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,n,r,t as i}from"./footer-meta-DuUmWVHB.js";import{n as a,t as o}from"./footer-content-cTzO3F9n.js";import{n as s,t as c}from"./link-DrdFK0YD.js";var l,u,d,f;function p(){return(p=e((()=>{a(),n(),c(),t(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBFooter/Composition`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{width:{control:`select`,options:[`full`,`large`,`medium`,`small`]},id:{control:`text`}}},d={args:{width:`medium`,default:`<DBFooterContent
  ><nav aria-label="Footer navigation"
    ><ul
      ><li><DBLink href="#services" :wrap="true"> Services </DBLink></li></ul
    ></nav
  ></DBFooterContent
><DBFooterMeta copyright="Example Company"
  ><nav aria-label="Legal navigation"
    ><ul
      ><li
        ><DBLink variant="inline" size="small" href="#privacy">
          Privacy policy
        </DBLink></li
      ><li
        ><DBLink variant="inline" size="small" href="#imprint">
          Imprint
        </DBLink></li
      ><li
        ><DBLink variant="inline" size="small" href="#accessibility">
          Accessibility
        </DBLink></li
      ></ul
    ></nav
  ></DBFooterMeta
>`},render:e=>({components:{DBFooter:r,DBFooterContent:o,DBFooterMeta:i,DBLink:s},setup(){return{args:e}},template:`<DBFooter v-bind="args"   >${e.default}</DBFooter>`})},f=[`FooterComposition0`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "medium",
    "default": \`<DBFooterContent
  ><nav aria-label="Footer navigation"
    ><ul
      ><li><DBLink href="#services" :wrap="true"> Services </DBLink></li></ul
    ></nav
  ></DBFooterContent
><DBFooterMeta copyright="Example Company"
  ><nav aria-label="Legal navigation"
    ><ul
      ><li
        ><DBLink variant="inline" size="small" href="#privacy">
          Privacy policy
        </DBLink></li
      ><li
        ><DBLink variant="inline" size="small" href="#imprint">
          Imprint
        </DBLink></li
      ><li
        ><DBLink variant="inline" size="small" href="#accessibility">
          Accessibility
        </DBLink></li
      ></ul
    ></nav
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
}`,...d.parameters?.docs?.source}}}})))()}p();export{d as FooterComposition0,f as __namedExportsOrder,u as default};