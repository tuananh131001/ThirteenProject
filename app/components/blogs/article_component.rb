
class Blogs::ArticleComponent < ViewComponent::Base
  def initialize(title:)
    @title = title
  end
end
