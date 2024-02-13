# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Blogs', type: :request do
  describe 'GET /create' do
    it 'returns http success' do
      get '/blogs/create'
      expect(response).to have_http_status(:success)
    end
  end

  describe 'GET /index' do
    it 'returns http success' do
      get '/blogs/index'
      expect(response).to have_http_status(:success)
    end
  end

  describe 'GET /update' do
    it 'returns http success' do
      get '/blogs/update'
      expect(response).to have_http_status(:success)
    end
  end

  describe 'GET /delete' do
    it 'returns http success' do
      get '/blogs/delete'
      expect(response).to have_http_status(:success)
    end
  end
end
