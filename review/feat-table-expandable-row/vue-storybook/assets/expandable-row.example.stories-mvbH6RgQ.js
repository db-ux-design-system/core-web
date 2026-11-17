import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./infotext-BzxcYood.js";import{c as i,d as a,f as o,i as s,l as c,m as l,n as u,p as d,r as f,s as p,t as m,u as h}from"./table-B85Qu-JL.js";import{n as g,t as _}from"./tag-BRx3nSmw.js";var v=t({Flat:()=>x,MobileVariantList:()=>w,Spaced:()=>C,Zebra:()=>S,__namedExportsOrder:()=>T,default:()=>b}),y,b,x,S,C,w,T;function E(){return(E=e((()=>{n(),p(),d(),f(),a(),c(),_(),m(),{fn:y}=__STORYBOOK_MODULE_TEST__,b={title:`Components/DBTable/Expandable Row`,component:u,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},caption:{control:`text`},captionPlain:{control:`text`},data:{control:`object`},divider:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},showCaption:{control:`boolean`},size:{control:`select`,options:[`x-small`,`small`,`medium`,`large`]},variant:{control:`select`,options:[`flat`,`zebra`,`spaced`]},mobileVariant:{control:`select`,options:[`table`,`list`]},stickyHeader:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},columnSizes:{control:`object`}}},x={args:{variant:`flat`,captionPlain:`Flat`,columnSizes:{0:`min-content`},default:`<DBTableHead
  ><DBTableRow
    ><DBTableHeaderCell scope="col" :noText="true"> Details </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Number </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Status </DBTableHeaderCell></DBTableRow
  ></DBTableHead
><DBTableBody
  ><DBTableRow :interactive="true"
    ><DBTableDataCell
      ><details
        ><summary
          data-icon="chevron_down"
          data-table-row-trigger="true"
          class="db-icon"
        >
          Show details </summary
        ><div
          :style="{
  display: 'flex',
  flexWrap: 'wrap',
  gap: 'var(--db-spacing-fixed-md)'
}"
          ><div><small>Region</small><p>North</p></div
          ><div><small>Last change</small><p>14.03.26</p></div
          ><div><small>Quantity</small><p>432</p></div
          ><div><small>Editor</small><p>Max Mustermann</p></div></div
        ></details
      ></DBTableDataCell
    ><DBTableDataCell>34621 234</DBTableDataCell
    ><DBTableDataCell><DBTag>Status Tag</DBTag></DBTableDataCell></DBTableRow
  ><DBTableRow :interactive="true"
    ><DBTableDataCell
      ><details
        ><summary
          data-icon="chevron_down"
          data-table-row-trigger="true"
          class="db-icon"
        >
          Show details </summary
        ><div
          :style="{
  display: 'flex',
  flexWrap: 'wrap',
  gap: 'var(--db-spacing-fixed-md)'
}"
          ><div><small>Region</small><p>South</p></div
          ><div><small>Last change</small><p>15.03.26</p></div
          ><div><small>Quantity</small><p>12</p></div
          ><div><small>Editor</small><p>Erika Musterfrau</p></div></div
        ></details
      ></DBTableDataCell
    ><DBTableDataCell>34621 235</DBTableDataCell
    ><DBTableDataCell><DBTag>Status Tag</DBTag></DBTableDataCell></DBTableRow
  ></DBTableBody
>`},render:e=>({components:{DBTable:u,DBInfotext:r,DBTableBody:i,DBTableDataCell:l,DBTableHead:s,DBTableHeaderCell:o,DBTableRow:h,DBTag:g},setup(){return{args:e}},template:`<div  :style="{
  minInlineSize: '300px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)',
  padding: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Flat
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})},S={args:{variant:`zebra`,captionPlain:`Zebra`,columnSizes:{0:`min-content`},default:`<DBTableHead
  ><DBTableRow
    ><DBTableHeaderCell scope="col" :noText="true"> Details </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Number </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Status </DBTableHeaderCell></DBTableRow
  ></DBTableHead
><DBTableBody
  ><DBTableRow :interactive="true"
    ><DBTableDataCell
      ><details
        ><summary
          data-icon="chevron_down"
          data-table-row-trigger="true"
          class="db-icon"
        >
          Show details </summary
        ><div
          :style="{
  display: 'flex',
  flexWrap: 'wrap',
  gap: 'var(--db-spacing-fixed-md)'
}"
          ><div><small>Region</small><p>North</p></div
          ><div><small>Last change</small><p>14.03.26</p></div
          ><div><small>Quantity</small><p>432</p></div
          ><div><small>Editor</small><p>Max Mustermann</p></div></div
        ></details
      ></DBTableDataCell
    ><DBTableDataCell>34621 234</DBTableDataCell
    ><DBTableDataCell><DBTag>Status Tag</DBTag></DBTableDataCell></DBTableRow
  ><DBTableRow :interactive="true"
    ><DBTableDataCell
      ><details
        ><summary
          data-icon="chevron_down"
          data-table-row-trigger="true"
          class="db-icon"
        >
          Show details </summary
        ><div
          :style="{
  display: 'flex',
  flexWrap: 'wrap',
  gap: 'var(--db-spacing-fixed-md)'
}"
          ><div><small>Region</small><p>South</p></div
          ><div><small>Last change</small><p>15.03.26</p></div
          ><div><small>Quantity</small><p>12</p></div
          ><div><small>Editor</small><p>Erika Musterfrau</p></div></div
        ></details
      ></DBTableDataCell
    ><DBTableDataCell>34621 235</DBTableDataCell
    ><DBTableDataCell><DBTag>Status Tag</DBTag></DBTableDataCell></DBTableRow
  ></DBTableBody
>`},render:e=>({components:{DBTable:u,DBInfotext:r,DBTableBody:i,DBTableDataCell:l,DBTableHead:s,DBTableHeaderCell:o,DBTableRow:h,DBTag:g},setup(){return{args:e}},template:`<div  :style="{
  minInlineSize: '300px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)',
  padding: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Zebra
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})},C={args:{variant:`spaced`,captionPlain:`Spaced`,columnSizes:{0:`min-content`},default:`<DBTableHead
  ><DBTableRow
    ><DBTableHeaderCell scope="col" :noText="true"> Details </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Number </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Status </DBTableHeaderCell></DBTableRow
  ></DBTableHead
><DBTableBody
  ><DBTableRow :interactive="true"
    ><DBTableDataCell
      ><details
        ><summary
          data-icon="chevron_down"
          data-table-row-trigger="true"
          class="db-icon"
        >
          Show details </summary
        ><div
          :style="{
  display: 'flex',
  flexWrap: 'wrap',
  gap: 'var(--db-spacing-fixed-md)'
}"
          ><div><small>Region</small><p>North</p></div
          ><div><small>Last change</small><p>14.03.26</p></div
          ><div><small>Quantity</small><p>432</p></div
          ><div><small>Editor</small><p>Max Mustermann</p></div></div
        ></details
      ></DBTableDataCell
    ><DBTableDataCell>34621 234</DBTableDataCell
    ><DBTableDataCell><DBTag>Status Tag</DBTag></DBTableDataCell></DBTableRow
  ><DBTableRow :interactive="true"
    ><DBTableDataCell
      ><details
        ><summary
          data-icon="chevron_down"
          data-table-row-trigger="true"
          class="db-icon"
        >
          Show details </summary
        ><div
          :style="{
  display: 'flex',
  flexWrap: 'wrap',
  gap: 'var(--db-spacing-fixed-md)'
}"
          ><div><small>Region</small><p>South</p></div
          ><div><small>Last change</small><p>15.03.26</p></div
          ><div><small>Quantity</small><p>12</p></div
          ><div><small>Editor</small><p>Erika Musterfrau</p></div></div
        ></details
      ></DBTableDataCell
    ><DBTableDataCell>34621 235</DBTableDataCell
    ><DBTableDataCell><DBTag>Status Tag</DBTag></DBTableDataCell></DBTableRow
  ></DBTableBody
>`},render:e=>({components:{DBTable:u,DBInfotext:r,DBTableBody:i,DBTableDataCell:l,DBTableHead:s,DBTableHeaderCell:o,DBTableRow:h,DBTag:g},setup(){return{args:e}},template:`<div  :style="{
  minInlineSize: '300px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)',
  padding: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Spaced
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})},w={args:{mobileVariant:`list`,captionPlain:`Mobile Variant List`,columnSizes:{0:`min-content`},default:`<DBTableHead
  ><DBTableRow
    ><DBTableHeaderCell scope="col" :noText="true"> Details </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Number </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Status </DBTableHeaderCell></DBTableRow
  ></DBTableHead
><DBTableBody
  ><DBTableRow :interactive="true"
    ><DBTableDataCell
      ><details
        ><summary
          data-icon="chevron_down"
          data-table-row-trigger="true"
          class="db-icon"
        >
          Show details </summary
        ><div
          :style="{
  display: 'flex',
  flexWrap: 'wrap',
  gap: 'var(--db-spacing-fixed-md)'
}"
          ><div><small>Region</small><p>North</p></div
          ><div><small>Last change</small><p>14.03.26</p></div
          ><div><small>Quantity</small><p>432</p></div
          ><div><small>Editor</small><p>Max Mustermann</p></div></div
        ></details
      ></DBTableDataCell
    ><DBTableDataCell>34621 234</DBTableDataCell
    ><DBTableDataCell><DBTag>Status Tag</DBTag></DBTableDataCell></DBTableRow
  ><DBTableRow :interactive="true"
    ><DBTableDataCell
      ><details
        ><summary
          data-icon="chevron_down"
          data-table-row-trigger="true"
          class="db-icon"
        >
          Show details </summary
        ><div
          :style="{
  display: 'flex',
  flexWrap: 'wrap',
  gap: 'var(--db-spacing-fixed-md)'
}"
          ><div><small>Region</small><p>South</p></div
          ><div><small>Last change</small><p>15.03.26</p></div
          ><div><small>Quantity</small><p>12</p></div
          ><div><small>Editor</small><p>Erika Musterfrau</p></div></div
        ></details
      ></DBTableDataCell
    ><DBTableDataCell>34621 235</DBTableDataCell
    ><DBTableDataCell><DBTag>Status Tag</DBTag></DBTableDataCell></DBTableRow
  ></DBTableBody
>`},render:e=>({components:{DBTable:u,DBInfotext:r,DBTableBody:i,DBTableDataCell:l,DBTableHead:s,DBTableHeaderCell:o,DBTableRow:h,DBTag:g},setup(){return{args:e}},template:`<div  :style="{
  minInlineSize: '300px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)',
  padding: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Mobile Variant List
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})},T=[`Flat`,`Zebra`,`Spaced`,`MobileVariantList`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "flat",
    "captionPlain": "Flat",
    "columnSizes": {
      0: 'min-content'
    },
    "default": \`<DBTableHead
  ><DBTableRow
    ><DBTableHeaderCell scope="col" :noText="true"> Details </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Number </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Status </DBTableHeaderCell></DBTableRow
  ></DBTableHead
><DBTableBody
  ><DBTableRow :interactive="true"
    ><DBTableDataCell
      ><details
        ><summary
          data-icon="chevron_down"
          data-table-row-trigger="true"
          class="db-icon"
        >
          Show details </summary
        ><div
          :style="{
  display: 'flex',
  flexWrap: 'wrap',
  gap: 'var(--db-spacing-fixed-md)'
}"
          ><div><small>Region</small><p>North</p></div
          ><div><small>Last change</small><p>14.03.26</p></div
          ><div><small>Quantity</small><p>432</p></div
          ><div><small>Editor</small><p>Max Mustermann</p></div></div
        ></details
      ></DBTableDataCell
    ><DBTableDataCell>34621 234</DBTableDataCell
    ><DBTableDataCell><DBTag>Status Tag</DBTag></DBTableDataCell></DBTableRow
  ><DBTableRow :interactive="true"
    ><DBTableDataCell
      ><details
        ><summary
          data-icon="chevron_down"
          data-table-row-trigger="true"
          class="db-icon"
        >
          Show details </summary
        ><div
          :style="{
  display: 'flex',
  flexWrap: 'wrap',
  gap: 'var(--db-spacing-fixed-md)'
}"
          ><div><small>Region</small><p>South</p></div
          ><div><small>Last change</small><p>15.03.26</p></div
          ><div><small>Quantity</small><p>12</p></div
          ><div><small>Editor</small><p>Erika Musterfrau</p></div></div
        ></details
      ></DBTableDataCell
    ><DBTableDataCell>34621 235</DBTableDataCell
    ><DBTableDataCell><DBTag>Status Tag</DBTag></DBTableDataCell></DBTableRow
  ></DBTableBody
>\`
  },
  render: (args: any) => ({
    components: {
      DBTable,
      DBInfotext,
      DBTableBody,
      DBTableDataCell,
      DBTableHead,
      DBTableHeaderCell,
      DBTableRow,
      DBTag
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "zebra",
    "captionPlain": "Zebra",
    "columnSizes": {
      0: 'min-content'
    },
    "default": \`<DBTableHead
  ><DBTableRow
    ><DBTableHeaderCell scope="col" :noText="true"> Details </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Number </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Status </DBTableHeaderCell></DBTableRow
  ></DBTableHead
><DBTableBody
  ><DBTableRow :interactive="true"
    ><DBTableDataCell
      ><details
        ><summary
          data-icon="chevron_down"
          data-table-row-trigger="true"
          class="db-icon"
        >
          Show details </summary
        ><div
          :style="{
  display: 'flex',
  flexWrap: 'wrap',
  gap: 'var(--db-spacing-fixed-md)'
}"
          ><div><small>Region</small><p>North</p></div
          ><div><small>Last change</small><p>14.03.26</p></div
          ><div><small>Quantity</small><p>432</p></div
          ><div><small>Editor</small><p>Max Mustermann</p></div></div
        ></details
      ></DBTableDataCell
    ><DBTableDataCell>34621 234</DBTableDataCell
    ><DBTableDataCell><DBTag>Status Tag</DBTag></DBTableDataCell></DBTableRow
  ><DBTableRow :interactive="true"
    ><DBTableDataCell
      ><details
        ><summary
          data-icon="chevron_down"
          data-table-row-trigger="true"
          class="db-icon"
        >
          Show details </summary
        ><div
          :style="{
  display: 'flex',
  flexWrap: 'wrap',
  gap: 'var(--db-spacing-fixed-md)'
}"
          ><div><small>Region</small><p>South</p></div
          ><div><small>Last change</small><p>15.03.26</p></div
          ><div><small>Quantity</small><p>12</p></div
          ><div><small>Editor</small><p>Erika Musterfrau</p></div></div
        ></details
      ></DBTableDataCell
    ><DBTableDataCell>34621 235</DBTableDataCell
    ><DBTableDataCell><DBTag>Status Tag</DBTag></DBTableDataCell></DBTableRow
  ></DBTableBody
>\`
  },
  render: (args: any) => ({
    components: {
      DBTable,
      DBInfotext,
      DBTableBody,
      DBTableDataCell,
      DBTableHead,
      DBTableHeaderCell,
      DBTableRow,
      DBTag
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
                    Zebra
                </DBInfotext><DBTable v-bind="args"   >\${args.default}</DBTable></div>\`
  })
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "spaced",
    "captionPlain": "Spaced",
    "columnSizes": {
      0: 'min-content'
    },
    "default": \`<DBTableHead
  ><DBTableRow
    ><DBTableHeaderCell scope="col" :noText="true"> Details </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Number </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Status </DBTableHeaderCell></DBTableRow
  ></DBTableHead
><DBTableBody
  ><DBTableRow :interactive="true"
    ><DBTableDataCell
      ><details
        ><summary
          data-icon="chevron_down"
          data-table-row-trigger="true"
          class="db-icon"
        >
          Show details </summary
        ><div
          :style="{
  display: 'flex',
  flexWrap: 'wrap',
  gap: 'var(--db-spacing-fixed-md)'
}"
          ><div><small>Region</small><p>North</p></div
          ><div><small>Last change</small><p>14.03.26</p></div
          ><div><small>Quantity</small><p>432</p></div
          ><div><small>Editor</small><p>Max Mustermann</p></div></div
        ></details
      ></DBTableDataCell
    ><DBTableDataCell>34621 234</DBTableDataCell
    ><DBTableDataCell><DBTag>Status Tag</DBTag></DBTableDataCell></DBTableRow
  ><DBTableRow :interactive="true"
    ><DBTableDataCell
      ><details
        ><summary
          data-icon="chevron_down"
          data-table-row-trigger="true"
          class="db-icon"
        >
          Show details </summary
        ><div
          :style="{
  display: 'flex',
  flexWrap: 'wrap',
  gap: 'var(--db-spacing-fixed-md)'
}"
          ><div><small>Region</small><p>South</p></div
          ><div><small>Last change</small><p>15.03.26</p></div
          ><div><small>Quantity</small><p>12</p></div
          ><div><small>Editor</small><p>Erika Musterfrau</p></div></div
        ></details
      ></DBTableDataCell
    ><DBTableDataCell>34621 235</DBTableDataCell
    ><DBTableDataCell><DBTag>Status Tag</DBTag></DBTableDataCell></DBTableRow
  ></DBTableBody
>\`
  },
  render: (args: any) => ({
    components: {
      DBTable,
      DBInfotext,
      DBTableBody,
      DBTableDataCell,
      DBTableHead,
      DBTableHeaderCell,
      DBTableRow,
      DBTag
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    "mobileVariant": "list",
    "captionPlain": "Mobile Variant List",
    "columnSizes": {
      0: 'min-content'
    },
    "default": \`<DBTableHead
  ><DBTableRow
    ><DBTableHeaderCell scope="col" :noText="true"> Details </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Number </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Status </DBTableHeaderCell></DBTableRow
  ></DBTableHead
><DBTableBody
  ><DBTableRow :interactive="true"
    ><DBTableDataCell
      ><details
        ><summary
          data-icon="chevron_down"
          data-table-row-trigger="true"
          class="db-icon"
        >
          Show details </summary
        ><div
          :style="{
  display: 'flex',
  flexWrap: 'wrap',
  gap: 'var(--db-spacing-fixed-md)'
}"
          ><div><small>Region</small><p>North</p></div
          ><div><small>Last change</small><p>14.03.26</p></div
          ><div><small>Quantity</small><p>432</p></div
          ><div><small>Editor</small><p>Max Mustermann</p></div></div
        ></details
      ></DBTableDataCell
    ><DBTableDataCell>34621 234</DBTableDataCell
    ><DBTableDataCell><DBTag>Status Tag</DBTag></DBTableDataCell></DBTableRow
  ><DBTableRow :interactive="true"
    ><DBTableDataCell
      ><details
        ><summary
          data-icon="chevron_down"
          data-table-row-trigger="true"
          class="db-icon"
        >
          Show details </summary
        ><div
          :style="{
  display: 'flex',
  flexWrap: 'wrap',
  gap: 'var(--db-spacing-fixed-md)'
}"
          ><div><small>Region</small><p>South</p></div
          ><div><small>Last change</small><p>15.03.26</p></div
          ><div><small>Quantity</small><p>12</p></div
          ><div><small>Editor</small><p>Erika Musterfrau</p></div></div
        ></details
      ></DBTableDataCell
    ><DBTableDataCell>34621 235</DBTableDataCell
    ><DBTableDataCell><DBTag>Status Tag</DBTag></DBTableDataCell></DBTableRow
  ></DBTableBody
>\`
  },
  render: (args: any) => ({
    components: {
      DBTable,
      DBInfotext,
      DBTableBody,
      DBTableDataCell,
      DBTableHead,
      DBTableHeaderCell,
      DBTableRow,
      DBTag
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
                    Mobile Variant List
                </DBInfotext><DBTable v-bind="args"   >\${args.default}</DBTable></div>\`
  })
}`,...w.parameters?.docs?.source}}}})))()}export{v as a,S as i,w as n,E as o,C as r,x as t};