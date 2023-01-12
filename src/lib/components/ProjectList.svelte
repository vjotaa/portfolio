<script>
  import "../../app.css";
  import GridImages from "../../lib/components/GridImages.svelte";

  const tradersplanet_project = new URL(
    "../../../static/tradersplanet_project.png",
    import.meta.url
  ).href;
  const tradersplanet_chatroom = new URL(
    "../../../static/tradersplanet_chatroom.png",
    import.meta.url
  ).href;
  const ipacpay_web = new URL(
    "../../../static/ipac_pay_web.png",
    import.meta.url
  ).href;
  const ipacpay_mobile = new URL(
    "../../../static/ipacpay_mobile.png",
    import.meta.url
  ).href;
  const projects = [
    {
      id: 1,
      title: "Traders Planet chatroom",
      description:
        "Traders Planet is a company about trading information. The Chatroom is the new way to create live session classes to keep inform and teach the other users in the platform. The main goal is for users to be able to interact with the Admin or the teacher in the session.",
      role: "frontend developer",
      noRedirect: true,
      src: tradersplanet_project,
      client: "Traders Planet",
      url: "/projects/1",
      aboutRole:
        "This is one of many projects with this company. The goal is to make a full video chatroom with Vue.js and Node.js. My job was to create the wireframes and complete design with Adobe XD, then implement these designs using Vue.js.",
      whatILearned:
        "I learned how to use Vue.js and Node.js to create a full video chatroom. I also gained experience in creating wireframes and designs using Adobe XD and implementing them in a web application.",
    },
    {
      id: 2,
      title: "Traders Planet Website Design",
      description:
        "Traders Planet is a company about trading information. The website is the way that the company shows all the information about trading and all the course that they have.",
      role: "UI Designer & Frontend developer",
      src: tradersplanet_chatroom,
      noRedirect: true,
      client: "Traders Planet",
      url: "/projects/2",
      aboutRole:
        "This was one of my first projects as a UI designer. I had some experience with the tool, but I wanted to learn more and improve my knowledge in Frontend Development. It was a great experience and I learned a lot about design best practices.",
      whatILearned:
        "I learned more about UI design and gained experience in Frontend Development. I also gained an understanding of design best practices.",
    },
    {
      id: 3,
      title: "IPAC PAY MOBILE",
      description:
        "IPAC PAY is a platform that brings benefits for Mexican workers, you can obtain a loan without papers, credit score, history or going to the branch. In this app you can request a loan and card, check your balance, your movements and account statements. Soon you can recharge your cell phone and pay your bill through the app.",
      role: "Frontend developer Mobile",
      src: ipacpay_mobile,
      noRedirect: true,
      client: "Mo technologies",
      url: "/projects/3",
      aboutRole:
        "I worked with an UI/UX designer and a Backend Developer. I was in charge of implementing all the designs provided by the UI designer and handling all the logic from the frontend side, such as animations and pages.",
      whatILearned:
        "I learned how to implement designs provided by UI/UX designers and handle frontend logic and animations in a mobile app.",
    },
    {
      id: 4,
      title: "IPAC PAY WEB",
      description:
        "IPAC PAY is a platform that brings benefits for Mexican workers, you can obtain a loan without papers, credit score, history or going to the branch. In this web app you can request a loan and card, check your balance, your movements and account statements. Soon you can recharge your cell phone and pay your bill through the same.",
      role: "Frontend developer",
      src: ipacpay_web,
      noRedirect: true,
      client: "Mo technologies",
      url: "/projects/4",
      aboutRole:
        "I worked with an UI/UX designer, a Senior Frontend Developer, and a Backend Developer. I was responsible for making changes to some of the designs provided by the UI designer and the Senior Frontend developer, as well as handling all the frontend logic and animations.",
      whatILearned:
        "I learned how to work with a team of developers and make changes to designs provided by UI",
    },
  ];
</script>

<div class="w-full">
  <p
    class="bold lg:text-3xl max-sm:text-2-1xl max-sm:text-center  text-blackLight font-Fraunces font-bold"
  >
    Development projects
  </p>
  <div class="mt-20">
    <div class="flex items-center justify-center w-full">
      <GridImages photos={projects} gridNumber={3} />
    </div>
  </div>
</div>
