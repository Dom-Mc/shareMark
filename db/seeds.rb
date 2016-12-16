# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# https://github.com/stympy/faker

[Bookmark, Tag].each do |table|
  table.delete_all
end

40.times do
  Tag.create!(
    name: Faker::Internet.domain_word
  )
end

20.times do
  bookmark = Bookmark.create!(
    display_name: Faker::Lorem.sentence, # Building rails templates
    description: Faker::Lorem.paragraph(4, true), # "long string of random text (up to 500 characters) optional"
    source: Faker::Internet.domain_word, # overstack
    source_type: Faker::Number.between(1, 3), #enum value ()
    url: Faker::Internet.url, # www.example.com/post5.html
    rating: Faker::Number.between(1, 100) # number
  )

  4.times do
    bookmark.tags << Tag.find(Faker::Number.between(Tag.first.id, Tag.last.id))
  end

end
