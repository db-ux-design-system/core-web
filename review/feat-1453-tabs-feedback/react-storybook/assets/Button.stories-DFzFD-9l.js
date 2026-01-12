var p={exports:{}},t={};var g;function f(){if(g)return t;g=1;var u=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function a(c,e,r){var m=null;if(r!==void 0&&(m=""+r),e.key!==void 0&&(m=""+e.key),"key"in e){r={};for(var d in e)d!=="key"&&(r[d]=e[d])}else r=e;return e=r.ref,{$$typeof:u,type:c,key:m,ref:e!==void 0?e:null,props:r}}return t.Fragment=i,t.jsx=a,t.jsxs=a,t}var y;function x(){return y||(y=1,p.exports=f()),p.exports}var v=x();const b=({primary:u=!1,size:i="medium",backgroundColor:a,label:c,...e})=>{const r=u?"storybook-button--primary":"storybook-button--secondary";return v.jsx("button",{type:"button",className:["storybook-button",`storybook-button--${i}`,r].join(" "),style:{backgroundColor:a},...e,children:c})};b.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"Button",props:{primary:{required:!1,tsType:{name:"boolean"},description:"Is this the principal call to action on the page?",defaultValue:{value:"false",computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:"What background color to use"},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"How large should the button be?",defaultValue:{value:"'medium'",computed:!1}},label:{required:!0,tsType:{name:"string"},description:"Button contents"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Optional click handler"}}};const{fn:_}=__STORYBOOK_MODULE_TEST__,k={title:"Example/Button",component:b,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},args:{onClick:_()}},o={args:{primary:!0,label:"Button"}},s={args:{label:"Button"}},n={args:{size:"large",label:"Button"}},l={args:{size:"small",label:"Button"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Button'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Button'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Button'
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'Button'
  }
}`,...l.parameters?.docs?.source}}};const R=["Primary","Secondary","Large","Small"];export{n as Large,o as Primary,s as Secondary,l as Small,R as __namedExportsOrder,k as default};
