(this.webpackJsonphostAdvance=this.webpackJsonphostAdvance||[]).push([[0],{191:function(t,e,n){"use strict";n.r(e),n.d(e,"createSwipeBackGesture",(function(){return c}));var r=n(17),a=(n(30),n(47)),c=function(t,e,n,c,i){var o=t.ownerDocument.defaultView;return Object(a.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(t){return t.startX<=50&&e()},onStart:n,onMove:function(t){var e=t.deltaX/o.innerWidth;c(e)},onEnd:function(t){var e=t.deltaX,n=o.innerWidth,a=e/n,c=t.velocityX,s=n/2,u=c>=0&&(c>.2||t.deltaX>s),d=(u?1-a:a)*n,h=0;if(d>5){var v=d/Math.abs(c);h=Math.min(v,540)}i(u,a<=0?.01:Object(r.c)(0,a,.9999),h)}})}}}]);
//# sourceMappingURL=0.b0fae201.chunk.js.map