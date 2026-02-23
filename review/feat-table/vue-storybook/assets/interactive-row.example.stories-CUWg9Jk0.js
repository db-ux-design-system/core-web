import{_ as t,a as o,b as n,c as i,d as r,e as D}from"./table-GK9R_hv_.js";import{_ as B}from"./tooltip-D-BX_ibA.js";import{_ as b}from"./infotext-BSvs3NFh.js";import{_ as d}from"./button-BA4Utk2q.js";import"./iframe-DQPjiEIV.js";import"./preload-helper-MpUUyRtn.js";import"./index-BC8bwyzE.js";import"./link-CR36edzT.js";import"./constants-BMPlMwqI.js";import"./document-scroll-listener-D6LIrTxs.js";import"./floating-components-1F_x7pmN.js";const{fn:x}=__STORYBOOK_MODULE_TEST__,_={title:"Components/DBTable/Interactive Row",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"},caption:{control:"text"},captionPlain:{control:"text"},data:{control:"object"},divider:{control:"select",options:["none","both","horizontal","vertical"]},showCaption:{control:"boolean"},size:{control:"select",options:["x-small","small","medium","large"]},variant:{control:"select",options:["joined","zebra","floating"]},mobileVariant:{control:"select",options:["table","list"]},stickyHeader:{control:"select",options:["none","both","horizontal","vertical"]},columnSizes:{control:"object"}}},a={args:{captionPlain:"Joined",default:`<DBTableHead
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
>`},render:e=>({components:{DBTable:t,DBButton:d,DBInfotext:b,DBTableBody:D,DBTableDataCell:r,DBTableHead:i,DBTableHeaderCell:n,DBTableRow:o,DBTooltip:B},setup(){return{args:e}},template:`<div  :style="{
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
>`},render:e=>({components:{DBTable:t,DBButton:d,DBInfotext:b,DBTableBody:D,DBTableDataCell:r,DBTableHead:i,DBTableHeaderCell:n,DBTableRow:o,DBTooltip:B},setup(){return{args:e}},template:`<div  :style="{
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
}`,...l.parameters?.docs?.source}}};const h=["Joined","Floating"];export{l as Floating,a as Joined,h as __namedExportsOrder,_ as default};
