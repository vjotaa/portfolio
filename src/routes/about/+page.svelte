<script lang="ts">
  import "../../app.css";
  const me = new URL("../../../static/me.png", import.meta.url).href;
  const cyber = new URL("../../../static/cyberpunk_2077.jpeg", import.meta.url)
    .href;
  const inte = new URL("../../../static/interestellar.jpeg", import.meta.url)
    .href;
  const fam = new URL("../../../static/family.jpeg", import.meta.url).href;
  const thingsThatIloved = [
    {
      title: "Interestellar.",
      why: "In my opinion, Interstellar is a great film with an engaging narrative, stunning effects and a powerful score. It makes you think about the nature of time, space and human conditions. It's really an enjoyable movie to watch.",
      img: inte,
    },
    {
      title: "Playing cyberpunk 2077.",
      why: "I love playing video games, and cyberpunk 2077 is one of my favorites. I love the story, the characters, the music, and the gameplay. It's a great game to play.",
      img: cyber,
    },
    {
      title: "Having fun with my family.",
      why: "I love spending time with my family, nothing much to say here, every second with my wife, daughther and pets are amazing.",
      img: fam,
    },
  ];

  const jobs = [
    {
      company: "Lendflow",
      role: "Frontend developer",
      description:
        "Lendflow provides embedded credit infrastructure for fintech, lenders, and software companies to build, embed and launch credit products.",
      job: "Working with Vue.js the main goal was to deliver a good efficiency product to the client.",
      date: "May. 2022 - Present",
    },
    {
      company: "Perficient",
      role: "Frontend developer",
      description:
        "Perficient is the leading global digital consultancy transforming how the world’s largest enterprises and biggest brands connect with customers and grow their businesses.",
      job: "Working with Vue.js and React in order to deliver products to the client.",
      date: "Apr. 2021 - May. 2022",
    },
    {
      company: "Zemoga",
      role: "Frontend developer",
      description:
        "Since 2002, Zemoga has been supercharging clients like Walmart, Hulu, Bridgestone, Sony, and Morningstar with top digital delivery talent in the Americas.",
      job: "In this job, I was working with React and Vue in charge of a pdf realtime marker for a company in the united states.",
      date: "Sep. 2020 - Apr. 2021",
    },
    {
      company: "DRUO",
      role: "Frontend Developer",
      description:
        "DRUO is a point of sale solution that integrates inventories, payments, and business intelligence in one place. With this product, our customers work less and sell more.",
      job: "My job consists in making web applications using Angular and Ionic with the latest version.",
      date: "Aug. 2019 - Jul. 2020",
    },
    {
      company: "MO technologies",
      role: "Frontend Developer",
      description:
        "MO is a Fintech that aims at revolutionizing the credit scoring industry and promoting financial inclusion.",
      job: "My job consists in making web and mobile applications for company's partners, using Angular and Ionic with the latest version.",
      date: "Oct. 2018 - Aug. 2019",
    },
    {
      company: "Orion Corp",
      role: "Frontend Developer",
      description: "Orion Corp is a constructor company.",
      job: "I was in charge to maintain an ERP for a constructor company with Angular as frontend tool.",
      date: "Jan. 2017 - Jan. 2018",
    },
  ];
</script>

<div class="w-full px-10">
  <div class="flex justify-center">
    <div class="container justify-center flex">
      <div
        class="grid lg:grid-cols-2 sm:grid-cols-1 sm:justify-items-center sm:w-full lg:w-8/12  gap-20"
      >
        <img src={me} class="image" alt="me" />
        <div>
          <p class="title font-Fraunces font-light">
            I am a frontend developer currently working on Vue. I have
            experience working with <span class="font-bold text-blackLight"
              >React, Angular, Vue, and Svelte.</span
            > My main focus is creating visually stunning and intuitive interfaces.
          </p>
          <p class="title font-Fraunces font-light">
            I enjoy working with <span class="font-bold text-blackLight"
              >CSS and animations</span
            >to bring my interfaces to life.
            <span class="font-bold text-blackLight"
              >illustrator and UI designer in my free time.
            </span>
          </p>
          <p class="title font-Fraunces font-light">
            I have a passion for video games. This passion helps me to have a
            unique perspective on user experience and design. <span
              class="font-bold text-blackLight"
              >I am always looking to learn new technologies and improve my
              skills</span
            > to deliver the best results for my clients.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="w-full flex mt-20">
    <div
      class="grid lg:grid-cols-2 sm:grid-cols-1 sm:justify-items-center lg:justify-items-start sm:w-full lg:w-full gap-7"
    >
      <div>
        <p class="text-2xl text-blackLight font-bold font-Fraunces mb-10">
          Contact
        </p>

        <div class="mb-10">
          <p class="font-Fraunces font-light">
            <span class="text-blackLight">Email:</span>
            <a href="mailto:victorjmanrique@gmail.com" class="text-blackLight"
              >victorjmanrique@gmail.com</a
            >
          </p>
        </div>
        <p class="text-2xl text-blackLight font-bold font-Fraunces mb-10">
          Things that I love.
        </p>
        <div
          class="grid grid-cols-1 sm:justify-items-center sm:w-full lg:w-full  gap-7"
        >
          {#each thingsThatIloved as thing}
            <div class="flex flex-col items-center">
              <img src={thing.img} class="h-80 rounded" alt="thing" />
              <p class="font-Fraunces text-blackLight font-bold text-1xl  mt-5">
                {thing.title}
              </p>
              <p class="font-Fraunces font-light  mt-5">{thing.why}</p>
            </div>
          {/each}
          <div />
        </div>
      </div>
      <div>
        <p class="text-2xl text-blackLight font-bold font-Fraunces mb-10">
          Jobs
        </p>
        {#each jobs as job}
          <div class="mb-10 jobs">
            <p class="font-Fraunces font-light">
              <span class="text-blackLight">Company:</span>
              {job.company}
            </p>
            <p class="font-Fraunces font-light">
              <span class="text-blackLight">Role:</span>
              {job.role}
            </p>
            <p class="font-Fraunces font-light">
              <span class="text-blackLight">Description:</span>
              {job.description}
            </p>
            <p class="font-Fraunces font-light">
              <span class="text-blackLight">Job:</span>
              {job.job}
            </p>
            <p class="font-Fraunces font-light">
              <span class="text-blackLight">Date:</span>
              {job.date}
            </p>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>

<style>
  .image {
    height: 600px;
    object-fit: cover;
    border-radius: 10px;
  }
  .title {
    font-size: 21px;
    margin-bottom: 2rem;
  }
  .jobs p {
    margin-bottom: 5px;
  }
</style>
