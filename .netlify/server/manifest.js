export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.ico","img/og-image.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.7a9c731d.js","app":"_app/immutable/entry/app.1a48e793.js","imports":["_app/immutable/entry/start.7a9c731d.js","_app/immutable/chunks/index.f86d78c0.js","_app/immutable/chunks/singletons.503ba141.js","_app/immutable/chunks/index.ae718bad.js","_app/immutable/chunks/control.c2cf8273.js","_app/immutable/entry/app.1a48e793.js","_app/immutable/chunks/index.f86d78c0.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js'))
		],
		routes: [
			{
				id: "/(app)",
				pattern: /^\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/api/data-env",
				pattern: /^\/api\/data-env\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/data-env/_server.ts.js'))
			},
			{
				id: "/api/geo",
				pattern: /^\/api\/geo\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/geo/_server.ts.js'))
			},
			{
				id: "/(debug)/debug/content",
				pattern: /^\/debug\/content\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/health",
				pattern: /^\/health\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/health/_server.ts.js'))
			},
			{
				id: "/version",
				pattern: /^\/version\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/version/_server.ts.js'))
			},
			{
				id: "/(app)/[mode]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"mode","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/(app)/[mode]/[variableGroup]",
				pattern: /^\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"mode","optional":false,"rest":false,"chained":false},{"name":"variableGroup","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/(app)/[mode]/[variableGroup]/[variable]",
				pattern: /^\/([^/]+?)\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"mode","optional":false,"rest":false,"chained":false},{"name":"variableGroup","optional":false,"rest":false,"chained":false},{"name":"variable","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/(app)/[mode]/[variableGroup]/[variable]/[classification]",
				pattern: /^\/([^/]+?)\/([^/]+?)\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"mode","optional":false,"rest":false,"chained":false},{"name":"variableGroup","optional":false,"rest":false,"chained":false},{"name":"variable","optional":false,"rest":false,"chained":false},{"name":"classification","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/(app)/[mode]/[variableGroup]/[variable]/[classification]/[category]",
				pattern: /^\/([^/]+?)\/([^/]+?)\/([^/]+?)\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"mode","optional":false,"rest":false,"chained":false},{"name":"variableGroup","optional":false,"rest":false,"chained":false},{"name":"variable","optional":false,"rest":false,"chained":false},{"name":"classification","optional":false,"rest":false,"chained":false},{"name":"category","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 10 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
