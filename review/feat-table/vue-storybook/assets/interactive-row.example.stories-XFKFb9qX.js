import{i as e}from"./preload-helper-DHhlaKa2.js";import{_ as t,at as n,ft as r,gt as i,h as a,l as o,p as s,s as c,t as l,y as u}from"./src-B0giZF3V.js";var d,f,p,m,h;e((()=>{l(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/DBTable/Interactive Row`,component:c,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},caption:{control:`text`},captionPlain:{control:`text`},data:{control:`object`},divider:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},showCaption:{control:`boolean`},size:{control:`select`,options:[`x-small`,`small`,`medium`,`large`]},variant:{control:`select`,options:[`flat`,`zebra`,`spaced`]},mobileVariant:{control:`select`,options:[`table`,`list`]},stickyHeader:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},columnSizes:{control:`object`}}},p={args:{captionPlain:`Flat`,default:`<DBTableHead
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
>`},render:e=>({components:{DBTable:c,DBButton:i,DBInfotext:r,DBTableBody:s,DBTableDataCell:u,DBTableHead:o,DBTableHeaderCell:t,DBTableRow:a,DBTooltip:n},setup(){return{args:e}},template:`<div  :style="{
  minInlineSize: '300px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)',
  padding: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Flat
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})},m={args:{variant:`spaced`,captionPlain:`Spaced`,default:`<DBTableHead
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
>`},render:e=>({components:{DBTable:c,DBButton:i,DBInfotext:r,DBTableBody:s,DBTableDataCell:u,DBTableHead:o,DBTableHeaderCell:t,DBTableRow:a,DBTooltip:n},setup(){return{args:e}},template:`<div  :style="{
  minInlineSize: '300px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)',
  padding: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Spaced
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h=[`Flat`,`Spaced`]}))();export{p as Flat,m as Spaced,h as __namedExportsOrder,f as default};