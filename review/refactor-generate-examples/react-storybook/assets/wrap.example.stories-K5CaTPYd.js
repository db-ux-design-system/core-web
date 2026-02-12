import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as a}from"./stack-LANnt-yi.js";import{D as i}from"./infotext-CZi0xQss.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";const{fn:f}=__STORYBOOK_MODULE_TEST__,g={title:"Components/DBStack/Wrap",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["simple","divider"]},gap:{control:"select",options:["none","3x-large","2x-large","x-large","large","medium","small","x-small","2x-small","3x-small"]},direction:{control:"select",options:["row","column"]},wrap:{control:"boolean"},alignment:{control:"select",options:["stretch","start","end","center"]},justifyContent:{control:"select",options:["space-between","start","end","center"]},id:{control:"text"},autofocus:{control:"boolean"}}},s={args:{style:{padding:"var(--db-spacing-fixed-xs)"},children:e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"dummy-component",children:e.jsx("a",{href:"#",children:"Content 1"})}),e.jsx("span",{className:"dummy-component",children:"Content 2"}),e.jsx("span",{className:"dummy-component",children:"Content 3"})]})},render:n=>e.jsxs("div",{style:{alignItems:"flex-start",alignSelf:"flex-start",display:"flex",flexDirection:"column",gap:"var(--db-spacing-fixed-sm)",width:"160px",height:"88px"},children:[e.jsx(i,{size:"small",icon:"none",semantic:"informational",children:"(Default) No Wrap: Column"}),e.jsx(a,{...n})]})},t={args:{direction:"row",style:{padding:"var(--db-spacing-fixed-xs)"},children:e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"dummy-component",children:e.jsx("a",{href:"#",children:"Content 1"})}),e.jsx("span",{className:"dummy-component",children:"Content 2"}),e.jsx("span",{className:"dummy-component",children:"Content 3"})]})},render:n=>e.jsxs("div",{style:{alignItems:"flex-start",alignSelf:"flex-start",display:"flex",flexDirection:"column",gap:"var(--db-spacing-fixed-sm)",width:"160px",height:"88px"},children:[e.jsx(i,{size:"small",icon:"none",semantic:"informational",children:"No Wrap: Row"}),e.jsx(a,{...n})]})},o={args:{style:{padding:"var(--db-spacing-fixed-xs)"},wrap:!0,children:e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"dummy-component",children:e.jsx("a",{href:"#",children:"Content 1"})}),e.jsx("span",{className:"dummy-component",children:"Content 2"}),e.jsx("span",{className:"dummy-component",children:"Content 3"})]})},render:n=>e.jsxs("div",{style:{alignItems:"flex-start",alignSelf:"flex-start",display:"flex",flexDirection:"column",gap:"var(--db-spacing-fixed-sm)",width:"160px",height:"120px"},children:[e.jsx(i,{size:"small",icon:"none",semantic:"informational",children:"Wrap: Column"}),e.jsx(a,{...n})]})},r={args:{direction:"row",style:{padding:"var(--db-spacing-fixed-xs)"},wrap:!0,children:e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"dummy-component",children:e.jsx("a",{href:"#",children:"Content 1"})}),e.jsx("span",{className:"dummy-component",children:"Content 2"}),e.jsx("span",{className:"dummy-component",children:"Content 3"})]})},render:n=>e.jsxs("div",{style:{alignItems:"flex-start",alignSelf:"flex-start",display:"flex",flexDirection:"column",gap:"var(--db-spacing-fixed-sm)",width:"180px",height:"100px"},children:[e.jsx(i,{size:"small",icon:"none",semantic:"informational",children:"Wrap: Row"}),e.jsx(a,{...n})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "style": {
      padding: 'var(--db-spacing-fixed-xs)'
    },
    "children": <><span className="dummy-component"><a href="#">Content 1</a></span><span className="dummy-component">Content 2</span><span className="dummy-component">Content 3</span></>
  },
  render: (properties: any) => <div style={{
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--db-spacing-fixed-sm)',
    width: '160px',
    height: '88px'
  }}><DBInfotext size="small" icon="none" semantic="informational">
                    (Default) No Wrap: Column
                </DBInfotext><DBStack {...properties} /></div>
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "direction": "row",
    "style": {
      padding: 'var(--db-spacing-fixed-xs)'
    },
    "children": <><span className="dummy-component"><a href="#">Content 1</a></span><span className="dummy-component">Content 2</span><span className="dummy-component">Content 3</span></>
  },
  render: (properties: any) => <div style={{
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--db-spacing-fixed-sm)',
    width: '160px',
    height: '88px'
  }}><DBInfotext size="small" icon="none" semantic="informational">
                    No Wrap: Row
                </DBInfotext><DBStack {...properties} /></div>
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "style": {
      padding: 'var(--db-spacing-fixed-xs)'
    },
    "wrap": true,
    "children": <><span className="dummy-component"><a href="#">Content 1</a></span><span className="dummy-component">Content 2</span><span className="dummy-component">Content 3</span></>
  },
  render: (properties: any) => <div style={{
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--db-spacing-fixed-sm)',
    width: '160px',
    height: '120px'
  }}><DBInfotext size="small" icon="none" semantic="informational">
                    Wrap: Column
                </DBInfotext><DBStack {...properties} /></div>
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "direction": "row",
    "style": {
      padding: 'var(--db-spacing-fixed-xs)'
    },
    "wrap": true,
    "children": <><span className="dummy-component"><a href="#">Content 1</a></span><span className="dummy-component">Content 2</span><span className="dummy-component">Content 3</span></>
  },
  render: (properties: any) => <div style={{
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--db-spacing-fixed-sm)',
    width: '180px',
    height: '100px'
  }}><DBInfotext size="small" icon="none" semantic="informational">
                    Wrap: Row
                </DBInfotext><DBStack {...properties} /></div>
}`,...r.parameters?.docs?.source}}};const h=["DefaultNoWrapColumn","NoWrapRow","WrapColumn","WrapRow"];export{s as DefaultNoWrapColumn,t as NoWrapRow,o as WrapColumn,r as WrapRow,h as __namedExportsOrder,g as default};
