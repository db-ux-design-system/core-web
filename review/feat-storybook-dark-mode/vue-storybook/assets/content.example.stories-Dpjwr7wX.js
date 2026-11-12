import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./infotext-Bnu8vXVA.js";import{a as i,c as a,d as o,f as s,i as c,l,m as u,n as d,o as f,p,r as m,s as h,t as g,u as _}from"./table-CneNfje1.js";import{r as v,s as y}from"./data-IsZHFUvi.js";var b=t({Composition:()=>w,Data:()=>C,__namedExportsOrder:()=>T,default:()=>S}),x,S,C,w,T;function E(){return(E=e((()=>{n(),h(),p(),i(),m(),o(),l(),g(),y(),{fn:x}=__STORYBOOK_MODULE_TEST__,S={title:`Components/DBTable/Content`,component:d,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},caption:{control:`text`},captionPlain:{control:`text`},data:{control:`object`},divider:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},showCaption:{control:`boolean`},size:{control:`select`,options:[`x-small`,`small`,`medium`,`large`]},variant:{control:`select`,options:[`flat`,`zebra`,`spaced`]},mobileVariant:{control:`select`,options:[`table`,`list`]},stickyHeader:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},columnSizes:{control:`object`}}},C={args:{captionPlain:`Data`,data:v,default:``},render:e=>({components:{DBTable:d,DBInfotext:r,DBTableBody:a,DBTableDataCell:u,DBTableFooter:f,DBTableHead:c,DBTableHeaderCell:s,DBTableRow:_},setup(){return{args:e}},template:`<div  :style="{
  minInlineSize: '300px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Data
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})},w={args:{captionPlain:`Composition`,default:`<DBTableHead
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
>`},render:e=>({components:{DBTable:d,DBInfotext:r,DBTableBody:a,DBTableDataCell:u,DBTableFooter:f,DBTableHead:c,DBTableHeaderCell:s,DBTableRow:_},setup(){return{args:e}},template:`<div  :style="{
  minInlineSize: '300px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Composition
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})},T=[`Data`,`Composition`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}}})))()}export{E as i,C as n,b as r,w as t};