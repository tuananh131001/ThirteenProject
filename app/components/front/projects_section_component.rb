# frozen_string_literal: true

module Front
  class ProjectsSectionComponent < ViewComponent::Base
    erb_template <<~ERB
        <section>
        <h3 class="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
          Projects
        </h3>
        <div class="columns-1 gap-4 sm:columns-2 sm:grid-cols-2 sm:gap-4 sm:p-0  p-4 ">
          <%= render(Front::ProjectCardComponent.new(thumbnail: "https://user-images.githubusercontent.com/67695658/214550280-6c2b6c64-67ba-4898-a060-a0b9372adc45.png",
            role: "Team leader",
            url: "https://github.com/tuananh131001/Cardinalis-BE",
            team_size: "4 people",
            title: "Cardinalis - Microservices Social Platform ",
            slug: "style-guides-component-libraries-design-systems",
            gradient: "from-[#D8B4FE] to-[#818CF8]")) %>
          <%= render(Front::ProjectCardComponent.new(thumbnail: "https://user-images.githubusercontent.com/67695658/178662828-ff1d16e7-3934-45ad-81f7-7da284e58716.png",
            role: "Team leader",
            url: "https://github.com/tuananh131001/INTE2512_final",
            team_size: "5 people",
            title: "Open News - News Reader JavaFX",
            slug: "style-guides-component-libraries-design-systems",
            gradient: "from-[#D8B4FE] to-[#818CF8]")) %>
          <%= render(Front::ProjectCardComponent.new(
      thumbnail: "https://user-images.githubusercontent.com/67695658/180659614-01378f12-ff70-41a0-8c8e-440cb42869fc.png",
      role: "Personal",
      url: "https://github.com/tuananh131001/UNS",
      team_size: "Individual",
      title: "UNS - Image Sharing Website",
      slug: "style-guides-component-libraries-design-systems",
      gradient: "from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
      )) %>

      <%= render(Front::ProjectCardComponent.new(
      thumbnail: "https://user-images.githubusercontent.com/67695658/169047047-67115a3d-5f6f-46e3-887d-54a0378c5cce.png",
      role: "Team Leader",
      url: "https://github.com/tuananh131001/EEET2580-Front-End-Dramaholic",
      team_size: "5 people",
      title: "Dramaholic - Movie Streaming Website",
      slug: "style-guides-component-libraries-design-systems",
      gradient: "from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
      )) %>

      <%= render(Front::ProjectCardComponent.new(
      thumbnail: "https://camo.githubusercontent.com/71aaf56864ae8b5efede3da736cc8163605e61eff7f5952a31e88b61d3843447/68747470733a2f2f692e696d6775722e636f6d2f4a32356c6c39412e706e67",
      role: "Team Leader",
      url: "https://github.com/tuananh131001/Ambrosia",
      team_size: "4 people",
      title: "Ambrosia - Food application",
      slug: "style-guides-component-libraries-design-systems",
      gradient: "from-[#af9b4a] via-[#2e378b] to-[#FECACA]"
      )) %>

        </div>
        <a
          href="/repos"
          class="flex items-center mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6"
        >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="h-6 w-6 ml-1"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
              />
            </svg>
        </a>
      </section>
    ERB
  end
end
