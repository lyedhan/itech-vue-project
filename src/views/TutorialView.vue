<script setup lang="ts"></script>
<template>
  <h1 class="text-3xl font-bold text-mist-300 mb-2">Tutorial</h1>
  <hr class="border-b text-mist-800 mt-6 mb-4" />
  <div class="flex flex-col">
    <section class="mb-4">
      <h2 class="text-xl font-bold text-mist-300 mb-1">Introduction</h2>
      <div class="text-mist-600">
        This tutorial will guide you through the installation, and then later through the creation
        of a Vue.js project that will showcase some of its features. Hopefully this will convince
        you to look into the framework in the future!
      </div>
    </section>
    <section class="mb-4">
      <h2 class="text-xl font-bold text-mist-300 mb-1">Prerequisites</h2>
      <div class="text-mist-600 flex flex-col gap-4">
        <p>
          This tutorial requires you to have at least a basic understanding of: HTML, CSS and
          JavaScript.
        </p>
        <p>
          Additionally, you will need to have installed: <strong>Visual Studio Code</strong>,
          <strong>Docker Desktop</strong>, and the <strong>Dev Containers</strong> extension for VS
          Code.
        </p>
      </div>
    </section>
    <section class="mb-4">
      <h2 class="text-xl font-bold text-mist-300 mb-1">Setting up the Docker Container</h2>
      <div class="text-mist-600 flex flex-col gap-4">
        <p>
          First, create a folder that you want to keep the project in, and open it in Visual Studio
          Code.
        </p>
        <p>
          Then, do CTRL+SHIFT+P, and look for
          <strong>Dev Containers: Open Folder in Container...</strong>, then select
          <strong>Add configuration to user data folder</strong>. From the many environments shown,
          choose Node.js & Typescript, and the default version. We don't need any additional
          features for the purpose of this tutorial.
        </p>
        <p>Congratulations! You've set up your docker for this tutorial.</p>
      </div>
    </section>
    <section>
      <h2 class="text-xl font-bold text-mist-300 mb-1">Vue.js Installation</h2>
      <div class="text-mist-600 flex flex-col gap-4">
        <p>
          Now that we have a container set up, we can install Vue itself. Open a new terminal, and
          type:
        </p>
        <div
          class="inline-block w-full bg-[#030405] border border-mist-900 p-4 rounded-2xl text-mist-600 text-sm"
        >
          <p class="uppercase text-mist-300 font-mono text-xs">&lt;/&gt; bash</p>
          <strong>npm</strong> create vue@latest
        </div>
        <p>Press enter, and when enter the following prompts as detailed in the image.</p>
        <img
          src="../img/tutorial/installation_instructions.png"
          alt="Installation"
          class="md:mb-2 md:mt-2 rounded-2xl max-w-[26rem] mx-auto aspect-auto object-cover"
        />
        <p>
          As it usefully points out in the terminal, now you should change directories to your newly
          created Vue project and install the packages:
        </p>
        <div
          class="inline-block w-full bg-[#030405] border border-mist-900 p-4 rounded-2xl text-mist-600 text-sm"
        >
          <p class="uppercase text-mist-300 font-mono text-xs">&lt;/&gt; bash</p>
          <p><strong>cd</strong> vue-tutorial</p>
          <p><strong>npm</strong> install</p>
        </div>
        <p>
          Sit tight, it might take a little bit to load and install all the packages, but eventually
          you should get a success message along these lines.
        </p>
        <img
          src="../img/tutorial/successful_installation.png"
          alt=""
          class="md:mb-6 md:mt-2 rounded-2xl max-w-[26rem] mx-auto aspect-auto object-cover"
        />
      </div>
    </section>
    <section>
      <h2 class="text-xl font-bold text-mist-300 mb-1">Exposing and Loading Project</h2>
      <div class="text-mist-600 space-y-4 block">
        <p>
          Now that everything's installed successfully, we only have one more thing to do before we
          can load our Vue.js project!
        </p>
        <p>
          Search for a <code>package.json</code> file, and within that file look for the highlighted
          line in the image, and change it to <code>"dev": "vite --host 0.0.0.0"</code>. This is
          necessary so that we can access Vue from outside the Docker container it is in.
        </p>
        <img
          src="../img/tutorial/dev_host.png"
          alt=""
          class="md:mb-6 md:mt-2 rounded-2xl max-w-full mx-auto aspect-auto object-cover"
        />
        <p>Now that it's configured, we can start our Vue/Vite instance like so:</p>
        <div
          class="inline-block w-full bg-[#030405] border border-mist-900 p-4 rounded-2xl text-mist-600 text-sm"
        >
          <p class="uppercase text-mist-300 font-mono text-xs">&lt;/&gt; bash</p>
          <p><strong>npm</strong> run dev</p>
        </div>
        <p>
          Once launched, you can see all the commands by pressing H + Enter. Press
          <strong>O + Enter</strong> in order to launch an instance in your browser!
        </p>
        <img
          src="../img/tutorial/active_menu.png"
          alt=""
          class="md:mb-6 md:mt-2 rounded-2xl max-w-[26rem] mx-auto aspect-auto object-cover"
        />
      </div>
    </section>
    <section>
      <h2 class="text-xl font-bold text-mist-300 mb-1">Complete Installation!</h2>
      <div class="text-mist-600 space-y-4 block">
        <p>
          Good job! You've created a bare-bones Vue.js web project. Now we have a base to work from.
          Follow the next part of the tutorial on the
          <RouterLink to="/tutorial2"><strong>Development Tutorial</strong></RouterLink> page.
        </p>
        <img
          src="../img/tutorial/web_base.png"
          alt=""
          class="md:mb-6 md:mt-2 rounded-2xl max-w-full mx-auto aspect-auto object-cover"
        />
      </div>
    </section>

    <div class="h-50"></div>
  </div>
</template>
<style scoped>
strong {
  color: var(--color-emerald-600);
}

code {
  color: var(--color-mist-300);
}
</style>
