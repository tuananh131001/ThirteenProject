# frozen_string_literal: true

class Blog < ApplicationRecord
  validates :content, presence: true
end
