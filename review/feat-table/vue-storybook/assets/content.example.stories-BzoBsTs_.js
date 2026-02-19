import{d as s}from"./data-1Z1tDx00.js";import{_ as o,a as D,b as t,c as B,f as r,d as b,e as n}from"./table-CE9_Q-_X.js";import{_ as T}from"./infotext-XdHZNR5b.js";import"./iframe-D-Nl1ryX.js";import"./preload-helper-MpUUyRtn.js";import"./index-CdkR87ek.js";import"./link-H9yPzYEJ.js";const{fn:H}=__STORYBOOK_MODULE_TEST__,w={title:"Components/DBTable/Content",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"}}},a={args:{captionPlain:"Data",data:s,default:""},render:e=>({components:{DBTable:o,DBInfotext:T,DBTableBody:n,DBTableDataCell:b,DBTableFooter:r,DBTableHead:B,DBTableHeaderCell:t,DBTableRow:D},setup(){return{args:e}},template:`<div  :style="{
  minInlineSize: '300px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Data
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})},l={args:{captionPlain:"Composition",default:`<DBTableHead
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
>`},render:e=>({components:{DBTable:o,DBInfotext:T,DBTableBody:n,DBTableDataCell:b,DBTableFooter:r,DBTableHead:B,DBTableHeaderCell:t,DBTableRow:D},setup(){return{args:e}},template:`<div  :style="{
  minInlineSize: '300px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Composition
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const u=["Data","Composition"];export{l as Composition,a as Data,u as __namedExportsOrder,w as default};
