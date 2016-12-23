class Bookmark < ApplicationRecord
  has_many :bookmark_tags
  has_many :tags, through: :bookmark_tags

  # NOTE: possible name changes (post or blog)
  enum resource_type: { "blog/post" => 0, "video" => 1, "conversation thread" => 2, "book/publication" => 3, "other" => 4}

  validates :display_name, presence: true
  validates :description, presence: true
  validates :source, presence: true
  validates :resource_type, presence: true
  validates :url, presence: true
  validates :rating, presence: true

  def tag_attributes=(tag_attributes)
    tag_attributes[:tag_names].each do |tag_name|
      tag = Tag.find_or_create_by(name: tag_name.downcase)
      self.tags << tag
    end
  end

end
