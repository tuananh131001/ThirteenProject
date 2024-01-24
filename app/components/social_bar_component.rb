# frozen_string_literal: true

class SocialBarComponent < ViewComponent::Base
  erb_template <<~ERB
      <div class="flex flex-row gap-3">
      <a class="hover:opacity-80" href="https://github.com/tuananh131001">
        <%= simple_icon('GitHub', 'white', height: '32', width: '32') %>
      </a>
      <a class="hover:opacity-80" href="https://linkedin.com/in/tuananh131001">
        <%= simple_icon('linkedin', 'white', height: '32', width: '32') %>
      </a>
    </div>
  ERB
end
