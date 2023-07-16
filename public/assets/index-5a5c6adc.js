import{c as ut,g as ct,n as D,h as G,R as B,j as d,z as U,u as dt,a as lt,b as ht,L as ft,p as mt,d as pt,e as $t}from"./index-5d4e164c.js";var st={exports:{}};(function(r,k){(function(_,M){r.exports=M()})(ut,function(){var _=1e3,M=6e4,H=36e5,L="millisecond",w="second",S="minute",b="hour",f="day",h="week",p="month",j="quarter",g="year",v="date",T="Invalid Date",N=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,it=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,ot={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(s){var n=["th","st","nd","rd"],t=s%100;return"["+s+(n[(t-20)%10]||n[t]||n[0])+"]"}},J=function(s,n,t){var i=String(s);return!i||i.length>=n?s:""+Array(n+1-i.length).join(t)+s},at={s:J,z:function(s){var n=-s.utcOffset(),t=Math.abs(n),i=Math.floor(t/60),e=t%60;return(n<=0?"+":"-")+J(i,2,"0")+":"+J(e,2,"0")},m:function s(n,t){if(n.date()<t.date())return-s(t,n);var i=12*(t.year()-n.year())+(t.month()-n.month()),e=n.clone().add(i,p),a=t-e<0,o=n.clone().add(i+(a?-1:1),p);return+(-(i+(t-e)/(a?e-o:o-e))||0)},a:function(s){return s<0?Math.ceil(s)||0:Math.floor(s)},p:function(s){return{M:p,y:g,w:h,d:f,D:v,h:b,m:S,s:w,ms:L,Q:j}[s]||String(s||"").toLowerCase().replace(/s$/,"")},u:function(s){return s===void 0}},W="en",Y={};Y[W]=ot;var P=function(s){return s instanceof E},V=function s(n,t,i){var e;if(!n)return W;if(typeof n=="string"){var a=n.toLowerCase();Y[a]&&(e=a),t&&(Y[a]=t,e=a);var o=n.split("-");if(!e&&o.length>1)return s(o[0])}else{var c=n.name;Y[c]=n,e=c}return!i&&e&&(W=e),e||!i&&W},$=function(s,n){if(P(s))return s.clone();var t=typeof n=="object"?n:{};return t.date=s,t.args=arguments,new E(t)},u=at;u.l=V,u.i=P,u.w=function(s,n){return $(s,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var E=function(){function s(t){this.$L=V(t.locale,null,!0),this.parse(t)}var n=s.prototype;return n.parse=function(t){this.$d=function(i){var e=i.date,a=i.utc;if(e===null)return new Date(NaN);if(u.u(e))return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){var o=e.match(N);if(o){var c=o[2]-1||0,m=(o[7]||"0").substring(0,3);return a?new Date(Date.UTC(o[1],c,o[3]||1,o[4]||0,o[5]||0,o[6]||0,m)):new Date(o[1],c,o[3]||1,o[4]||0,o[5]||0,o[6]||0,m)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},n.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},n.$utils=function(){return u},n.isValid=function(){return this.$d.toString()!==T},n.isSame=function(t,i){var e=$(t);return this.startOf(i)<=e&&e<=this.endOf(i)},n.isAfter=function(t,i){return $(t)<this.startOf(i)},n.isBefore=function(t,i){return this.endOf(i)<$(t)},n.$g=function(t,i,e){return u.u(t)?this[i]:this.set(e,t)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(t,i){var e=this,a=!!u.u(i)||i,o=u.p(t),c=function(z,y){var A=u.w(e.$u?Date.UTC(e.$y,y,z):new Date(e.$y,y,z),e);return a?A:A.endOf(f)},m=function(z,y){return u.w(e.toDate()[z].apply(e.toDate("s"),(a?[0,0,0,0]:[23,59,59,999]).slice(y)),e)},l=this.$W,x=this.$M,C=this.$D,O="set"+(this.$u?"UTC":"");switch(o){case g:return a?c(1,0):c(31,11);case p:return a?c(1,x):c(0,x+1);case h:var I=this.$locale().weekStart||0,F=(l<I?l+7:l)-I;return c(a?C-F:C+(6-F),x);case f:case v:return m(O+"Hours",0);case b:return m(O+"Minutes",1);case S:return m(O+"Seconds",2);case w:return m(O+"Milliseconds",3);default:return this.clone()}},n.endOf=function(t){return this.startOf(t,!1)},n.$set=function(t,i){var e,a=u.p(t),o="set"+(this.$u?"UTC":""),c=(e={},e[f]=o+"Date",e[v]=o+"Date",e[p]=o+"Month",e[g]=o+"FullYear",e[b]=o+"Hours",e[S]=o+"Minutes",e[w]=o+"Seconds",e[L]=o+"Milliseconds",e)[a],m=a===f?this.$D+(i-this.$W):i;if(a===p||a===g){var l=this.clone().set(v,1);l.$d[c](m),l.init(),this.$d=l.set(v,Math.min(this.$D,l.daysInMonth())).$d}else c&&this.$d[c](m);return this.init(),this},n.set=function(t,i){return this.clone().$set(t,i)},n.get=function(t){return this[u.p(t)]()},n.add=function(t,i){var e,a=this;t=Number(t);var o=u.p(i),c=function(x){var C=$(a);return u.w(C.date(C.date()+Math.round(x*t)),a)};if(o===p)return this.set(p,this.$M+t);if(o===g)return this.set(g,this.$y+t);if(o===f)return c(1);if(o===h)return c(7);var m=(e={},e[S]=M,e[b]=H,e[w]=_,e)[o]||1,l=this.$d.getTime()+t*m;return u.w(l,this)},n.subtract=function(t,i){return this.add(-1*t,i)},n.format=function(t){var i=this,e=this.$locale();if(!this.isValid())return e.invalidDate||T;var a=t||"YYYY-MM-DDTHH:mm:ssZ",o=u.z(this),c=this.$H,m=this.$m,l=this.$M,x=e.weekdays,C=e.months,O=function(y,A,Z,R){return y&&(y[A]||y(i,a))||Z[A].slice(0,R)},I=function(y){return u.s(c%12||12,y,"0")},F=e.meridiem||function(y,A,Z){var R=y<12?"AM":"PM";return Z?R.toLowerCase():R},z={YY:String(this.$y).slice(-2),YYYY:u.s(this.$y,4,"0"),M:l+1,MM:u.s(l+1,2,"0"),MMM:O(e.monthsShort,l,C,3),MMMM:O(C,l),D:this.$D,DD:u.s(this.$D,2,"0"),d:String(this.$W),dd:O(e.weekdaysMin,this.$W,x,2),ddd:O(e.weekdaysShort,this.$W,x,3),dddd:x[this.$W],H:String(c),HH:u.s(c,2,"0"),h:I(1),hh:I(2),a:F(c,m,!0),A:F(c,m,!1),m:String(m),mm:u.s(m,2,"0"),s:String(this.$s),ss:u.s(this.$s,2,"0"),SSS:u.s(this.$ms,3,"0"),Z:o};return a.replace(it,function(y,A){return A||z[y]||o.replace(":","")})},n.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},n.diff=function(t,i,e){var a,o=u.p(i),c=$(t),m=(c.utcOffset()-this.utcOffset())*M,l=this-c,x=u.m(this,c);return x=(a={},a[g]=x/12,a[p]=x,a[j]=x/3,a[h]=(l-m)/6048e5,a[f]=(l-m)/864e5,a[b]=l/H,a[S]=l/M,a[w]=l/_,a)[o]||l,e?x:u.a(x)},n.daysInMonth=function(){return this.endOf(p).$D},n.$locale=function(){return Y[this.$L]},n.locale=function(t,i){if(!t)return this.$L;var e=this.clone(),a=V(t,i,!0);return a&&(e.$L=a),e},n.clone=function(){return u.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},s}(),Q=E.prototype;return $.prototype=Q,[["$ms",L],["$s",w],["$m",S],["$H",b],["$W",f],["$M",p],["$y",g],["$D",v]].forEach(function(s){Q[s[1]]=function(n){return this.$g(n,s[0],s[1])}}),$.extend=function(s,n){return s.$i||(s(n,E,$),s.$i=!0),$},$.locale=V,$.isDayjs=P,$.unix=function(s){return $(1e3*s)},$.en=Y[W],$.Ls=Y,$.p={},$})})(st);var xt=st.exports;const q=ct(xt),gt=D.div`
  display: flex;
  flex-direction: column;
  color: ${r=>r.theme.colors.text};
  background-color: ${r=>r.theme.colors.primary};
  width: 96%;
  gap: 0.5rem;
  margin: 0.1rem auto;

  box-sizing: border-box;
  padding: 0.6rem 0.5rem;
  border-radius: 0.5rem;
  box-shadow: -2px 2px 1px 1px ${r=>G(r.theme.colors.opposite.background)};
`,yt=D.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${r=>r.theme.colors.text};
  background-color: ${r=>r.theme.colors.background};

  min-width: 360px;
  border-radius: 5px;
  padding: 0.6rem 1.2rem;

  & > div {
    display: flex;
    align-items: center;
  }
`,vt=D.div`
  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;

  gap: 1rem;
`,K=D.button`
  font-size: 1rem;
  font-weight: bold;
`,bt=D.h1`
  font-size: 1.2rem;
  font-weight: bold;
`,X=D.h2`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2px;
  font-size: 1rem;
  font-style: italic;

  color: ${r=>r.theme.colors.info};
`,Dt=D.div`
  width: 100%;
  transition: height 150ms linear 50ms, transform 200ms linear 50ms;
  box-sizing: border-box;
  margin: auto;
  border-radius: 0.5rem;
  color: ${r=>r.theme.colors.opposite.text};
  background-color: ${r=>r.theme.colors.opposite.background};
  box-shadow: inset -2px 1px 1px 1px ${r=>G(r.theme.colors.background,.3)};
`,tt=D.p`
  font-size: 1rem;
  font-weight: normal;
  padding: 1rem 1.2rem;
`,et=["day","hour","minutes"],Mt=({title:r,createdDate:k,diffDate:_,detail:M,editTodo:H,deleteTodo:L})=>{const[w,S]=B.useState(nt(M).status),b=q(_).format("DD,,mm").split(",").map((f,h)=>+f==0?null:h===0?+f==1?null:`${+f-1} ${et[h]} `:`${+f} ${et[h]} `);return d.jsxs(gt,{children:[d.jsxs(yt,{children:[d.jsx(bt,{children:r}),d.jsxs(vt,{children:[d.jsx(K,{className:"text-blue-500 hover:text-blue-600",onClick:H,children:"Edit"}),d.jsx(K,{className:"text-red-500 hover:text-red-600",onClick:L,children:"Delete"})]})]}),d.jsx(Dt,{children:w?d.jsxs(tt,{children:[d.jsxs(X,{children:[k," | ",b.map(f=>f),"ago"]}),nt(M).context,d.jsxs("span",{style:{cursor:"pointer",textAlign:"right"},className:"text-green-300 hover:text-green-600",onClick:()=>S(!1),children:[" ","Show more"]})]}):d.jsxs(tt,{children:[d.jsxs(X,{children:[k," | ",b.map(f=>f),"ago"]}),M]})})]})},wt=B.memo(Mt);function nt(r){return r?{status:r.trim().length>100,context:r.trim().slice(0,100)+"..."}:{status:!1,context:null}}const St=U.object({date:U.date().default(()=>new Date),title:U.string().min(1).max(300,{message:"the title can't over the 120 sizes"}).refine(r=>r!=="",{message:"title is required"}),detail:U.string().max(5e3).optional()}),rt=r=>St.parse(r),jt=D.div`
  display: flex;
  flex-direction: column;

  color: ${r=>r.theme.colors.text};
  background-color: ${r=>r.theme.colors.background};
`,Tt=D.div`
  display: flex;

  margin: 0;
  padding: 0.5rem 1rem;

  color: ${r=>r.theme.colors.text};
  background-color: ${r=>r.theme.colors.background};

  h1 {
    margin: 0;
    padding: 0;

    font-family: 'PoppinsSemiBold';
    font-size: 2rem;
  }
`,kt=D.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  height: max(35rem, 60vh);
  box-sizing: border-box;
  padding: 0.7rem 0;
  border-radius: 0.2rem;
  overflow-y: scroll;
  box-shadow: inset -2px 4px 2px 2px ${r=>G(r.theme.colors.opposite.background)};
`,Ot=()=>{var f;const r=B.useRef(null),k=B.useRef(null),_=dt(h=>h.todo.todoList),H=(f=lt().currentUser)==null?void 0:f.uid,L=ht(),w=()=>{var v,T;const h=(v=r.current)==null?void 0:v.value,p=(T=k.current)==null?void 0:T.value,j=rt({title:h,detail:p}),g={uid:H,todoList:[{date:j.date,title:j.title,detail:j.detail}]};L(mt(g)),r.current.value="",k.current.value=""},S=h=>{var T,N;const p=(T=r.current)==null?void 0:T.value,j=(N=k.current)==null?void 0:N.value,g=rt({title:p,detail:j}),v={date:h,title:g.title,detail:g.detail};L(pt(v))},b=h=>{L($t({uid:H,targetDate:h}))};return d.jsxs(ft,{children:[d.jsx(Tt,{children:d.jsxs("h1",{children:["What you going ",d.jsx("span",{className:" font-bold text-blue-500",children:"To Do"})]})}),d.jsxs(jt,{children:[d.jsx(kt,{children:_&&_.map(({date:h,title:p,detail:j},g)=>{const v=`currentTodoList-${p}${g}`,T=q(h).format("YY MM.DD HH:mm"),N=q().diff(h);return d.jsx(wt,{editTodo:()=>S(h),deleteTodo:()=>b(h),title:p,createdDate:T,diffDate:N,detail:j},v)})}),d.jsxs("div",{className:"flex flex-col mt-2 box-border p-2",children:[d.jsxs("div",{className:"flex",children:[d.jsx("input",{ref:r,className:"border border-gray-400 p-2 rounded flex-grow mr-2 text-slate-900",placeholder:"What do you going to do today?"}),d.jsx("button",{className:"bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-1/3",onClick:w,children:"Add"})]}),d.jsx("textarea",{ref:k,className:"border border-gray-400 p-2 rounded w-full text-slate-900 mt-2",placeholder:"details..."})]})]})]})};export{Ot as default};
//# sourceMappingURL=index-5a5c6adc.js.map
