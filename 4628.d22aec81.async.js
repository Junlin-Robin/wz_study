!(function(){"use strict";var Z=Object.defineProperty;var y=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var T=(s,n,r)=>n in s?Z(s,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[n]=r,P=(s,n)=>{for(var r in n||(n={}))J.call(n,r)&&T(s,r,n[r]);if(y)for(var r of y(n))Q.call(n,r)&&T(s,r,n[r]);return s};var $=(s,n,r)=>new Promise((E,f)=>{var p=c=>{try{h(r.next(c))}catch(k){f(k)}},t=c=>{try{h(r.throw(c))}catch(k){f(k)}},h=c=>c.done?E(c.value):Promise.resolve(c.value).then(p,t);h((r=r.apply(s,n)).next())});(self.webpackChunkwz_study=self.webpackChunkwz_study||[]).push([[4628],{91957:function(s,n,r){r.d(n,{A:function(){return f}});var E=r(49550);function f(p,t){var h,c,k;p.accDescr&&((h=t.setAccDescription)==null||h.call(t,p.accDescr)),p.accTitle&&((c=t.setAccTitle)==null||c.call(t,p.accTitle)),p.title&&((k=t.setDiagramTitle)==null||k.call(t,p.title))}(0,E.eW)(f,"populateCommonDb")},64628:function(s,n,r){r.d(n,{diagram:function(){return Y}});var E=r(91957),f=r(7946),p=r(75430),t=r(49550),h=r(12491),c={packet:[]},k=structuredClone(c),w=t.vZ.packet,M=(0,t.eW)(()=>{const e=(0,f.Rb)(P(P({},w),(0,t.iE)().packet));return e.showBits&&(e.paddingY+=10),e},"getConfig"),A=(0,t.eW)(()=>k.packet,"getPacket"),O=(0,t.eW)(e=>{e.length>0&&k.packet.push(e)},"pushWord"),F=(0,t.eW)(()=>{(0,t.ZH)(),k=structuredClone(c)},"clear"),W={pushWord:O,getPacket:A,getConfig:M,clear:F,setAccTitle:t.GN,getAccTitle:t.eu,setDiagramTitle:t.g2,getDiagramTitle:t.Kr,getAccDescription:t.Mx,setAccDescription:t.U$},S=1e4,z=(0,t.eW)(e=>{(0,E.A)(e,W);let a=-1,i=[],_=1;const{bitsPerRow:u}=W.getConfig();for(let{start:l,end:o,label:m}of e.blocks){if(o&&o<l)throw new Error(`Packet block ${l} - ${o} is invalid. End must be greater than start.`);if(l!==a+1)throw new Error(`Packet block ${l} - ${o!=null?o:l} is not contiguous. It should start from ${a+1}.`);for(a=o!=null?o:l,t.cM.debug(`Packet block ${l} - ${a} with label ${m}`);i.length<=u+1&&W.getPacket().length<S;){const[b,g]=U({start:l,end:o,label:m},_,u);if(i.push(b),b.end+1===_*u&&(W.pushWord(i),i=[],_++),!g)break;({start:l,end:o,label:m}=g)}}W.pushWord(i)},"populate"),U=(0,t.eW)((e,a,i)=>{if(e.end===void 0&&(e.end=e.start),e.start>e.end)throw new Error(`Block start ${e.start} is greater than block end ${e.end}.`);return e.end+1<=a*i?[e,void 0]:[{start:e.start,end:a*i-1,label:e.label},{start:a*i,end:e.end,label:e.label}]},"getNextFittingBlock"),I={parse:(0,t.eW)(e=>$(this,null,function*(){const a=yield(0,h.Qc)("packet",e);t.cM.debug(a),z(a)}),"parse")},L=(0,t.eW)((e,a,i,_)=>{const u=_.db,l=u.getConfig(),{rowHeight:o,paddingY:m,bitWidth:b,bitsPerRow:g}=l,B=u.getPacket(),d=u.getDiagramTitle(),C=o+m,v=C*(B.length+1)-(d?0:o),x=b*g+2,D=(0,p.P)(a);D.attr("viewbox",`0 0 ${x} ${v}`),(0,t.v2)(D,v,x,l.useMaxWidth);for(const[G,H]of B.entries())N(D,H,G,l);D.append("text").text(d).attr("x",x/2).attr("y",v-C/2).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","packetTitle")},"draw"),N=(0,t.eW)((e,a,i,{rowHeight:_,paddingX:u,paddingY:l,bitWidth:o,bitsPerRow:m,showBits:b})=>{const g=e.append("g"),B=i*(_+l)+l;for(const d of a){const C=d.start%m*o+1,v=(d.end-d.start+1)*o-u;if(g.append("rect").attr("x",C).attr("y",B).attr("width",v).attr("height",_).attr("class","packetBlock"),g.append("text").attr("x",C+v/2).attr("y",B+_/2).attr("class","packetLabel").attr("dominant-baseline","middle").attr("text-anchor","middle").text(d.label),!b)continue;const x=d.end===d.start,D=B-2;g.append("text").attr("x",C+(x?v/2:0)).attr("y",D).attr("class","packetByte start").attr("dominant-baseline","auto").attr("text-anchor",x?"middle":"start").text(d.start),x||g.append("text").attr("x",C+v).attr("y",D).attr("class","packetByte end").attr("dominant-baseline","auto").attr("text-anchor","end").text(d.end)}},"drawWord"),R={draw:L},K={byteFontSize:"10px",startByteColor:"black",endByteColor:"black",labelColor:"black",labelFontSize:"12px",titleColor:"black",titleFontSize:"14px",blockStrokeColor:"black",blockStrokeWidth:"1",blockFillColor:"#efefef"},j=(0,t.eW)(({packet:e}={})=>{const a=(0,f.Rb)(K,e);return`
	.packetByte {
		font-size: ${a.byteFontSize};
	}
	.packetByte.start {
		fill: ${a.startByteColor};
	}
	.packetByte.end {
		fill: ${a.endByteColor};
	}
	.packetLabel {
		fill: ${a.labelColor};
		font-size: ${a.labelFontSize};
	}
	.packetTitle {
		fill: ${a.titleColor};
		font-size: ${a.titleFontSize};
	}
	.packetBlock {
		stroke: ${a.blockStrokeColor};
		stroke-width: ${a.blockStrokeWidth};
		fill: ${a.blockFillColor};
	}
	`},"styles"),Y={parser:I,db:W,renderer:R,styles:j}}}]);
}());