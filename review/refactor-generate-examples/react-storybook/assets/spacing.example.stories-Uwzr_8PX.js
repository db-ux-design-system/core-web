import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as a}from"./section-3e8okUz6.js";import{D as i}from"./card-D9SKJ6GV.js";import"./index-cGbbigiG.js";import"./iframe-CgAvxnEq.js";import"./preload-helper-D8o24SmT.js";const{fn:S}=__STORYBOOK_MODULE_TEST__,y={title:"Components/DBSection/Spacing",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"},width:{control:"select",options:["full","medium","large","small"]},spacing:{control:"select",options:["medium","small","large","none"]},autofocus:{control:"boolean"}}},l={args:{class:"db-color-informational db-bg-color-basic-level-2",spacing:"medium",style:{display:"grid",gap:"var(--db-spacing-fixed-sm)",gridTemplateColumns:"repeat(2, minmax(0, 1fr))"},children:e.jsxs(e.Fragment,{children:[e.jsx(i,{style:{inlineSize:"100%"},children:"(Default) Medium"}),e.jsx(i,{style:{inlineSize:"100%"},children:"(Default) Medium"}),e.jsx(i,{style:{inlineSize:"100%"},children:"(Default) Medium"}),e.jsx(i,{style:{inlineSize:"100%"},children:"(Default) Medium"})]})},render:r=>e.jsx(a,{...r})},s={args:{class:"db-color-informational db-bg-color-basic-level-2",spacing:"large",style:{display:"grid",gap:"var(--db-spacing-fixed-sm)",gridTemplateColumns:"repeat(2, minmax(0, 1fr))"},children:e.jsxs(e.Fragment,{children:[e.jsx(i,{style:{inlineSize:"100%"},children:"Large"}),e.jsx(i,{style:{inlineSize:"100%"},children:"Large"}),e.jsx(i,{style:{inlineSize:"100%"},children:"Large"}),e.jsx(i,{style:{inlineSize:"100%"},children:"Large"})]})},render:r=>e.jsx(a,{...r})},n={args:{class:"db-color-informational db-bg-color-basic-level-2",spacing:"small",style:{display:"grid",gap:"var(--db-spacing-fixed-sm)",gridTemplateColumns:"repeat(2, minmax(0, 1fr))"},children:e.jsxs(e.Fragment,{children:[e.jsx(i,{style:{inlineSize:"100%"},children:"Small"}),e.jsx(i,{style:{inlineSize:"100%"},children:"Small"}),e.jsx(i,{style:{inlineSize:"100%"},children:"Small"}),e.jsx(i,{style:{inlineSize:"100%"},children:"Small"})]})},render:r=>e.jsx(a,{...r})},d={args:{class:"db-color-informational db-bg-color-basic-level-2",spacing:"none",style:{display:"grid",gap:"var(--db-spacing-fixed-sm)",gridTemplateColumns:"repeat(2, minmax(0, 1fr))"},children:e.jsxs(e.Fragment,{children:[e.jsx(i,{style:{inlineSize:"100%"},children:"None"}),e.jsx(i,{style:{inlineSize:"100%"},children:"None"}),e.jsx(i,{style:{inlineSize:"100%"},children:"None"}),e.jsx(i,{style:{inlineSize:"100%"},children:"None"})]})},render:r=>e.jsx(a,{...r})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "class": "db-color-informational db-bg-color-basic-level-2",
    "spacing": "medium",
    "style": {
      display: 'grid',
      gap: 'var(--db-spacing-fixed-sm)',
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'
    },
    "children": <><DBCard style={{
        inlineSize: '100%'
      }}>(Default) Medium</DBCard><DBCard style={{
        inlineSize: '100%'
      }}>
                    (Default) Medium
                </DBCard><DBCard style={{
        inlineSize: '100%'
      }}>(Default) Medium</DBCard><DBCard style={{
        inlineSize: '100%'
      }}>(Default) Medium</DBCard></>
  },
  render: (properties: any) => <DBSection {...properties} />
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "class": "db-color-informational db-bg-color-basic-level-2",
    "spacing": "large",
    "style": {
      display: 'grid',
      gap: 'var(--db-spacing-fixed-sm)',
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'
    },
    "children": <><DBCard style={{
        inlineSize: '100%'
      }}>Large</DBCard><DBCard style={{
        inlineSize: '100%'
      }}>Large</DBCard><DBCard style={{
        inlineSize: '100%'
      }}>Large</DBCard><DBCard style={{
        inlineSize: '100%'
      }}>Large</DBCard></>
  },
  render: (properties: any) => <DBSection {...properties} />
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "class": "db-color-informational db-bg-color-basic-level-2",
    "spacing": "small",
    "style": {
      display: 'grid',
      gap: 'var(--db-spacing-fixed-sm)',
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'
    },
    "children": <><DBCard style={{
        inlineSize: '100%'
      }}>Small</DBCard><DBCard style={{
        inlineSize: '100%'
      }}>Small</DBCard><DBCard style={{
        inlineSize: '100%'
      }}>Small</DBCard><DBCard style={{
        inlineSize: '100%'
      }}>Small</DBCard></>
  },
  render: (properties: any) => <DBSection {...properties} />
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "class": "db-color-informational db-bg-color-basic-level-2",
    "spacing": "none",
    "style": {
      display: 'grid',
      gap: 'var(--db-spacing-fixed-sm)',
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'
    },
    "children": <><DBCard style={{
        inlineSize: '100%'
      }}>None</DBCard><DBCard style={{
        inlineSize: '100%'
      }}>None</DBCard><DBCard style={{
        inlineSize: '100%'
      }}>None</DBCard><DBCard style={{
        inlineSize: '100%'
      }}>None</DBCard></>
  },
  render: (properties: any) => <DBSection {...properties} />
}`,...d.parameters?.docs?.source}}};const D=["DefaultMedium","Large","Small","None"];export{l as DefaultMedium,s as Large,d as None,n as Small,D as __namedExportsOrder,y as default};
