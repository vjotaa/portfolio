export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","bear.gif","cyberpunk_2077.jpeg","family.jpeg","favicon.png","frog.gif","hi.png","interestellar.jpeg","ipac_pay_web.png","ipacpay_mobile.png","me.png","meme.gif","monster.gif","room.gif","tradersplanet_chatroom.png","tradersplanet_project.png","vjotaa.gif","yazz.gif"]),
	mimeTypes: {".jpg":"image/jpeg",".gif":"image/gif",".jpeg":"image/jpeg",".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-9389c023.js","imports":["_app/immutable/start-9389c023.js","_app/immutable/chunks/index-abf3d057.js","_app/immutable/chunks/singletons-2f69dbe3.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/designs",
				pattern: /^\/designs\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/illustrations",
				pattern: /^\/illustrations\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/projects/[id]",
				pattern: /^\/projects\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
