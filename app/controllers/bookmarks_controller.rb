class BookmarksController < ApplicationController

  def index
    bookmarks = Bookmark.all
    render json: bookmarks
  end

  def create
    bookmark = Bookmark.new(bookmark_params)
    binding.pry
    if bookmark.save
      render json: bookmark
    else
      render json: { errors: bookmark.errors.full_messages },
                     status: :unprocessable_entity
    end
  end

  def show
    bookmark = Bookmark.find(params[:id])
    render json: bookmark
  end

  private
    # TODO: add strong params
    def bookmark_params
      params.require(:bookmark).permit(:display_name, :description, :source, :source_type, :url, :rating)
    end

end
