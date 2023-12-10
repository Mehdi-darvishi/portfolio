var resume = `
				<!-- Resume -->

    <div id="resume" class="scroll-mt-24">
        <h2
            class="font-poppins text-4xl text-white dark:text-slate-200 font-semibold flex items-center mb-10 fade-in"
        >
            My Resume
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-10 h-10 text-gray-400 ml-5"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                ></path>
            </svg>
        </h2>
        <div class="section_wrapper fade-in">
            <!-- Educations -->
            <div class="fade-in">
                <h3
                    class="text-2xl text-gray-600 dark:text-slate-300 font-semibold flex items-center"
                >
                    Education
                </h3>
                <div
                    x-data="educations"
                    class="grid sm:grid-cols-3 lg:gap-4 gap-4 mt-5"
                >
                    <template x-for="edu in educations">
                        <div
                            class="rounded-2xl lg:p-5 p-4 shadow-sm bg-red-50 dark:bg-slate-800"
                        >
                            <h4
                                class="text-gray-700 dark:text-slate-300 text-2xl font-semibold"
                                x-text="edu.degree"
                            ></h4>
                            <h3
                                class="text-gray-500 dark:text-slate-400 text-lg italic mt-2"
                                x-text="edu.institute"
                            ></h3>
                            <p
                                class="text-gray-500 dark:text-slate-400 text-xs"
                                x-text="edu.years"
                            ></p>
                        </div>
                    </template>
                </div>
            </div>
            <!-- Experiences -->
            <div class="fade-in">
                <h3
                    class="text-2xl text-gray-600 dark:text-slate-300 font-semibold flex items-center"
                >
                    Experiences
                </h3>
                <div
                    x-data="experiences"
                    class="grid sm:grid-cols-3 lg:gap-4 gap-4 mt-5"
                >
                    <template x-for="exp in experiences">
                        <div
                            class="rounded-2xl lg:p-5 p-4 bg-blue-50 dark:bg-slate-800 shadow-sm"
                        >
                            <h4
                                class="text-gray-700 dark:text-slate-300 text-2xl font-semibold"
                                x-text="exp.title"
                            ></h4>
                            <h3
                                class="text-gray-500 dark:text-slate-400 text-lg italic mt-2"
                                x-text="exp.company"
                            ></h3>
                            <p
                                class="text-gray-500 dark:text-slate-400 text-xs"
                                x-text="exp.years"
                            ></p>
                        </div>
                    </template>
                </div>
            </div>

            <div class="mt-5 grid sm:grid-cols-2 gap-8 fade-in">
                <!-- Skills -->
                <div>
                    <h3
                        class="text-2xl text-gray-600 dark:text-slate-300 font-semibold flex items-center"
                    >
                        Skills
                    </h3>
                    <div x-data="skills" class="space-y-4 mt-5">
                        <template x-for="skill in skills">
                            <div>
                                <div class="flex justify-between">
                                    <p
                                        class="text-gray-700 font-semibold text-sm"
                                        x-text="skill.name"
                                    ></p>
                                    <p
                                        class="text-sm text-gray-700 font-semibold pr-2"
                                        x-text="skill.percent"
                                    ></p>
                                </div>
                                <div
                                    class="h-1 rounded-full overflow-hidden relative w-full bg-gray-200 dark:bg-slate-700 mt-1"
                                >
                                    <div
                                        class="absolute left-0 top-0 h-full"
                                        :class="skill.bgClass && skill.bgClass"
                                        :style="{width: skill.percent+'%'}"
                                    ></div>
                                </div>
                            </div>
                        </template>
                    </div>
                </div>

                <!-- Knowledge -->
                <div>
                    <h3
                        class="text-2xl text-gray-600 dark:text-slate-300 font-semibold flex items-center"
                    >
                        Knowledge
                    </h3>
                    <div x-data="knowledge" class="mt-5 flex gap-2 flex-wrap">
                        <template x-for="k in knowledge">
                            <div
                                class="flex-shrink-0 px-4 py-2 rounded-lg shadow-sm bg-white dark:text-slate-300 dark:bg-slate-800"
                                x-text="k"
                            ></div>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </div>

<!-- Resume end -->
				`;

const about = `
<div id="about" class="scroll-mt-24">
<h2 class="section-title fade-in">
    About Me
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
         stroke="currentColor" class="w-10 h-10 text-gray-400 ml-5">
        <path stroke-linecap="round" stroke-linejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
    </svg>
</h2>
<div class="section_wrapper fade-in">
    <div>
        <h3 class="sub-title">
            My Story.
        </h3>
        <div class="xl:pr-40 lg:pr-10 space-y-4 mt-4 fade-in">
            <p class="text-gray-500 dark:text-slate-400">
                Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Atque beatae debitis, ea fugiat id mollitia natus nostrum optio
                qui voluptatem!
            </p>
            <p class="text-gray-500 dark:text-slate-400">
                Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Cum molestiae nulla, quaerat reiciendis saepe ullam voluptates!
                Commodi, deserunt, dolores doloribus eligendi, et eveniet fugit illo in laboriosam
                molestiae natus neque nobis optio provident quas. Accusamus aliquam harum minima
                quisquam soluta?
            </p>
        </div>
    </div>
    <div class="fade-in">
        <h3 class="sub-title">
            My Expertise.
        </h3>
        <div x-data="expertises" class="grid sm:grid-cols-2 lg:gap-4 gap-4 mt-5">
            <template x-for="exp in expertises">
                <!-- Single expertise card -->
                <div class="rounded-2xl lg:p-6 p-4 flex xl:flex-row lg:flex-col flex-col md:flex-row gap-4 xl:gap-8 lg:gap-6 items-start shadow-sm bg-indigo-50 dark:bg-slate-800">
                    <div class="flex-shrink-0">
                        <img :src="exp.image" class="xl:w-16 w-14">
                    </div>
                    <div class="flex-grow">
                        <h4 class="text-gray-700 dark:text-slate-300 text-2xl font-semibold"
                            x-text="exp.title"></h4>
                        <p class="mt-3 text-gray-500 dark:text-slate-400 line-clamp-4"
                           x-text="exp.description"></p>
                    </div>
                </div>
            </template>
        </div>
    </div>
    <div class="fade-in">
        <h3 class="text-2xl text-gray-600 dark:text-slate-300 font-semibold flex items-center">
            My Clients.
        </h3>
        <div x-data="clients"
             class="mt-5 grid grid-cols-2 gap-0.5 md:grid-cols-3 rounded-xl overflow-hidden shadow-sm">
            <template x-for="client in clients">
                <div class="col-span-1 flex justify-center bg-slate-100 dark:bg-slate-800 py-8 px-8 fade-in">
                    <img class="max-h-12" :src="client">
                </div>
            </template>
        </div>
    </div>
</div>
</div>
`;
