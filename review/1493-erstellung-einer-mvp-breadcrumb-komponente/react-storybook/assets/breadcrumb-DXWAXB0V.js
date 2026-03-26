import{j as n}from"./jsx-runtime-u17CrQMm.js";import{a as w,c as k,g as x,f as T,p as L}from"./index-B7He6KvY.js";import{r as i}from"./iframe-Dz5uaCij.js";import{D as l}from"./breadcrumb-item-BkNPxWa1.js";function z(e,d){e={size:"small",separator:"chevron",ariaLabel:"Breadcrumb",ellipsisAriaLabel:"Expand to show all breadcrumb items",...e};const f=i.useId(),b=d||i.useRef(d),[h,p]=i.useState(()=>{});function c(){return e.id?`${e.id}-list`:h??""}const[s,g]=i.useState(()=>!1);function y(){g(!s)}function t(){return L(e.items)}function v(){const a=t(),r=e.maxItems??0;return a.length>0&&r>0&&a.length>r&&!s}function m(){const a=t(),r=e.maxItems??0,u=r>0?r-1:0;return u>0?a.slice(a.length-u):[]}function o(a,r){return r?a.ariaCurrent??"page":void 0}return i.useEffect(()=>{p(`db-breadcrumb-list-${f}`)},[]),n.jsx("nav",{ref:b,...T(e,["data-icon-variant","data-icon-variant-before","data-icon-variant-after","data-icon-weight","data-icon-weight-before","data-icon-weight-after","data-interactive","data-force-mobile","data-color","data-container-color","data-bg-color","data-on-bg-color","data-color-scheme","data-font-size","data-headline-size","data-divider","data-focus","data-font","data-density"]),id:e.id,"aria-label":e.ariaLabel,...x(e,["data-icon-variant","data-icon-variant-before","data-icon-variant-after","data-icon-weight","data-icon-weight-before","data-icon-weight-after","data-interactive","data-force-mobile","data-color","data-container-color","data-bg-color","data-on-bg-color","data-color-scheme","data-font-size","data-headline-size","data-divider","data-focus","data-font","data-density"]),className:k("db-breadcrumb",e.className),"data-size":e.size,"data-separator":e.separator,children:n.jsx("ol",{className:"db-breadcrumb-list",id:c(),children:t().length>0?n.jsx(n.Fragment,{children:v()?n.jsxs(n.Fragment,{children:[t()[0]?n.jsx(l,{className:t()[0].className,size:e.size,href:t()[0].href,ariaCurrent:o(t()[0],t().length===1),icon:t()[0].icon,text:t()[0].text},0):null,n.jsx("li",{className:"db-breadcrumb-item",children:n.jsx("button",{type:"button",className:"db-breadcrumb-ellipsis","aria-label":e.ellipsisAriaLabel??"Expand to show all breadcrumb items",title:e.ellipsisAriaLabel??"Expand to show all breadcrumb items","aria-expanded":w(s),"aria-controls":c(),onClick:a=>y(),children:"…"})},"ellipsis"),m()?.map((a,r)=>n.jsx(l,{className:a.className,size:e.size,href:a.href,ariaCurrent:o(a,r===m().length-1),icon:a.icon,text:a.text},r))]}):n.jsx(n.Fragment,{children:t()?.map((a,r)=>n.jsx(l,{className:a.className,size:e.size,href:a.href,ariaCurrent:o(a,r===t().length-1),icon:a.icon,text:a.text},r))})}):n.jsx(n.Fragment,{children:e.children})})})}const I=i.forwardRef(z);I.__docgenInfo={description:"",methods:[],displayName:"DBBreadcrumb",props:{size:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof BreadcrumbSizeList)[number]"},description:"The size of the breadcrumb items.\n\nOptions: `small`, `medium`.\nDefault: `small`."},separator:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof BreadcrumbSeparatorList)[number]"},description:"The separator shown between breadcrumb items.\n\nOptions: `chevron`, `slash`.\nDefault: `chevron`."},maxItems:{required:!1,tsType:{name:"number"},description:`Maximum number of items to display before collapsing.

If the number of \`items\` exceeds this value, the middle items collapse
into an ellipsis entry that can be expanded by the user.`},ellipsisAriaLabel:{required:!1,tsType:{name:"string"},description:"Aria label for the ellipsis button in collapsed view.\n\nDefault: `Expand to show all breadcrumb items`."},items:{required:!1,tsType:{name:"union",raw:"DBBreadcrumbItems[] | string",elements:[{name:"Array",elements:[{name:"intersection",raw:"DBBreadcrumbItemDefaultProps & GlobalProps",elements:[{name:"intersection",raw:`LinkProps & {
  /**
   * The text content of the breadcrumb item
   */
  text?: string;

  /**
   * Icon name from DB UX icon library
   */
  icon?: string;

  /**
   * Indicates the current page in the breadcrumb
   */
  ariaCurrent?: AriaCurrent;

  /**
   * Size of the breadcrumb item
   */
  size?: 'small' | 'medium';
}`,elements:[{name:"signature",type:"object",raw:`{
  /**
   * Disables the link.
   */
  disabled?: boolean | string;
  /**
   * The [URL that the hyperlink points to](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#href).
   */
  href?: string;
  /**
   * Hints for the human [language of the linked page or document](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#hreflang).
   */
  hreflang?: string;
  /**
   * Where to open the linked URL, as the name for a [browsing context](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#target).
   */
  target?: LinkTargetType;
  /**
   * The relationship of the linked URL as space-separated link types.
   */
  rel?: string;
  /**
   * How much of the referrer to send when following the link.
   * @deprecated use \`referrerPolicy\` instead
   */
  referrerpolicy?: LinkReferrerPolicyType;
  /**
   * How much of the referrer to send when following the link.
   */
  referrerPolicy?: LinkReferrerPolicyType;
}`,signature:{properties:[{key:"disabled",value:{name:"union",raw:"boolean | string",elements:[{name:"boolean"},{name:"string"}],required:!1},description:"Disables the link."},{key:"href",value:{name:"string",required:!1},description:"The [URL that the hyperlink points to](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#href)."},{key:"hreflang",value:{name:"string",required:!1},description:"Hints for the human [language of the linked page or document](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#hreflang)."},{key:"target",value:{name:"unknown[number]",raw:"(typeof LinkTargetList)[number]",required:!1},description:"Where to open the linked URL, as the name for a [browsing context](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#target)."},{key:"rel",value:{name:"string",required:!1},description:"The relationship of the linked URL as space-separated link types."},{key:"referrerpolicy",value:{name:"unknown[number]",raw:"(typeof LinkReferrerPolicyList)[number]",required:!1},description:"How much of the referrer to send when following the link.\n@deprecated use `referrerPolicy` instead"},{key:"referrerPolicy",value:{name:"unknown[number]",raw:"(typeof LinkReferrerPolicyList)[number]",required:!1},description:"How much of the referrer to send when following the link."}]}},{name:"signature",type:"object",raw:`{
  /**
   * The text content of the breadcrumb item
   */
  text?: string;

  /**
   * Icon name from DB UX icon library
   */
  icon?: string;

  /**
   * Indicates the current page in the breadcrumb
   */
  ariaCurrent?: AriaCurrent;

  /**
   * Size of the breadcrumb item
   */
  size?: 'small' | 'medium';
}`,signature:{properties:[{key:"text",value:{name:"string",required:!1},description:"The text content of the breadcrumb item"},{key:"icon",value:{name:"string",required:!1},description:"Icon name from DB UX icon library"},{key:"ariaCurrent",value:{name:"union",raw:"'page' | 'step' | 'location' | 'date' | 'time' | 'true' | 'false'",elements:[{name:"literal",value:"'page'"},{name:"literal",value:"'step'"},{name:"literal",value:"'location'"},{name:"literal",value:"'date'"},{name:"literal",value:"'time'"},{name:"literal",value:"'true'"},{name:"literal",value:"'false'"}],required:!1},description:"Indicates the current page in the breadcrumb"},{key:"size",value:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}],required:!1},description:"Size of the breadcrumb item"}]}}]},{name:"GlobalProps"}]}],raw:"DBBreadcrumbItems[]"},{name:"string"}]},description:`The breadcrumb items to render.

Each item can represent a link or the current page.

Supports passing a JSON string (for web component usage) or an array of
\`DBBreadcrumbItems\`.`},ariaLabel:{required:!1,tsType:{name:"string"},description:"Aria label for the breadcrumb navigation landmark.\n\nDefault: `Breadcrumb`."},children:{required:!1,tsType:{name:"any"},description:"default slot"},className:{required:!1,tsType:{name:"string"},description:"React specific for adding className to the component."},class:{required:!1,tsType:{name:"union",raw:"string | any",elements:[{name:"string"},{name:"any"}]},description:"Workaround for TypeScript using class for all components."},id:{required:!1,tsType:{name:"string"},description:"[ID](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id) of the component, generated automatically for some components as a fallback if unset."},autofocus:{required:!1,tsType:{name:"union",raw:"boolean | string",elements:[{name:"boolean"},{name:"string"}]},description:"Before using please check for the [accessibility concerns](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autofocus#accessibility_concerns)"},propOverrides:{required:!1,tsType:{name:"Pick",elements:[{name:"GlobalProps"},{name:"literal",value:"'id'"}],raw:"Pick<GlobalProps, 'id'>"},description:"Allows overriding specific props on nested elements or internal component structure. Currently only supports propOverrides.id"}}};export{I as D};
