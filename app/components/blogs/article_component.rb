# frozen_string_literal: true

module Blogs
  class ArticleComponent < ViewComponent::Base
    def initialize(article:)
      @article = article
    end
  end
end
