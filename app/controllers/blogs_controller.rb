class BlogsController < ApplicationController
  def create
    @blog = Blog.new(blog_params)
    if @blog.save
      flash[:notice] = "Blog is successfully created"
      redirect_to @blog
    else
      format.html { render :new, status: :unprocessable_entity }
    end
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

  def edit
    @blog = Blog.find(params[:id])
  end

  def update
    @blog = Blog.find(params[:id])

    if @blog.update(blog_params)
      redirect_to @blog
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @blog = Blog.find(params[:id])
    @blog.destroy
    redirect_to blogs_path, status: :see_other
  end

  private

  def blog_params
    params.require(:blog).permit(:title, :content)
  end
end
