class Bookmark < ApplicationRecord
  has_many :bookmark_tags
  has_many :tags, through: :bookmark_tags

  enum source_type: { "Post" => 0, "Publication" => 1, "Video" => 2, "Thread" => 3, "Other" => 4}
end
