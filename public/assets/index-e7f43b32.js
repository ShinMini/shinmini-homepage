import{c as ct,g as dt,n as M,h as Z,R,j as h,z as E,u as Q,a as lt,L as ht,p as ft,b as mt,d as pt}from"./index-feaeb695.js";var st={exports:{}};(function(r,j){(function(L,b){r.exports=b()})(ct,function(){var L=1e3,b=6e4,O=36e5,H="millisecond",w="second",S="minute",d="hour",l="day",x="week",p="month",T="quarter",g="year",D="date",q="Invalid Date",it=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,ot=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,at={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(s){var n=["th","st","nd","rd"],t=s%100;return"["+s+(n[(t-20)%10]||n[t]||n[0])+"]"}},U=function(s,n,t){var i=String(s);return!i||i.length>=n?s:""+Array(n+1-i.length).join(t)+s},ut={s:U,z:function(s){var n=-s.utcOffset(),t=Math.abs(n),i=Math.floor(t/60),e=t%60;return(n<=0?"+":"-")+U(i,2,"0")+":"+U(e,2,"0")},m:function s(n,t){if(n.date()<t.date())return-s(t,n);var i=12*(t.year()-n.year())+(t.month()-n.month()),e=n.clone().add(i,p),a=t-e<0,o=n.clone().add(i+(a?-1:1),p);return+(-(i+(t-e)/(a?e-o:o-e))||0)},a:function(s){return s<0?Math.ceil(s)||0:Math.floor(s)},p:function(s){return{M:p,y:g,w:x,d:l,D,h:d,m:S,s:w,ms:H,Q:T}[s]||String(s||"").toLowerCase().replace(/s$/,"")},u:function(s){return s===void 0}},N="en",Y={};Y[N]=at;var B=function(s){return s instanceof F},I=function s(n,t,i){var e;if(!n)return N;if(typeof n=="string"){var a=n.toLowerCase();Y[a]&&(e=a),t&&(Y[a]=t,e=a);var o=n.split("-");if(!e&&o.length>1)return s(o[0])}else{var c=n.name;Y[c]=n,e=c}return!i&&e&&(N=e),e||!i&&N},$=function(s,n){if(B(s))return s.clone();var t=typeof n=="object"?n:{};return t.date=s,t.args=arguments,new F(t)},u=ut;u.l=I,u.i=B,u.w=function(s,n){return $(s,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var F=function(){function s(t){this.$L=I(t.locale,null,!0),this.parse(t)}var n=s.prototype;return n.parse=function(t){this.$d=function(i){var e=i.date,a=i.utc;if(e===null)return new Date(NaN);if(u.u(e))return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){var o=e.match(it);if(o){var c=o[2]-1||0,m=(o[7]||"0").substring(0,3);return a?new Date(Date.UTC(o[1],c,o[3]||1,o[4]||0,o[5]||0,o[6]||0,m)):new Date(o[1],c,o[3]||1,o[4]||0,o[5]||0,o[6]||0,m)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},n.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},n.$utils=function(){return u},n.isValid=function(){return this.$d.toString()!==q},n.isSame=function(t,i){var e=$(t);return this.startOf(i)<=e&&e<=this.endOf(i)},n.isAfter=function(t,i){return $(t)<this.startOf(i)},n.isBefore=function(t,i){return this.endOf(i)<$(t)},n.$g=function(t,i,e){return u.u(t)?this[i]:this.set(e,t)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(t,i){var e=this,a=!!u.u(i)||i,o=u.p(t),c=function(A,v){var C=u.w(e.$u?Date.UTC(e.$y,v,A):new Date(e.$y,v,A),e);return a?C:C.endOf(l)},m=function(A,v){return u.w(e.toDate()[A].apply(e.toDate("s"),(a?[0,0,0,0]:[23,59,59,999]).slice(v)),e)},f=this.$W,y=this.$M,_=this.$D,k="set"+(this.$u?"UTC":"");switch(o){case g:return a?c(1,0):c(31,11);case p:return a?c(1,y):c(0,y+1);case x:var z=this.$locale().weekStart||0,W=(f<z?f+7:f)-z;return c(a?_-W:_+(6-W),y);case l:case D:return m(k+"Hours",0);case d:return m(k+"Minutes",1);case S:return m(k+"Seconds",2);case w:return m(k+"Milliseconds",3);default:return this.clone()}},n.endOf=function(t){return this.startOf(t,!1)},n.$set=function(t,i){var e,a=u.p(t),o="set"+(this.$u?"UTC":""),c=(e={},e[l]=o+"Date",e[D]=o+"Date",e[p]=o+"Month",e[g]=o+"FullYear",e[d]=o+"Hours",e[S]=o+"Minutes",e[w]=o+"Seconds",e[H]=o+"Milliseconds",e)[a],m=a===l?this.$D+(i-this.$W):i;if(a===p||a===g){var f=this.clone().set(D,1);f.$d[c](m),f.init(),this.$d=f.set(D,Math.min(this.$D,f.daysInMonth())).$d}else c&&this.$d[c](m);return this.init(),this},n.set=function(t,i){return this.clone().$set(t,i)},n.get=function(t){return this[u.p(t)]()},n.add=function(t,i){var e,a=this;t=Number(t);var o=u.p(i),c=function(y){var _=$(a);return u.w(_.date(_.date()+Math.round(y*t)),a)};if(o===p)return this.set(p,this.$M+t);if(o===g)return this.set(g,this.$y+t);if(o===l)return c(1);if(o===x)return c(7);var m=(e={},e[S]=b,e[d]=O,e[w]=L,e)[o]||1,f=this.$d.getTime()+t*m;return u.w(f,this)},n.subtract=function(t,i){return this.add(-1*t,i)},n.format=function(t){var i=this,e=this.$locale();if(!this.isValid())return e.invalidDate||q;var a=t||"YYYY-MM-DDTHH:mm:ssZ",o=u.z(this),c=this.$H,m=this.$m,f=this.$M,y=e.weekdays,_=e.months,k=function(v,C,J,V){return v&&(v[C]||v(i,a))||J[C].slice(0,V)},z=function(v){return u.s(c%12||12,v,"0")},W=e.meridiem||function(v,C,J){var V=v<12?"AM":"PM";return J?V.toLowerCase():V},A={YY:String(this.$y).slice(-2),YYYY:u.s(this.$y,4,"0"),M:f+1,MM:u.s(f+1,2,"0"),MMM:k(e.monthsShort,f,_,3),MMMM:k(_,f),D:this.$D,DD:u.s(this.$D,2,"0"),d:String(this.$W),dd:k(e.weekdaysMin,this.$W,y,2),ddd:k(e.weekdaysShort,this.$W,y,3),dddd:y[this.$W],H:String(c),HH:u.s(c,2,"0"),h:z(1),hh:z(2),a:W(c,m,!0),A:W(c,m,!1),m:String(m),mm:u.s(m,2,"0"),s:String(this.$s),ss:u.s(this.$s,2,"0"),SSS:u.s(this.$ms,3,"0"),Z:o};return a.replace(ot,function(v,C){return C||A[v]||o.replace(":","")})},n.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},n.diff=function(t,i,e){var a,o=u.p(i),c=$(t),m=(c.utcOffset()-this.utcOffset())*b,f=this-c,y=u.m(this,c);return y=(a={},a[g]=y/12,a[p]=y,a[T]=y/3,a[x]=(f-m)/6048e5,a[l]=(f-m)/864e5,a[d]=f/O,a[S]=f/b,a[w]=f/L,a)[o]||f,e?y:u.a(y)},n.daysInMonth=function(){return this.endOf(p).$D},n.$locale=function(){return Y[this.$L]},n.locale=function(t,i){if(!t)return this.$L;var e=this.clone(),a=I(t,i,!0);return a&&(e.$L=a),e},n.clone=function(){return u.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},s}(),G=F.prototype;return $.prototype=G,[["$ms",H],["$s",w],["$m",S],["$H",d],["$W",l],["$M",p],["$y",g],["$D",D]].forEach(function(s){G[s[1]]=function(n){return this.$g(n,s[0],s[1])}}),$.extend=function(s,n){return s.$i||(s(n,F,$),s.$i=!0),$},$.locale=I,$.isDayjs=B,$.unix=function(s){return $(1e3*s)},$.en=Y[N],$.Ls=Y,$.p={},$})})(st);var $t=st.exports;const P=dt($t),xt=M.div`
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
  box-shadow: -2px 2px 1px 1px ${r=>Z(r.theme.colors.opposite.background)};
`,gt=M.div`
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
`,yt=M.div`
  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;

  gap: 1rem;
`,K=M.button`
  font-size: 1rem;
  font-weight: bold;
`,vt=M.h1`
  font-size: 1.2rem;
  font-weight: bold;
`,X=M.h2`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2px;
  font-size: 1rem;
  font-style: italic;

  color: ${r=>r.theme.colors.info};
`,bt=M.div`
  width: 100%;
  transition: height 150ms linear 50ms, transform 200ms linear 50ms;
  box-sizing: border-box;
  margin: auto;
  border-radius: 0.5rem;
  color: ${r=>r.theme.colors.opposite.text};
  background-color: ${r=>r.theme.colors.opposite.background};
  box-shadow: inset -2px 1px 1px 1px ${r=>Z(r.theme.colors.background,.3)};
`,tt=M.p`
  font-size: 1rem;
  font-weight: normal;
  padding: 1rem 1.2rem;
`,et=["day","hour","minutes"],Dt=({title:r,createdDate:j,diffDate:L,detail:b,editTodo:O,deleteTodo:H})=>{const[w,S]=R.useState(nt(b).status),d=P(L).format("DD,,mm").split(",").map((l,x)=>+l==0?null:x===0?+l==1?null:`${+l-1} ${et[x]} `:`${+l} ${et[x]} `);return h.jsxs(xt,{children:[h.jsxs(gt,{children:[h.jsx(vt,{children:r}),h.jsxs(yt,{children:[h.jsx(K,{className:"text-blue-500 hover:text-blue-600",onClick:O,children:"Edit"}),h.jsx(K,{className:"text-red-500 hover:text-red-600",onClick:H,children:"Delete"})]})]}),h.jsx(bt,{children:w?h.jsxs(tt,{children:[h.jsxs(X,{children:[j," | ",d.map(l=>l),"ago"]}),nt(b).context,h.jsxs("span",{style:{cursor:"pointer",textAlign:"right"},className:"text-green-300 hover:text-green-600",onClick:()=>S(!1),children:[" ","Show more"]})]}):h.jsxs(tt,{children:[h.jsxs(X,{children:[j," | ",d.map(l=>l),"ago"]}),b]})})]})},Mt=R.memo(Dt);function nt(r){return r?{status:r.trim().length>100,context:r.trim().slice(0,100)+"..."}:{status:!1,context:null}}const wt=E.object({date:E.date().default(()=>new Date),title:E.string().min(1).max(300,{message:"the title can't over the 120 sizes"}).refine(r=>r!=="",{message:"title is required"}),detail:E.string().max(5e3).optional()}),rt=r=>wt.parse(r),St=M.div`
  display: flex;
  flex-direction: column;

  color: ${r=>r.theme.colors.text};
  background-color: ${r=>r.theme.colors.background};
`,jt=M.div`
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
`,Tt=M.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  height: max(35rem, 60vh);
  box-sizing: border-box;
  padding: 0.7rem 0;
  border-radius: 0.2rem;
  overflow-y: scroll;
  box-shadow: inset -2px 4px 2px 2px ${r=>Z(r.theme.colors.opposite.background)};
`,Lt=()=>{const r=R.useRef(null),j=R.useRef(null),L=Q(d=>d.todo.todoList),b=Q(d=>d.user.uid),O=lt(),H=()=>{var T,g;const d=(T=r.current)==null?void 0:T.value,l=(g=j.current)==null?void 0:g.value,x=rt({title:d,detail:l}),p={uid:b,todoList:[{date:x.date,title:x.title,detail:x.detail}]};O(ft(p)),r.current.value="",j.current.value=""},w=d=>{var g,D;const l=(g=r.current)==null?void 0:g.value,x=(D=j.current)==null?void 0:D.value,p=rt({title:l,detail:x}),T={date:d,title:p.title,detail:p.detail};O(mt(T))},S=d=>{O(pt({uid:b,targetDate:d}))};return h.jsxs(ht,{children:[h.jsx(jt,{children:h.jsxs("h1",{children:["What you going ",h.jsx("span",{className:" font-bold text-blue-500",children:"To Do"})]})}),h.jsxs(St,{children:[h.jsx(Tt,{children:L&&L.map(({date:d,title:l,detail:x},p)=>{const T=`currentTodoList-${l}${p}`,g=P(d).format("YY MM.DD HH:mm"),D=P().diff(d);return h.jsx(Mt,{editTodo:()=>w(d),deleteTodo:()=>S(d),title:l,createdDate:g,diffDate:D,detail:x},T)})}),h.jsxs("div",{className:"flex flex-col mt-2 box-border p-2",children:[h.jsxs("div",{className:"flex",children:[h.jsx("input",{ref:r,className:"border border-gray-400 p-2 rounded flex-grow mr-2 text-slate-900",placeholder:"What do you going to do today?"}),h.jsx("button",{className:"bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-1/3",onClick:H,children:"Add"})]}),h.jsx("textarea",{ref:j,className:"border border-gray-400 p-2 rounded w-full text-slate-900 mt-2",placeholder:"details..."})]})]})]})};export{Lt as default};
//# sourceMappingURL=index-e7f43b32.js.map
