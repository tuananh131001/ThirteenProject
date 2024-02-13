# frozen_string_literal: true

class SidebarComponent < ViewComponent::Base
  def current_controller?(names)
    request.path.include? names
  end
end
