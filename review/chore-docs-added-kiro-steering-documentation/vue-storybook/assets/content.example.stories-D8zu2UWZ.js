import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./infotext-Bf8S0QRs.js";import{a as r,c as i,d as a,f as o,i as s,l as c,m as l,n as u,o as d,p as f,r as p,s as m,t as h,u as g}from"./table-B2qn5ogy.js";import{a as _,t as v}from"./data-CA6wTzZB.js";var y,b,x,S,C;function w(){return(w=e((()=>{t(),m(),f(),r(),p(),a(),c(),h(),_(),{fn:y}=__STORYBOOK_MODULE_TEST__,b={title:`Components/DBTable/Content`,component:u,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},caption:{control:`text`},captionPlain:{control:`text`},data:{control:`object`},divider:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},showCaption:{control:`boolean`},size:{control:`select`,options:[`x-small`,`small`,`medium`,`large`]},variant:{control:`select`,options:[`flat`,`zebra`,`spaced`]},mobileVariant:{control:`select`,options:[`table`,`list`]},stickyHeader:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},columnSizes:{control:`object`}}},x={args:{captionPlain:`Data`,data:v,default:``},render:e=>({components:{DBTable:u,DBInfotext:n,DBTableBody:i,DBTableDataCell:l,DBTableFooter:d,DBTableHead:s,DBTableHeaderCell:o,DBTableRow:g},setup(){return{args:e}},template:`<div  :style="{
  minInlineSize: '300px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Data
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})},S={args:{captionPlain:`Composition`,default:`<DBTableHead
  ><DBTableRow
    ><DBTableHeaderCell scope="col"> Comp A </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Comp B </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Comp C </DBTableHeaderCell></DBTableRow
  ></DBTableHead
><DBTableBody
  ><DBTableRow
    ><DBTableHeaderCell scope="row"> Comp 1 </DBTableHeaderCell
    ><DBTableDataCell>Comp 2</DBTableDataCell
    ><DBTableDataCell>Comp 3</DBTableDataCell></DBTableRow
  ><DBTableRow
    ><DBTableHeaderCell scope="row"> Comp 4 </DBTableHeaderCell
    ><DBTableDataCell>Comp 5</DBTableDataCell
    ><DBTableDataCell>Comp 6</DBTableDataCell></DBTableRow
  ><DBTableRow
    ><DBTableHeaderCell scope="row"> Comp 7 </DBTableHeaderCell
    ><DBTableDataCell>Comp 8</DBTableDataCell
    ><DBTableDataCell>Comp 9</DBTableDataCell></DBTableRow
  ></DBTableBody
><DBTableFooter
  ><DBTableRow
    ><DBTableHeaderCell scope="row"> Comp Footer 1 </DBTableHeaderCell
    ><DBTableDataCell colSpan="2"> Comp Footer 2 </DBTableDataCell></DBTableRow
  ></DBTableFooter
>`},render:e=>({components:{DBTable:u,DBInfotext:n,DBTableBody:i,DBTableDataCell:l,DBTableFooter:d,DBTableHead:s,DBTableHeaderCell:o,DBTableRow:g},setup(){return{args:e}},template:`<div  :style="{
  minInlineSize: '300px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Composition
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    "captionPlain": "Data",
    "data": defaultTable,
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBTable,
      DBInfotext,
      DBTableBody,
      DBTableDataCell,
      DBTableFooter,
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
    ><DBTableHeaderCell scope="col"> Comp A </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Comp B </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Comp C </DBTableHeaderCell></DBTableRow
  ></DBTableHead
><DBTableBody
  ><DBTableRow
    ><DBTableHeaderCell scope="row"> Comp 1 </DBTableHeaderCell
    ><DBTableDataCell>Comp 2</DBTableDataCell
    ><DBTableDataCell>Comp 3</DBTableDataCell></DBTableRow
  ><DBTableRow
    ><DBTableHeaderCell scope="row"> Comp 4 </DBTableHeaderCell
    ><DBTableDataCell>Comp 5</DBTableDataCell
    ><DBTableDataCell>Comp 6</DBTableDataCell></DBTableRow
  ><DBTableRow
    ><DBTableHeaderCell scope="row"> Comp 7 </DBTableHeaderCell
    ><DBTableDataCell>Comp 8</DBTableDataCell
    ><DBTableDataCell>Comp 9</DBTableDataCell></DBTableRow
  ></DBTableBody
><DBTableFooter
  ><DBTableRow
    ><DBTableHeaderCell scope="row"> Comp Footer 1 </DBTableHeaderCell
    ><DBTableDataCell colSpan="2"> Comp Footer 2 </DBTableDataCell></DBTableRow
  ></DBTableFooter
>\`
  },
  render: (args: any) => ({
    components: {
      DBTable,
      DBInfotext,
      DBTableBody,
      DBTableDataCell,
      DBTableFooter,
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
}`,...S.parameters?.docs?.source}}},C=[`Data`,`Composition`]})))()}w();export{S as Composition,x as Data,C as __namedExportsOrder,b as default};