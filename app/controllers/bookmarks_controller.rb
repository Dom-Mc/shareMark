class BookmarksController < ApplicationController

  def index
    bookmarks = Bookmark.all
    render json: bookmarks
  end

  def create
    bookmark = Bookmark.new(bookmark_params)
    if bookmark.save
      render json: { success: bookmark, status: "success"}
    else
      render json: { errors: bookmark.errors.full_messages,
                     status: "error" }
    end
  end

  def update
    bookmark = Bookmark.find(params[:id])
    if bookmark.save(bookmark_params)
      render json: { success: bookmark, status: "success"}
    else
      render json: { errors: bookmark.errors.full_messages,
                    status: "error" }
    end
  end

  def show
    bookmark = Bookmark.find(params[:id])
    render json: bookmark
  end

  def filter
    bookmarks = Bookmark.joins(:tags).where(tags: { name: params[:name] })
    render json: bookmarks
  end

  private
    def bookmark_params
      params.require(:bookmark).permit(:display_name, :description, :source, :resource_type, :url, :rating,
      tag_attributes:[
        tag_names: []
        ]
      )
    end

end
