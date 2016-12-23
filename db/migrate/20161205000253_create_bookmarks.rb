class CreateBookmarks < ActiveRecord::Migration[5.0]
  def change
    create_table :bookmarks do |t|
      t.string :display_name
      t.text :description
      t.string :source
      t.integer :resource_type
      t.string :url
      t.integer :rating, default: 0, null: false

      t.timestamps
    end
  end
end
