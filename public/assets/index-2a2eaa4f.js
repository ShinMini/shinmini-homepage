import{c as it,g as ot,n as H,h as V,R as Q,j as m,B as tt,z as G,u as dt,a as ut,b as ct,L as lt,T as ht,d as ft,e as mt,p as pt,f as xt,i as gt}from"./index-5627a6d1.js";var st={exports:{}};(function(a,z){(function(x,M){a.exports=M()})(it,function(){var x=1e3,M=6e4,j=36e5,u="millisecond",k="second",L="minute",O="hour",h="day",y="week",d="month",_="quarter",g="year",v="date",D="Invalid Date",C=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,N=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,E={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(r){var n=["th","st","nd","rd"],t=r%100;return"["+r+(n[(t-20)%10]||n[t]||n[0])+"]"}},U=function(r,n,t){var i=String(r);return!i||i.length>=n?r:""+Array(n+1-i.length).join(t)+r},F={s:U,z:function(r){var n=-r.utcOffset(),t=Math.abs(n),i=Math.floor(t/60),e=t%60;return(n<=0?"+":"-")+U(i,2,"0")+":"+U(e,2,"0")},m:function r(n,t){if(n.date()<t.date())return-r(t,n);var i=12*(t.year()-n.year())+(t.month()-n.month()),e=n.clone().add(i,d),s=t-e<0,o=n.clone().add(i+(s?-1:1),d);return+(-(i+(t-e)/(s?e-o:o-e))||0)},a:function(r){return r<0?Math.ceil(r)||0:Math.floor(r)},p:function(r){return{M:d,y:g,w:y,d:h,D:v,h:O,m:L,s:k,ms:u,Q:_}[r]||String(r||"").toLowerCase().replace(/s$/,"")},u:function(r){return r===void 0}},w="en",T={};T[w]=E;var R=function(r){return r instanceof P},W=function r(n,t,i){var e;if(!n)return w;if(typeof n=="string"){var s=n.toLowerCase();T[s]&&(e=s),t&&(T[s]=t,e=s);var o=n.split("-");if(!e&&o.length>1)return r(o[0])}else{var l=n.name;T[l]=n,e=l}return!i&&e&&(w=e),e||!i&&w},$=function(r,n){if(R(r))return r.clone();var t=typeof n=="object"?n:{};return t.date=r,t.args=arguments,new P(t)},c=F;c.l=W,c.i=R,c.w=function(r,n){return $(r,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var P=function(){function r(t){this.$L=W(t.locale,null,!0),this.parse(t)}var n=r.prototype;return n.parse=function(t){this.$d=function(i){var e=i.date,s=i.utc;if(e===null)return new Date(NaN);if(c.u(e))return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){var o=e.match(C);if(o){var l=o[2]-1||0,p=(o[7]||"0").substring(0,3);return s?new Date(Date.UTC(o[1],l,o[3]||1,o[4]||0,o[5]||0,o[6]||0,p)):new Date(o[1],l,o[3]||1,o[4]||0,o[5]||0,o[6]||0,p)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},n.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},n.$utils=function(){return c},n.isValid=function(){return this.$d.toString()!==D},n.isSame=function(t,i){var e=$(t);return this.startOf(i)<=e&&e<=this.endOf(i)},n.isAfter=function(t,i){return $(t)<this.startOf(i)},n.isBefore=function(t,i){return this.endOf(i)<$(t)},n.$g=function(t,i,e){return c.u(t)?this[i]:this.set(e,t)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(t,i){var e=this,s=!!c.u(i)||i,o=c.p(t),l=function(B,S){var I=c.w(e.$u?Date.UTC(e.$y,S,B):new Date(e.$y,S,B),e);return s?I:I.endOf(h)},p=function(B,S){return c.w(e.toDate()[B].apply(e.toDate("s"),(s?[0,0,0,0]:[23,59,59,999]).slice(S)),e)},f=this.$W,b=this.$M,Y=this.$D,A="set"+(this.$u?"UTC":"");switch(o){case g:return s?l(1,0):l(31,11);case d:return s?l(1,b):l(0,b+1);case y:var J=this.$locale().weekStart||0,Z=(f<J?f+7:f)-J;return l(s?Y-Z:Y+(6-Z),b);case h:case v:return p(A+"Hours",0);case O:return p(A+"Minutes",1);case L:return p(A+"Seconds",2);case k:return p(A+"Milliseconds",3);default:return this.clone()}},n.endOf=function(t){return this.startOf(t,!1)},n.$set=function(t,i){var e,s=c.p(t),o="set"+(this.$u?"UTC":""),l=(e={},e[h]=o+"Date",e[v]=o+"Date",e[d]=o+"Month",e[g]=o+"FullYear",e[O]=o+"Hours",e[L]=o+"Minutes",e[k]=o+"Seconds",e[u]=o+"Milliseconds",e)[s],p=s===h?this.$D+(i-this.$W):i;if(s===d||s===g){var f=this.clone().set(v,1);f.$d[l](p),f.init(),this.$d=f.set(v,Math.min(this.$D,f.daysInMonth())).$d}else l&&this.$d[l](p);return this.init(),this},n.set=function(t,i){return this.clone().$set(t,i)},n.get=function(t){return this[c.p(t)]()},n.add=function(t,i){var e,s=this;t=Number(t);var o=c.p(i),l=function(b){var Y=$(s);return c.w(Y.date(Y.date()+Math.round(b*t)),s)};if(o===d)return this.set(d,this.$M+t);if(o===g)return this.set(g,this.$y+t);if(o===h)return l(1);if(o===y)return l(7);var p=(e={},e[L]=M,e[O]=j,e[k]=x,e)[o]||1,f=this.$d.getTime()+t*p;return c.w(f,this)},n.subtract=function(t,i){return this.add(-1*t,i)},n.format=function(t){var i=this,e=this.$locale();if(!this.isValid())return e.invalidDate||D;var s=t||"YYYY-MM-DDTHH:mm:ssZ",o=c.z(this),l=this.$H,p=this.$m,f=this.$M,b=e.weekdays,Y=e.months,A=function(S,I,K,q){return S&&(S[I]||S(i,s))||K[I].slice(0,q)},J=function(S){return c.s(l%12||12,S,"0")},Z=e.meridiem||function(S,I,K){var q=S<12?"AM":"PM";return K?q.toLowerCase():q},B={YY:String(this.$y).slice(-2),YYYY:c.s(this.$y,4,"0"),M:f+1,MM:c.s(f+1,2,"0"),MMM:A(e.monthsShort,f,Y,3),MMMM:A(Y,f),D:this.$D,DD:c.s(this.$D,2,"0"),d:String(this.$W),dd:A(e.weekdaysMin,this.$W,b,2),ddd:A(e.weekdaysShort,this.$W,b,3),dddd:b[this.$W],H:String(l),HH:c.s(l,2,"0"),h:J(1),hh:J(2),a:Z(l,p,!0),A:Z(l,p,!1),m:String(p),mm:c.s(p,2,"0"),s:String(this.$s),ss:c.s(this.$s,2,"0"),SSS:c.s(this.$ms,3,"0"),Z:o};return s.replace(N,function(S,I){return I||B[S]||o.replace(":","")})},n.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},n.diff=function(t,i,e){var s,o=c.p(i),l=$(t),p=(l.utcOffset()-this.utcOffset())*M,f=this-l,b=c.m(this,l);return b=(s={},s[g]=b/12,s[d]=b,s[_]=b/3,s[y]=(f-p)/6048e5,s[h]=(f-p)/864e5,s[O]=f/j,s[L]=f/M,s[k]=f/x,s)[o]||f,e?b:c.a(b)},n.daysInMonth=function(){return this.endOf(d).$D},n.$locale=function(){return T[this.$L]},n.locale=function(t,i){if(!t)return this.$L;var e=this.clone(),s=W(t,i,!0);return s&&(e.$L=s),e},n.clone=function(){return c.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},r}(),nt=P.prototype;return $.prototype=nt,[["$ms",u],["$s",k],["$m",L],["$H",O],["$W",h],["$M",d],["$y",g],["$D",v]].forEach(function(r){nt[r[1]]=function(n){return this.$g(n,r[0],r[1])}}),$.extend=function(r,n){return r.$i||(r(n,P,$),r.$i=!0),$},$.locale=W,$.isDayjs=R,$.unix=function(r){return $(1e3*r)},$.en=T[w],$.Ls=T,$.p={},$})})(st);var $t=st.exports;const et=ot($t);var at={exports:{}};(function(a,z){(function(x,M){a.exports=M()})(it,function(){return function(x,M,j){x=x||{};var u=M.prototype,k={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function L(h,y,d,_){return u.fromToBase(h,y,d,_)}j.en.relativeTime=k,u.fromToBase=function(h,y,d,_,g){for(var v,D,C,N=d.$locale().relativeTime||k,E=x.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],U=E.length,F=0;F<U;F+=1){var w=E[F];w.d&&(v=_?j(h).diff(d,w.d,!0):d.diff(h,w.d,!0));var T=(x.rounding||Math.round)(Math.abs(v));if(C=v>0,T<=w.r||!w.r){T<=1&&F>0&&(w=E[F-1]);var R=N[w.l];g&&(T=g(""+T)),D=typeof R=="string"?R.replace("%d",T):R(T,y,w.l,C);break}}if(y)return D;var W=C?N.future:N.past;return typeof W=="function"?W(D):W.replace("%s",D)},u.to=function(h,y){return L(h,y,this,!0)},u.from=function(h,y){return L(h,y,this)};var O=function(h){return h.$u?j.utc():j()};u.toNow=function(h){return this.to(O(this),h)},u.fromNow=function(h){return this.from(O(this),h)}}})})(at);var vt=at.exports;const yt=ot(vt),bt=H.div`
  display: flex;
  flex-direction: column;
  color: ${a=>a.theme.colors.text};
  background-color: ${a=>a.theme.colors.primary};
  width: 95%;
  gap: 0.5rem;
  margin: 0.1rem auto;

  box-sizing: border-box;
  padding: 0.6rem 0.5rem;
  border-radius: 0.5rem;
  box-shadow: -2px 2px 1px 1px ${a=>V(a.theme.colors.opposite.background)};
`,Mt=H.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${a=>a.theme.colors.text};
  background-color: ${a=>a.theme.colors.background};

  min-width: 360px;
  border-radius: 5px;
  padding: 0.6rem 1.2rem;

  & > div {
    display: flex;
    align-items: center;
  }
`,Dt=H.div`
  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;

  gap: 1rem;
`,wt=H.h1`
  font-size: 1.2rem;
  font-weight: bold;
`,Tt=H.h2`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2px;
  font-size: 1rem;
  font-style: italic;

  color: ${a=>a.theme.colors.info};
`,St=H.div`
  width: 100%;
  transition:
    height 150ms linear 50ms,
    transform 200ms linear 50ms;
  box-sizing: border-box;
  margin: auto;
  border-radius: 0.5rem;
  color: ${a=>a.theme.colors.opposite.text};
  background-color: ${a=>a.theme.colors.opposite.background};
  box-shadow: inset -2px 1px 1px 1px ${a=>V(a.theme.colors.background,.3)};
`,jt=H.div`
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  font-weight: normal;
  padding: 1rem 1.2rem;
  cursor: pointer;
`,kt=({title:a,createdDate:z,detail:x,editTodo:M,deleteTodo:j})=>{const[u,k]=Q.useState(X(x).status);et.extend(yt);const L=et(z).fromNow();return m.jsxs(bt,{children:[m.jsxs(Mt,{children:[m.jsx(wt,{children:a}),m.jsxs(Dt,{children:[m.jsxs(Tt,{children:[z.format("MM.DD hh:mm")," | ",L]}),m.jsx(tt,{variant:"contained",color:"info",onClick:M,children:"Edit"}),m.jsx(tt,{variant:"contained",color:"error",onClick:j,children:"Delete"})]})]}),m.jsx(St,{children:m.jsx(jt,{onClick:X(x).status?()=>k(O=>!O):void 0,children:m.jsx("p",{className:"text-ellipsis",children:u?X(x).context:x})})})]})},Lt=Q.memo(kt);function X(a){return a?{status:a.trim().length>180,context:a.trim().slice(0,180)+"..."}:{status:!1,context:null}}const Ot=G.object({date:G.date().default(()=>new Date),title:G.string().min(1).max(300,{message:"the title can't over the 120 sizes"}).refine(a=>a!=="",{message:"title is required"}),detail:G.string().max(5e3).optional()}),rt=a=>Ot.parse(a),zt=()=>{var y;const a=Q.useRef(null),z=Q.useRef(null),x=dt(d=>d.todo.todoList),j=(y=ut(mt).currentUser)==null?void 0:y.uid,u=ct(),k=()=>{var D,C;const d=(D=a.current)==null?void 0:D.value,_=(C=z.current)==null?void 0:C.value,g=rt({title:d,detail:_}),v={uid:j,todoList:[{date:g.date,title:g.title,detail:g.detail}]};u(pt(v)),a.current.value="",z.current.value=""},L=d=>{var C,N;const _=(C=a.current)==null?void 0:C.value,g=(N=z.current)==null?void 0:N.value,v=rt({title:_,detail:g}),D={date:d,title:v.title,detail:v.detail};u(xt(D))},O=d=>{u(gt({targetDate:d}))},h=_t();return m.jsx(lt,{children:m.jsxs(h.Container,{children:[m.jsx(h.Header,{children:m.jsxs("h1",{children:["What's you going ",m.jsx("span",{className:" font-bold text-blue-600",children:"to do"})]})}),m.jsx(h.TodoListContainer,{children:x&&x.map(({date:d,title:_,detail:g},v)=>{const D=`currentTodoList-${_}${v}`,C=et(d);return m.jsx(Lt,{editTodo:()=>L(d),deleteTodo:()=>O(d),title:_,createdDate:C,detail:g},D)})}),m.jsxs("div",{className:"flex flex-col mt-2 box-border p-2",children:[m.jsxs("div",{className:"flex gap-4",children:[m.jsx(ht,{fullWidth:!0,ref:a,placeholder:"What do you going to do today?"}),m.jsx(tt,{variant:"contained",onClick:k,sx:{paddingRight:4,paddingLeft:4,fontWeight:700,fontSize:20},children:"Add"})]}),m.jsx(ft,{ref:z,minRows:3,className:"p-2 rounded w-full text-slate-900 mt-2 backdrop-blur-md bg-transparent",placeholder:"details..."})]})]})})};function _t(){const a=H.div`
    display: flex;
    flex-direction: column;

    color: ${u=>u.theme.colors.text};
    background-color: ${u=>V(u.theme.colors.background,.5)};
    border-radius: 0.4rem;

    backdrop-filter: blur(5px);
  `,z=H.div`
    display: flex;
    text-align: center;
    padding: 0.5rem 2rem;

    color: ${u=>u.theme.colors.text};
    mix-blend-mode: luminosity;

    h1 {
      font-family: 'PoppinsSemiBold';
      font-size: 1.8rem;
    }
  `,x=H.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    height: max(35rem, 60vh);
    box-sizing: border-box;
    padding: 0.7rem 0;
    border-radius: 0.2rem;
    overflow-y: scroll;
    box-shadow: inset -2px 4px 2px 2px ${u=>V(u.theme.colors.opposite.background)};
  `,M=H.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    height: max(35rem, 60vh);
    box-sizing: border-box;
    padding: 0.7rem 0;
    border-radius: 0.2rem;
    overflow-y: scroll;
    box-shadow: inset -2px 4px 2px 2px ${u=>V(u.theme.colors.opposite.background)};
  `,j=H.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    box-sizing: border-box;
    padding: 0.7rem 0;
    border-radius: 0.2rem;
    overflow-y: scroll;
    box-shadow: inset -2px 4px 2px 2px ${u=>V(u.theme.colors.opposite.background)};
  `;return{Container:a,Header:z,TodoListContainer:x,TodoList:M,TodoItem:j}}export{zt as default};
