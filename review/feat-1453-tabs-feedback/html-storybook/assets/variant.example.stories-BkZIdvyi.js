import{i as e}from"./preload-helper-DxNVafYN.js";import{t}from"./iframe-C8K7kF1P.js";import{ft as n,o as r,t as i}from"./src-BGDAavDa.js";import{a,l as o}from"./data-CfbGISvG.js";var s,c,l,u,d,f,p;e((()=>{i(),a(),s=t(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBTable/Variant`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},caption:{control:`text`},captionPlain:{control:`text`},data:{control:`object`},divider:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},showCaption:{control:`boolean`},size:{control:`select`,options:[`x-small`,`small`,`medium`,`large`]},variant:{control:`select`,options:[`flat`,`zebra`,`spaced`]},mobileVariant:{control:`select`,options:[`table`,`list`]},stickyHeader:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},columnSizes:{control:`object`}}},u={args:{variant:`flat`,divider:`both`,captionPlain:`(Default) Flat`,data:o},render:e=>(0,s.jsxs)(`div`,{style:{minInlineSize:`300px`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--db-spacing-fixed-md)`},children:[(0,s.jsx)(n,{semantic:`informational`,size:`small`,icon:`none`,children:`(Default) Flat`}),(0,s.jsx)(r,{...e})]})},d={args:{variant:`zebra`,divider:`both`,captionPlain:`Zebra`,data:o},render:e=>(0,s.jsxs)(`div`,{style:{minInlineSize:`300px`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--db-spacing-fixed-md)`},children:[(0,s.jsx)(n,{semantic:`informational`,size:`small`,icon:`none`,children:`Zebra`}),(0,s.jsx)(r,{...e})]})},f={args:{variant:`spaced`,divider:`both`,captionPlain:`Spaced`,data:o},render:e=>(0,s.jsxs)(`div`,{style:{minInlineSize:`300px`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--db-spacing-fixed-md)`},children:[(0,s.jsx)(n,{semantic:`informational`,size:`small`,icon:`none`,children:`Spaced`}),(0,s.jsx)(r,{...e})]})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p=[`DefaultFlat`,`Spaced`,`TableVariant2`]}))();export{u as DefaultFlat,d as Spaced,f as TableVariant2,p as __namedExportsOrder,l as default};