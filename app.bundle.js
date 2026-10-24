(()=>{var Ql="170",Ni={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Oi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ed=0,Kc=1,wd=2;var cu=1,Td=2,In=3,pn=0,Ee=1,ke=2,ii=0,os=1,Ws=2,jc=3,Qc=4,Ad=5,Si=100,Cd=101,Rd=102,Id=103,Pd=104,Ld=200,Dd=201,Ud=202,Nd=203,Na=204,Oa=205,Od=206,Fd=207,Bd=208,kd=209,zd=210,Hd=211,Vd=212,Gd=213,Wd=214,Fa=0,Ba=1,ka=2,us=3,za=4,Ha=5,Va=6,Ga=7,hu=0,Xd=1,$d=2,si=0,qd=1,Yd=2,Zd=3,Jd=4,Kd=5,tc=6,jd=7;var uu=300,ds=301,fs=302,Wa=303,Xa=304,Eo=306,$a=1e3,wi=1001,qa=1002,fn=1003,Qd=1004;var xr=1005;var yn=1006,ia=1007;var Ti=1008;var Un=1009,du=1010,fu=1011,Xs=1012,ec=1013,Ai=1014,Pn=1015,tr=1016,nc=1017,ic=1018,ps=1020,pu=35902,mu=1021,gu=1022,dn=1023,_u=1024,xu=1025,as=1026,ms=1027,vu=1028,sc=1029,yu=1030,rc=1031;var oc=1033,qr=33776,Yr=33777,Zr=33778,Jr=33779,Ya=35840,Za=35841,Ja=35842,Ka=35843,ja=36196,Qa=37492,tl=37496,el=37808,nl=37809,il=37810,sl=37811,rl=37812,ol=37813,al=37814,ll=37815,cl=37816,hl=37817,ul=37818,dl=37819,fl=37820,pl=37821,Kr=36492,ml=36494,gl=36495,Mu=36283,_l=36284,xl=36285,vl=36286;var jr=2300,yl=2301,sa=2302,th=2400,eh=2401,nh=2402;var tf=3200,ef=3201;var bu=0,nf=1,ti="",Ue="srgb",Ms="srgb-linear",wo="linear",te="srgb";var Wi=7680;var ih=519,sf=512,rf=513,of=514,Su=515,af=516,lf=517,cf=518,hf=519,sh=35044;var rh="300 es",Ln=2e3,Qr=2001,Nn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Le=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],oh=1234567,ls=Math.PI/180,$s=180/Math.PI;function bs(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Le[n&255]+Le[n>>8&255]+Le[n>>16&255]+Le[n>>24&255]+"-"+Le[t&255]+Le[t>>8&255]+"-"+Le[t>>16&15|64]+Le[t>>24&255]+"-"+Le[e&63|128]+Le[e>>8&255]+"-"+Le[e>>16&255]+Le[e>>24&255]+Le[i&255]+Le[i>>8&255]+Le[i>>16&255]+Le[i>>24&255]).toLowerCase()}function Ne(n,t,e){return Math.max(t,Math.min(e,n))}function ac(n,t){return(n%t+t)%t}function uf(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function df(n,t,e){return n!==t?(e-n)/(t-n):0}function Vs(n,t,e){return(1-e)*n+e*t}function ff(n,t,e,i){return Vs(n,t,1-Math.exp(-e*i))}function pf(n,t=1){return t-Math.abs(ac(n,t*2)-t)}function mf(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function gf(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function _f(n,t){return n+Math.floor(Math.random()*(t-n+1))}function xf(n,t){return n+Math.random()*(t-n)}function vf(n){return n*(.5-Math.random())}function yf(n){n!==void 0&&(oh=n);let t=oh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Mf(n){return n*ls}function bf(n){return n*$s}function Sf(n){return(n&n-1)===0&&n!==0}function Ef(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function wf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Tf(n,t,e,i,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+i)/2),h=a((t+i)/2),f=r((t-i)/2),d=a((t-i)/2),p=r((i-t)/2),g=a((i-t)/2);switch(s){case"XYX":n.set(o*h,l*f,l*d,o*c);break;case"YZY":n.set(l*d,o*h,l*f,o*c);break;case"ZXZ":n.set(l*f,l*d,o*h,o*c);break;case"XZX":n.set(o*h,l*g,l*p,o*c);break;case"YXY":n.set(l*p,o*h,l*g,o*c);break;case"ZYZ":n.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ss(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Fe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var To={DEG2RAD:ls,RAD2DEG:$s,generateUUID:bs,clamp:Ne,euclideanModulo:ac,mapLinear:uf,inverseLerp:df,lerp:Vs,damp:ff,pingpong:pf,smoothstep:mf,smootherstep:gf,randInt:_f,randFloat:xf,randFloatSpread:vf,seededRandom:yf,degToRad:Mf,radToDeg:bf,isPowerOfTwo:Sf,ceilPowerOfTwo:Ef,floorPowerOfTwo:wf,setQuaternionFromProperEuler:Tf,normalize:Fe,denormalize:ss},It=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ne(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},kt=class n{constructor(t,e,i,s,r,a,o,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],f=i[7],d=i[2],p=i[5],g=i[8],v=s[0],m=s[3],u=s[6],w=s[1],S=s[4],y=s[7],O=s[2],A=s[5],C=s[8];return r[0]=a*v+o*w+l*O,r[3]=a*m+o*S+l*A,r[6]=a*u+o*y+l*C,r[1]=c*v+h*w+f*O,r[4]=c*m+h*S+f*A,r[7]=c*u+h*y+f*C,r[2]=d*v+p*w+g*O,r[5]=d*m+p*S+g*A,r[8]=d*u+p*y+g*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=h*a-o*c,d=o*l-h*r,p=c*r-a*l,g=e*f+i*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=f*v,t[1]=(s*c-h*i)*v,t[2]=(o*i-s*a)*v,t[3]=d*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=p*v,t[7]=(i*l-c*e)*v,t[8]=(a*e-i*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ra.makeScale(t,e)),this}rotate(t){return this.premultiply(ra.makeRotation(-t)),this}translate(t,e){return this.premultiply(ra.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ra=new kt;function Eu(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function to(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Af(){let n=to("canvas");return n.style.display="block",n}var ah={};function zs(n){n in ah||(ah[n]=!0,console.warn(n))}function Cf(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Rf(n){let t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function If(n){let t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var $t={enabled:!0,workingColorSpace:Ms,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===te&&(n.r=Dn(n.r),n.g=Dn(n.g),n.b=Dn(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===te&&(n.r=cs(n.r),n.g=cs(n.g),n.b=cs(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===ti?wo:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Dn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function cs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var lh=[.64,.33,.3,.6,.15,.06],ch=[.2126,.7152,.0722],hh=[.3127,.329],uh=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dh=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);$t.define({[Ms]:{primaries:lh,whitePoint:hh,transfer:wo,toXYZ:uh,fromXYZ:dh,luminanceCoefficients:ch,workingColorSpaceConfig:{unpackColorSpace:Ue},outputColorSpaceConfig:{drawingBufferColorSpace:Ue}},[Ue]:{primaries:lh,whitePoint:hh,transfer:te,toXYZ:uh,fromXYZ:dh,luminanceCoefficients:ch,outputColorSpaceConfig:{drawingBufferColorSpace:Ue}}});var Xi,Ml=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Xi===void 0&&(Xi=to("canvas")),Xi.width=t.width,Xi.height=t.height;let i=Xi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Xi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=to("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Dn(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Dn(e[i]/255)*255):e[i]=Dn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Pf=0,eo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=bs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(oa(s[a].image)):r.push(oa(s[a]))}else r=oa(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function oa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ml.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Lf=0,Ke=class n extends Nn{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=wi,s=wi,r=yn,a=Ti,o=dn,l=Un,c=n.DEFAULT_ANISOTROPY,h=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=bs(),this.name="",this.source=new eo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==uu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case $a:t.x=t.x-Math.floor(t.x);break;case wi:t.x=t.x<0?0:1;break;case qa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case $a:t.y=t.y-Math.floor(t.y);break;case wi:t.y=t.y<0?0:1;break;case qa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ke.DEFAULT_IMAGE=null;Ke.DEFAULT_MAPPING=uu;Ke.DEFAULT_ANISOTROPY=1;var ee=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],f=l[8],d=l[1],p=l[5],g=l[9],v=l[2],m=l[6],u=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(c+1)/2,y=(p+1)/2,O=(u+1)/2,A=(h+d)/4,C=(f+v)/4,P=(g+m)/4;return S>y&&S>O?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=A/i,r=C/i):y>O?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=A/s,r=P/s):O<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(O),i=C/r,s=P/r),this.set(i,s,r,e),this}let w=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(d-h)*(d-h));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(f-v)/w,this.z=(d-h)/w,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},bl=class extends Nn{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ee(0,0,t,e),this.scissorTest=!1,this.viewport=new ee(0,0,t,e);let s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new Ke(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new eo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},On=class extends bl{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},no=class extends Ke{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Sl=class extends Ke{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var mn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],f=i[s+3],d=r[a+0],p=r[a+1],g=r[a+2],v=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=v;return}if(f!==v||l!==d||c!==p||h!==g){let m=1-o,u=l*d+c*p+h*g+f*v,w=u>=0?1:-1,S=1-u*u;if(S>Number.EPSILON){let O=Math.sqrt(S),A=Math.atan2(O,u*w);m=Math.sin(m*A)/O,o=Math.sin(o*A)/O}let y=o*w;if(l=l*m+d*y,c=c*m+p*y,h=h*m+g*y,f=f*m+v*y,m===1-o){let O=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=O,c*=O,h*=O,f*=O}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],f=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*f+l*p-c*d,t[e+1]=l*g+h*d+c*f-o*p,t[e+2]=c*g+h*p+o*d-l*f,t[e+3]=h*g-o*f-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),f=o(r/2),d=l(i/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*f+c*p*g,this._y=c*p*f-d*h*g,this._z=c*h*g+d*p*f,this._w=c*h*f-d*p*g;break;case"YXZ":this._x=d*h*f+c*p*g,this._y=c*p*f-d*h*g,this._z=c*h*g-d*p*f,this._w=c*h*f+d*p*g;break;case"ZXY":this._x=d*h*f-c*p*g,this._y=c*p*f+d*h*g,this._z=c*h*g+d*p*f,this._w=c*h*f-d*p*g;break;case"ZYX":this._x=d*h*f-c*p*g,this._y=c*p*f+d*h*g,this._z=c*h*g-d*p*f,this._w=c*h*f+d*p*g;break;case"YZX":this._x=d*h*f+c*p*g,this._y=c*p*f+d*h*g,this._z=c*h*g-d*p*f,this._w=c*h*f-d*p*g;break;case"XZY":this._x=d*h*f-c*p*g,this._y=c*p*f-d*h*g,this._z=c*h*g+d*p*f,this._w=c*h*f+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],f=e[10],d=i+o+f;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(i>o&&i>f){let p=2*Math.sqrt(1+i-o-f);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>f){let p=2*Math.sqrt(1+o-i-f);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+f-i-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ne(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+i*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-e;return this._w=p*a+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),f=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*f+this._w*d,this._x=i*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(fh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(fh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),h=2*(o*e-r*s),f=2*(r*i-a*e);return this.x=e+l*c+a*f-o*h,this.y=i+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return aa.copy(this).projectOnVector(t),this.sub(aa)}reflect(t){return this.sub(aa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ne(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},aa=new R,fh=new mn,Fn=class{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,cn):cn.fromBufferAttribute(r,a),cn.applyMatrix4(t.matrixWorld),this.expandByPoint(cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),vr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),vr.copy(i.boundingBox)),vr.applyMatrix4(t.matrixWorld),this.union(vr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,cn),cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Us),yr.subVectors(this.max,Us),$i.subVectors(t.a,Us),qi.subVectors(t.b,Us),Yi.subVectors(t.c,Us),Yn.subVectors(qi,$i),Zn.subVectors(Yi,qi),gi.subVectors($i,Yi);let e=[0,-Yn.z,Yn.y,0,-Zn.z,Zn.y,0,-gi.z,gi.y,Yn.z,0,-Yn.x,Zn.z,0,-Zn.x,gi.z,0,-gi.x,-Yn.y,Yn.x,0,-Zn.y,Zn.x,0,-gi.y,gi.x,0];return!la(e,$i,qi,Yi,yr)||(e=[1,0,0,0,1,0,0,0,1],!la(e,$i,qi,Yi,yr))?!1:(Mr.crossVectors(Yn,Zn),e=[Mr.x,Mr.y,Mr.z],la(e,$i,qi,Yi,yr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(wn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},wn=[new R,new R,new R,new R,new R,new R,new R,new R],cn=new R,vr=new Fn,$i=new R,qi=new R,Yi=new R,Yn=new R,Zn=new R,gi=new R,Us=new R,yr=new R,Mr=new R,_i=new R;function la(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){_i.fromArray(n,r);let o=s.x*Math.abs(_i.x)+s.y*Math.abs(_i.y)+s.z*Math.abs(_i.z),l=t.dot(_i),c=e.dot(_i),h=i.dot(_i);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Df=new Fn,Ns=new R,ca=new R,Ci=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Df.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ns.subVectors(t,this.center);let e=Ns.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Ns,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ca.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ns.copy(t.center).add(ca)),this.expandByPoint(Ns.copy(t.center).sub(ca))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Tn=new R,ha=new R,br=new R,Jn=new R,ua=new R,Sr=new R,da=new R,ri=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Tn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Tn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Tn.copy(this.origin).addScaledVector(this.direction,e),Tn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){ha.copy(t).add(e).multiplyScalar(.5),br.copy(e).sub(t).normalize(),Jn.copy(this.origin).sub(ha);let r=t.distanceTo(e)*.5,a=-this.direction.dot(br),o=Jn.dot(this.direction),l=-Jn.dot(br),c=Jn.lengthSq(),h=Math.abs(1-a*a),f,d,p,g;if(h>0)if(f=a*l-o,d=a*o-l,g=r*h,f>=0)if(d>=-g)if(d<=g){let v=1/h;f*=v,d*=v,p=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(ha).addScaledVector(br,d),p}intersectSphere(t,e){Tn.subVectors(t.center,this.origin);let i=Tn.dot(this.direction),s=Tn.dot(Tn)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-d.z)*f,l=(t.max.z-d.z)*f):(o=(t.max.z-d.z)*f,l=(t.min.z-d.z)*f),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Tn)!==null}intersectTriangle(t,e,i,s,r){ua.subVectors(e,t),Sr.subVectors(i,t),da.crossVectors(ua,Sr);let a=this.direction.dot(da),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Jn.subVectors(this.origin,t);let l=o*this.direction.dot(Sr.crossVectors(Jn,Sr));if(l<0)return null;let c=o*this.direction.dot(ua.cross(Jn));if(c<0||l+c>a)return null;let h=-o*Jn.dot(da);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ce=class n{constructor(t,e,i,s,r,a,o,l,c,h,f,d,p,g,v,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,h,f,d,p,g,v,m)}set(t,e,i,s,r,a,o,l,c,h,f,d,p,g,v,m){let u=this.elements;return u[0]=t,u[4]=e,u[8]=i,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=f,u[14]=d,u[3]=p,u[7]=g,u[11]=v,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/Zi.setFromMatrixColumn(t,0).length(),r=1/Zi.setFromMatrixColumn(t,1).length(),a=1/Zi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let d=a*h,p=a*f,g=o*h,v=o*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=p+g*c,e[5]=d-v*c,e[9]=-o*l,e[2]=v-d*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,p=l*f,g=c*h,v=c*f;e[0]=d+v*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=v+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,p=l*f,g=c*h,v=c*f;e[0]=d-v*o,e[4]=-a*f,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=v-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,p=a*f,g=o*h,v=o*f;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+v,e[1]=l*f,e[5]=v*c+d,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,p=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=v-d*f,e[8]=g*f+p,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*f+g,e[10]=d-v*f}else if(t.order==="XZY"){let d=a*l,p=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=d*f+v,e[5]=a*h,e[9]=p*f-g,e[2]=g*f-p,e[6]=o*h,e[10]=v*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Uf,t,Nf)}lookAt(t,e,i){let s=this.elements;return Ze.subVectors(t,e),Ze.lengthSq()===0&&(Ze.z=1),Ze.normalize(),Kn.crossVectors(i,Ze),Kn.lengthSq()===0&&(Math.abs(i.z)===1?Ze.x+=1e-4:Ze.z+=1e-4,Ze.normalize(),Kn.crossVectors(i,Ze)),Kn.normalize(),Er.crossVectors(Ze,Kn),s[0]=Kn.x,s[4]=Er.x,s[8]=Ze.x,s[1]=Kn.y,s[5]=Er.y,s[9]=Ze.y,s[2]=Kn.z,s[6]=Er.z,s[10]=Ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],f=i[5],d=i[9],p=i[13],g=i[2],v=i[6],m=i[10],u=i[14],w=i[3],S=i[7],y=i[11],O=i[15],A=s[0],C=s[4],P=s[8],E=s[12],M=s[1],I=s[5],Y=s[9],G=s[13],j=s[2],st=s[6],J=s[10],rt=s[14],W=s[3],pt=s[7],yt=s[11],Et=s[15];return r[0]=a*A+o*M+l*j+c*W,r[4]=a*C+o*I+l*st+c*pt,r[8]=a*P+o*Y+l*J+c*yt,r[12]=a*E+o*G+l*rt+c*Et,r[1]=h*A+f*M+d*j+p*W,r[5]=h*C+f*I+d*st+p*pt,r[9]=h*P+f*Y+d*J+p*yt,r[13]=h*E+f*G+d*rt+p*Et,r[2]=g*A+v*M+m*j+u*W,r[6]=g*C+v*I+m*st+u*pt,r[10]=g*P+v*Y+m*J+u*yt,r[14]=g*E+v*G+m*rt+u*Et,r[3]=w*A+S*M+y*j+O*W,r[7]=w*C+S*I+y*st+O*pt,r[11]=w*P+S*Y+y*J+O*yt,r[15]=w*E+S*G+y*rt+O*Et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],f=t[6],d=t[10],p=t[14],g=t[3],v=t[7],m=t[11],u=t[15];return g*(+r*l*f-s*c*f-r*o*d+i*c*d+s*o*p-i*l*p)+v*(+e*l*p-e*c*d+r*a*d-s*a*p+s*c*h-r*l*h)+m*(+e*c*f-e*o*p-r*a*f+i*a*p+r*o*h-i*c*h)+u*(-s*o*h-e*l*f+e*o*d+s*a*f-i*a*d+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=t[9],d=t[10],p=t[11],g=t[12],v=t[13],m=t[14],u=t[15],w=f*m*c-v*d*c+v*l*p-o*m*p-f*l*u+o*d*u,S=g*d*c-h*m*c-g*l*p+a*m*p+h*l*u-a*d*u,y=h*v*c-g*f*c+g*o*p-a*v*p-h*o*u+a*f*u,O=g*f*l-h*v*l-g*o*d+a*v*d+h*o*m-a*f*m,A=e*w+i*S+s*y+r*O;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/A;return t[0]=w*C,t[1]=(v*d*r-f*m*r-v*s*p+i*m*p+f*s*u-i*d*u)*C,t[2]=(o*m*r-v*l*r+v*s*c-i*m*c-o*s*u+i*l*u)*C,t[3]=(f*l*r-o*d*r-f*s*c+i*d*c+o*s*p-i*l*p)*C,t[4]=S*C,t[5]=(h*m*r-g*d*r+g*s*p-e*m*p-h*s*u+e*d*u)*C,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*u-e*l*u)*C,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*p+e*l*p)*C,t[8]=y*C,t[9]=(g*f*r-h*v*r-g*i*p+e*v*p+h*i*u-e*f*u)*C,t[10]=(a*v*r-g*o*r+g*i*c-e*v*c-a*i*u+e*o*u)*C,t[11]=(h*o*r-a*f*r-h*i*c+e*f*c+a*i*p-e*o*p)*C,t[12]=O*C,t[13]=(h*v*s-g*f*s+g*i*d-e*v*d-h*i*m+e*f*m)*C,t[14]=(g*o*s-a*v*s-g*i*l+e*v*l+a*i*m-e*o*m)*C,t[15]=(a*f*s-h*o*s+h*i*l-e*f*l-a*i*d+e*o*d)*C,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,f=o+o,d=r*c,p=r*h,g=r*f,v=a*h,m=a*f,u=o*f,w=l*c,S=l*h,y=l*f,O=i.x,A=i.y,C=i.z;return s[0]=(1-(v+u))*O,s[1]=(p+y)*O,s[2]=(g-S)*O,s[3]=0,s[4]=(p-y)*A,s[5]=(1-(d+u))*A,s[6]=(m+w)*A,s[7]=0,s[8]=(g+S)*C,s[9]=(m-w)*C,s[10]=(1-(d+v))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=Zi.set(s[0],s[1],s[2]).length(),a=Zi.set(s[4],s[5],s[6]).length(),o=Zi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],hn.copy(this);let c=1/r,h=1/a,f=1/o;return hn.elements[0]*=c,hn.elements[1]*=c,hn.elements[2]*=c,hn.elements[4]*=h,hn.elements[5]*=h,hn.elements[6]*=h,hn.elements[8]*=f,hn.elements[9]*=f,hn.elements[10]*=f,e.setFromRotationMatrix(hn),i.x=r,i.y=a,i.z=o,this}makePerspective(t,e,i,s,r,a,o=Ln){let l=this.elements,c=2*r/(e-t),h=2*r/(i-s),f=(e+t)/(e-t),d=(i+s)/(i-s),p,g;if(o===Ln)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Qr)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=Ln){let l=this.elements,c=1/(e-t),h=1/(i-s),f=1/(a-r),d=(e+t)*c,p=(i+s)*h,g,v;if(o===Ln)g=(a+r)*f,v=-2*f;else if(o===Qr)g=r*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Zi=new R,hn=new ce,Uf=new R(0,0,0),Nf=new R(1,1,1),Kn=new R,Er=new R,Ze=new R,ph=new ce,mh=new mn,Mn=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ne(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ne(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return ph.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ph,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return mh.setFromEuler(this),this.setFromQuaternion(mh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Mn.DEFAULT_ORDER="XYZ";var qs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Of=0,gh=new R,Ji=new mn,An=new ce,wr=new R,Os=new R,Ff=new R,Bf=new mn,_h=new R(1,0,0),xh=new R(0,1,0),vh=new R(0,0,1),yh={type:"added"},kf={type:"removed"},Ki={type:"childadded",child:null},fa={type:"childremoved",child:null},Re=class n extends Nn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=bs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new R,e=new Mn,i=new mn,s=new R(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ce},normalMatrix:{value:new kt}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ji.setFromAxisAngle(t,e),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(t,e){return Ji.setFromAxisAngle(t,e),this.quaternion.premultiply(Ji),this}rotateX(t){return this.rotateOnAxis(_h,t)}rotateY(t){return this.rotateOnAxis(xh,t)}rotateZ(t){return this.rotateOnAxis(vh,t)}translateOnAxis(t,e){return gh.copy(t).applyQuaternion(this.quaternion),this.position.add(gh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(_h,t)}translateY(t){return this.translateOnAxis(xh,t)}translateZ(t){return this.translateOnAxis(vh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?wr.copy(t):wr.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(Os,wr,this.up):An.lookAt(wr,Os,this.up),this.quaternion.setFromRotationMatrix(An),s&&(An.extractRotation(s.matrixWorld),Ji.setFromRotationMatrix(An),this.quaternion.premultiply(Ji.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(yh),Ki.child=t,this.dispatchEvent(Ki),Ki.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(kf),fa.child=t,this.dispatchEvent(fa),fa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),An.multiply(t.parent.matrixWorld)),t.applyMatrix4(An),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(yh),Ki.child=t,this.dispatchEvent(Ki),Ki.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,t,Ff),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,Bf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),f=a(t.shapes),d=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};Re.DEFAULT_UP=new R(0,1,0);Re.DEFAULT_MATRIX_AUTO_UPDATE=!0;Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var un=new R,Cn=new R,pa=new R,Rn=new R,ji=new R,Qi=new R,Mh=new R,ma=new R,ga=new R,_a=new R,xa=new ee,va=new ee,ya=new ee,ei=class n{constructor(t=new R,e=new R,i=new R){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),un.subVectors(t,e),s.cross(un);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){un.subVectors(s,e),Cn.subVectors(i,e),pa.subVectors(t,e);let a=un.dot(un),o=un.dot(Cn),l=un.dot(pa),c=Cn.dot(Cn),h=Cn.dot(pa),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let d=1/f,p=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Rn)===null?!1:Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,Rn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Rn.x),l.addScaledVector(a,Rn.y),l.addScaledVector(o,Rn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return xa.setScalar(0),va.setScalar(0),ya.setScalar(0),xa.fromBufferAttribute(t,e),va.fromBufferAttribute(t,i),ya.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(xa,r.x),a.addScaledVector(va,r.y),a.addScaledVector(ya,r.z),a}static isFrontFacing(t,e,i,s){return un.subVectors(i,e),Cn.subVectors(t,e),un.cross(Cn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return un.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),un.cross(Cn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;ji.subVectors(s,i),Qi.subVectors(r,i),ma.subVectors(t,i);let l=ji.dot(ma),c=Qi.dot(ma);if(l<=0&&c<=0)return e.copy(i);ga.subVectors(t,s);let h=ji.dot(ga),f=Qi.dot(ga);if(h>=0&&f<=h)return e.copy(s);let d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(ji,a);_a.subVectors(t,r);let p=ji.dot(_a),g=Qi.dot(_a);if(g>=0&&p<=g)return e.copy(r);let v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(Qi,o);let m=h*g-p*f;if(m<=0&&f-h>=0&&p-g>=0)return Mh.subVectors(r,s),o=(f-h)/(f-h+(p-g)),e.copy(s).addScaledVector(Mh,o);let u=1/(m+v+d);return a=v*u,o=d*u,e.copy(i).addScaledVector(ji,a).addScaledVector(Qi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},wu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jn={h:0,s:0,l:0},Tr={h:0,s:0,l:0};function Ma(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Pt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ue){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=$t.workingColorSpace){return this.r=t,this.g=e,this.b=i,$t.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=$t.workingColorSpace){if(t=ac(t,1),e=Ne(e,0,1),i=Ne(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Ma(a,r,t+1/3),this.g=Ma(a,r,t),this.b=Ma(a,r,t-1/3)}return $t.toWorkingColorSpace(this,s),this}setStyle(t,e=Ue){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ue){let i=wu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Dn(t.r),this.g=Dn(t.g),this.b=Dn(t.b),this}copyLinearToSRGB(t){return this.r=cs(t.r),this.g=cs(t.g),this.b=cs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ue){return $t.fromWorkingColorSpace(De.copy(this),t),Math.round(Ne(De.r*255,0,255))*65536+Math.round(Ne(De.g*255,0,255))*256+Math.round(Ne(De.b*255,0,255))}getHexString(t=Ue){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.fromWorkingColorSpace(De.copy(this),e);let i=De.r,s=De.g,r=De.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=$t.workingColorSpace){return $t.fromWorkingColorSpace(De.copy(this),e),t.r=De.r,t.g=De.g,t.b=De.b,t}getStyle(t=Ue){$t.fromWorkingColorSpace(De.copy(this),t);let e=De.r,i=De.g,s=De.b;return t!==Ue?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(jn),this.setHSL(jn.h+t,jn.s+e,jn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(jn),t.getHSL(Tr);let i=Vs(jn.h,Tr.h,e),s=Vs(jn.s,Tr.s,e),r=Vs(jn.l,Tr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},De=new Pt;Pt.NAMES=wu;var zf=0,Bn=class extends Nn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=bs(),this.name="",this.blending=os,this.side=pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Na,this.blendDst=Oa,this.blendEquation=Si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ih,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wi,this.stencilZFail=Wi,this.stencilZPass=Wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==os&&(i.blending=this.blending),this.side!==pn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Na&&(i.blendSrc=this.blendSrc),this.blendDst!==Oa&&(i.blendDst=this.blendDst),this.blendEquation!==Si&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==us&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ih&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Wi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Wi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},je=class extends Bn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.combine=hu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ge=new R,Ar=new It,_e=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=sh,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ar.fromBufferAttribute(this,e),Ar.applyMatrix3(t),this.setXY(e,Ar.x,Ar.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix3(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix4(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ge.fromBufferAttribute(this,e),ge.applyNormalMatrix(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ge.fromBufferAttribute(this,e),ge.transformDirection(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ss(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Fe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ss(e,this.array)),e}setX(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ss(e,this.array)),e}setY(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ss(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ss(e,this.array)),e}setW(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),i=Fe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),i=Fe(i,this.array),s=Fe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),i=Fe(i,this.array),s=Fe(s,this.array),r=Fe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==sh&&(t.usage=this.usage),t}};var io=class extends _e{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var so=class extends _e{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var pe=class extends _e{constructor(t,e,i){super(new Float32Array(t),e,i)}},Hf=0,sn=new ce,ba=new Re,ts=new R,Je=new Fn,Fs=new Fn,Se=new R,we=class n extends Nn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=bs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Eu(t)?so:io)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new kt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return sn.makeRotationFromQuaternion(t),this.applyMatrix4(sn),this}rotateX(t){return sn.makeRotationX(t),this.applyMatrix4(sn),this}rotateY(t){return sn.makeRotationY(t),this.applyMatrix4(sn),this}rotateZ(t){return sn.makeRotationZ(t),this.applyMatrix4(sn),this}translate(t,e,i){return sn.makeTranslation(t,e,i),this.applyMatrix4(sn),this}scale(t,e,i){return sn.makeScale(t,e,i),this.applyMatrix4(sn),this}lookAt(t){return ba.lookAt(t),ba.updateMatrix(),this.applyMatrix4(ba.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ts).negate(),this.translate(ts.x,ts.y,ts.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new pe(i,3))}else{for(let i=0,s=e.count;i<s;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Je.setFromBufferAttribute(r),this.morphTargetsRelative?(Se.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(Se),Se.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(Se)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ci);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){let i=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Fs.setFromBufferAttribute(o),this.morphTargetsRelative?(Se.addVectors(Je.min,Fs.min),Je.expandByPoint(Se),Se.addVectors(Je.max,Fs.max),Je.expandByPoint(Se)):(Je.expandByPoint(Fs.min),Je.expandByPoint(Fs.max))}Je.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Se.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Se));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Se.fromBufferAttribute(o,c),l&&(ts.fromBufferAttribute(t,c),Se.add(ts)),s=Math.max(s,i.distanceToSquared(Se))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _e(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<i.count;P++)o[P]=new R,l[P]=new R;let c=new R,h=new R,f=new R,d=new It,p=new It,g=new It,v=new R,m=new R;function u(P,E,M){c.fromBufferAttribute(i,P),h.fromBufferAttribute(i,E),f.fromBufferAttribute(i,M),d.fromBufferAttribute(r,P),p.fromBufferAttribute(r,E),g.fromBufferAttribute(r,M),h.sub(c),f.sub(c),p.sub(d),g.sub(d);let I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(I),m.copy(f).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(I),o[P].add(v),o[E].add(v),o[M].add(v),l[P].add(m),l[E].add(m),l[M].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let P=0,E=w.length;P<E;++P){let M=w[P],I=M.start,Y=M.count;for(let G=I,j=I+Y;G<j;G+=3)u(t.getX(G+0),t.getX(G+1),t.getX(G+2))}let S=new R,y=new R,O=new R,A=new R;function C(P){O.fromBufferAttribute(s,P),A.copy(O);let E=o[P];S.copy(E),S.sub(O.multiplyScalar(O.dot(E))).normalize(),y.crossVectors(A,E);let I=y.dot(l[P])<0?-1:1;a.setXYZW(P,S.x,S.y,S.z,I)}for(let P=0,E=w.length;P<E;++P){let M=w[P],I=M.start,Y=M.count;for(let G=I,j=I+Y;G<j;G+=3)C(t.getX(G+0)),C(t.getX(G+1)),C(t.getX(G+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new _e(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let s=new R,r=new R,a=new R,o=new R,l=new R,c=new R,h=new R,f=new R;if(t)for(let d=0,p=t.count;d<p;d+=3){let g=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Se.fromBufferAttribute(t,e),Se.normalize(),t.setXYZ(e,Se.x,Se.y,Se.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,f=o.normalized,d=new c.constructor(l.length*h),p=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*h;for(let u=0;u<h;u++)d[g++]=c[p++]}return new _e(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let d=c[h],p=t(d,i);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){let p=c[f];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],f=r[c];for(let d=0,p=f.length;d<p;d++)h.push(f[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},bh=new ce,xi=new ri,Cr=new Ci,Sh=new R,Rr=new R,Ir=new R,Pr=new R,Sa=new R,Lr=new R,Eh=new R,Dr=new R,qt=class extends Re{constructor(t=new we,e=new je){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Lr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&(Sa.fromBufferAttribute(f,t),a?Lr.addScaledVector(Sa,h):Lr.addScaledVector(Sa.sub(e),h))}e.add(Lr)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Cr.copy(i.boundingSphere),Cr.applyMatrix4(r),xi.copy(t.ray).recast(t.near),!(Cr.containsPoint(xi.origin)===!1&&(xi.intersectSphere(Cr,Sh)===null||xi.origin.distanceToSquared(Sh)>(t.far-t.near)**2))&&(bh.copy(r).invert(),xi.copy(t.ray).applyMatrix4(bh),!(i.boundingBox!==null&&xi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,xi)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){let m=d[g],u=a[m.materialIndex],w=Math.max(m.start,p.start),S=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=w,O=S;y<O;y+=3){let A=o.getX(y),C=o.getX(y+1),P=o.getX(y+2);s=Ur(this,u,t,i,c,h,f,A,C,P),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=g,u=v;m<u;m+=3){let w=o.getX(m),S=o.getX(m+1),y=o.getX(m+2);s=Ur(this,a,t,i,c,h,f,w,S,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){let m=d[g],u=a[m.materialIndex],w=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=w,O=S;y<O;y+=3){let A=y,C=y+1,P=y+2;s=Ur(this,u,t,i,c,h,f,A,C,P),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,u=v;m<u;m+=3){let w=m,S=m+1,y=m+2;s=Ur(this,a,t,i,c,h,f,w,S,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Vf(n,t,e,i,s,r,a,o){let l;if(t.side===Ee?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===pn,o),l===null)return null;Dr.copy(o),Dr.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Dr);return c<e.near||c>e.far?null:{distance:c,point:Dr.clone(),object:n}}function Ur(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,Rr),n.getVertexPosition(l,Ir),n.getVertexPosition(c,Pr);let h=Vf(n,t,e,i,Rr,Ir,Pr,Eh);if(h){let f=new R;ei.getBarycoord(Eh,Rr,Ir,Pr,f),s&&(h.uv=ei.getInterpolatedAttribute(s,o,l,c,f,new It)),r&&(h.uv1=ei.getInterpolatedAttribute(r,o,l,c,f,new It)),a&&(h.normal=ei.getInterpolatedAttribute(a,o,l,c,f,new R),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new R,materialIndex:0};ei.getNormal(Rr,Ir,Pr,d.normal),h.face=d,h.barycoord=f}return h}var kn=class n extends we{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],d=0,p=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,s,a,2),g("x","z","y",1,-1,t,i,-e,s,a,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new pe(c,3)),this.setAttribute("normal",new pe(h,3)),this.setAttribute("uv",new pe(f,2));function g(v,m,u,w,S,y,O,A,C,P,E){let M=y/C,I=O/P,Y=y/2,G=O/2,j=A/2,st=C+1,J=P+1,rt=0,W=0,pt=new R;for(let yt=0;yt<J;yt++){let Et=yt*I-G;for(let Lt=0;Lt<st;Lt++){let Wt=Lt*M-Y;pt[v]=Wt*w,pt[m]=Et*S,pt[u]=j,c.push(pt.x,pt.y,pt.z),pt[v]=0,pt[m]=0,pt[u]=A>0?1:-1,h.push(pt.x,pt.y,pt.z),f.push(Lt/C),f.push(1-yt/P),rt+=1}}for(let yt=0;yt<P;yt++)for(let Et=0;Et<C;Et++){let Lt=d+Et+st*yt,Wt=d+Et+st*(yt+1),Q=d+(Et+1)+st*(yt+1),lt=d+(Et+1)+st*yt;l.push(Lt,Wt,lt),l.push(Wt,Q,lt),W+=6}o.addGroup(p,W,E),p+=W,d+=rt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function gs(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Be(n){let t={};for(let e=0;e<n.length;e++){let i=gs(n[e]);for(let s in i)t[s]=i[s]}return t}function Gf(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Tu(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$t.workingColorSpace}var Wf={clone:gs,merge:Be},Xf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$f=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,rn=class extends Bn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xf,this.fragmentShader=$f,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=gs(t.uniforms),this.uniformsGroups=Gf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},ro=class extends Re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=Ln}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Qn=new R,wh=new It,Th=new It,Ce=class extends ro{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=$s*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ls*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $s*2*Math.atan(Math.tan(ls*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Qn.x,Qn.y).multiplyScalar(-t/Qn.z),Qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qn.x,Qn.y).multiplyScalar(-t/Qn.z)}getViewSize(t,e){return this.getViewBounds(t,wh,Th),e.subVectors(Th,wh)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ls*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},es=-90,ns=1,El=class extends Re{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ce(es,ns,t,e);s.layers=this.layers,this.add(s);let r=new Ce(es,ns,t,e);r.layers=this.layers,this.add(r);let a=new Ce(es,ns,t,e);a.layers=this.layers,this.add(a);let o=new Ce(es,ns,t,e);o.layers=this.layers,this.add(o);let l=new Ce(es,ns,t,e);l.layers=this.layers,this.add(l);let c=new Ce(es,ns,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Ln)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Qr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,a),t.setRenderTarget(i,2,s),t.render(e,o),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(f,d,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},oo=class extends Ke{constructor(t,e,i,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ds,super(t,e,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},wl=class extends On{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new oo(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:yn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new kn(5,5,5),r=new rn({name:"CubemapFromEquirect",uniforms:gs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ee,blending:ii});r.uniforms.tEquirect.value=e;let a=new qt(s,r),o=e.minFilter;return e.minFilter===Ti&&(e.minFilter=yn),new El(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}},Ea=new R,qf=new R,Yf=new kt,We=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Ea.subVectors(i,e).cross(qf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Ea),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Yf.getNormalMatrix(t),s=this.coplanarPoint(Ea).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},vi=new Ci,Nr=new R,Ys=class{constructor(t=new We,e=new We,i=new We,s=new We,r=new We,a=new We){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ln){let i=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],f=s[6],d=s[7],p=s[8],g=s[9],v=s[10],m=s[11],u=s[12],w=s[13],S=s[14],y=s[15];if(i[0].setComponents(l-r,d-c,m-p,y-u).normalize(),i[1].setComponents(l+r,d+c,m+p,y+u).normalize(),i[2].setComponents(l+a,d+h,m+g,y+w).normalize(),i[3].setComponents(l-a,d-h,m-g,y-w).normalize(),i[4].setComponents(l-o,d-f,m-v,y-S).normalize(),e===Ln)i[5].setComponents(l+o,d+f,m+v,y+S).normalize();else if(e===Qr)i[5].setComponents(o,f,v,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),vi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vi)}intersectsSprite(t){return vi.center.set(0,0,0),vi.radius=.7071067811865476,vi.applyMatrix4(t.matrixWorld),this.intersectsSphere(vi)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Nr.x=s.normal.x>0?t.max.x:t.min.x,Nr.y=s.normal.y>0?t.max.y:t.min.y,Nr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Nr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Au(){let n=null,t=!1,e=null,i=null;function s(r,a){e(r,a),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Zf(n){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){let h=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,h);else{f.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<f.length;p++){let g=f[d],v=f[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,f[d]=v)}f.length=d+1;for(let p=0,g=f.length;p<g;p++){let v=f[p];n.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Ri=class n extends we{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,f=t/o,d=e/l,p=[],g=[],v=[],m=[];for(let u=0;u<h;u++){let w=u*d-a;for(let S=0;S<c;S++){let y=S*f-r;g.push(y,-w,0),v.push(0,0,1),m.push(S/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let w=0;w<o;w++){let S=w+c*u,y=w+c*(u+1),O=w+1+c*(u+1),A=w+1+c*u;p.push(S,y,A),p.push(y,O,A)}this.setIndex(p),this.setAttribute("position",new pe(g,3)),this.setAttribute("normal",new pe(v,3)),this.setAttribute("uv",new pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},Jf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,jf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ep=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,np=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ip=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,rp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,op=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ap=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,cp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,hp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,up=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_p=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,xp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,vp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,yp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Mp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,bp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ep=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ap=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Rp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ip=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Pp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Dp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Up=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Np=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Op=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Bp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Vp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Gp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$p=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Yp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Zp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Jp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Kp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,em=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,im=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,rm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,om=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,am=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,um=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,dm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,pm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,mm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_m=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,vm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ym=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Em=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,wm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Am=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Im=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Lm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Dm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Um=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Nm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Om=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Fm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,km=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Wm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ym=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Zm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ng=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ig=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,sg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,og=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ag=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,hg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ug=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,pg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,gg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_g=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,yg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Eg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ag=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ht={alphahash_fragment:Jf,alphahash_pars_fragment:Kf,alphamap_fragment:jf,alphamap_pars_fragment:Qf,alphatest_fragment:tp,alphatest_pars_fragment:ep,aomap_fragment:np,aomap_pars_fragment:ip,batching_pars_vertex:sp,batching_vertex:rp,begin_vertex:op,beginnormal_vertex:ap,bsdfs:lp,iridescence_fragment:cp,bumpmap_pars_fragment:hp,clipping_planes_fragment:up,clipping_planes_pars_fragment:dp,clipping_planes_pars_vertex:fp,clipping_planes_vertex:pp,color_fragment:mp,color_pars_fragment:gp,color_pars_vertex:_p,color_vertex:xp,common:vp,cube_uv_reflection_fragment:yp,defaultnormal_vertex:Mp,displacementmap_pars_vertex:bp,displacementmap_vertex:Sp,emissivemap_fragment:Ep,emissivemap_pars_fragment:wp,colorspace_fragment:Tp,colorspace_pars_fragment:Ap,envmap_fragment:Cp,envmap_common_pars_fragment:Rp,envmap_pars_fragment:Ip,envmap_pars_vertex:Pp,envmap_physical_pars_fragment:Vp,envmap_vertex:Lp,fog_vertex:Dp,fog_pars_vertex:Up,fog_fragment:Np,fog_pars_fragment:Op,gradientmap_pars_fragment:Fp,lightmap_pars_fragment:Bp,lights_lambert_fragment:kp,lights_lambert_pars_fragment:zp,lights_pars_begin:Hp,lights_toon_fragment:Gp,lights_toon_pars_fragment:Wp,lights_phong_fragment:Xp,lights_phong_pars_fragment:$p,lights_physical_fragment:qp,lights_physical_pars_fragment:Yp,lights_fragment_begin:Zp,lights_fragment_maps:Jp,lights_fragment_end:Kp,logdepthbuf_fragment:jp,logdepthbuf_pars_fragment:Qp,logdepthbuf_pars_vertex:tm,logdepthbuf_vertex:em,map_fragment:nm,map_pars_fragment:im,map_particle_fragment:sm,map_particle_pars_fragment:rm,metalnessmap_fragment:om,metalnessmap_pars_fragment:am,morphinstance_vertex:lm,morphcolor_vertex:cm,morphnormal_vertex:hm,morphtarget_pars_vertex:um,morphtarget_vertex:dm,normal_fragment_begin:fm,normal_fragment_maps:pm,normal_pars_fragment:mm,normal_pars_vertex:gm,normal_vertex:_m,normalmap_pars_fragment:xm,clearcoat_normal_fragment_begin:vm,clearcoat_normal_fragment_maps:ym,clearcoat_pars_fragment:Mm,iridescence_pars_fragment:bm,opaque_fragment:Sm,packing:Em,premultiplied_alpha_fragment:wm,project_vertex:Tm,dithering_fragment:Am,dithering_pars_fragment:Cm,roughnessmap_fragment:Rm,roughnessmap_pars_fragment:Im,shadowmap_pars_fragment:Pm,shadowmap_pars_vertex:Lm,shadowmap_vertex:Dm,shadowmask_pars_fragment:Um,skinbase_vertex:Nm,skinning_pars_vertex:Om,skinning_vertex:Fm,skinnormal_vertex:Bm,specularmap_fragment:km,specularmap_pars_fragment:zm,tonemapping_fragment:Hm,tonemapping_pars_fragment:Vm,transmission_fragment:Gm,transmission_pars_fragment:Wm,uv_pars_fragment:Xm,uv_pars_vertex:$m,uv_vertex:qm,worldpos_vertex:Ym,background_vert:Zm,background_frag:Jm,backgroundCube_vert:Km,backgroundCube_frag:jm,cube_vert:Qm,cube_frag:tg,depth_vert:eg,depth_frag:ng,distanceRGBA_vert:ig,distanceRGBA_frag:sg,equirect_vert:rg,equirect_frag:og,linedashed_vert:ag,linedashed_frag:lg,meshbasic_vert:cg,meshbasic_frag:hg,meshlambert_vert:ug,meshlambert_frag:dg,meshmatcap_vert:fg,meshmatcap_frag:pg,meshnormal_vert:mg,meshnormal_frag:gg,meshphong_vert:_g,meshphong_frag:xg,meshphysical_vert:vg,meshphysical_frag:yg,meshtoon_vert:Mg,meshtoon_frag:bg,points_vert:Sg,points_frag:Eg,shadow_vert:wg,shadow_frag:Tg,sprite_vert:Ag,sprite_frag:Cg},ft={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},vn={basic:{uniforms:Be([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:Be([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Pt(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:Be([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:Be([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:Be([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new Pt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:Be([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:Be([ft.points,ft.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:Be([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:Be([ft.common,ft.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:Be([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:Be([ft.sprite,ft.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:Be([ft.common,ft.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:Be([ft.lights,ft.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};vn.physical={uniforms:Be([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};var Or={r:0,b:0,g:0},yi=new Mn,Rg=new ce;function Ig(n,t,e,i,s,r,a){let o=new Pt(0),l=r===!0?0:1,c,h,f=null,d=0,p=null;function g(w){let S=w.isScene===!0?w.background:null;return S&&S.isTexture&&(S=(w.backgroundBlurriness>0?e:t).get(S)),S}function v(w){let S=!1,y=g(w);y===null?u(o,l):y&&y.isColor&&(u(y,1),S=!0);let O=n.xr.getEnvironmentBlendMode();O==="additive"?i.buffers.color.setClear(0,0,0,1,a):O==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(w,S){let y=g(S);y&&(y.isCubeTexture||y.mapping===Eo)?(h===void 0&&(h=new qt(new kn(1,1,1),new rn({name:"BackgroundCubeMaterial",uniforms:gs(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:Ee,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),yi.copy(S.backgroundRotation),yi.x*=-1,yi.y*=-1,yi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Rg.makeRotationFromEuler(yi)),h.material.toneMapped=$t.getTransfer(y.colorSpace)!==te,(f!==y||d!==y.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,f=y,d=y.version,p=n.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new qt(new Ri(2,2),new rn({name:"BackgroundMaterial",uniforms:gs(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=$t.getTransfer(y.colorSpace)!==te,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||d!==y.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=y,d=y.version,p=n.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function u(w,S){w.getRGB(Or,Tu(n)),i.buffers.color.setClear(Or.r,Or.g,Or.b,S,a)}return{getClearColor:function(){return o},setClearColor:function(w,S=1){o.set(w),l=S,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,u(o,l)},render:v,addToRenderList:m}}function Pg(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,a=!1;function o(M,I,Y,G,j){let st=!1,J=f(G,Y,I);r!==J&&(r=J,c(r.object)),st=p(M,G,Y,j),st&&g(M,G,Y,j),j!==null&&t.update(j,n.ELEMENT_ARRAY_BUFFER),(st||a)&&(a=!1,y(M,I,Y,G),j!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function h(M){return n.deleteVertexArray(M)}function f(M,I,Y){let G=Y.wireframe===!0,j=i[M.id];j===void 0&&(j={},i[M.id]=j);let st=j[I.id];st===void 0&&(st={},j[I.id]=st);let J=st[G];return J===void 0&&(J=d(l()),st[G]=J),J}function d(M){let I=[],Y=[],G=[];for(let j=0;j<e;j++)I[j]=0,Y[j]=0,G[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:Y,attributeDivisors:G,object:M,attributes:{},index:null}}function p(M,I,Y,G){let j=r.attributes,st=I.attributes,J=0,rt=Y.getAttributes();for(let W in rt)if(rt[W].location>=0){let yt=j[W],Et=st[W];if(Et===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(Et=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(Et=M.instanceColor)),yt===void 0||yt.attribute!==Et||Et&&yt.data!==Et.data)return!0;J++}return r.attributesNum!==J||r.index!==G}function g(M,I,Y,G){let j={},st=I.attributes,J=0,rt=Y.getAttributes();for(let W in rt)if(rt[W].location>=0){let yt=st[W];yt===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(yt=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(yt=M.instanceColor));let Et={};Et.attribute=yt,yt&&yt.data&&(Et.data=yt.data),j[W]=Et,J++}r.attributes=j,r.attributesNum=J,r.index=G}function v(){let M=r.newAttributes;for(let I=0,Y=M.length;I<Y;I++)M[I]=0}function m(M){u(M,0)}function u(M,I){let Y=r.newAttributes,G=r.enabledAttributes,j=r.attributeDivisors;Y[M]=1,G[M]===0&&(n.enableVertexAttribArray(M),G[M]=1),j[M]!==I&&(n.vertexAttribDivisor(M,I),j[M]=I)}function w(){let M=r.newAttributes,I=r.enabledAttributes;for(let Y=0,G=I.length;Y<G;Y++)I[Y]!==M[Y]&&(n.disableVertexAttribArray(Y),I[Y]=0)}function S(M,I,Y,G,j,st,J){J===!0?n.vertexAttribIPointer(M,I,Y,j,st):n.vertexAttribPointer(M,I,Y,G,j,st)}function y(M,I,Y,G){v();let j=G.attributes,st=Y.getAttributes(),J=I.defaultAttributeValues;for(let rt in st){let W=st[rt];if(W.location>=0){let pt=j[rt];if(pt===void 0&&(rt==="instanceMatrix"&&M.instanceMatrix&&(pt=M.instanceMatrix),rt==="instanceColor"&&M.instanceColor&&(pt=M.instanceColor)),pt!==void 0){let yt=pt.normalized,Et=pt.itemSize,Lt=t.get(pt);if(Lt===void 0)continue;let Wt=Lt.buffer,Q=Lt.type,lt=Lt.bytesPerElement,St=Q===n.INT||Q===n.UNSIGNED_INT||pt.gpuType===ec;if(pt.isInterleavedBufferAttribute){let ht=pt.data,gt=ht.stride,Ut=pt.offset;if(ht.isInstancedInterleavedBuffer){for(let zt=0;zt<W.locationSize;zt++)u(W.location+zt,ht.meshPerAttribute);M.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let zt=0;zt<W.locationSize;zt++)m(W.location+zt);n.bindBuffer(n.ARRAY_BUFFER,Wt);for(let zt=0;zt<W.locationSize;zt++)S(W.location+zt,Et/W.locationSize,Q,yt,gt*lt,(Ut+Et/W.locationSize*zt)*lt,St)}else{if(pt.isInstancedBufferAttribute){for(let ht=0;ht<W.locationSize;ht++)u(W.location+ht,pt.meshPerAttribute);M.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let ht=0;ht<W.locationSize;ht++)m(W.location+ht);n.bindBuffer(n.ARRAY_BUFFER,Wt);for(let ht=0;ht<W.locationSize;ht++)S(W.location+ht,Et/W.locationSize,Q,yt,Et*lt,Et/W.locationSize*ht*lt,St)}}else if(J!==void 0){let yt=J[rt];if(yt!==void 0)switch(yt.length){case 2:n.vertexAttrib2fv(W.location,yt);break;case 3:n.vertexAttrib3fv(W.location,yt);break;case 4:n.vertexAttrib4fv(W.location,yt);break;default:n.vertexAttrib1fv(W.location,yt)}}}}w()}function O(){P();for(let M in i){let I=i[M];for(let Y in I){let G=I[Y];for(let j in G)h(G[j].object),delete G[j];delete I[Y]}delete i[M]}}function A(M){if(i[M.id]===void 0)return;let I=i[M.id];for(let Y in I){let G=I[Y];for(let j in G)h(G[j].object),delete G[j];delete I[Y]}delete i[M.id]}function C(M){for(let I in i){let Y=i[I];if(Y[M.id]===void 0)continue;let G=Y[M.id];for(let j in G)h(G[j].object),delete G[j];delete Y[M.id]}}function P(){E(),a=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:E,dispose:O,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:w}}function Lg(n,t,e){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function a(c,h,f){f!==0&&(n.drawArraysInstanced(i,c,h,f),e.update(h,i,f))}function o(c,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,f);let p=0;for(let g=0;g<f;g++)p+=h[g];e.update(p,i,1)}function l(c,h,f,d){if(f===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,f);let g=0;for(let v=0;v<f;v++)g+=h[v]*d[v];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Dg(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==dn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let P=C===tr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Un&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Pn&&!P)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),u=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),O=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:w,maxVaryings:S,maxFragmentUniforms:y,vertexTextures:O,maxSamples:A}}function Ug(n){let t=this,e=null,i=0,s=!1,r=!1,a=new We,o=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let p=f.length!==0||d||i!==0||s;return s=d,i=f.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=h(f,d,0)},this.setState=function(f,d,p){let g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,u=n.get(f);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let w=r?0:i,S=w*4,y=u.clippingState||null;l.value=y,y=h(g,d,S,p);for(let O=0;O!==S;++O)y[O]=e[O];u.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(f,d,p,g){let v=f!==null?f.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let u=p+v*4,w=d.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<u)&&(m=new Float32Array(u));for(let S=0,y=p;S!==v;++S,y+=4)a.copy(f[S]).applyMatrix4(w,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function Ng(n){let t=new WeakMap;function e(a,o){return o===Wa?a.mapping=ds:o===Xa&&(a.mapping=fs),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===Wa||o===Xa)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new wl(l.height);return c.fromEquirectangularTexture(n,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var ao=class extends ro{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},rs=4,Ah=[.125,.215,.35,.446,.526,.582],Ei=20,wa=new ao,Ch=new Pt,Ta=null,Aa=0,Ca=0,Ra=!1,bi=(1+Math.sqrt(5))/2,is=1/bi,Rh=[new R(-bi,is,0),new R(bi,is,0),new R(-is,0,bi),new R(is,0,bi),new R(0,bi,-is),new R(0,bi,is),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],_s=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Ta=this._renderer.getRenderTarget(),Aa=this._renderer.getActiveCubeFace(),Ca=this._renderer.getActiveMipmapLevel(),Ra=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ph(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ta,Aa,Ca),this._renderer.xr.enabled=Ra,t.scissorTest=!1,Fr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ds||t.mapping===fs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ta=this._renderer.getRenderTarget(),Aa=this._renderer.getActiveCubeFace(),Ca=this._renderer.getActiveMipmapLevel(),Ra=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:tr,format:dn,colorSpace:Ms,depthBuffer:!1},s=Ih(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ih(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Og(r)),this._blurMaterial=Fg(r,t,e)}return s}_compileMaterial(t){let e=new qt(this._lodPlanes[0],t);this._renderer.compile(e,wa)}_sceneToCubeUV(t,e,i,s){let o=new Ce(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Ch),h.toneMapping=si,h.autoClear=!1;let p=new je({name:"PMREM.Background",side:Ee,depthWrite:!1,depthTest:!1}),g=new qt(new kn,p),v=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,v=!0):(p.color.copy(Ch),v=!0);for(let u=0;u<6;u++){let w=u%3;w===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):w===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));let S=this._cubeSize;Fr(s,w*S,u>2?S:0,S,S),h.setRenderTarget(s),v&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=f,t.background=m}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===ds||t.mapping===fs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ph());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new qt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Fr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,wa)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Rh[(s-r-1)%Rh.length];this._blur(t,r-1,r,a,o)}e.autoClear=i}_blur(t,e,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new qt(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ei-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):Ei;m>Ei&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ei}`);let u=[],w=0;for(let C=0;C<Ei;++C){let P=C/v,E=Math.exp(-P*P/2);u.push(E),C===0?w+=E:C<m&&(w+=2*E)}for(let C=0;C<u.length;C++)u[C]=u[C]/w;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=u,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-i;let y=this._sizeLods[s],O=3*y*(s>S-rs?s-S+rs:0),A=4*(this._cubeSize-y);Fr(e,O,A,3*y,2*y),l.setRenderTarget(e),l.render(f,wa)}};function Og(n){let t=[],e=[],i=[],s=n,r=n-rs+1+Ah.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>n-rs?l=Ah[a-n+rs-1]:a===0&&(l=0),i.push(l);let c=1/(o-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],p=6,g=6,v=3,m=2,u=1,w=new Float32Array(v*g*p),S=new Float32Array(m*g*p),y=new Float32Array(u*g*p);for(let A=0;A<p;A++){let C=A%3*2/3-1,P=A>2?0:-1,E=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];w.set(E,v*g*A),S.set(d,m*g*A);let M=[A,A,A,A,A,A];y.set(M,u*g*A)}let O=new we;O.setAttribute("position",new _e(w,v)),O.setAttribute("uv",new _e(S,m)),O.setAttribute("faceIndex",new _e(y,u)),t.push(O),s>rs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Ih(n,t,e){let i=new On(n,t,e);return i.texture.mapping=Eo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Fr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Fg(n,t,e){let i=new Float32Array(Ei),s=new R(0,1,0);return new rn({name:"SphericalGaussianBlur",defines:{n:Ei,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Ph(){return new rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Lh(){return new rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function lc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Bg(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===Wa||l===Xa,h=l===ds||l===fs;if(c||h){let f=t.get(o),d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new _s(n)),f=c?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{let p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new _s(n)),f=c?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function kg(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&zs("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function zg(n,t,e,i){let s={},r=new WeakMap;function a(f){let d=f.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let v=d.morphAttributes[g];for(let m=0,u=v.length;m<u;m++)t.remove(v[m])}d.removeEventListener("dispose",a),delete s[d.id];let p=r.get(d);p&&(t.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(f,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(f){let d=f.attributes;for(let g in d)t.update(d[g],n.ARRAY_BUFFER);let p=f.morphAttributes;for(let g in p){let v=p[g];for(let m=0,u=v.length;m<u;m++)t.update(v[m],n.ARRAY_BUFFER)}}function c(f){let d=[],p=f.index,g=f.attributes.position,v=0;if(p!==null){let w=p.array;v=p.version;for(let S=0,y=w.length;S<y;S+=3){let O=w[S+0],A=w[S+1],C=w[S+2];d.push(O,A,A,C,C,O)}}else if(g!==void 0){let w=g.array;v=g.version;for(let S=0,y=w.length/3-1;S<y;S+=3){let O=S+0,A=S+1,C=S+2;d.push(O,A,A,C,C,O)}}else return;let m=new(Eu(d)?so:io)(d,1);m.version=v;let u=r.get(f);u&&t.remove(u),r.set(f,m)}function h(f){let d=r.get(f);if(d){let p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function Hg(n,t,e){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,p){n.drawElements(i,p,r,d*a),e.update(p,i,1)}function c(d,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,d*a,g),e.update(p,i,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,d,0,g);let m=0;for(let u=0;u<g;u++)m+=p[u];e.update(m,i,1)}function f(d,p,g,v){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<d.length;u++)c(d[u]/a,p[u],v[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,d,0,v,0,g);let u=0;for(let w=0;w<g;w++)u+=p[w]*v[w];e.update(u,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function Vg(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Gg(n,t,e){let i=new WeakMap,s=new ee;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,d=i.get(o);if(d===void 0||d.count!==f){let E=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],S=0;p===!0&&(S=1),g===!0&&(S=2),v===!0&&(S=3);let y=o.attributes.position.count*S,O=1;y>t.maxTextureSize&&(O=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let A=new Float32Array(y*O*4*f),C=new no(A,y,O,f);C.type=Pn,C.needsUpdate=!0;let P=S*4;for(let M=0;M<f;M++){let I=m[M],Y=u[M],G=w[M],j=y*O*4*M;for(let st=0;st<I.count;st++){let J=st*P;p===!0&&(s.fromBufferAttribute(I,st),A[j+J+0]=s.x,A[j+J+1]=s.y,A[j+J+2]=s.z,A[j+J+3]=0),g===!0&&(s.fromBufferAttribute(Y,st),A[j+J+4]=s.x,A[j+J+5]=s.y,A[j+J+6]=s.z,A[j+J+7]=0),v===!0&&(s.fromBufferAttribute(G,st),A[j+J+8]=s.x,A[j+J+9]=s.y,A[j+J+10]=s.z,A[j+J+11]=G.itemSize===4?s.w:1)}}d={count:f,texture:C,size:new It(y,O)},i.set(o,d),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function Wg(n,t,e,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,f=t.get(l,h);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return f}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var lo=class extends Ke{constructor(t,e,i,s,r,a,o,l,c,h=as){if(h!==as&&h!==ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===as&&(i=Ai),i===void 0&&h===ms&&(i=ps),super(null,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:fn,this.minFilter=l!==void 0?l:fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Cu=new Ke,Dh=new lo(1,1),Ru=new no,Iu=new Sl,Pu=new oo,Uh=[],Nh=[],Oh=new Float32Array(16),Fh=new Float32Array(9),Bh=new Float32Array(4);function Ss(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Uh[s];if(r===void 0&&(r=new Float32Array(s),Uh[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function ye(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Me(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ao(n,t){let e=Nh[t];e===void 0&&(e=new Int32Array(t),Nh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Xg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function $g(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;n.uniform2fv(this.addr,t),Me(e,t)}}function qg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;n.uniform3fv(this.addr,t),Me(e,t)}}function Yg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;n.uniform4fv(this.addr,t),Me(e,t)}}function Zg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(ye(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Me(e,t)}else{if(ye(e,i))return;Bh.set(i),n.uniformMatrix2fv(this.addr,!1,Bh),Me(e,i)}}function Jg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(ye(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Me(e,t)}else{if(ye(e,i))return;Fh.set(i),n.uniformMatrix3fv(this.addr,!1,Fh),Me(e,i)}}function Kg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(ye(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Me(e,t)}else{if(ye(e,i))return;Oh.set(i),n.uniformMatrix4fv(this.addr,!1,Oh),Me(e,i)}}function jg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Qg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;n.uniform2iv(this.addr,t),Me(e,t)}}function t0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;n.uniform3iv(this.addr,t),Me(e,t)}}function e0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;n.uniform4iv(this.addr,t),Me(e,t)}}function n0(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function i0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;n.uniform2uiv(this.addr,t),Me(e,t)}}function s0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;n.uniform3uiv(this.addr,t),Me(e,t)}}function r0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;n.uniform4uiv(this.addr,t),Me(e,t)}}function o0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Dh.compareFunction=Su,r=Dh):r=Cu,e.setTexture2D(t||r,s)}function a0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Iu,s)}function l0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Pu,s)}function c0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Ru,s)}function h0(n){switch(n){case 5126:return Xg;case 35664:return $g;case 35665:return qg;case 35666:return Yg;case 35674:return Zg;case 35675:return Jg;case 35676:return Kg;case 5124:case 35670:return jg;case 35667:case 35671:return Qg;case 35668:case 35672:return t0;case 35669:case 35673:return e0;case 5125:return n0;case 36294:return i0;case 36295:return s0;case 36296:return r0;case 35678:case 36198:case 36298:case 36306:case 35682:return o0;case 35679:case 36299:case 36307:return a0;case 35680:case 36300:case 36308:case 36293:return l0;case 36289:case 36303:case 36311:case 36292:return c0}}function u0(n,t){n.uniform1fv(this.addr,t)}function d0(n,t){let e=Ss(t,this.size,2);n.uniform2fv(this.addr,e)}function f0(n,t){let e=Ss(t,this.size,3);n.uniform3fv(this.addr,e)}function p0(n,t){let e=Ss(t,this.size,4);n.uniform4fv(this.addr,e)}function m0(n,t){let e=Ss(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function g0(n,t){let e=Ss(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function _0(n,t){let e=Ss(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function x0(n,t){n.uniform1iv(this.addr,t)}function v0(n,t){n.uniform2iv(this.addr,t)}function y0(n,t){n.uniform3iv(this.addr,t)}function M0(n,t){n.uniform4iv(this.addr,t)}function b0(n,t){n.uniform1uiv(this.addr,t)}function S0(n,t){n.uniform2uiv(this.addr,t)}function E0(n,t){n.uniform3uiv(this.addr,t)}function w0(n,t){n.uniform4uiv(this.addr,t)}function T0(n,t,e){let i=this.cache,s=t.length,r=Ao(e,s);ye(i,r)||(n.uniform1iv(this.addr,r),Me(i,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Cu,r[a])}function A0(n,t,e){let i=this.cache,s=t.length,r=Ao(e,s);ye(i,r)||(n.uniform1iv(this.addr,r),Me(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Iu,r[a])}function C0(n,t,e){let i=this.cache,s=t.length,r=Ao(e,s);ye(i,r)||(n.uniform1iv(this.addr,r),Me(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Pu,r[a])}function R0(n,t,e){let i=this.cache,s=t.length,r=Ao(e,s);ye(i,r)||(n.uniform1iv(this.addr,r),Me(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Ru,r[a])}function I0(n){switch(n){case 5126:return u0;case 35664:return d0;case 35665:return f0;case 35666:return p0;case 35674:return m0;case 35675:return g0;case 35676:return _0;case 5124:case 35670:return x0;case 35667:case 35671:return v0;case 35668:case 35672:return y0;case 35669:case 35673:return M0;case 5125:return b0;case 36294:return S0;case 36295:return E0;case 36296:return w0;case 35678:case 36198:case 36298:case 36306:case 35682:return T0;case 35679:case 36299:case 36307:return A0;case 35680:case 36300:case 36308:case 36293:return C0;case 36289:case 36303:case 36311:case 36292:return R0}}var Tl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=h0(e.type)}},Al=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=I0(e.type)}},Cl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},Ia=/(\w+)(\])?(\[|\.)?/g;function kh(n,t){n.seq.push(t),n.map[t.id]=t}function P0(n,t,e){let i=n.name,s=i.length;for(Ia.lastIndex=0;;){let r=Ia.exec(i),a=Ia.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){kh(e,c===void 0?new Tl(o,n,t):new Al(o,n,t));break}else{let f=e.map[o];f===void 0&&(f=new Cl(o),kh(e,f)),e=f}}}var hs=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);P0(r,a,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function zh(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var L0=37297,D0=0;function U0(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var Hh=new kt;function N0(n){$t._getMatrix(Hh,$t.workingColorSpace,n);let t=`mat3( ${Hh.elements.map(e=>e.toFixed(4))} )`;switch($t.getTransfer(n)){case wo:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Vh(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+U0(n.getShaderSource(t),a)}else return s}function O0(n,t){let e=N0(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function F0(n,t){let e;switch(t){case qd:e="Linear";break;case Yd:e="Reinhard";break;case Zd:e="Cineon";break;case Jd:e="ACESFilmic";break;case tc:e="AgX";break;case jd:e="Neutral";break;case Kd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Br=new R;function B0(){$t.getLuminanceCoefficients(Br);let n=Br.x.toFixed(4),t=Br.y.toFixed(4),e=Br.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function k0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hs).join(`
`)}function z0(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function H0(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Hs(n){return n!==""}function Gh(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Wh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var V0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rl(n){return n.replace(V0,W0)}var G0=new Map;function W0(n,t){let e=Ht[t];if(e===void 0){let i=G0.get(t);if(i!==void 0)e=Ht[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Rl(e)}var X0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xh(n){return n.replace(X0,$0)}function $0(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function $h(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function q0(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===cu?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Td?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===In&&(t="SHADOWMAP_TYPE_VSM"),t}function Y0(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ds:case fs:t="ENVMAP_TYPE_CUBE";break;case Eo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Z0(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case fs:t="ENVMAP_MODE_REFRACTION";break}return t}function J0(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case hu:t="ENVMAP_BLENDING_MULTIPLY";break;case Xd:t="ENVMAP_BLENDING_MIX";break;case $d:t="ENVMAP_BLENDING_ADD";break}return t}function K0(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function j0(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=q0(e),c=Y0(e),h=Z0(e),f=J0(e),d=K0(e),p=k0(e),g=z0(r),v=s.createProgram(),m,u,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Hs).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Hs).join(`
`),u.length>0&&(u+=`
`)):(m=[$h(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hs).join(`
`),u=[$h(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==si?"#define TONE_MAPPING":"",e.toneMapping!==si?Ht.tonemapping_pars_fragment:"",e.toneMapping!==si?F0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,O0("linearToOutputTexel",e.outputColorSpace),B0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Hs).join(`
`)),a=Rl(a),a=Gh(a,e),a=Wh(a,e),o=Rl(o),o=Gh(o,e),o=Wh(o,e),a=Xh(a),o=Xh(o),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",e.glslVersion===rh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===rh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let S=w+m+a,y=w+u+o,O=zh(s,s.VERTEX_SHADER,S),A=zh(s,s.FRAGMENT_SHADER,y);s.attachShader(v,O),s.attachShader(v,A),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(I){if(n.debug.checkShaderErrors){let Y=s.getProgramInfoLog(v).trim(),G=s.getShaderInfoLog(O).trim(),j=s.getShaderInfoLog(A).trim(),st=!0,J=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(st=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,O,A);else{let rt=Vh(s,O,"vertex"),W=Vh(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+Y+`
`+rt+`
`+W)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(G===""||j==="")&&(J=!1);J&&(I.diagnostics={runnable:st,programLog:Y,vertexShader:{log:G,prefix:m},fragmentShader:{log:j,prefix:u}})}s.deleteShader(O),s.deleteShader(A),P=new hs(s,v),E=H0(s,v)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,L0)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=D0++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=O,this.fragmentShader=A,this}var Q0=0,Il=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Pl(t),e.set(t,i)),i}},Pl=class{constructor(t){this.id=Q0++,this.code=t,this.usedTimes=0}};function t_(n,t,e,i,s,r,a){let o=new qs,l=new Il,c=new Set,h=[],f=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,M,I,Y,G){let j=Y.fog,st=G.geometry,J=E.isMeshStandardMaterial?Y.environment:null,rt=(E.isMeshStandardMaterial?e:t).get(E.envMap||J),W=rt&&rt.mapping===Eo?rt.image.height:null,pt=g[E.type];E.precision!==null&&(p=s.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));let yt=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,Et=yt!==void 0?yt.length:0,Lt=0;st.morphAttributes.position!==void 0&&(Lt=1),st.morphAttributes.normal!==void 0&&(Lt=2),st.morphAttributes.color!==void 0&&(Lt=3);let Wt,Q,lt,St;if(pt){let jt=vn[pt];Wt=jt.vertexShader,Q=jt.fragmentShader}else Wt=E.vertexShader,Q=E.fragmentShader,l.update(E),lt=l.getVertexShaderID(E),St=l.getFragmentShaderID(E);let ht=n.getRenderTarget(),gt=n.state.buffers.depth.getReversed(),Ut=G.isInstancedMesh===!0,zt=G.isBatchedMesh===!0,se=!!E.map,Vt=!!E.matcap,oe=!!rt,U=!!E.aoMap,Ve=!!E.lightMap,T=!!E.bumpMap,$=!!E.normalMap,Z=!!E.displacementMap,ot=!!E.emissiveMap,et=!!E.metalnessMap,x=!!E.roughnessMap,_=E.anisotropy>0,F=E.clearcoat>0,q=E.dispersion>0,k=E.iridescence>0,B=E.sheen>0,tt=E.transmission>0,K=_&&!!E.anisotropyMap,ut=F&&!!E.clearcoatMap,bt=F&&!!E.clearcoatNormalMap,it=F&&!!E.clearcoatRoughnessMap,at=k&&!!E.iridescenceMap,Mt=k&&!!E.iridescenceThicknessMap,Ct=B&&!!E.sheenColorMap,mt=B&&!!E.sheenRoughnessMap,Ot=!!E.specularMap,Dt=!!E.specularColorMap,Xt=!!E.specularIntensityMap,L=tt&&!!E.transmissionMap,dt=tt&&!!E.thicknessMap,X=!!E.gradientMap,nt=!!E.alphaMap,vt=E.alphaTest>0,_t=!!E.alphaHash,Ft=!!E.extensions,fe=si;E.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(fe=n.toneMapping);let Pe={shaderID:pt,shaderType:E.type,shaderName:E.name,vertexShader:Wt,fragmentShader:Q,defines:E.defines,customVertexShaderID:lt,customFragmentShaderID:St,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:zt,batchingColor:zt&&G._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&G.instanceColor!==null,instancingMorph:Ut&&G.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ht===null?n.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:Ms,alphaToCoverage:!!E.alphaToCoverage,map:se,matcap:Vt,envMap:oe,envMapMode:oe&&rt.mapping,envMapCubeUVHeight:W,aoMap:U,lightMap:Ve,bumpMap:T,normalMap:$,displacementMap:d&&Z,emissiveMap:ot,normalMapObjectSpace:$&&E.normalMapType===nf,normalMapTangentSpace:$&&E.normalMapType===bu,metalnessMap:et,roughnessMap:x,anisotropy:_,anisotropyMap:K,clearcoat:F,clearcoatMap:ut,clearcoatNormalMap:bt,clearcoatRoughnessMap:it,dispersion:q,iridescence:k,iridescenceMap:at,iridescenceThicknessMap:Mt,sheen:B,sheenColorMap:Ct,sheenRoughnessMap:mt,specularMap:Ot,specularColorMap:Dt,specularIntensityMap:Xt,transmission:tt,transmissionMap:L,thicknessMap:dt,gradientMap:X,opaque:E.transparent===!1&&E.blending===os&&E.alphaToCoverage===!1,alphaMap:nt,alphaTest:vt,alphaHash:_t,combine:E.combine,mapUv:se&&v(E.map.channel),aoMapUv:U&&v(E.aoMap.channel),lightMapUv:Ve&&v(E.lightMap.channel),bumpMapUv:T&&v(E.bumpMap.channel),normalMapUv:$&&v(E.normalMap.channel),displacementMapUv:Z&&v(E.displacementMap.channel),emissiveMapUv:ot&&v(E.emissiveMap.channel),metalnessMapUv:et&&v(E.metalnessMap.channel),roughnessMapUv:x&&v(E.roughnessMap.channel),anisotropyMapUv:K&&v(E.anisotropyMap.channel),clearcoatMapUv:ut&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:bt&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:mt&&v(E.sheenRoughnessMap.channel),specularMapUv:Ot&&v(E.specularMap.channel),specularColorMapUv:Dt&&v(E.specularColorMap.channel),specularIntensityMapUv:Xt&&v(E.specularIntensityMap.channel),transmissionMapUv:L&&v(E.transmissionMap.channel),thicknessMapUv:dt&&v(E.thicknessMap.channel),alphaMapUv:nt&&v(E.alphaMap.channel),vertexTangents:!!st.attributes.tangent&&($||_),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!st.attributes.uv&&(se||nt),fog:!!j,useFog:E.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:gt,skinning:G.isSkinnedMesh===!0,morphTargets:st.morphAttributes.position!==void 0,morphNormals:st.morphAttributes.normal!==void 0,morphColors:st.morphAttributes.color!==void 0,morphTargetsCount:Et,morphTextureStride:Lt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:fe,decodeVideoTexture:se&&E.map.isVideoTexture===!0&&$t.getTransfer(E.map.colorSpace)===te,decodeVideoTextureEmissive:ot&&E.emissiveMap.isVideoTexture===!0&&$t.getTransfer(E.emissiveMap.colorSpace)===te,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ke,flipSided:E.side===Ee,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ft&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&E.extensions.multiDraw===!0||zt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Pe.vertexUv1s=c.has(1),Pe.vertexUv2s=c.has(2),Pe.vertexUv3s=c.has(3),c.clear(),Pe}function u(E){let M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(let I in E.defines)M.push(I),M.push(E.defines[I]);return E.isRawShaderMaterial===!1&&(w(M,E),S(M,E),M.push(n.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function w(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function S(E,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),E.push(o.mask)}function y(E){let M=g[E.type],I;if(M){let Y=vn[M];I=Wf.clone(Y.uniforms)}else I=E.uniforms;return I}function O(E,M){let I;for(let Y=0,G=h.length;Y<G;Y++){let j=h[Y];if(j.cacheKey===M){I=j,++I.usedTimes;break}}return I===void 0&&(I=new j0(n,M,E,r),h.push(I)),I}function A(E){if(--E.usedTimes===0){let M=h.indexOf(E);h[M]=h[h.length-1],h.pop(),E.destroy()}}function C(E){l.remove(E)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:y,acquireProgram:O,releaseProgram:A,releaseShaderCache:C,programs:h,dispose:P}}function e_(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function n_(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function qh(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Yh(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(f,d,p,g,v,m){let u=n[t];return u===void 0?(u={id:f.id,object:f,geometry:d,material:p,groupOrder:g,renderOrder:f.renderOrder,z:v,group:m},n[t]=u):(u.id=f.id,u.object=f,u.geometry=d,u.material=p,u.groupOrder=g,u.renderOrder=f.renderOrder,u.z=v,u.group=m),t++,u}function o(f,d,p,g,v,m){let u=a(f,d,p,g,v,m);p.transmission>0?i.push(u):p.transparent===!0?s.push(u):e.push(u)}function l(f,d,p,g,v,m){let u=a(f,d,p,g,v,m);p.transmission>0?i.unshift(u):p.transparent===!0?s.unshift(u):e.unshift(u)}function c(f,d){e.length>1&&e.sort(f||n_),i.length>1&&i.sort(d||qh),s.length>1&&s.sort(d||qh)}function h(){for(let f=t,d=n.length;f<d;f++){let p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function i_(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new Yh,n.set(i,[a])):s>=r.length?(a=new Yh,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function s_(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new Pt};break;case"SpotLight":e={position:new R,direction:new R,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":e={color:new Pt,position:new R,halfWidth:new R,halfHeight:new R};break}return n[t.id]=e,e}}}function r_(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var o_=0;function a_(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function l_(n){let t=new s_,e=r_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new R);let s=new R,r=new ce,a=new ce;function o(c){let h=0,f=0,d=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,g=0,v=0,m=0,u=0,w=0,S=0,y=0,O=0,A=0,C=0;c.sort(a_);for(let E=0,M=c.length;E<M;E++){let I=c[E],Y=I.color,G=I.intensity,j=I.distance,st=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=Y.r*G,f+=Y.g*G,d+=Y.b*G;else if(I.isLightProbe){for(let J=0;J<9;J++)i.probe[J].addScaledVector(I.sh.coefficients[J],G);C++}else if(I.isDirectionalLight){let J=t.get(I);if(J.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let rt=I.shadow,W=e.get(I);W.shadowIntensity=rt.intensity,W.shadowBias=rt.bias,W.shadowNormalBias=rt.normalBias,W.shadowRadius=rt.radius,W.shadowMapSize=rt.mapSize,i.directionalShadow[p]=W,i.directionalShadowMap[p]=st,i.directionalShadowMatrix[p]=I.shadow.matrix,w++}i.directional[p]=J,p++}else if(I.isSpotLight){let J=t.get(I);J.position.setFromMatrixPosition(I.matrixWorld),J.color.copy(Y).multiplyScalar(G),J.distance=j,J.coneCos=Math.cos(I.angle),J.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),J.decay=I.decay,i.spot[v]=J;let rt=I.shadow;if(I.map&&(i.spotLightMap[O]=I.map,O++,rt.updateMatrices(I),I.castShadow&&A++),i.spotLightMatrix[v]=rt.matrix,I.castShadow){let W=e.get(I);W.shadowIntensity=rt.intensity,W.shadowBias=rt.bias,W.shadowNormalBias=rt.normalBias,W.shadowRadius=rt.radius,W.shadowMapSize=rt.mapSize,i.spotShadow[v]=W,i.spotShadowMap[v]=st,y++}v++}else if(I.isRectAreaLight){let J=t.get(I);J.color.copy(Y).multiplyScalar(G),J.halfWidth.set(I.width*.5,0,0),J.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=J,m++}else if(I.isPointLight){let J=t.get(I);if(J.color.copy(I.color).multiplyScalar(I.intensity),J.distance=I.distance,J.decay=I.decay,I.castShadow){let rt=I.shadow,W=e.get(I);W.shadowIntensity=rt.intensity,W.shadowBias=rt.bias,W.shadowNormalBias=rt.normalBias,W.shadowRadius=rt.radius,W.shadowMapSize=rt.mapSize,W.shadowCameraNear=rt.camera.near,W.shadowCameraFar=rt.camera.far,i.pointShadow[g]=W,i.pointShadowMap[g]=st,i.pointShadowMatrix[g]=I.shadow.matrix,S++}i.point[g]=J,g++}else if(I.isHemisphereLight){let J=t.get(I);J.skyColor.copy(I.color).multiplyScalar(G),J.groundColor.copy(I.groundColor).multiplyScalar(G),i.hemi[u]=J,u++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ft.LTC_FLOAT_1,i.rectAreaLTC2=ft.LTC_FLOAT_2):(i.rectAreaLTC1=ft.LTC_HALF_1,i.rectAreaLTC2=ft.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=d;let P=i.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==v||P.rectAreaLength!==m||P.hemiLength!==u||P.numDirectionalShadows!==w||P.numPointShadows!==S||P.numSpotShadows!==y||P.numSpotMaps!==O||P.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=u,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=y+O-A,i.spotLightMap.length=O,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=C,P.directionalLength=p,P.pointLength=g,P.spotLength=v,P.rectAreaLength=m,P.hemiLength=u,P.numDirectionalShadows=w,P.numPointShadows=S,P.numSpotShadows=y,P.numSpotMaps=O,P.numLightProbes=C,i.version=o_++)}function l(c,h){let f=0,d=0,p=0,g=0,v=0,m=h.matrixWorldInverse;for(let u=0,w=c.length;u<w;u++){let S=c[u];if(S.isDirectionalLight){let y=i.directional[f];y.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(S.isSpotLight){let y=i.spot[p];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(S.isRectAreaLight){let y=i.rectArea[g];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){let y=i.point[d];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){let y=i.hemi[v];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:i}}function Zh(n){let t=new l_(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function a(h){i.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function c_(n){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Zh(n),t.set(s,[o])):r>=a.length?(o=new Zh(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var Ll=class extends Bn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=tf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Dl=class extends Bn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},h_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,u_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function d_(n,t,e){let i=new Ys,s=new It,r=new It,a=new ee,o=new Ll({depthPacking:ef}),l=new Dl,c={},h=e.maxTextureSize,f={[pn]:Ee,[Ee]:pn,[ke]:ke},d=new rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:h_,fragmentShader:u_}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new we;g.setAttribute("position",new _e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new qt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cu;let u=this.type;this.render=function(A,C,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let E=n.getRenderTarget(),M=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),Y=n.state;Y.setBlending(ii),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);let G=u!==In&&this.type===In,j=u===In&&this.type!==In;for(let st=0,J=A.length;st<J;st++){let rt=A[st],W=rt.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",rt,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let pt=W.getFrameExtents();if(s.multiply(pt),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/pt.x),s.x=r.x*pt.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/pt.y),s.y=r.y*pt.y,W.mapSize.y=r.y)),W.map===null||G===!0||j===!0){let Et=this.type!==In?{minFilter:fn,magFilter:fn}:{};W.map!==null&&W.map.dispose(),W.map=new On(s.x,s.y,Et),W.map.texture.name=rt.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();let yt=W.getViewportCount();for(let Et=0;Et<yt;Et++){let Lt=W.getViewport(Et);a.set(r.x*Lt.x,r.y*Lt.y,r.x*Lt.z,r.y*Lt.w),Y.viewport(a),W.updateMatrices(rt,Et),i=W.getFrustum(),y(C,P,W.camera,rt,this.type)}W.isPointLightShadow!==!0&&this.type===In&&w(W,P),W.needsUpdate=!1}u=this.type,m.needsUpdate=!1,n.setRenderTarget(E,M,I)};function w(A,C){let P=t.update(v);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new On(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(C,null,P,d,v,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(C,null,P,p,v,null)}function S(A,C,P,E){let M=null,I=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)M=I;else if(M=P.isPointLight===!0?l:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let Y=M.uuid,G=C.uuid,j=c[Y];j===void 0&&(j={},c[Y]=j);let st=j[G];st===void 0&&(st=M.clone(),j[G]=st,C.addEventListener("dispose",O)),M=st}if(M.visible=C.visible,M.wireframe=C.wireframe,E===In?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:f[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let Y=n.properties.get(M);Y.light=P}return M}function y(A,C,P,E,M){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===In)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);let G=t.update(A),j=A.material;if(Array.isArray(j)){let st=G.groups;for(let J=0,rt=st.length;J<rt;J++){let W=st[J],pt=j[W.materialIndex];if(pt&&pt.visible){let yt=S(A,pt,E,M);A.onBeforeShadow(n,A,C,P,G,yt,W),n.renderBufferDirect(P,null,G,yt,A,W),A.onAfterShadow(n,A,C,P,G,yt,W)}}}else if(j.visible){let st=S(A,j,E,M);A.onBeforeShadow(n,A,C,P,G,st,null),n.renderBufferDirect(P,null,G,st,A,null),A.onAfterShadow(n,A,C,P,G,st,null)}}let Y=A.children;for(let G=0,j=Y.length;G<j;G++)y(Y[G],C,P,E,M)}function O(A){A.target.removeEventListener("dispose",O);for(let P in c){let E=c[P],M=A.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}var f_={[Fa]:Ba,[ka]:Va,[za]:Ga,[us]:Ha,[Ba]:Fa,[Va]:ka,[Ga]:za,[Ha]:us};function p_(n,t){function e(){let L=!1,dt=new ee,X=null,nt=new ee(0,0,0,0);return{setMask:function(vt){X!==vt&&!L&&(n.colorMask(vt,vt,vt,vt),X=vt)},setLocked:function(vt){L=vt},setClear:function(vt,_t,Ft,fe,Pe){Pe===!0&&(vt*=fe,_t*=fe,Ft*=fe),dt.set(vt,_t,Ft,fe),nt.equals(dt)===!1&&(n.clearColor(vt,_t,Ft,fe),nt.copy(dt))},reset:function(){L=!1,X=null,nt.set(-1,0,0,0)}}}function i(){let L=!1,dt=!1,X=null,nt=null,vt=null;return{setReversed:function(_t){if(dt!==_t){let Ft=t.get("EXT_clip_control");dt?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT);let fe=vt;vt=null,this.setClear(fe)}dt=_t},getReversed:function(){return dt},setTest:function(_t){_t?ht(n.DEPTH_TEST):gt(n.DEPTH_TEST)},setMask:function(_t){X!==_t&&!L&&(n.depthMask(_t),X=_t)},setFunc:function(_t){if(dt&&(_t=f_[_t]),nt!==_t){switch(_t){case Fa:n.depthFunc(n.NEVER);break;case Ba:n.depthFunc(n.ALWAYS);break;case ka:n.depthFunc(n.LESS);break;case us:n.depthFunc(n.LEQUAL);break;case za:n.depthFunc(n.EQUAL);break;case Ha:n.depthFunc(n.GEQUAL);break;case Va:n.depthFunc(n.GREATER);break;case Ga:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}nt=_t}},setLocked:function(_t){L=_t},setClear:function(_t){vt!==_t&&(dt&&(_t=1-_t),n.clearDepth(_t),vt=_t)},reset:function(){L=!1,X=null,nt=null,vt=null,dt=!1}}}function s(){let L=!1,dt=null,X=null,nt=null,vt=null,_t=null,Ft=null,fe=null,Pe=null;return{setTest:function(jt){L||(jt?ht(n.STENCIL_TEST):gt(n.STENCIL_TEST))},setMask:function(jt){dt!==jt&&!L&&(n.stencilMask(jt),dt=jt)},setFunc:function(jt,an,Sn){(X!==jt||nt!==an||vt!==Sn)&&(n.stencilFunc(jt,an,Sn),X=jt,nt=an,vt=Sn)},setOp:function(jt,an,Sn){(_t!==jt||Ft!==an||fe!==Sn)&&(n.stencilOp(jt,an,Sn),_t=jt,Ft=an,fe=Sn)},setLocked:function(jt){L=jt},setClear:function(jt){Pe!==jt&&(n.clearStencil(jt),Pe=jt)},reset:function(){L=!1,dt=null,X=null,nt=null,vt=null,_t=null,Ft=null,fe=null,Pe=null}}}let r=new e,a=new i,o=new s,l=new WeakMap,c=new WeakMap,h={},f={},d=new WeakMap,p=[],g=null,v=!1,m=null,u=null,w=null,S=null,y=null,O=null,A=null,C=new Pt(0,0,0),P=0,E=!1,M=null,I=null,Y=null,G=null,j=null,st=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,rt=0,W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(W)[1]),J=rt>=1):W.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),J=rt>=2);let pt=null,yt={},Et=n.getParameter(n.SCISSOR_BOX),Lt=n.getParameter(n.VIEWPORT),Wt=new ee().fromArray(Et),Q=new ee().fromArray(Lt);function lt(L,dt,X,nt){let vt=new Uint8Array(4),_t=n.createTexture();n.bindTexture(L,_t),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ft=0;Ft<X;Ft++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(dt,0,n.RGBA,1,1,nt,0,n.RGBA,n.UNSIGNED_BYTE,vt):n.texImage2D(dt+Ft,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,vt);return _t}let St={};St[n.TEXTURE_2D]=lt(n.TEXTURE_2D,n.TEXTURE_2D,1),St[n.TEXTURE_CUBE_MAP]=lt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[n.TEXTURE_2D_ARRAY]=lt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),St[n.TEXTURE_3D]=lt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ht(n.DEPTH_TEST),a.setFunc(us),T(!1),$(Kc),ht(n.CULL_FACE),U(ii);function ht(L){h[L]!==!0&&(n.enable(L),h[L]=!0)}function gt(L){h[L]!==!1&&(n.disable(L),h[L]=!1)}function Ut(L,dt){return f[L]!==dt?(n.bindFramebuffer(L,dt),f[L]=dt,L===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=dt),L===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=dt),!0):!1}function zt(L,dt){let X=p,nt=!1;if(L){X=d.get(dt),X===void 0&&(X=[],d.set(dt,X));let vt=L.textures;if(X.length!==vt.length||X[0]!==n.COLOR_ATTACHMENT0){for(let _t=0,Ft=vt.length;_t<Ft;_t++)X[_t]=n.COLOR_ATTACHMENT0+_t;X.length=vt.length,nt=!0}}else X[0]!==n.BACK&&(X[0]=n.BACK,nt=!0);nt&&n.drawBuffers(X)}function se(L){return g!==L?(n.useProgram(L),g=L,!0):!1}let Vt={[Si]:n.FUNC_ADD,[Cd]:n.FUNC_SUBTRACT,[Rd]:n.FUNC_REVERSE_SUBTRACT};Vt[Id]=n.MIN,Vt[Pd]=n.MAX;let oe={[Ld]:n.ZERO,[Dd]:n.ONE,[Ud]:n.SRC_COLOR,[Na]:n.SRC_ALPHA,[zd]:n.SRC_ALPHA_SATURATE,[Bd]:n.DST_COLOR,[Od]:n.DST_ALPHA,[Nd]:n.ONE_MINUS_SRC_COLOR,[Oa]:n.ONE_MINUS_SRC_ALPHA,[kd]:n.ONE_MINUS_DST_COLOR,[Fd]:n.ONE_MINUS_DST_ALPHA,[Hd]:n.CONSTANT_COLOR,[Vd]:n.ONE_MINUS_CONSTANT_COLOR,[Gd]:n.CONSTANT_ALPHA,[Wd]:n.ONE_MINUS_CONSTANT_ALPHA};function U(L,dt,X,nt,vt,_t,Ft,fe,Pe,jt){if(L===ii){v===!0&&(gt(n.BLEND),v=!1);return}if(v===!1&&(ht(n.BLEND),v=!0),L!==Ad){if(L!==m||jt!==E){if((u!==Si||y!==Si)&&(n.blendEquation(n.FUNC_ADD),u=Si,y=Si),jt)switch(L){case os:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ws:n.blendFunc(n.ONE,n.ONE);break;case jc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Qc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case os:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ws:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case jc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Qc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}w=null,S=null,O=null,A=null,C.set(0,0,0),P=0,m=L,E=jt}return}vt=vt||dt,_t=_t||X,Ft=Ft||nt,(dt!==u||vt!==y)&&(n.blendEquationSeparate(Vt[dt],Vt[vt]),u=dt,y=vt),(X!==w||nt!==S||_t!==O||Ft!==A)&&(n.blendFuncSeparate(oe[X],oe[nt],oe[_t],oe[Ft]),w=X,S=nt,O=_t,A=Ft),(fe.equals(C)===!1||Pe!==P)&&(n.blendColor(fe.r,fe.g,fe.b,Pe),C.copy(fe),P=Pe),m=L,E=!1}function Ve(L,dt){L.side===ke?gt(n.CULL_FACE):ht(n.CULL_FACE);let X=L.side===Ee;dt&&(X=!X),T(X),L.blending===os&&L.transparent===!1?U(ii):U(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let nt=L.stencilWrite;o.setTest(nt),nt&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ot(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ht(n.SAMPLE_ALPHA_TO_COVERAGE):gt(n.SAMPLE_ALPHA_TO_COVERAGE)}function T(L){M!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),M=L)}function $(L){L!==Ed?(ht(n.CULL_FACE),L!==I&&(L===Kc?n.cullFace(n.BACK):L===wd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):gt(n.CULL_FACE),I=L}function Z(L){L!==Y&&(J&&n.lineWidth(L),Y=L)}function ot(L,dt,X){L?(ht(n.POLYGON_OFFSET_FILL),(G!==dt||j!==X)&&(n.polygonOffset(dt,X),G=dt,j=X)):gt(n.POLYGON_OFFSET_FILL)}function et(L){L?ht(n.SCISSOR_TEST):gt(n.SCISSOR_TEST)}function x(L){L===void 0&&(L=n.TEXTURE0+st-1),pt!==L&&(n.activeTexture(L),pt=L)}function _(L,dt,X){X===void 0&&(pt===null?X=n.TEXTURE0+st-1:X=pt);let nt=yt[X];nt===void 0&&(nt={type:void 0,texture:void 0},yt[X]=nt),(nt.type!==L||nt.texture!==dt)&&(pt!==X&&(n.activeTexture(X),pt=X),n.bindTexture(L,dt||St[L]),nt.type=L,nt.texture=dt)}function F(){let L=yt[pt];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function k(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function B(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function tt(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function K(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ut(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function bt(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function it(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function at(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Mt(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ct(L){Wt.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),Wt.copy(L))}function mt(L){Q.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),Q.copy(L))}function Ot(L,dt){let X=c.get(dt);X===void 0&&(X=new WeakMap,c.set(dt,X));let nt=X.get(L);nt===void 0&&(nt=n.getUniformBlockIndex(dt,L.name),X.set(L,nt))}function Dt(L,dt){let nt=c.get(dt).get(L);l.get(dt)!==nt&&(n.uniformBlockBinding(dt,nt,L.__bindingPointIndex),l.set(dt,nt))}function Xt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},pt=null,yt={},f={},d=new WeakMap,p=[],g=null,v=!1,m=null,u=null,w=null,S=null,y=null,O=null,A=null,C=new Pt(0,0,0),P=0,E=!1,M=null,I=null,Y=null,G=null,j=null,Wt.set(0,0,n.canvas.width,n.canvas.height),Q.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ht,disable:gt,bindFramebuffer:Ut,drawBuffers:zt,useProgram:se,setBlending:U,setMaterial:Ve,setFlipSided:T,setCullFace:$,setLineWidth:Z,setPolygonOffset:ot,setScissorTest:et,activeTexture:x,bindTexture:_,unbindTexture:F,compressedTexImage2D:q,compressedTexImage3D:k,texImage2D:at,texImage3D:Mt,updateUBOMapping:Ot,uniformBlockBinding:Dt,texStorage2D:bt,texStorage3D:it,texSubImage2D:B,texSubImage3D:tt,compressedTexSubImage2D:K,compressedTexSubImage3D:ut,scissor:Ct,viewport:mt,reset:Xt}}function Jh(n,t,e,i){let s=m_(i);switch(e){case mu:return n*t;case _u:return n*t;case xu:return n*t*2;case vu:return n*t/s.components*s.byteLength;case sc:return n*t/s.components*s.byteLength;case yu:return n*t*2/s.components*s.byteLength;case rc:return n*t*2/s.components*s.byteLength;case gu:return n*t*3/s.components*s.byteLength;case dn:return n*t*4/s.components*s.byteLength;case oc:return n*t*4/s.components*s.byteLength;case qr:case Yr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Zr:case Jr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Za:case Ka:return Math.max(n,16)*Math.max(t,8)/4;case Ya:case Ja:return Math.max(n,8)*Math.max(t,8)/2;case ja:case Qa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case tl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case el:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case nl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case il:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case sl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case rl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case ol:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case al:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case ll:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case cl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case hl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case ul:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case dl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case fl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case pl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Kr:case ml:case gl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Mu:case _l:return Math.ceil(n/4)*Math.ceil(t/4)*8;case xl:case vl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function m_(n){switch(n){case Un:case du:return{byteLength:1,components:1};case Xs:case fu:case tr:return{byteLength:2,components:1};case nc:case ic:return{byteLength:2,components:4};case Ai:case ec:case Pn:return{byteLength:4,components:1};case pu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function g_(n,t,e,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new It,h=new WeakMap,f,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(x,_){return p?new OffscreenCanvas(x,_):to("canvas")}function v(x,_,F){let q=1,k=et(x);if((k.width>F||k.height>F)&&(q=F/Math.max(k.width,k.height)),q<1)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap||typeof VideoFrame<"u"&&x instanceof VideoFrame){let B=Math.floor(q*k.width),tt=Math.floor(q*k.height);f===void 0&&(f=g(B,tt));let K=_?g(B,tt):f;return K.width=B,K.height=tt,K.getContext("2d").drawImage(x,0,0,B,tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+k.width+"x"+k.height+") to ("+B+"x"+tt+")."),K}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+k.width+"x"+k.height+")."),x;return x}function m(x){return x.generateMipmaps}function u(x){n.generateMipmap(x)}function w(x){return x.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:x.isWebGL3DRenderTarget?n.TEXTURE_3D:x.isWebGLArrayRenderTarget||x.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(x,_,F,q,k=!1){if(x!==null){if(n[x]!==void 0)return n[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let B=_;if(_===n.RED&&(F===n.FLOAT&&(B=n.R32F),F===n.HALF_FLOAT&&(B=n.R16F),F===n.UNSIGNED_BYTE&&(B=n.R8)),_===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(B=n.R8UI),F===n.UNSIGNED_SHORT&&(B=n.R16UI),F===n.UNSIGNED_INT&&(B=n.R32UI),F===n.BYTE&&(B=n.R8I),F===n.SHORT&&(B=n.R16I),F===n.INT&&(B=n.R32I)),_===n.RG&&(F===n.FLOAT&&(B=n.RG32F),F===n.HALF_FLOAT&&(B=n.RG16F),F===n.UNSIGNED_BYTE&&(B=n.RG8)),_===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(B=n.RG8UI),F===n.UNSIGNED_SHORT&&(B=n.RG16UI),F===n.UNSIGNED_INT&&(B=n.RG32UI),F===n.BYTE&&(B=n.RG8I),F===n.SHORT&&(B=n.RG16I),F===n.INT&&(B=n.RG32I)),_===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(B=n.RGB8UI),F===n.UNSIGNED_SHORT&&(B=n.RGB16UI),F===n.UNSIGNED_INT&&(B=n.RGB32UI),F===n.BYTE&&(B=n.RGB8I),F===n.SHORT&&(B=n.RGB16I),F===n.INT&&(B=n.RGB32I)),_===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(B=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(B=n.RGBA16UI),F===n.UNSIGNED_INT&&(B=n.RGBA32UI),F===n.BYTE&&(B=n.RGBA8I),F===n.SHORT&&(B=n.RGBA16I),F===n.INT&&(B=n.RGBA32I)),_===n.RGB&&F===n.UNSIGNED_INT_5_9_9_9_REV&&(B=n.RGB9_E5),_===n.RGBA){let tt=k?wo:$t.getTransfer(q);F===n.FLOAT&&(B=n.RGBA32F),F===n.HALF_FLOAT&&(B=n.RGBA16F),F===n.UNSIGNED_BYTE&&(B=tt===te?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(B=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(B=n.RGB5_A1)}return(B===n.R16F||B===n.R32F||B===n.RG16F||B===n.RG32F||B===n.RGBA16F||B===n.RGBA32F)&&t.get("EXT_color_buffer_float"),B}function y(x,_){let F;return x?_===null||_===Ai||_===ps?F=n.DEPTH24_STENCIL8:_===Pn?F=n.DEPTH32F_STENCIL8:_===Xs&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Ai||_===ps?F=n.DEPTH_COMPONENT24:_===Pn?F=n.DEPTH_COMPONENT32F:_===Xs&&(F=n.DEPTH_COMPONENT16),F}function O(x,_){return m(x)===!0||x.isFramebufferTexture&&x.minFilter!==fn&&x.minFilter!==yn?Math.log2(Math.max(_.width,_.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?_.mipmaps.length:1}function A(x){let _=x.target;_.removeEventListener("dispose",A),P(_),_.isVideoTexture&&h.delete(_)}function C(x){let _=x.target;_.removeEventListener("dispose",C),M(_)}function P(x){let _=i.get(x);if(_.__webglInit===void 0)return;let F=x.source,q=d.get(F);if(q){let k=q[_.__cacheKey];k.usedTimes--,k.usedTimes===0&&E(x),Object.keys(q).length===0&&d.delete(F)}i.remove(x)}function E(x){let _=i.get(x);n.deleteTexture(_.__webglTexture);let F=x.source,q=d.get(F);delete q[_.__cacheKey],a.memory.textures--}function M(x){let _=i.get(x);if(x.depthTexture&&(x.depthTexture.dispose(),i.remove(x.depthTexture)),x.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(_.__webglFramebuffer[q]))for(let k=0;k<_.__webglFramebuffer[q].length;k++)n.deleteFramebuffer(_.__webglFramebuffer[q][k]);else n.deleteFramebuffer(_.__webglFramebuffer[q]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[q])}else{if(Array.isArray(_.__webglFramebuffer))for(let q=0;q<_.__webglFramebuffer.length;q++)n.deleteFramebuffer(_.__webglFramebuffer[q]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let q=0;q<_.__webglColorRenderbuffer.length;q++)_.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[q]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let F=x.textures;for(let q=0,k=F.length;q<k;q++){let B=i.get(F[q]);B.__webglTexture&&(n.deleteTexture(B.__webglTexture),a.memory.textures--),i.remove(F[q])}i.remove(x)}let I=0;function Y(){I=0}function G(){let x=I;return x>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+s.maxTextures),I+=1,x}function j(x){let _=[];return _.push(x.wrapS),_.push(x.wrapT),_.push(x.wrapR||0),_.push(x.magFilter),_.push(x.minFilter),_.push(x.anisotropy),_.push(x.internalFormat),_.push(x.format),_.push(x.type),_.push(x.generateMipmaps),_.push(x.premultiplyAlpha),_.push(x.flipY),_.push(x.unpackAlignment),_.push(x.colorSpace),_.join()}function st(x,_){let F=i.get(x);if(x.isVideoTexture&&Z(x),x.isRenderTargetTexture===!1&&x.version>0&&F.__version!==x.version){let q=x.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(F,x,_);return}}e.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+_)}function J(x,_){let F=i.get(x);if(x.version>0&&F.__version!==x.version){Q(F,x,_);return}e.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+_)}function rt(x,_){let F=i.get(x);if(x.version>0&&F.__version!==x.version){Q(F,x,_);return}e.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+_)}function W(x,_){let F=i.get(x);if(x.version>0&&F.__version!==x.version){lt(F,x,_);return}e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+_)}let pt={[$a]:n.REPEAT,[wi]:n.CLAMP_TO_EDGE,[qa]:n.MIRRORED_REPEAT},yt={[fn]:n.NEAREST,[Qd]:n.NEAREST_MIPMAP_NEAREST,[xr]:n.NEAREST_MIPMAP_LINEAR,[yn]:n.LINEAR,[ia]:n.LINEAR_MIPMAP_NEAREST,[Ti]:n.LINEAR_MIPMAP_LINEAR},Et={[sf]:n.NEVER,[hf]:n.ALWAYS,[rf]:n.LESS,[Su]:n.LEQUAL,[of]:n.EQUAL,[cf]:n.GEQUAL,[af]:n.GREATER,[lf]:n.NOTEQUAL};function Lt(x,_){if(_.type===Pn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===yn||_.magFilter===ia||_.magFilter===xr||_.magFilter===Ti||_.minFilter===yn||_.minFilter===ia||_.minFilter===xr||_.minFilter===Ti)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(x,n.TEXTURE_WRAP_S,pt[_.wrapS]),n.texParameteri(x,n.TEXTURE_WRAP_T,pt[_.wrapT]),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,pt[_.wrapR]),n.texParameteri(x,n.TEXTURE_MAG_FILTER,yt[_.magFilter]),n.texParameteri(x,n.TEXTURE_MIN_FILTER,yt[_.minFilter]),_.compareFunction&&(n.texParameteri(x,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(x,n.TEXTURE_COMPARE_FUNC,Et[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===fn||_.minFilter!==xr&&_.minFilter!==Ti||_.type===Pn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let F=t.get("EXT_texture_filter_anisotropic");n.texParameterf(x,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Wt(x,_){let F=!1;x.__webglInit===void 0&&(x.__webglInit=!0,_.addEventListener("dispose",A));let q=_.source,k=d.get(q);k===void 0&&(k={},d.set(q,k));let B=j(_);if(B!==x.__cacheKey){k[B]===void 0&&(k[B]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,F=!0),k[B].usedTimes++;let tt=k[x.__cacheKey];tt!==void 0&&(k[x.__cacheKey].usedTimes--,tt.usedTimes===0&&E(_)),x.__cacheKey=B,x.__webglTexture=k[B].texture}return F}function Q(x,_,F){let q=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(q=n.TEXTURE_3D);let k=Wt(x,_),B=_.source;e.bindTexture(q,x.__webglTexture,n.TEXTURE0+F);let tt=i.get(B);if(B.version!==tt.__version||k===!0){e.activeTexture(n.TEXTURE0+F);let K=$t.getPrimaries($t.workingColorSpace),ut=_.colorSpace===ti?null:$t.getPrimaries(_.colorSpace),bt=_.colorSpace===ti||K===ut?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);let it=v(_.image,!1,s.maxTextureSize);it=ot(_,it);let at=r.convert(_.format,_.colorSpace),Mt=r.convert(_.type),Ct=S(_.internalFormat,at,Mt,_.colorSpace,_.isVideoTexture);Lt(q,_);let mt,Ot=_.mipmaps,Dt=_.isVideoTexture!==!0,Xt=tt.__version===void 0||k===!0,L=B.dataReady,dt=O(_,it);if(_.isDepthTexture)Ct=y(_.format===ms,_.type),Xt&&(Dt?e.texStorage2D(n.TEXTURE_2D,1,Ct,it.width,it.height):e.texImage2D(n.TEXTURE_2D,0,Ct,it.width,it.height,0,at,Mt,null));else if(_.isDataTexture)if(Ot.length>0){Dt&&Xt&&e.texStorage2D(n.TEXTURE_2D,dt,Ct,Ot[0].width,Ot[0].height);for(let X=0,nt=Ot.length;X<nt;X++)mt=Ot[X],Dt?L&&e.texSubImage2D(n.TEXTURE_2D,X,0,0,mt.width,mt.height,at,Mt,mt.data):e.texImage2D(n.TEXTURE_2D,X,Ct,mt.width,mt.height,0,at,Mt,mt.data);_.generateMipmaps=!1}else Dt?(Xt&&e.texStorage2D(n.TEXTURE_2D,dt,Ct,it.width,it.height),L&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,it.width,it.height,at,Mt,it.data)):e.texImage2D(n.TEXTURE_2D,0,Ct,it.width,it.height,0,at,Mt,it.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Dt&&Xt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,dt,Ct,Ot[0].width,Ot[0].height,it.depth);for(let X=0,nt=Ot.length;X<nt;X++)if(mt=Ot[X],_.format!==dn)if(at!==null)if(Dt){if(L)if(_.layerUpdates.size>0){let vt=Jh(mt.width,mt.height,_.format,_.type);for(let _t of _.layerUpdates){let Ft=mt.data.subarray(_t*vt/mt.data.BYTES_PER_ELEMENT,(_t+1)*vt/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,_t,mt.width,mt.height,1,at,Ft)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,mt.width,mt.height,it.depth,at,mt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,X,Ct,mt.width,mt.height,it.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Dt?L&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,mt.width,mt.height,it.depth,at,Mt,mt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,X,Ct,mt.width,mt.height,it.depth,0,at,Mt,mt.data)}else{Dt&&Xt&&e.texStorage2D(n.TEXTURE_2D,dt,Ct,Ot[0].width,Ot[0].height);for(let X=0,nt=Ot.length;X<nt;X++)mt=Ot[X],_.format!==dn?at!==null?Dt?L&&e.compressedTexSubImage2D(n.TEXTURE_2D,X,0,0,mt.width,mt.height,at,mt.data):e.compressedTexImage2D(n.TEXTURE_2D,X,Ct,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?L&&e.texSubImage2D(n.TEXTURE_2D,X,0,0,mt.width,mt.height,at,Mt,mt.data):e.texImage2D(n.TEXTURE_2D,X,Ct,mt.width,mt.height,0,at,Mt,mt.data)}else if(_.isDataArrayTexture)if(Dt){if(Xt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,dt,Ct,it.width,it.height,it.depth),L)if(_.layerUpdates.size>0){let X=Jh(it.width,it.height,_.format,_.type);for(let nt of _.layerUpdates){let vt=it.data.subarray(nt*X/it.data.BYTES_PER_ELEMENT,(nt+1)*X/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,nt,it.width,it.height,1,at,Mt,vt)}_.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,at,Mt,it.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ct,it.width,it.height,it.depth,0,at,Mt,it.data);else if(_.isData3DTexture)Dt?(Xt&&e.texStorage3D(n.TEXTURE_3D,dt,Ct,it.width,it.height,it.depth),L&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,at,Mt,it.data)):e.texImage3D(n.TEXTURE_3D,0,Ct,it.width,it.height,it.depth,0,at,Mt,it.data);else if(_.isFramebufferTexture){if(Xt)if(Dt)e.texStorage2D(n.TEXTURE_2D,dt,Ct,it.width,it.height);else{let X=it.width,nt=it.height;for(let vt=0;vt<dt;vt++)e.texImage2D(n.TEXTURE_2D,vt,Ct,X,nt,0,at,Mt,null),X>>=1,nt>>=1}}else if(Ot.length>0){if(Dt&&Xt){let X=et(Ot[0]);e.texStorage2D(n.TEXTURE_2D,dt,Ct,X.width,X.height)}for(let X=0,nt=Ot.length;X<nt;X++)mt=Ot[X],Dt?L&&e.texSubImage2D(n.TEXTURE_2D,X,0,0,at,Mt,mt):e.texImage2D(n.TEXTURE_2D,X,Ct,at,Mt,mt);_.generateMipmaps=!1}else if(Dt){if(Xt){let X=et(it);e.texStorage2D(n.TEXTURE_2D,dt,Ct,X.width,X.height)}L&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,at,Mt,it)}else e.texImage2D(n.TEXTURE_2D,0,Ct,at,Mt,it);m(_)&&u(q),tt.__version=B.version,_.onUpdate&&_.onUpdate(_)}x.__version=_.version}function lt(x,_,F){if(_.image.length!==6)return;let q=Wt(x,_),k=_.source;e.bindTexture(n.TEXTURE_CUBE_MAP,x.__webglTexture,n.TEXTURE0+F);let B=i.get(k);if(k.version!==B.__version||q===!0){e.activeTexture(n.TEXTURE0+F);let tt=$t.getPrimaries($t.workingColorSpace),K=_.colorSpace===ti?null:$t.getPrimaries(_.colorSpace),ut=_.colorSpace===ti||tt===K?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let bt=_.isCompressedTexture||_.image[0].isCompressedTexture,it=_.image[0]&&_.image[0].isDataTexture,at=[];for(let nt=0;nt<6;nt++)!bt&&!it?at[nt]=v(_.image[nt],!0,s.maxCubemapSize):at[nt]=it?_.image[nt].image:_.image[nt],at[nt]=ot(_,at[nt]);let Mt=at[0],Ct=r.convert(_.format,_.colorSpace),mt=r.convert(_.type),Ot=S(_.internalFormat,Ct,mt,_.colorSpace),Dt=_.isVideoTexture!==!0,Xt=B.__version===void 0||q===!0,L=k.dataReady,dt=O(_,Mt);Lt(n.TEXTURE_CUBE_MAP,_);let X;if(bt){Dt&&Xt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,dt,Ot,Mt.width,Mt.height);for(let nt=0;nt<6;nt++){X=at[nt].mipmaps;for(let vt=0;vt<X.length;vt++){let _t=X[vt];_.format!==dn?Ct!==null?Dt?L&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt,0,0,_t.width,_t.height,Ct,_t.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt,Ot,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt,0,0,_t.width,_t.height,Ct,mt,_t.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt,Ot,_t.width,_t.height,0,Ct,mt,_t.data)}}}else{if(X=_.mipmaps,Dt&&Xt){X.length>0&&dt++;let nt=et(at[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,dt,Ot,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(it){Dt?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,at[nt].width,at[nt].height,Ct,mt,at[nt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Ot,at[nt].width,at[nt].height,0,Ct,mt,at[nt].data);for(let vt=0;vt<X.length;vt++){let Ft=X[vt].image[nt].image;Dt?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt+1,0,0,Ft.width,Ft.height,Ct,mt,Ft.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt+1,Ot,Ft.width,Ft.height,0,Ct,mt,Ft.data)}}else{Dt?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Ct,mt,at[nt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Ot,Ct,mt,at[nt]);for(let vt=0;vt<X.length;vt++){let _t=X[vt];Dt?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt+1,0,0,Ct,mt,_t.image[nt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt+1,Ot,Ct,mt,_t.image[nt])}}}m(_)&&u(n.TEXTURE_CUBE_MAP),B.__version=k.version,_.onUpdate&&_.onUpdate(_)}x.__version=_.version}function St(x,_,F,q,k,B){let tt=r.convert(F.format,F.colorSpace),K=r.convert(F.type),ut=S(F.internalFormat,tt,K,F.colorSpace),bt=i.get(_),it=i.get(F);if(it.__renderTarget=_,!bt.__hasExternalTextures){let at=Math.max(1,_.width>>B),Mt=Math.max(1,_.height>>B);k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?e.texImage3D(k,B,ut,at,Mt,_.depth,0,tt,K,null):e.texImage2D(k,B,ut,at,Mt,0,tt,K,null)}e.bindFramebuffer(n.FRAMEBUFFER,x),$(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,k,it.__webglTexture,0,T(_)):(k===n.TEXTURE_2D||k>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&k<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,k,it.__webglTexture,B),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ht(x,_,F){if(n.bindRenderbuffer(n.RENDERBUFFER,x),_.depthBuffer){let q=_.depthTexture,k=q&&q.isDepthTexture?q.type:null,B=y(_.stencilBuffer,k),tt=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=T(_);$(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,K,B,_.width,_.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,K,B,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,B,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,x)}else{let q=_.textures;for(let k=0;k<q.length;k++){let B=q[k],tt=r.convert(B.format,B.colorSpace),K=r.convert(B.type),ut=S(B.internalFormat,tt,K,B.colorSpace),bt=T(_);F&&$(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,bt,ut,_.width,_.height):$(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,bt,ut,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,ut,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function gt(x,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,x),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let q=i.get(_.depthTexture);q.__renderTarget=_,(!q.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),st(_.depthTexture,0);let k=q.__webglTexture,B=T(_);if(_.depthTexture.format===as)$(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,k,0,B):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,k,0);else if(_.depthTexture.format===ms)$(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,k,0,B):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,k,0);else throw new Error("Unknown depthTexture format")}function Ut(x){let _=i.get(x),F=x.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==x.depthTexture){let q=x.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),q){let k=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,q.removeEventListener("dispose",k)};q.addEventListener("dispose",k),_.__depthDisposeCallback=k}_.__boundDepthTexture=q}if(x.depthTexture&&!_.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");gt(_.__webglFramebuffer,x)}else if(F){_.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[q]),_.__webglDepthbuffer[q]===void 0)_.__webglDepthbuffer[q]=n.createRenderbuffer(),ht(_.__webglDepthbuffer[q],x,!1);else{let k=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,B=_.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,B),n.framebufferRenderbuffer(n.FRAMEBUFFER,k,n.RENDERBUFFER,B)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),ht(_.__webglDepthbuffer,x,!1);else{let q=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,k),n.framebufferRenderbuffer(n.FRAMEBUFFER,q,n.RENDERBUFFER,k)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function zt(x,_,F){let q=i.get(x);_!==void 0&&St(q.__webglFramebuffer,x,x.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&Ut(x)}function se(x){let _=x.texture,F=i.get(x),q=i.get(_);x.addEventListener("dispose",C);let k=x.textures,B=x.isWebGLCubeRenderTarget===!0,tt=k.length>1;if(tt||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=_.version,a.memory.textures++),B){F.__webglFramebuffer=[];for(let K=0;K<6;K++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[K]=[];for(let ut=0;ut<_.mipmaps.length;ut++)F.__webglFramebuffer[K][ut]=n.createFramebuffer()}else F.__webglFramebuffer[K]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let K=0;K<_.mipmaps.length;K++)F.__webglFramebuffer[K]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(tt)for(let K=0,ut=k.length;K<ut;K++){let bt=i.get(k[K]);bt.__webglTexture===void 0&&(bt.__webglTexture=n.createTexture(),a.memory.textures++)}if(x.samples>0&&$(x)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let K=0;K<k.length;K++){let ut=k[K];F.__webglColorRenderbuffer[K]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[K]);let bt=r.convert(ut.format,ut.colorSpace),it=r.convert(ut.type),at=S(ut.internalFormat,bt,it,ut.colorSpace,x.isXRRenderTarget===!0),Mt=T(x);n.renderbufferStorageMultisample(n.RENDERBUFFER,Mt,at,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+K,n.RENDERBUFFER,F.__webglColorRenderbuffer[K])}n.bindRenderbuffer(n.RENDERBUFFER,null),x.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),ht(F.__webglDepthRenderbuffer,x,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(B){e.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),Lt(n.TEXTURE_CUBE_MAP,_);for(let K=0;K<6;K++)if(_.mipmaps&&_.mipmaps.length>0)for(let ut=0;ut<_.mipmaps.length;ut++)St(F.__webglFramebuffer[K][ut],x,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut);else St(F.__webglFramebuffer[K],x,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);m(_)&&u(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(tt){for(let K=0,ut=k.length;K<ut;K++){let bt=k[K],it=i.get(bt);e.bindTexture(n.TEXTURE_2D,it.__webglTexture),Lt(n.TEXTURE_2D,bt),St(F.__webglFramebuffer,x,bt,n.COLOR_ATTACHMENT0+K,n.TEXTURE_2D,0),m(bt)&&u(n.TEXTURE_2D)}e.unbindTexture()}else{let K=n.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(K=x.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(K,q.__webglTexture),Lt(K,_),_.mipmaps&&_.mipmaps.length>0)for(let ut=0;ut<_.mipmaps.length;ut++)St(F.__webglFramebuffer[ut],x,_,n.COLOR_ATTACHMENT0,K,ut);else St(F.__webglFramebuffer,x,_,n.COLOR_ATTACHMENT0,K,0);m(_)&&u(K),e.unbindTexture()}x.depthBuffer&&Ut(x)}function Vt(x){let _=x.textures;for(let F=0,q=_.length;F<q;F++){let k=_[F];if(m(k)){let B=w(x),tt=i.get(k).__webglTexture;e.bindTexture(B,tt),u(B),e.unbindTexture()}}}let oe=[],U=[];function Ve(x){if(x.samples>0){if($(x)===!1){let _=x.textures,F=x.width,q=x.height,k=n.COLOR_BUFFER_BIT,B=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,tt=i.get(x),K=_.length>1;if(K)for(let ut=0;ut<_.length;ut++)e.bindFramebuffer(n.FRAMEBUFFER,tt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,tt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,tt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,tt.__webglFramebuffer);for(let ut=0;ut<_.length;ut++){if(x.resolveDepthBuffer&&(x.depthBuffer&&(k|=n.DEPTH_BUFFER_BIT),x.stencilBuffer&&x.resolveStencilBuffer&&(k|=n.STENCIL_BUFFER_BIT)),K){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,tt.__webglColorRenderbuffer[ut]);let bt=i.get(_[ut]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,bt,0)}n.blitFramebuffer(0,0,F,q,0,0,F,q,k,n.NEAREST),l===!0&&(oe.length=0,U.length=0,oe.push(n.COLOR_ATTACHMENT0+ut),x.depthBuffer&&x.resolveDepthBuffer===!1&&(oe.push(B),U.push(B),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,U)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,oe))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),K)for(let ut=0;ut<_.length;ut++){e.bindFramebuffer(n.FRAMEBUFFER,tt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,tt.__webglColorRenderbuffer[ut]);let bt=i.get(_[ut]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,tt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,bt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,tt.__webglMultisampledFramebuffer)}else if(x.depthBuffer&&x.resolveDepthBuffer===!1&&l){let _=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function T(x){return Math.min(s.maxSamples,x.samples)}function $(x){let _=i.get(x);return x.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Z(x){let _=a.render.frame;h.get(x)!==_&&(h.set(x,_),x.update())}function ot(x,_){let F=x.colorSpace,q=x.format,k=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||F!==Ms&&F!==ti&&($t.getTransfer(F)===te?(q!==dn||k!==Un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),_}function et(x){return typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement?(c.width=x.naturalWidth||x.width,c.height=x.naturalHeight||x.height):typeof VideoFrame<"u"&&x instanceof VideoFrame?(c.width=x.displayWidth,c.height=x.displayHeight):(c.width=x.width,c.height=x.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=Y,this.setTexture2D=st,this.setTexture2DArray=J,this.setTexture3D=rt,this.setTextureCube=W,this.rebindTextures=zt,this.setupRenderTarget=se,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=Ut,this.setupFrameBufferTexture=St,this.useMultisampledRTT=$}function __(n,t){function e(i,s=ti){let r,a=$t.getTransfer(s);if(i===Un)return n.UNSIGNED_BYTE;if(i===nc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ic)return n.UNSIGNED_SHORT_5_5_5_1;if(i===pu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===du)return n.BYTE;if(i===fu)return n.SHORT;if(i===Xs)return n.UNSIGNED_SHORT;if(i===ec)return n.INT;if(i===Ai)return n.UNSIGNED_INT;if(i===Pn)return n.FLOAT;if(i===tr)return n.HALF_FLOAT;if(i===mu)return n.ALPHA;if(i===gu)return n.RGB;if(i===dn)return n.RGBA;if(i===_u)return n.LUMINANCE;if(i===xu)return n.LUMINANCE_ALPHA;if(i===as)return n.DEPTH_COMPONENT;if(i===ms)return n.DEPTH_STENCIL;if(i===vu)return n.RED;if(i===sc)return n.RED_INTEGER;if(i===yu)return n.RG;if(i===rc)return n.RG_INTEGER;if(i===oc)return n.RGBA_INTEGER;if(i===qr||i===Yr||i===Zr||i===Jr)if(a===te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===qr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===qr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Yr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Zr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Jr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ya||i===Za||i===Ja||i===Ka)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ya)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Za)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ja)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ka)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ja||i===Qa||i===tl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ja||i===Qa)return a===te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===tl)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===el||i===nl||i===il||i===sl||i===rl||i===ol||i===al||i===ll||i===cl||i===hl||i===ul||i===dl||i===fl||i===pl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===el)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===nl)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===il)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===sl)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===rl)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ol)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===al)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ll)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===cl)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===hl)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ul)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===dl)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===fl)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===pl)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Kr||i===ml||i===gl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Kr)return a===te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ml)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===gl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Mu||i===_l||i===xl||i===vl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Kr)return r.COMPRESSED_RED_RGTC1_EXT;if(i===_l)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===xl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===vl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ps?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Ul=class extends Ce{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ni=class extends Re{constructor(){super(),this.isGroup=!0,this.type="Group"}},x_={type:"move"},Gs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ni,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ni,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ni,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let v of t.hand.values()){let m=e.getJointPose(v,i),u=this._getHandJoint(c,v);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(x_)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new ni;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},v_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,y_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Nl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let s=new Ke,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new rn({vertexShader:v_,fragmentShader:y_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new qt(new Ri(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ol=class extends Nn{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,d=null,p=null,g=null,v=new Nl,m=e.getContextAttributes(),u=null,w=null,S=[],y=[],O=new It,A=null,C=new Ce;C.viewport=new ee;let P=new Ce;P.viewport=new ee;let E=[C,P],M=new Ul,I=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let lt=S[Q];return lt===void 0&&(lt=new Gs,S[Q]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(Q){let lt=S[Q];return lt===void 0&&(lt=new Gs,S[Q]=lt),lt.getGripSpace()},this.getHand=function(Q){let lt=S[Q];return lt===void 0&&(lt=new Gs,S[Q]=lt),lt.getHandSpace()};function G(Q){let lt=y.indexOf(Q.inputSource);if(lt===-1)return;let St=S[lt];St!==void 0&&(St.update(Q.inputSource,Q.frame,c||a),St.dispatchEvent({type:Q.type,data:Q.inputSource}))}function j(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",st);for(let Q=0;Q<S.length;Q++){let lt=y[Q];lt!==null&&(y[Q]=null,S[Q].disconnect(lt))}I=null,Y=null,v.reset(),t.setRenderTarget(u),p=null,d=null,f=null,s=null,w=null,Wt.stop(),i.isPresenting=!1,t.setPixelRatio(A),t.setSize(O.width,O.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(u=t.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",j),s.addEventListener("inputsourceschange",st),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(O),s.renderState.layers===void 0){let lt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,lt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new On(p.framebufferWidth,p.framebufferHeight,{format:dn,type:Un,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let lt=null,St=null,ht=null;m.depth&&(ht=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,lt=m.stencil?ms:as,St=m.stencil?ps:Ai);let gt={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:r};f=new XRWebGLBinding(s,e),d=f.createProjectionLayer(gt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),w=new On(d.textureWidth,d.textureHeight,{format:dn,type:Un,depthTexture:new lo(d.textureWidth,d.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,lt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Wt.setContext(s),Wt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function st(Q){for(let lt=0;lt<Q.removed.length;lt++){let St=Q.removed[lt],ht=y.indexOf(St);ht>=0&&(y[ht]=null,S[ht].disconnect(St))}for(let lt=0;lt<Q.added.length;lt++){let St=Q.added[lt],ht=y.indexOf(St);if(ht===-1){for(let Ut=0;Ut<S.length;Ut++)if(Ut>=y.length){y.push(St),ht=Ut;break}else if(y[Ut]===null){y[Ut]=St,ht=Ut;break}if(ht===-1)break}let gt=S[ht];gt&&gt.connect(St)}}let J=new R,rt=new R;function W(Q,lt,St){J.setFromMatrixPosition(lt.matrixWorld),rt.setFromMatrixPosition(St.matrixWorld);let ht=J.distanceTo(rt),gt=lt.projectionMatrix.elements,Ut=St.projectionMatrix.elements,zt=gt[14]/(gt[10]-1),se=gt[14]/(gt[10]+1),Vt=(gt[9]+1)/gt[5],oe=(gt[9]-1)/gt[5],U=(gt[8]-1)/gt[0],Ve=(Ut[8]+1)/Ut[0],T=zt*U,$=zt*Ve,Z=ht/(-U+Ve),ot=Z*-U;if(lt.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(ot),Q.translateZ(Z),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),gt[10]===-1)Q.projectionMatrix.copy(lt.projectionMatrix),Q.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{let et=zt+Z,x=se+Z,_=T-ot,F=$+(ht-ot),q=Vt*se/x*et,k=oe*se/x*et;Q.projectionMatrix.makePerspective(_,F,q,k,et,x),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function pt(Q,lt){lt===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(lt.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let lt=Q.near,St=Q.far;v.texture!==null&&(v.depthNear>0&&(lt=v.depthNear),v.depthFar>0&&(St=v.depthFar)),M.near=P.near=C.near=lt,M.far=P.far=C.far=St,(I!==M.near||Y!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),I=M.near,Y=M.far),C.layers.mask=Q.layers.mask|2,P.layers.mask=Q.layers.mask|4,M.layers.mask=C.layers.mask|P.layers.mask;let ht=Q.parent,gt=M.cameras;pt(M,ht);for(let Ut=0;Ut<gt.length;Ut++)pt(gt[Ut],ht);gt.length===2?W(M,C,P):M.projectionMatrix.copy(C.projectionMatrix),yt(Q,M,ht)};function yt(Q,lt,St){St===null?Q.matrix.copy(lt.matrixWorld):(Q.matrix.copy(St.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(lt.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(lt.projectionMatrix),Q.projectionMatrixInverse.copy(lt.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=$s*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Q){l=Q,d!==null&&(d.fixedFoveation=Q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let Et=null;function Lt(Q,lt){if(h=lt.getViewerPose(c||a),g=lt,h!==null){let St=h.views;p!==null&&(t.setRenderTargetFramebuffer(w,p.framebuffer),t.setRenderTarget(w));let ht=!1;St.length!==M.cameras.length&&(M.cameras.length=0,ht=!0);for(let Ut=0;Ut<St.length;Ut++){let zt=St[Ut],se=null;if(p!==null)se=p.getViewport(zt);else{let oe=f.getViewSubImage(d,zt);se=oe.viewport,Ut===0&&(t.setRenderTargetTextures(w,oe.colorTexture,d.ignoreDepthValues?void 0:oe.depthStencilTexture),t.setRenderTarget(w))}let Vt=E[Ut];Vt===void 0&&(Vt=new Ce,Vt.layers.enable(Ut),Vt.viewport=new ee,E[Ut]=Vt),Vt.matrix.fromArray(zt.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(zt.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(se.x,se.y,se.width,se.height),Ut===0&&(M.matrix.copy(Vt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ht===!0&&M.cameras.push(Vt)}let gt=s.enabledFeatures;if(gt&&gt.includes("depth-sensing")){let Ut=f.getDepthInformation(St[0]);Ut&&Ut.isValid&&Ut.texture&&v.init(t,Ut,s.renderState)}}for(let St=0;St<S.length;St++){let ht=y[St],gt=S[St];ht!==null&&gt!==void 0&&gt.update(ht,lt,c||a)}Et&&Et(Q,lt),lt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:lt}),g=null}let Wt=new Au;Wt.setAnimationLoop(Lt),this.setAnimationLoop=function(Q){Et=Q},this.dispose=function(){}}},Mi=new Mn,M_=new ce;function b_(n,t){function e(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,Tu(n)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,w,S,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),f(m,u)):u.isMeshPhongMaterial?(r(m,u),h(m,u)):u.isMeshStandardMaterial?(r(m,u),d(m,u),u.isMeshPhysicalMaterial&&p(m,u,y)):u.isMeshMatcapMaterial?(r(m,u),g(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),v(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,w,S):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,e(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Ee&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,e(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Ee&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,e(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,e(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let w=t.get(u),S=w.envMap,y=w.envMapRotation;S&&(m.envMap.value=S,Mi.copy(y),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),m.envMapRotation.value.setFromMatrix4(M_.makeRotationFromEuler(Mi)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,w,S){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*w,m.scale.value=S*.5,u.map&&(m.map.value=u.map,e(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function f(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function d(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,w){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ee&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function v(m,u){let w=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function S_(n,t,e,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,S){let y=S.program;i.uniformBlockBinding(w,y)}function c(w,S){let y=s[w.id];y===void 0&&(g(w),y=h(w),s[w.id]=y,w.addEventListener("dispose",m));let O=S.program;i.updateUBOMapping(w,O);let A=t.render.frame;r[w.id]!==A&&(d(w),r[w.id]=A)}function h(w){let S=f();w.__bindingPointIndex=S;let y=n.createBuffer(),O=w.__size,A=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,O,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,y),y}function f(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){let S=s[w.id],y=w.uniforms,O=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let A=0,C=y.length;A<C;A++){let P=Array.isArray(y[A])?y[A]:[y[A]];for(let E=0,M=P.length;E<M;E++){let I=P[E];if(p(I,A,E,O)===!0){let Y=I.__offset,G=Array.isArray(I.value)?I.value:[I.value],j=0;for(let st=0;st<G.length;st++){let J=G[st],rt=v(J);typeof J=="number"||typeof J=="boolean"?(I.__data[0]=J,n.bufferSubData(n.UNIFORM_BUFFER,Y+j,I.__data)):J.isMatrix3?(I.__data[0]=J.elements[0],I.__data[1]=J.elements[1],I.__data[2]=J.elements[2],I.__data[3]=0,I.__data[4]=J.elements[3],I.__data[5]=J.elements[4],I.__data[6]=J.elements[5],I.__data[7]=0,I.__data[8]=J.elements[6],I.__data[9]=J.elements[7],I.__data[10]=J.elements[8],I.__data[11]=0):(J.toArray(I.__data,j),j+=rt.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,Y,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(w,S,y,O){let A=w.value,C=S+"_"+y;if(O[C]===void 0)return typeof A=="number"||typeof A=="boolean"?O[C]=A:O[C]=A.clone(),!0;{let P=O[C];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return O[C]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function g(w){let S=w.uniforms,y=0,O=16;for(let C=0,P=S.length;C<P;C++){let E=Array.isArray(S[C])?S[C]:[S[C]];for(let M=0,I=E.length;M<I;M++){let Y=E[M],G=Array.isArray(Y.value)?Y.value:[Y.value];for(let j=0,st=G.length;j<st;j++){let J=G[j],rt=v(J),W=y%O,pt=W%rt.boundary,yt=W+pt;y+=pt,yt!==0&&O-yt<rt.storage&&(y+=O-yt),Y.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=y,y+=rt.storage}}}let A=y%O;return A>0&&(y+=O-A),w.__size=y,w.__cache={},this}function v(w){let S={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(S.boundary=4,S.storage=4):w.isVector2?(S.boundary=8,S.storage=8):w.isVector3||w.isColor?(S.boundary=16,S.storage=12):w.isVector4?(S.boundary=16,S.storage=16):w.isMatrix3?(S.boundary=48,S.storage=48):w.isMatrix4?(S.boundary=64,S.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),S}function m(w){let S=w.target;S.removeEventListener("dispose",m);let y=a.indexOf(S.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function u(){for(let w in s)n.deleteBuffer(s[w]);a=[],s={},r={}}return{bind:l,update:c,dispose:u}}var Zs=class{constructor(t={}){let{canvas:e=Af(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;let g=new Uint32Array(4),v=new Int32Array(4),m=null,u=null,w=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ue,this.toneMapping=si,this.toneMappingExposure=1;let y=this,O=!1,A=0,C=0,P=null,E=-1,M=null,I=new ee,Y=new ee,G=null,j=new Pt(0),st=0,J=e.width,rt=e.height,W=1,pt=null,yt=null,Et=new ee(0,0,J,rt),Lt=new ee(0,0,J,rt),Wt=!1,Q=new Ys,lt=!1,St=!1,ht=new ce,gt=new ce,Ut=new R,zt=new ee,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Vt=!1;function oe(){return P===null?W:1}let U=i;function Ve(b,D){return e.getContext(b,D)}try{let b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ql}`),e.addEventListener("webglcontextlost",nt,!1),e.addEventListener("webglcontextrestored",vt,!1),e.addEventListener("webglcontextcreationerror",_t,!1),U===null){let D="webgl2";if(U=Ve(D,b),U===null)throw Ve(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let T,$,Z,ot,et,x,_,F,q,k,B,tt,K,ut,bt,it,at,Mt,Ct,mt,Ot,Dt,Xt,L;function dt(){T=new kg(U),T.init(),Dt=new __(U,T),$=new Dg(U,T,t,Dt),Z=new p_(U,T),$.reverseDepthBuffer&&d&&Z.buffers.depth.setReversed(!0),ot=new Vg(U),et=new e_,x=new g_(U,T,Z,et,$,Dt,ot),_=new Ng(y),F=new Bg(y),q=new Zf(U),Xt=new Pg(U,q),k=new zg(U,q,ot,Xt),B=new Wg(U,k,q,ot),Ct=new Gg(U,$,x),it=new Ug(et),tt=new t_(y,_,F,T,$,Xt,it),K=new b_(y,et),ut=new i_,bt=new c_(T),Mt=new Ig(y,_,F,Z,B,p,l),at=new d_(y,B,$),L=new S_(U,ot,$,Z),mt=new Lg(U,T,ot),Ot=new Hg(U,T,ot),ot.programs=tt.programs,y.capabilities=$,y.extensions=T,y.properties=et,y.renderLists=ut,y.shadowMap=at,y.state=Z,y.info=ot}dt();let X=new Ol(y,U);this.xr=X,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let b=T.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=T.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(b){b!==void 0&&(W=b,this.setSize(J,rt,!1))},this.getSize=function(b){return b.set(J,rt)},this.setSize=function(b,D,H=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=b,rt=D,e.width=Math.floor(b*W),e.height=Math.floor(D*W),H===!0&&(e.style.width=b+"px",e.style.height=D+"px"),this.setViewport(0,0,b,D)},this.getDrawingBufferSize=function(b){return b.set(J*W,rt*W).floor()},this.setDrawingBufferSize=function(b,D,H){J=b,rt=D,W=H,e.width=Math.floor(b*H),e.height=Math.floor(D*H),this.setViewport(0,0,b,D)},this.getCurrentViewport=function(b){return b.copy(I)},this.getViewport=function(b){return b.copy(Et)},this.setViewport=function(b,D,H,V){b.isVector4?Et.set(b.x,b.y,b.z,b.w):Et.set(b,D,H,V),Z.viewport(I.copy(Et).multiplyScalar(W).round())},this.getScissor=function(b){return b.copy(Lt)},this.setScissor=function(b,D,H,V){b.isVector4?Lt.set(b.x,b.y,b.z,b.w):Lt.set(b,D,H,V),Z.scissor(Y.copy(Lt).multiplyScalar(W).round())},this.getScissorTest=function(){return Wt},this.setScissorTest=function(b){Z.setScissorTest(Wt=b)},this.setOpaqueSort=function(b){pt=b},this.setTransparentSort=function(b){yt=b},this.getClearColor=function(b){return b.copy(Mt.getClearColor())},this.setClearColor=function(){Mt.setClearColor.apply(Mt,arguments)},this.getClearAlpha=function(){return Mt.getClearAlpha()},this.setClearAlpha=function(){Mt.setClearAlpha.apply(Mt,arguments)},this.clear=function(b=!0,D=!0,H=!0){let V=0;if(b){let N=!1;if(P!==null){let ct=P.texture.format;N=ct===oc||ct===rc||ct===sc}if(N){let ct=P.texture.type,xt=ct===Un||ct===Ai||ct===Xs||ct===ps||ct===nc||ct===ic,wt=Mt.getClearColor(),Tt=Mt.getClearAlpha(),Nt=wt.r,Bt=wt.g,At=wt.b;xt?(g[0]=Nt,g[1]=Bt,g[2]=At,g[3]=Tt,U.clearBufferuiv(U.COLOR,0,g)):(v[0]=Nt,v[1]=Bt,v[2]=At,v[3]=Tt,U.clearBufferiv(U.COLOR,0,v))}else V|=U.COLOR_BUFFER_BIT}D&&(V|=U.DEPTH_BUFFER_BIT),H&&(V|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),ut.dispose(),bt.dispose(),et.dispose(),_.dispose(),F.dispose(),B.dispose(),Xt.dispose(),L.dispose(),tt.dispose(),X.dispose(),X.removeEventListener("sessionstart",Gc),X.removeEventListener("sessionend",Wc),mi.stop()};function nt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function vt(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;let b=ot.autoReset,D=at.enabled,H=at.autoUpdate,V=at.needsUpdate,N=at.type;dt(),ot.autoReset=b,at.enabled=D,at.autoUpdate=H,at.needsUpdate=V,at.type=N}function _t(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ft(b){let D=b.target;D.removeEventListener("dispose",Ft),fe(D)}function fe(b){Pe(b),et.remove(b)}function Pe(b){let D=et.get(b).programs;D!==void 0&&(D.forEach(function(H){tt.releaseProgram(H)}),b.isShaderMaterial&&tt.releaseShaderCache(b))}this.renderBufferDirect=function(b,D,H,V,N,ct){D===null&&(D=se);let xt=N.isMesh&&N.matrixWorld.determinant()<0,wt=Md(b,D,H,V,N);Z.setMaterial(V,xt);let Tt=H.index,Nt=1;if(V.wireframe===!0){if(Tt=k.getWireframeAttribute(H),Tt===void 0)return;Nt=2}let Bt=H.drawRange,At=H.attributes.position,Zt=Bt.start*Nt,re=(Bt.start+Bt.count)*Nt;ct!==null&&(Zt=Math.max(Zt,ct.start*Nt),re=Math.min(re,(ct.start+ct.count)*Nt)),Tt!==null?(Zt=Math.max(Zt,0),re=Math.min(re,Tt.count)):At!=null&&(Zt=Math.max(Zt,0),re=Math.min(re,At.count));let ae=re-Zt;if(ae<0||ae===1/0)return;Xt.setup(N,V,wt,H,Tt);let Ge,Jt=mt;if(Tt!==null&&(Ge=q.get(Tt),Jt=Ot,Jt.setIndex(Ge)),N.isMesh)V.wireframe===!0?(Z.setLineWidth(V.wireframeLinewidth*oe()),Jt.setMode(U.LINES)):Jt.setMode(U.TRIANGLES);else if(N.isLine){let Rt=V.linewidth;Rt===void 0&&(Rt=1),Z.setLineWidth(Rt*oe()),N.isLineSegments?Jt.setMode(U.LINES):N.isLineLoop?Jt.setMode(U.LINE_LOOP):Jt.setMode(U.LINE_STRIP)}else N.isPoints?Jt.setMode(U.POINTS):N.isSprite&&Jt.setMode(U.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Jt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(T.get("WEBGL_multi_draw"))Jt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Rt=N._multiDrawStarts,En=N._multiDrawCounts,Kt=N._multiDrawCount,ln=Tt?q.get(Tt).bytesPerElement:1,Gi=et.get(V).currentProgram.getUniforms();for(let Ye=0;Ye<Kt;Ye++)Gi.setValue(U,"_gl_DrawID",Ye),Jt.render(Rt[Ye]/ln,En[Ye])}else if(N.isInstancedMesh)Jt.renderInstances(Zt,ae,N.count);else if(H.isInstancedBufferGeometry){let Rt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,En=Math.min(H.instanceCount,Rt);Jt.renderInstances(Zt,ae,En)}else Jt.render(Zt,ae)};function jt(b,D,H){b.transparent===!0&&b.side===ke&&b.forceSinglePass===!1?(b.side=Ee,b.needsUpdate=!0,_r(b,D,H),b.side=pn,b.needsUpdate=!0,_r(b,D,H),b.side=ke):_r(b,D,H)}this.compile=function(b,D,H=null){H===null&&(H=b),u=bt.get(H),u.init(D),S.push(u),H.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(u.pushLight(N),N.castShadow&&u.pushShadow(N))}),b!==H&&b.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(u.pushLight(N),N.castShadow&&u.pushShadow(N))}),u.setupLights();let V=new Set;return b.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let ct=N.material;if(ct)if(Array.isArray(ct))for(let xt=0;xt<ct.length;xt++){let wt=ct[xt];jt(wt,H,N),V.add(wt)}else jt(ct,H,N),V.add(ct)}),S.pop(),u=null,V},this.compileAsync=function(b,D,H=null){let V=this.compile(b,D,H);return new Promise(N=>{function ct(){if(V.forEach(function(xt){et.get(xt).currentProgram.isReady()&&V.delete(xt)}),V.size===0){N(b);return}setTimeout(ct,10)}T.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let an=null;function Sn(b){an&&an(b)}function Gc(){mi.stop()}function Wc(){mi.start()}let mi=new Au;mi.setAnimationLoop(Sn),typeof self<"u"&&mi.setContext(self),this.setAnimationLoop=function(b){an=b,X.setAnimationLoop(b),b===null?mi.stop():mi.start()},X.addEventListener("sessionstart",Gc),X.addEventListener("sessionend",Wc),this.render=function(b,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(D),D=X.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,D,P),u=bt.get(b,S.length),u.init(D),S.push(u),gt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Q.setFromProjectionMatrix(gt),St=this.localClippingEnabled,lt=it.init(this.clippingPlanes,St),m=ut.get(b,w.length),m.init(),w.push(m),X.enabled===!0&&X.isPresenting===!0){let ct=y.xr.getDepthSensingMesh();ct!==null&&na(ct,D,-1/0,y.sortObjects)}na(b,D,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(pt,yt),Vt=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Vt&&Mt.addToRenderList(m,b),this.info.render.frame++,lt===!0&&it.beginShadows();let H=u.state.shadowsArray;at.render(H,b,D),lt===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=m.opaque,N=m.transmissive;if(u.setupLights(),D.isArrayCamera){let ct=D.cameras;if(N.length>0)for(let xt=0,wt=ct.length;xt<wt;xt++){let Tt=ct[xt];$c(V,N,b,Tt)}Vt&&Mt.render(b);for(let xt=0,wt=ct.length;xt<wt;xt++){let Tt=ct[xt];Xc(m,b,Tt,Tt.viewport)}}else N.length>0&&$c(V,N,b,D),Vt&&Mt.render(b),Xc(m,b,D);P!==null&&(x.updateMultisampleRenderTarget(P),x.updateRenderTargetMipmap(P)),b.isScene===!0&&b.onAfterRender(y,b,D),Xt.resetDefaultState(),E=-1,M=null,S.pop(),S.length>0?(u=S[S.length-1],lt===!0&&it.setGlobalState(y.clippingPlanes,u.state.camera)):u=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function na(b,D,H,V){if(b.visible===!1)return;if(b.layers.test(D.layers)){if(b.isGroup)H=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(D);else if(b.isLight)u.pushLight(b),b.castShadow&&u.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Q.intersectsSprite(b)){V&&zt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(gt);let xt=B.update(b),wt=b.material;wt.visible&&m.push(b,xt,wt,H,zt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Q.intersectsObject(b))){let xt=B.update(b),wt=b.material;if(V&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),zt.copy(b.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),zt.copy(xt.boundingSphere.center)),zt.applyMatrix4(b.matrixWorld).applyMatrix4(gt)),Array.isArray(wt)){let Tt=xt.groups;for(let Nt=0,Bt=Tt.length;Nt<Bt;Nt++){let At=Tt[Nt],Zt=wt[At.materialIndex];Zt&&Zt.visible&&m.push(b,xt,Zt,H,zt.z,At)}}else wt.visible&&m.push(b,xt,wt,H,zt.z,null)}}let ct=b.children;for(let xt=0,wt=ct.length;xt<wt;xt++)na(ct[xt],D,H,V)}function Xc(b,D,H,V){let N=b.opaque,ct=b.transmissive,xt=b.transparent;u.setupLightsView(H),lt===!0&&it.setGlobalState(y.clippingPlanes,H),V&&Z.viewport(I.copy(V)),N.length>0&&gr(N,D,H),ct.length>0&&gr(ct,D,H),xt.length>0&&gr(xt,D,H),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function $c(b,D,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[V.id]===void 0&&(u.state.transmissionRenderTarget[V.id]=new On(1,1,{generateMipmaps:!0,type:T.has("EXT_color_buffer_half_float")||T.has("EXT_color_buffer_float")?tr:Un,minFilter:Ti,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$t.workingColorSpace}));let ct=u.state.transmissionRenderTarget[V.id],xt=V.viewport||I;ct.setSize(xt.z,xt.w);let wt=y.getRenderTarget();y.setRenderTarget(ct),y.getClearColor(j),st=y.getClearAlpha(),st<1&&y.setClearColor(16777215,.5),y.clear(),Vt&&Mt.render(H);let Tt=y.toneMapping;y.toneMapping=si;let Nt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),u.setupLightsView(V),lt===!0&&it.setGlobalState(y.clippingPlanes,V),gr(b,H,V),x.updateMultisampleRenderTarget(ct),x.updateRenderTargetMipmap(ct),T.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let At=0,Zt=D.length;At<Zt;At++){let re=D[At],ae=re.object,Ge=re.geometry,Jt=re.material,Rt=re.group;if(Jt.side===ke&&ae.layers.test(V.layers)){let En=Jt.side;Jt.side=Ee,Jt.needsUpdate=!0,qc(ae,H,V,Ge,Jt,Rt),Jt.side=En,Jt.needsUpdate=!0,Bt=!0}}Bt===!0&&(x.updateMultisampleRenderTarget(ct),x.updateRenderTargetMipmap(ct))}y.setRenderTarget(wt),y.setClearColor(j,st),Nt!==void 0&&(V.viewport=Nt),y.toneMapping=Tt}function gr(b,D,H){let V=D.isScene===!0?D.overrideMaterial:null;for(let N=0,ct=b.length;N<ct;N++){let xt=b[N],wt=xt.object,Tt=xt.geometry,Nt=V===null?xt.material:V,Bt=xt.group;wt.layers.test(H.layers)&&qc(wt,D,H,Tt,Nt,Bt)}}function qc(b,D,H,V,N,ct){b.onBeforeRender(y,D,H,V,N,ct),b.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),N.onBeforeRender(y,D,H,V,b,ct),N.transparent===!0&&N.side===ke&&N.forceSinglePass===!1?(N.side=Ee,N.needsUpdate=!0,y.renderBufferDirect(H,D,V,N,b,ct),N.side=pn,N.needsUpdate=!0,y.renderBufferDirect(H,D,V,N,b,ct),N.side=ke):y.renderBufferDirect(H,D,V,N,b,ct),b.onAfterRender(y,D,H,V,N,ct)}function _r(b,D,H){D.isScene!==!0&&(D=se);let V=et.get(b),N=u.state.lights,ct=u.state.shadowsArray,xt=N.state.version,wt=tt.getParameters(b,N.state,ct,D,H),Tt=tt.getProgramCacheKey(wt),Nt=V.programs;V.environment=b.isMeshStandardMaterial?D.environment:null,V.fog=D.fog,V.envMap=(b.isMeshStandardMaterial?F:_).get(b.envMap||V.environment),V.envMapRotation=V.environment!==null&&b.envMap===null?D.environmentRotation:b.envMapRotation,Nt===void 0&&(b.addEventListener("dispose",Ft),Nt=new Map,V.programs=Nt);let Bt=Nt.get(Tt);if(Bt!==void 0){if(V.currentProgram===Bt&&V.lightsStateVersion===xt)return Zc(b,wt),Bt}else wt.uniforms=tt.getUniforms(b),b.onBeforeCompile(wt,y),Bt=tt.acquireProgram(wt,Tt),Nt.set(Tt,Bt),V.uniforms=wt.uniforms;let At=V.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(At.clippingPlanes=it.uniform),Zc(b,wt),V.needsLights=Sd(b),V.lightsStateVersion=xt,V.needsLights&&(At.ambientLightColor.value=N.state.ambient,At.lightProbe.value=N.state.probe,At.directionalLights.value=N.state.directional,At.directionalLightShadows.value=N.state.directionalShadow,At.spotLights.value=N.state.spot,At.spotLightShadows.value=N.state.spotShadow,At.rectAreaLights.value=N.state.rectArea,At.ltc_1.value=N.state.rectAreaLTC1,At.ltc_2.value=N.state.rectAreaLTC2,At.pointLights.value=N.state.point,At.pointLightShadows.value=N.state.pointShadow,At.hemisphereLights.value=N.state.hemi,At.directionalShadowMap.value=N.state.directionalShadowMap,At.directionalShadowMatrix.value=N.state.directionalShadowMatrix,At.spotShadowMap.value=N.state.spotShadowMap,At.spotLightMatrix.value=N.state.spotLightMatrix,At.spotLightMap.value=N.state.spotLightMap,At.pointShadowMap.value=N.state.pointShadowMap,At.pointShadowMatrix.value=N.state.pointShadowMatrix),V.currentProgram=Bt,V.uniformsList=null,Bt}function Yc(b){if(b.uniformsList===null){let D=b.currentProgram.getUniforms();b.uniformsList=hs.seqWithValue(D.seq,b.uniforms)}return b.uniformsList}function Zc(b,D){let H=et.get(b);H.outputColorSpace=D.outputColorSpace,H.batching=D.batching,H.batchingColor=D.batchingColor,H.instancing=D.instancing,H.instancingColor=D.instancingColor,H.instancingMorph=D.instancingMorph,H.skinning=D.skinning,H.morphTargets=D.morphTargets,H.morphNormals=D.morphNormals,H.morphColors=D.morphColors,H.morphTargetsCount=D.morphTargetsCount,H.numClippingPlanes=D.numClippingPlanes,H.numIntersection=D.numClipIntersection,H.vertexAlphas=D.vertexAlphas,H.vertexTangents=D.vertexTangents,H.toneMapping=D.toneMapping}function Md(b,D,H,V,N){D.isScene!==!0&&(D=se),x.resetTextureUnits();let ct=D.fog,xt=V.isMeshStandardMaterial?D.environment:null,wt=P===null?y.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ms,Tt=(V.isMeshStandardMaterial?F:_).get(V.envMap||xt),Nt=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Bt=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),At=!!H.morphAttributes.position,Zt=!!H.morphAttributes.normal,re=!!H.morphAttributes.color,ae=si;V.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ae=y.toneMapping);let Ge=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Jt=Ge!==void 0?Ge.length:0,Rt=et.get(V),En=u.state.lights;if(lt===!0&&(St===!0||b!==M)){let nn=b===M&&V.id===E;it.setState(V,b,nn)}let Kt=!1;V.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==En.state.version||Rt.outputColorSpace!==wt||N.isBatchedMesh&&Rt.batching===!1||!N.isBatchedMesh&&Rt.batching===!0||N.isBatchedMesh&&Rt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Rt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Rt.instancing===!1||!N.isInstancedMesh&&Rt.instancing===!0||N.isSkinnedMesh&&Rt.skinning===!1||!N.isSkinnedMesh&&Rt.skinning===!0||N.isInstancedMesh&&Rt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Rt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Rt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Rt.instancingMorph===!1&&N.morphTexture!==null||Rt.envMap!==Tt||V.fog===!0&&Rt.fog!==ct||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==it.numPlanes||Rt.numIntersection!==it.numIntersection)||Rt.vertexAlphas!==Nt||Rt.vertexTangents!==Bt||Rt.morphTargets!==At||Rt.morphNormals!==Zt||Rt.morphColors!==re||Rt.toneMapping!==ae||Rt.morphTargetsCount!==Jt)&&(Kt=!0):(Kt=!0,Rt.__version=V.version);let ln=Rt.currentProgram;Kt===!0&&(ln=_r(V,D,N));let Gi=!1,Ye=!1,Ls=!1,le=ln.getUniforms(),xn=Rt.uniforms;if(Z.useProgram(ln.program)&&(Gi=!0,Ye=!0,Ls=!0),V.id!==E&&(E=V.id,Ye=!0),Gi||M!==b){Z.buffers.depth.getReversed()?(ht.copy(b.projectionMatrix),Rf(ht),If(ht),le.setValue(U,"projectionMatrix",ht)):le.setValue(U,"projectionMatrix",b.projectionMatrix),le.setValue(U,"viewMatrix",b.matrixWorldInverse);let $n=le.map.cameraPosition;$n!==void 0&&$n.setValue(U,Ut.setFromMatrixPosition(b.matrixWorld)),$.logarithmicDepthBuffer&&le.setValue(U,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&le.setValue(U,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,Ye=!0,Ls=!0)}if(N.isSkinnedMesh){le.setOptional(U,N,"bindMatrix"),le.setOptional(U,N,"bindMatrixInverse");let nn=N.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),le.setValue(U,"boneTexture",nn.boneTexture,x))}N.isBatchedMesh&&(le.setOptional(U,N,"batchingTexture"),le.setValue(U,"batchingTexture",N._matricesTexture,x),le.setOptional(U,N,"batchingIdTexture"),le.setValue(U,"batchingIdTexture",N._indirectTexture,x),le.setOptional(U,N,"batchingColorTexture"),N._colorsTexture!==null&&le.setValue(U,"batchingColorTexture",N._colorsTexture,x));let Ds=H.morphAttributes;if((Ds.position!==void 0||Ds.normal!==void 0||Ds.color!==void 0)&&Ct.update(N,H,ln),(Ye||Rt.receiveShadow!==N.receiveShadow)&&(Rt.receiveShadow=N.receiveShadow,le.setValue(U,"receiveShadow",N.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(xn.envMap.value=Tt,xn.flipEnvMap.value=Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&D.environment!==null&&(xn.envMapIntensity.value=D.environmentIntensity),Ye&&(le.setValue(U,"toneMappingExposure",y.toneMappingExposure),Rt.needsLights&&bd(xn,Ls),ct&&V.fog===!0&&K.refreshFogUniforms(xn,ct),K.refreshMaterialUniforms(xn,V,W,rt,u.state.transmissionRenderTarget[b.id]),hs.upload(U,Yc(Rt),xn,x)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(hs.upload(U,Yc(Rt),xn,x),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&le.setValue(U,"center",N.center),le.setValue(U,"modelViewMatrix",N.modelViewMatrix),le.setValue(U,"normalMatrix",N.normalMatrix),le.setValue(U,"modelMatrix",N.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let nn=V.uniformsGroups;for(let $n=0,qn=nn.length;$n<qn;$n++){let Jc=nn[$n];L.update(Jc,ln),L.bind(Jc,ln)}}return ln}function bd(b,D){b.ambientLightColor.needsUpdate=D,b.lightProbe.needsUpdate=D,b.directionalLights.needsUpdate=D,b.directionalLightShadows.needsUpdate=D,b.pointLights.needsUpdate=D,b.pointLightShadows.needsUpdate=D,b.spotLights.needsUpdate=D,b.spotLightShadows.needsUpdate=D,b.rectAreaLights.needsUpdate=D,b.hemisphereLights.needsUpdate=D}function Sd(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(b,D,H){et.get(b.texture).__webglTexture=D,et.get(b.depthTexture).__webglTexture=H;let V=et.get(b);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||T.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,D){let H=et.get(b);H.__webglFramebuffer=D,H.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(b,D=0,H=0){P=b,A=D,C=H;let V=!0,N=null,ct=!1,xt=!1;if(b){let Tt=et.get(b);if(Tt.__useDefaultFramebuffer!==void 0)Z.bindFramebuffer(U.FRAMEBUFFER,null),V=!1;else if(Tt.__webglFramebuffer===void 0)x.setupRenderTarget(b);else if(Tt.__hasExternalTextures)x.rebindTextures(b,et.get(b.texture).__webglTexture,et.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let At=b.depthTexture;if(Tt.__boundDepthTexture!==At){if(At!==null&&et.has(At)&&(b.width!==At.image.width||b.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");x.setupDepthRenderbuffer(b)}}let Nt=b.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(xt=!0);let Bt=et.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Bt[D])?N=Bt[D][H]:N=Bt[D],ct=!0):b.samples>0&&x.useMultisampledRTT(b)===!1?N=et.get(b).__webglMultisampledFramebuffer:Array.isArray(Bt)?N=Bt[H]:N=Bt,I.copy(b.viewport),Y.copy(b.scissor),G=b.scissorTest}else I.copy(Et).multiplyScalar(W).floor(),Y.copy(Lt).multiplyScalar(W).floor(),G=Wt;if(Z.bindFramebuffer(U.FRAMEBUFFER,N)&&V&&Z.drawBuffers(b,N),Z.viewport(I),Z.scissor(Y),Z.setScissorTest(G),ct){let Tt=et.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+D,Tt.__webglTexture,H)}else if(xt){let Tt=et.get(b.texture),Nt=D||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Tt.__webglTexture,H||0,Nt)}E=-1},this.readRenderTargetPixels=function(b,D,H,V,N,ct,xt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=et.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&xt!==void 0&&(wt=wt[xt]),wt){Z.bindFramebuffer(U.FRAMEBUFFER,wt);try{let Tt=b.texture,Nt=Tt.format,Bt=Tt.type;if(!$.textureFormatReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$.textureTypeReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=b.width-V&&H>=0&&H<=b.height-N&&U.readPixels(D,H,V,N,Dt.convert(Nt),Dt.convert(Bt),ct)}finally{let Tt=P!==null?et.get(P).__webglFramebuffer:null;Z.bindFramebuffer(U.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(b,D,H,V,N,ct,xt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=et.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&xt!==void 0&&(wt=wt[xt]),wt){let Tt=b.texture,Nt=Tt.format,Bt=Tt.type;if(!$.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$.textureTypeReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=b.width-V&&H>=0&&H<=b.height-N){Z.bindFramebuffer(U.FRAMEBUFFER,wt);let At=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,At),U.bufferData(U.PIXEL_PACK_BUFFER,ct.byteLength,U.STREAM_READ),U.readPixels(D,H,V,N,Dt.convert(Nt),Dt.convert(Bt),0);let Zt=P!==null?et.get(P).__webglFramebuffer:null;Z.bindFramebuffer(U.FRAMEBUFFER,Zt);let re=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Cf(U,re,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,At),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ct),U.deleteBuffer(At),U.deleteSync(re),ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,D=null,H=0){b.isTexture!==!0&&(zs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,b=arguments[1]);let V=Math.pow(2,-H),N=Math.floor(b.image.width*V),ct=Math.floor(b.image.height*V),xt=D!==null?D.x:0,wt=D!==null?D.y:0;x.setTexture2D(b,0),U.copyTexSubImage2D(U.TEXTURE_2D,H,0,0,xt,wt,N,ct),Z.unbindTexture()},this.copyTextureToTexture=function(b,D,H=null,V=null,N=0){b.isTexture!==!0&&(zs("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,b=arguments[1],D=arguments[2],N=arguments[3]||0,H=null);let ct,xt,wt,Tt,Nt,Bt,At,Zt,re,ae=b.isCompressedTexture?b.mipmaps[N]:b.image;H!==null?(ct=H.max.x-H.min.x,xt=H.max.y-H.min.y,wt=H.isBox3?H.max.z-H.min.z:1,Tt=H.min.x,Nt=H.min.y,Bt=H.isBox3?H.min.z:0):(ct=ae.width,xt=ae.height,wt=ae.depth||1,Tt=0,Nt=0,Bt=0),V!==null?(At=V.x,Zt=V.y,re=V.z):(At=0,Zt=0,re=0);let Ge=Dt.convert(D.format),Jt=Dt.convert(D.type),Rt;D.isData3DTexture?(x.setTexture3D(D,0),Rt=U.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(x.setTexture2DArray(D,0),Rt=U.TEXTURE_2D_ARRAY):(x.setTexture2D(D,0),Rt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,D.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,D.unpackAlignment);let En=U.getParameter(U.UNPACK_ROW_LENGTH),Kt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),ln=U.getParameter(U.UNPACK_SKIP_PIXELS),Gi=U.getParameter(U.UNPACK_SKIP_ROWS),Ye=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,ae.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ae.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Tt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Nt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Bt);let Ls=b.isDataArrayTexture||b.isData3DTexture,le=D.isDataArrayTexture||D.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){let xn=et.get(b),Ds=et.get(D),nn=et.get(xn.__renderTarget),$n=et.get(Ds.__renderTarget);Z.bindFramebuffer(U.READ_FRAMEBUFFER,nn.__webglFramebuffer),Z.bindFramebuffer(U.DRAW_FRAMEBUFFER,$n.__webglFramebuffer);for(let qn=0;qn<wt;qn++)Ls&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,et.get(b).__webglTexture,N,Bt+qn),b.isDepthTexture?(le&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,et.get(D).__webglTexture,N,re+qn),U.blitFramebuffer(Tt,Nt,ct,xt,At,Zt,ct,xt,U.DEPTH_BUFFER_BIT,U.NEAREST)):le?U.copyTexSubImage3D(Rt,N,At,Zt,re+qn,Tt,Nt,ct,xt):U.copyTexSubImage2D(Rt,N,At,Zt,re+qn,Tt,Nt,ct,xt);Z.bindFramebuffer(U.READ_FRAMEBUFFER,null),Z.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else le?b.isDataTexture||b.isData3DTexture?U.texSubImage3D(Rt,N,At,Zt,re,ct,xt,wt,Ge,Jt,ae.data):D.isCompressedArrayTexture?U.compressedTexSubImage3D(Rt,N,At,Zt,re,ct,xt,wt,Ge,ae.data):U.texSubImage3D(Rt,N,At,Zt,re,ct,xt,wt,Ge,Jt,ae):b.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,N,At,Zt,ct,xt,Ge,Jt,ae.data):b.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,N,At,Zt,ae.width,ae.height,Ge,ae.data):U.texSubImage2D(U.TEXTURE_2D,N,At,Zt,ct,xt,Ge,Jt,ae);U.pixelStorei(U.UNPACK_ROW_LENGTH,En),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Kt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,ln),U.pixelStorei(U.UNPACK_SKIP_ROWS,Gi),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ye),N===0&&D.generateMipmaps&&U.generateMipmap(Rt),Z.unbindTexture()},this.copyTextureToTexture3D=function(b,D,H=null,V=null,N=0){return b.isTexture!==!0&&(zs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,V=arguments[1]||null,b=arguments[2],D=arguments[3],N=arguments[4]||0),zs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,D,H,V,N)},this.initRenderTarget=function(b){et.get(b).__webglFramebuffer===void 0&&x.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?x.setTextureCube(b,0):b.isData3DTexture?x.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?x.setTexture2DArray(b,0):x.setTexture2D(b,0),Z.unbindTexture()},this.resetState=function(){A=0,C=0,P=null,Z.reset(),Xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=$t._getDrawingBufferColorSpace(t),e.unpackColorSpace=$t._getUnpackColorSpace()}};var Ii=class extends Re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mn,this.environmentIntensity=1,this.environmentRotation=new Mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Js=class extends Bn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},co=new R,ho=new R,Kh=new ce,Bs=new ri,kr=new Ci,Pa=new R,jh=new R,Fl=class extends Re{constructor(t=new we,e=new Js){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)co.fromBufferAttribute(e,s-1),ho.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=co.distanceTo(ho);t.setAttribute("lineDistance",new pe(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),kr.copy(i.boundingSphere),kr.applyMatrix4(s),kr.radius+=r,t.ray.intersectsSphere(kr)===!1)return;Kh.copy(s).invert(),Bs.copy(t.ray).applyMatrix4(Kh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=p,m=g-1;v<m;v+=c){let u=h.getX(v),w=h.getX(v+1),S=zr(this,t,Bs,l,u,w);S&&e.push(S)}if(this.isLineLoop){let v=h.getX(g-1),m=h.getX(p),u=zr(this,t,Bs,l,v,m);u&&e.push(u)}}else{let p=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let v=p,m=g-1;v<m;v+=c){let u=zr(this,t,Bs,l,v,v+1);u&&e.push(u)}if(this.isLineLoop){let v=zr(this,t,Bs,l,g-1,p);v&&e.push(v)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function zr(n,t,e,i,s,r){let a=n.geometry.attributes.position;if(co.fromBufferAttribute(a,s),ho.fromBufferAttribute(a,r),e.distanceSqToSegment(co,ho,Pa,jh)>i)return;Pa.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Pa);if(!(l<t.near||l>t.far))return{distance:l,point:jh.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}var Qh=new R,tu=new R,uo=class extends Fl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Qh.fromBufferAttribute(e,s),tu.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Qh.distanceTo(tu);t.setAttribute("lineDistance",new pe(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ks=class extends Bn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},eu=new ce,Bl=new ri,Hr=new Ci,Vr=new R,fo=class extends Re{constructor(t=new we,e=new Ks){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Hr.copy(i.boundingSphere),Hr.applyMatrix4(s),Hr.radius+=r,t.ray.intersectsSphere(Hr)===!1)return;eu.copy(s).invert(),Bl.copy(t.ray).applyMatrix4(eu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){let d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=d,v=p;g<v;g++){let m=c.getX(g);Vr.fromBufferAttribute(f,m),nu(Vr,m,l,s,t,e,this)}}else{let d=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let g=d,v=p;g<v;g++)Vr.fromBufferAttribute(f,g),nu(Vr,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function nu(n,t,e,i,s,r,a){let o=Bl.distanceSqToPoint(n);if(o<e){let l=new R;Bl.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Pi=class extends Ke{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var kl=class n extends we{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],a=[];o(s),c(i),h(),this.setAttribute("position",new pe(r,3)),this.setAttribute("normal",new pe(r.slice(),3)),this.setAttribute("uv",new pe(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(w){let S=new R,y=new R,O=new R;for(let A=0;A<e.length;A+=3)p(e[A+0],S),p(e[A+1],y),p(e[A+2],O),l(S,y,O,w)}function l(w,S,y,O){let A=O+1,C=[];for(let P=0;P<=A;P++){C[P]=[];let E=w.clone().lerp(y,P/A),M=S.clone().lerp(y,P/A),I=A-P;for(let Y=0;Y<=I;Y++)Y===0&&P===A?C[P][Y]=E:C[P][Y]=E.clone().lerp(M,Y/I)}for(let P=0;P<A;P++)for(let E=0;E<2*(A-P)-1;E++){let M=Math.floor(E/2);E%2===0?(d(C[P][M+1]),d(C[P+1][M]),d(C[P][M])):(d(C[P][M+1]),d(C[P+1][M+1]),d(C[P+1][M]))}}function c(w){let S=new R;for(let y=0;y<r.length;y+=3)S.x=r[y+0],S.y=r[y+1],S.z=r[y+2],S.normalize().multiplyScalar(w),r[y+0]=S.x,r[y+1]=S.y,r[y+2]=S.z}function h(){let w=new R;for(let S=0;S<r.length;S+=3){w.x=r[S+0],w.y=r[S+1],w.z=r[S+2];let y=m(w)/2/Math.PI+.5,O=u(w)/Math.PI+.5;a.push(y,1-O)}g(),f()}function f(){for(let w=0;w<a.length;w+=6){let S=a[w+0],y=a[w+2],O=a[w+4],A=Math.max(S,y,O),C=Math.min(S,y,O);A>.9&&C<.1&&(S<.2&&(a[w+0]+=1),y<.2&&(a[w+2]+=1),O<.2&&(a[w+4]+=1))}}function d(w){r.push(w.x,w.y,w.z)}function p(w,S){let y=w*3;S.x=t[y+0],S.y=t[y+1],S.z=t[y+2]}function g(){let w=new R,S=new R,y=new R,O=new R,A=new It,C=new It,P=new It;for(let E=0,M=0;E<r.length;E+=9,M+=6){w.set(r[E+0],r[E+1],r[E+2]),S.set(r[E+3],r[E+4],r[E+5]),y.set(r[E+6],r[E+7],r[E+8]),A.set(a[M+0],a[M+1]),C.set(a[M+2],a[M+3]),P.set(a[M+4],a[M+5]),O.copy(w).add(S).add(y).divideScalar(3);let I=m(O);v(A,M+0,w,I),v(C,M+2,S,I),v(P,M+4,y,I)}}function v(w,S,y,O){O<0&&w.x===1&&(a[S]=w.x-1),y.x===0&&y.z===0&&(a[S]=O/2/Math.PI+.5)}function m(w){return Math.atan2(w.z,-w.x)}function u(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.details)}};var Gr=new R,Wr=new R,La=new R,Xr=new ei,po=class extends we{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(ls*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],f=new Array(3),d={},p=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:v,b:m,c:u}=Xr;if(v.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),u.fromBufferAttribute(o,c[2]),Xr.getNormal(La),f[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,f[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,f[2]=`${Math.round(u.x*s)},${Math.round(u.y*s)},${Math.round(u.z*s)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let w=0;w<3;w++){let S=(w+1)%3,y=f[w],O=f[S],A=Xr[h[w]],C=Xr[h[S]],P=`${y}_${O}`,E=`${O}_${y}`;E in d&&d[E]?(La.dot(d[E].normal)<=r&&(p.push(A.x,A.y,A.z),p.push(C.x,C.y,C.z)),d[E]=null):P in d||(d[P]={index0:c[w],index1:c[S],normal:La.clone()})}}for(let g in d)if(d[g]){let{index0:v,index1:m}=d[g];Gr.fromBufferAttribute(o,v),Wr.fromBufferAttribute(o,m),p.push(Gr.x,Gr.y,Gr.z),p.push(Wr.x,Wr.y,Wr.z)}this.setAttribute("position",new pe(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};var mo=class n extends kl{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var go=class n extends we{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],f=new R,d=new R,p=[],g=[],v=[],m=[];for(let u=0;u<=i;u++){let w=[],S=u/i,y=0;u===0&&a===0?y=.5/e:u===i&&l===Math.PI&&(y=-.5/e);for(let O=0;O<=e;O++){let A=O/e;f.x=-t*Math.cos(s+A*r)*Math.sin(a+S*o),f.y=t*Math.cos(a+S*o),f.z=t*Math.sin(s+A*r)*Math.sin(a+S*o),g.push(f.x,f.y,f.z),d.copy(f).normalize(),v.push(d.x,d.y,d.z),m.push(A+y,1-S),w.push(c++)}h.push(w)}for(let u=0;u<i;u++)for(let w=0;w<e;w++){let S=h[u][w+1],y=h[u][w],O=h[u+1][w],A=h[u+1][w+1];(u!==0||a>0)&&p.push(S,y,A),(u!==i-1||l<Math.PI)&&p.push(y,O,A)}this.setIndex(p),this.setAttribute("position",new pe(g,3)),this.setAttribute("normal",new pe(v,3)),this.setAttribute("uv",new pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Li=class extends Bn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bu,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function $r(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function E_(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var xs=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break n}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},zl=class extends xs{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:th,endingEnd:th}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case eh:r=t,o=2*e-i;break;case nh:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case eh:a=t,l=2*i-e;break;case nh:a=1,l=i+s[1]-s[0];break;default:a=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(i-e)/(s-e),v=g*g,m=v*g,u=-d*m+2*d*v-d*g,w=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,S=(-1-p)*m+(1.5+p)*v+.5*g,y=p*m-p*v;for(let O=0;O!==o;++O)r[O]=u*a[h+O]+w*a[c+O]+S*a[l+O]+y*a[f+O];return r}},Hl=class extends xs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-e)/(s-e),f=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*f+a[l+d]*h;return r}},Vl=class extends xs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},gn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=$r(e,this.TimeBufferType),this.values=$r(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:$r(t.times,Array),values:$r(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Vl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Hl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new zl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case jr:e=this.InterpolantFactoryMethodDiscrete;break;case yl:e=this.InterpolantFactoryMethodLinear;break;case sa:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return jr;case this.InterpolantFactoryMethodLinear:return yl;case this.InterpolantFactoryMethodSmooth:return sa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&E_(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===sa,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let f=o*i,d=f-i,p=f+i;for(let g=0;g!==i;++g){let v=e[f+g];if(v!==e[d+g]||v!==e[p+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let f=o*i,d=a*i;for(let p=0;p!==i;++p)e[d+p]=e[f+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};gn.prototype.TimeBufferType=Float32Array;gn.prototype.ValueBufferType=Float32Array;gn.prototype.DefaultInterpolation=yl;var Di=class extends gn{constructor(t,e,i){super(t,e,i)}};Di.prototype.ValueTypeName="bool";Di.prototype.ValueBufferType=Array;Di.prototype.DefaultInterpolation=jr;Di.prototype.InterpolantFactoryMethodLinear=void 0;Di.prototype.InterpolantFactoryMethodSmooth=void 0;var Gl=class extends gn{};Gl.prototype.ValueTypeName="color";var Wl=class extends gn{};Wl.prototype.ValueTypeName="number";var Xl=class extends xs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)mn.slerpFlat(r,0,a,c-o,a,c,l);return r}},_o=class extends gn{InterpolantFactoryMethodLinear(t){return new Xl(this.times,this.values,this.getValueSize(),t)}};_o.prototype.ValueTypeName="quaternion";_o.prototype.InterpolantFactoryMethodSmooth=void 0;var Ui=class extends gn{constructor(t,e,i){super(t,e,i)}};Ui.prototype.ValueTypeName="string";Ui.prototype.ValueBufferType=Array;Ui.prototype.DefaultInterpolation=jr;Ui.prototype.InterpolantFactoryMethodLinear=void 0;Ui.prototype.InterpolantFactoryMethodSmooth=void 0;var $l=class extends gn{};$l.prototype.ValueTypeName="vector";var ql=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=c.length;f<d;f+=2){let p=c[f],g=c[f+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},w_=new ql,Yl=class{constructor(t){this.manager=t!==void 0?t:w_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Yl.DEFAULT_MATERIAL_NAME="__DEFAULT";var vs=class extends Re{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Pt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},xo=class extends vs{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Da=new ce,iu=new R,su=new R,vo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new It(512,512),this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ys,this._frameExtents=new It(1,1),this._viewportCount=1,this._viewports=[new ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;iu.setFromMatrixPosition(t.matrixWorld),e.position.copy(iu),su.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(su),e.updateMatrixWorld(),Da.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Da),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Da)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var ru=new ce,ks=new R,Ua=new R,Zl=class extends vo{constructor(){super(new Ce(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new It(4,2),this._viewportCount=6,this._viewports=[new ee(2,1,1,1),new ee(0,1,1,1),new ee(3,1,1,1),new ee(1,1,1,1),new ee(3,0,1,1),new ee(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),ks.setFromMatrixPosition(t.matrixWorld),i.position.copy(ks),Ua.copy(i.position),Ua.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Ua),i.updateMatrixWorld(),s.makeTranslation(-ks.x,-ks.y,-ks.z),ru.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ru)}},yo=class extends vs{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Zl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Jl=class extends vo{constructor(){super(new ao(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ys=class extends vs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.target=new Re,this.shadow=new Jl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Mo=class extends vs{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var bo=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ou(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=ou();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function ou(){return performance.now()}var cc="\\[\\]\\.:\\/",T_=new RegExp("["+cc+"]","g"),hc="[^"+cc+"]",A_="[^"+cc.replace("\\.","")+"]",C_=/((?:WC+[\/:])*)/.source.replace("WC",hc),R_=/(WCOD+)?/.source.replace("WCOD",A_),I_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hc),P_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hc),L_=new RegExp("^"+C_+R_+I_+P_+"$"),D_=["material","materials","bones","map"],Kl=class{constructor(t,e,i){let s=i||he.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},he=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(T_,"")}static parseTrackName(t){let e=L_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);D_.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};he.Composite=Kl;he.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};he.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};he.prototype.GetterByBindingType=[he.prototype._getValue_direct,he.prototype._getValue_array,he.prototype._getValue_arrayElement,he.prototype._getValue_toArray];he.prototype.SetterByBindingTypeAndVersioning=[[he.prototype._setValue_direct,he.prototype._setValue_direct_setNeedsUpdate,he.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[he.prototype._setValue_array,he.prototype._setValue_array_setNeedsUpdate,he.prototype._setValue_array_setMatrixWorldNeedsUpdate],[he.prototype._setValue_arrayElement,he.prototype._setValue_arrayElement_setNeedsUpdate,he.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[he.prototype._setValue_fromArray,he.prototype._setValue_fromArray_setNeedsUpdate,he.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Yx=new Float32Array(1);var au=new ce,js=class{constructor(t,e,i=0,s=1/0){this.ray=new ri(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new qs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return au.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(au),this}intersectObject(t,e=!0,i=[]){return jl(t,this,i,e),i.sort(lu),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)jl(t[s],this,i,e);return i.sort(lu),i}};function lu(n,t){return n.distance-t.distance}function jl(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let a=0,o=r.length;a<o;a++)jl(r[a],t,e,!0)}}var Qs=class{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Ne(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var So=class extends Nn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ql}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ql);var Du={type:"change"},dc={type:"start"},Nu={type:"end"},Co=new ri,Uu=new We,U_=Math.cos(70*To.DEG2RAD),be=new R,Xe=2*Math.PI,ne={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},uc=1e-6,Ro=class extends So{constructor(t,e=null){super(t,e),this.state=ne.NONE,this.enabled=!0,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ni.ROTATE,MIDDLE:Ni.DOLLY,RIGHT:Ni.PAN},this.touches={ONE:Oi.ROTATE,TWO:Oi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new R,this._lastQuaternion=new mn,this._lastTargetPosition=new R,this._quat=new mn().setFromUnitVectors(t.up,new R(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Qs,this._sphericalDelta=new Qs,this._scale=1,this._panOffset=new R,this._rotateStart=new It,this._rotateEnd=new It,this._rotateDelta=new It,this._panStart=new It,this._panEnd=new It,this._panDelta=new It,this._dollyStart=new It,this._dollyEnd=new It,this._dollyDelta=new It,this._dollyDirection=new R,this._mouse=new It,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=O_.bind(this),this._onPointerDown=N_.bind(this),this._onPointerUp=F_.bind(this),this._onContextMenu=W_.bind(this),this._onMouseWheel=z_.bind(this),this._onKeyDown=H_.bind(this),this._onTouchStart=V_.bind(this),this._onTouchMove=G_.bind(this),this._onMouseDown=B_.bind(this),this._onMouseMove=k_.bind(this),this._interceptControlDown=X_.bind(this),this._interceptControlUp=$_.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Du),this.update(),this.state=ne.NONE}update(t=null){let e=this.object.position;be.copy(e).sub(this.target),be.applyQuaternion(this._quat),this._spherical.setFromVector3(be),this.autoRotate&&this.state===ne.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Xe:i>Math.PI&&(i-=Xe),s<-Math.PI?s+=Xe:s>Math.PI&&(s-=Xe),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(be.setFromSpherical(this._spherical),be.applyQuaternion(this._quatInverse),e.copy(this.target).add(be),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=be.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new R(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new R(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=be.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Co.origin.copy(this.object.position),Co.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Co.direction))<U_?this.object.lookAt(this.target):(Uu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Co.intersectPlane(Uu,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>uc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>uc||this._lastTargetPosition.distanceToSquared(this.target)>uc?(this.dispatchEvent(Du),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Xe/60*this.autoRotateSpeed*t:Xe/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){be.setFromMatrixColumn(e,0),be.multiplyScalar(-t),this._panOffset.add(be)}_panUp(t,e){this.screenSpacePanning===!0?be.setFromMatrixColumn(e,1):(be.setFromMatrixColumn(e,0),be.crossVectors(this.object.up,be)),be.multiplyScalar(t),this._panOffset.add(be)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;be.copy(s).sub(this.target);let r=be.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Xe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Xe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Xe*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Xe*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Xe*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Xe*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Xe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Xe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new It,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function N_(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function O_(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function F_(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Nu),this.state=ne.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function B_(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ni.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ne.DOLLY;break;case Ni.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ne.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ne.ROTATE}break;case Ni.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ne.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ne.PAN}break;default:this.state=ne.NONE}this.state!==ne.NONE&&this.dispatchEvent(dc)}function k_(n){switch(this.state){case ne.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ne.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ne.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function z_(n){this.enabled===!1||this.enableZoom===!1||this.state!==ne.NONE||(n.preventDefault(),this.dispatchEvent(dc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Nu))}function H_(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function V_(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Oi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ne.TOUCH_ROTATE;break;case Oi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ne.TOUCH_PAN;break;default:this.state=ne.NONE}break;case 2:switch(this.touches.TWO){case Oi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ne.TOUCH_DOLLY_PAN;break;case Oi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ne.TOUCH_DOLLY_ROTATE;break;default:this.state=ne.NONE}break;default:this.state=ne.NONE}this.state!==ne.NONE&&this.dispatchEvent(dc)}function G_(n){switch(this._trackPointer(n),this.state){case ne.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ne.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ne.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ne.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ne.NONE}}function W_(n){this.enabled!==!1&&n.preventDefault()}function X_(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function $_(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Io=class extends Ii{constructor(){super();let t=new kn;t.deleteAttribute("uv");let e=new Li({side:Ee}),i=new Li,s=new yo(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new qt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new qt(t,i);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);let o=new qt(t,i);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);let l=new qt(t,i);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new qt(t,i);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let h=new qt(t,i);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let f=new qt(t,i);f.position.set(-2.193,-.369,-5.547),f.rotation.set(0,.516,0),f.scale.set(3.875,3.487,2.986),this.add(f);let d=new qt(t,Es(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);let p=new qt(t,Es(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);let g=new qt(t,Es(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let v=new qt(t,Es(43));v.position.set(-.462,8.89,14.52),v.scale.set(4.38,5.441,.088),this.add(v);let m=new qt(t,Es(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);let u=new qt(t,Es(100));u.position.set(0,20,0),u.scale.set(1,.1,1),this.add(u)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Es(n){let t=new je;return t.color.setScalar(n),t}var $e={ru:{title:"\u0414\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 3D-\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440",study:"",focus:"\u0424\u043E\u043A\u0443\u0441",body:"\u0412\u0441\u0451 \u0442\u0435\u043B\u043E",neck:"\u0428\u0435\u044F",brain:"\u041C\u043E\u0437\u0433",views:"\u0412\u0438\u0434",front:"\u0421\u043F\u0435\u0440\u0435\u0434\u0438",back:"\u0421\u0437\u0430\u0434\u0438",left:"\u0421\u043B\u0435\u0432\u0430",right:"\u0421\u043F\u0440\u0430\u0432\u0430",top:"\u0421\u0432\u0435\u0440\u0445\u0443",bottom:"\u0421\u043D\u0438\u0437\u0443",reset:"\u0421\u0431\u0440\u043E\u0441",xray:"\u0420\u0435\u043D\u0442\u0433\u0435\u043D-\u0440\u0435\u0436\u0438\u043C",layers:"\u0421\u043B\u043E\u0438",clip:"\u0421\u0440\u0435\u0437",clipOff:"\u041D\u0435\u0442",axial:"\u0410\u043A\u0441\u0438\u0430\u043B\u044C\u043D\u044B\u0439",sagittal:"\u0421\u0430\u0433\u0438\u0442\u0442\u0430\u043B\u044C\u043D\u044B\u0439",coronal:"\u041A\u043E\u0440\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0439",flip:"\u0414\u0440\u0443\u0433\u0430\u044F \u0441\u0442\u043E\u0440\u043E\u043D\u0430",clipInner:"\u0420\u0435\u0437\u0430\u0442\u044C \u0438 \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0438\u0435 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u044B",slab:"\u0422\u043E\u043D\u043A\u0438\u0439 \u0441\u0440\u0435\u0437 (8 \u043C\u043C), \u043A\u0430\u043A \u043D\u0430 \u041C\u0420\u0422",isolate:"\u0418\u0437\u043E\u043B\u0438\u0440\u043E\u0432\u0430\u0442\u044C",findings:"\u041D\u0430\u0445\u043E\u0434\u043A\u0438",issues:"\u0412\u043E\u043F\u0440\u043E\u0441\u044B \u0440\u0435\u043D\u0442\u0433\u0435\u043D\u043E\u043B\u043E\u0433\u0443 (\u0434\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u043A \u0437\u0430\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044E)",legend:"\u041E\u0431\u043E\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F",doctor:"\u0420\u0435\u0436\u0438\u043C \u0432\u0440\u0430\u0447\u0430",voice:"\u0413\u043E\u043B\u043E\u0441",voiceOn:"\u0413\u043E\u043B\u043E\u0441 \u0432\u043A\u043B\u044E\u0447\u0451\u043D",voiceOff:"\u0413\u043E\u043B\u043E\u0441 \u0432\u044B\u043A\u043B\u044E\u0447\u0435\u043D",enableVoice:"\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0433\u043E\u043B\u043E\u0441",anim:"\u0421\u0438\u0433\u043D\u0430\u043B\u044B \u0438 \u043A\u0440\u043E\u0432\u043E\u0442\u043E\u043A",help:"\u041A\u043B\u0430\u0432\u0438\u0448\u0438",found:"\u0427\u0442\u043E \u043D\u0430\u0439\u0434\u0435\u043D\u043E",how:"\u041A\u0430\u043A \u044D\u0442\u043E \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442",todo:"\u0427\u0442\u043E \u0434\u0435\u043B\u0430\u0442\u044C",tech:"\u0414\u043B\u044F \u0432\u0440\u0430\u0447\u0430",replay:"\u041E\u0437\u0432\u0443\u0447\u0438\u0442\u044C",stop:"\u0421\u0442\u043E\u043F",goto:"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C",close:"\u0417\u0430\u043A\u0440\u044B\u0442\u044C",voiceHint:"\u0427\u0442\u043E\u0431\u044B \u0441\u043B\u044B\u0448\u0430\u0442\u044C \u043F\u043E\u044F\u0441\u043D\u0435\u043D\u0438\u044F, \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \xAB\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0433\u043E\u043B\u043E\u0441\xBB \u0438\u043B\u0438 \u0432 \u043B\u044E\u0431\u043E\u043C \u043C\u0435\u0441\u0442\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B",hoverHint:"\u041D\u0430\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430 \u043E\u0442\u043C\u0435\u0442\u043A\u0443 \u2014 \u0433\u043E\u043B\u043E\u0441 \u043E\u0431\u044A\u044F\u0441\u043D\u0438\u0442 \u043D\u0430\u0445\u043E\u0434\u043A\u0443. \u041A\u043B\u0438\u043A \u2014 \u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u044C.",hoverHintText:"\u041D\u0430\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430 \u043E\u0442\u043C\u0435\u0442\u043A\u0443 \u2014 \u043F\u043E\u044F\u0432\u0438\u0442\u0441\u044F \u043F\u043E\u044F\u0441\u043D\u0435\u043D\u0438\u0435. \u041A\u043B\u0438\u043A \u2014 \u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u044C.",voiceMode:{clips:"\u0413\u043E\u043B\u043E\u0441: \u0437\u0430\u043F\u0438\u0441\u044C",browser:"\u0413\u043E\u043B\u043E\u0441 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430",off:"\u0422\u043E\u043B\u044C\u043A\u043E \u0442\u0435\u043A\u0441\u0442"},voicePick:"\u0413\u043E\u043B\u043E\u0441 \u043E\u0437\u0432\u0443\u0447\u043A\u0438",voiceAuto:"\u0430\u0432\u0442\u043E",controls:"\u041F\u0430\u043D\u0435\u043B\u044C \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F",ttsMissing:"\u0412 \u044D\u0442\u043E\u043C \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435 \u043D\u0435\u0442 \u0433\u043E\u043B\u043E\u0441\u0430 \u0434\u043B\u044F \u0440\u0443\u0441\u0441\u043A\u043E\u0433\u043E \u044F\u0437\u044B\u043A\u0430 \u2014 \u043F\u043E\u044F\u0441\u043D\u0435\u043D\u0438\u044F \u043F\u043E\u043A\u0430\u0437\u0430\u043D\u044B \u0442\u0435\u043A\u0441\u0442\u043E\u043C.",level:"\u0443\u0440\u043E\u0432\u0435\u043D\u044C",height:"\u0432\u044B\u0441\u043E\u0442\u0430",mm:"\u043C\u043C",disclaimer:"\u0421\u0445\u0435\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043C\u043E\u0434\u0435\u043B\u044C: \u043D\u0430\u0445\u043E\u0434\u043A\u0438 \u0440\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u044B \u043F\u043E \u0437\u0430\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044E \u041C\u0420\u0422 \u0438 \u043F\u043E \u0440\u0430\u0437\u0431\u043E\u0440\u0443 \u0441\u0430\u043C\u0438\u0445 \u0441\u043D\u0438\u043C\u043A\u043E\u0432 (\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E). \u041D\u0435 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0434\u0438\u0430\u0433\u043D\u043E\u0437\u043E\u043C \u2014 \u0432\u0441\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442 \u0432\u0440\u0430\u0447.",attribution:"\u0410\u043D\u0430\u0442\u043E\u043C\u0438\u044F: Z-Anatomy (CC BY-SA 4.0), \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0435 BodyParts3D \xA9 DBCLS \xB7 three.js (MIT)",voiceCredit:{clips:"\u0433\u043E\u043B\u043E\u0441: OmniVoice (\u043B\u043E\u043A\u0430\u043B\u044C\u043D\u043E)",browser:"\u0433\u043E\u043B\u043E\u0441: \u0441\u0438\u043D\u0442\u0435\u0437 \u0440\u0435\u0447\u0438 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430",off:""},sev:{critical:"\u0412\u044B\u0441\u043E\u043A\u0430\u044F \u0432\u0430\u0436\u043D\u043E\u0441\u0442\u044C",serious:"\u0421\u0440\u0435\u0434\u043D\u044F\u044F \u0432\u0430\u0436\u043D\u043E\u0441\u0442\u044C",warning:"\u041D\u0430\u0431\u043B\u044E\u0434\u0430\u0442\u044C",info:"\u0421\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u043E",good:"\u041E\u0431\u043D\u0430\u0434\u0451\u0436\u0438\u0432\u0430\u0435\u0442"},layerNames:{skin:"\u041A\u043E\u0436\u0430",muscles:"\u041C\u044B\u0448\u0446\u044B \u0448\u0435\u0438",skeleton:"\u0421\u043A\u0435\u043B\u0435\u0442",vertebrae:"\u041F\u043E\u0437\u0432\u043E\u043D\u043A\u0438 C1\u2013Th5",discs:"\u0414\u0438\u0441\u043A\u0438",dura:"\u0414\u0443\u0440\u0430\u043B\u044C\u043D\u044B\u0439 \u043C\u0435\u0448\u043E\u043A (\u043B\u0438\u043A\u0432\u043E\u0440)",cord:"\u0421\u043F\u0438\u043D\u043D\u043E\u0439 \u043C\u043E\u0437\u0433",nerves:"\u041D\u0435\u0440\u0432\u044B",arteries:"\u0410\u0440\u0442\u0435\u0440\u0438\u0438",cortex:"\u041A\u043E\u0440\u0430 \u0438 \u043C\u043E\u0437\u0436\u0435\u0447\u043E\u043A",white_matter:"\u0411\u0435\u043B\u043E\u0435 \u0432\u0435\u0449\u0435\u0441\u0442\u0432\u043E",deep_brain:"\u0413\u043B\u0443\u0431\u043E\u043A\u0438\u0435 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u044B \u043C\u043E\u0437\u0433\u0430",findings:"\u041D\u0430\u0445\u043E\u0434\u043A\u0438"},legendItems:[["#ff5e13","\u0412\u044B\u0431\u0443\u0445\u0430\u043D\u0438\u0435 \u0434\u0438\u0441\u043A\u0430, \u0444\u0440\u0430\u0433\u043C\u0435\u043D\u0442 (\u043F\u043E \u0441\u043D\u0438\u043C\u043A\u0430\u043C)"],["#fab219","\u041E\u0447\u0430\u0433\u0438 \u0432 \u0431\u0435\u043B\u043E\u043C \u0432\u0435\u0449\u0435\u0441\u0442\u0432\u0435"],["#c8102e","\u0410\u0440\u0442\u0435\u0440\u0438\u0438 (\u043B\u0435\u0432\u0430\u044F \u043F\u043E\u0437\u0432\u043E\u043D\u043E\u0447\u043D\u0430\u044F \u2014 \u0442\u043E\u043D\u044C\u0448\u0435)"],["#ffc21a","\u041D\u0435\u0440\u0432\u044B \u0438 \u043A\u043E\u0440\u0435\u0448\u043A\u0438"],["#ffd23f","\u0421\u043F\u0438\u043D\u043D\u043E\u0439 \u043C\u043E\u0437\u0433"],["#38b6ff","\u0414\u0443\u0440\u0430\u043B\u044C\u043D\u044B\u0439 \u043C\u0435\u0448\u043E\u043A \u0441 \u043B\u0438\u043A\u0432\u043E\u0440\u043E\u043C"]],keys:"X \u2014 \u0440\u0435\u043D\u0442\u0433\u0435\u043D \xB7 1/2/3 \u2014 \u0442\u0435\u043B\u043E/\u0448\u0435\u044F/\u043C\u043E\u0437\u0433 \xB7 F/B/L/R/T \u2014 \u0432\u0438\u0434\u044B \xB7 C \u2014 \u0441\u0440\u0435\u0437 \xB7 M \u2014 \u0441\u043D\u0438\u043C\u043A\u0438 \xB7 G \u2014 \u043F\u043B\u0430\u043D \xB7 N/P \u2014 \u043E\u0431\u0437\u043E\u0440 \xB7 \u041F\u0440\u043E\u0431\u0435\u043B \u2014 \u0441\u0442\u043E\u043F \u0433\u043E\u043B\u043E\u0441 \xB7 Esc \u2014 \u0437\u0430\u043A\u0440\u044B\u0442\u044C",loading:"\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043C\u043E\u0434\u0435\u043B\u0438\u2026",status:{confirmed:"\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u043E \u0441\u043D\u0438\u043C\u043A\u0430\u043C\u0438",partly:"\u0427\u0430\u0441\u0442\u0438\u0447\u043D\u043E \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u043E",revised:"\u0423\u0442\u043E\u0447\u043D\u0435\u043D\u043E \u043F\u043E \u0441\u043D\u0438\u043C\u043A\u0430\u043C",unconfirmed:"\u041D\u0435 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u043E \u0441\u043D\u0438\u043C\u043A\u0430\u043C\u0438",new:"\u041D\u043E\u0432\u043E\u0435 \u043F\u043E \u0441\u043D\u0438\u043C\u043A\u0430\u043C"},vs:"\u0417\u0430\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u0438 \u0441\u043D\u0438\u043C\u043A\u0438",guide:"\u041F\u043B\u0430\u043D",guideTabs:{plan:"\u0427\u0442\u043E \u0434\u0435\u043B\u0430\u0442\u044C",measures:"\u0418\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u044F",safety:"\u0411\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C"},guideNote:"\u041F\u043E \u0440\u0430\u0437\u0431\u043E\u0440\u0443 \u0435\u0451 \u041C\u0420\u0422 \u0441\u043E\u0432\u0435\u0442\u043E\u043C \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u043E\u0432. \u042D\u0442\u043E \u043D\u0435 \u0434\u0438\u0430\u0433\u043D\u043E\u0437: \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u044E\u0442 \u0435\u0451 \u0432\u0440\u0430\u0447\u0438.",canalTitle:"\u041F\u043E\u0437\u0432\u043E\u043D\u043E\u0447\u043D\u044B\u0439 \u043A\u0430\u043D\u0430\u043B: \u043D\u0430\u0438\u043C\u0435\u043D\u044C\u0448\u0438\u0439 \u043F\u0435\u0440\u0435\u0434\u043D\u0435-\u0437\u0430\u0434\u043D\u0438\u0439 \u0440\u0430\u0437\u043C\u0435\u0440, \u043C\u043C",canalMid:"\u043F\u043E \u0441\u0440\u0435\u0434\u043D\u0435\u0439 \u043B\u0438\u043D\u0438\u0438",canalLeft:"\u043D\u0430 3 \u043C\u043C \u043B\u0435\u0432\u0435\u0435",canalRef:"\u0435\u0451 \u043D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u044B\u0435 \u0443\u0440\u043E\u0432\u043D\u0438",vesselsTitle:"\u041F\u043E\u0437\u0432\u043E\u043D\u043E\u0447\u043D\u044B\u0435 \u0438 \u0431\u0430\u0437\u0438\u043B\u044F\u0440\u043D\u0430\u044F \u0430\u0440\u0442\u0435\u0440\u0438\u0438: \u0434\u0438\u0430\u043C\u0435\u0442\u0440, \u043C\u043C",numbersTitle:"\u0414\u0440\u0443\u0433\u0438\u0435 \u043A\u043B\u044E\u0447\u0435\u0432\u044B\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F",safeDo:"\u0414\u0435\u043B\u0430\u0442\u044C",safeDont:"\u041D\u0435 \u0434\u0435\u043B\u0430\u0442\u044C",safeFaint:"\u0415\u0441\u043B\u0438 \u043E\u043D\u0430 \u0442\u0435\u0440\u044F\u0435\u0442 \u0441\u043E\u0437\u043D\u0430\u043D\u0438\u0435",open3d:"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432 3D",tour:"\u041E\u0431\u0437\u043E\u0440",tourStep:"\u0428\u0430\u0433",prev:"\u041D\u0430\u0437\u0430\u0434",next:"\u0414\u0430\u043B\u0435\u0435",endTour:"\u0417\u0430\u043A\u043E\u043D\u0447\u0438\u0442\u044C",mri:"\u041C\u0420\u0422-\u043F\u043E\u0434\u043E\u0431\u043D\u044B\u0435 \u0441\u0440\u0435\u0437\u044B \u043C\u043E\u0434\u0435\u043B\u0438",mriNote:"\u0421\u0438\u043D\u0442\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0441\u0440\u0435\u0437\u044B 3D-\u043C\u043E\u0434\u0435\u043B\u0438 (\u043D\u0435 \u0441\u043D\u0438\u043C\u043A\u0438 \u043F\u0430\u0446\u0438\u0435\u043D\u0442\u0430), \u0434\u043B\u044F \u043E\u0440\u0438\u0435\u043D\u0442\u0430\u0446\u0438\u0438.",mriWarn:"\u0421\u0438\u043D\u0442\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0441\u0440\u0435\u0437 \u043C\u043E\u0434\u0435\u043B\u0438 \u2014 \u043D\u0435 \u041C\u0420\u0422-\u0441\u043D\u0438\u043C\u043E\u043A",mriShow:"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u044D\u0442\u043E\u0442 \u0441\u0440\u0435\u0437 \u0432 3D"},en:{title:"3D diagnostic viewer",study:"",focus:"Focus",body:"Whole body",neck:"Neck",brain:"Brain",views:"View",front:"Front",back:"Back",left:"Left",right:"Right",top:"Top",bottom:"Bottom",reset:"Reset",xray:"X-ray mode",layers:"Layers",clip:"Clipping",clipOff:"Off",axial:"Axial",sagittal:"Sagittal",coronal:"Coronal",flip:"Other side",clipInner:"Clip inner structures too",slab:"Thin slab (8 mm), MRI-like",isolate:"Isolate",findings:"Findings",issues:"Questions for the radiologist (addendum)",legend:"Legend",doctor:"Doctor mode",voice:"Voice",voiceOn:"Voice on",voiceOff:"Voice off",enableVoice:"Enable voice",anim:"Signals & blood flow",help:"Keys",found:"What was found",how:"How it works",todo:"What to do",tech:"For the doctor",replay:"Play",stop:"Stop",goto:"Show",close:"Close",voiceHint:'To hear the explanations, press "Enable voice" or click anywhere on the page',hoverHint:"Hover over a marker: the voice explains the finding. Click to zoom in.",hoverHintText:"Hover over a marker to read the explanation. Click to zoom in.",voiceMode:{clips:"Voice: recorded",browser:"Browser voice",off:"Text only"},voicePick:"Speech voice",voiceAuto:"auto",controls:"Controls",ttsMissing:"This browser has no English voice, so the explanations are shown as text.",level:"level",height:"height",mm:"mm",disclaimer:"Schematic model: findings placed from the written MRI report and a review of the images (approximate). Not a diagnosis \u2014 all decisions belong with the doctor.",attribution:"Anatomy: Z-Anatomy (CC BY-SA 4.0), derived from BodyParts3D \xA9 DBCLS \xB7 three.js (MIT)",voiceCredit:{clips:"voice: OmniVoice (local)",browser:"voice: browser speech synthesis",off:""},sev:{critical:"High priority",serious:"Moderate",warning:"Monitor",info:"Incidental",good:"Reassuring"},layerNames:{skin:"Skin",muscles:"Neck muscles",skeleton:"Skeleton",vertebrae:"Vertebrae C1\u2013T5",discs:"Discs",dura:"Dural sac (CSF)",cord:"Spinal cord",nerves:"Nerves",arteries:"Arteries",cortex:"Cortex & cerebellum",white_matter:"White matter",deep_brain:"Deep brain",findings:"Findings"},legendItems:[["#ff5e13","Disc bulge or fragment (as on the images)"],["#fab219","White-matter spots"],["#c8102e","Arteries (left vertebral thinner)"],["#ffc21a","Nerves and roots"],["#ffd23f","Spinal cord"],["#38b6ff","Dural sac with CSF"]],keys:"X \u2014 x-ray \xB7 1/2/3 \u2014 body/neck/brain \xB7 F/B/L/R/T \u2014 views \xB7 C \u2014 clipping \xB7 M \u2014 scans \xB7 G \u2014 plan \xB7 N/P \u2014 tour \xB7 Space \u2014 stop voice \xB7 Esc \u2014 close",loading:"Loading model\u2026",status:{confirmed:"Confirmed on images",partly:"Partly confirmed",revised:"Revised on images",unconfirmed:"Not confirmed on images",new:"New on images"},vs:"Report vs images",guide:"Plan",guideTabs:{plan:"What to do",measures:"Measurements",safety:"Safety"},guideNote:"From a council review of her MRI. Not a diagnosis: her doctors decide.",canalTitle:"Spinal canal: narrowest front-to-back size, mm",canalMid:"midline",canalLeft:"3 mm left of midline",canalRef:"her normal levels",vesselsTitle:"Vertebral and basilar arteries: diameter, mm",numbersTitle:"Other key values",safeDo:"Do",safeDont:"Don't",safeFaint:"If she faints",open3d:"Show in 3D",tour:"Tour",tourStep:"Step",prev:"Back",next:"Next",endTour:"End",mri:"MRI-like slices of the model",mriNote:"Synthetic slices of the 3D model (not the patient's images), for orientation.",mriWarn:"Synthetic model slice \u2014 not an MRI image",mriShow:"Show this slice in 3D"}},fc=(n,t)=>t==="ru"?n.replace(/T(\d)/g,"Th$1"):n;function Ou(n,t){let e=t==="ru",i;if(i=n.match(/^vert_(C|T)(\d)$/))return n==="vert_C1"?e?"\u0410\u0442\u043B\u0430\u043D\u0442 (C1)":"Atlas (C1)":n==="vert_C2"?e?"\u0410\u043A\u0441\u0438\u0441 (C2)":"Axis (C2)":(e?"\u041F\u043E\u0437\u0432\u043E\u043D\u043E\u043A ":"Vertebra ")+fc(i[1]+i[2],t);if(i=n.match(/^disc_(\w\d)_(\w\d)$/))return(e?"\u0414\u0438\u0441\u043A ":"Disc ")+fc(`${i[1]}\u2013${i[2]}`,t);let s=n.endsWith("_l")?e?" (\u043B\u0435\u0432.)":" (left)":n.endsWith("_r")?e?" (\u043F\u0440\u0430\u0432.)":" (right)":"",r=n.replace(/_(l|r)$/,""),a={skin:["\u041A\u043E\u0436\u0430","Skin"],scm:["\u0413\u0440\u0443\u0434\u0438\u043D\u043E-\u043A\u043B\u044E\u0447\u0438\u0447\u043D\u043E-\u0441\u043E\u0441\u0446\u0435\u0432\u0438\u0434\u043D\u0430\u044F \u043C\u044B\u0448\u0446\u0430","Sternocleidomastoid"],trapezius:["\u0422\u0440\u0430\u043F\u0435\u0446\u0438\u0435\u0432\u0438\u0434\u043D\u0430\u044F \u043C\u044B\u0448\u0446\u0430","Trapezius"],levator_scapulae:["\u041C\u044B\u0448\u0446\u0430, \u043F\u043E\u0434\u043D\u0438\u043C\u0430\u044E\u0449\u0430\u044F \u043B\u043E\u043F\u0430\u0442\u043A\u0443","Levator scapulae"],longus_colli:["\u0414\u043B\u0438\u043D\u043D\u0430\u044F \u043C\u044B\u0448\u0446\u0430 \u0448\u0435\u0438","Longus colli"],skeleton_body:["\u0421\u043A\u0435\u043B\u0435\u0442","Skeleton"],skull:["\u0427\u0435\u0440\u0435\u043F","Skull"],scapula:["\u041B\u043E\u043F\u0430\u0442\u043A\u0430","Scapula"],clavicle:["\u041A\u043B\u044E\u0447\u0438\u0446\u0430","Clavicle"],humerus:["\u041F\u043B\u0435\u0447\u0435\u0432\u0430\u044F \u043A\u043E\u0441\u0442\u044C","Humerus"],dura:["\u0414\u0443\u0440\u0430\u043B\u044C\u043D\u044B\u0439 \u043C\u0435\u0448\u043E\u043A (\u043B\u0438\u043A\u0432\u043E\u0440)","Dural sac (CSF)"],cord:["\u0421\u043F\u0438\u043D\u043D\u043E\u0439 \u043C\u043E\u0437\u0433","Spinal cord"],cortex:["\u041A\u043E\u0440\u0430 \u043F\u043E\u043B\u0443\u0448\u0430\u0440\u0438\u044F","Cerebral cortex"],cerebellum:["\u041C\u043E\u0437\u0436\u0435\u0447\u043E\u043A","Cerebellum"],white_matter:["\u0411\u0435\u043B\u043E\u0435 \u0432\u0435\u0449\u0435\u0441\u0442\u0432\u043E","White matter"],corpus_callosum:["\u041C\u043E\u0437\u043E\u043B\u0438\u0441\u0442\u043E\u0435 \u0442\u0435\u043B\u043E","Corpus callosum"],deep_nuclei:["\u041F\u043E\u0434\u043A\u043E\u0440\u043A\u043E\u0432\u044B\u0435 \u044F\u0434\u0440\u0430","Deep nuclei"],ventricles:["\u0416\u0435\u043B\u0443\u0434\u043E\u0447\u043A\u0438 \u043C\u043E\u0437\u0433\u0430","Ventricles"],brainstem:["\u0421\u0442\u0432\u043E\u043B \u043C\u043E\u0437\u0433\u0430","Brainstem"],pituitary:["\u0413\u0438\u043F\u043E\u0444\u0438\u0437","Pituitary gland"],pineal:["\u0428\u0438\u0448\u043A\u043E\u0432\u0438\u0434\u043D\u0430\u044F \u0436\u0435\u043B\u0435\u0437\u0430","Pineal gland"],wmh:["\u041E\u0447\u0430\u0433 \u0432 \u0431\u0435\u043B\u043E\u043C \u0432\u0435\u0449\u0435\u0441\u0442\u0432\u0435","White-matter spot"],rathke_cyst:["\u041A\u0438\u0441\u0442\u0430 \u043A\u0430\u0440\u043C\u0430\u043D\u0430 \u0420\u0430\u0442\u043A\u0435","Rathke cleft cyst"],pineal_cyst:["\u041A\u0438\u0441\u0442\u0430 \u0448\u0438\u0448\u043A\u043E\u0432\u0438\u0434\u043D\u043E\u0439 \u0436\u0435\u043B\u0435\u0437\u044B","Pineal cyst"],mastoid_fluid:["\u0416\u0438\u0434\u043A\u043E\u0441\u0442\u044C \u0432 \u0441\u043E\u0441\u0446\u0435\u0432\u0438\u0434\u043D\u043E\u043C \u043E\u0442\u0440\u043E\u0441\u0442\u043A\u0435","Mastoid fluid"]}[r];return a?a[e?0:1]+s:n}var q_=[[/^Vertebral artery/,"\u041F\u043E\u0437\u0432\u043E\u043D\u043E\u0447\u043D\u0430\u044F \u0430\u0440\u0442\u0435\u0440\u0438\u044F"],[/^Basilar artery/,"\u0411\u0430\u0437\u0438\u043B\u044F\u0440\u043D\u0430\u044F \u0430\u0440\u0442\u0435\u0440\u0438\u044F"],[/^Internal carotid artery/,"\u0412\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u044F\u044F \u0441\u043E\u043D\u043D\u0430\u044F \u0430\u0440\u0442\u0435\u0440\u0438\u044F"],[/^External carotid artery/,"\u041D\u0430\u0440\u0443\u0436\u043D\u0430\u044F \u0441\u043E\u043D\u043D\u0430\u044F \u0430\u0440\u0442\u0435\u0440\u0438\u044F"],[/common carotid artery/,"\u041E\u0431\u0449\u0430\u044F \u0441\u043E\u043D\u043D\u0430\u044F \u0430\u0440\u0442\u0435\u0440\u0438\u044F"],[/subclavian artery/,"\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0447\u043D\u0430\u044F \u0430\u0440\u0442\u0435\u0440\u0438\u044F"],[/^Aortic arch|aorta/i,"\u0410\u043E\u0440\u0442\u0430"],[/^Brachiocephalic trunk/,"\u041F\u043B\u0435\u0447\u0435\u0433\u043E\u043B\u043E\u0432\u043D\u043E\u0439 \u0441\u0442\u0432\u043E\u043B"],[/^Posterior cerebral artery/,"\u0417\u0430\u0434\u043D\u044F\u044F \u043C\u043E\u0437\u0433\u043E\u0432\u0430\u044F \u0430\u0440\u0442\u0435\u0440\u0438\u044F"],[/^Middle cerebral artery/,"\u0421\u0440\u0435\u0434\u043D\u044F\u044F \u043C\u043E\u0437\u0433\u043E\u0432\u0430\u044F \u0430\u0440\u0442\u0435\u0440\u0438\u044F"],[/^Anterior cerebral artery/,"\u041F\u0435\u0440\u0435\u0434\u043D\u044F\u044F \u043C\u043E\u0437\u0433\u043E\u0432\u0430\u044F \u0430\u0440\u0442\u0435\u0440\u0438\u044F"],[/cerebellar artery/,"\u041C\u043E\u0437\u0436\u0435\u0447\u043A\u043E\u0432\u0430\u044F \u0430\u0440\u0442\u0435\u0440\u0438\u044F"],[/^Roots of brachial plexus/,"\u041A\u043E\u0440\u0435\u0448\u043A\u0438 \u043F\u043B\u0435\u0447\u0435\u0432\u043E\u0433\u043E \u0441\u043F\u043B\u0435\u0442\u0435\u043D\u0438\u044F"],[/trunk of brachial plexus/,"\u0421\u0442\u0432\u043E\u043B \u043F\u043B\u0435\u0447\u0435\u0432\u043E\u0433\u043E \u0441\u043F\u043B\u0435\u0442\u0435\u043D\u0438\u044F"],[/division of .* trunk of brachial plexus/,"\u0412\u0435\u0442\u0432\u044C \u043F\u043B\u0435\u0447\u0435\u0432\u043E\u0433\u043E \u0441\u043F\u043B\u0435\u0442\u0435\u043D\u0438\u044F"],[/cord of brachial plexus/,"\u041F\u0443\u0447\u043E\u043A \u043F\u043B\u0435\u0447\u0435\u0432\u043E\u0433\u043E \u0441\u043F\u043B\u0435\u0442\u0435\u043D\u0438\u044F"],[/^Median nerve/,"\u0421\u0440\u0435\u0434\u0438\u043D\u043D\u044B\u0439 \u043D\u0435\u0440\u0432"],[/^Ulnar nerve/,"\u041B\u043E\u043A\u0442\u0435\u0432\u043E\u0439 \u043D\u0435\u0440\u0432"],[/^Radial nerve/,"\u041B\u0443\u0447\u0435\u0432\u043E\u0439 \u043D\u0435\u0440\u0432"],[/^Musculocutaneous nerve/,"\u041C\u044B\u0448\u0435\u0447\u043D\u043E-\u043A\u043E\u0436\u043D\u044B\u0439 \u043D\u0435\u0440\u0432"],[/^Axillary nerve/,"\u041F\u043E\u0434\u043C\u044B\u0448\u0435\u0447\u043D\u044B\u0439 \u043D\u0435\u0440\u0432"],[/^Vagus nerve/,"\u0411\u043B\u0443\u0436\u0434\u0430\u044E\u0449\u0438\u0439 \u043D\u0435\u0440\u0432"],[/^Facial nerve/,"\u041B\u0438\u0446\u0435\u0432\u043E\u0439 \u043D\u0435\u0440\u0432"],[/^Intercostal nerves/,"\u041C\u0435\u0436\u0440\u0451\u0431\u0435\u0440\u043D\u044B\u0435 \u043D\u0435\u0440\u0432\u044B"],[/^Sciatic nerve/,"\u0421\u0435\u0434\u0430\u043B\u0438\u0449\u043D\u044B\u0439 \u043D\u0435\u0440\u0432"],[/^Femoral nerve/,"\u0411\u0435\u0434\u0440\u0435\u043D\u043D\u044B\u0439 \u043D\u0435\u0440\u0432"],[/^Accessory nerve/,"\u0414\u043E\u0431\u0430\u0432\u043E\u0447\u043D\u044B\u0439 \u043D\u0435\u0440\u0432"],[/artery/i,"\u0410\u0440\u0442\u0435\u0440\u0438\u044F"],[/nerve/i,"\u041D\u0435\u0440\u0432"]];function pc(n,t){if(t!=="ru")return n.replace(/\.l$/," (left)").replace(/\.r$/," (right)");let e=n.endsWith(".l")?" (\u043B\u0435\u0432.)":n.endsWith(".r")?" (\u043F\u0440\u0430\u0432.)":"",i=q_.find(([s])=>s.test(n));return(i?i[1]:n.replace(/\.(l|r)$/,""))+e}function er(n,t){return fc(n,t)}var ze=window.SCANS,mc=!!(ze&&ze.series&&ze.series.length),Y_={en:{open:"MRI scans",title:"Her MRI scans",spine:"Neck",head:"Head",slice:"slice",of:"of",notes:"Findings",lines:"Slice lines",link:"Follow in 3D",plane:"Scan in 3D",reset:"Reset",tools:{point:"Point",pan:"Move",wl:"Contrast"},onThis:"Marked on this series (click to go there)",none:"Nothing is marked on this series.",loading:"Loading the slices\u2026",close:"Close",showOn:"Show on her MRI",cursor:"Cross-reference point: shown on every series; switching series jumps to it.",approx:"These are her own images (17.10 study). The 3D body is a schematic model, not her anatomy: slices are placed on it by vertebral level (neck) or by the brain's size (head), so the match is approximate.",help:"Scroll or \u2191/\u2193: slices \xB7 drag with Contrast (or right-drag): brightness/contrast \xB7 Ctrl+scroll or pinch: zoom \xB7 Move: pan \xB7 double-click: reset \xB7 click: cross-reference point",left:"left of midline",right:"right of midline",midline:"midline",mm:"mm",thick:"thick",near:"nearest slice",ref:"normal level, for comparison"},ru:{open:"\u0421\u043D\u0438\u043C\u043A\u0438 \u041C\u0420\u0422",title:"\u0415\u0451 \u0441\u043D\u0438\u043C\u043A\u0438 \u041C\u0420\u0422",spine:"\u0428\u0435\u044F",head:"\u0413\u043E\u043B\u043E\u0432\u0430",slice:"\u0441\u0440\u0435\u0437",of:"\u0438\u0437",notes:"\u041D\u0430\u0445\u043E\u0434\u043A\u0438",lines:"\u041B\u0438\u043D\u0438\u0438 \u0441\u0440\u0435\u0437\u043E\u0432",link:"\u0421\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u044C \u0432 3D",plane:"\u0421\u0440\u0435\u0437 \u0432 3D",reset:"\u0421\u0431\u0440\u043E\u0441",tools:{point:"\u0422\u043E\u0447\u043A\u0430",pan:"\u0421\u0434\u0432\u0438\u0433",wl:"\u041A\u043E\u043D\u0442\u0440\u0430\u0441\u0442"},onThis:"\u041E\u0442\u043C\u0435\u0447\u0435\u043D\u043E \u0432 \u044D\u0442\u043E\u0439 \u0441\u0435\u0440\u0438\u0438 (\u043D\u0430\u0436\u043C\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u043F\u0435\u0440\u0435\u0439\u0442\u0438)",none:"\u0412 \u044D\u0442\u043E\u0439 \u0441\u0435\u0440\u0438\u0438 \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043E\u0442\u043C\u0435\u0447\u0435\u043D\u043E.",loading:"\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0441\u0440\u0435\u0437\u043E\u0432\u2026",close:"\u0417\u0430\u043A\u0440\u044B\u0442\u044C",showOn:"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043D\u0430 \u0435\u0451 \u041C\u0420\u0422",cursor:"\u0422\u043E\u0447\u043A\u0430 \u043F\u0440\u0438\u0432\u044F\u0437\u043A\u0438: \u0432\u0438\u0434\u043D\u0430 \u0432\u043E \u0432\u0441\u0435\u0445 \u0441\u0435\u0440\u0438\u044F\u0445; \u043F\u0440\u0438 \u0441\u043C\u0435\u043D\u0435 \u0441\u0435\u0440\u0438\u0438 \u043F\u0435\u0440\u0435\u0445\u043E\u0434 \u043A \u043D\u0435\u0439.",approx:"\u042D\u0442\u043E \u0435\u0451 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0435 \u0441\u043D\u0438\u043C\u043A\u0438 (\u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0435 17.10). 3D-\u0442\u0435\u043B\u043E \u2014 \u0441\u0445\u0435\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043C\u043E\u0434\u0435\u043B\u044C, \u0430 \u043D\u0435 \u0435\u0451 \u0430\u043D\u0430\u0442\u043E\u043C\u0438\u044F: \u0441\u0440\u0435\u0437\u044B \u0440\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u044B \u043D\u0430 \u043D\u0435\u0439 \u043F\u043E \u0443\u0440\u043E\u0432\u043D\u044E \u043F\u043E\u0437\u0432\u043E\u043D\u043A\u043E\u0432 (\u0448\u0435\u044F) \u0438\u043B\u0438 \u043F\u043E \u0440\u0430\u0437\u043C\u0435\u0440\u0443 \u043C\u043E\u0437\u0433\u0430 (\u0433\u043E\u043B\u043E\u0432\u0430), \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0435 \u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0435.",help:"\u041A\u043E\u043B\u0435\u0441\u043E \u0438\u043B\u0438 \u2191/\u2193: \u0441\u0440\u0435\u0437\u044B \xB7 \xAB\u041A\u043E\u043D\u0442\u0440\u0430\u0441\u0442\xBB (\u0438\u043B\u0438 \u043F\u0440\u0430\u0432\u0430\u044F \u043A\u043D\u043E\u043F\u043A\u0430): \u044F\u0440\u043A\u043E\u0441\u0442\u044C/\u043A\u043E\u043D\u0442\u0440\u0430\u0441\u0442 \xB7 Ctrl+\u043A\u043E\u043B\u0435\u0441\u043E \u0438\u043B\u0438 \u0449\u0438\u043F\u043E\u043A: \u043C\u0430\u0441\u0448\u0442\u0430\u0431 \xB7 \xAB\u0421\u0434\u0432\u0438\u0433\xBB: \u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u0435 \xB7 \u0434\u0432\u043E\u0439\u043D\u043E\u0439 \u0449\u0435\u043B\u0447\u043E\u043A: \u0441\u0431\u0440\u043E\u0441 \xB7 \u0449\u0435\u043B\u0447\u043E\u043A: \u0442\u043E\u0447\u043A\u0430 \u043F\u0440\u0438\u0432\u044F\u0437\u043A\u0438",left:"\u043B\u0435\u0432\u0435\u0435 \u0441\u0440\u0435\u0434\u043D\u0435\u0439 \u043B\u0438\u043D\u0438\u0438",right:"\u043F\u0440\u0430\u0432\u0435\u0435 \u0441\u0440\u0435\u0434\u043D\u0435\u0439 \u043B\u0438\u043D\u0438\u0438",midline:"\u0441\u0440\u0435\u0434\u043D\u044F\u044F \u043B\u0438\u043D\u0438\u044F",mm:"\u043C\u043C",thick:"\u0442\u043E\u043B\u0449\u0438\u043D\u0430",near:"\u0431\u043B\u0438\u0436\u0430\u0439\u0448\u0438\u0439 \u0441\u0440\u0435\u0437",ref:"\u043D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C, \u0434\u043B\u044F \u0441\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u044F"}},Fu={sp_sag_t2:"T2 sag",sp_sag_stir:"STIR sag",sp_sag_t1:"T1 sag",sp_ax_t2:"T2 ax",sp_cor_t2:"T2 cor",br_ax_flair:"FLAIR",br_ax_t2:"T2",br_ax_t2s:"T2*",br_ax_t1:"T1",br_ax_dwi:"DWI",br_ax_adc:"ADC",br_sag_t2:"T2 sag",br_cor_stir:"STIR cor"},Fi={spine:["sp_sag_t2",5],brain:["br_ax_flair",23]},Bu={sagittal:{spine:"sp_ax_t2",brain:"axial"},axial:{spine:"sp_sag_t2",brain:"br_sag_t2"},coronal:{spine:"sp_ax_t2",brain:"axial"}},ku=n=>"disc_"+n.replace("\u2013","_"),oi=n=>new R(n[0],n[1],n[2]);function nr(n,t){let e=n.slices[t],i=oi(e.iop.slice(0,3)),s=oi(e.iop.slice(3,6));return{P:oi(e.pos),X:i,Y:s,N:i.clone().cross(s),fx:n.w/n.native[1],fy:n.h/n.native[0]}}function Lo(n,t,e,i){let s=nr(n,t);return s.P.clone().addScaledVector(s.X,e/s.fx*n.ps[1]).addScaledVector(s.Y,i/s.fy*n.ps[0])}function Do(n,t,e){let i=nr(n,t),s=e.clone().sub(i.P);return[s.dot(i.X)/n.ps[1]*i.fx,s.dot(i.Y)/n.ps[0]*i.fy,s.dot(i.N)]}function zu(n,t){return[[0,0],[n.w,0],[n.w,n.h],[0,n.h]].map(([e,i])=>Lo(n,t,e,i))}function Z_(n,t,e,i){let s=nr(n,t),r=zu(e,i),a=r.map(l=>l.clone().sub(s.P).dot(s.N)),o=[];for(let l=0;l<4;l++){let c=(l+1)%4;a[l]<=0!=a[c]<=0&&o.push(r[l].clone().lerp(r[c],a[l]/(a[l]-a[c])))}return o.length>=2?o.slice(0,2).map(l=>Do(n,t,l)):null}function J_([n,t],e,i){let s=0,r=1,a=t[0]-n[0],o=t[1]-n[1];for(let[l,c]of[[-a,n[0]],[a,e-n[0]],[-o,n[1]],[o,i-n[1]]]){if(l===0){if(c<0)return null;continue}let h=c/l;if(l<0){if(h>r)return null;h>s&&(s=h)}else{if(h<s)return null;h<r&&(r=h)}}return[[n[0]+s*a,n[1]+s*o],[n[0]+r*a,n[1]+r*o]]}var K_=(n,t)=>n.slices.reduce((e,i,s)=>{let r=Math.abs(Do(n,s,t)[2]);return r<e[1]?[s,r]:e},[0,1/0]),Po=n=>{let t=[Math.abs(n.x),Math.abs(n.y),Math.abs(n.z)],e=t.indexOf(Math.max(...t));return[["R","L"],["A","P"],["I","S"]][e][n.getComponent(e)>0?1:0]};function Hu(n){if(!mc)return null;let{scene:t,state:e,SHARED:i}=n,s=Object.fromEntries(ze.series.map(T=>[T.id,T])),r=Object.fromEntries(i.hotspots.map(T=>[T.id,T])),a=()=>Y_[e.lang],o={open:!1,group:"spine",sid:Fi.spine[0],k:Fi.spine[1],last:{},wl:{},zoom:1,pan:[0,0],tool:"point",notes:!0,lines:!0,link:!0,plane:!1,cursor:null,flash:null};for(let T of ze.series)o.last[T.id]=T.id===Fi.spine[0]?Fi.spine[1]:T.id===Fi.brain[0]?Fi.brain[1]:Math.floor(T.n/2);o.last.br_sag_t2=17;let l=T=>new R(T.x,T.z,-T.y),c={};{let T=Object.entries(ze.landmarks.discs).filter(([B])=>n.centers[ku(B)]).map(([B,tt])=>[l(oi(tt)),n.centers[ku(B)]]),$=new R,Z=new R;T.forEach(([B,tt])=>{$.add(B),Z.add(tt)}),$.divideScalar(T.length),Z.divideScalar(T.length);let ot=0,et=0,x=0;for(let[B,tt]of T){let K=B.y-$.y,ut=B.z-$.z,bt=tt.y-Z.y,it=tt.z-Z.z;ot+=K*bt+ut*it,et+=K*it-ut*bt,x+=K*K+ut*ut}let _=Math.atan2(et,ot),F=Math.hypot(ot,et)/x,q=Math.cos(_),k=Math.sin(_);c.spine=B=>{let tt=l(B).sub($);return new R(Z.x+F*tt.x,Z.y+F*(q*tt.y-k*tt.z),Z.z+F*(k*tt.y+q*tt.z))},c.spineMid=$.x}{let T=new Fn;for(let tt of["cortex_l","cortex_r","cerebellum"])n.parts[tt]&&T.union(n.parts[tt].geometry.boundingBox);let $=n.parts.cerebellum?n.parts.cerebellum.geometry.boundingBox.min.y:T.min.y,Z=Object.fromEntries(Object.entries(ze.landmarks.brain).map(([tt,K])=>[tt,l(oi(K))])),ot=(T.max.z-T.min.z)/(Z.front.z-Z.back.z),et=(T.max.y-$)/(Z.top.y-Z.bottom.y),x=(ot+et)/2,_=(Z.front.x+Z.back.x+Z.top.x+Z.bottom.x)/4,F=(Z.front.z+Z.back.z)/2,q=(T.max.z+T.min.z)/2,k=(Z.top.y+Z.bottom.y)/2,B=(T.max.y+$)/2;c.brain=tt=>{let K=l(tt);return new R(x*(K.x-_),B+x*(K.y-k),q+x*(K.z-F))}}let h=(T,$)=>c[T.group]($),f=Object.values(ze.landmarks.discs).reduce((T,$)=>T.add(oi($)),new R).divideScalar(Object.keys(ze.landmarks.discs).length),d=new we;d.setAttribute("position",new pe(new Float32Array(12),3)),d.setAttribute("uv",new pe([0,1,1,1,0,0,1,0],2)),d.setIndex([0,2,1,1,2,3]);let p=document.createElement("canvas"),g=new Pi(p);g.colorSpace=Ue;let v=new qt(d,new je({map:g,transparent:!0,opacity:.93,side:ke,depthWrite:!1,toneMapped:!1}));v.renderOrder=25,v.visible=!1,t.add(v);let m=new qt(new go(.0022,16,12),new je({color:6094746,depthTest:!1,transparent:!0}));m.renderOrder=40,m.visible=!1,t.add(m);let u=document.getElementById("app"),w=document.createElement("section");w.id="scanview",w.hidden=!0,u.insertBefore(w,document.getElementById("viewport")),w.innerHTML=`
    <div class="sv-head"><div class="seg sv-groups"></div><div class="sv-series"></div><button class="x" aria-label="close">\xD7</button></div>
    <div class="sv-stage"><div class="sv-layer"></div>
      <span class="o t"></span><span class="o b"></span><span class="o l"></span><span class="o r"></span>
      <div class="sv-info"></div><div class="sv-wl"></div><div class="sv-sbar"><i></i><b></b></div><div class="sv-load" hidden></div></div>
    <div class="sv-nav"><button class="btn sv-prev">\u25C0</button><input type="range" class="sv-slider" min="0" max="1" value="0"><button class="btn sv-next">\u25B6</button><span class="sv-pos"></span></div>
    <div class="sv-tools"><div class="seg sv-tool"></div><label class="toggle small"><input type="checkbox" data-opt="notes"><span></span></label>
      <label class="toggle small"><input type="checkbox" data-opt="lines"><span></span></label><label class="toggle small"><input type="checkbox" data-opt="link"><span></span></label>
      <label class="toggle small"><input type="checkbox" data-opt="plane"><span></span></label><button class="btn sv-reset"></button></div>
    <div class="sv-list"></div><div class="sv-desc"></div>`;let S=T=>w.querySelector(T),y=S(".sv-stage"),O=S(".sv-layer");O.appendChild(p);let A=document.createElementNS("http://www.w3.org/2000/svg","svg");O.appendChild(A);let C=p.getContext("2d",{willReadFrequently:!0}),P={},E={};function M(T){var $;return(window.SCANS_DATA||{})[T.id]?Promise.resolve():E[$=T.id]||(E[$]=new Promise((Z,ot)=>{let et=document.createElement("script");et.src=T.file,et.onload=Z,et.onerror=()=>ot(new Error(`scan data missing: ${T.file}`)),document.head.appendChild(et)}))}async function I(T,$){let Z=`${T.id}:${$}`;if(P[Z])return P[Z];let ot=new Image;ot.src=window.SCANS_DATA[T.id][$],await ot.decode();let et=document.createElement("canvas");et.width=T.w,et.height=T.h;let x=et.getContext("2d",{willReadFrequently:!0});x.drawImage(ot,0,0,T.w,T.h);let _=x.getImageData(0,0,T.w,T.h).data,F=new Uint8ClampedArray(T.w*T.h);for(let q=0;q<F.length;q++)F[q]=_[q*4];return P[Z]=F}let Y=0;async function G(){let T=s[o.sid],$=o.k,Z=++Y,ot=S(".sv-load");(window.SCANS_DATA||{})[T.id]||(ot.textContent=a().loading,ot.hidden=!1);try{await M(T)}catch(tt){ot.textContent=tt.message;return}let et=await I(T,$);if(ot.hidden=!0,Z!==Y)return;(p.width!==T.w||p.height!==T.h)&&(p.width=T.w,p.height=T.h);let x=o.wl[T.id]||{c:128,w:256},_=x.c-x.w/2,F=255/Math.max(1,x.w),q=new Uint8ClampedArray(256);for(let tt=0;tt<256;tt++)q[tt]=(tt-_)*F;let k=C.createImageData(T.w,T.h),B=k.data;for(let tt=0,K=0;tt<et.length;tt++,K+=4){let ut=q[et[tt]];B[K]=B[K+1]=B[K+2]=ut,B[K+3]=255}C.putImageData(k,0,0),S(".sv-wl").textContent=x.c===128&&x.w===256?"":`W ${Math.round(x.w)} \xB7 L ${Math.round(x.c)}`,o.plane&&(g.needsUpdate=!0),st(),W(),St()}function j(){let T=s[o.sid];return Math.min(y.clientWidth/T.w,y.clientHeight/T.h)}function st(){let T=s[o.sid],$=j()*o.zoom,Z=(y.clientWidth-T.w*$)/2+o.pan[0],ot=(y.clientHeight-T.h*$)/2+o.pan[1];O.style.width=`${T.w}px`,O.style.height=`${T.h}px`,O.style.transform=`translate(${Z}px, ${ot}px) scale(${$})`,A.setAttribute("viewBox",`0 0 ${T.w} ${T.h}`),A.setAttribute("width",T.w),A.setAttribute("height",T.h);let et=nr(T,o.k);S(".o.r").textContent=Po(et.X),S(".o.l").textContent=Po(et.X.clone().negate()),S(".o.b").textContent=Po(et.Y),S(".o.t").textContent=Po(et.Y.clone().negate());let x=10/T.ps[1]*et.fx*$;return S(".sv-sbar i").style.width=`${x}px`,S(".sv-sbar b").textContent=`10 ${a().mm}`,$}let J="http://www.w3.org/2000/svg",rt=(T,$,Z=A)=>{let ot=document.createElementNS(J,T);for(let[et,x]of Object.entries($))ot.setAttribute(et,x);return Z.appendChild(ot),ot};function W(){let T=s[o.sid],$=o.k,Z=a(),ot=j()*o.zoom,et=13/ot,x=1.6;if(A.innerHTML="",o.lines){let k=Bu[T.plane]&&Bu[T.plane][T.group],B=k==="axial"?s[o.lastAxial||"br_ax_flair"]:s[k];if(B&&B.id!==T.id){let tt=o.last[B.id],K=B.plane==="axial"&&T.plane!=="axial";B.slices.forEach((ut,bt)=>{if(!K&&bt!==tt||K&&B.n>20&&bt%2&&bt!==tt)return;let it=Z_(T,$,B,bt),at=it&&J_(it,T.w,T.h);if(!at)return;let Mt=bt===tt,Ct=rt("line",{x1:at[0][0],y1:at[0][1],x2:at[1][0],y2:at[1][1],class:`sv-ref${Mt?" on":""}`,"vector-effect":"non-scaling-stroke"}),mt=B.slices[bt].level?`${B.slices[bt].level}`:`${bt+1}`,Ot=at[0][0]>at[1][0]?at[0]:at[1];(Mt||B.slices[bt].where?.en==="disc")&&(rt("text",{x:Ot[0]-4,y:Ot[1]-3,"font-size":et*.85,class:`sv-reft${Mt?" on":""}`,"text-anchor":"end"}).textContent=mt);let Dt=rt("line",{x1:at[0][0],y1:at[0][1],x2:at[1][0],y2:at[1][1],class:"sv-hit","stroke-width":8/ot});Dt.onclick=Xt=>{Xt.stopPropagation(),Lt(B.id,bt)},Dt.appendChild(document.createElementNS(J,"title")).textContent=`${Fu[B.id]} \xB7 ${Z.slice} ${bt+1}${B.slices[bt].level?" \xB7 "+B.slices[bt].level:""}`})}}if(T.group==="spine"&&T.plane!=="axial")for(let[k,B]of Object.entries(ze.landmarks.bodies)){let[tt,K]=Do(T,$,oi(B));tt<0||K<0||tt>T.w||K>T.h||(rt("text",{x:tt-34/ot,y:K+et*.35,"font-size":et,class:"sv-level","text-anchor":"end"}).textContent=k)}let _=[];if(o.notes)for(let k of ze.notes){if(k.series!==T.id||k.k!==$||k.doctor&&!e.doctor)continue;let B=r[k.hs],tt=k.ref?"#5cc6ff":B?B.color:"#fab219",K=rt("g",{class:`sv-note${o.flash===k.id?" flash":""}`,style:`--c:${tt}`}),ut=`${k.label[e.lang]}${k.mm?` ${String(k.mm).replace(".",e.lang==="ru"?",":".")} ${Z.mm}`:""}`,bt,it;if(k.type==="line"){let[[at,Mt],[Ct,mt]]=k.xy;rt("line",{x1:at,y1:Mt,x2:Ct,y2:mt,stroke:tt,"stroke-width":x,"vector-effect":"non-scaling-stroke"},K);let Ot=-(mt-Mt),Dt=Ct-at,Xt=Math.hypot(Ot,Dt)||1,L=5/ot;for(let[dt,X]of k.xy)rt("line",{x1:dt+Ot/Xt*L,y1:X+Dt/Xt*L,x2:dt-Ot/Xt*L,y2:X-Dt/Xt*L,stroke:tt,"stroke-width":x,"vector-effect":"non-scaling-stroke"},K);[bt,it]=Ct>at?[Ct,mt]:[at,Mt]}else if(k.type==="ellipse"){let[[at,Mt],[Ct,mt]]=k.xy;rt("ellipse",{cx:at,cy:Mt,rx:Ct,ry:mt,stroke:tt,"stroke-width":x,fill:"none","stroke-dasharray":"4 3","vector-effect":"non-scaling-stroke"},K),[bt,it]=[at+Ct,Mt-mt]}else{let[[at,Mt]]=k.xy;rt("circle",{cx:at,cy:Mt,r:6/ot,stroke:"#fff","stroke-width":1.5,fill:tt,"vector-effect":"non-scaling-stroke"},K),rt("circle",{cx:at,cy:Mt,r:12/ot,stroke:tt,"stroke-width":1.5,fill:"none",class:"ring","vector-effect":"non-scaling-stroke"},K),[bt,it]=[at+10/ot,Mt-8/ot]}_.push({g:K,x:bt+4/ot,y:it,ax:bt,ay:it,text:ut,ref:k.ref}),B&&(K.onmouseenter=()=>n.hoverStart(B),K.onmouseleave=n.hoverEnd,K.onclick=at=>{at.stopPropagation(),n.unlockVoice(),n.selectHotspot(B,!1)})}let F=et*1.3,q=[];_.sort((k,B)=>k.y-B.y);for(let k of _){let B=k.text.length*et*.56,tt=k.y,K=bt=>q.some(it=>k.x<it.x+it.w&&it.x<k.x+B&&Math.abs(it.y-bt)<F);for(let bt=0;bt<12&&K(tt);bt++)tt+=F*.55;q.push({x:k.x,y:tt,w:B}),Math.abs(tt-k.y)>1&&rt("line",{x1:k.ax,y1:k.ay,x2:k.x,y2:tt-et*.35,class:"sv-lead","vector-effect":"non-scaling-stroke"},k.g);let ut=rt("text",{x:k.x,y:tt,"font-size":et,class:"sv-lab"},k.g);ut.textContent=k.text,k.ref&&(ut.appendChild(document.createElementNS(J,"title")).textContent=Z.ref)}if(o.cursor){let[k,B,tt]=Do(T,$,o.cursor),K=9/ot,ut=Math.abs(tt)>T.thick*.6,bt=rt("g",{class:`sv-cur${ut?" far":""}`});for(let[it,at,Mt,Ct]of[[k-2*K,B,k-K/2,B],[k+K/2,B,k+2*K,B],[k,B-2*K,k,B-K/2],[k,B+K/2,k,B+2*K]])rt("line",{x1:it,y1:at,x2:Mt,y2:Ct,"vector-effect":"non-scaling-stroke"},bt);ut&&(rt("text",{x:k+2*K,y:B-K,"font-size":et*.85},bt).textContent=`${Math.abs(tt).toFixed(0)} ${Z.mm}`)}yt()}function pt(T,$){let Z=a(),ot=T.slices[$];if(ot.level)return`${ot.level} \xB7 ${ot.where[e.lang]}`;if(T.plane==="sagittal"&&T.group==="spine"){let et=nr(T,$),x=f.clone().sub(et.P).dot(et.N),_=Math.round(-x*et.N.x);return Math.abs(_)<2?Z.midline:`${Math.abs(_)} ${Z.mm} ${_>0?Z.left:Z.right}`}return""}function yt(){let T=s[o.sid],$=a();S(".sv-info").innerHTML=`<b>${T.label[e.lang]}</b><br>${$.slice} ${o.k+1} ${$.of} ${T.n}${pt(T,o.k)?" \xB7 "+pt(T,o.k):""}<br><span>${T.thick} ${$.mm} ${$.thick}</span>`,S(".sv-pos").textContent=`${o.k+1} / ${T.n}`;let Z=S(".sv-slider");Z.max=T.n-1,Z.value=o.k}function Et(){let T=a(),$=s[o.sid];S(".sv-groups").innerHTML=["spine","brain"].map(x=>`<button data-g="${x}" class="${o.group===x?"on":""}">${x==="spine"?T.spine:T.head}</button>`).join(""),S(".sv-series").innerHTML=ze.series.filter(x=>x.group===o.group).map(x=>`<button class="btn${x.id===o.sid?" on":""}" data-s="${x.id}" title="${x.label[e.lang]}">${Fu[x.id]||x.id}</button>`).join(""),S(".sv-tool").innerHTML=["point","pan","wl"].map(x=>`<button data-t="${x}" class="${o.tool===x?"on":""}">${T.tools[x]}</button>`).join("");for(let x of["notes","lines","link","plane"]){let _=w.querySelector(`[data-opt="${x}"]`);_.checked=o[x],_.nextElementSibling.textContent=T[x]}S(".sv-reset").textContent=T.reset,S(".x").title=T.close;let Z=ze.notes.filter(x=>x.series===$.id&&(!x.doctor||e.doctor)&&!x.ref),ot=new Set,et=Z.filter(x=>{let _=`${x.hs}:${x.k}`;return ot.has(_)?!1:(ot.add(_),!0)});S(".sv-list").innerHTML=et.length?`<div class="hint">${T.onThis}</div>`+et.map(x=>{let _=r[x.hs];return`<button class="sv-chip" data-n="${x.id}" style="--c:${_?_.color:"#fab219"}"><i></i>${x.label[e.lang]} \xB7 ${x.k+1}</button>`}).join(""):`<div class="hint">${T.none}</div>`,S(".sv-desc").innerHTML=`<p>${$.desc[e.lang]}</p>${o.cursor?`<p class="hint">${T.cursor}</p>`:""}<p class="hint">${T.help}</p><p class="sv-approx">${T.approx}</p>`,w.querySelectorAll("[data-g]").forEach(x=>x.onclick=()=>{let _=Fi[x.dataset.g],F=x.dataset.g===o.group?o.sid:o.lastBy?.[x.dataset.g]||_[0];Lt(F,o.last[F],!0)}),w.querySelectorAll("[data-s]").forEach(x=>x.onclick=()=>Lt(x.dataset.s,null,!0)),w.querySelectorAll("[data-t]").forEach(x=>x.onclick=()=>{o.tool=x.dataset.t,y.dataset.tool=o.tool,Et()}),w.querySelectorAll("[data-n]").forEach(x=>x.onclick=()=>{let _=ze.notes.find(F=>F.id===x.dataset.n);Q(_)})}w.querySelectorAll("[data-opt]").forEach(T=>T.onchange=()=>{o[T.dataset.opt]=T.checked,T.dataset.opt==="link"&&!T.checked&&(n.setClipMode("off"),n.renderLeft(),m.visible=!1),T.dataset.opt==="plane"&&T.checked&&(g.needsUpdate=!0),W(),St(!0)}),S(".x").onclick=()=>oe(),S(".sv-reset").onclick=()=>{o.zoom=1,o.pan=[0,0],delete o.wl[o.sid],o.cursor=null,Et(),G()},S(".sv-prev").onclick=()=>Wt(-1),S(".sv-next").onclick=()=>Wt(1),S(".sv-slider").oninput=T=>Lt(o.sid,+T.target.value);function Lt(T,$,Z=!1){let ot=s[T],et=T!==o.sid;if($==null){let x=o.cursor||(et?Lo(s[o.sid],o.k,s[o.sid].w/2,s[o.sid].h/2):null);$=x&&(o.cursor||ot.plane===s[o.sid].plane)?K_(ot,x)[0]:o.last[T]}o.sid=T,o.k=Math.max(0,Math.min(ot.n-1,$)),o.last[T]=o.k,ot.plane==="axial"&&ot.group==="brain"&&(o.lastAxial=T),o.group=ot.group,(o.lastBy||(o.lastBy={}))[ot.group]=T,et&&(o.zoom=1,o.pan=[0,0]),Et(),G(),et||Z?St(!0):St()}function Wt(T){Lt(o.sid,o.k+T)}function Q(T){o.flash=T.id,Lt(T.series,T.k),clearTimeout(Q.t),Q.t=setTimeout(()=>{o.flash=null,W()},2400)}let lt=null;function St(T=!1){let $=s[o.sid],Z=o.k,ot=zu($,Z).map(x=>h($,x)),et=d.attributes.position;[ot[0],ot[1],ot[3],ot[2]].forEach((x,_)=>et.setXYZ(_,x.x,x.y,x.z)),et.needsUpdate=!0,d.computeBoundingSphere(),v.visible=o.open&&o.plane,m.visible=o.open&&o.link&&!!o.cursor,o.cursor&&m.position.copy(h($,o.cursor)),!(!o.open||!o.link)&&(clearTimeout(lt),lt=setTimeout(()=>{let x=h($,Lo($,Z,$.w/2,$.h/2)),_=$.plane;e.clip.flip=_==="axial",e.clip.slab=!1,e.clip.inner=!0;let F=_==="axial"?x.y:_==="sagittal"?x.x:-x.z;if(n.setClipMode(_,F),n.renderLeft(),T){n.setFocus($.group==="spine"?"neck":"brain",!1);let q=n.VIEWDIR[_==="sagittal"?"left":_==="axial"?"bottom":"front"],k=x.clone();_==="sagittal"&&(k.x=0),n.flyTo(k,k.clone().addScaledVector(oi(q).normalize(),$.group==="spine"?.32:.5))}},T?0:90))}let ht=new Map,gt=null,Ut=0;y.dataset.tool=o.tool;let zt=T=>{let $=y.getBoundingClientRect(),Z=j()*o.zoom,ot=s[o.sid],et=(y.clientWidth-ot.w*Z)/2+o.pan[0],x=(y.clientHeight-ot.h*Z)/2+o.pan[1];return[(T.clientX-$.left-et)/Z,(T.clientY-$.top-x)/Z]};y.addEventListener("contextmenu",T=>T.preventDefault()),y.addEventListener("pointerdown",T=>{if(T.target.closest(".sv-note, .sv-hit"))return;y.setPointerCapture(T.pointerId),ht.set(T.pointerId,[T.clientX,T.clientY]);let $=o.wl[o.sid]||{c:128,w:256};gt={mode:ht.size>1?"pinch":T.button===2||T.shiftKey||o.tool==="wl"?"wl":T.button===1||o.tool==="pan"?"pan":T.pointerType==="touch"?"swipe":"point",x:T.clientX,y:T.clientY,moved:0,wl:{...$},pan:[...o.pan],k:o.k,zoom:o.zoom,dist:ht.size>1?Math.hypot(...[...ht.values()].reduce((ot,et)=>[ot[0]-et[0],ot[1]-et[1]])):0}}),y.addEventListener("pointermove",T=>{if(!gt||!ht.has(T.pointerId))return;ht.set(T.pointerId,[T.clientX,T.clientY]);let $=T.clientX-gt.x,Z=T.clientY-gt.y;if(gt.moved=Math.max(gt.moved,Math.hypot($,Z)),gt.mode==="pinch"&&ht.size>1){let ot=Math.hypot(...[...ht.values()].reduce((et,x)=>[et[0]-x[0],et[1]-x[1]]));o.zoom=Math.max(1,Math.min(8,gt.zoom*ot/Math.max(1,gt.dist))),st(),W()}else if(gt.mode==="wl")o.wl[o.sid]={c:Math.max(0,Math.min(255,gt.wl.c+Z*.6)),w:Math.max(4,Math.min(512,gt.wl.w+$*1.2))},G();else if(gt.mode==="pan")o.pan=[gt.pan[0]+$,gt.pan[1]+Z],st();else if(gt.mode==="swipe"){let ot=Math.round(Z/14);gt.k+ot!==o.k&&Lt(o.sid,gt.k+ot)}});let se=T=>{if(gt){if(ht.delete(T.pointerId),(gt.mode==="point"||gt.mode==="swipe")&&gt.moved<5&&T.type==="pointerup"){let[$,Z]=zt(T),ot=s[o.sid];$>=0&&Z>=0&&$<=ot.w&&Z<=ot.h&&(o.cursor=Lo(ot,o.k,$,Z),Et(),W(),St())}ht.size||(gt=null)}};y.addEventListener("pointerup",se),y.addEventListener("pointercancel",se),y.addEventListener("dblclick",()=>{o.zoom=1,o.pan=[0,0],delete o.wl[o.sid],G()}),y.addEventListener("wheel",T=>{if(T.preventDefault(),T.ctrlKey||T.metaKey){let[Z,ot]=zt(T),et=j()*o.zoom;o.zoom=Math.max(1,Math.min(8,o.zoom*Math.exp(-T.deltaY*.01)));let x=j()*o.zoom;o.pan=[o.pan[0]-Z*(x-et),o.pan[1]-ot*(x-et)],o.zoom===1&&(o.pan=[0,0]),st(),W();return}Ut+=T.deltaY;let $=Math.trunc(Ut/40);$&&(Ut-=$*40,Wt(Math.sign($)))},{passive:!1}),window.addEventListener("keydown",T=>{!o.open||T.target.tagName==="INPUT"||T.target.tagName==="SELECT"||(T.key==="ArrowUp"||T.key==="ArrowRight"||T.key==="PageUp"?(T.preventDefault(),Wt(1)):(T.key==="ArrowDown"||T.key==="ArrowLeft"||T.key==="PageDown")&&(T.preventDefault(),Wt(-1)))}),new ResizeObserver(()=>{o.open&&(st(),W())}).observe(y);function Vt(T,$){o.open=!0,w.hidden=!1,u.classList.add("scan-open"),n.onOpen?.(),n.onLayout?.(),Lt(T||o.sid,$??o.last[T||o.sid],!0)}function oe(){o.open=!1,w.hidden=!0,u.classList.remove("scan-open"),v.visible=m.visible=!1,o.link&&(n.setClipMode("off"),n.renderLeft()),n.onLayout?.()}let U=T=>ze.notes.filter($=>$.hs===T&&!$.ref&&(!$.doctor||e.doctor));function Ve(T){let $=U(T)[0];$&&(o.open||(o.open=!0,w.hidden=!1,u.classList.add("scan-open"),n.onOpen?.(),n.onLayout?.()),o.flash=$.id,Lt($.series,$.k,!0),clearTimeout(Q.t),Q.t=setTimeout(()=>{o.flash=null,W()},2400))}return{open:Vt,close:oe,toggle:()=>o.open?oe():Vt(),isOpen:()=>o.open,render:()=>{o.open&&(Et(),W())},notesFor:U,showFinding:Ve,label:()=>a().open,showOn:()=>a().showOn}}var gc=[],ki=n=>{gc.push(String(n));let t=document.getElementById("errs");t&&(t.textContent=`errors: ${gc.length} \xB7 ${gc.slice(-1)[0]}`,t.hidden=!1)};window.addEventListener("error",n=>ki(n.message));window.addEventListener("unhandledrejection",n=>ki(n.reason&&n.reason.message||n.reason));var j_=console.error.bind(console);console.error=(...n)=>{ki(n.join(" ")),j_(...n)};var Gt=new URLSearchParams(location.search),Go=Gt.get("still")==="1",de=window.SHARED,Qu=window.VOICE||{ru:{},en:{}},Ac=window.VIEWER_CONFIG||{},Q_=Ac.clips!==!1,td="speechSynthesis"in window&&"SpeechSynthesisUtterance"in window,As=[Q_&&"clips",td&&"browser","off"].filter(Boolean),Zo=(n,t)=>{try{if(t===void 0)return JSON.parse(localStorage.getItem("viewer."+n));localStorage.setItem("viewer."+n,JSON.stringify(t))}catch{return null}return t},tx=[Gt.get("voice"),Ac.voice,Zo("voiceMode")].find(n=>As.includes(n))||As[0],Vu=["critical","serious","warning","info","good"],z={lang:Gt.get("lang")==="ru"?"ru":"en",doctor:Gt.get("doctor")==="1",xray:Gt.get("xray")?Gt.get("xray")==="1":!0,anim:Gt.get("anim")?Gt.get("anim")==="1":!0,voiceMode:tx,voiceUnlocked:!1,ttsPick:Zo("ttsPick")||{},clip:{mode:"off",value:0,flip:!1,inner:!0,slab:!1},isolate:!1,focus:"body",pinned:null,hovered:null},on=n=>$e[z.lang][n],ue=null,tn=matchMedia("(max-width: 820px)"),en=document.getElementById("viewport"),Oe=new Zs({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});Oe.setPixelRatio(Math.min(window.devicePixelRatio,2));Oe.toneMapping=tc;Oe.toneMappingExposure=1.15;Oe.localClippingEnabled=!0;Oe.setClearColor(0,0);Oe.domElement.className="gl";en.prepend(Oe.domElement);var Xn=new Ii,ex=new _s(Oe);Xn.environment=ex.fromScene(new Io,.04).texture;Xn.environmentIntensity=.25;var Qt=new Ce(30,1,.005,20),ie=new Ro(Qt,Oe.domElement);ie.enableDamping=!0;ie.dampingFactor=.09;ie.screenSpacePanning=!0;ie.minDistance=.04;ie.maxDistance=6;var Cc=new ys(16774374,2.6);Cc.position.set(-1.6,2.4,2.2);var Rc=new ys(10275071,2);Rc.position.set(1.4,1.2,-2.6);var Ic=new ys(16777215,.5);Ic.position.set(2.2,-.6,1.4);var nx=new xo(10466521,1709072,.35);Xn.add(Cc,Rc,Ic,nx);var lr=new ni;Xn.add(lr);[Cc,Rc,Ic].forEach(n=>{lr.add(n),lr.add(n.target)});var Pc=["skin","muscles","skeleton","vertebrae","discs","dura","cord","nerves","arteries","cortex","white_matter","deep_brain","findings"],ix=new Set(["skin","muscles","skeleton","vertebrae"]),Uo={skin:8828671,muscles:16747130,skeleton:15266047,vertebrae:16773846},sx={skin:.6,muscles:.55,skeleton:.62,vertebrae:.6,discs:.35,dura:.25,cord:.4,nerves:.4,arteries:.3,cortex:.55,white_matter:.5,deep_brain:.45,findings:.3},Ae=Object.fromEntries(Pc.map(n=>[n,{visible:!0,opacity:1,meshes:[]}])),cr={},Jo={},Ko=[],_c,rx=n=>n<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4);async function ox(){let n=await fetch("data:application/octet-stream;base64,"+window.GEOM_B64).catch(()=>null),t;if(n&&n.ok)t=new Uint8Array(await n.arrayBuffer());else{let a=atob(window.GEOM_B64);t=new Uint8Array(a.length);for(let o=0;o<a.length;o++)t[o]=a.charCodeAt(o)}let e=await new Response(new Blob([t]).stream().pipeThrough(new DecompressionStream("gzip"))).arrayBuffer(),i=new DataView(e).getUint32(0,!0),s=JSON.parse(new TextDecoder().decode(new Uint8Array(e,4,i))),r=4+i+(4-(4+i)%4)%4;return{header:s,buf:e,base:r}}function Gu(n,t,[e,i],s){let r=new Int16Array(n,t+e,i/2),a=new Float32Array(r.length),[o,l]=s;for(let c=0;c<r.length;c++){let h=c%3;a[c]=o[h]+(r[c]+32768)/65535*(l[h]-o[h])}return a}var ax=`
#include <common>
#include <clipping_planes_pars_vertex>
varying vec3 vN; varying vec3 vV;
void main() {
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  vN = normalize(normalMatrix * normal); vV = normalize(-mvPosition.xyz);
  gl_Position = projectionMatrix * mvPosition;
  #include <clipping_planes_vertex>
}`,lx=`
#include <common>
#include <clipping_planes_pars_fragment>
uniform vec3 color; uniform float opacity; uniform float power; uniform float base;
varying vec3 vN; varying vec3 vV;
void main() {
  #include <clipping_planes_fragment>
  float f = pow(1.0 - abs(dot(normalize(vN), normalize(vV))), power);
  float a = clamp(base + f, 0.0, 1.0) * opacity;
  gl_FragColor = vec4(color * (0.15 + 1.15 * f), a);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`;function No(n,t,e){return new rn({uniforms:{color:{value:new Pt(n)},opacity:{value:1},power:{value:t},base:{value:e}},vertexShader:ax,fragmentShader:lx,transparent:!0,depthWrite:!1,blending:Ws,side:ke,clipping:!0})}var cx={skin:.5,muscles:.6,skeleton:.55,vertebrae:.42},Wo={skin:No(Uo.skin,2.6,0),muscles:No(Uo.muscles,2.2,.02),skeleton:No(Uo.skeleton,1.8,.03),vertebrae:No(Uo.vertebrae,1.5,.08)};function hx(n,t,e){return new Li({color:e?16777215:new Pt(t),vertexColors:!!e,roughness:sx[n]??.5,metalness:0,side:pn,clipping:!0,emissive:new Pt(0),emissiveIntensity:1})}function Bo(n,t,e,i,s){let r=hx(t,i,s),a=new qt(e,r);a.userData={id:n,layer:t,solid:r,baseColor:new Pt(i)},ix.has(t)&&(a.userData.xray=Wo[t]);let o=new je({color:new Pt(i).multiplyScalar(.55),side:Ee,clipping:!0}),l=new qt(e,o);return l.visible=!1,l.renderOrder=-1,a.userData.cap=l,Xn.add(a,l),Ae[t].meshes.push(a),cr[n]=a,Ko.push(a),e.computeBoundingBox(),Jo[n]=e.boundingBox.getCenter(new R),a}function Wu(n){let t=0,e=0,i=n.map(({P:p,r:g})=>{let v=g<.001?6:8;return t+=p.length/3*v,e+=(p.length/3-1)*v*2,v}),s=new Float32Array(t*3),r=new Uint32Array(e*3),a=0,o=0,l=new R,c=new R,h=new R,f=new R;n.forEach(({P:p,r:g},v)=>{let m=p.length/3,u=i[v],w=a/3;for(let S=0;S<m;S++){let y=Math.max(0,S-1),O=Math.min(m-1,S+1);l.set(p[O*3]-p[y*3],p[O*3+1]-p[y*3+1],p[O*3+2]-p[y*3+2]).normalize(),S===0?(f.set(Math.abs(l.x)<.9?1:0,Math.abs(l.x)<.9?0:1,0),c.crossVectors(l,f).cross(l).normalize()):c.addScaledVector(l,-c.dot(l)).normalize(),h.crossVectors(l,c);for(let A=0;A<u;A++){let C=A/u*Math.PI*2,P=Math.cos(C)*g,E=Math.sin(C)*g;s[a++]=p[S*3]+c.x*P+h.x*E,s[a++]=p[S*3+1]+c.y*P+h.y*E,s[a++]=p[S*3+2]+c.z*P+h.z*E}if(S<m-1)for(let A=0;A<u;A++){let C=w+S*u+A,P=w+S*u+(A+1)%u,E=C+u,M=P+u;r[o++]=C,r[o++]=E,r[o++]=P,r[o++]=P,r[o++]=E,r[o++]=M}}});let d=new we;return d.setAttribute("position",new _e(s,3)),d.setIndex(new _e(r,1)),d.computeVertexNormals(),d}var ux={};async function dx(){var a;let{header:n,buf:t,base:e}=await ox();_c=n.box;for(let o of n.parts){let l=new we;l.setAttribute("position",new _e(Gu(t,e,o.pos,_c),3));let c=o.idx32?new Uint32Array(t,e+o.idx[0],o.idx[1]/4):new Uint16Array(t,e+o.idx[0],o.idx[1]/2);l.setIndex(new _e(c.slice(),1));let h=null;if(o.col){let f=new Uint8Array(t,e+o.col[0],o.col[1]);h=new Float32Array(f.length);for(let d=0;d<f.length;d++)h[d]=rx(f[d]/255);l.setAttribute("color",new _e(h,3))}l.computeVertexNormals(),Bo(o.id,o.layer,l,o.color,h)}let i={arteries:[],nerves:[]},s={};for(let o of n.curves){let c={P:Gu(t,e,o.pts,_c),r:o.r,name:o.name};o.special?(s[a=o.special]||(s[a]={layer:o.layer,items:[]})).items.push(c):i[o.layer].push(c)}let r={arteries:de.palette.ARTERY,nerves:de.palette.NERVE};for(let o of["arteries","nerves"]){let l=Wu(i[o]),c=Bo(o,o,l,r[o]),h=0;c.userData.ranges=i[o].map(({P:f,r:d,name:p})=>{let g=d<.001?6:8;return h+=f.length/3*g,[h,p]})}for(let[o,{layer:l,items:c}]of Object.entries(s)){let h=Bo(o,l,Wu(c),r[l]);h.userData.curveName=c[0].name,h.userData.special=!0,ux[o]=h}fx()}var ve=n=>new R(n[0],n[1],n[2]);function fx(){let n=de.palette,t=(s,r,a,o,l=.35)=>{let c=new mo(a,3),h=Bo(s,"findings",c,o);return h.position.copy(r),h.userData.solid.emissive=new Pt(o),h.userData.solid.emissiveIntensity=l,Jo[s]=r.clone(),h};de.geometry.wmh_spots.forEach((s,r)=>{let a=t(`wmh_${r}`,ve(s.at3),s.mm/2e3*1.5,"#ffc23a",1.1);a.userData.onTop=!0});let e=Object.fromEntries(de.hotspots.map(s=>[s.id,s]));t("rathke_cyst",ve(e.rathke.at3),.0014*1.3,"#9fd8ff",.5),t("pineal_cyst",ve(e.pineal.at3),.00115*1.3,"#9fd8ff",.4);let i=t("mastoid_fluid",ve(e.mastoid_left.at3),.006,"#7fc8ff",.25);i.scale.set(1,1.4,1),i.userData.solid.transparent=!0,i.userData.solid.opacity=.55}function di(){for(let n of Pc){let t=Ae[n];for(let e of t.meshes){let i=z.xray&&e.userData.xray;if(e.material=i?e.userData.xray:e.userData.solid,e.visible=t.visible&&t.opacity>.01,!i){let s=e.userData.solid,r=e.userData.baseOpacity??(n==="dura"?.4:1),a=e.userData.special?1:t.opacity*r,o=a<.999||n==="dura"||e.userData.solid.transparent&&e.userData.id==="mastoid_fluid";s.transparent=o,s.opacity=e.userData.id==="mastoid_fluid"?.55*t.opacity:a,s.depthWrite=!o,s.side=o?ke:pn,s.needsUpdate=!0}e.renderOrder=e.userData.onTop?30:i?10:px(e)?5:0,e.userData.onTop&&(e.material.depthTest=!1,e.material.transparent=!0,e.material.opacity=.95*t.opacity)}for(let e of Object.keys(Wo))Wo[e].uniforms.opacity.value=Ae[e].opacity*cx[e]}Ts()}var px=n=>n.material.transparent,li=new We(new R(0,-1,0),0),ws=new We(new R(0,1,0),0),Xu=.008,mx=new Set(["skin","muscles","skeleton","cortex","white_matter"]),ko=new qt(new Ri(1,1),new je({color:3716863,transparent:!0,opacity:.06,side:ke,depthWrite:!1})),zo=new uo(new po(new Ri(1,1)),new Js({color:6080255,transparent:!0,opacity:.8}));Xn.add(ko,zo);var ed={axial:[0,1.76],sagittal:[-.12,.12],coronal:[-.14,.14]};function Ts(){let{mode:n,value:t,flip:e,inner:i,slab:s}=z.clip,r=n!=="off";if(r){let a=ve({axial:[0,1,0],sagittal:[1,0,0],coronal:[0,0,-1]}[n]);n!=="coronal"!==e?(li.set(a.clone().negate(),t),ws.set(a.clone(),-(t-Xu))):(li.set(a.clone(),-t),ws.set(a.clone().negate(),t+Xu))}for(let a of Ko){let o=a.userData.layer,l=r&&(mx.has(o)||i)&&o!=="findings",c=l?z.clip.slab?[li,ws]:[li]:[];a.userData.solid.clippingPlanes=c,a.userData.cap.material.clippingPlanes=c;let h=a.userData.cap;h.visible=l&&a.visible&&a.material===a.userData.solid&&!a.material.transparent}for(let a of Object.values(Wo))a.clippingPlanes=r?z.clip.slab?[li,ws]:[li]:[];if(ko.visible=zo.visible=r,r){let a=n==="axial"?.5:.6;for(let o of[ko,zo])o.position.set(0,0,0),o.rotation.set(0,0,0),o.scale.set(a,n==="axial"?a:1.9,1),n==="axial"&&(o.rotation.x=-Math.PI/2,o.position.set(0,t,0)),n==="sagittal"&&(o.rotation.y=Math.PI/2,o.position.set(t,.88,0)),n==="coronal"&&o.position.set(0,.88,-t);n==="axial"&&(ko.scale.set(.6,.6,1),zo.scale.set(.6,.6,1))}_d()}function nd(n){let t=null,e=.012;for(let[i,s]of Object.entries(Jo)){if(!/^(vert|disc)_/.test(i))continue;let r=Math.abs(s.y-n);r<e&&(e=r,t=i)}return t?t.startsWith("disc_")?t.slice(5).replace("_","\u2013"):t.slice(5):""}var bn=null;function Ps(n,t,e=1.1){if(Go){ie.target.copy(n),Qt.position.copy(t),ie.update();return}bn={t0:performance.now(),dur:e*1e3,p0:Qt.position.clone(),q0:ie.target.clone(),p1:t.clone(),q1:n.clone()}}function gx(n){if(!bn)return;let t=Math.min(1,(n-bn.t0)/bn.dur),e=t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;Qt.position.lerpVectors(bn.p0,bn.p1,e),ie.target.lerpVectors(bn.q0,bn.q1,e),t>=1&&(bn=null)}var Xo={front:[0,.05,1],back:[0,.05,-1],left:[1,.05,0],right:[-1,.05,0],top:[0,1,-1e-4],bottom:[0,-1,1e-4]};function Bi(n){let t=Qt.position.distanceTo(ie.target),e=ve(Xo[n]).normalize();Ps(ie.target.clone(),ie.target.clone().addScaledVector(e,t),.8)}var yc={body:{target:[0,.9,0],dir:[.3,.1,1],dist:3.7,layers:{skin:1,muscles:0,skeleton:1,vertebrae:1,discs:1,dura:1,cord:1,nerves:1,arteries:1,cortex:1,white_matter:1,deep_brain:1,findings:1}},neck:{target:[0,1.468,-.022],dir:[.55,.22,-.8],dist:.3,layers:{skin:.6,muscles:0,skeleton:.45,vertebrae:.8,discs:1,dura:1,cord:1,nerves:.35,arteries:.75,cortex:0,white_matter:0,deep_brain:0,findings:1}},brain:{target:[0,1.635,-.01],dir:[.6,.38,.7],dist:.42,layers:{skin:.5,muscles:0,skeleton:.5,vertebrae:.6,discs:1,dura:1,cord:1,nerves:0,arteries:.55,cortex:.14,white_matter:.28,deep_brain:1,findings:1}}};function Gn(n,t=!0){z.focus=n;let e=yc[n];for(let[i,s]of Object.entries(e.layers))Ae[i].visible=s>0,Ae[i].opacity=s>0?s:Ae[i].opacity;di(),Qo(),t&&Ps(ve(e.target),ve(e.target).addScaledVector(ve(e.dir).normalize(),e.dist)),document.querySelectorAll("[data-focus]").forEach(i=>i.classList.toggle("on",i.dataset.focus===n))}var _x={extrusion_C5_C6:["neck",[.82,.42,-.4],.15],extrusion_C6_C7:["neck",[.82,.3,-.45],.15],modic_C6_C7:["neck",[-.95,.15,.25],.17],canal_C5_C7:["neck",[.15,.95,-.25],.17],cord:["neck",[.5,.2,-.85],.2],roots_left:["neck",[.7,.3,.65],.14],extrusion_T1_T2:["neck",[.82,.35,-.45],.15],va_left:["neck",[.75,.15,.65],.17],spondylosis:["neck",[-.6,.2,-.78],.17],protrusion_C2_C3:["neck",[-.8,.4,-.45],.15],wmh:["brain",[.4,.82,.4],.3],rathke:["brain",[1,.12,.08],.15],pineal:["brain",[1,.25,-.1],.15],mastoid_left:["brain",[.85,.05,-.55],.15]},xc={extrusion_C5_C6:{nerves:.12,arteries:.3,cord:.45,vertebrae:.55,skin:.35,skeleton:.3},extrusion_C6_C7:{nerves:.12,arteries:.3,cord:.45,vertebrae:.55,skin:.35,skeleton:.3},extrusion_T1_T2:{nerves:.12,arteries:.3,cord:.45,vertebrae:.55,skin:.35,skeleton:.3},protrusion_C2_C3:{nerves:.12,arteries:.3,cord:.45,vertebrae:.55,skin:.35,skeleton:.3},canal_C5_C7:{nerves:.12,arteries:.3,cord:.7,vertebrae:.55,skin:.35,skeleton:.3},modic_C6_C7:{nerves:.12,arteries:.25,skin:.3,skeleton:.3},roots_left:{nerves:.35,arteries:.3,skin:.35},va_left:{nerves:.12,arteries:.5,skin:.35}},xx={spine:{skin:0,muscles:0,skeleton:0,vertebrae:.45,discs:1,dura:1,cord:.6,nerves:.06,arteries:.06,cortex:0,white_matter:0,deep_brain:0,findings:1},vessels:{skin:0,muscles:0,skeleton:0,vertebrae:.5,discs:.6,dura:0,cord:0,nerves:0,arteries:.06,cortex:0,white_matter:0,deep_brain:.4,findings:1},brain:{skin:0,muscles:0,skeleton:0,vertebrae:0,discs:0,dura:0,cord:.5,nerves:0,arteries:0,cortex:.1,white_matter:.22,deep_brain:1,findings:1},skull:{skin:.25,muscles:0,skeleton:.6,vertebrae:.4,discs:0,dura:0,cord:0,nerves:0,arteries:.2,cortex:.15,white_matter:0,deep_brain:0,findings:1}},id={extrusion_C5_C6:["disc_C5_C6"],extrusion_C6_C7:["disc_C6_C7"],modic_C6_C7:["vert_C6","vert_C7"],canal_C5_C7:["dura"],cord:["cord"],roots_left:["roots_l"],extrusion_T1_T2:["disc_T1_T2"],va_left:["va_l"],protrusion_C2_C3:["disc_C2_C3"],wmh:de.geometry.wmh_spots.map((n,t)=>`wmh_${t}`),rathke:["pituitary","rathke_cyst"],pineal:["pineal","pineal_cyst"],mastoid_left:["mastoid_fluid"],spondylosis:["vert_C3","vert_C4","vert_C5","vert_C6","vert_C7"]},hr={};for(let[n,t]of Object.entries(id))for(let e of t)(!hr[e]||n!=="spondylosis")&&(hr[e]=n);for(let n of["vert_C3","vert_C4","vert_C5","vert_C6","vert_C7"])hr[n]="spondylosis";function Lc(n,t=!1){let[e,i,s]=_x[n.id];(z.focus!==e||xc[n.id]||xc[z.pinned]||z.isolate)&&Gn(e,!1);let r=z.isolate?xx[n.layer==="nerves"?"spine":n.layer]:xc[n.id];for(let[l,c]of Object.entries(r||{}))Ae[l].visible=c>0,c>0&&(Ae[l].opacity=c);di(),Qo();let a=ve(n.at3),o=a.clone().addScaledVector(ve(i).normalize(),s);t?(ie.target.copy(a),Qt.position.copy(o),ie.update()):Ps(a,o)}var or={ids:[],color:new Pt};function sd(n){for(let t of or.ids){let e=cr[t];e&&e.userData.solid.emissive.copy(e.userData.restEmissive||new Pt(0))}or={ids:n?id[n.id]||[]:[],color:new Pt(n?n.color:"#000")};for(let t of or.ids){let e=cr[t];e&&!e.userData.restEmissive&&(e.userData.restEmissive=e.userData.solid.emissive.clone())}}function vx(n){let t=.55+.35*Math.sin(n*.005);for(let e of or.ids){let i=cr[e];i&&i.userData.solid.emissive.copy(or.color).multiplyScalar(t)}}var $u=document.getElementById("markers"),Dc={};function yx(){$u.innerHTML="";for(let n of de.hotspots){let t=document.createElement("button");t.className=`hs sev-${n.severity}`,t.style.setProperty("--c",n.color),t.innerHTML='<span class="ring"></span><span class="core"></span><span class="tip"></span>',t.addEventListener("pointerenter",()=>Rs(n,t)),t.addEventListener("pointerleave",zi),t.addEventListener("click",e=>{e.stopPropagation(),Vi(n,!0)}),$u.appendChild(t),Dc[n.id]=t}rd()}function rd(){for(let n of de.hotspots)Dc[n.id].querySelector(".tip").textContent=n[z.lang].title}var Qe=new R,Ho={};function Mx(){let n=en.clientWidth,t=en.clientHeight;for(let e of de.hotspots){let i=Dc[e.id],s=Ae.findings.visible;Qe.set(e.at3[0],e.at3[1],e.at3[2]);let r=z.clip.mode!=="off"&&(li.distanceToPoint(Qe)<-.01||z.clip.slab&&ws.distanceToPoint(Qe)<-.01);Qe.project(Qt);let a=s&&!r&&Qe.z<1&&Math.abs(Qe.x)<1.05&&Math.abs(Qe.y)<1.05;i.style.display=a?"":"none",Ho[e.id]=a?[(Qe.x+1)/2*n,(1-Qe.y)/2*t]:null,a&&(i.style.transform=`translate(${Ho[e.id][0]}px, ${Ho[e.id][1]}px)`),i.classList.toggle("active",z.pinned===e.id||z.hovered===e.id)}}var Mc=null,bc=null;function Rs(n,t){clearTimeout(Mc),bc=n.id,Mc=setTimeout(()=>{bc===n.id&&Uc(n,!1)},400)}function zi(){clearTimeout(Mc),bc=null}var me=document.getElementById("card");function Uc(n,t){z.pinned&&!t&&z.pinned!==n.id&&bx()||(z.hovered=n.id,t&&(z.pinned=n.id,od=performance.now()),Nc(n),me.hidden=!1,me.classList.toggle("pinned",!!t),sd(n),hd(n),cd())}var od=0,bx=()=>performance.now()-od<1200;function ad(){me.hidden=!0,z.pinned=null,z.hovered=null,sd(null),pi()}function Vi(n,t){t&&Lc(n,Go),Uc(n,!0)}var Sx={confirmed:"\u2713",partly:"\u25D0",revised:"\u21BB",unconfirmed:"?",new:"+"};function ld(n){return n.status?`<span class="st st-${n.status}" title="${$e[z.lang].vs}">${Sx[n.status]} ${$e[z.lang].status[n.status]}</span>`:""}function Nc(n){let t=n[z.lang],e=$e[z.lang],i=(r,a)=>a?`<h4>${r}</h4><p>${a}</p>`:"";me.style.setProperty("--c",n.color),me.innerHTML=`
    <div class="card-head"><span class="chip" style="--c:${n.color}">${e.sev[n.severity]}</span>${ld(n)}
      <button class="x" title="${e.close}" aria-label="${e.close}">\xD7</button></div>
    <h3>${t.title}</h3>
    ${t.vs?`<div class="vs"><b>${e.vs}:</b> ${t.vs}</div>`:""}
    ${i(e.found,t.found)}${i(e.how,t.how)}${i(e.todo,t.todo)}
    ${z.doctor?`<h4 class="tech">${e.tech}</h4><ul class="doc">${t.doctor.map(r=>`<li>${r}</li>`).join("")}</ul><div class="ref">${z.lang==="ru"?n.report.replace("IMAGING_REVIEW","IMAGING_REVIEW_ru"):n.report}</div>`:""}
    <div class="card-actions">${z.voiceMode!=="off"?`<button class="btn play">\u25B6 ${e.replay}</button><button class="btn stop">\u25A0 ${e.stop}</button>`:""}<button class="btn go">\u2316 ${e.goto}</button><button class="btn iso ${z.isolate?"on":""}">\u25CE ${e.isolate}</button>${ue&&ue.notesFor(n.id).length?`<button class="btn mri">\u25A6 ${ue.showOn()}</button>`:""}</div>`,me.querySelector(".x").onclick=ad,z.voiceMode!=="off"&&(me.querySelector(".play").onclick=()=>{fi(),hd(n,!0)},me.querySelector(".stop").onclick=pi),me.querySelector(".go").onclick=()=>Vi(n,!0),me.querySelector(".iso").onclick=()=>{z.isolate=!z.isolate,Lc(n),Nc(n)};let s=me.querySelector(".mri");s&&(s.onclick=()=>{ue.showFinding(n.id),He()})}function cd(){let n=z.pinned||z.hovered;if(!n||me.hidden)return;if(tn.matches){me.style.left=me.style.top="";return}let t=en.clientWidth,e=en.clientHeight,i=me.offsetWidth,s=me.offsetHeight,r=Ho[n],a,o;r?(a=r[0]+26,o=r[1]-30,a+i>t-130&&(a=r[0]-i-26)):(a=t-i-16,o=130),me.style.left=`${Math.max(12,Math.min(t-i-12,a))}px`;let l=jo.hidden?12:92;me.style.top=`${Math.max(12,Math.min(e-s-l,o))}px`}var Te=new Audio;Te.preload="auto";var _n=td?window.speechSynthesis:null,qu=!1,Wn=null;function fi(){if(z.voiceUnlocked)return;z.voiceUnlocked=!0,new Audio("data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAIA+AAACABAAZGF0YQAAAAA=").play().catch(()=>{}),vd(),He(),document.getElementById("voiceHint").hidden=!0}var Yu=null;function Zu(n,t=5e3){let e=document.getElementById("voiceHint");e.textContent=n,e.hidden=!1,clearTimeout(Yu),Yu=setTimeout(()=>{e.hidden=!0,e.textContent=on("voiceHint")},t)}function hd(n,t=!1){if(z.voiceMode==="off")return;if(!z.voiceUnlocked){document.getElementById("voiceHint").hidden=!1;return}if(z.voiceMode==="browser"){Rx(n,t);return}if(Wn===n.id&&!Te.paused&&!t)return;Te.pause(),Te.src=`audio/${z.lang}/${n.id}.m4a`,Te.currentTime=0,Wn=n.id,Te.play().catch(i=>{i.name!=="AbortError"&&ki("audio: "+i.message)});let e=Qu[z.lang][n.id];dd(e&&e.words.map(i=>i[0]))}function pi(){Te.pause(),_n&&(Yt.gen++,Yt.active=!1,_n.cancel()),Wn=null,Oc()}Te.addEventListener("ended",()=>{Wn=null,setTimeout(Oc,900)});document.addEventListener("visibilitychange",()=>{document.hidden&&pi()});Te.addEventListener("playing",()=>document.body.dataset.voice="playing:"+Wn);Te.addEventListener("loadedmetadata",()=>document.body.dataset.voiceDur=Te.duration.toFixed(1));Te.addEventListener("timeupdate",()=>document.body.dataset.voiceT=Te.currentTime.toFixed(1));Te.addEventListener("error",()=>document.body.dataset.voice="error:"+(Te.error?Te.error.code:"?"));var Yt={gen:0,active:!1,words:[],chunk:null,char:0,startedAt:0,boundary:!1,k:0,keep:null},Ex={ru:14,en:15},wx=/^(Albert|Bad News|Bahh|Bells|Boing|Bubbles|Cellos|Good News|Jester|Organ|Pipe Organ|Superstar|Trinoids|Whisper|Wobble|Zarvox|Deranged|Hysterical|Junior|Ralph|Fred|Kathy|Princess|Eddy|Flo|Grandma|Grandpa|Reed|Rocko|Sandy|Shelley)\b/;function ud(n){let t=_n?_n.getVoices().filter(i=>i.lang.toLowerCase().startsWith(n)):[],e=t.filter(i=>!wx.test(i.name));return e.length?e:t}function Tx(n){let t=ud(n);if(!t.length)return null;let e=t.find(s=>s.voiceURI===z.ttsPick[n]),i=s=>(/premium|enhanced|natural|neural/i.test(s.name)?4:0)+(/google|microsoft/i.test(s.name)?2:0)+(s.default?1:0);return e||[...t].sort((s,r)=>i(r)-i(s))[0]}var Ax={ru:["\u043D\u043E\u043B\u044C","\u043E\u0434\u0438\u043D","\u0434\u0432\u0430","\u0442\u0440\u0438","\u0447\u0435\u0442\u044B\u0440\u0435","\u043F\u044F\u0442\u044C","\u0448\u0435\u0441\u0442\u044C","\u0441\u0435\u043C\u044C"],en:["zero","one","two","three","four","five","six","seven"]};function Cx(n,t){let e=[...n.matchAll(/\S+/g)].map(s=>({t:s[0],a:s.index,b:s.index+s[0].length})),i=[];for(let s=0;s<e.length;s++){let r=e[s],a=e[s+1],o=a?Ax[t].indexOf(a.t.replace(/[^\p{L}]/gu,"").toLowerCase()):-1;/^(цэ|Цэ|C)$/.test(r.t)&&o>0?(i.push({t:"C"+o+a.t.replace(/^\p{L}+/u,""),a:r.a,b:a.b}),s++):i.push(r)}return i}function Rx(n,t){if(Wn===n.id&&Yt.active&&!t)return;let e=z.lang,i=Tx(e);if(pi(),!i){Zu(on("ttsMissing"));return}let s=n[e],r=s.say||[s.found,s.how,s.todo].filter(Boolean).join(" "),a=Yt.gen;Yt.words=Cx(r,e),Yt.active=!0,Yt.chunk=null,Yt.char=0,Wn=n.id,dd(Yt.words.map(d=>d.t));let o=[...r.matchAll(/[^.!?]+[.!?]*\s*/g)].filter(d=>d[0].trim()).map(d=>({text:d[0],at:d.index})),l=()=>{Yt.active=!1,Wn=null,setTimeout(()=>{a===Yt.gen&&Oc()},900)},c=d=>{if(a!==Yt.gen)return;if(d>=o.length){l();return}let p=o[d],g=new SpeechSynthesisUtterance(p.text),v=()=>{a===Yt.gen&&Yt.k===d&&c(d+1)};g.voice=i,g.lang=i.lang,g.onstart=()=>{a===Yt.gen&&(Yt.chunk=p,Yt.char=p.at,Yt.startedAt=performance.now(),Yt.boundary=!1,document.body.dataset.voice="tts:"+n.id)},g.onboundary=m=>{a===Yt.gen&&m.name!=="sentence"&&(Yt.boundary=!0,Yt.char=p.at+m.charIndex)},g.onend=v,g.onerror=m=>{if(a===Yt.gen){if(["interrupted","canceled","not-allowed"].includes(m.error)){m.error==="not-allowed"&&(ki("speech: "+m.error),Zu(on("voiceHint"))),l();return}ki("speech: "+m.error),v()}},Yt.k=d,Yt.keep=g,_n.speak(g)},h=performance.now(),f=()=>{a===Yt.gen&&((_n.speaking||_n.pending)&&performance.now()-h<300?setTimeout(f,50):c(0))};setTimeout(f,60)}function Ix(){let n=Yt.chunk;if(!n)return 0;let t=Yt.char;Yt.boundary||(t=Math.min(n.at+n.text.length-1,n.at+(performance.now()-Yt.startedAt)/1e3*Ex[z.lang]));let e=Yt.words.findIndex(i=>t<i.b);return e<0?Yt.words.length-1:e}_n&&_n.addEventListener("voiceschanged",()=>He());var jo=document.getElementById("caption"),ur=null;function dd(n){if(!n||!n.length){ur=null;return}let t=[],e=[];n.forEach((i,s)=>{e.push(s),/[.!?]$/.test(i)&&(t.push(e),e=[])}),e.length&&t.push(e),ur={words:n,sentences:t},Sc="",jo.hidden=!1}function Oc(){jo.hidden=!0,ur=null}function Px(){if(z.voiceMode==="browser")return Yt.active?Ix():-1;let n=Qu[z.lang][Wn];if(Te.paused||!n)return-1;let t=n.words.findIndex(e=>Te.currentTime<e[2]);return t<0?n.words.length-1:t}var Sc="";function Lx(){if(!ur)return;let n=Px();if(n<0)return;let{words:t,sentences:e}=ur,i=e.findIndex(r=>r.includes(n)),s=`${i}:${n}`;s!==Sc&&(Sc=s,jo.innerHTML=(e[i]||[]).map(r=>r===n?`<mark>${t[r]}</mark>`:`<span class="${r<n?"said":""}">${t[r]}</span>`).join(" "))}var Dx=(()=>{let n=document.createElement("canvas");n.width=n.height=64;let t=n.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,0.85)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new Pi(n)})(),ci=class{constructor(t,{count:e,speed:i,size:s,color:r,alt:a,flicker:o}){this.P=t.map(ve),this.L=[0];for(let c=1;c<this.P.length;c++)this.L.push(this.L[c-1]+this.P[c].distanceTo(this.P[c-1]));this.total=this.L[this.L.length-1],this.count=e,this.speed=i,this.flicker=o,this.base=new Pt(r),this.alt=new Pt(a||r);let l=new we;this.pos=new Float32Array(e*3),this.col=new Float32Array(e*3),l.setAttribute("position",new _e(this.pos,3)),l.setAttribute("color",new _e(this.col,3)),this.points=new fo(l,new Ks({size:s,map:Dx,vertexColors:!0,transparent:!0,depthTest:!1,depthWrite:!1,blending:Ws,sizeAttenuation:!0})),this.points.renderOrder=20,this.points.frustumCulled=!1,Xn.add(this.points)}at(t,e){let i=0,s=this.L.length-1;for(;s-i>1;){let a=i+s>>1;this.L[a]<t?i=a:s=a}let r=(t-this.L[i])/Math.max(1e-9,this.L[s]-this.L[i]);return e.lerpVectors(this.P[i],this.P[s],r)}update(t){let e=new R,i=new Pt;for(let s=0;s<this.count;s++){let r=(t*this.speed+s/this.count*this.total)%this.total;this.at(r,e),this.pos.set([e.x,e.y,e.z],s*3);let a=1;if(i.copy(this.base),this.flicker){let o=this.flicker(e,r/this.total,t,s);a=o.k,o.alt&&i.copy(this.alt)}this.col.set([i.r*a,i.g*a,i.b*a],s*3)}this.points.geometry.attributes.position.needsUpdate=!0,this.points.geometry.attributes.color.needsUpdate=!0}},Hn=[];function Ux(){let n=Object.fromEntries(de.hotspots.map(r=>[r.id,r])),t=[ve(n.extrusion_C5_C6.at3),ve(n.extrusion_C6_C7.at3)],e=1.452,i=(r,a,o,l)=>Math.min(...t.map(h=>h.distanceTo(r)))<.016?{k:.5+.9*Math.abs(Math.sin(o*40+l*7)),alt:!0}:{k:r.y<e-.02&&a>.35?.75:1.1},s=de.paths;Hn.push(new ci(s.c6_thumb,{count:7,speed:.22,size:.009,color:"#fff3a0",alt:"#ff3b1f",flicker:i})),Hn.push(new ci(s.c6_index,{count:5,speed:.2,size:.008,color:"#fff3a0",alt:"#ff3b1f",flicker:i})),Hn.push(new ci(s.c7_middle,{count:7,speed:.21,size:.009,color:"#ffe27a",alt:"#ff3b1f",flicker:i})),Hn.push(new ci(s.cord_down,{count:10,speed:.12,size:.008,color:"#fff3a0",flicker:r=>({k:r.y<e?.45:1.1})})),Hn.push(new ci(s.va_r,{count:26,speed:.07,size:.0065,color:"#ff4a5a"})),Hn.push(new ci(s.va_l,{count:8,speed:.035,size:.0042,color:"#c02a3a"}))}var Ec=document.getElementById("viewcube"),Fc=new Zs({canvas:Ec,antialias:!0,alpha:!0});Fc.setPixelRatio(Math.min(window.devicePixelRatio,2));var $o=new Ii,Vo=new Ce(32,1,.1,10);$o.add(new Mo(16777215,1.2));var sr,fd=["left","right","top","bottom","front","back"];function Nx(){sr&&$o.remove(sr);let n=fd.map(t=>{let e=document.createElement("canvas");e.width=e.height=128;let i=e.getContext("2d");i.fillStyle="#16233a",i.fillRect(0,0,128,128),i.strokeStyle="#5cc6ff",i.lineWidth=6,i.strokeRect(3,3,122,122),i.fillStyle="#e6eefc",i.font=`600 ${z.lang==="ru"?19:22}px "Avenir Next", system-ui, sans-serif`,i.textAlign="center",i.textBaseline="middle",i.fillText(on(t).toUpperCase(),64,64);let s=new Pi(e);return s.colorSpace=Ue,new je({map:s})});sr=new qt(new kn(1,1,1),n),$o.add(sr)}Ec.addEventListener("click",n=>{let t=Ec.getBoundingClientRect(),e=new js;e.setFromCamera(new It((n.clientX-t.left)/t.width*2-1,-((n.clientY-t.top)/t.height)*2+1),Vo);let i=e.intersectObject(sr)[0];i&&Bi(fd[i.face.materialIndex])});function Ox(){let n=Qt.position.clone().sub(ie.target).normalize();Vo.position.copy(n.multiplyScalar(3.2)),Vo.quaternion.copy(Qt.quaternion),Fc.render($o,Vo)}var Ju=document.getElementById("scalebar");function Fx(){let t=2*Qt.position.distanceTo(ie.target)*Math.tan(To.degToRad(Qt.fov/2)),e=en.clientHeight/t,i=[.001,.002,.005,.01,.02,.05,.1,.2,.5],s=i[0];for(let r of i)r*e<=150&&(s=r);Ju.querySelector(".bar").style.width=`${s*e}px`,Ju.querySelector(".lbl").textContent=`${Math.round(s*1e3)} ${on("mm")}`}var wc=document.getElementById("readout"),qo=new js,pd=new It,Bc=!1,Ku=0,Bx=0,hi=null;Oe.domElement.addEventListener("pointermove",n=>{let t=Oe.domElement.getBoundingClientRect();pd.set((n.clientX-t.left)/t.width*2-1,-((n.clientY-t.top)/t.height)*2+1),Bc=!0,Bx=performance.now()});Oe.domElement.addEventListener("pointerleave",()=>{Bc=!1,wc.textContent="",hi&&(zi(),hi=null)});function kx(n){if(!Bc||n-Ku<140||bn)return;Ku=n,qo.setFromCamera(pd,Qt);let t=Ko.filter(g=>g.visible&&(g.material===g.userData.solid?g.material.opacity>.15:!0)),e=qo.intersectObjects(t,!1).filter(g=>!md(g.point)),i=e.find(g=>hr[g.object.userData.id])||e.find(g=>g.object.material===g.object.userData.solid&&!g.object.material.transparent)||e[0];if(!i){wc.textContent="",hi&&(zi(),hi=null);return}let s=i.object.userData.id,r=Ou(s,z.lang);if(i.object.userData.ranges){let g=i.face.a,v=i.object.userData.ranges.find(([m])=>g<m);v&&(r=pc(v[1],z.lang))}else i.object.userData.curveName&&(r=pc(i.object.userData.curveName,z.lang));let a=i.point,o=Math.round(a.x*1e3),l=Math.round(-a.z*1e3),c=Math.round(a.y*1e3),h=nd(a.y),f=z.lang==="ru"?o>=0?`\u041B ${o}`:`\u041F ${-o}`:o>=0?`L ${o}`:`R ${-o}`,d=z.lang==="ru"?l>=0?`\u0417 ${l}`:`\u041F\u0434 ${-l}`:l>=0?`P ${l}`:`A ${-l}`;wc.textContent=`${r} \xB7 ${f} \xB7 ${d} \xB7 ${on("height")} ${c} ${on("mm")}${h?` \xB7 ${on("level")} ${er(h,z.lang)}`:""}`;let p=hr[s];p&&p!==hi?(hi=p,Rs(de.hotspots.find(g=>g.id===p))):!p&&hi&&(zi(),hi=null)}function md(n){return z.clip.mode!=="off"&&(li.distanceToPoint(n)<0||z.clip.slab&&ws.distanceToPoint(n)<0)}Oe.domElement.addEventListener("dblclick",n=>{let t=Oe.domElement.getBoundingClientRect();qo.setFromCamera(new It((n.clientX-t.left)/t.width*2-1,-((n.clientY-t.top)/t.height)*2+1),Qt);let e=qo.intersectObjects(Ko.filter(i=>i.visible),!1).find(i=>!md(i.point));e&&Ps(e.point.clone(),Qt.position.clone().add(e.point.clone().sub(ie.target)),.6)});function He(){let n=$e[z.lang];document.getElementById("title").textContent=n.title,document.getElementById("study").textContent=Ac.study===!1?"":n.study,document.querySelectorAll("[data-lang]").forEach(f=>f.classList.toggle("on",f.dataset.lang===z.lang));let t=document.getElementById("voiceBtn"),e=z.voiceMode,i=(f,d)=>`${f}<span class="lbl"> ${d}</span>`,[s,r]=e==="off"?["\u{1F507}",n.voiceMode.off]:z.voiceUnlocked?["\u{1F50A}",n.voiceMode[e]]:["\u{1F508}",n.enableVoice];t.innerHTML=i(s,r),t.title=`${r} (${As.map(f=>n.voiceMode[f]).join(" \u2192 ")})`,t.classList.toggle("attention",e!=="off"&&!z.voiceUnlocked);let a=document.getElementById("ttsVoice"),o=e==="browser"?ud(z.lang):[];a.hidden=o.length<2,a.hidden||(a.title=n.voicePick,a.innerHTML=`<option value="">${tn.matches?"\u{1F5E3}":`${n.voicePick}:`} ${n.voiceAuto}</option>`+o.map(f=>`<option value="${f.voiceURI}">${f.name}</option>`).join(""),a.value=o.some(f=>f.voiceURI===z.ttsPick[z.lang])?z.ttsPick[z.lang]:""),document.getElementById("doctorBtn").classList.toggle("on",z.doctor),document.getElementById("doctorBtn").innerHTML=i("\u2695",n.doctor),document.getElementById("doctorBtn").title=n.doctor,document.getElementById("animBtn").classList.toggle("on",z.anim),document.getElementById("animBtn").innerHTML=i("\u3030",n.anim),document.getElementById("animBtn").title=n.anim,document.getElementById("leftBtn").title=n.controls,document.getElementById("rightBtn").innerHTML=`\u25C9<span class="lbl"> ${n.findings}</span><span class="n">${de.hotspots.length}</span>`,document.getElementById("rightBtn").title=n.findings;let l=document.getElementById("guideBtn");l.innerHTML=i("\u{1F4CB}",n.guide),l.title=n.guide,l.classList.toggle("on",!qe.hidden);let c=document.getElementById("tourBtn");c.innerHTML=i("\u25B6",n.tour),c.title=n.tour,c.classList.toggle("on",Ie>=0);let h=document.getElementById("scanBtn");h.hidden=!ue,ue&&(h.innerHTML=i("\u25A6",ue.label()),h.title=ue.label(),h.classList.toggle("on",ue.isOpen())),document.getElementById("voiceHint").textContent=n.voiceHint,document.getElementById("disclaimer").textContent=n.disclaimer,document.getElementById("attribution").textContent=[n.attribution,n.voiceCredit[z.voiceMode]].filter(Boolean).join(" \xB7 "),document.title=`${n.title} \xB7 MRI`}function Cs(){let n=$e[z.lang],t=document.getElementById("left");t.innerHTML=`
    <section><h2>${n.focus}</h2><div class="seg">${["body","neck","brain"].map(e=>`<button data-focus="${e}" class="${z.focus===e?"on":""}">${n[e]}</button>`).join("")}</div></section>
    <section><h2>${n.views}</h2><div class="grid3">${["front","back","left","right","top","bottom"].map(e=>`<button data-view="${e}">${n[e]}</button>`).join("")}</div>
      <button class="wide" data-reset>${n.reset}</button></section>
    <section><label class="toggle"><input type="checkbox" id="xrayBox" ${z.xray?"checked":""}><span>${n.xray}</span></label></section>
    <section><h2>${n.layers}</h2><div id="layerList"></div></section>
    <section><h2>${n.clip}</h2>
      <div class="seg four">${["off","axial","sagittal","coronal"].map(e=>`<button data-clip="${e}" class="${z.clip.mode===e?"on":""}">${e==="off"?n.clipOff:n[e]}</button>`).join("")}</div>
      <input type="range" id="clipSlider" min="0" max="1000" value="500" ${z.clip.mode==="off"?"disabled":""}>
      <div class="readout-line" id="clipReadout"></div>
      <label class="toggle small"><input type="checkbox" id="clipFlip" ${z.clip.flip?"checked":""}><span>${n.flip}</span></label>
      <label class="toggle small"><input type="checkbox" id="clipInner" ${z.clip.inner?"checked":""}><span>${n.clipInner}</span></label>
      <label class="toggle small"><input type="checkbox" id="clipSlab" ${z.clip.slab?"checked":""}><span>${n.slab}</span></label>
    </section>
    <section><h2>${n.legend}</h2><ul class="legend">${n.legendItems.map(([e,i])=>`<li><i style="background:${e}"></i>${i}</li>`).join("")}</ul></section>
    <section><h2>${n.help}</h2><div class="keys">${n.keys.split(" \xB7 ").join("<br>")}</div></section>`,t.querySelectorAll("[data-focus]").forEach(e=>e.onclick=()=>{Gn(e.dataset.focus),ui()}),t.querySelectorAll("[data-view]").forEach(e=>e.onclick=()=>{Bi(e.dataset.view),ui()}),t.querySelector("[data-reset]").onclick=()=>{Gn(z.focus),ui()},t.querySelector("#xrayBox").onchange=e=>{z.xray=e.target.checked,di()},t.querySelectorAll("[data-clip]").forEach(e=>e.onclick=()=>dr(e.dataset.clip)),t.querySelector("#clipSlider").oninput=e=>{let[i,s]=ed[z.clip.mode]||[0,1];z.clip.value=i+(s-i)*(e.target.value/1e3),Ts()},t.querySelector("#clipFlip").onchange=e=>{z.clip.flip=e.target.checked,Ts()},t.querySelector("#clipInner").onchange=e=>{z.clip.inner=e.target.checked,Ts()},t.querySelector("#clipSlab").onchange=e=>{z.clip.slab=e.target.checked,Ts()},Qo(),gd(),_d()}function dr(n,t){if(z.clip.mode=n,n!=="off"){let e={axial:ie.target.y,sagittal:Math.max(-.1,Math.min(.1,ie.target.x)),coronal:Math.max(-.12,Math.min(.12,-ie.target.z))}[n];z.clip.value=t??e}document.querySelectorAll("[data-clip]").forEach(e=>e.classList.toggle("on",e.dataset.clip===n)),gd(),Ts()}function gd(){let n=document.getElementById("clipSlider");if(n&&(n.disabled=z.clip.mode==="off",z.clip.mode!=="off")){let[t,e]=ed[z.clip.mode];n.value=Math.round((z.clip.value-t)/(e-t)*1e3)}}function _d(){let n=document.getElementById("clipReadout");if(!n)return;let{mode:t,value:e}=z.clip;if(t==="off"){n.textContent="\u2014";return}let i=Math.round(e*1e3);if(t==="axial"){let s=nd(e);n.textContent=`${on("height")} ${i} ${on("mm")}${s?` \xB7 ${er(s,z.lang)}`:""}`}t==="sagittal"&&(n.textContent=z.lang==="ru"?`${i>=0?"\u0432\u043B\u0435\u0432\u043E":"\u0432\u043F\u0440\u0430\u0432\u043E"} ${Math.abs(i)} ${on("mm")} \u043E\u0442 \u0441\u0440\u0435\u0434\u043D\u0435\u0439 \u043B\u0438\u043D\u0438\u0438`:`${Math.abs(i)} mm ${i>=0?"left":"right"} of midline`),t==="coronal"&&(n.textContent=z.lang==="ru"?`${i>=0?"\u043A\u0437\u0430\u0434\u0438":"\u043A\u043F\u0435\u0440\u0435\u0434\u0438"} ${Math.abs(i)} ${on("mm")}`:`${Math.abs(i)} mm ${i>=0?"posterior":"anterior"}`)}function Qo(){let n=document.getElementById("layerList");if(!n)return;let t=$e[z.lang];n.innerHTML=Pc.map(e=>`
    <div class="layer"><label><input type="checkbox" data-layer="${e}" ${Ae[e].visible?"checked":""}><span>${t.layerNames[e]}</span></label>
    <input type="range" min="0" max="100" value="${Math.round(Ae[e].opacity*100)}" data-opacity="${e}"></div>`).join(""),n.querySelectorAll("[data-layer]").forEach(e=>e.onchange=i=>{Ae[e.dataset.layer].visible=i.target.checked,di()}),n.querySelectorAll("[data-opacity]").forEach(e=>e.oninput=i=>{let s=Ae[e.dataset.opacity];s.opacity=i.target.value/100,s.visible=s.opacity>.01,di(),n.querySelector(`[data-layer="${e.dataset.opacity}"]`).checked=s.visible})}function pr(){let n=$e[z.lang],t=[...de.hotspots].sort((s,r)=>Vu.indexOf(s.severity)-Vu.indexOf(r.severity)),e=document.getElementById("right");e.innerHTML=`<section><h2>${n.findings} <span class="count">${t.length}</span></h2>
    <ol class="findings">${t.map(s=>`
      <li data-hs="${s.id}" class="${z.pinned===s.id?"on":""}" style="--c:${s.color}">
        <div class="row"><span class="dot"></span><span class="ttl">${s[z.lang].title}</span><span class="chip" style="--c:${s.color}">${n.sev[s.severity]}</span></div>
        <div class="row2">${ld(s)}</div>
        <p>${s[z.lang].found}</p>
        ${z.doctor?`<ul class="doc">${s[z.lang].doctor.map(r=>`<li>${r}</li>`).join("")}</ul>`:""}
      </li>`).join("")}</ol></section>
    ${z.doctor?`<section class="issues"><h2>${n.issues}</h2><ul>${de.report_issues[z.lang].map(s=>`<li>${s}</li>`).join("")}</ul></section>`:""}
    <section class="hint" id="hoverHint">${z.voiceMode==="off"?n.hoverHintText:n.hoverHint}</section>`;let i=window.SLICES||[];i.length&&e.insertAdjacentHTML("afterbegin",`<section><h2>${n.mri}</h2>
    <div class="thumbs">${i.map(s=>`<button class="thumb" data-slice="${s.id}" title="${s[z.lang]}"><img src="${s.file}" alt=""><span>${s[z.lang].split(" \xB7 ").slice(1).join(" \xB7 ")}</span></button>`).join("")}</div>
    <div class="hint">${n.mriNote}</div></section>`),e.querySelectorAll("[data-slice]").forEach(s=>s.onclick=()=>{Vc(s.dataset.slice),ui()}),e.querySelectorAll("[data-hs]").forEach(s=>{let r=de.hotspots.find(a=>a.id===s.dataset.hs);s.onclick=()=>{fi(),ui(),Vi(r,!0),pr()},s.onmouseenter=()=>Rs(r),s.onmouseleave=zi})}function ta(){He(),Cs(),pr(),rd(),Nx(),ue?.render(),zc(),Hc();let n=z.pinned||z.hovered;n&&!me.hidden&&Nc(de.hotspots.find(t=>t.id===n)),Yo&&Vc(Yo,!0)}var Vn=de.guide,ea=Object.fromEntries(de.hotspots.map(n=>[n.id,n])),qe=document.getElementById("guide"),rr="plan",ai=n=>z.lang==="ru"?String(n).replace(".",","):String(n);function kc(n){n&&$e.en.guideTabs[n]&&(rr=n),qe.hidden=!1,zc(),He()}function Hi(){qe.hidden||(qe.hidden=!0,He())}function ju(n,t,e,i){let s=tn.matches,r=s?430:620,a=s?92:118,o=s?78:96,l=28,c=i?22:6,h=c+n.length*l+20,f=p=>a+p/t*(r-a-o),d=e.map(p=>`<line class="ax" x1="${f(p)}" x2="${f(p)}" y1="${c-2}" y2="${h-16}"/><text x="${f(p)}" y="${h-3}" text-anchor="middle">${p}</text>`).join("");return i&&(d+=`<rect x="${f(i[0])}" y="${c-2}" width="${f(i[1])-f(i[0])}" height="${h-14-c}" fill="rgba(12,163,12,.2)"/><text x="${(f(i[0])+f(i[1]))/2}" y="${c-8}" text-anchor="middle">${i[2]}</text>`),d+=n.map((p,g)=>{let v=c+g*l,m=v+l/2;return`<g class="row" data-hs="${p.hs}"><title>${p.tip}</title><rect class="hit" x="0" y="${v}" width="${r}" height="${l}"/>
      <text class="lv" x="6" y="${m+4}">${p.label}</text>${p.mark(f,v,m)}<text class="val" x="${p.end(f)+9}" y="${m+4}">${p.text}</text></g>`}).join(""),`<svg viewBox="0 0 ${r} ${h}" role="img">${d}</svg>`}function zx(n){let t=Vn.canal.map(s=>({hs:s.hs,label:er(s.level,z.lang),text:ai(s.mid)+(s.left?` \xB7 ${ai(s.left)}`:""),tip:`${er(s.level,z.lang)}: ${n.canalMid} ${ai(s.mid)} ${n.mm}${s.left?`, ${n.canalLeft} ${ai(s.left)} ${n.mm}`:""}`,end:r=>r(s.mid),mark:(r,a)=>`<rect x="${r(0)}" y="${a+8}" width="${r(s.mid)-r(0)}" height="12" rx="3" fill="#5cc6ff"/>`+(s.left?`<line x1="${r(s.left)}" x2="${r(s.left)}" y1="${a+4}" y2="${a+24}" stroke="#ffb000" stroke-width="3" stroke-linecap="round"/>`:"")})),e=Vn.vessels.map(s=>({hs:"va_left",label:Vn.vessel_names[z.lang][s.id],text:`${ai(s.lo)}\u2013${ai(s.hi)}`,tip:`${Vn.vessel_names[z.lang][s.id]}: ${ai(s.lo)}\u2013${ai(s.hi)} ${n.mm}`,end:r=>r(s.hi)+4,mark:(r,a,o)=>`<line x1="${r(s.lo)}" x2="${r(s.hi)}" y1="${o}" y2="${o}" stroke="${s.id.startsWith("va_l")?"#ffb000":"#5cc6ff"}" stroke-width="10" stroke-linecap="round"/>`})),i=s=>`<div class="legend-line">${s.map(([r,a])=>`<span><i style="background:${r}"></i>${a}</span>`).join("")}</div>`;return`<div class="chart"><h3>${n.canalTitle}</h3>${i([["#5cc6ff",n.canalMid],["#ffb000",n.canalLeft],["rgba(12,163,12,.45)",n.canalRef]])}
      ${ju(t,14,[0,2,4,6,8,10,12,14],[...Vn.canal_ref,n.canalRef])}</div>
    <div class="chart"><h3>${n.vesselsTitle}</h3>${ju(e,4,[0,1,2,3,4])}</div>
    <div class="chart"><h3>${n.numbersTitle}</h3><table class="nums">${Vn.numbers[z.lang].map(s=>`<tr><td>${s.label}</td><td>${s.value}</td>
      <td><button class="btn" data-hs="${s.hs}" title="${n.open3d}">\u2316</button></td></tr>`).join("")}</table></div>`}function zc(){if(qe.hidden)return;let n=$e[z.lang],t=z.lang,e=s=>s.map(r=>`<li>${r}</li>`).join(""),i="";if(rr==="plan")i=`<div class="plan">${Vn.plan.map(s=>`<section class="pl pl-${s.key}"><h3>${s[t].title}</h3><ul>${e(s[t].items)}</ul></section>`).join("")}</div>`;else if(rr==="measures")i=zx(n);else{let s=Vn.safety[t];i=`<div class="safety"><section class="do"><h3>\u2713 ${n.safeDo}</h3><ul>${e(s.do)}</ul></section><section class="dont"><h3>\u2715 ${n.safeDont}</h3><ul>${e(s.dont)}</ul></section></div><section class="faint"><h3>${n.safeFaint}</h3><p>${s.faint}</p></section>`}qe.innerHTML=`<div class="gbox" role="dialog" aria-label="${n.guide}"><div class="ghead"><div class="gtabs">${Object.entries(n.guideTabs).map(([s,r])=>`<button data-gtab="${s}" class="${rr===s?"on":""}">${r}</button>`).join("")}</div>
    <button class="x" aria-label="${n.close}" title="${n.close}">\xD7</button></div><div class="gbody">${i}</div><div class="gnote">${n.guideNote}</div></div>`,qe.querySelectorAll("[data-gtab]").forEach(s=>s.onclick=()=>{rr=s.dataset.gtab,zc()}),qe.querySelector(".x").onclick=Hi,qe.querySelectorAll("[data-hs]").forEach(s=>s.onclick=()=>{let r=ea[s.dataset.hs];r&&(Hi(),Hx(r))})}qe.onclick=n=>{n.target===qe&&Hi()};function Hx(n){ui(),Vi(n,!0),pr(),ue&&ue.notesFor(n.id).length&&(ue.showFinding(n.id),He())}var ir=document.getElementById("tourbar"),ar=Vn.tour.filter(n=>ea[n]),Ie=-1;function Is(n){if(n<0)return;if(n>=ar.length){fr();return}Ie=n,Hi();let t=ea[ar[n]];ui(),Vi(t,!0),pr(),ue&&ue.isOpen()&&ue.notesFor(t.id).length&&ue.showFinding(t.id),Hc(),He()}function fr(){Ie=-1,Hc(),He()}function Hc(){if(document.getElementById("app").classList.toggle("touring",Ie>=0),ir.hidden=Ie<0,Ie<0)return;let n=$e[z.lang],t=ea[ar[Ie]],e=Ie===ar.length-1;ir.innerHTML=`<span class="tstep">${n.tourStep} ${Ie+1}/${ar.length}</span><span class="tttl" style="--c:${t.color}">${t[z.lang].title}</span>
    <button class="btn tprev" ${Ie===0?"disabled":""}>\u25C0 ${n.prev}</button><button class="btn tnext">${e?n.endTour:`${n.next} \u25B6`}</button>
    <button class="x" aria-label="${n.endTour}" title="${n.endTour}">\xD7</button>`,ir.querySelector(".tprev").onclick=()=>Is(Ie-1),ir.querySelector(".tnext").onclick=()=>e?fr():Is(Ie+1),ir.querySelector(".x").onclick=fr}var Oo=document.getElementById("app"),xe={left:!tn.matches,right:!tn.matches&&innerWidth>1100};function mr(){let n=tn.matches;Oo.classList.toggle("left-open",n&&xe.left),Oo.classList.toggle("right-open",n&&xe.right),Oo.classList.toggle("left-closed",!n&&!xe.left),Oo.classList.toggle("right-closed",!n&&!xe.right),document.getElementById("scrim").hidden=!(n&&(xe.left||xe.right)),document.getElementById("leftBtn").classList.toggle("on",xe.left),document.getElementById("rightBtn").classList.toggle("on",xe.right)}function xd(n){xe[n]=!xe[n],xe[n]&&tn.matches&&(xe[n==="left"?"right":"left"]=!1),mr()}function ui(){tn.matches&&(xe.left||xe.right)&&(xe.left=xe.right=!1,mr())}tn.addEventListener("change",()=>{xe.left=!tn.matches,xe.right=!tn.matches&&innerWidth>1100,mr(),He()});document.getElementById("leftBtn").onclick=n=>{n.stopPropagation(),xd("left")};document.getElementById("rightBtn").onclick=n=>{n.stopPropagation(),xd("right")};document.getElementById("scrim").onclick=ui;mr();document.querySelectorAll("[data-lang]").forEach(n=>n.onclick=()=>{z.lang=n.dataset.lang,pi(),ta()});document.getElementById("doctorBtn").onclick=()=>{z.doctor=!z.doctor,ta()};document.getElementById("guideBtn").onclick=()=>qe.hidden?kc():Hi();document.getElementById("tourBtn").onclick=()=>{fi(),Ie<0?Is(0):fr()};document.getElementById("animBtn").onclick=()=>{z.anim=!z.anim,Hn.forEach(n=>n.points.visible=z.anim),He()};document.getElementById("voiceBtn").onclick=n=>{if(n.stopPropagation(),!z.voiceUnlocked&&z.voiceMode!=="off"){fi();return}pi(),z.voiceMode=As[(As.indexOf(z.voiceMode)+1)%As.length],Zo("voiceMode",z.voiceMode),fi(),ta()};document.getElementById("ttsVoice").onchange=n=>{n.stopPropagation(),pi(),z.ttsPick[z.lang]=n.target.value||null,Zo("ttsPick",z.ttsPick)};window.addEventListener("pointerdown",()=>fi(),{capture:!0});function vd(){if(!_n||qu||navigator.userActivation&&!navigator.userActivation.isActive)return;qu=!0;let n=new SpeechSynthesisUtterance(" ");n.volume=0,_n.speak(n)}for(let n of["pointerup","click","keydown"])window.addEventListener(n,vd,{capture:!0});window.addEventListener("keydown",n=>{if(n.target.tagName==="INPUT")return;let t=n.key.toLowerCase();if(t==="x")z.xray=!z.xray,di(),Cs();else if(t==="1")Gn("body");else if(t==="2")Gn("neck");else if(t==="3")Gn("brain");else if(t==="f")Bi("front");else if(t==="b")Bi("back");else if(t==="l")Bi("left");else if(t==="r")Bi("right");else if(t==="t")Bi("top");else if(t==="c"){let e=["off","axial","sagittal","coronal"];dr(e[(e.indexOf(z.clip.mode)+1)%4])}else t==="m"&&ue?(ue.toggle(),He()):t==="g"?qe.hidden?kc():Hi():t==="n"?Is(Ie+1):t==="p"&&Ie>0?Is(Ie-1):t===" "?(n.preventDefault(),pi()):t==="escape"&&(qe.hidden?Ie>=0?fr():ad():Hi())});var Vx={z:["A","P","R","L"],x:["S","I","A","P"]},Yo=null;function Vc(n,t=!1){let e=(window.SLICES||[]).find(p=>p.id===n);if(!e)return;Yo=n;let i=$e[z.lang],s=document.getElementById("slicebox"),r=e.id.startsWith("sag")?"x":"z",[a,o,l,c]=Vx[r],h=Object.fromEntries(de.hotspots.map(p=>[p.id,p])),f=e.dots.map(p=>{let g=h[p.id],v=g?g.color:"#fab219",m=g?g[z.lang].title:"";return`<button class="sdot" data-hs="${g?p.id:""}" style="left:${p.x*100}%;top:${p.y*100}%;--c:${v}" title="${m}"></button>`}).join(""),d=10/e.mm_per_px/448*100;s.innerHTML=`<div class="sb-head"><b>${e[z.lang]}</b><button class="x" aria-label="${i.close}">\xD7</button></div>
    <div class="sb-img"><img src="${e.file}" alt="${e[z.lang]}">${f}
      <span class="o t">${a}</span><span class="o b">${o}</span><span class="o l">${l}</span><span class="o r">${c}</span>
      <span class="sbar" style="width:${d}%"></span><span class="sbar-l">10 ${i.mm}</span></div>
    <div class="sb-note">${i.mriWarn} \xB7 FOV ${e.fov_mm} ${i.mm}</div>
    <div class="card-actions"><button class="btn show3d">\u29C9 ${i.mriShow}</button></div>`,s.hidden=!1,t||s.classList.remove("mini"),s.querySelector(".x").onclick=()=>{s.hidden=!0,Yo=null},s.querySelector(".sb-img img").onclick=()=>s.classList.remove("mini"),s.querySelector(".show3d").onclick=()=>{s.classList.add("mini"),z.clip.slab=!0,z.clip.flip=e.clip.mode==="axial",z.xray=!1,Gn(e.id==="ax_brain"?"brain":"neck",!1),dr(e.clip.mode,e.clip.value),Cs();let p=ve(e.clip.target);Ps(p,p.clone().addScaledVector(ve(Xo[e.clip.view]).normalize(),e.fov_mm/1e3*2.1))},s.querySelectorAll(".sdot[data-hs]").forEach(p=>{let g=h[p.dataset.hs];g&&(p.onmouseenter=()=>Rs(g),p.onmouseleave=zi,p.onclick=()=>{fi(),Vi(g,!0)})})}var Fo=document.getElementById("tags"),vc=[{at:[0,1.471,-.0235],ru:"C5\u2013C6 \xB7 AP 9,9 \u043C\u043C (8,5 \u0441\u043B\u0435\u0432\u0430) \xB7 Kang 1",en:"C5\u2013C6 \xB7 AP 9.9 mm (8.5 L) \xB7 Kang 1"},{at:[0,1.4585,-.0285],ru:"C6\u2013C7 \xB7 AP 9,6 \u043C\u043C (8,6 \u0441\u043B\u0435\u0432\u0430) \xB7 Kang 1 (2?)",en:"C6\u2013C7 \xB7 AP 9.6 mm (8.6 L) \xB7 Kang 1 (2?)"}];function Gx(){let n=z.doctor&&Ae.findings.visible;if(Fo.hidden=!n,!n)return;Fo.childElementCount!==vc.length&&(Fo.innerHTML=vc.map(()=>'<div class="tag"></div>').join(""));let t=en.clientWidth,e=en.clientHeight;vc.forEach((i,s)=>{let r=Fo.children[s];Qe.set(...i.at).project(Qt);let a=Qe.z<1&&Qt.position.distanceTo(ie.target)<.7;r.style.display=a?"":"none",r.textContent=i[z.lang],r.style.transform=`translate(${(Qe.x+1)/2*t-46}px, ${(1-Qe.y)/2*e-18+s*8}px) translate(-100%, -50%)`})}var zn=0;function Wx(){let n=tn.matches&&!me.hidden?me.offsetHeight*.5:0;if(n===zn)return;zn=Math.abs(n-zn)<.5?n:zn+(n-zn)*.15;let t=en.clientWidth,e=en.clientHeight;zn?Qt.setViewOffset(t,e,0,zn,t,e):Qt.clearViewOffset()}function Tc(){let n=en.clientWidth,t=en.clientHeight;Oe.setSize(n,t,!1),Qt.aspect=n/t,zn?Qt.setViewOffset(n,t,0,zn,n,t):Qt.updateProjectionMatrix(),Fc.setSize(110,110,!1)}new ResizeObserver(Tc).observe(en);var Xx=new bo,$x=0;function yd(n){requestAnimationFrame(yd),gx(n),ie.update(),Wx(),lr.quaternion.copy(Qt.quaternion),lr.position.copy(Qt.position);let t=Go?2:Xx.getElapsedTime();z.anim&&Hn.forEach(e=>e.update(t)),vx(Go?0:n),kx(n),Oe.render(Xn,Qt),Mx(),Gx(),cd(),Lx(),Fx(),Ox(),++$x===1&&(document.body.dataset.ready="1")}async function qx(){document.getElementById("loading").textContent=$e[z.lang].loading,await dx(),yx(),Ux(),Hn.forEach(i=>i.points.visible=z.anim),mc&&(ue=Hu({scene:Xn,state:z,SHARED:de,centers:Jo,parts:cr,hoverStart:Rs,hoverEnd:zi,unlockVoice:fi,selectHotspot:Vi,setClipMode:dr,renderLeft:Cs,setFocus:Gn,flyTo:Ps,VIEWDIR:Xo,onLayout:()=>requestAnimationFrame(Tc),onOpen:()=>{!tn.matches&&innerWidth<1800&&xe.left&&(xe.left=!1,mr())}})),document.getElementById("scanBtn").onclick=i=>{i.stopPropagation(),ue?.toggle(),He()},ta(),Tc();let n=Gt.get("focus")||"body";Gn(yc[n]?n:"body",!1);let t=yc[z.focus];if(ie.target.copy(ve(t.target)),Qt.position.copy(ve(t.target).addScaledVector(ve(t.dir).normalize(),t.dist)),Gt.get("view")){let i=Qt.position.distanceTo(ie.target);Qt.position.copy(ie.target).addScaledVector(ve(Xo[Gt.get("view")]).normalize(),i)}if(Gt.get("xray")&&(z.xray=Gt.get("xray")==="1",di(),Cs()),Gt.get("layers")){for(let i of Gt.get("layers").split(",")){let[s,r]=i.split(":");Ae[s]&&(Ae[s].opacity=+r||Ae[s].opacity,Ae[s].visible=+r>0)}di(),Qo()}if(Gt.get("clipflip")==="1"&&(z.clip.flip=!0),Gt.get("slab")==="1"&&(z.clip.slab=!0),Gt.get("clip")){let[i,s]=Gt.get("clip").split(":");dr(i,s!==void 0?parseFloat(s):void 0),Cs()}if(Gt.get("isolate")==="1"&&(z.isolate=!0),Gt.get("unlock")==="1"&&(z.voiceUnlocked=!0,He()),Gt.get("hover")){let i=de.hotspots.find(s=>s.id===Gt.get("hover"));i&&setTimeout(()=>Rs(i),50)}if(ue&&Gt.get("scan")){let[i,s]=Gt.get("scan").split(":");ue.open(i||void 0,s!==void 0?+s:void 0),He()}Gt.get("slice")&&(Vc(Gt.get("slice")),Gt.get("show3d")&&document.querySelector("#slicebox .show3d")?.click()),Gt.get("guide")&&kc(Gt.get("guide")),Gt.get("tour")&&Is(+Gt.get("tour")-1);let e=Gt.get("hotspot");if(e){let i=de.hotspots.find(s=>s.id===e);i&&(Lc(i,!0),Uc(i,!0),pr())}if(Gt.get("dist")){let i=parseFloat(Gt.get("dist")),s=Qt.position.clone().sub(ie.target).normalize();Qt.position.copy(ie.target).addScaledVector(s,i)}ie.update(),document.getElementById("loading").hidden=!0,requestAnimationFrame(yd)}qx().catch(n=>ki(n.stack||n.message));})();
/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
