class Bookmark < ApplicationRecord
  has_many :bookmark_tags
  has_many :tags, through: :bookmark_tags

  # NOTE: possible name changes (post or blog)
  enum source_type: { "Blog/Post" => 0, "Video" => 1, "Conversation Thread" => 2, "Book/Publication" => 3, "Other" => 4}

  validates :display_name, length: { in: 5..75 }
end
