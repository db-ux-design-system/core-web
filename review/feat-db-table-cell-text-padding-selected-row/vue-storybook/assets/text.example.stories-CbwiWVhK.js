import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./infotext-ClxkgNnW.js";import{c as i,d as a,f as o,i as s,l as c,m as l,n as u,p as d,r as f,s as p,t as m,u as h}from"./table-DxuOKdbM.js";import{f as g,s as _}from"./data-IsZHFUvi.js";var v=t({Composition:()=>S,Data:()=>x,__namedExportsOrder:()=>C,default:()=>b}),y,b,x,S,C;function w(){return(w=e((()=>{n(),p(),d(),f(),a(),c(),m(),_(),{fn:y}=__STORYBOOK_MODULE_TEST__,b={title:`Components/DBTable/Text`,component:u,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},caption:{control:`text`},captionPlain:{control:`text`},data:{control:`object`},divider:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},showCaption:{control:`boolean`},size:{control:`select`,options:[`x-small`,`small`,`medium`,`large`]},variant:{control:`select`,options:[`flat`,`zebra`,`spaced`]},mobileVariant:{control:`select`,options:[`table`,`list`]},stickyHeader:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},columnSizes:{control:`object`}}},x={args:{captionPlain:`Data`,data:g,default:``},render:e=>({components:{DBTable:u,DBInfotext:r,DBTableBody:i,DBTableDataCell:l,DBTableHead:s,DBTableHeaderCell:o,DBTableRow:h},setup(){return{args:e}},template:`<div  :style="{
  minInlineSize: '300px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Data
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})},S={args:{captionPlain:`Composition`,default:`<DBTableHead
  ><DBTableRow
    ><DBTableHeaderCell scope="col" text="Comp A"></DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Comp B </DBTableHeaderCell></DBTableRow
  ></DBTableHead
><DBTableBody
  ><DBTableRow
    ><DBTableHeaderCell scope="row" text="Comp 1"></DBTableHeaderCell
    ><DBTableDataCell text="Comp 2"></DBTableDataCell></DBTableRow
  ><DBTableRow
    ><DBTableHeaderCell scope="row"> Comp 3 </DBTableHeaderCell
    ><DBTableDataCell>Comp 4</DBTableDataCell></DBTableRow
  ></DBTableBody
>`},render:e=>({components:{DBTable:u,DBInfotext:r,DBTableBody:i,DBTableDataCell:l,DBTableHead:s,DBTableHeaderCell:o,DBTableRow:h},setup(){return{args:e}},template:`<div  :style="{
  minInlineSize: '300px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Composition
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})},C=[`Data`,`Composition`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    "captionPlain": "Data",
    "data": textTable,
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBTable,
      DBInfotext,
      DBTableBody,
      DBTableDataCell,
      DBTableHead,
      DBTableHeaderCell,
      DBTableRow
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  minInlineSize: '300px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Data
                </DBInfotext><DBTable v-bind="args"   >\${args.default}</DBTable></div>\`
  })
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    "captionPlain": "Composition",
    "default": \`<DBTableHead
  ><DBTableRow
    ><DBTableHeaderCell scope="col" text="Comp A"></DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Comp B </DBTableHeaderCell></DBTableRow
  ></DBTableHead
><DBTableBody
  ><DBTableRow
    ><DBTableHeaderCell scope="row" text="Comp 1"></DBTableHeaderCell
    ><DBTableDataCell text="Comp 2"></DBTableDataCell></DBTableRow
  ><DBTableRow
    ><DBTableHeaderCell scope="row"> Comp 3 </DBTableHeaderCell
    ><DBTableDataCell>Comp 4</DBTableDataCell></DBTableRow
  ></DBTableBody
>\`
  },
  render: (args: any) => ({
    components: {
      DBTable,
      DBInfotext,
      DBTableBody,
      DBTableDataCell,
      DBTableHead,
      DBTableHeaderCell,
      DBTableRow
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  minInlineSize: '300px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Composition
                </DBInfotext><DBTable v-bind="args"   >\${args.default}</DBTable></div>\`
  })
}`,...S.parameters?.docs?.source}}}})))()}export{v as i,x as n,w as r,S as t};