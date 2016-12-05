class BookmarkSerializer < ActiveModel::Serializer
  attributes :id, :description, :display_name, :rating, :source, :source_type, :url
  has_many :tags
end
