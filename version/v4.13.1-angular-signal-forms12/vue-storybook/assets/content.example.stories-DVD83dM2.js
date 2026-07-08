import{i as e}from"./preload-helper-CCepjIU4.js";import{_ as t,d as n,ft as r,h as i,l as a,p as o,s,t as c,y as l}from"./src-D4u4tH4Y.js";import{a as u,t as d}from"./data-CfHHLO1h.js";var f,p,m,h,g;e((()=>{c(),u(),{fn:f}=__STORYBOOK_MODULE_TEST__,p={title:`Components/DBTable/Content`,component:s,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},caption:{control:`text`},captionPlain:{control:`text`},data:{control:`object`},divider:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},showCaption:{control:`boolean`},size:{control:`select`,options:[`x-small`,`small`,`medium`,`large`]},variant:{control:`select`,options:[`flat`,`zebra`,`spaced`]},mobileVariant:{control:`select`,options:[`table`,`list`]},stickyHeader:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},columnSizes:{control:`object`}}},m={args:{captionPlain:`Data`,data:d,default:``},render:e=>({components:{DBTable:s,DBInfotext:r,DBTableBody:o,DBTableDataCell:l,DBTableFooter:n,DBTableHead:a,DBTableHeaderCell:t,DBTableRow:i},setup(){return{args:e}},template:`<div  :style="{
  minInlineSize: '300px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Data
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})},h={args:{captionPlain:`Composition`,default:`<DBTableHead
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
>`},render:e=>({components:{DBTable:s,DBInfotext:r,DBTableBody:o,DBTableDataCell:l,DBTableFooter:n,DBTableHead:a,DBTableHeaderCell:t,DBTableRow:i},setup(){return{args:e}},template:`<div  :style="{
  minInlineSize: '300px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Composition
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g=[`Data`,`Composition`]}))();export{h as Composition,m as Data,g as __namedExportsOrder,p as default};