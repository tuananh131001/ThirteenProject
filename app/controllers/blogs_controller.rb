class BlogsController < ApplicationController
  def create
    @blog = Blog.new(blog_params)
    @blog.save
    redirect_to @blog
  end

  def index
    @blogs = Blog.all
  end

  def show
    @blog = Blog.find(params[:id])
  end

  def new
    @blog = Blog.new
  end

  def update
    @blog = Blog.find(params[:id])

    if @blog.update(blog_params)
      redirect_to @blog
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def delete
    @blog = Blog.find(params[:id])
    @blog.destroy
    redirect_to root_path, status: :see_other
  end

  private

  def blog_params
    params.require(:blog).permit(:title, :content)
  end
end
