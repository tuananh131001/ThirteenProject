# frozen_string_literal: true

class TechnologySectionComponent < ViewComponent::Base
  erb_template <<~ERB
      <section class="py-4">
      <h3 class="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
        Technologies :
      </h3>
      <p class="grid grid-cols-5 gap-4 text-5xl md:grid-cols-10">
        <%= simple_icon('ruby') %>
        <%= simple_icon('javascript', 'white', height: '32', width: '32') %>
        <%= simple_icon('rubyonrails', 'white', height: '32', width: '32') %>
        <%= simple_icon('github', 'white', height: '32', width: '32') %>
        <%= simple_icon('serverless', 'white', height: '32', width: '32') %>
      </p>
      <div class="flex gap-6 flex-col md:grid md:grid-flow-col md:grid-rows-2 md:gap-4 "></div>
    </section>
  ERB
end
