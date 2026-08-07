import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./button-CIRI-koV.js";import{n as r,t as i}from"./infotext-BGeHsxWg.js";import{c as a,d as o,f as s,i as c,l,m as u,n as d,p as f,r as p,s as m,t as h,u as g}from"./table-DGsPBxXe.js";var _,v,y,b,x,S;function C(){return(C=e((()=>{t(),r(),m(),f(),p(),o(),l(),h(),{fn:_}=__STORYBOOK_MODULE_TEST__,v={title:`Components/DBTable/Vertical Alignment`,component:d,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},caption:{control:`text`},captionPlain:{control:`text`},data:{control:`object`},divider:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},showCaption:{control:`boolean`},size:{control:`select`,options:[`x-small`,`small`,`medium`,`large`]},variant:{control:`select`,options:[`flat`,`zebra`,`spaced`]},mobileVariant:{control:`select`,options:[`table`,`list`]},stickyHeader:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},columnSizes:{control:`object`}}},y={args:{captionPlain:`Start`,divider:`both`,default:`<DBTableHead
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
>`},render:e=>({components:{DBTable:d,DBButton:n,DBInfotext:i,DBTableBody:a,DBTableDataCell:u,DBTableHead:c,DBTableHeaderCell:s,DBTableRow:g},setup(){return{args:e}},template:`<div  :style="{
  minInlineSize: '300px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Start
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})},b={args:{captionPlain:`(Default) Center`,divider:`both`,default:`<DBTableHead
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
>`},render:e=>({components:{DBTable:d,DBButton:n,DBInfotext:i,DBTableBody:a,DBTableDataCell:u,DBTableHead:c,DBTableHeaderCell:s,DBTableRow:g},setup(){return{args:e}},template:`<div  :style="{
  minInlineSize: '300px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    (Default) Center
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})},x={args:{captionPlain:`End`,divider:`both`,default:`<DBTableHead
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
>`},render:e=>({components:{DBTable:d,DBButton:n,DBInfotext:i,DBTableBody:a,DBTableDataCell:u,DBTableHead:c,DBTableHeaderCell:s,DBTableRow:g},setup(){return{args:e}},template:`<div  :style="{
  minInlineSize: '300px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    End
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S=[`Start`,`DefaultCenter`,`End`]})))()}C();export{b as DefaultCenter,x as End,y as Start,S as __namedExportsOrder,v as default};