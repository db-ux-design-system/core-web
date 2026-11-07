import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./button-INvxNlAn.js";import{n as i,t as a}from"./infotext-Bg73Y01m.js";import{c as o,d as s,f as c,i as l,l as u,m as d,n as f,p,r as m,s as h,t as g,u as _}from"./table-CnlqLXAu.js";var v=t({DefaultCenter:()=>S,End:()=>C,Start:()=>x,__namedExportsOrder:()=>w,default:()=>b}),y,b,x,S,C,w;function T(){return(T=e((()=>{n(),i(),h(),p(),m(),s(),u(),g(),{fn:y}=__STORYBOOK_MODULE_TEST__,b={title:`Components/DBTable/Vertical Alignment`,component:f,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},caption:{control:`text`},captionPlain:{control:`text`},data:{control:`object`},divider:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},showCaption:{control:`boolean`},size:{control:`select`,options:[`x-small`,`small`,`medium`,`large`]},variant:{control:`select`,options:[`flat`,`zebra`,`spaced`]},mobileVariant:{control:`select`,options:[`table`,`list`]},stickyHeader:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},columnSizes:{control:`object`}}},x={args:{captionPlain:`Start`,divider:`both`,default:`<DBTableHead
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
>`},render:e=>({components:{DBTable:f,DBButton:r,DBInfotext:a,DBTableBody:o,DBTableDataCell:d,DBTableHead:l,DBTableHeaderCell:c,DBTableRow:_},setup(){return{args:e}},template:`<div  :style="{
  minInlineSize: '300px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Start
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})},S={args:{captionPlain:`(Default) Center`,divider:`both`,default:`<DBTableHead
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
>`},render:e=>({components:{DBTable:f,DBButton:r,DBInfotext:a,DBTableBody:o,DBTableDataCell:d,DBTableHead:l,DBTableHeaderCell:c,DBTableRow:_},setup(){return{args:e}},template:`<div  :style="{
  minInlineSize: '300px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    (Default) Center
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})},C={args:{captionPlain:`End`,divider:`both`,default:`<DBTableHead
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
>`},render:e=>({components:{DBTable:f,DBButton:r,DBInfotext:a,DBTableBody:o,DBTableDataCell:d,DBTableHead:l,DBTableHeaderCell:c,DBTableRow:_},setup(){return{args:e}},template:`<div  :style="{
  minInlineSize: '300px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    End
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})},w=[`Start`,`DefaultCenter`,`End`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}}})))()}export{v as a,T as i,C as n,x as r,S as t};