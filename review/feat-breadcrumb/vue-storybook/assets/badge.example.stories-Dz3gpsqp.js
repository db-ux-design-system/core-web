import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./badge-DU0dhxUI.js";import{i as r,n as i,r as a,t as o}from"./breadcrumb-3i8gKz0F.js";import{n as s,t as c}from"./infotext-dPUx9AFU.js";import{n as l,t as u}from"./breadcrumb-truncation-item-C7XmNA5v.js";var d,f,p,m,h,g,_;function v(){return(v=e((()=>{t(),r(),l(),s(),i(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/DBBreadcrumb/Badge`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`small`,`medium`]},separator:{control:`select`,options:[`chevron`,`slash`]},id:{control:`text`}}},p={args:{"aria-label":`Breadcrumb (inline badges, 4 items)`,expandText:`Show more`,default:`<DBBreadcrumbItem
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
>`},render:e=>({components:{DBBreadcrumb:o,DBBadge:n,DBBreadcrumbItem:a,DBBreadcrumbTruncationItem:u,DBInfotext:c},setup(){return{args:e}},template:`<DBBreadcrumb v-bind="args"   >${e.default}</DBBreadcrumb>`})},m={args:{"aria-label":`Breadcrumb (corner badges, 4 items)`,expandText:`Show more`,default:`<DBBreadcrumbItem
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
>`},render:e=>({components:{DBBreadcrumb:o,DBBadge:n,DBBreadcrumbItem:a,DBBreadcrumbTruncationItem:u,DBInfotext:c},setup(){return{args:e}},template:`<DBBreadcrumb v-bind="args"   >${e.default}</DBBreadcrumb>`})},h={args:{"aria-label":`Breadcrumb (inline badges, truncation popover)`,expandText:`Show more`,default:`<DBBreadcrumbItem
  ><a href="/">
    Home
    <DBBadge semantic="informational">1</DBBadge></a
  ></DBBreadcrumbItem
><DBBreadcrumbTruncationItem label="Show more breadcrumbs"
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
  ></DBBreadcrumbTruncationItem
><DBBreadcrumbItem
  ><a href="/1/2/3/4">
    Level 4<DBBadge semantic="neutral">5</DBBadge></a
  ></DBBreadcrumbItem
><DBBreadcrumbItem
  ><a href="/1/2/3/4/current" aria-current="page">
    Current
    <DBBadge semantic="adaptive">6</DBBadge></a
  ></DBBreadcrumbItem
>`},render:e=>({components:{DBBreadcrumb:o,DBBadge:n,DBBreadcrumbItem:a,DBBreadcrumbTruncationItem:u,DBInfotext:c},setup(){return{args:e}},template:`<DBBreadcrumb v-bind="args"   >${e.default}</DBBreadcrumb>`})},g={args:{"aria-label":`Breadcrumb (corner badges, truncation popover)`,expandText:`Show more`,default:`<DBBreadcrumbItem
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
><DBBreadcrumbTruncationItem label="Show more breadcrumbs"
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
  ></DBBreadcrumbTruncationItem
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
>`},render:e=>({components:{DBBreadcrumb:o,DBBadge:n,DBBreadcrumbItem:a,DBBreadcrumbTruncationItem:u,DBInfotext:c},setup(){return{args:e}},template:`<DBBreadcrumb v-bind="args"   >${e.default}</DBBreadcrumb>`})},_=[`InlineFourItems`,`CornerFourItems`,`InlineTruncationPopover`,`CornerTruncationPopover`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
      DBBreadcrumbTruncationItem,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBBreadcrumb v-bind="args"   >\${args.default}</DBBreadcrumb>\`
  })
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
      DBBreadcrumbTruncationItem,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBBreadcrumb v-bind="args"   >\${args.default}</DBBreadcrumb>\`
  })
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-label": "Breadcrumb (inline badges, truncation popover)",
    "expandText": "Show more",
    "default": \`<DBBreadcrumbItem
  ><a href="/">
    Home
    <DBBadge semantic="informational">1</DBBadge></a
  ></DBBreadcrumbItem
><DBBreadcrumbTruncationItem label="Show more breadcrumbs"
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
  ></DBBreadcrumbTruncationItem
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
      DBBreadcrumbTruncationItem,
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
><DBBreadcrumbTruncationItem label="Show more breadcrumbs"
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
  ></DBBreadcrumbTruncationItem
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
      DBBreadcrumbTruncationItem,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DBBreadcrumb v-bind="args"   >\${args.default}</DBBreadcrumb>\`
  })
}`,...g.parameters?.docs?.source}}}})))()}v();export{m as CornerFourItems,g as CornerTruncationPopover,p as InlineFourItems,h as InlineTruncationPopover,_ as __namedExportsOrder,f as default};