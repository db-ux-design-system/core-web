import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./infotext-nUvz-XS8.js";import{n as i,t as a}from"./table-DrPpgZQ_.js";import{n as o,s,t as c}from"./data-IsZHFUvi.js";var l=t({Columns20:()=>f,Columns21:()=>p,__namedExportsOrder:()=>m,default:()=>d}),u,d,f,p,m;function h(){return(h=e((()=>{n(),a(),s(),{fn:u}=__STORYBOOK_MODULE_TEST__,d={title:`Components/DBTable/Column Count`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},caption:{control:`text`},captionPlain:{control:`text`},data:{control:`object`},divider:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},showCaption:{control:`boolean`},size:{control:`select`,options:[`x-small`,`small`,`medium`,`large`]},variant:{control:`select`,options:[`flat`,`zebra`,`spaced`]},mobileVariant:{control:`select`,options:[`table`,`list`]},stickyHeader:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},columnSizes:{control:`object`}}},f={args:{"data-testid":`table-20-columns`,captionPlain:`Columns 20`,data:c,showCaption:!0,default:``},render:e=>({components:{DBTable:i,DBInfotext:r},setup(){return{args:e}},template:`<div  :style="{
  inlineSize: '100%',
  display: 'flex',
  flexDirection: 'column'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Columns 20
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})},p={args:{"data-testid":`table-21-columns`,captionPlain:`Columns 21`,data:o,showCaption:!0,default:``},render:e=>({components:{DBTable:i,DBInfotext:r},setup(){return{args:e}},template:`<div  :style="{
  inlineSize: '100%',
  display: 'flex',
  flexDirection: 'column',
  '--db-table-columns': '21'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Columns 21
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})},m=[`Columns20`,`Columns21`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "table-20-columns",
    "captionPlain": "Columns 20",
    "data": columnCount20Table,
    "showCaption": true,
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBTable,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  inlineSize: '100%',
  display: 'flex',
  flexDirection: 'column'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Columns 20
                </DBInfotext><DBTable v-bind="args"   >\${args.default}</DBTable></div>\`
  })
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "table-21-columns",
    "captionPlain": "Columns 21",
    "data": columnCount21Table,
    "showCaption": true,
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBTable,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  inlineSize: '100%',
  display: 'flex',
  flexDirection: 'column',
  '--db-table-columns': '21'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Columns 21
                </DBInfotext><DBTable v-bind="args"   >\${args.default}</DBTable></div>\`
  })
}`,...p.parameters?.docs?.source}}}})))()}export{h as i,p as n,l as r,f as t};