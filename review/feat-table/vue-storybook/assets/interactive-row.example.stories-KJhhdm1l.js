import{_ as t,a as o,b as n,c as D,d as r,e as i}from"./table-CEXDC38C.js";import{_ as B}from"./tooltip-BmI_4PZZ.js";import{_ as d}from"./infotext-BT7e1jye.js";import{_ as b}from"./button-DnT8oy75.js";import"./iframe-v8bVJKDh.js";import"./preload-helper-MpUUyRtn.js";import"./index-DonnAjIC.js";import"./link-4MLr4KzQ.js";import"./constants-BMPlMwqI.js";import"./document-scroll-listener-C7iMKSof.js";import"./floating-components-1F_x7pmN.js";const{fn:_}=__STORYBOOK_MODULE_TEST__,x={title:"Components/DBTable/Interactive Row",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"}}},a={args:{captionPlain:"Joined",default:`<DBTableHead
  ><DBTableRow
    ><DBTableHeaderCell scope="col"> Comp A </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Comp B </DBTableHeaderCell
    ><DBTableHeaderCell scope="col" :noText="true">
      Action
    </DBTableHeaderCell></DBTableRow
  ></DBTableHead
><DBTableBody
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row"> Comp 1 </DBTableHeaderCell
    ><DBTableDataCell><DBButton>Click</DBButton></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><a
        href="#"
        data-variant="ghost"
        data-table-row-action="true"
        data-no-text="true"
        data-icon="arrow_up_right"
        class="db-button"
      >
        Open Link
        <DBTooltip>Open Link</DBTooltip></a
      ></DBTableDataCell
    ></DBTableRow
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row"> Comp 4 </DBTableHeaderCell
    ><DBTableDataCell><DBButton>Click</DBButton></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><a
        href="#"
        data-variant="ghost"
        data-table-row-action="true"
        data-no-text="true"
        data-icon="arrow_up_right"
        class="db-button"
      >
        Open Link
        <DBTooltip>Open Link</DBTooltip></a
      ></DBTableDataCell
    ></DBTableRow
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row"> Comp 7 </DBTableHeaderCell
    ><DBTableDataCell><DBButton>Click</DBButton></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><a
        href="#"
        data-variant="ghost"
        data-table-row-action="true"
        data-no-text="true"
        data-icon="arrow_up_right"
        class="db-button"
      >
        Open Link
        <DBTooltip>Open Link</DBTooltip></a
      ></DBTableDataCell
    ></DBTableRow
  ></DBTableBody
>`},render:e=>({components:{DBTable:t,DBButton:b,DBInfotext:d,DBTableBody:i,DBTableDataCell:r,DBTableHead:D,DBTableHeaderCell:n,DBTableRow:o,DBTooltip:B},setup(){return{args:e}},template:`<div  :style="{
  minInlineSize: '300px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)',
  padding: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Joined
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})},l={args:{variant:"floating",captionPlain:"Floating",default:`<DBTableHead
  ><DBTableRow
    ><DBTableHeaderCell scope="col"> Comp A </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Comp B </DBTableHeaderCell
    ><DBTableHeaderCell scope="col" :noText="true">
      Action
    </DBTableHeaderCell></DBTableRow
  ></DBTableHead
><DBTableBody
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row"> Comp 1 </DBTableHeaderCell
    ><DBTableDataCell><DBButton>Click</DBButton></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><a
        href="#"
        data-variant="ghost"
        data-table-row-action="true"
        data-no-text="true"
        data-icon="arrow_up_right"
        class="db-button"
      >
        Open Link
        <DBTooltip>Open Link</DBTooltip></a
      ></DBTableDataCell
    ></DBTableRow
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row"> Comp 4 </DBTableHeaderCell
    ><DBTableDataCell><DBButton>Click</DBButton></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><a
        href="#"
        data-variant="ghost"
        data-table-row-action="true"
        data-no-text="true"
        data-icon="arrow_up_right"
        class="db-button"
      >
        Open Link
        <DBTooltip>Open Link</DBTooltip></a
      ></DBTableDataCell
    ></DBTableRow
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row"> Comp 7 </DBTableHeaderCell
    ><DBTableDataCell><DBButton>Click</DBButton></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><a
        href="#"
        data-variant="ghost"
        data-table-row-action="true"
        data-no-text="true"
        data-icon="arrow_up_right"
        class="db-button"
      >
        Open Link
        <DBTooltip>Open Link</DBTooltip></a
      ></DBTableDataCell
    ></DBTableRow
  ></DBTableBody
>`},render:e=>({components:{DBTable:t,DBButton:b,DBInfotext:d,DBTableBody:i,DBTableDataCell:r,DBTableHead:D,DBTableHeaderCell:n,DBTableRow:o,DBTooltip:B},setup(){return{args:e}},template:`<div  :style="{
  minInlineSize: '300px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)',
  padding: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Floating
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "captionPlain": "Joined",
    "default": \`<DBTableHead
  ><DBTableRow
    ><DBTableHeaderCell scope="col"> Comp A </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Comp B </DBTableHeaderCell
    ><DBTableHeaderCell scope="col" :noText="true">
      Action
    </DBTableHeaderCell></DBTableRow
  ></DBTableHead
><DBTableBody
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row"> Comp 1 </DBTableHeaderCell
    ><DBTableDataCell><DBButton>Click</DBButton></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><a
        href="#"
        data-variant="ghost"
        data-table-row-action="true"
        data-no-text="true"
        data-icon="arrow_up_right"
        class="db-button"
      >
        Open Link
        <DBTooltip>Open Link</DBTooltip></a
      ></DBTableDataCell
    ></DBTableRow
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row"> Comp 4 </DBTableHeaderCell
    ><DBTableDataCell><DBButton>Click</DBButton></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><a
        href="#"
        data-variant="ghost"
        data-table-row-action="true"
        data-no-text="true"
        data-icon="arrow_up_right"
        class="db-button"
      >
        Open Link
        <DBTooltip>Open Link</DBTooltip></a
      ></DBTableDataCell
    ></DBTableRow
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row"> Comp 7 </DBTableHeaderCell
    ><DBTableDataCell><DBButton>Click</DBButton></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><a
        href="#"
        data-variant="ghost"
        data-table-row-action="true"
        data-no-text="true"
        data-icon="arrow_up_right"
        class="db-button"
      >
        Open Link
        <DBTooltip>Open Link</DBTooltip></a
      ></DBTableDataCell
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
      DBTableRow,
      DBTooltip
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
  gap: 'var(--db-spacing-fixed-md)',
  padding: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Joined
                </DBInfotext><DBTable v-bind="args"   >\${args.default}</DBTable></div>\`
  })
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "floating",
    "captionPlain": "Floating",
    "default": \`<DBTableHead
  ><DBTableRow
    ><DBTableHeaderCell scope="col"> Comp A </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Comp B </DBTableHeaderCell
    ><DBTableHeaderCell scope="col" :noText="true">
      Action
    </DBTableHeaderCell></DBTableRow
  ></DBTableHead
><DBTableBody
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row"> Comp 1 </DBTableHeaderCell
    ><DBTableDataCell><DBButton>Click</DBButton></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><a
        href="#"
        data-variant="ghost"
        data-table-row-action="true"
        data-no-text="true"
        data-icon="arrow_up_right"
        class="db-button"
      >
        Open Link
        <DBTooltip>Open Link</DBTooltip></a
      ></DBTableDataCell
    ></DBTableRow
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row"> Comp 4 </DBTableHeaderCell
    ><DBTableDataCell><DBButton>Click</DBButton></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><a
        href="#"
        data-variant="ghost"
        data-table-row-action="true"
        data-no-text="true"
        data-icon="arrow_up_right"
        class="db-button"
      >
        Open Link
        <DBTooltip>Open Link</DBTooltip></a
      ></DBTableDataCell
    ></DBTableRow
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row"> Comp 7 </DBTableHeaderCell
    ><DBTableDataCell><DBButton>Click</DBButton></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><a
        href="#"
        data-variant="ghost"
        data-table-row-action="true"
        data-no-text="true"
        data-icon="arrow_up_right"
        class="db-button"
      >
        Open Link
        <DBTooltip>Open Link</DBTooltip></a
      ></DBTableDataCell
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
      DBTableRow,
      DBTooltip
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
  gap: 'var(--db-spacing-fixed-md)',
  padding: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Floating
                </DBInfotext><DBTable v-bind="args"   >\${args.default}</DBTable></div>\`
  })
}`,...l.parameters?.docs?.source}}};const h=["Joined","Floating"];export{l as Floating,a as Joined,h as __namedExportsOrder,x as default};
