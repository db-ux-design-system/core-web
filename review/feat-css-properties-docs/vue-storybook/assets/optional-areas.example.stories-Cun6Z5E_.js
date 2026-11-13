import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{i as n,n as r,r as i,t as a}from"./footer-meta-DkA5JR2z.js";import{n as o,t as s}from"./footer-content-pwxrI3EZ.js";import{n as c,t as l}from"./link-CD9XfbAX.js";var u=t({Contentonly:()=>p,Metaonly:()=>m,__namedExportsOrder:()=>h,default:()=>f}),d,f,p,m,h;function g(){return(g=e((()=>{o(),r(),l(),n(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/DBFooter/Optional Areas`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{width:{control:`select`,options:[`full`,`large`,`medium`,`small`]},id:{control:`text`}}},p={args:{default:`<DBFooterContent
  ><nav aria-label="Content-only footer navigation"
    ><ul
      ><li><DBLink href="#services" :wrap="true"> Services </DBLink></li></ul
    ></nav
  ></DBFooterContent
>`},render:e=>({components:{DBFooter:i,DBFooterContent:s,DBFooterMeta:a,DBLink:c},setup(){return{args:e}},template:`<DBFooter v-bind="args"   >${e.default}</DBFooter>`})},m={args:{default:`<DBFooterMeta
  ><p
    :style="{
  font: 'var(--db-type-body-sm)',
  margin: '0',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.5ch'
}"
    ><span>Customer service:</span
    ><DBLink variant="inline" size="small" href="#contact">
      Contact us
    </DBLink></p
  ></DBFooterMeta
>`},render:e=>({components:{DBFooter:i,DBFooterContent:s,DBFooterMeta:a,DBLink:c},setup(){return{args:e}},template:`<DBFooter v-bind="args"   >${e.default}</DBFooter>`})},h=[`Contentonly`,`Metaonly`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`<DBFooterMeta
  ><p
    :style="{
  font: 'var(--db-type-body-sm)',
  margin: '0',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.5ch'
}"
    ><span>Customer service:</span
    ><DBLink variant="inline" size="small" href="#contact">
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
}`,...m.parameters?.docs?.source}}}})))()}export{u as i,m as n,g as r,p as t};