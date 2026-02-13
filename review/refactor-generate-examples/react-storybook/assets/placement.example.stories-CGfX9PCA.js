import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as n}from"./badge-EQ1dc-qP.js";import{D as p}from"./icon-DXX0jLk5.js";import{D as t}from"./button-DcJZ2vgj.js";import{D as o}from"./infotext-C9RN_4lr.js";import"./index-cGbbigiG.js";import"./iframe-6D4xCEbg.js";import"./preload-helper-D8o24SmT.js";import"./constants-CD69XpC7.js";const{fn:j}=__STORYBOOK_MODULE_TEST__,z={title:"Components/DBBadge/Placement",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{emphasis:{control:"select",options:["weak","strong"]},semantic:{control:"select",options:["adaptive","neutral","critical","informational","warning","successful"]},size:{control:"select",options:["small","medium"]},placement:{control:"select",options:["inline","corner-top-left","corner-top-right","corner-center-left","corner-center-right","corner-bottom-left","corner-bottom-right"]},label:{control:"text"},text:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},a={args:{size:"small",emphasis:"strong",semantic:"critical",children:"Label"},render:r=>e.jsxs("div",{className:"badge-inline-container",children:[e.jsx("span",{"data-icon":"x_placeholder",children:"(Default) Inline"}),e.jsx(n,{...r}),e.jsx(p,{icon:"error"})]})},s={args:{size:"small",emphasis:"strong",semantic:"critical",placement:"corner-top-left"},render:r=>e.jsxs("div",{children:[e.jsx(t,{"data-sb-decorator":"true",icon:"x_placeholder",variant:"outlined",noText:!0,children:e.jsx(n,{...r})}),e.jsx(o,{size:"small",semantic:"informational",icon:"none",children:"Corner - Top - Left"})]})},i={args:{size:"small",emphasis:"strong",semantic:"critical",placement:"corner-center-left"},render:r=>e.jsxs("div",{children:[e.jsx(t,{"data-sb-decorator":"true",icon:"x_placeholder",variant:"outlined",noText:!0,children:e.jsx(n,{...r})}),e.jsx(o,{size:"small",semantic:"informational",icon:"none",children:"Corner - Center - Left"})]})},c={args:{size:"small",emphasis:"strong",semantic:"critical",placement:"corner-bottom-left"},render:r=>e.jsxs("div",{children:[e.jsx(t,{"data-sb-decorator":"true",icon:"x_placeholder",variant:"outlined",noText:!0,children:e.jsx(n,{...r})}),e.jsx(o,{size:"small",semantic:"informational",icon:"none",children:"Corner - Bottom- Left"})]})},l={args:{size:"small",emphasis:"strong",semantic:"critical",placement:"corner-top-right"},render:r=>e.jsxs("div",{children:[e.jsx(t,{"data-sb-decorator":"true",icon:"x_placeholder",variant:"outlined",noText:!0,children:e.jsx(n,{...r})}),e.jsx(o,{size:"small",semantic:"informational",icon:"none",children:"Corner - Top - Right"})]})},m={args:{size:"small",emphasis:"strong",semantic:"critical",placement:"corner-center-right"},render:r=>e.jsxs("div",{children:[e.jsx(t,{"data-sb-decorator":"true",icon:"x_placeholder",variant:"outlined",noText:!0,children:e.jsx(n,{...r})}),e.jsx(o,{size:"small",semantic:"informational",icon:"none",children:"Corner - Center - Right"})]})},d={args:{size:"small",emphasis:"strong",semantic:"critical",placement:"corner-bottom-right"},render:r=>e.jsxs("div",{children:[e.jsx(t,{"data-sb-decorator":"true",icon:"x_placeholder",variant:"outlined",noText:!0,children:e.jsx(n,{...r})}),e.jsx(o,{size:"small",semantic:"informational",icon:"none",children:"Corner - Bottom- Right"})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "small",
    "emphasis": "strong",
    "semantic": "critical",
    "children": "Label"
  },
  render: (properties: any) => <div className="badge-inline-container"><span data-icon="x_placeholder">(Default) Inline</span><DBBadge {...properties} /><DBIcon icon="error" /></div>
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "small",
    "emphasis": "strong",
    "semantic": "critical",
    "placement": "corner-top-left"
  },
  render: (properties: any) => <div><DBButton data-sb-decorator="true" icon="x_placeholder" variant="outlined" noText><DBBadge {...properties} /></DBButton><DBInfotext size="small" semantic="informational" icon="none">
                    Corner - Top - Left
                </DBInfotext></div>
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "small",
    "emphasis": "strong",
    "semantic": "critical",
    "placement": "corner-center-left"
  },
  render: (properties: any) => <div><DBButton data-sb-decorator="true" icon="x_placeholder" variant="outlined" noText><DBBadge {...properties} /></DBButton><DBInfotext size="small" semantic="informational" icon="none">
                    Corner - Center - Left
                </DBInfotext></div>
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "small",
    "emphasis": "strong",
    "semantic": "critical",
    "placement": "corner-bottom-left"
  },
  render: (properties: any) => <div><DBButton data-sb-decorator="true" icon="x_placeholder" variant="outlined" noText><DBBadge {...properties} /></DBButton><DBInfotext size="small" semantic="informational" icon="none">
                    Corner - Bottom- Left
                </DBInfotext></div>
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "small",
    "emphasis": "strong",
    "semantic": "critical",
    "placement": "corner-top-right"
  },
  render: (properties: any) => <div><DBButton data-sb-decorator="true" icon="x_placeholder" variant="outlined" noText><DBBadge {...properties} /></DBButton><DBInfotext size="small" semantic="informational" icon="none">
                    Corner - Top - Right
                </DBInfotext></div>
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "small",
    "emphasis": "strong",
    "semantic": "critical",
    "placement": "corner-center-right"
  },
  render: (properties: any) => <div><DBButton data-sb-decorator="true" icon="x_placeholder" variant="outlined" noText><DBBadge {...properties} /></DBButton><DBInfotext size="small" semantic="informational" icon="none">
                    Corner - Center - Right
                </DBInfotext></div>
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "small",
    "emphasis": "strong",
    "semantic": "critical",
    "placement": "corner-bottom-right"
  },
  render: (properties: any) => <div><DBButton data-sb-decorator="true" icon="x_placeholder" variant="outlined" noText><DBBadge {...properties} /></DBButton><DBInfotext size="small" semantic="informational" icon="none">
                    Corner - Bottom- Right
                </DBInfotext></div>
}`,...d.parameters?.docs?.source}}};const b=["DefaultInline","CornerTopLeft","CornerCenterLeft","CornerBottomLeft","CornerTopRight","CornerCenterRight","CornerBottomRight"];export{c as CornerBottomLeft,d as CornerBottomRight,i as CornerCenterLeft,m as CornerCenterRight,s as CornerTopLeft,l as CornerTopRight,a as DefaultInline,b as __namedExportsOrder,z as default};
