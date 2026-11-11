import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./button-C7wmd2sM.js";import{n as a,t as o}from"./card-CdnpFkdU.js";import{n as s,r as c}from"./examples-C_A8MI0i.js";import{n as l,t as u}from"./icon-B6kiHYYB.js";var d=t({Sizing:()=>b,SpacingFixed:()=>v,SpacingResponsive:()=>y,__namedExportsOrder:()=>x,default:()=>_}),f,p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{r(),a(),l(),c(),f=n(),p=[`functional`,`regular`,`expressive`],m=e=>`${e.charAt(0).toUpperCase()}${e.slice(1)}`,h=({children:e})=>(0,f.jsx)(`div`,{className:`foundations-density-grid`,children:p.map(t=>(0,f.jsxs)(o,{"data-density":t,spacing:`small`,children:[(0,f.jsx)(s,{icon:`none`,semantic:`informational`,children:m(t)}),e]},t))}),g=({variable:e})=>(0,f.jsx)(`div`,{className:`foundations-variable-box`,"data-variable":e,"aria-hidden":`true`}),_={title:`Foundations Examples/Variables`,tags:[`!dev`,`!autodocs`],parameters:{docs:{canvas:{sourceState:`none`}}}},v={render:()=>(0,f.jsxs)(h,{children:[(0,f.jsxs)(`div`,{className:`foundations-variable-row`,children:[(0,f.jsx)(u,{icon:`x_placeholder`,children:`User`}),(0,f.jsx)(g,{variable:`spacing-fixed-xl`}),(0,f.jsx)(u,{icon:`pen`,children:`Edit`})]}),(0,f.jsx)(`code`,{children:`--db-spacing-fixed-xl`})]})},y={render:()=>(0,f.jsxs)(h,{children:[(0,f.jsxs)(`div`,{className:`foundations-variable-row`,children:[(0,f.jsx)(g,{variable:`spacing-responsive-sm`}),(0,f.jsx)(`span`,{children:`content`}),(0,f.jsx)(g,{variable:`spacing-responsive-sm`})]}),(0,f.jsx)(`code`,{children:`--db-spacing-responsive-sm`})]})},b={render:()=>(0,f.jsxs)(h,{children:[(0,f.jsxs)(`div`,{className:`foundations-variable-row`,children:[(0,f.jsx)(i,{children:`Button`}),(0,f.jsx)(`div`,{className:`foundations-variable-sizing`,"aria-hidden":`true`})]}),(0,f.jsx)(`code`,{children:`--db-sizing-md`})]})},x=[`SpacingFixed`,`SpacingResponsive`,`Sizing`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <PerDensity>
            <div className="foundations-variable-row">
                <DBIcon icon="x_placeholder">User</DBIcon>
                <Box variable="spacing-fixed-xl" />
                <DBIcon icon="pen">Edit</DBIcon>
            </div>
            <code>--db-spacing-fixed-xl</code>
        </PerDensity>
}`,...v.parameters?.docs?.source},description:{story:"`gap: var(--db-spacing-fixed-xl)` between two icons.",...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <PerDensity>
            <div className="foundations-variable-row">
                <Box variable="spacing-responsive-sm" />
                <span>content</span>
                <Box variable="spacing-responsive-sm" />
            </div>
            <code>--db-spacing-responsive-sm</code>
        </PerDensity>
}`,...y.parameters?.docs?.source},description:{story:"`margin-inline: var(--db-spacing-responsive-sm)`, also changes with the viewport.",...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <PerDensity>
            <div className="foundations-variable-row">
                <DBButton>Button</DBButton>
                <div className="foundations-variable-sizing" aria-hidden="true" />
            </div>
            <code>--db-sizing-md</code>
        </PerDensity>
}`,...b.parameters?.docs?.source},description:{story:"`--db-sizing-md`, the height of a medium button.",...b.parameters?.docs?.description}}}})))()}export{d as a,S as i,v as n,y as r,b as t};