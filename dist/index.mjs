var l=class extends Error{constructor(e,f,t){if(e=`${e}: ${JSON.stringify(f||{})}`,super(e),!t){this.msg={en:e};return}this.msg={en:e,...t}}getMsg(e){return this.msg.hasOwnProperty(e)?this.msg[e]:this.msg.hasOwnProperty("en")?this.msg.en:"not found error msg"}};var c;(f=>{function g(t,...n){return t.length===0?n.length===0?!1:n[0]:t[0]}f.bool=g;function e(t,...n){return t.length===0?n.length===0?"":n[0]:t[0]}f.string=e})(c||={});import a from"fs";import x from"path";import h from"readline";var u;(n=>{function g(o,...s){let r=process.env[o]||c.string(s);return r==""&&(console.log(`not found env: key=${o}`),process.exit(1)),r}n.string=g;async function e(...o){let s=x.resolve(...o);if(!a.existsSync(s))throw new l("not found env file",{fp:s},{ko:"\uD658\uACBD\uBCC0\uC218 \uD30C\uC77C\uC744 \uCC3E\uC9C0 \uBABB\uD558\uC600\uC2B5\uB2C8\uB2E4."});let r=h.createInterface({input:a.createReadStream(s),crlfDelay:1/0});for await(let p of r){let i=p.replace(/ /g,"").split("=");i.length==2&&(process.env[i[0]]=i[1],console.log(`env: ${i[0]}=${i[1]}`))}}n.read=e;function f(o,...s){let r=process.env[o]||"";if(r==="")if(s.length===0)console.log(`not found env: key=${o}`),process.exit(1);else return s[0];return r==="true"}n.boolean=f;function t(o,...s){let r=process.env[o]||"";if(!r)return s.length===0?[]:s[0];for(let p=0;p<r.lastIndexOf(" ");p++)r=r.replace(" ","");return r.startsWith("[")?r.endsWith("]")?(r=r.slice(1,r.length-1),r.split(",")):[]:[]}n.array=t})(u||={});var m;(f=>{function g(t){let n="";for(let o of t)n+=`${o},`;return n.slice(0,n.length-1)}f.strToCsv=g;function e(t){return t.replace(/ /g,"").split(",").filter(n=>n!=="").map(n=>n.trim())}f.csvToStr=e})(m||={});export{l as JsError,m as fnCsv,u as fnEnv,c as fnParam};
