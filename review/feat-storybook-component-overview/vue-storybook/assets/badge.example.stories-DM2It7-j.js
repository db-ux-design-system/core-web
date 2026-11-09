import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./badge-Dju5ycyW.js";import{i,n as a,r as o,t as s}from"./breadcrumb-DKOvgQ9H.js";import{n as c,t as l}from"./infotext-CBGlIDSp.js";import{n as u,t as d}from"./breadcrumb-popover-item-DTQyu_wm.js";var f=t({CornerFourItems:()=>g,CornerTruncationPopover:()=>v,InlineFourItems:()=>h,InlineTruncationPopover:()=>_,__namedExportsOrder:()=>y,default:()=>m}),p,m,h,g,_,v,y;function b(){return(b=e((()=>{n(),i(),u(),c(),a(),{fn:p}=__STORYBOOK_MODULE_TEST__,m={title:`Components/DBBreadcrumb/Badge`,component:s,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`small`,`medium`]},separator:{control:`select`,options:[`chevron`,`slash`]},id:{control:`text`}}},h={args:{"aria-label":`Breadcrumb (inline badges, 4 items)`,expandText:`Show more`,default:`<DBBreadcrumbItem
  ><a href="/">
    Home
    <DBBadge semantic="informational">1</DBBadge></a
  ></DBBreadcrumbItem
><DBBreadcrumbItem
  ><a href="/1">
    Level 1<DBBadge semantic="successful">2</DBBadge></a
  ></DBBreadcrumbItem
><DBBreadcrumbItem
  ><a href="/1/2">
    Level 2<DBBadge semantic="warning">3</DBBadge></a
  ></DBBreadcrumbItem
><DBBreadcrumbItem
  ><a href="/1/2/current" aria-current="page">
    Current
    <DBBadge semantic="critical">4</DBBadge></a
  ></DBBreadcrumbItem
>`},render:e=>({components:{DBBreadcrumb:s,DBBadge:r,DBBreadcrumbItem:o,DBBreadcrumbPopoverItem:d,DBInfotext:l},setup(){return{args:e}},template:`<DBBreadcrumb v-bind="args"   >${e.default}</DBBreadcrumb>`})},g={args:{"aria-label":`Breadcrumb (corner badges, 4 items)`,expandText:`Show more`,default:`<DBBreadcrumbItem
  ><a href="/">
    Home
    <DBBadge
      semantic="informational"
      placement="corner-top-right"
      label="1 update"
    >
      1
    </DBBadge></a
  ></DBBreadcrumbItem
><DBBreadcrumbItem
  ><a href="/1">
    Level 1
    <DBBadge
      semantic="successful"
      placement="corner-top-right"
      label="2 updates"
    >
      2
    </DBBadge></a
  ></DBBreadcrumbItem
><DBBreadcrumbItem
  ><a href="/1/2">
    Level 2
    <DBBadge semantic="warning" placement="corner-top-right" label="3 updates">
      3
    </DBBadge></a
  ></DBBreadcrumbItem
><DBBreadcrumbItem
  ><a href="/1/2/current" aria-current="page">
    Current
    <DBBadge semantic="critical" placement="corner-top-right" label="4 updates">
      4
    </DBBadge></a
  ></DBBreadcrumbItem
>`},render:e=>({components:{DBBreadcrumb:s,DBBadge:r,DBBreadcrumbItem:o,DBBreadcrumbPopoverItem:d,DBInfotext:l},setup(){return{args:e}},template:`<DBBreadcrumb v-bind="args"   >${e.default}</DBBreadcrumb>`})},_={args:{"aria-label":`Breadcrumb (inline badges, truncation popover)`,expandText:`Show more`,default:`<DBBreadcrumbItem
  ><a href="/">
    Home
    <DBBadge semantic="informational">1</DBBadge></a
  ></DBBreadcrumbItem
><DBBreadcrumbPopoverItem label="Show more breadcrumbs"
  ><DBBreadcrumbItem
    ><a href="/1">
      Level 1<DBBadge semantic="successful">2</DBBadge></a
    ></DBBreadcrumbItem
  ><DBBreadcrumbItem
    ><a href="/1/2">
      Level 2<DBBadge semantic="warning">3</DBBadge></a
    ></DBBreadcrumbItem
  ><DBBreadcrumbItem
    ><a href="/1/2/3">
      Level 3<DBBadge semantic="critical">4</DBBadge></a
    ></DBBreadcrumbItem
  ></DBBreadcrumbPopoverItem
><DBBreadcrumbItem
  ><a href="/1/2/3/4">
    Level 4<DBBadge semantic="neutral">5</DBBadge></a
  ></DBBreadcrumbItem
><DBBreadcrumbItem
  ><a href="/1/2/3/4/current" aria-current="page">
    Current
    <DBBadge semantic="adaptive">6</DBBadge></a
  ></DBBreadcrumbItem
>`},render:e=>({components:{DBBreadcrumb:s,DBBadge:r,DBBreadcrumbItem:o,DBBreadcrumbPopoverItem:d,DBInfotext:l},setup(){return{args:e}},template:`<DBBreadcrumb v-bind="args"   >${e.default}</DBBreadcrumb>`})},v={args:{"aria-label":`Breadcrumb (corner badges, truncation popover)`,expandText:`Show more`,default:`<DBBreadcrumbItem
  ><a href="/">
    Home
    <DBBadge
      semantic="informational"
      placement="corner-top-right"
      label="1 update"
    >
      1
    </DBBadge></a
  ></DBBreadcrumbItem
><DBBreadcrumbPopoverItem label="Show more breadcrumbs"
  ><DBBreadcrumbItem
    ><a href="/1">
      Level 1
      <DBBadge
        semantic="successful"
        placement="corner-top-right"
        label="2 updates"
      >
        2
      </DBBadge></a
    ></DBBreadcrumbItem
  ><DBBreadcrumbItem
    ><a href="/1/2">
      Level 2
      <DBBadge
        semantic="warning"
        placement="corner-top-right"
        label="3 updates"
      >
        3
      </DBBadge></a
    ></DBBreadcrumbItem
  ><DBBreadcrumbItem
    ><a href="/1/2/3">
      Level 3
      <DBBadge
        semantic="critical"
        placement="corner-top-right"
        label="4 updates"
      >
        4
      </DBBadge></a
    ></DBBreadcrumbItem
  ></DBBreadcrumbPopoverItem
><DBBreadcrumbItem
  ><a href="/1/2/3/4">
    Level 4
    <DBBadge semantic="neutral" placement="corner-top-right" label="5 updates">
      5
    </DBBadge></a
  ></DBBreadcrumbItem
><DBBreadcrumbItem
  ><a href="/1/2/3/4/current" aria-current="page">
    Current
    <DBBadge semantic="adaptive" placement="corner-top-right" label="6 updates">
      6
    </DBBadge></a
  ></DBBreadcrumbItem
>`},render:e=>({components:{DBBreadcrumb:s,DBBadge:r,DBBreadcrumbItem:o,DBBreadcrumbPopoverItem:d,DBInfotext:l},setup(){return{args:e}},template:`<DBBreadcrumb v-bind="args"   >${e.default}</DBBreadcrumb>`})},y=[`InlineFourItems`,`CornerFourItems`,`InlineTruncationPopover`,`CornerTruncationPopover`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-label": "Breadcrumb (inline badges, 4 items)",
    "expandText": "Show more",
    "default": \`<DBBreadcrumbItem
  ><a href="/">
    Home
    <DBBadge semantic="informational">1</DBBadge></a
  ></DBBreadcrumbItem
><DBBreadcrumbItem
  ><a href="/1">
    Level 1<DBBadge semantic="successful">2</DBBadge></a
  ></DBBreadcrumbItem
><DBBreadcrumbItem
  ><a href="/1/2">
    Level 2<DBBadge semantic="warning">3</DBBadge></a
  ></DBBreadcrumbItem
><DBBreadcrumbItem
  ><a href="/1/2/current" aria-current="page">
    Current
    <DBBadge semantic="critical">4</DBBadge></a
  ></DBBreadcrumbItem
>\`
  },
  render: (args: any) => ({
    components: {
      DBBreadcrumb,
      DBBadge,
      DBBreadcrumbItem,
      DBBreadcrumbPopoverItem,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBBreadcrumb v-bind="args"   >\${args.default}</DBBreadcrumb>\`
  })
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-label": "Breadcrumb (corner badges, 4 items)",
    "expandText": "Show more",
    "default": \`<DBBreadcrumbItem
  ><a href="/">
    Home
    <DBBadge
      semantic="informational"
      placement="corner-top-right"
      label="1 update"
    >
      1
    </DBBadge></a
  ></DBBreadcrumbItem
><DBBreadcrumbItem
  ><a href="/1">
    Level 1
    <DBBadge
      semantic="successful"
      placement="corner-top-right"
      label="2 updates"
    >
      2
    </DBBadge></a
  ></DBBreadcrumbItem
><DBBreadcrumbItem
  ><a href="/1/2">
    Level 2
    <DBBadge semantic="warning" placement="corner-top-right" label="3 updates">
      3
    </DBBadge></a
  ></DBBreadcrumbItem
><DBBreadcrumbItem
  ><a href="/1/2/current" aria-current="page">
    Current
    <DBBadge semantic="critical" placement="corner-top-right" label="4 updates">
      4
    </DBBadge></a
  ></DBBreadcrumbItem
>\`
  },
  render: (args: any) => ({
    components: {
      DBBreadcrumb,
      DBBadge,
      DBBreadcrumbItem,
      DBBreadcrumbPopoverItem,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBBreadcrumb v-bind="args"   >\${args.default}</DBBreadcrumb>\`
  })
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-label": "Breadcrumb (inline badges, truncation popover)",
    "expandText": "Show more",
    "default": \`<DBBreadcrumbItem
  ><a href="/">
    Home
    <DBBadge semantic="informational">1</DBBadge></a
  ></DBBreadcrumbItem
><DBBreadcrumbPopoverItem label="Show more breadcrumbs"
  ><DBBreadcrumbItem
    ><a href="/1">
      Level 1<DBBadge semantic="successful">2</DBBadge></a
    ></DBBreadcrumbItem
  ><DBBreadcrumbItem
    ><a href="/1/2">
      Level 2<DBBadge semantic="warning">3</DBBadge></a
    ></DBBreadcrumbItem
  ><DBBreadcrumbItem
    ><a href="/1/2/3">
      Level 3<DBBadge semantic="critical">4</DBBadge></a
    ></DBBreadcrumbItem
  ></DBBreadcrumbPopoverItem
><DBBreadcrumbItem
  ><a href="/1/2/3/4">
    Level 4<DBBadge semantic="neutral">5</DBBadge></a
  ></DBBreadcrumbItem
><DBBreadcrumbItem
  ><a href="/1/2/3/4/current" aria-current="page">
    Current
    <DBBadge semantic="adaptive">6</DBBadge></a
  ></DBBreadcrumbItem
>\`
  },
  render: (args: any) => ({
    components: {
      DBBreadcrumb,
      DBBadge,
      DBBreadcrumbItem,
      DBBreadcrumbPopoverItem,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBBreadcrumb v-bind="args"   >\${args.default}</DBBreadcrumb>\`
  })
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-label": "Breadcrumb (corner badges, truncation popover)",
    "expandText": "Show more",
    "default": \`<DBBreadcrumbItem
  ><a href="/">
    Home
    <DBBadge
      semantic="informational"
      placement="corner-top-right"
      label="1 update"
    >
      1
    </DBBadge></a
  ></DBBreadcrumbItem
><DBBreadcrumbPopoverItem label="Show more breadcrumbs"
  ><DBBreadcrumbItem
    ><a href="/1">
      Level 1
      <DBBadge
        semantic="successful"
        placement="corner-top-right"
        label="2 updates"
      >
        2
      </DBBadge></a
    ></DBBreadcrumbItem
  ><DBBreadcrumbItem
    ><a href="/1/2">
      Level 2
      <DBBadge
        semantic="warning"
        placement="corner-top-right"
        label="3 updates"
      >
        3
      </DBBadge></a
    ></DBBreadcrumbItem
  ><DBBreadcrumbItem
    ><a href="/1/2/3">
      Level 3
      <DBBadge
        semantic="critical"
        placement="corner-top-right"
        label="4 updates"
      >
        4
      </DBBadge></a
    ></DBBreadcrumbItem
  ></DBBreadcrumbPopoverItem
><DBBreadcrumbItem
  ><a href="/1/2/3/4">
    Level 4
    <DBBadge semantic="neutral" placement="corner-top-right" label="5 updates">
      5
    </DBBadge></a
  ></DBBreadcrumbItem
><DBBreadcrumbItem
  ><a href="/1/2/3/4/current" aria-current="page">
    Current
    <DBBadge semantic="adaptive" placement="corner-top-right" label="6 updates">
      6
    </DBBadge></a
  ></DBBreadcrumbItem
>\`
  },
  render: (args: any) => ({
    components: {
      DBBreadcrumb,
      DBBadge,
      DBBreadcrumbItem,
      DBBreadcrumbPopoverItem,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBBreadcrumb v-bind="args"   >\${args.default}</DBBreadcrumb>\`
  })
}`,...v.parameters?.docs?.source}}}})))()}export{f as a,_ as i,v as n,b as o,h as r,g as t};