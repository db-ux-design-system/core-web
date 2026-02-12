import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as t}from"./stack-LANnt-yi.js";import{D as r}from"./infotext-CZi0xQss.js";import{D as o}from"./divider-DAwGuVq7.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";const{fn:f}=__STORYBOOK_MODULE_TEST__,g={title:"Components/DBStack/Variant",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["simple","divider"]},gap:{control:"select",options:["none","3x-large","2x-large","x-large","large","medium","small","x-small","2x-small","3x-small"]},direction:{control:"select",options:["row","column"]},wrap:{control:"boolean"},alignment:{control:"select",options:["stretch","start","end","center"]},justifyContent:{control:"select",options:["space-between","start","end","center"]},id:{control:"text"},autofocus:{control:"boolean"}}},n={args:{style:{padding:"var(--db-spacing-fixed-xs)"},children:e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"dummy-component",children:e.jsx("a",{href:"#",children:"Content 1"})}),e.jsx("span",{className:"dummy-component",children:"Content 2"}),e.jsx("span",{className:"dummy-component",children:"Content 3"})]})},render:s=>e.jsxs("div",{style:{alignItems:"flex-start",alignSelf:"flex-start",display:"flex",flexDirection:"column",gap:"var(--db-spacing-fixed-sm)",width:"200px"},children:[e.jsx(r,{size:"small",icon:"none",semantic:"informational",children:"(Default) Simple"}),e.jsx(t,{...s})]})},a={args:{variant:"divider",style:{padding:"var(--db-spacing-fixed-xs)"},children:e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"dummy-component",children:e.jsx("a",{href:"#",children:"Content 1"})}),e.jsx(o,{}),e.jsx("span",{className:"dummy-component",children:"Content 2"}),e.jsx(o,{}),e.jsx("span",{className:"dummy-component",children:"Content 3"})]})},render:s=>e.jsxs("div",{style:{alignItems:"flex-start",alignSelf:"flex-start",display:"flex",flexDirection:"column",gap:"var(--db-spacing-fixed-sm)",width:"200px"},children:[e.jsx(r,{size:"small",icon:"none",semantic:"informational",children:"Divider"}),e.jsx(t,{...s})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
    width: '200px'
  }}><DBInfotext size="small" icon="none" semantic="informational">
                    (Default) Simple
                </DBInfotext><DBStack {...properties} /></div>
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "divider",
    "style": {
      padding: 'var(--db-spacing-fixed-xs)'
    },
    "children": <><span className="dummy-component"><a href="#">Content 1</a></span><DBDivider /><span className="dummy-component">Content 2</span><DBDivider /><span className="dummy-component">Content 3</span></>
  },
  render: (properties: any) => <div style={{
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--db-spacing-fixed-sm)',
    width: '200px'
  }}><DBInfotext size="small" icon="none" semantic="informational">
                    Divider
                </DBInfotext><DBStack {...properties} /></div>
}`,...a.parameters?.docs?.source}}};const u=["DefaultSimple","Divider"];export{n as DefaultSimple,a as Divider,u as __namedExportsOrder,g as default};
