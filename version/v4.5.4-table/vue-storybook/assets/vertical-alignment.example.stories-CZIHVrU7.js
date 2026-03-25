import{_ as o,a as r,b as i,c as B,d as D,e as n}from"./table-GLC2voEl.js";import{_ as d}from"./infotext-ChOUO4Z5.js";import{_ as c}from"./button-eZpQGvA1.js";import"./iframe-DfvinHPj.js";import"./preload-helper-eESElaRw.js";import"./index-COCtms_G.js";import"./link-BfaEHrBZ.js";const{fn:H}=__STORYBOOK_MODULE_TEST__,g={title:"Components/DBTable/Vertical Alignment",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"},caption:{control:"text"},captionPlain:{control:"text"},data:{control:"object"},divider:{control:"select",options:["none","both","horizontal","vertical"]},showCaption:{control:"boolean"},size:{control:"select",options:["x-small","small","medium","large"]},variant:{control:"select",options:["joined","zebra","floating"]},mobileVariant:{control:"select",options:["table","list"]},stickyHeader:{control:"select",options:["none","both","horizontal","vertical"]},columnSizes:{control:"object"}}},a={args:{captionPlain:"Start",divider:"both",default:`<DBTableHead
  ><DBTableRow
    ><DBTableHeaderCell scope="col" verticalAlignment="start">
      Header A </DBTableHeaderCell
    ><DBTableHeaderCell scope="col" verticalAlignment="start">
      Header B
    </DBTableHeaderCell></DBTableRow
  ></DBTableHead
><DBTableBody
  ><DBTableRow
    ><DBTableHeaderCell scope="row" verticalAlignment="start">
      Comp 1 </DBTableHeaderCell
    ><DBTableDataCell verticalAlignment="start"
      ><DBButton>Click</DBButton></DBTableDataCell
    ></DBTableRow
  ></DBTableBody
>`},render:e=>({components:{DBTable:n,DBButton:c,DBInfotext:d,DBTableBody:D,DBTableDataCell:B,DBTableHead:i,DBTableHeaderCell:r,DBTableRow:o},setup(){return{args:e}},template:`<div  :style="{
  minInlineSize: '300px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Start
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})},l={args:{captionPlain:"(Default) Center",divider:"both",default:`<DBTableHead
  ><DBTableRow
    ><DBTableHeaderCell scope="col" verticalAlignment="center">
      Header A </DBTableHeaderCell
    ><DBTableHeaderCell scope="col" verticalAlignment="center">
      Header B
    </DBTableHeaderCell></DBTableRow
  ></DBTableHead
><DBTableBody
  ><DBTableRow
    ><DBTableHeaderCell scope="row" verticalAlignment="center">
      Comp 1 </DBTableHeaderCell
    ><DBTableDataCell verticalAlignment="center"
      ><DBButton>Click</DBButton></DBTableDataCell
    ></DBTableRow
  ></DBTableBody
>`},render:e=>({components:{DBTable:n,DBButton:c,DBInfotext:d,DBTableBody:D,DBTableDataCell:B,DBTableHead:i,DBTableHeaderCell:r,DBTableRow:o},setup(){return{args:e}},template:`<div  :style="{
  minInlineSize: '300px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    (Default) Center
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})},t={args:{captionPlain:"End",divider:"both",default:`<DBTableHead
  ><DBTableRow
    ><DBTableHeaderCell scope="col" verticalAlignment="end">
      Header A </DBTableHeaderCell
    ><DBTableHeaderCell scope="col" verticalAlignment="end">
      Header B
    </DBTableHeaderCell></DBTableRow
  ></DBTableHead
><DBTableBody
  ><DBTableRow
    ><DBTableHeaderCell scope="row" verticalAlignment="end">
      Comp 1 </DBTableHeaderCell
    ><DBTableDataCell verticalAlignment="end"
      ><DBButton>Click</DBButton></DBTableDataCell
    ></DBTableRow
  ></DBTableBody
>`},render:e=>({components:{DBTable:n,DBButton:c,DBInfotext:d,DBTableBody:D,DBTableDataCell:B,DBTableHead:i,DBTableHeaderCell:r,DBTableRow:o},setup(){return{args:e}},template:`<div  :style="{
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
    ><DBTableHeaderCell scope="col" verticalAlignment="start">
      Header A </DBTableHeaderCell
    ><DBTableHeaderCell scope="col" verticalAlignment="start">
      Header B
    </DBTableHeaderCell></DBTableRow
  ></DBTableHead
><DBTableBody
  ><DBTableRow
    ><DBTableHeaderCell scope="row" verticalAlignment="start">
      Comp 1 </DBTableHeaderCell
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
    ><DBTableHeaderCell scope="col" verticalAlignment="center">
      Header A </DBTableHeaderCell
    ><DBTableHeaderCell scope="col" verticalAlignment="center">
      Header B
    </DBTableHeaderCell></DBTableRow
  ></DBTableHead
><DBTableBody
  ><DBTableRow
    ><DBTableHeaderCell scope="row" verticalAlignment="center">
      Comp 1 </DBTableHeaderCell
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
    ><DBTableHeaderCell scope="col" verticalAlignment="end">
      Header A </DBTableHeaderCell
    ><DBTableHeaderCell scope="col" verticalAlignment="end">
      Header B
    </DBTableHeaderCell></DBTableRow
  ></DBTableHead
><DBTableBody
  ><DBTableRow
    ><DBTableHeaderCell scope="row" verticalAlignment="end">
      Comp 1 </DBTableHeaderCell
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
