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

tags = [
  'ActionScript',
  'Algorithm',
  'Array',
  'API',
  'Babel',
  'Background thread',
  'Batch job',
  'Binary Search',
  'Branch',
  'Bug tracking',
  'CoffeeScript',
  'Concatenation',
  'Control flow',
  'CSS',
  'Cygwin',
  'Debug',
  'Django',
  'DOM',
  'ECMAScript',
  'Encapsulation',
  'Eval',
  'Events',
  'Exception handling',
  'Hash',
  'Haskell',
  'Heap',
  'HTML',
  'IDE',
  'Inheritance',
  'Java',
  'JavaScript',
  'JSON',
  'Karel',
  'Lambda',
  'LISP',
  'Middleware',
  'Module',
  'NaN',
  'Node.js',
  'Nodelist',
  'Null',
  'Object-oriented programming',
  'Objective-C',
  'Perl',
  'PHP',
  'Polymorphism',
  'Python',
  'Rails',
  'Recursion',
  'Recursive',
  'Regex',
  'Regular expression',
  'Reserved word',
  'Ruby',
  'Seed',
  'SOAP',
  'Socket',
  'SQL',
  'Tuple',
  'Unit test',
  'VIM',
  'Web development',
  'XML',
]

tags.each do |tag|
  Tag.create!(name: tag.downcase)
end

200.times do
  bookmark = Bookmark.create!(
    display_name: (Faker::Lorem.sentence).chop, # Building rails templates
    description: Faker::Lorem.paragraph(1, true, 20), # "long string of random text (up to 2500 characters) optional"
    source: Faker::Internet.domain_word, # overstack
    resource_type: Faker::Number.between(1, 3), #enum value ()
    url: (Faker::Internet.domain_word + '.' + Faker::Internet.domain_suffix + '/') + Faker::Internet.slug(nil, '/'), # www.example.com/post5.html
    rating: Faker::Number.between(1, 1000), # number
  )

  5.times do
    bookmark.tags << Tag.find(rand(Tag.first.id..Tag.last.id))
  end

end
