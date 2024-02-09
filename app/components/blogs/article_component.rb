
class Blogs::ArticleComponent < ViewComponent::Base
  def initialize(article:)
    @article= article
  end
end
