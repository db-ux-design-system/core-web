import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as o,a as r}from"./tab-list-Ds39TYNU.js";import{D as n}from"./badge-Cl_5HipD.js";import"./index-D2E5Z_bU.js";import"./iframe-CBMtbObL.js";import"./preload-helper--tLyh50B.js";import"./tooltip-DaYClLkW.js";import"./document-scroll-listener-C9UMSkzw.js";import"./floating-components-DAXMbqch.js";import"./constants-DBRDq7BE.js";const{fn:h}=__STORYBOOK_MODULE_TEST__,D={title:"Components/DBTabItem/Slot with Badge",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},active:{control:"boolean"},disabled:{control:"boolean"},showIcon:{control:"boolean"},showIconLeading:{control:"boolean"},showIconTrailing:{control:"boolean"},noText:{control:"boolean"},id:{control:"text"},autofocus:{control:"boolean"}}},a={args:{children:e.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"8px"},children:["Messages",e.jsx(n,{semantic:"informational",children:"3"})]})},render:t=>e.jsx(r,{children:e.jsx(o,{...t})})},s={args:{children:e.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"8px"},children:["Notifications",e.jsx(n,{semantic:"neutral",children:"4"})]})},render:t=>e.jsx(r,{children:e.jsx(o,{...t})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <span style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }}>
                        Messages
                        <DBBadge semantic="informational">3</DBBadge></span>
  },
  render: (properties: any) => <DBTabList><DBTabItem {...properties} /></DBTabList>
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <span style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }}>
                        Notifications
                        <DBBadge semantic="neutral">4</DBBadge></span>
  },
  render: (properties: any) => <DBTabList><DBTabItem {...properties} /></DBTabList>
}`,...s.parameters?.docs?.source}}};const f=["MessageswithBadge","NotificationswithBadge"];export{a as MessageswithBadge,s as NotificationswithBadge,f as __namedExportsOrder,D as default};
