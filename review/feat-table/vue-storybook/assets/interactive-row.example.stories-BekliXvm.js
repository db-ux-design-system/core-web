import{_ as t,a as o,b as n,c as D,d as i,e as B}from"./table-DpNikhAH.js";import{_ as r}from"./tooltip-jOmhokW0.js";import{_ as d}from"./infotext-DDO9C6Yt.js";import{_ as b}from"./button-DUcrLAYK.js";import"./iframe-BjIVkaYK.js";import"./preload-helper-MpUUyRtn.js";import"./index-DAOIw2cL.js";import"./link-BKH3jo-A.js";import"./constants-BMPlMwqI.js";import"./document-scroll-listener-C2UiGClN.js";import"./floating-components-1F_x7pmN.js";const{fn:_}=__STORYBOOK_MODULE_TEST__,x={title:"Components/DBTable/Interactive Row",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"}}},e={args:{captionPlain:"Joined",default:`<DBTableHead
  ><DBTableRow
    ><DBTableHeaderCell>Comp A</DBTableHeaderCell
    ><DBTableHeaderCell>Comp B</DBTableHeaderCell
    ><DBTableHeaderCell :noText="true">Action</DBTableHeaderCell></DBTableRow
  ></DBTableHead
><DBTableBody
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell>Comp 1</DBTableHeaderCell
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
    ><DBTableHeaderCell>Comp 4</DBTableHeaderCell
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
    ><DBTableHeaderCell>Comp 7</DBTableHeaderCell
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
>`},render:a=>({components:{DBTable:t,DBButton:b,DBInfotext:d,DBTableBody:B,DBTableDataCell:i,DBTableHead:D,DBTableHeaderCell:n,DBTableRow:o,DBTooltip:r},setup(){return{args:a}},template:`<div  :style="{
  minInlineSize: '300px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)',
  padding: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Joined
                </DBInfotext><DBTable v-bind="args"   >${a.default}</DBTable></div>`})},l={args:{variant:"floating",captionPlain:"Floating",default:`<DBTableHead
  ><DBTableRow
    ><DBTableHeaderCell>Comp A</DBTableHeaderCell
    ><DBTableHeaderCell>Comp B</DBTableHeaderCell
    ><DBTableHeaderCell :noText="true">Action</DBTableHeaderCell></DBTableRow
  ></DBTableHead
><DBTableBody
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell>Comp 1</DBTableHeaderCell
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
    ><DBTableHeaderCell>Comp 4</DBTableHeaderCell
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
    ><DBTableHeaderCell>Comp 7</DBTableHeaderCell
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
>`},render:a=>({components:{DBTable:t,DBButton:b,DBInfotext:d,DBTableBody:B,DBTableDataCell:i,DBTableHead:D,DBTableHeaderCell:n,DBTableRow:o,DBTooltip:r},setup(){return{args:a}},template:`<div  :style="{
  minInlineSize: '300px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)',
  padding: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Floating
                </DBInfotext><DBTable v-bind="args"   >${a.default}</DBTable></div>`})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "captionPlain": "Joined",
    "default": \`<DBTableHead
  ><DBTableRow
    ><DBTableHeaderCell>Comp A</DBTableHeaderCell
    ><DBTableHeaderCell>Comp B</DBTableHeaderCell
    ><DBTableHeaderCell :noText="true">Action</DBTableHeaderCell></DBTableRow
  ></DBTableHead
><DBTableBody
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell>Comp 1</DBTableHeaderCell
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
    ><DBTableHeaderCell>Comp 4</DBTableHeaderCell
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
    ><DBTableHeaderCell>Comp 7</DBTableHeaderCell
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
}`,...e.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "floating",
    "captionPlain": "Floating",
    "default": \`<DBTableHead
  ><DBTableRow
    ><DBTableHeaderCell>Comp A</DBTableHeaderCell
    ><DBTableHeaderCell>Comp B</DBTableHeaderCell
    ><DBTableHeaderCell :noText="true">Action</DBTableHeaderCell></DBTableRow
  ></DBTableHead
><DBTableBody
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell>Comp 1</DBTableHeaderCell
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
    ><DBTableHeaderCell>Comp 4</DBTableHeaderCell
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
    ><DBTableHeaderCell>Comp 7</DBTableHeaderCell
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
}`,...l.parameters?.docs?.source}}};const h=["Joined","Floating"];export{l as Floating,e as Joined,h as __namedExportsOrder,x as default};
