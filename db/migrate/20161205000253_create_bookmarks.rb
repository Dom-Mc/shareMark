class CreateBookmarks < ActiveRecord::Migration[5.0]
  def change
    create_table :bookmarks do |t|
      t.string :display_name
      t.text :description
      t.string :source
      t.integer :source_type
      t.string :url
      t.integer :rating

      t.timestamps
    end
  end
end
