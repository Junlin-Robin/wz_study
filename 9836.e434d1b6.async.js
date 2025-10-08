!(function(){"use strict";var Ve=Object.defineProperty;var Ge=(B,L,k)=>L in B?Ve(B,L,{enumerable:!0,configurable:!0,writable:!0,value:k}):B[L]=k;var v=(B,L,k)=>Ge(B,typeof L!="symbol"?L+"":L,k);var he=(B,L,k)=>new Promise((N,F)=>{var st=w=>{try{Y(k.next(w))}catch(D){F(D)}},i=w=>{try{Y(k.throw(w))}catch(D){F(D)}},Y=w=>w.done?N(w.value):Promise.resolve(w.value).then(st,i);Y((k=k.apply(B,L)).next())});(self.webpackChunkwz_study=self.webpackChunkwz_study||[]).push([[9836],{59836:function(B,L,k){var J;k.d(L,{Ee:function(){return Pe},J8:function(){return w},_$:function(){return Le},oI:function(){return we}});var N=k(90907),F=k(27226),st=k(7946),i=k(49550),Y=function(){var e=(0,i.eW)(function(K,l,u,n){for(u=u||{},n=K.length;n--;u[K[n]]=l);return u},"o"),t=[1,2],s=[1,3],o=[1,4],c=[2,4],h=[1,9],a=[1,11],f=[1,16],S=[1,17],g=[1,18],T=[1,19],b=[1,32],W=[1,20],X=[1,21],M=[1,22],p=[1,23],$=[1,24],V=[1,26],Z=[1,27],Q=[1,28],z=[1,29],H=[1,30],pt=[1,31],yt=[1,34],gt=[1,35],_t=[1,36],Et=[1,37],lt=[1,33],y=[1,4,5,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,42,45,48,49,50,51,54],Tt=[1,4,5,14,15,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,42,45,48,49,50,51,54],oe=[4,5,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,42,45,48,49,50,51,54],Nt={trace:(0,i.eW)(function(){},"trace"),yy:{},symbols_:{error:2,start:3,SPACE:4,NL:5,SD:6,document:7,line:8,statement:9,classDefStatement:10,styleStatement:11,cssClassStatement:12,idStatement:13,DESCR:14,"-->":15,HIDE_EMPTY:16,scale:17,WIDTH:18,COMPOSIT_STATE:19,STRUCT_START:20,STRUCT_STOP:21,STATE_DESCR:22,AS:23,ID:24,FORK:25,JOIN:26,CHOICE:27,CONCURRENT:28,note:29,notePosition:30,NOTE_TEXT:31,direction:32,acc_title:33,acc_title_value:34,acc_descr:35,acc_descr_value:36,acc_descr_multiline_value:37,classDef:38,CLASSDEF_ID:39,CLASSDEF_STYLEOPTS:40,DEFAULT:41,style:42,STYLE_IDS:43,STYLEDEF_STYLEOPTS:44,class:45,CLASSENTITY_IDS:46,STYLECLASS:47,direction_tb:48,direction_bt:49,direction_rl:50,direction_lr:51,eol:52,";":53,EDGE_STATE:54,STYLE_SEPARATOR:55,left_of:56,right_of:57,$accept:0,$end:1},terminals_:{2:"error",4:"SPACE",5:"NL",6:"SD",14:"DESCR",15:"-->",16:"HIDE_EMPTY",17:"scale",18:"WIDTH",19:"COMPOSIT_STATE",20:"STRUCT_START",21:"STRUCT_STOP",22:"STATE_DESCR",23:"AS",24:"ID",25:"FORK",26:"JOIN",27:"CHOICE",28:"CONCURRENT",29:"note",31:"NOTE_TEXT",33:"acc_title",34:"acc_title_value",35:"acc_descr",36:"acc_descr_value",37:"acc_descr_multiline_value",38:"classDef",39:"CLASSDEF_ID",40:"CLASSDEF_STYLEOPTS",41:"DEFAULT",42:"style",43:"STYLE_IDS",44:"STYLEDEF_STYLEOPTS",45:"class",46:"CLASSENTITY_IDS",47:"STYLECLASS",48:"direction_tb",49:"direction_bt",50:"direction_rl",51:"direction_lr",53:";",54:"EDGE_STATE",55:"STYLE_SEPARATOR",56:"left_of",57:"right_of"},productions_:[0,[3,2],[3,2],[3,2],[7,0],[7,2],[8,2],[8,1],[8,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,3],[9,4],[9,1],[9,2],[9,1],[9,4],[9,3],[9,6],[9,1],[9,1],[9,1],[9,1],[9,4],[9,4],[9,1],[9,2],[9,2],[9,1],[10,3],[10,3],[11,3],[12,3],[32,1],[32,1],[32,1],[32,1],[52,1],[52,1],[13,1],[13,1],[13,3],[13,3],[30,1],[30,1]],performAction:(0,i.eW)(function(l,u,n,_,E,r,ct){var d=r.length-1;switch(E){case 3:return _.setRootDoc(r[d]),r[d];break;case 4:this.$=[];break;case 5:r[d]!="nl"&&(r[d-1].push(r[d]),this.$=r[d-1]);break;case 6:case 7:this.$=r[d];break;case 8:this.$="nl";break;case 12:this.$=r[d];break;case 13:const kt=r[d-1];kt.description=_.trimColon(r[d]),this.$=kt;break;case 14:this.$={stmt:"relation",state1:r[d-2],state2:r[d]};break;case 15:const mt=_.trimColon(r[d]);this.$={stmt:"relation",state1:r[d-3],state2:r[d-1],description:mt};break;case 19:this.$={stmt:"state",id:r[d-3],type:"default",description:"",doc:r[d-1]};break;case 20:var q=r[d],it=r[d-2].trim();if(r[d].match(":")){var ht=r[d].split(":");q=ht[0],it=[it,ht[1]]}this.$={stmt:"state",id:q,type:"default",description:it};break;case 21:this.$={stmt:"state",id:r[d-3],type:"default",description:r[d-5],doc:r[d-1]};break;case 22:this.$={stmt:"state",id:r[d],type:"fork"};break;case 23:this.$={stmt:"state",id:r[d],type:"join"};break;case 24:this.$={stmt:"state",id:r[d],type:"choice"};break;case 25:this.$={stmt:"state",id:_.getDividerId(),type:"divider"};break;case 26:this.$={stmt:"state",id:r[d-1].trim(),note:{position:r[d-2].trim(),text:r[d].trim()}};break;case 29:this.$=r[d].trim(),_.setAccTitle(this.$);break;case 30:case 31:this.$=r[d].trim(),_.setAccDescription(this.$);break;case 32:case 33:this.$={stmt:"classDef",id:r[d-1].trim(),classes:r[d].trim()};break;case 34:this.$={stmt:"style",id:r[d-1].trim(),styleClass:r[d].trim()};break;case 35:this.$={stmt:"applyClass",id:r[d-1].trim(),styleClass:r[d].trim()};break;case 36:_.setDirection("TB"),this.$={stmt:"dir",value:"TB"};break;case 37:_.setDirection("BT"),this.$={stmt:"dir",value:"BT"};break;case 38:_.setDirection("RL"),this.$={stmt:"dir",value:"RL"};break;case 39:_.setDirection("LR"),this.$={stmt:"dir",value:"LR"};break;case 42:case 43:this.$={stmt:"state",id:r[d].trim(),type:"default",description:""};break;case 44:this.$={stmt:"state",id:r[d-2].trim(),classes:[r[d].trim()],type:"default",description:""};break;case 45:this.$={stmt:"state",id:r[d-2].trim(),classes:[r[d].trim()],type:"default",description:""};break}},"anonymous"),table:[{3:1,4:t,5:s,6:o},{1:[3]},{3:5,4:t,5:s,6:o},{3:6,4:t,5:s,6:o},e([1,4,5,16,17,19,22,24,25,26,27,28,29,33,35,37,38,42,45,48,49,50,51,54],c,{7:7}),{1:[2,1]},{1:[2,2]},{1:[2,3],4:h,5:a,8:8,9:10,10:12,11:13,12:14,13:15,16:f,17:S,19:g,22:T,24:b,25:W,26:X,27:M,28:p,29:$,32:25,33:V,35:Z,37:Q,38:z,42:H,45:pt,48:yt,49:gt,50:_t,51:Et,54:lt},e(y,[2,5]),{9:38,10:12,11:13,12:14,13:15,16:f,17:S,19:g,22:T,24:b,25:W,26:X,27:M,28:p,29:$,32:25,33:V,35:Z,37:Q,38:z,42:H,45:pt,48:yt,49:gt,50:_t,51:Et,54:lt},e(y,[2,7]),e(y,[2,8]),e(y,[2,9]),e(y,[2,10]),e(y,[2,11]),e(y,[2,12],{14:[1,39],15:[1,40]}),e(y,[2,16]),{18:[1,41]},e(y,[2,18],{20:[1,42]}),{23:[1,43]},e(y,[2,22]),e(y,[2,23]),e(y,[2,24]),e(y,[2,25]),{30:44,31:[1,45],56:[1,46],57:[1,47]},e(y,[2,28]),{34:[1,48]},{36:[1,49]},e(y,[2,31]),{39:[1,50],41:[1,51]},{43:[1,52]},{46:[1,53]},e(Tt,[2,42],{55:[1,54]}),e(Tt,[2,43],{55:[1,55]}),e(y,[2,36]),e(y,[2,37]),e(y,[2,38]),e(y,[2,39]),e(y,[2,6]),e(y,[2,13]),{13:56,24:b,54:lt},e(y,[2,17]),e(oe,c,{7:57}),{24:[1,58]},{24:[1,59]},{23:[1,60]},{24:[2,46]},{24:[2,47]},e(y,[2,29]),e(y,[2,30]),{40:[1,61]},{40:[1,62]},{44:[1,63]},{47:[1,64]},{24:[1,65]},{24:[1,66]},e(y,[2,14],{14:[1,67]}),{4:h,5:a,8:8,9:10,10:12,11:13,12:14,13:15,16:f,17:S,19:g,21:[1,68],22:T,24:b,25:W,26:X,27:M,28:p,29:$,32:25,33:V,35:Z,37:Q,38:z,42:H,45:pt,48:yt,49:gt,50:_t,51:Et,54:lt},e(y,[2,20],{20:[1,69]}),{31:[1,70]},{24:[1,71]},e(y,[2,32]),e(y,[2,33]),e(y,[2,34]),e(y,[2,35]),e(Tt,[2,44]),e(Tt,[2,45]),e(y,[2,15]),e(y,[2,19]),e(oe,c,{7:72}),e(y,[2,26]),e(y,[2,27]),{4:h,5:a,8:8,9:10,10:12,11:13,12:14,13:15,16:f,17:S,19:g,21:[1,73],22:T,24:b,25:W,26:X,27:M,28:p,29:$,32:25,33:V,35:Z,37:Q,38:z,42:H,45:pt,48:yt,49:gt,50:_t,51:Et,54:lt},e(y,[2,21])],defaultActions:{5:[2,1],6:[2,2],46:[2,46],47:[2,47]},parseError:(0,i.eW)(function(l,u){if(u.recoverable)this.trace(l);else{var n=new Error(l);throw n.hash=u,n}},"parseError"),parse:(0,i.eW)(function(l){var u=this,n=[0],_=[],E=[null],r=[],ct=this.table,d="",q=0,it=0,ht=0,kt=2,mt=1,Be=r.slice.call(arguments,1),m=Object.create(this.lexer),tt={yy:{}};for(var wt in this.yy)Object.prototype.hasOwnProperty.call(this.yy,wt)&&(tt.yy[wt]=this.yy[wt]);m.setInput(l,tt.yy),tt.yy.lexer=m,tt.yy.parser=this,typeof m.yylloc=="undefined"&&(m.yylloc={});var $t=m.yylloc;r.push($t);var Ye=m.options&&m.options.ranges;typeof tt.yy.parseError=="function"?this.parseError=tt.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function Me(I){n.length=n.length-2*I,E.length=E.length-I,r.length=r.length-I}(0,i.eW)(Me,"popStack");function le(){var I;return I=_.pop()||m.lex()||mt,typeof I!="number"&&(I instanceof Array&&(_=I,I=_.pop()),I=u.symbols_[I]||I),I}(0,i.eW)(le,"lex");for(var C,Pt,et,R,Fe,Wt,rt={},Dt,G,ce,vt;;){if(et=n[n.length-1],this.defaultActions[et]?R=this.defaultActions[et]:((C===null||typeof C=="undefined")&&(C=le()),R=ct[et]&&ct[et][C]),typeof R=="undefined"||!R.length||!R[0]){var Bt="";vt=[];for(Dt in ct[et])this.terminals_[Dt]&&Dt>kt&&vt.push("'"+this.terminals_[Dt]+"'");m.showPosition?Bt="Parse error on line "+(q+1)+`:
`+m.showPosition()+`
Expecting `+vt.join(", ")+", got '"+(this.terminals_[C]||C)+"'":Bt="Parse error on line "+(q+1)+": Unexpected "+(C==mt?"end of input":"'"+(this.terminals_[C]||C)+"'"),this.parseError(Bt,{text:m.match,token:this.terminals_[C]||C,line:m.yylineno,loc:$t,expected:vt})}if(R[0]instanceof Array&&R.length>1)throw new Error("Parse Error: multiple actions possible at state: "+et+", token: "+C);switch(R[0]){case 1:n.push(C),E.push(m.yytext),r.push(m.yylloc),n.push(R[1]),C=null,Pt?(C=Pt,Pt=null):(it=m.yyleng,d=m.yytext,q=m.yylineno,$t=m.yylloc,ht>0&&ht--);break;case 2:if(G=this.productions_[R[1]][1],rt.$=E[E.length-G],rt._$={first_line:r[r.length-(G||1)].first_line,last_line:r[r.length-1].last_line,first_column:r[r.length-(G||1)].first_column,last_column:r[r.length-1].last_column},Ye&&(rt._$.range=[r[r.length-(G||1)].range[0],r[r.length-1].range[1]]),Wt=this.performAction.apply(rt,[d,it,q,tt.yy,R[1],E,r].concat(Be)),typeof Wt!="undefined")return Wt;G&&(n=n.slice(0,-1*G*2),E=E.slice(0,-1*G),r=r.slice(0,-1*G)),n.push(this.productions_[R[1]][0]),E.push(rt.$),r.push(rt._$),ce=ct[n[n.length-2]][n[n.length-1]],n.push(ce);break;case 3:return!0}}return!0},"parse")},We=function(){var K={EOF:1,parseError:(0,i.eW)(function(u,n){if(this.yy.parser)this.yy.parser.parseError(u,n);else throw new Error(u)},"parseError"),setInput:(0,i.eW)(function(l,u){return this.yy=u||this.yy||{},this._input=l,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:(0,i.eW)(function(){var l=this._input[0];this.yytext+=l,this.yyleng++,this.offset++,this.match+=l,this.matched+=l;var u=l.match(/(?:\r\n?|\n).*/g);return u?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),l},"input"),unput:(0,i.eW)(function(l){var u=l.length,n=l.split(/(?:\r\n?|\n)/g);this._input=l+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-u),this.offset-=u;var _=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var E=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===_.length?this.yylloc.first_column:0)+_[_.length-n.length].length-n[0].length:this.yylloc.first_column-u},this.options.ranges&&(this.yylloc.range=[E[0],E[0]+this.yyleng-u]),this.yyleng=this.yytext.length,this},"unput"),more:(0,i.eW)(function(){return this._more=!0,this},"more"),reject:(0,i.eW)(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:(0,i.eW)(function(l){this.unput(this.match.slice(l))},"less"),pastInput:(0,i.eW)(function(){var l=this.matched.substr(0,this.matched.length-this.match.length);return(l.length>20?"...":"")+l.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:(0,i.eW)(function(){var l=this.match;return l.length<20&&(l+=this._input.substr(0,20-l.length)),(l.substr(0,20)+(l.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:(0,i.eW)(function(){var l=this.pastInput(),u=new Array(l.length+1).join("-");return l+this.upcomingInput()+`
`+u+"^"},"showPosition"),test_match:(0,i.eW)(function(l,u){var n,_,E;if(this.options.backtrack_lexer&&(E={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(E.yylloc.range=this.yylloc.range.slice(0))),_=l[0].match(/(?:\r\n?|\n).*/g),_&&(this.yylineno+=_.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:_?_[_.length-1].length-_[_.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+l[0].length},this.yytext+=l[0],this.match+=l[0],this.matches=l,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(l[0].length),this.matched+=l[0],n=this.performAction.call(this,this.yy,this,u,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),n)return n;if(this._backtrack){for(var r in E)this[r]=E[r];return!1}return!1},"test_match"),next:(0,i.eW)(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var l,u,n,_;this._more||(this.yytext="",this.match="");for(var E=this._currentRules(),r=0;r<E.length;r++)if(n=this._input.match(this.rules[E[r]]),n&&(!u||n[0].length>u[0].length)){if(u=n,_=r,this.options.backtrack_lexer){if(l=this.test_match(n,E[r]),l!==!1)return l;if(this._backtrack){u=!1;continue}else return!1}else if(!this.options.flex)break}return u?(l=this.test_match(u,E[_]),l!==!1?l:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:(0,i.eW)(function(){var u=this.next();return u||this.lex()},"lex"),begin:(0,i.eW)(function(u){this.conditionStack.push(u)},"begin"),popState:(0,i.eW)(function(){var u=this.conditionStack.length-1;return u>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:(0,i.eW)(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:(0,i.eW)(function(u){return u=this.conditionStack.length-1-Math.abs(u||0),u>=0?this.conditionStack[u]:"INITIAL"},"topState"),pushState:(0,i.eW)(function(u){this.begin(u)},"pushState"),stateStackSize:(0,i.eW)(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:(0,i.eW)(function(u,n,_,E){var r=E;switch(_){case 0:return 41;case 1:return 48;case 2:return 49;case 3:return 50;case 4:return 51;case 5:break;case 6:break;case 7:return 5;case 8:break;case 9:break;case 10:break;case 11:break;case 12:return this.pushState("SCALE"),17;break;case 13:return 18;case 14:this.popState();break;case 15:return this.begin("acc_title"),33;break;case 16:return this.popState(),"acc_title_value";break;case 17:return this.begin("acc_descr"),35;break;case 18:return this.popState(),"acc_descr_value";break;case 19:this.begin("acc_descr_multiline");break;case 20:this.popState();break;case 21:return"acc_descr_multiline_value";case 22:return this.pushState("CLASSDEF"),38;break;case 23:return this.popState(),this.pushState("CLASSDEFID"),"DEFAULT_CLASSDEF_ID";break;case 24:return this.popState(),this.pushState("CLASSDEFID"),39;break;case 25:return this.popState(),40;break;case 26:return this.pushState("CLASS"),45;break;case 27:return this.popState(),this.pushState("CLASS_STYLE"),46;break;case 28:return this.popState(),47;break;case 29:return this.pushState("STYLE"),42;break;case 30:return this.popState(),this.pushState("STYLEDEF_STYLES"),43;break;case 31:return this.popState(),44;break;case 32:return this.pushState("SCALE"),17;break;case 33:return 18;case 34:this.popState();break;case 35:this.pushState("STATE");break;case 36:return this.popState(),n.yytext=n.yytext.slice(0,-8).trim(),25;break;case 37:return this.popState(),n.yytext=n.yytext.slice(0,-8).trim(),26;break;case 38:return this.popState(),n.yytext=n.yytext.slice(0,-10).trim(),27;break;case 39:return this.popState(),n.yytext=n.yytext.slice(0,-8).trim(),25;break;case 40:return this.popState(),n.yytext=n.yytext.slice(0,-8).trim(),26;break;case 41:return this.popState(),n.yytext=n.yytext.slice(0,-10).trim(),27;break;case 42:return 48;case 43:return 49;case 44:return 50;case 45:return 51;case 46:this.pushState("STATE_STRING");break;case 47:return this.pushState("STATE_ID"),"AS";break;case 48:return this.popState(),"ID";break;case 49:this.popState();break;case 50:return"STATE_DESCR";case 51:return 19;case 52:this.popState();break;case 53:return this.popState(),this.pushState("struct"),20;break;case 54:break;case 55:return this.popState(),21;break;case 56:break;case 57:return this.begin("NOTE"),29;break;case 58:return this.popState(),this.pushState("NOTE_ID"),56;break;case 59:return this.popState(),this.pushState("NOTE_ID"),57;break;case 60:this.popState(),this.pushState("FLOATING_NOTE");break;case 61:return this.popState(),this.pushState("FLOATING_NOTE_ID"),"AS";break;case 62:break;case 63:return"NOTE_TEXT";case 64:return this.popState(),"ID";break;case 65:return this.popState(),this.pushState("NOTE_TEXT"),24;break;case 66:return this.popState(),n.yytext=n.yytext.substr(2).trim(),31;break;case 67:return this.popState(),n.yytext=n.yytext.slice(0,-8).trim(),31;break;case 68:return 6;case 69:return 6;case 70:return 16;case 71:return 54;case 72:return 24;case 73:return n.yytext=n.yytext.trim(),14;break;case 74:return 15;case 75:return 28;case 76:return 55;case 77:return 5;case 78:return"INVALID"}},"anonymous"),rules:[/^(?:default\b)/i,/^(?:.*direction\s+TB[^\n]*)/i,/^(?:.*direction\s+BT[^\n]*)/i,/^(?:.*direction\s+RL[^\n]*)/i,/^(?:.*direction\s+LR[^\n]*)/i,/^(?:%%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:[\s]+)/i,/^(?:((?!\n)\s)+)/i,/^(?:#[^\n]*)/i,/^(?:%[^\n]*)/i,/^(?:scale\s+)/i,/^(?:\d+)/i,/^(?:\s+width\b)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:classDef\s+)/i,/^(?:DEFAULT\s+)/i,/^(?:\w+\s+)/i,/^(?:[^\n]*)/i,/^(?:class\s+)/i,/^(?:(\w+)+((,\s*\w+)*))/i,/^(?:[^\n]*)/i,/^(?:style\s+)/i,/^(?:[\w,]+\s+)/i,/^(?:[^\n]*)/i,/^(?:scale\s+)/i,/^(?:\d+)/i,/^(?:\s+width\b)/i,/^(?:state\s+)/i,/^(?:.*<<fork>>)/i,/^(?:.*<<join>>)/i,/^(?:.*<<choice>>)/i,/^(?:.*\[\[fork\]\])/i,/^(?:.*\[\[join\]\])/i,/^(?:.*\[\[choice\]\])/i,/^(?:.*direction\s+TB[^\n]*)/i,/^(?:.*direction\s+BT[^\n]*)/i,/^(?:.*direction\s+RL[^\n]*)/i,/^(?:.*direction\s+LR[^\n]*)/i,/^(?:["])/i,/^(?:\s*as\s+)/i,/^(?:[^\n\{]*)/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[^\n\s\{]+)/i,/^(?:\n)/i,/^(?:\{)/i,/^(?:%%(?!\{)[^\n]*)/i,/^(?:\})/i,/^(?:[\n])/i,/^(?:note\s+)/i,/^(?:left of\b)/i,/^(?:right of\b)/i,/^(?:")/i,/^(?:\s*as\s*)/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[^\n]*)/i,/^(?:\s*[^:\n\s\-]+)/i,/^(?:\s*:[^:\n;]+)/i,/^(?:[\s\S]*?end note\b)/i,/^(?:stateDiagram\s+)/i,/^(?:stateDiagram-v2\s+)/i,/^(?:hide empty description\b)/i,/^(?:\[\*\])/i,/^(?:[^:\n\s\-\{]+)/i,/^(?:\s*:[^:\n;]+)/i,/^(?:-->)/i,/^(?:--)/i,/^(?::::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{LINE:{rules:[9,10],inclusive:!1},struct:{rules:[9,10,22,26,29,35,42,43,44,45,54,55,56,57,71,72,73,74,75],inclusive:!1},FLOATING_NOTE_ID:{rules:[64],inclusive:!1},FLOATING_NOTE:{rules:[61,62,63],inclusive:!1},NOTE_TEXT:{rules:[66,67],inclusive:!1},NOTE_ID:{rules:[65],inclusive:!1},NOTE:{rules:[58,59,60],inclusive:!1},STYLEDEF_STYLEOPTS:{rules:[],inclusive:!1},STYLEDEF_STYLES:{rules:[31],inclusive:!1},STYLE_IDS:{rules:[],inclusive:!1},STYLE:{rules:[30],inclusive:!1},CLASS_STYLE:{rules:[28],inclusive:!1},CLASS:{rules:[27],inclusive:!1},CLASSDEFID:{rules:[25],inclusive:!1},CLASSDEF:{rules:[23,24],inclusive:!1},acc_descr_multiline:{rules:[20,21],inclusive:!1},acc_descr:{rules:[18],inclusive:!1},acc_title:{rules:[16],inclusive:!1},SCALE:{rules:[13,14,33,34],inclusive:!1},ALIAS:{rules:[],inclusive:!1},STATE_ID:{rules:[48],inclusive:!1},STATE_STRING:{rules:[49,50],inclusive:!1},FORK_STATE:{rules:[],inclusive:!1},STATE:{rules:[9,10,36,37,38,39,40,41,46,47,51,52,53],inclusive:!1},ID:{rules:[9,10],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7,8,10,11,12,15,17,19,22,26,29,32,35,53,57,68,69,70,71,72,73,74,76,77,78],inclusive:!0}}};return K}();Nt.lexer=We;function bt(){this.yy={}}return(0,i.eW)(bt,"Parser"),bt.prototype=Nt,Nt.Parser=bt,new bt}();Y.parser=Y;var w=Y,D="TB",x="TB",A="dir",O="state",P="relation",ut="classDef",Ct="style",xt="applyClass",U="default",Yt="divider",Mt="fill:none",Vt="fill: #333",Gt="c",Ft="text",Ut="normal",At="rect",Lt="rectWithTitle",ue="stateStart",de="stateEnd",jt="divider",zt="roundedWithTitle",fe="note",Se="noteGroup",at="statediagram",pe="state",ye=`${at}-${pe}`,Ht="transition",ge="note",_e="note-edge",Ee=`${Ht} ${_e}`,Te=`${at}-${ge}`,be="cluster",ke=`${at}-${be}`,me="cluster-alt",De=`${at}-${me}`,Kt="parent",Jt="note",ve="state",It="----",Ce=`${It}${Jt}`,Xt=`${It}${Kt}`,Zt=(0,i.eW)((e,t=x)=>{if(!e.doc)return t;let s=t;for(const o of e.doc)o.stmt==="dir"&&(s=o.value);return s},"getDir"),xe=(0,i.eW)(function(e,t){return t.db.getClasses()},"getClasses"),Ae=(0,i.eW)(function(e,t,s,o){return he(this,null,function*(){var T,b;i.cM.info("REF0:"),i.cM.info("Drawing state diagram (v2)",t);const{securityLevel:c,state:h,layout:a}=(0,i.nV)();o.db.extract(o.db.getRootDocV2());const f=o.db.getData(),S=(0,N.q)(t,c);f.type=o.type,f.layoutAlgorithm=a,f.nodeSpacing=(h==null?void 0:h.nodeSpacing)||50,f.rankSpacing=(h==null?void 0:h.rankSpacing)||50,f.markers=["barb"],f.diagramId=t,yield(0,F.sY)(f,S);const g=8;st.w8.insertTitle(S,"statediagramTitleText",(T=h==null?void 0:h.titleTopMargin)!=null?T:25,o.db.getDiagramTitle()),(0,N.j)(S,g,at,(b=h==null?void 0:h.useMaxWidth)!=null?b:!0)})},"draw"),Le={getClasses:xe,draw:Ae,getDir:Zt},dt=new Map,j=0;function ft(e="",t=0,s="",o=It){const c=s!==null&&s.length>0?`${o}${s}`:"";return`${ve}-${e}${c}-${t}`}(0,i.eW)(ft,"stateDomId");var Ie=(0,i.eW)((e,t,s,o,c,h,a,f)=>{i.cM.trace("items",t),t.forEach(S=>{switch(S.stmt){case O:ot(e,S,s,o,c,h,a,f);break;case U:ot(e,S,s,o,c,h,a,f);break;case P:{ot(e,S.state1,s,o,c,h,a,f),ot(e,S.state2,s,o,c,h,a,f);const g={id:"edge"+j,start:S.state1.id,end:S.state2.id,arrowhead:"normal",arrowTypeEnd:"arrow_barb",style:Mt,labelStyle:"",label:i.SY.sanitizeText(S.description,(0,i.nV)()),arrowheadStyle:Vt,labelpos:Gt,labelType:Ft,thickness:Ut,classes:Ht,look:a};c.push(g),j++}break}})},"setupDoc"),Qt=(0,i.eW)((e,t=x)=>{let s=t;if(e.doc)for(const o of e.doc)o.stmt==="dir"&&(s=o.value);return s},"getDir");function nt(e,t,s){if(!t.id||t.id==="</join></fork>"||t.id==="</choice>")return;t.cssClasses&&(Array.isArray(t.cssCompiledStyles)||(t.cssCompiledStyles=[]),t.cssClasses.split(" ").forEach(c=>{if(s.get(c)){const h=s.get(c);t.cssCompiledStyles=[...t.cssCompiledStyles,...h.styles]}}));const o=e.find(c=>c.id===t.id);o?Object.assign(o,t):e.push(t)}(0,i.eW)(nt,"insertOrUpdateNode");function qt(e){var t,s;return(s=(t=e==null?void 0:e.classes)==null?void 0:t.join(" "))!=null?s:""}(0,i.eW)(qt,"getClassesFromDbInfo");function te(e){var t;return(t=e==null?void 0:e.styles)!=null?t:[]}(0,i.eW)(te,"getStylesFromDbInfo");var ot=(0,i.eW)((e,t,s,o,c,h,a,f)=>{var W,X;const S=t.id,g=s.get(S),T=qt(g),b=te(g);if(i.cM.info("dataFetcher parsedItem",t,g,b),S!=="root"){let M=At;t.start===!0?M=ue:t.start===!1&&(M=de),t.type!==U&&(M=t.type),dt.get(S)||dt.set(S,{id:S,shape:M,description:i.SY.sanitizeText(S,(0,i.nV)()),cssClasses:`${T} ${ye}`,cssStyles:b});const p=dt.get(S);t.description&&(Array.isArray(p.description)?(p.shape=Lt,p.description.push(t.description)):((W=p.description)==null?void 0:W.length)>0?(p.shape=Lt,p.description===S?p.description=[t.description]:p.description=[p.description,t.description]):(p.shape=At,p.description=t.description),p.description=i.SY.sanitizeTextOrArray(p.description,(0,i.nV)())),((X=p.description)==null?void 0:X.length)===1&&p.shape===Lt&&(p.type==="group"?p.shape=zt:p.shape=At),!p.type&&t.doc&&(i.cM.info("Setting cluster for XCX",S,Qt(t)),p.type="group",p.isGroup=!0,p.dir=Qt(t),p.shape=t.type===Yt?jt:zt,p.cssClasses=`${p.cssClasses} ${ke} ${h?De:""}`);const $={labelStyle:"",shape:p.shape,label:p.description,cssClasses:p.cssClasses,cssCompiledStyles:[],cssStyles:p.cssStyles,id:S,dir:p.dir,domId:ft(S,j),type:p.type,isGroup:p.type==="group",padding:8,rx:10,ry:10,look:a};if($.shape===jt&&($.label=""),e&&e.id!=="root"&&(i.cM.trace("Setting node ",S," to be child of its parent ",e.id),$.parentId=e.id),$.centerLabel=!0,t.note){const V={labelStyle:"",shape:fe,label:t.note.text,cssClasses:Te,cssStyles:[],cssCompilesStyles:[],id:S+Ce+"-"+j,domId:ft(S,j,Jt),type:p.type,isGroup:p.type==="group",padding:(0,i.nV)().flowchart.padding,look:a,position:t.note.position},Z=S+Xt,Q={labelStyle:"",shape:Se,label:t.note.text,cssClasses:p.cssClasses,cssStyles:[],id:S+Xt,domId:ft(S,j,Kt),type:"group",isGroup:!0,padding:16,look:a,position:t.note.position};j++,Q.id=Z,V.parentId=Z,nt(o,Q,f),nt(o,V,f),nt(o,$,f);let z=S,H=V.id;t.note.position==="left of"&&(z=V.id,H=S),c.push({id:z+"-"+H,start:z,end:H,arrowhead:"none",arrowTypeEnd:"",style:Mt,labelStyle:"",classes:Ee,arrowheadStyle:Vt,labelpos:Gt,labelType:Ft,thickness:Ut,look:a})}else nt(o,$,f)}t.doc&&(i.cM.trace("Adding nodes children "),Ie(t,t.doc,s,o,c,!h,a,f))},"dataFetcher"),Oe=(0,i.eW)(()=>{dt.clear(),j=0},"reset"),Ot="[*]",ee="start",se=Ot,ie="end",re="color",ae="fill",Re="bgFill",Ne=",";function Rt(){return new Map}(0,i.eW)(Rt,"newClassesList");var ne=(0,i.eW)(()=>({relations:[],states:new Map,documents:{}}),"newDoc"),St=(0,i.eW)(e=>JSON.parse(JSON.stringify(e)),"clone"),we=(J=class{constructor(t){v(this,"version");v(this,"nodes",[]);v(this,"edges",[]);v(this,"rootDoc",[]);v(this,"classes",Rt());v(this,"documents",{root:ne()});v(this,"currentDocument",this.documents.root);v(this,"startEndCount",0);v(this,"dividerCnt",0);v(this,"getAccTitle",i.eu);v(this,"setAccTitle",i.GN);v(this,"getAccDescription",i.Mx);v(this,"setAccDescription",i.U$);v(this,"setDiagramTitle",i.g2);v(this,"getDiagramTitle",i.Kr);this.clear(),this.version=t,this.setRootDoc=this.setRootDoc.bind(this),this.getDividerId=this.getDividerId.bind(this),this.setDirection=this.setDirection.bind(this),this.trimColon=this.trimColon.bind(this)}setRootDoc(t){i.cM.info("Setting root doc",t),this.rootDoc=t,this.version===1?this.extract(t):this.extract(this.getRootDocV2())}getRootDoc(){return this.rootDoc}docTranslator(t,s,o){if(s.stmt===P)this.docTranslator(t,s.state1,!0),this.docTranslator(t,s.state2,!1);else if(s.stmt===O&&(s.id==="[*]"?(s.id=o?t.id+"_start":t.id+"_end",s.start=o):s.id=s.id.trim()),s.doc){const c=[];let h=[],a;for(a=0;a<s.doc.length;a++)if(s.doc[a].type===Yt){const f=St(s.doc[a]);f.doc=St(h),c.push(f),h=[]}else h.push(s.doc[a]);if(c.length>0&&h.length>0){const f={stmt:O,id:(0,st.Ox)(),type:"divider",doc:St(h)};c.push(St(f)),s.doc=c}s.doc.forEach(f=>this.docTranslator(s,f,!0))}}getRootDocV2(){return this.docTranslator({id:"root"},{id:"root",doc:this.rootDoc},!0),{id:"root",doc:this.rootDoc}}extract(t){let s;t.doc?s=t.doc:s=t,i.cM.info(s),this.clear(!0),i.cM.info("Extract initial document:",s),s.forEach(a=>{switch(i.cM.warn("Statement",a.stmt),a.stmt){case O:this.addState(a.id.trim(),a.type,a.doc,a.description,a.note,a.classes,a.styles,a.textStyles);break;case P:this.addRelation(a.state1,a.state2,a.description);break;case ut:this.addStyleClass(a.id.trim(),a.classes);break;case Ct:{const f=a.id.trim().split(","),S=a.styleClass.split(",");f.forEach(g=>{let T=this.getState(g);if(T===void 0){const b=g.trim();this.addState(b),T=this.getState(b)}T.styles=S.map(b=>{var W;return(W=b.replace(/;/g,""))==null?void 0:W.trim()})})}break;case xt:this.setCssClass(a.id.trim(),a.styleClass);break}});const o=this.getStates(),h=(0,i.nV)().look;Oe(),ot(void 0,this.getRootDocV2(),o,this.nodes,this.edges,!0,h,this.classes),this.nodes.forEach(a=>{if(Array.isArray(a.label)){if(a.description=a.label.slice(1),a.isGroup&&a.description.length>0)throw new Error("Group nodes can only have label. Remove the additional description for node ["+a.id+"]");a.label=a.label[0]}})}addState(t,s=U,o=null,c=null,h=null,a=null,f=null,S=null){const g=t==null?void 0:t.trim();if(this.currentDocument.states.has(g)?(this.currentDocument.states.get(g).doc||(this.currentDocument.states.get(g).doc=o),this.currentDocument.states.get(g).type||(this.currentDocument.states.get(g).type=s)):(i.cM.info("Adding state ",g,c),this.currentDocument.states.set(g,{id:g,descriptions:[],type:s,doc:o,note:h,classes:[],styles:[],textStyles:[]})),c&&(i.cM.info("Setting state description",g,c),typeof c=="string"&&this.addDescription(g,c.trim()),typeof c=="object"&&c.forEach(T=>this.addDescription(g,T.trim()))),h){const T=this.currentDocument.states.get(g);T.note=h,T.note.text=i.SY.sanitizeText(T.note.text,(0,i.nV)())}a&&(i.cM.info("Setting state classes",g,a),(typeof a=="string"?[a]:a).forEach(b=>this.setCssClass(g,b.trim()))),f&&(i.cM.info("Setting state styles",g,f),(typeof f=="string"?[f]:f).forEach(b=>this.setStyle(g,b.trim()))),S&&(i.cM.info("Setting state styles",g,f),(typeof S=="string"?[S]:S).forEach(b=>this.setTextStyle(g,b.trim())))}clear(t){this.nodes=[],this.edges=[],this.documents={root:ne()},this.currentDocument=this.documents.root,this.startEndCount=0,this.classes=Rt(),t||(0,i.ZH)()}getState(t){return this.currentDocument.states.get(t)}getStates(){return this.currentDocument.states}logDocuments(){i.cM.info("Documents = ",this.documents)}getRelations(){return this.currentDocument.relations}startIdIfNeeded(t=""){let s=t;return t===Ot&&(this.startEndCount++,s=`${ee}${this.startEndCount}`),s}startTypeIfNeeded(t="",s=U){return t===Ot?ee:s}endIdIfNeeded(t=""){let s=t;return t===se&&(this.startEndCount++,s=`${ie}${this.startEndCount}`),s}endTypeIfNeeded(t="",s=U){return t===se?ie:s}addRelationObjs(t,s,o){let c=this.startIdIfNeeded(t.id.trim()),h=this.startTypeIfNeeded(t.id.trim(),t.type),a=this.startIdIfNeeded(s.id.trim()),f=this.startTypeIfNeeded(s.id.trim(),s.type);this.addState(c,h,t.doc,t.description,t.note,t.classes,t.styles,t.textStyles),this.addState(a,f,s.doc,s.description,s.note,s.classes,s.styles,s.textStyles),this.currentDocument.relations.push({id1:c,id2:a,relationTitle:i.SY.sanitizeText(o,(0,i.nV)())})}addRelation(t,s,o){if(typeof t=="object")this.addRelationObjs(t,s,o);else{const c=this.startIdIfNeeded(t.trim()),h=this.startTypeIfNeeded(t),a=this.endIdIfNeeded(s.trim()),f=this.endTypeIfNeeded(s);this.addState(c,h),this.addState(a,f),this.currentDocument.relations.push({id1:c,id2:a,title:i.SY.sanitizeText(o,(0,i.nV)())})}}addDescription(t,s){const o=this.currentDocument.states.get(t),c=s.startsWith(":")?s.replace(":","").trim():s;o.descriptions.push(i.SY.sanitizeText(c,(0,i.nV)()))}cleanupLabel(t){return t.substring(0,1)===":"?t.substr(2).trim():t.trim()}getDividerId(){return this.dividerCnt++,"divider-id-"+this.dividerCnt}addStyleClass(t,s=""){this.classes.has(t)||this.classes.set(t,{id:t,styles:[],textStyles:[]});const o=this.classes.get(t);s!=null&&s.split(Ne).forEach(c=>{const h=c.replace(/([^;]*);/,"$1").trim();if(RegExp(re).exec(c)){const f=h.replace(ae,Re).replace(re,ae);o.textStyles.push(f)}o.styles.push(h)})}getClasses(){return this.classes}setCssClass(t,s){t.split(",").forEach(o=>{let c=this.getState(o);if(c===void 0){const h=o.trim();this.addState(h),c=this.getState(h)}c.classes.push(s)})}setStyle(t,s){const o=this.getState(t);o!==void 0&&o.styles.push(s)}setTextStyle(t,s){const o=this.getState(t);o!==void 0&&o.textStyles.push(s)}getDirectionStatement(){return this.rootDoc.find(t=>t.stmt===A)}getDirection(){var t,s;return(s=(t=this.getDirectionStatement())==null?void 0:t.value)!=null?s:D}setDirection(t){const s=this.getDirectionStatement();s?s.value=t:this.rootDoc.unshift({stmt:A,value:t})}trimColon(t){return t&&t[0]===":"?t.substr(1).trim():t.trim()}getData(){const t=(0,i.nV)();return{nodes:this.nodes,edges:this.edges,other:{},config:t,direction:Zt(this.getRootDocV2())}}getConfig(){return(0,i.nV)().state}},(0,i.eW)(J,"StateDB"),v(J,"relationType",{AGGREGATION:0,EXTENSION:1,COMPOSITION:2,DEPENDENCY:3}),J),$e=(0,i.eW)(e=>`
defs #statediagram-barbEnd {
    fill: ${e.transitionColor};
    stroke: ${e.transitionColor};
  }
g.stateGroup text {
  fill: ${e.nodeBorder};
  stroke: none;
  font-size: 10px;
}
g.stateGroup text {
  fill: ${e.textColor};
  stroke: none;
  font-size: 10px;

}
g.stateGroup .state-title {
  font-weight: bolder;
  fill: ${e.stateLabelColor};
}

g.stateGroup rect {
  fill: ${e.mainBkg};
  stroke: ${e.nodeBorder};
}

g.stateGroup line {
  stroke: ${e.lineColor};
  stroke-width: 1;
}

.transition {
  stroke: ${e.transitionColor};
  stroke-width: 1;
  fill: none;
}

.stateGroup .composit {
  fill: ${e.background};
  border-bottom: 1px
}

.stateGroup .alt-composit {
  fill: #e0e0e0;
  border-bottom: 1px
}

.state-note {
  stroke: ${e.noteBorderColor};
  fill: ${e.noteBkgColor};

  text {
    fill: ${e.noteTextColor};
    stroke: none;
    font-size: 10px;
  }
}

.stateLabel .box {
  stroke: none;
  stroke-width: 0;
  fill: ${e.mainBkg};
  opacity: 0.5;
}

.edgeLabel .label rect {
  fill: ${e.labelBackgroundColor};
  opacity: 0.5;
}
.edgeLabel {
  background-color: ${e.edgeLabelBackground};
  p {
    background-color: ${e.edgeLabelBackground};
  }
  rect {
    opacity: 0.5;
    background-color: ${e.edgeLabelBackground};
    fill: ${e.edgeLabelBackground};
  }
  text-align: center;
}
.edgeLabel .label text {
  fill: ${e.transitionLabelColor||e.tertiaryTextColor};
}
.label div .edgeLabel {
  color: ${e.transitionLabelColor||e.tertiaryTextColor};
}

.stateLabel text {
  fill: ${e.stateLabelColor};
  font-size: 10px;
  font-weight: bold;
}

.node circle.state-start {
  fill: ${e.specialStateColor};
  stroke: ${e.specialStateColor};
}

.node .fork-join {
  fill: ${e.specialStateColor};
  stroke: ${e.specialStateColor};
}

.node circle.state-end {
  fill: ${e.innerEndBackground};
  stroke: ${e.background};
  stroke-width: 1.5
}
.end-state-inner {
  fill: ${e.compositeBackground||e.background};
  // stroke: ${e.background};
  stroke-width: 1.5
}

.node rect {
  fill: ${e.stateBkg||e.mainBkg};
  stroke: ${e.stateBorder||e.nodeBorder};
  stroke-width: 1px;
}
.node polygon {
  fill: ${e.mainBkg};
  stroke: ${e.stateBorder||e.nodeBorder};;
  stroke-width: 1px;
}
#statediagram-barbEnd {
  fill: ${e.lineColor};
}

.statediagram-cluster rect {
  fill: ${e.compositeTitleBackground};
  stroke: ${e.stateBorder||e.nodeBorder};
  stroke-width: 1px;
}

.cluster-label, .nodeLabel {
  color: ${e.stateLabelColor};
  // line-height: 1;
}

.statediagram-cluster rect.outer {
  rx: 5px;
  ry: 5px;
}
.statediagram-state .divider {
  stroke: ${e.stateBorder||e.nodeBorder};
}

.statediagram-state .title-state {
  rx: 5px;
  ry: 5px;
}
.statediagram-cluster.statediagram-cluster .inner {
  fill: ${e.compositeBackground||e.background};
}
.statediagram-cluster.statediagram-cluster-alt .inner {
  fill: ${e.altBackground?e.altBackground:"#efefef"};
}

.statediagram-cluster .inner {
  rx:0;
  ry:0;
}

.statediagram-state rect.basic {
  rx: 5px;
  ry: 5px;
}
.statediagram-state rect.divider {
  stroke-dasharray: 10,10;
  fill: ${e.altBackground?e.altBackground:"#efefef"};
}

.note-edge {
  stroke-dasharray: 5;
}

.statediagram-note rect {
  fill: ${e.noteBkgColor};
  stroke: ${e.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}
.statediagram-note rect {
  fill: ${e.noteBkgColor};
  stroke: ${e.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}

.statediagram-note text {
  fill: ${e.noteTextColor};
}

.statediagram-note .nodeLabel {
  color: ${e.noteTextColor};
}
.statediagram .edgeLabel {
  color: red; // ${e.noteTextColor};
}

#dependencyStart, #dependencyEnd {
  fill: ${e.lineColor};
  stroke: ${e.lineColor};
  stroke-width: 1;
}

.statediagramTitleText {
  text-anchor: middle;
  font-size: 18px;
  fill: ${e.textColor};
}
`,"getStyles"),Pe=$e},90907:function(B,L,k){k.d(L,{j:function(){return i},q:function(){return st}});var N=k(49550),F=k(98050),st=(0,N.eW)((D,x)=>{let A;return x==="sandbox"&&(A=(0,F.Ys)("#i"+D)),(x==="sandbox"?(0,F.Ys)(A.nodes()[0].contentDocument.body):(0,F.Ys)("body")).select(`[id="${D}"]`)},"getDiagramElement"),i=(0,N.eW)((D,x,A,O)=>{D.attr("class",A);const{width:P,height:ut,x:Ct,y:xt}=Y(D,x);(0,N.v2)(D,ut,P,O);const U=w(Ct,xt,P,ut,x);D.attr("viewBox",U),N.cM.debug(`viewBox configured: ${U} with padding: ${x}`)},"setupViewPortForSVG"),Y=(0,N.eW)((D,x)=>{var O;const A=((O=D.node())==null?void 0:O.getBBox())||{width:0,height:0,x:0,y:0};return{width:A.width+x*2,height:A.height+x*2,x:A.x,y:A.y}},"calculateDimensionsWithPadding"),w=(0,N.eW)((D,x,A,O,P)=>`${D-P} ${x-P} ${A} ${O}`,"createViewBox")}}]);
}());