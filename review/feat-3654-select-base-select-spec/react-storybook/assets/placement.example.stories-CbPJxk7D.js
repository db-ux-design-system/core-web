import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./badge-DjgFuiB1.js";import{n as a,t as o}from"./button-HiccZljf.js";import{n as s,t as c}from"./infotext-BrqREugs.js";import{n as l,t as u}from"./icon-CWm84KeR.js";var d=t({CornerBottomLeft:()=>v,CornerBottomRight:()=>x,CornerCenterLeft:()=>_,CornerCenterRight:()=>b,CornerTopLeft:()=>g,CornerTopRight:()=>y,DefaultInline:()=>h,__namedExportsOrder:()=>S,default:()=>m}),f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{a(),l(),s(),r(),f=n(),{fn:p}=__STORYBOOK_MODULE_TEST__,m={title:`Components/DBBadge/Placement`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{emphasis:{control:`select`,options:[`weak`,`strong`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},size:{control:`select`,options:[`small`,`medium`]},placement:{control:`select`,options:[`inline`,`corner-top-left`,`corner-top-right`,`corner-center-left`,`corner-center-right`,`corner-bottom-left`,`corner-bottom-right`]},label:{control:`text`},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},h={args:{size:`small`,emphasis:`strong`,semantic:`critical`,children:`Label`},render:e=>(0,f.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`var(--db-spacing-fixed-sm)`,padding:`var(--db-spacing-fixed-xs) var(--db-spacing-fixed-sm)`,backgroundColor:`var(--db-adaptive-bg-basic-level-2-default)`},children:[(0,f.jsx)(`span`,{"data-icon":`x_placeholder`,children:`(Default) Inline`}),(0,f.jsx)(i,{...e}),(0,f.jsx)(u,{icon:`error`})]})},g={args:{size:`small`,emphasis:`strong`,semantic:`critical`,placement:`corner-top-left`},render:e=>(0,f.jsxs)(`div`,{children:[(0,f.jsxs)(o,{"data-sb-decorator":`true`,icon:`x_placeholder`,variant:`outlined`,noText:!0,children:[(0,f.jsx)(i,{...e}),`Corner - Top - Left`]}),(0,f.jsx)(c,{size:`small`,semantic:`informational`,icon:`none`,children:`Corner - Top - Left`})]})},_={args:{size:`small`,emphasis:`strong`,semantic:`critical`,placement:`corner-center-left`},render:e=>(0,f.jsxs)(`div`,{children:[(0,f.jsxs)(o,{"data-sb-decorator":`true`,icon:`x_placeholder`,variant:`outlined`,noText:!0,children:[(0,f.jsx)(i,{...e}),`Corner - Center - Left`]}),(0,f.jsx)(c,{size:`small`,semantic:`informational`,icon:`none`,children:`Corner - Center - Left`})]})},v={args:{size:`small`,emphasis:`strong`,semantic:`critical`,placement:`corner-bottom-left`},render:e=>(0,f.jsxs)(`div`,{children:[(0,f.jsxs)(o,{"data-sb-decorator":`true`,icon:`x_placeholder`,variant:`outlined`,noText:!0,children:[(0,f.jsx)(i,{...e}),`Corner - Bottom- Left`]}),(0,f.jsx)(c,{size:`small`,semantic:`informational`,icon:`none`,children:`Corner - Bottom- Left`})]})},y={args:{size:`small`,emphasis:`strong`,semantic:`critical`,placement:`corner-top-right`},render:e=>(0,f.jsxs)(`div`,{children:[(0,f.jsxs)(o,{"data-sb-decorator":`true`,icon:`x_placeholder`,variant:`outlined`,noText:!0,children:[(0,f.jsx)(i,{...e}),`Corner - Top - Right`]}),(0,f.jsx)(c,{size:`small`,semantic:`informational`,icon:`none`,children:`Corner - Top - Right`})]})},b={args:{size:`small`,emphasis:`strong`,semantic:`critical`,placement:`corner-center-right`},render:e=>(0,f.jsxs)(`div`,{children:[(0,f.jsxs)(o,{"data-sb-decorator":`true`,icon:`x_placeholder`,variant:`outlined`,noText:!0,children:[(0,f.jsx)(i,{...e}),`Corner - Center - Right`]}),(0,f.jsx)(c,{size:`small`,semantic:`informational`,icon:`none`,children:`Corner - Center - Right`})]})},x={args:{size:`small`,emphasis:`strong`,semantic:`critical`,placement:`corner-bottom-right`},render:e=>(0,f.jsxs)(`div`,{children:[(0,f.jsxs)(o,{"data-sb-decorator":`true`,icon:`x_placeholder`,variant:`outlined`,noText:!0,children:[(0,f.jsx)(i,{...e}),`Corner - Bottom- Right`]}),(0,f.jsx)(c,{size:`small`,semantic:`informational`,icon:`none`,children:`Corner - Bottom- Right`})]})},S=[`DefaultInline`,`CornerTopLeft`,`CornerCenterLeft`,`CornerBottomLeft`,`CornerTopRight`,`CornerCenterRight`,`CornerBottomRight`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "small",
    "emphasis": "strong",
    "semantic": "critical",
    "children": "Label"
  },
  render: (properties: any) => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--db-spacing-fixed-sm)',
    padding: 'var(--db-spacing-fixed-xs) var(--db-spacing-fixed-sm)',
    backgroundColor: 'var(--db-adaptive-bg-basic-level-2-default)'
  }}><span data-icon="x_placeholder">(Default) Inline</span><DBBadge {...properties} /><DBIcon icon="error" /></div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "small",
    "emphasis": "strong",
    "semantic": "critical",
    "placement": "corner-top-left"
  },
  render: (properties: any) => <div><DBButton data-sb-decorator="true" icon="x_placeholder" variant="outlined" noText><DBBadge {...properties} />
                    Corner - Top - Left
                </DBButton><DBInfotext size="small" semantic="informational" icon="none">
                    Corner - Top - Left
                </DBInfotext></div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "small",
    "emphasis": "strong",
    "semantic": "critical",
    "placement": "corner-center-left"
  },
  render: (properties: any) => <div><DBButton data-sb-decorator="true" icon="x_placeholder" variant="outlined" noText><DBBadge {...properties} />
                    Corner - Center - Left
                </DBButton><DBInfotext size="small" semantic="informational" icon="none">
                    Corner - Center - Left
                </DBInfotext></div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "small",
    "emphasis": "strong",
    "semantic": "critical",
    "placement": "corner-bottom-left"
  },
  render: (properties: any) => <div><DBButton data-sb-decorator="true" icon="x_placeholder" variant="outlined" noText><DBBadge {...properties} />
                    Corner - Bottom- Left
                </DBButton><DBInfotext size="small" semantic="informational" icon="none">
                    Corner - Bottom- Left
                </DBInfotext></div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "small",
    "emphasis": "strong",
    "semantic": "critical",
    "placement": "corner-top-right"
  },
  render: (properties: any) => <div><DBButton data-sb-decorator="true" icon="x_placeholder" variant="outlined" noText><DBBadge {...properties} />
                    Corner - Top - Right
                </DBButton><DBInfotext size="small" semantic="informational" icon="none">
                    Corner - Top - Right
                </DBInfotext></div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "small",
    "emphasis": "strong",
    "semantic": "critical",
    "placement": "corner-center-right"
  },
  render: (properties: any) => <div><DBButton data-sb-decorator="true" icon="x_placeholder" variant="outlined" noText><DBBadge {...properties} />
                    Corner - Center - Right
                </DBButton><DBInfotext size="small" semantic="informational" icon="none">
                    Corner - Center - Right
                </DBInfotext></div>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    "size": "small",
    "emphasis": "strong",
    "semantic": "critical",
    "placement": "corner-bottom-right"
  },
  render: (properties: any) => <div><DBButton data-sb-decorator="true" icon="x_placeholder" variant="outlined" noText><DBBadge {...properties} />
                    Corner - Bottom- Right
                </DBButton><DBInfotext size="small" semantic="informational" icon="none">
                    Corner - Bottom- Right
                </DBInfotext></div>
}`,...x.parameters?.docs?.source}}}})))()}export{g as a,C as c,b as i,d as l,x as n,y as o,_ as r,h as s,v as t};