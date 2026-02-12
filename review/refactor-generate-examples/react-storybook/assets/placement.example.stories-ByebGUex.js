import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as t}from"./badge-CYoxtLhE.js";import{D as m}from"./icon-rVozKz1H.js";import{D as n}from"./button-DnZnbJNC.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";import"./constants-CD69XpC7.js";const{fn:D}=__STORYBOOK_MODULE_TEST__,b={title:"Components/DBBadge/Placement",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{emphasis:{control:"select",options:["weak","strong"]},semantic:{control:"select",options:["adaptive","neutral","critical","informational","warning","successful"]},size:{control:"select",options:["small","medium"]},placement:{control:"select",options:["inline","corner-top-left","corner-top-right","corner-center-left","corner-center-right","corner-bottom-left","corner-bottom-right"]},label:{control:"text"},text:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},o={args:{size:"small",emphasis:"strong",semantic:"critical",children:"Label"},render:r=>e.jsxs("div",{className:"badge-inline-container",children:[e.jsx("span",{"data-icon":"x_placeholder",children:"(Default) Inline"}),e.jsx(t,{...r}),e.jsx(m,{icon:"error"})]})},a={args:{size:"small",emphasis:"strong",semantic:"critical",placement:"corner-top-left"},render:r=>e.jsxs(n,{"data-sb-decorator":"true",icon:"x_placeholder",variant:"outlined",children:[e.jsx(t,{...r}),"Corner - Top - Left"]})},s={args:{size:"small",emphasis:"strong",semantic:"critical",placement:"corner-center-left"},render:r=>e.jsxs(n,{"data-sb-decorator":"true",icon:"x_placeholder",variant:"outlined",children:[e.jsx(t,{...r}),"Corner - Center - Left"]})},c={args:{size:"small",emphasis:"strong",semantic:"critical",placement:"corner-bottom-left"},render:r=>e.jsxs(n,{"data-sb-decorator":"true",icon:"x_placeholder",variant:"outlined",children:[e.jsx(t,{...r}),"Corner - Bottom- Left"]})},i={args:{size:"small",emphasis:"strong",semantic:"critical",placement:"corner-top-right"},render:r=>e.jsxs(n,{"data-sb-decorator":"true",icon:"x_placeholder",variant:"outlined",children:[e.jsx(t,{...r}),"Corner - Top - Right"]})},l={args:{size:"small",emphasis:"strong",semantic:"critical",placement:"corner-center-right"},render:r=>e.jsxs(n,{"data-sb-decorator":"true",icon:"x_placeholder",variant:"outlined",children:[e.jsx(t,{...r}),"Corner - Center - Right"]})},p={args:{size:"small",emphasis:"strong",semantic:"critical",placement:"corner-bottom-right"},render:r=>e.jsxs(n,{"data-sb-decorator":"true",icon:"x_placeholder",variant:"outlined",children:[e.jsx(t,{...r}),"Corner - Bottom- Right"]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "small",
    "emphasis": "strong",
    "semantic": "critical",
    "children": "Label"
  },
  render: (properties: any) => <div className="badge-inline-container"><span data-icon="x_placeholder">(Default) Inline</span><DBBadge {...properties} /><DBIcon icon="error" /></div>
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "small",
    "emphasis": "strong",
    "semantic": "critical",
    "placement": "corner-top-left"
  },
  render: (properties: any) => <DBButton data-sb-decorator="true" icon="x_placeholder" variant="outlined"><DBBadge {...properties} />
                Corner - Top - Left
            </DBButton>
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "small",
    "emphasis": "strong",
    "semantic": "critical",
    "placement": "corner-center-left"
  },
  render: (properties: any) => <DBButton data-sb-decorator="true" icon="x_placeholder" variant="outlined"><DBBadge {...properties} />
                Corner - Center - Left
            </DBButton>
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "small",
    "emphasis": "strong",
    "semantic": "critical",
    "placement": "corner-bottom-left"
  },
  render: (properties: any) => <DBButton data-sb-decorator="true" icon="x_placeholder" variant="outlined"><DBBadge {...properties} />
                Corner - Bottom- Left
            </DBButton>
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "small",
    "emphasis": "strong",
    "semantic": "critical",
    "placement": "corner-top-right"
  },
  render: (properties: any) => <DBButton data-sb-decorator="true" icon="x_placeholder" variant="outlined"><DBBadge {...properties} />
                Corner - Top - Right
            </DBButton>
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "small",
    "emphasis": "strong",
    "semantic": "critical",
    "placement": "corner-center-right"
  },
  render: (properties: any) => <DBButton data-sb-decorator="true" icon="x_placeholder" variant="outlined"><DBBadge {...properties} />
                Corner - Center - Right
            </DBButton>
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "small",
    "emphasis": "strong",
    "semantic": "critical",
    "placement": "corner-bottom-right"
  },
  render: (properties: any) => <DBButton data-sb-decorator="true" icon="x_placeholder" variant="outlined"><DBBadge {...properties} />
                Corner - Bottom- Right
            </DBButton>
}`,...p.parameters?.docs?.source}}};const _=["DefaultInline","CornerTopLeft","CornerCenterLeft","CornerBottomLeft","CornerTopRight","CornerCenterRight","CornerBottomRight"];export{c as CornerBottomLeft,p as CornerBottomRight,s as CornerCenterLeft,l as CornerCenterRight,a as CornerTopLeft,i as CornerTopRight,o as DefaultInline,_ as __namedExportsOrder,b as default};
