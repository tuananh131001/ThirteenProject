# frozen_string_literal: true

module Front
  class ProjectCardComponent < ViewComponent::Base
    def initialize(thumbnail:, role:, url:, team_size:, title:, slug:, gradient:)
      super
      @thumbnail = thumbnail
      @role = role
      @url = url
      @team_size = team_size
      @title = title
      @slug = slug
      @gradient = gradient
    end
  end
end
