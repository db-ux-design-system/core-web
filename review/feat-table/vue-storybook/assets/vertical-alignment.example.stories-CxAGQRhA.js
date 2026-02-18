import{_ as n,a as r,b as B,c as D,d as i,e as o}from"./table-DpNikhAH.js";import{_ as d}from"./infotext-DDO9C6Yt.js";import{_ as b}from"./button-DUcrLAYK.js";import"./iframe-BjIVkaYK.js";import"./preload-helper-MpUUyRtn.js";import"./index-DAOIw2cL.js";import"./link-BKH3jo-A.js";const{fn:H}=__STORYBOOK_MODULE_TEST__,g={title:"Components/DBTable/Vertical Alignment",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"}}},a={args:{captionPlain:"Start",divider:"both",default:`<DBTableHead
  ><DBTableRow
    ><DBTableHeaderCell verticalAlignment="start"> Header A </DBTableHeaderCell
    ><DBTableHeaderCell verticalAlignment="start">
      Header B
    </DBTableHeaderCell></DBTableRow
  ></DBTableHead
><DBTableBody
  ><DBTableRow
    ><DBTableHeaderCell verticalAlignment="start"> Comp 1 </DBTableHeaderCell
    ><DBTableDataCell verticalAlignment="start"
      ><DBButton>Click</DBButton></DBTableDataCell
    ></DBTableRow
  ></DBTableBody
>`},render:e=>({components:{DBTable:n,DBButton:b,DBInfotext:d,DBTableBody:o,DBTableDataCell:i,DBTableHead:D,DBTableHeaderCell:B,DBTableRow:r},setup(){return{args:e}},template:`<div  :style="{
  minInlineSize: '300px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Start
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})},l={args:{captionPlain:"(Default) Center",divider:"both",default:`<DBTableHead
  ><DBTableRow
    ><DBTableHeaderCell verticalAlignment="center"> Header A </DBTableHeaderCell
    ><DBTableHeaderCell verticalAlignment="center">
      Header B
    </DBTableHeaderCell></DBTableRow
  ></DBTableHead
><DBTableBody
  ><DBTableRow
    ><DBTableHeaderCell verticalAlignment="center"> Comp 1 </DBTableHeaderCell
    ><DBTableDataCell verticalAlignment="center"
      ><DBButton>Click</DBButton></DBTableDataCell
    ></DBTableRow
  ></DBTableBody
>`},render:e=>({components:{DBTable:n,DBButton:b,DBInfotext:d,DBTableBody:o,DBTableDataCell:i,DBTableHead:D,DBTableHeaderCell:B,DBTableRow:r},setup(){return{args:e}},template:`<div  :style="{
  minInlineSize: '300px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    (Default) Center
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})},t={args:{captionPlain:"End",divider:"both",default:`<DBTableHead
  ><DBTableRow
    ><DBTableHeaderCell verticalAlignment="end"> Header A </DBTableHeaderCell
    ><DBTableHeaderCell verticalAlignment="end">
      Header B
    </DBTableHeaderCell></DBTableRow
  ></DBTableHead
><DBTableBody
  ><DBTableRow
    ><DBTableHeaderCell verticalAlignment="end"> Comp 1 </DBTableHeaderCell
    ><DBTableDataCell verticalAlignment="end"
      ><DBButton>Click</DBButton></DBTableDataCell
    ></DBTableRow
  ></DBTableBody
>`},render:e=>({components:{DBTable:n,DBButton:b,DBInfotext:d,DBTableBody:o,DBTableDataCell:i,DBTableHead:D,DBTableHeaderCell:B,DBTableRow:r},setup(){return{args:e}},template:`<div  :style="{
  minInlineSize: '300px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    End
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "captionPlain": "Start",
    "divider": "both",
    "default": \`<DBTableHead
  ><DBTableRow
    ><DBTableHeaderCell verticalAlignment="start"> Header A </DBTableHeaderCell
    ><DBTableHeaderCell verticalAlignment="start">
      Header B
    </DBTableHeaderCell></DBTableRow
  ></DBTableHead
><DBTableBody
  ><DBTableRow
    ><DBTableHeaderCell verticalAlignment="start"> Comp 1 </DBTableHeaderCell
    ><DBTableDataCell verticalAlignment="start"
      ><DBButton>Click</DBButton></DBTableDataCell
    ></DBTableRow
  ></DBTableBody
>\`
  },
  render: (args: any) => ({
    components: {
      DBTable,
      DBButton,
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
                    Start
                </DBInfotext><DBTable v-bind="args"   >\${args.default}</DBTable></div>\`
  })
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "captionPlain": "(Default) Center",
    "divider": "both",
    "default": \`<DBTableHead
  ><DBTableRow
    ><DBTableHeaderCell verticalAlignment="center"> Header A </DBTableHeaderCell
    ><DBTableHeaderCell verticalAlignment="center">
      Header B
    </DBTableHeaderCell></DBTableRow
  ></DBTableHead
><DBTableBody
  ><DBTableRow
    ><DBTableHeaderCell verticalAlignment="center"> Comp 1 </DBTableHeaderCell
    ><DBTableDataCell verticalAlignment="center"
      ><DBButton>Click</DBButton></DBTableDataCell
    ></DBTableRow
  ></DBTableBody
>\`
  },
  render: (args: any) => ({
    components: {
      DBTable,
      DBButton,
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
                    (Default) Center
                </DBInfotext><DBTable v-bind="args"   >\${args.default}</DBTable></div>\`
  })
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "captionPlain": "End",
    "divider": "both",
    "default": \`<DBTableHead
  ><DBTableRow
    ><DBTableHeaderCell verticalAlignment="end"> Header A </DBTableHeaderCell
    ><DBTableHeaderCell verticalAlignment="end">
      Header B
    </DBTableHeaderCell></DBTableRow
  ></DBTableHead
><DBTableBody
  ><DBTableRow
    ><DBTableHeaderCell verticalAlignment="end"> Comp 1 </DBTableHeaderCell
    ><DBTableDataCell verticalAlignment="end"
      ><DBButton>Click</DBButton></DBTableDataCell
    ></DBTableRow
  ></DBTableBody
>\`
  },
  render: (args: any) => ({
    components: {
      DBTable,
      DBButton,
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
                    End
                </DBInfotext><DBTable v-bind="args"   >\${args.default}</DBTable></div>\`
  })
}`,...t.parameters?.docs?.source}}};const u=["Start","DefaultCenter","End"];export{l as DefaultCenter,t as End,a as Start,u as __namedExportsOrder,g as default};
