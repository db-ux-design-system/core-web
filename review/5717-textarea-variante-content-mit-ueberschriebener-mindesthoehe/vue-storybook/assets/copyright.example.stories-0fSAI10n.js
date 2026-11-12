import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{i as n,n as r,r as i,t as a}from"./footer-meta-Lf6KAA_q.js";import{n as o,t as s}from"./link-C6jHjZtQ.js";var c=t({Customcopyright:()=>d,Withoutcopyright:()=>f,__namedExportsOrder:()=>p,default:()=>u}),l,u,d,f,p;function m(){return(m=e((()=>{r(),s(),n(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBFooter/Copyright`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{width:{control:`select`,options:[`full`,`large`,`medium`,`small`]},id:{control:`text`}}},d={args:{default:`<DBFooterMeta copyright="Example Company"
  ><nav aria-label="Legal navigation with copyright"
    ><ul
      ><li
        ><DBLink variant="inline" size="small" href="#privacy">
          Privacy policy
        </DBLink></li
      ><li
        ><DBLink variant="inline" size="small" href="#imprint">
          Imprint
        </DBLink></li
      ></ul
    ></nav
  ></DBFooterMeta
>`},render:e=>({components:{DBFooter:i,DBFooterMeta:a,DBLink:o},setup(){return{args:e}},template:`<DBFooter v-bind="args"   >${e.default}</DBFooter>`})},f={args:{default:`<DBFooterMeta
  ><nav aria-label="Legal navigation without copyright"
    ><ul
      ><li
        ><DBLink variant="inline" size="small" href="#terms">
          Terms and conditions
        </DBLink></li
      ><li
        ><DBLink variant="inline" size="small" href="#accessibility">
          Accessibility
        </DBLink></li
      ></ul
    ></nav
  ></DBFooterMeta
>`},render:e=>({components:{DBFooter:i,DBFooterMeta:a,DBLink:o},setup(){return{args:e}},template:`<DBFooter v-bind="args"   >${e.default}</DBFooter>`})},p=[`Customcopyright`,`Withoutcopyright`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`<DBFooterMeta copyright="Example Company"
  ><nav aria-label="Legal navigation with copyright"
    ><ul
      ><li
        ><DBLink variant="inline" size="small" href="#privacy">
          Privacy policy
        </DBLink></li
      ><li
        ><DBLink variant="inline" size="small" href="#imprint">
          Imprint
        </DBLink></li
      ></ul
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`<DBFooterMeta
  ><nav aria-label="Legal navigation without copyright"
    ><ul
      ><li
        ><DBLink variant="inline" size="small" href="#terms">
          Terms and conditions
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
}`,...f.parameters?.docs?.source}}}})))()}export{m as i,f as n,c as r,d as t};