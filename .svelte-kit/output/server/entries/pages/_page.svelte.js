import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../chunks/index.js";
/* empty css                */import { G as GridImages } from "../../chunks/GridImages.js";
const ProjectList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const tradersplanet_project = new URL("../../../static/tradersplanet_project.png", import.meta.url).href;
  const tradersplanet_chatroom = new URL("../../../static/tradersplanet_chatroom.png", import.meta.url).href;
  const ipacpay_web = new URL("../../../static/ipac_pay_web.png", import.meta.url).href;
  const ipacpay_mobile = new URL("../../../static/ipacpay_mobile.png", import.meta.url).href;
  const projects = [
    {
      id: 1,
      title: "Traders Planet chatroom",
      description: "Traders Planet is a company about trading information. The Chatroom is the new way to create live session classes to keep inform and teach the other users in the platform. The main goal is for users to be able to interact with the Admin or the teacher in the session.",
      role: "frontend developer",
      noRedirect: true,
      src: tradersplanet_project,
      client: "Traders Planet",
      url: "/projects/1",
      aboutRole: "This is one of many projects with this company. The goal is to make a full video chatroom with Vue.js and Node.js. My job was to create the wireframes and complete design with Adobe XD, then implement these designs using Vue.js.",
      whatILearned: "I learned how to use Vue.js and Node.js to create a full video chatroom. I also gained experience in creating wireframes and designs using Adobe XD and implementing them in a web application."
    },
    {
      id: 2,
      title: "Traders Planet Website Design",
      description: "Traders Planet is a company about trading information. The website is the way that the company shows all the information about trading and all the course that they have.",
      role: "UI Designer & Frontend developer",
      src: tradersplanet_chatroom,
      noRedirect: true,
      client: "Traders Planet",
      url: "/projects/2",
      aboutRole: "This was one of my first projects as a UI designer. I had some experience with the tool, but I wanted to learn more and improve my knowledge in Frontend Development. It was a great experience and I learned a lot about design best practices.",
      whatILearned: "I learned more about UI design and gained experience in Frontend Development. I also gained an understanding of design best practices."
    },
    {
      id: 3,
      title: "IPAC PAY MOBILE",
      description: "IPAC PAY is a platform that brings benefits for Mexican workers, you can obtain a loan without papers, credit score, history or going to the branch. In this app you can request a loan and card, check your balance, your movements and account statements. Soon you can recharge your cell phone and pay your bill through the app.",
      role: "Frontend developer Mobile",
      src: ipacpay_mobile,
      noRedirect: true,
      client: "Mo technologies",
      url: "/projects/3",
      aboutRole: "I worked with an UI/UX designer and a Backend Developer. I was in charge of implementing all the designs provided by the UI designer and handling all the logic from the frontend side, such as animations and pages.",
      whatILearned: "I learned how to implement designs provided by UI/UX designers and handle frontend logic and animations in a mobile app."
    },
    {
      id: 4,
      title: "IPAC PAY WEB",
      description: "IPAC PAY is a platform that brings benefits for Mexican workers, you can obtain a loan without papers, credit score, history or going to the branch. In this web app you can request a loan and card, check your balance, your movements and account statements. Soon you can recharge your cell phone and pay your bill through the same.",
      role: "Frontend developer",
      src: ipacpay_web,
      noRedirect: true,
      client: "Mo technologies",
      url: "/projects/4",
      aboutRole: "I worked with an UI/UX designer, a Senior Frontend Developer, and a Backend Developer. I was responsible for making changes to some of the designs provided by the UI designer and the Senior Frontend developer, as well as handling all the frontend logic and animations.",
      whatILearned: "I learned how to work with a team of developers and make changes to designs provided by UI"
    }
  ];
  return `<div class="${"w-full"}"><p class="${"bold lg:text-3xl max-sm:text-2-1xl max-sm:text-center text-blackLight font-Fraunces font-bold"}">Development projects
  </p>
  <div class="${"mt-20"}"><div class="${"flex items-center justify-center w-full"}">${validate_component(GridImages, "GridImages").$$render($$result, { photos: projects, gridNumber: 3 }, {}, {})}</div></div></div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".img-animati.svelte-11tjlk2{transform:rotate(-50deg);animation:svelte-11tjlk2-shakeAnimation 1s infinite}@keyframes svelte-11tjlk2-shakeAnimation{0%{transform:rotate(-50deg)}50%{transform:rotate(50deg)}100%{transform:rotate(-50deg)}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const imgUrl = new URL("../../static/hi.png", import.meta.url).href;
  const pixel1 = new URL("../../static/bear.gif", import.meta.url).href;
  const pixel2 = new URL("../../static/room.gif", import.meta.url).href;
  const draw3 = new URL("../../static/3.jpg", import.meta.url).href;
  let photos = [
    { src: pixel1, url: "/illustrations" },
    { src: draw3, url: "/illustrations" },
    { src: pixel2, url: "/illustrations" }
  ];
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-80plm2_START -->${$$result.title = `<title>Victor Manrique</title>`, ""}<!-- HEAD_svelte-80plm2_END -->`, ""}
<div class="${"w-full p-10"}"><p class="${"max-sm:text-2-1xl bold md:text-3xl lg:text-4xl font-bold flex text-blackLight"}"><span><img${add_attribute("src", imgUrl, 0)} class="${"sm:hidden max-sm:text-2xl max-sm:hidden md:hidden lg:h-28 lg:block ml-1 img-animati svelte-11tjlk2"}" alt="${""}"></span>Hi there, my name is Victor.
  </p>
  <p class="${"bold max-sm:text-2-1xl md:text-3xl lg:text-4xl font-bold text-blackLight"}">A frontend developer who loves building things.
  </p>
  <div class="${"mt-20"}"><div class="${"flex items-center justify-center flex-col sm:w-full lg:w-full "}">${validate_component(ProjectList, "ProjectList").$$render($$result, {}, {}, {})}

      <p class="${"bold text-3xl max-sm:text-2-1xl max-sm:text-center text-blackLight mt-10 font-Fraunces font-bold"}">I also make some cool illustrations, check it out
      </p>
      <div class="${"mt-20"}"><div class="${"flex items-center justify-center w-full"}">${validate_component(GridImages, "GridImages").$$render($$result, { photos, gridNumber: 3 }, {}, {})}</div></div></div></div>
</div>`;
});
export {
  Page as default
};
