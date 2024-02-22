import{r as t,j as h}from"./app-qgDmQCzW.js";import{t as T,m as V,u as D,c as E,d as P,f as K}from"./Cabecera-eBSfN-w_.js";var L=T({slots:{wrapper:"relative shadow-black/5",zoomedWrapper:"relative overflow-hidden rounded-inherit",img:"relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100",blurredImg:["absolute","z-0","inset-0","w-full","h-full","object-cover","filter","blur-lg","scale-105","saturate-150","opacity-30","translate-y-1"]},variants:{radius:{none:{},sm:{},md:{},lg:{},full:{}},shadow:{none:{wrapper:"shadow-none",img:"shadow-none"},sm:{wrapper:"shadow-small",img:"shadow-small"},md:{wrapper:"shadow-medium",img:"shadow-medium"},lg:{wrapper:"shadow-large",img:"shadow-large"}},isZoomed:{true:{img:["object-cover","transform","hover:scale-125"]}},showSkeleton:{true:{wrapper:["group","relative","overflow-hidden","bg-content3 dark:bg-content2","before:opacity-100","before:absolute","before:inset-0","before:-translate-x-full","before:animate-[shimmer_2s_infinite]","before:border-t","before:border-content4/30","before:bg-gradient-to-r","before:from-transparent","before:via-content4","dark:before:via-default-700/10","before:to-transparent","after:opacity-100","after:absolute","after:inset-0","after:-z-10","after:bg-content3","dark:after:bg-content2"],img:"opacity-0"}},disableAnimation:{true:{img:"transition-none"},false:{img:"transition-transform-opacity motion-reduce:transition-none !duration-300"}}},defaultVariants:{radius:"lg",shadow:"none",isZoomed:!1,isBlurred:!1,showSkeleton:!1,disableAnimation:!1},compoundSlots:[{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"none",class:"rounded-none"},{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"full",class:"rounded-full"},{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"sm",class:"rounded-small"},{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"md",class:"rounded-md"},{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"lg",class:"rounded-large"}]}),U=globalThis!=null&&globalThis.document?t.useLayoutEffect:t.useEffect;function q(b={}){const{loading:o,src:n,srcSet:c,onLoad:p,onError:a,crossOrigin:f,sizes:e,ignoreFallback:i}=b,[g,s]=t.useState("pending");t.useEffect(()=>{s(n?"loading":"pending")},[n]);const l=t.useRef(),d=t.useCallback(()=>{if(!n)return;u();const r=new Image;r.src=n,f&&(r.crossOrigin=f),c&&(r.srcset=c),e&&(r.sizes=e),o&&(r.loading=o),r.onload=m=>{u(),s("loaded"),p==null||p(m)},r.onerror=m=>{u(),s("failed"),a==null||a(m)},l.current=r},[n,f,c,e,p,a,o]),u=()=>{l.current&&(l.current.onload=null,l.current.onerror=null,l.current=null)};return U(()=>{if(!i)return g==="loading"&&d(),()=>{u()}},[g,d,i]),i?"loaded":g}function G(b){const[o,n]=V(b,L.variantKeys),{ref:c,as:p,src:a,className:f,classNames:e,loading:i,isBlurred:g,fallbackSrc:s,isLoading:l,disableSkeleton:d=!!s,removeWrapper:u=!1,onError:r,onLoad:m,srcSet:I,sizes:k,crossOrigin:y,...B}=o,S=q({src:a,loading:i,onError:r,onLoad:m,ignoreFallback:!1,srcSet:I,sizes:k,crossOrigin:y}),z=S==="loaded"&&!l,x=S==="loading"||l,C=b.isZoomed,O=p||"img",W=D(c),{w:Z}=t.useMemo(()=>({w:o.width?typeof o.width=="number"?`${o.width}px`:o.width:"fit-content"}),[o==null?void 0:o.width]),N=(!a||!z)&&!!s,j=x&&!d,w=t.useMemo(()=>L({...n,showSkeleton:j}),[...Object.values(n),j]),$=E(f,e==null?void 0:e.img),A=(v={})=>{const _=E($,v==null?void 0:v.className);return{src:a,ref:W,"data-loaded":P(z),className:w.img({class:_}),loading:i,srcSet:I,sizes:k,crossOrigin:y,...B}},F=t.useCallback(()=>{const v=N?{backgroundImage:`url(${s})`}:{};return{className:w.wrapper({class:e==null?void 0:e.wrapper}),style:{...v,maxWidth:Z}}},[w,N,s,e==null?void 0:e.wrapper]),M=t.useCallback(()=>({src:a,"aria-hidden":P(!0),className:w.blurredImg({class:e==null?void 0:e.blurredImg})}),[w,a,e==null?void 0:e.blurredImg]);return{Component:O,domRef:W,slots:w,classNames:e,isBlurred:g,disableSkeleton:d,fallbackSrc:s,removeWrapper:u,isZoomed:C,isLoading:x,getImgProps:A,getWrapperProps:F,getBlurredImgProps:M}}var R=K((b,o)=>{const{Component:n,domRef:c,slots:p,classNames:a,isBlurred:f,isZoomed:e,fallbackSrc:i,removeWrapper:g,disableSkeleton:s,getImgProps:l,getWrapperProps:d,getBlurredImgProps:u}=G({...b,ref:o}),r=h.jsx(n,{ref:c,...l()});if(g)return r;const m=h.jsx("div",{className:p.zoomedWrapper({class:a==null?void 0:a.zoomedWrapper}),children:r});return f?h.jsxs("div",{...d(),children:[e?m:r,t.cloneElement(r,u())]}):e||!s||i?h.jsxs("div",{...d(),children:[" ",e?m:r]}):r});R.displayName="NextUI.Image";var Q=R;export{Q as i};