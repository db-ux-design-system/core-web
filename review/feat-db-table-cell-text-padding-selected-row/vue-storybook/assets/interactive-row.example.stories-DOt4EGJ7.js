import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./tooltip-BzPtnqZ5.js";import{n as i,t as a}from"./button-Bf3TtO4i.js";import{n as o,t as s}from"./infotext-g9DS24n8.js";import{c,d as l,f as u,i as d,l as f,m as p,n as m,p as h,r as g,s as _,t as v,u as y}from"./table-Cfq4rl4l.js";var b=t({Flat:()=>C,Spaced:()=>w,__namedExportsOrder:()=>T,default:()=>S}),x,S,C,w,T;function E(){return(E=e((()=>{i(),o(),_(),h(),g(),l(),f(),r(),v(),{fn:x}=__STORYBOOK_MODULE_TEST__,S={title:`Components/DBTable/Interactive Row`,component:m,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},caption:{control:`text`},captionPlain:{control:`text`},data:{control:`object`},divider:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},showCaption:{control:`boolean`},size:{control:`select`,options:[`x-small`,`small`,`medium`,`large`]},variant:{control:`select`,options:[`flat`,`zebra`,`spaced`]},mobileVariant:{control:`select`,options:[`table`,`list`]},stickyHeader:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},columnSizes:{control:`object`}}},C={args:{captionPlain:`Flat`,default:`<DBTableHead
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
        data-table-row-trigger="true"
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
        data-table-row-trigger="true"
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
        data-table-row-trigger="true"
        data-no-text="true"
        data-icon="arrow_up_right"
        class="db-button"
      >
        Open Link
        <DBTooltip>Open Link</DBTooltip></a
      ></DBTableDataCell
    ></DBTableRow
  ></DBTableBody
>`},render:e=>({components:{DBTable:m,DBButton:a,DBInfotext:s,DBTableBody:c,DBTableDataCell:p,DBTableHead:d,DBTableHeaderCell:u,DBTableRow:y,DBTooltip:n},setup(){return{args:e}},template:`<div  :style="{
  minInlineSize: '300px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)',
  padding: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Flat
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})},w={args:{variant:`spaced`,captionPlain:`Spaced`,default:`<DBTableHead
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
        data-table-row-trigger="true"
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
        data-table-row-trigger="true"
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
        data-table-row-trigger="true"
        data-no-text="true"
        data-icon="arrow_up_right"
        class="db-button"
      >
        Open Link
        <DBTooltip>Open Link</DBTooltip></a
      ></DBTableDataCell
    ></DBTableRow
  ></DBTableBody
>`},render:e=>({components:{DBTable:m,DBButton:a,DBInfotext:s,DBTableBody:c,DBTableDataCell:p,DBTableHead:d,DBTableHeaderCell:u,DBTableRow:y,DBTooltip:n},setup(){return{args:e}},template:`<div  :style="{
  minInlineSize: '300px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)',
  padding: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Spaced
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})},T=[`Flat`,`Spaced`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    "captionPlain": "Flat",
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
        data-table-row-trigger="true"
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
        data-table-row-trigger="true"
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
        data-table-row-trigger="true"
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
                    Flat
                </DBInfotext><DBTable v-bind="args"   >\${args.default}</DBTable></div>\`
  })
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "spaced",
    "captionPlain": "Spaced",
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
        data-table-row-trigger="true"
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
        data-table-row-trigger="true"
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
        data-table-row-trigger="true"
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
                    Spaced
                </DBInfotext><DBTable v-bind="args"   >\${args.default}</DBTable></div>\`
  })
}`,...w.parameters?.docs?.source}}}})))()}export{b as i,w as n,E as r,C as t};