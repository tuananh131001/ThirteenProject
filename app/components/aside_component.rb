# frozen_string_literal: true

class AsideComponent < ViewComponent::Base
  erb_template <<~ERB
      <aside class="md:w-[150px] md:flex-shrink-0 -mx-4 md:mx-0 md:px-0">
      <div class="lg:sticky lg:top-20">
        <div class="ml-2 md:ml-[12px] mb-2 px-4 md:px-0 md:mb-8 space-y-10 flex flex-col md:flex-row items-start "><a aria-label="Nguyen Tuan Anh" href="/">
            <div style="transform: none;">
              <div class="dark:text-white text-7xl font-bold shadow-sm text-orange-600">A</div>
            </div>
          </a></div>
        <nav class="flex flex-row md:flex-col items-start relative overflow-scroll px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative" id="nav">
          <div class="flex flex-row md:flex-col space-x-0 pr-10 mb-2 mt-2 md:mt-0">
            <div class="hidden md:block">
              <div class="absolute bg-neutral-100 dark:bg-neutral-800 h-[34px] rounded-md z-[-1]" style="opacity: 1; transform: none; width: 64px;"></div>
            </div>
            <div class="block md:hidden">
              <div class="absolute bg-neutral-100 dark:bg-neutral-800 h-[34px] rounded-md z-[-1]" style="opacity: 1; transform: none; width: 64px;"></div>
            </div>
            <a class="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 py-[5px] px-[10px] hover:cursor-pointer font-bold" href="/">home</a><a class="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 py-[5px] px-[10px] hover:cursor-pointer text-neutral-500" href="/repos">repos</a><a class="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 py-[5px] px-[10px] hover:cursor-pointer text-neutral-500" href="/blogs">blogs</a>
            <div class="pl-2 pt-2"> <button aria-label="Toggle Dark Mode" type="button" class=" w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center hover:ring-2 ring-gray-300 transition-all"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="w-5 h-5 text-gray-800 dark:text-gray-200"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg></button></div>
          </div>
        </nav></div>
    </aside>
  ERB
end
