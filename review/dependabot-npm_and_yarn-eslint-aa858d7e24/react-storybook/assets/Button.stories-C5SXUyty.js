import{r as S}from"./iframe-CtFs2DIz.js";import"./preload-helper-D9_21xSP.js";var g={exports:{}},t={};var x;function h(){if(x)return t;x=1;var i=S(),c=Symbol.for("react.element"),m=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,d=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function _(o,e,b){var r,a={},y=null,v=null;b!==void 0&&(y=""+b),e.key!==void 0&&(y=""+e.key),e.ref!==void 0&&(v=e.ref);for(r in e)p.call(e,r)&&!f.hasOwnProperty(r)&&(a[r]=e[r]);if(o&&o.defaultProps)for(r in e=o.defaultProps,e)a[r]===void 0&&(a[r]=e[r]);return{$$typeof:c,type:o,key:y,ref:v,props:a,_owner:d.current}}return t.Fragment=m,t.jsx=_,t.jsxs=_,t}var R;function B(){return R||(R=1,g.exports=h()),g.exports}var O=B();const k=({primary:i=!1,size:c="medium",backgroundColor:m,label:p,...d})=>{const f=i?"storybook-button--primary":"storybook-button--secondary";return O.jsx("button",{type:"button",className:["storybook-button",`storybook-button--${c}`,f].join(" "),style:{backgroundColor:m},...d,children:p})};k.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"Button",props:{primary:{required:!1,tsType:{name:"boolean"},description:"Is this the principal call to action on the page?",defaultValue:{value:"false",computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:"What background color to use"},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"How large should the button be?",defaultValue:{value:"'medium'",computed:!1}},label:{required:!0,tsType:{name:"string"},description:"Button contents"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Optional click handler"}}};const{fn:T}=__STORYBOOK_MODULE_TEST__,j={title:"Example/Button",component:k,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},args:{onClick:T()}},n={args:{primary:!0,label:"Button"}},s={args:{label:"Button"}},u={args:{size:"large",label:"Button"}},l={args:{size:"small",label:"Button"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Button'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Button'
  }
}`,...s.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Button'
  }
}`,...u.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'Button'
  }
}`,...l.parameters?.docs?.source}}};const w=["Primary","Secondary","Large","Small"];export{u as Large,n as Primary,s as Secondary,l as Small,w as __namedExportsOrder,j as default};
