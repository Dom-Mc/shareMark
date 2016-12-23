class TagSerializer < ActiveModel::Serializer
  attributes :id, :name
  # has_many :bookmarks
end
