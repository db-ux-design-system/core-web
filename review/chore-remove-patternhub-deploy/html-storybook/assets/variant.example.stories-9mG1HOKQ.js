import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./infotext-BrqREugs.js";import{n as a,t as o}from"./table-hiWHRwKC.js";import{a as s,l as c}from"./data-C0P0p_BJ.js";var l=t({DefaultFlat:()=>p,Spaced:()=>m,TableVariant2:()=>h,__namedExportsOrder:()=>g,default:()=>f}),u,d,f,p,m,h,g;function _(){return(_=e((()=>{r(),a(),s(),u=n(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/DBTable/Variant`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},caption:{control:`text`},captionPlain:{control:`text`},data:{control:`object`},divider:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},showCaption:{control:`boolean`},size:{control:`select`,options:[`x-small`,`small`,`medium`,`large`]},variant:{control:`select`,options:[`flat`,`zebra`,`spaced`]},mobileVariant:{control:`select`,options:[`table`,`list`]},stickyHeader:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},columnSizes:{control:`object`}}},p={args:{variant:`flat`,divider:`both`,captionPlain:`(Default) Flat`,data:c},render:e=>(0,u.jsxs)(`div`,{style:{minInlineSize:`300px`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--db-spacing-fixed-md)`},children:[(0,u.jsx)(i,{semantic:`informational`,size:`small`,icon:`none`,children:`(Default) Flat`}),(0,u.jsx)(o,{...e})]})},m={args:{variant:`zebra`,divider:`both`,captionPlain:`Zebra`,data:c},render:e=>(0,u.jsxs)(`div`,{style:{minInlineSize:`300px`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--db-spacing-fixed-md)`},children:[(0,u.jsx)(i,{semantic:`informational`,size:`small`,icon:`none`,children:`Zebra`}),(0,u.jsx)(o,{...e})]})},h={args:{variant:`spaced`,divider:`both`,captionPlain:`Spaced`,data:c},render:e=>(0,u.jsxs)(`div`,{style:{minInlineSize:`300px`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--db-spacing-fixed-md)`},children:[(0,u.jsx)(i,{semantic:`informational`,size:`small`,icon:`none`,children:`Spaced`}),(0,u.jsx)(o,{...e})]})},g=[`DefaultFlat`,`Spaced`,`TableVariant2`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "flat",
    "divider": "both",
    "captionPlain": "(Default) Flat",
    "data": subHeaderEmphasisWeakTable
  },
  render: (properties: any) => <div style={{
    minInlineSize: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--db-spacing-fixed-md)'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    (Default) Flat
                </DBInfotext><DBTable {...properties} /></div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "zebra",
    "divider": "both",
    "captionPlain": "Zebra",
    "data": subHeaderEmphasisWeakTable
  },
  render: (properties: any) => <div style={{
    minInlineSize: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--db-spacing-fixed-md)'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    Zebra
                </DBInfotext><DBTable {...properties} /></div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "spaced",
    "divider": "both",
    "captionPlain": "Spaced",
    "data": subHeaderEmphasisWeakTable
  },
  render: (properties: any) => <div style={{
    minInlineSize: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--db-spacing-fixed-md)'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    Spaced
                </DBInfotext><DBTable {...properties} /></div>
}`,...h.parameters?.docs?.source}}}})))()}export{l as a,_ as i,m as n,h as r,p as t};