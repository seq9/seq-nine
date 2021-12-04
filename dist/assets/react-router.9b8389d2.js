import{n as t,_ as n,o}from"./@babel.37ebccc5.js";import{R as e}from"./react.58d4b6d6.js";import"./prop-types.d6ec705b.js";import{e as r,b as i,l as a,d as s}from"./history.df7d96d1.js";import{i as c}from"./mini-create-react-context.d6c65e2f.js";import{i as p}from"./tiny-invariant.7beb7076.js";import{p as u}from"./path-to-regexp.589a357b.js";import"./react-is.e26aad9c.js";import"./hoist-non-react-statics.726cf55f.js";var l=function(t){var n=c();return n.displayName=t,n},h=l("Router-History"),m=l("Router"),f=function(n){function o(t){var o;return(o=n.call(this,t)||this).state={location:t.history.location},o._isMounted=!1,o._pendingLocation=null,t.staticContext||(o.unlisten=t.history.listen((function(t){o._isMounted?o.setState({location:t}):o._pendingLocation=t}))),o}t(o,n),o.computeRootMatch=function(t){return{path:"/",url:"/",params:{},isExact:"/"===t}};var r=o.prototype;return r.componentDidMount=function(){this._isMounted=!0,this._pendingLocation&&this.setState({location:this._pendingLocation})},r.componentWillUnmount=function(){this.unlisten&&(this.unlisten(),this._isMounted=!1,this._pendingLocation=null)},r.render=function(){return e.createElement(m.Provider,{value:{history:this.props.history,location:this.state.location,match:o.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},e.createElement(h.Provider,{children:this.props.children||null,value:this.props.history}))},o}(e.Component);e.Component;var d=function(n){function o(){return n.apply(this,arguments)||this}t(o,n);var e=o.prototype;return e.componentDidMount=function(){this.props.onMount&&this.props.onMount.call(this,this)},e.componentDidUpdate=function(t){this.props.onUpdate&&this.props.onUpdate.call(this,this,t)},e.componentWillUnmount=function(){this.props.onUnmount&&this.props.onUnmount.call(this,this)},e.render=function(){return null},o}(e.Component),v={},y=0;function C(t,n){return void 0===t&&(t="/"),void 0===n&&(n={}),"/"===t?t:function(t){if(v[t])return v[t];var n=u.compile(t);return y<1e4&&(v[t]=n,y++),n}(t)(n,{pretty:!0})}function M(t){var o=t.computedMatch,r=t.to,s=t.push,c=void 0!==s&&s;return e.createElement(m.Consumer,null,(function(t){t||p(!1);var s=t.history,u=t.staticContext,l=c?s.push:s.replace,h=i(o?"string"==typeof r?C(r,o.params):n({},r,{pathname:C(r.pathname,o.params)}):r);return u?(l(h),null):e.createElement(d,{onMount:function(){l(h)},onUpdate:function(t,o){var e=i(o.to);a(e,n({},h,{key:e.key}))||l(h)},to:r})}))}var x={},E=0;function b(t,n){void 0===n&&(n={}),("string"==typeof n||Array.isArray(n))&&(n={path:n});var o=n,e=o.path,r=o.exact,i=void 0!==r&&r,a=o.strict,s=void 0!==a&&a,c=o.sensitive,p=void 0!==c&&c;return[].concat(e).reduce((function(n,o){if(!o&&""!==o)return null;if(n)return n;var e=function(t,n){var o=""+n.end+n.strict+n.sensitive,e=x[o]||(x[o]={});if(e[t])return e[t];var r=[],i={regexp:u(t,r,n),keys:r};return E<1e4&&(e[t]=i,E++),i}(o,{end:i,strict:s,sensitive:p}),r=e.regexp,a=e.keys,c=r.exec(t);if(!c)return null;var l=c[0],h=c.slice(1),m=t===l;return i&&!m?null:{path:o,url:"/"===o&&""===l?"/":l,isExact:m,params:a.reduce((function(t,n,o){return t[n.name]=h[o],t}),{})}}),null)}var g=function(o){function r(){return o.apply(this,arguments)||this}return t(r,o),r.prototype.render=function(){var t=this;return e.createElement(m.Consumer,null,(function(o){o||p(!1);var r=t.props.location||o.location,i=t.props.computedMatch?t.props.computedMatch:t.props.path?b(r.pathname,t.props):o.match,a=n({},o,{location:r,match:i}),s=t.props,c=s.children,u=s.component,l=s.render;return Array.isArray(c)&&function(t){return 0===e.Children.count(t)}(c)&&(c=null),e.createElement(m.Provider,{value:a},a.match?c?"function"==typeof c?c(a):c:u?e.createElement(u,a):l?l(a):null:"function"==typeof c?c(a):null)}))},r}(e.Component);e.Component;var _=function(o){function r(){return o.apply(this,arguments)||this}return t(r,o),r.prototype.render=function(){var t=this;return e.createElement(m.Consumer,null,(function(o){o||p(!1);var r,i,a=t.props.location||o.location;return e.Children.forEach(t.props.children,(function(t){if(null==i&&e.isValidElement(t)){r=t;var s=t.props.path||t.props.from;i=s?b(a.pathname,n({},t.props,{path:s})):o.match}})),i?e.cloneElement(r,{location:a,computedMatch:i}):null}))},r}(e.Component);e.useContext;export{f as R,_ as S,g as a,M as b,m as c,b as m};
